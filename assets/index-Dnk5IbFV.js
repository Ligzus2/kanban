function Zh(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function em(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var kd={exports:{}},Yi={},Sd={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xo=Symbol.for("react.element"),tm=Symbol.for("react.portal"),nm=Symbol.for("react.fragment"),rm=Symbol.for("react.strict_mode"),om=Symbol.for("react.profiler"),im=Symbol.for("react.provider"),am=Symbol.for("react.context"),lm=Symbol.for("react.forward_ref"),sm=Symbol.for("react.suspense"),um=Symbol.for("react.memo"),cm=Symbol.for("react.lazy"),Du=Symbol.iterator;function dm(e){return e===null||typeof e!="object"?null:(e=Du&&e[Du]||e["@@iterator"],typeof e=="function"?e:null)}var Cd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ed=Object.assign,_d={};function yr(e,t,n){this.props=e,this.context=t,this.refs=_d,this.updater=n||Cd}yr.prototype.isReactComponent={};yr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};yr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Pd(){}Pd.prototype=yr.prototype;function us(e,t,n){this.props=e,this.context=t,this.refs=_d,this.updater=n||Cd}var cs=us.prototype=new Pd;cs.constructor=us;Ed(cs,yr.prototype);cs.isPureReactComponent=!0;var Mu=Array.isArray,Nd=Object.prototype.hasOwnProperty,ds={current:null},jd={key:!0,ref:!0,__self:!0,__source:!0};function Fd(e,t,n){var r,o={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)Nd.call(t,r)&&!jd.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:xo,type:e,key:i,ref:a,props:o,_owner:ds.current}}function fm(e,t){return{$$typeof:xo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function fs(e){return typeof e=="object"&&e!==null&&e.$$typeof===xo}function pm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var bu=/\/+/g;function ga(e,t){return typeof e=="object"&&e!==null&&e.key!=null?pm(""+e.key):t.toString(36)}function Xo(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case xo:case tm:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+ga(a,0):r,Mu(o)?(n="",e!=null&&(n=e.replace(bu,"$&/")+"/"),Xo(o,t,n,"",function(u){return u})):o!=null&&(fs(o)&&(o=fm(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(bu,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",Mu(e))for(var l=0;l<e.length;l++){i=e[l];var s=r+ga(i,l);a+=Xo(i,t,n,s,o)}else if(s=dm(e),typeof s=="function")for(e=s.call(e),l=0;!(i=e.next()).done;)i=i.value,s=r+ga(i,l++),a+=Xo(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Mo(e,t,n){if(e==null)return e;var r=[],o=0;return Xo(e,r,"","",function(i){return t.call(n,i,o++)}),r}function hm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ee={current:null},Jo={transition:null},mm={ReactCurrentDispatcher:Ee,ReactCurrentBatchConfig:Jo,ReactCurrentOwner:ds};z.Children={map:Mo,forEach:function(e,t,n){Mo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Mo(e,function(){t++}),t},toArray:function(e){return Mo(e,function(t){return t})||[]},only:function(e){if(!fs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};z.Component=yr;z.Fragment=nm;z.Profiler=om;z.PureComponent=us;z.StrictMode=rm;z.Suspense=sm;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mm;z.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ed({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=ds.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)Nd.call(t,s)&&!jd.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:xo,type:e.type,key:o,ref:i,props:r,_owner:a}};z.createContext=function(e){return e={$$typeof:am,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:im,_context:e},e.Consumer=e};z.createElement=Fd;z.createFactory=function(e){var t=Fd.bind(null,e);return t.type=e,t};z.createRef=function(){return{current:null}};z.forwardRef=function(e){return{$$typeof:lm,render:e}};z.isValidElement=fs;z.lazy=function(e){return{$$typeof:cm,_payload:{_status:-1,_result:e},_init:hm}};z.memo=function(e,t){return{$$typeof:um,type:e,compare:t===void 0?null:t}};z.startTransition=function(e){var t=Jo.transition;Jo.transition={};try{e()}finally{Jo.transition=t}};z.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};z.useCallback=function(e,t){return Ee.current.useCallback(e,t)};z.useContext=function(e){return Ee.current.useContext(e)};z.useDebugValue=function(){};z.useDeferredValue=function(e){return Ee.current.useDeferredValue(e)};z.useEffect=function(e,t){return Ee.current.useEffect(e,t)};z.useId=function(){return Ee.current.useId()};z.useImperativeHandle=function(e,t,n){return Ee.current.useImperativeHandle(e,t,n)};z.useInsertionEffect=function(e,t){return Ee.current.useInsertionEffect(e,t)};z.useLayoutEffect=function(e,t){return Ee.current.useLayoutEffect(e,t)};z.useMemo=function(e,t){return Ee.current.useMemo(e,t)};z.useReducer=function(e,t,n){return Ee.current.useReducer(e,t,n)};z.useRef=function(e){return Ee.current.useRef(e)};z.useState=function(e){return Ee.current.useState(e)};z.useSyncExternalStore=function(e,t,n){return Ee.current.useSyncExternalStore(e,t,n)};z.useTransition=function(){return Ee.current.useTransition()};z.version="18.2.0";Sd.exports=z;var C=Sd.exports;const tt=em(C),gm=Zh({__proto__:null,default:tt},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vm=C,ym=Symbol.for("react.element"),xm=Symbol.for("react.fragment"),wm=Object.prototype.hasOwnProperty,km=vm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Sm={key:!0,ref:!0,__self:!0,__source:!0};function Dd(e,t,n){var r,o={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)wm.call(t,r)&&!Sm.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:ym,type:e,key:i,ref:a,props:o,_owner:km.current}}Yi.Fragment=xm;Yi.jsx=Dd;Yi.jsxs=Dd;kd.exports=Yi;var d=kd.exports,tl={},Md={exports:{}},We={},bd={exports:{}},Od={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,b){var T=E.length;E.push(b);e:for(;0<T;){var W=T-1>>>1,Y=E[W];if(0<o(Y,b))E[W]=b,E[T]=Y,T=W;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var b=E[0],T=E.pop();if(T!==b){E[0]=T;e:for(var W=0,Y=E.length,pn=Y>>>1;W<pn;){var Xe=2*(W+1)-1,zt=E[Xe],Oe=Xe+1,kt=E[Oe];if(0>o(zt,T))Oe<Y&&0>o(kt,zt)?(E[W]=kt,E[Oe]=T,W=Oe):(E[W]=zt,E[Xe]=T,W=Xe);else if(Oe<Y&&0>o(kt,T))E[W]=kt,E[Oe]=T,W=Oe;else break e}}return b}function o(E,b){var T=E.sortIndex-b.sortIndex;return T!==0?T:E.id-b.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],u=[],c=1,f=null,h=3,v=!1,y=!1,x=!1,k=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(E){for(var b=n(u);b!==null;){if(b.callback===null)r(u);else if(b.startTime<=E)r(u),b.sortIndex=b.expirationTime,t(s,b);else break;b=n(u)}}function w(E){if(x=!1,g(E),!y)if(n(s)!==null)y=!0,fn(P);else{var b=n(u);b!==null&&M(w,b.startTime-E)}}function P(E,b){y=!1,x&&(x=!1,m(F),F=-1),v=!0;var T=h;try{for(g(b),f=n(s);f!==null&&(!(f.expirationTime>b)||E&&!xe());){var W=f.callback;if(typeof W=="function"){f.callback=null,h=f.priorityLevel;var Y=W(f.expirationTime<=b);b=e.unstable_now(),typeof Y=="function"?f.callback=Y:f===n(s)&&r(s),g(b)}else r(s);f=n(s)}if(f!==null)var pn=!0;else{var Xe=n(u);Xe!==null&&M(w,Xe.startTime-b),pn=!1}return pn}finally{f=null,h=T,v=!1}}var N=!1,_=null,F=-1,V=5,R=-1;function xe(){return!(e.unstable_now()-R<V)}function xt(){if(_!==null){var E=e.unstable_now();R=E;var b=!0;try{b=_(!0,E)}finally{b?wt():(N=!1,_=null)}}else N=!1}var wt;if(typeof p=="function")wt=function(){p(xt)};else if(typeof MessageChannel<"u"){var Tn=new MessageChannel,Er=Tn.port2;Tn.port1.onmessage=xt,wt=function(){Er.postMessage(null)}}else wt=function(){k(xt,0)};function fn(E){_=E,N||(N=!0,wt())}function M(E,b){F=k(function(){E(e.unstable_now())},b)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,fn(P))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(E){switch(h){case 1:case 2:case 3:var b=3;break;default:b=h}var T=h;h=b;try{return E()}finally{h=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,b){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var T=h;h=E;try{return b()}finally{h=T}},e.unstable_scheduleCallback=function(E,b,T){var W=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?W+T:W):T=W,E){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=T+Y,E={id:c++,callback:b,priorityLevel:E,startTime:T,expirationTime:Y,sortIndex:-1},T>W?(E.sortIndex=T,t(u,E),n(s)===null&&E===n(u)&&(x?(m(F),F=-1):x=!0,M(w,T-W))):(E.sortIndex=Y,t(s,E),y||v||(y=!0,fn(P))),E},e.unstable_shouldYield=xe,e.unstable_wrapCallback=function(E){var b=h;return function(){var T=h;h=b;try{return E.apply(this,arguments)}finally{h=T}}}})(Od);bd.exports=Od;var Cm=bd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Td=C,Ie=Cm;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ld=new Set,Xr={};function Mn(e,t){or(e,t),or(e+"Capture",t)}function or(e,t){for(Xr[e]=t,e=0;e<t.length;e++)Ld.add(t[e])}var Ft=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nl=Object.prototype.hasOwnProperty,Em=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ou={},Tu={};function _m(e){return nl.call(Tu,e)?!0:nl.call(Ou,e)?!1:Em.test(e)?Tu[e]=!0:(Ou[e]=!0,!1)}function Pm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Nm(e,t,n,r){if(t===null||typeof t>"u"||Pm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function _e(e,t,n,r,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){pe[e]=new _e(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];pe[t]=new _e(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){pe[e]=new _e(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){pe[e]=new _e(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){pe[e]=new _e(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){pe[e]=new _e(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){pe[e]=new _e(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){pe[e]=new _e(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){pe[e]=new _e(e,5,!1,e.toLowerCase(),null,!1,!1)});var ps=/[\-:]([a-z])/g;function hs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ps,hs);pe[t]=new _e(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ps,hs);pe[t]=new _e(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ps,hs);pe[t]=new _e(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){pe[e]=new _e(e,1,!1,e.toLowerCase(),null,!1,!1)});pe.xlinkHref=new _e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){pe[e]=new _e(e,1,!1,e.toLowerCase(),null,!0,!0)});function ms(e,t,n,r){var o=pe.hasOwnProperty(t)?pe[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Nm(t,n,o,r)&&(n=null),r||o===null?_m(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ot=Td.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,bo=Symbol.for("react.element"),In=Symbol.for("react.portal"),$n=Symbol.for("react.fragment"),gs=Symbol.for("react.strict_mode"),rl=Symbol.for("react.profiler"),Rd=Symbol.for("react.provider"),zd=Symbol.for("react.context"),vs=Symbol.for("react.forward_ref"),ol=Symbol.for("react.suspense"),il=Symbol.for("react.suspense_list"),ys=Symbol.for("react.memo"),At=Symbol.for("react.lazy"),Id=Symbol.for("react.offscreen"),Lu=Symbol.iterator;function Pr(e){return e===null||typeof e!="object"?null:(e=Lu&&e[Lu]||e["@@iterator"],typeof e=="function"?e:null)}var ee=Object.assign,va;function Lr(e){if(va===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);va=t&&t[1]||""}return`
`+va+e}var ya=!1;function xa(e,t){if(!e||ya)return"";ya=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,l=i.length-1;1<=a&&0<=l&&o[a]!==i[l];)l--;for(;1<=a&&0<=l;a--,l--)if(o[a]!==i[l]){if(a!==1||l!==1)do if(a--,l--,0>l||o[a]!==i[l]){var s=`
`+o[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{ya=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Lr(e):""}function jm(e){switch(e.tag){case 5:return Lr(e.type);case 16:return Lr("Lazy");case 13:return Lr("Suspense");case 19:return Lr("SuspenseList");case 0:case 2:case 15:return e=xa(e.type,!1),e;case 11:return e=xa(e.type.render,!1),e;case 1:return e=xa(e.type,!0),e;default:return""}}function al(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case $n:return"Fragment";case In:return"Portal";case rl:return"Profiler";case gs:return"StrictMode";case ol:return"Suspense";case il:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case zd:return(e.displayName||"Context")+".Consumer";case Rd:return(e._context.displayName||"Context")+".Provider";case vs:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ys:return t=e.displayName||null,t!==null?t:al(e.type)||"Memo";case At:t=e._payload,e=e._init;try{return al(e(t))}catch{}}return null}function Fm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return al(t);case 8:return t===gs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function an(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function $d(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Dm(e){var t=$d(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Oo(e){e._valueTracker||(e._valueTracker=Dm(e))}function Wd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=$d(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function hi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ll(e,t){var n=t.checked;return ee({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ru(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=an(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Bd(e,t){t=t.checked,t!=null&&ms(e,"checked",t,!1)}function sl(e,t){Bd(e,t);var n=an(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ul(e,t.type,n):t.hasOwnProperty("defaultValue")&&ul(e,t.type,an(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function zu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ul(e,t,n){(t!=="number"||hi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Rr=Array.isArray;function Jn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+an(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function cl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return ee({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Iu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(j(92));if(Rr(n)){if(1<n.length)throw Error(j(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:an(n)}}function Ad(e,t){var n=an(t.value),r=an(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function $u(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ud(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function dl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ud(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var To,Vd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(To=To||document.createElement("div"),To.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=To.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Jr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Wr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Mm=["Webkit","ms","Moz","O"];Object.keys(Wr).forEach(function(e){Mm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Wr[t]=Wr[e]})});function Yd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Wr.hasOwnProperty(e)&&Wr[e]?(""+t).trim():t+"px"}function Hd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Yd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var bm=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fl(e,t){if(t){if(bm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function pl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hl=null;function xs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ml=null,qn=null,Zn=null;function Wu(e){if(e=So(e)){if(typeof ml!="function")throw Error(j(280));var t=e.stateNode;t&&(t=Xi(t),ml(e.stateNode,e.type,t))}}function Gd(e){qn?Zn?Zn.push(e):Zn=[e]:qn=e}function Qd(){if(qn){var e=qn,t=Zn;if(Zn=qn=null,Wu(e),t)for(e=0;e<t.length;e++)Wu(t[e])}}function Kd(e,t){return e(t)}function Xd(){}var wa=!1;function Jd(e,t,n){if(wa)return e(t,n);wa=!0;try{return Kd(e,t,n)}finally{wa=!1,(qn!==null||Zn!==null)&&(Xd(),Qd())}}function qr(e,t){var n=e.stateNode;if(n===null)return null;var r=Xi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var gl=!1;if(Ft)try{var Nr={};Object.defineProperty(Nr,"passive",{get:function(){gl=!0}}),window.addEventListener("test",Nr,Nr),window.removeEventListener("test",Nr,Nr)}catch{gl=!1}function Om(e,t,n,r,o,i,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Br=!1,mi=null,gi=!1,vl=null,Tm={onError:function(e){Br=!0,mi=e}};function Lm(e,t,n,r,o,i,a,l,s){Br=!1,mi=null,Om.apply(Tm,arguments)}function Rm(e,t,n,r,o,i,a,l,s){if(Lm.apply(this,arguments),Br){if(Br){var u=mi;Br=!1,mi=null}else throw Error(j(198));gi||(gi=!0,vl=u)}}function bn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function qd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Bu(e){if(bn(e)!==e)throw Error(j(188))}function zm(e){var t=e.alternate;if(!t){if(t=bn(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Bu(o),e;if(i===r)return Bu(o),t;i=i.sibling}throw Error(j(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function Zd(e){return e=zm(e),e!==null?ef(e):null}function ef(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ef(e);if(t!==null)return t;e=e.sibling}return null}var tf=Ie.unstable_scheduleCallback,Au=Ie.unstable_cancelCallback,Im=Ie.unstable_shouldYield,$m=Ie.unstable_requestPaint,ne=Ie.unstable_now,Wm=Ie.unstable_getCurrentPriorityLevel,ws=Ie.unstable_ImmediatePriority,nf=Ie.unstable_UserBlockingPriority,vi=Ie.unstable_NormalPriority,Bm=Ie.unstable_LowPriority,rf=Ie.unstable_IdlePriority,Hi=null,gt=null;function Am(e){if(gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(Hi,e,void 0,(e.current.flags&128)===128)}catch{}}var nt=Math.clz32?Math.clz32:Ym,Um=Math.log,Vm=Math.LN2;function Ym(e){return e>>>=0,e===0?32:31-(Um(e)/Vm|0)|0}var Lo=64,Ro=4194304;function zr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function yi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~o;l!==0?r=zr(l):(i&=a,i!==0&&(r=zr(i)))}else a=n&~o,a!==0?r=zr(a):i!==0&&(r=zr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-nt(t),o=1<<n,r|=e[n],t&=~o;return r}function Hm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-nt(i),l=1<<a,s=o[a];s===-1?(!(l&n)||l&r)&&(o[a]=Hm(l,t)):s<=t&&(e.expiredLanes|=l),i&=~l}}function yl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function of(){var e=Lo;return Lo<<=1,!(Lo&4194240)&&(Lo=64),e}function ka(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function wo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-nt(t),e[t]=n}function Qm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-nt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function ks(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-nt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var U=0;function af(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var lf,Ss,sf,uf,cf,xl=!1,zo=[],Kt=null,Xt=null,Jt=null,Zr=new Map,eo=new Map,Vt=[],Km="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Uu(e,t){switch(e){case"focusin":case"focusout":Kt=null;break;case"dragenter":case"dragleave":Xt=null;break;case"mouseover":case"mouseout":Jt=null;break;case"pointerover":case"pointerout":Zr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":eo.delete(t.pointerId)}}function jr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=So(t),t!==null&&Ss(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Xm(e,t,n,r,o){switch(t){case"focusin":return Kt=jr(Kt,e,t,n,r,o),!0;case"dragenter":return Xt=jr(Xt,e,t,n,r,o),!0;case"mouseover":return Jt=jr(Jt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Zr.set(i,jr(Zr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,eo.set(i,jr(eo.get(i)||null,e,t,n,r,o)),!0}return!1}function df(e){var t=yn(e.target);if(t!==null){var n=bn(t);if(n!==null){if(t=n.tag,t===13){if(t=qd(n),t!==null){e.blockedOn=t,cf(e.priority,function(){sf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function qo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=wl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);hl=r,n.target.dispatchEvent(r),hl=null}else return t=So(n),t!==null&&Ss(t),e.blockedOn=n,!1;t.shift()}return!0}function Vu(e,t,n){qo(e)&&n.delete(t)}function Jm(){xl=!1,Kt!==null&&qo(Kt)&&(Kt=null),Xt!==null&&qo(Xt)&&(Xt=null),Jt!==null&&qo(Jt)&&(Jt=null),Zr.forEach(Vu),eo.forEach(Vu)}function Fr(e,t){e.blockedOn===t&&(e.blockedOn=null,xl||(xl=!0,Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority,Jm)))}function to(e){function t(o){return Fr(o,e)}if(0<zo.length){Fr(zo[0],e);for(var n=1;n<zo.length;n++){var r=zo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Kt!==null&&Fr(Kt,e),Xt!==null&&Fr(Xt,e),Jt!==null&&Fr(Jt,e),Zr.forEach(t),eo.forEach(t),n=0;n<Vt.length;n++)r=Vt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Vt.length&&(n=Vt[0],n.blockedOn===null);)df(n),n.blockedOn===null&&Vt.shift()}var er=Ot.ReactCurrentBatchConfig,xi=!0;function qm(e,t,n,r){var o=U,i=er.transition;er.transition=null;try{U=1,Cs(e,t,n,r)}finally{U=o,er.transition=i}}function Zm(e,t,n,r){var o=U,i=er.transition;er.transition=null;try{U=4,Cs(e,t,n,r)}finally{U=o,er.transition=i}}function Cs(e,t,n,r){if(xi){var o=wl(e,t,n,r);if(o===null)Ma(e,t,r,wi,n),Uu(e,r);else if(Xm(o,e,t,n,r))r.stopPropagation();else if(Uu(e,r),t&4&&-1<Km.indexOf(e)){for(;o!==null;){var i=So(o);if(i!==null&&lf(i),i=wl(e,t,n,r),i===null&&Ma(e,t,r,wi,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Ma(e,t,r,null,n)}}var wi=null;function wl(e,t,n,r){if(wi=null,e=xs(r),e=yn(e),e!==null)if(t=bn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=qd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return wi=e,null}function ff(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Wm()){case ws:return 1;case nf:return 4;case vi:case Bm:return 16;case rf:return 536870912;default:return 16}default:return 16}}var Ht=null,Es=null,Zo=null;function pf(){if(Zo)return Zo;var e,t=Es,n=t.length,r,o="value"in Ht?Ht.value:Ht.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[i-r];r++);return Zo=o.slice(e,1<r?1-r:void 0)}function ei(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Io(){return!0}function Yu(){return!1}function Be(e){function t(n,r,o,i,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Io:Yu,this.isPropagationStopped=Yu,this}return ee(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Io)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Io)},persist:function(){},isPersistent:Io}),t}var xr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_s=Be(xr),ko=ee({},xr,{view:0,detail:0}),eg=Be(ko),Sa,Ca,Dr,Gi=ee({},ko,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ps,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Dr&&(Dr&&e.type==="mousemove"?(Sa=e.screenX-Dr.screenX,Ca=e.screenY-Dr.screenY):Ca=Sa=0,Dr=e),Sa)},movementY:function(e){return"movementY"in e?e.movementY:Ca}}),Hu=Be(Gi),tg=ee({},Gi,{dataTransfer:0}),ng=Be(tg),rg=ee({},ko,{relatedTarget:0}),Ea=Be(rg),og=ee({},xr,{animationName:0,elapsedTime:0,pseudoElement:0}),ig=Be(og),ag=ee({},xr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),lg=Be(ag),sg=ee({},xr,{data:0}),Gu=Be(sg),ug={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=dg[e])?!!t[e]:!1}function Ps(){return fg}var pg=ee({},ko,{key:function(e){if(e.key){var t=ug[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ei(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?cg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ps,charCode:function(e){return e.type==="keypress"?ei(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ei(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),hg=Be(pg),mg=ee({},Gi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qu=Be(mg),gg=ee({},ko,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ps}),vg=Be(gg),yg=ee({},xr,{propertyName:0,elapsedTime:0,pseudoElement:0}),xg=Be(yg),wg=ee({},Gi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),kg=Be(wg),Sg=[9,13,27,32],Ns=Ft&&"CompositionEvent"in window,Ar=null;Ft&&"documentMode"in document&&(Ar=document.documentMode);var Cg=Ft&&"TextEvent"in window&&!Ar,hf=Ft&&(!Ns||Ar&&8<Ar&&11>=Ar),Ku=" ",Xu=!1;function mf(e,t){switch(e){case"keyup":return Sg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wn=!1;function Eg(e,t){switch(e){case"compositionend":return gf(t);case"keypress":return t.which!==32?null:(Xu=!0,Ku);case"textInput":return e=t.data,e===Ku&&Xu?null:e;default:return null}}function _g(e,t){if(Wn)return e==="compositionend"||!Ns&&mf(e,t)?(e=pf(),Zo=Es=Ht=null,Wn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return hf&&t.locale!=="ko"?null:t.data;default:return null}}var Pg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ju(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Pg[e.type]:t==="textarea"}function vf(e,t,n,r){Gd(r),t=ki(t,"onChange"),0<t.length&&(n=new _s("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ur=null,no=null;function Ng(e){jf(e,0)}function Qi(e){var t=Un(e);if(Wd(t))return e}function jg(e,t){if(e==="change")return t}var yf=!1;if(Ft){var _a;if(Ft){var Pa="oninput"in document;if(!Pa){var qu=document.createElement("div");qu.setAttribute("oninput","return;"),Pa=typeof qu.oninput=="function"}_a=Pa}else _a=!1;yf=_a&&(!document.documentMode||9<document.documentMode)}function Zu(){Ur&&(Ur.detachEvent("onpropertychange",xf),no=Ur=null)}function xf(e){if(e.propertyName==="value"&&Qi(no)){var t=[];vf(t,no,e,xs(e)),Jd(Ng,t)}}function Fg(e,t,n){e==="focusin"?(Zu(),Ur=t,no=n,Ur.attachEvent("onpropertychange",xf)):e==="focusout"&&Zu()}function Dg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Qi(no)}function Mg(e,t){if(e==="click")return Qi(t)}function bg(e,t){if(e==="input"||e==="change")return Qi(t)}function Og(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var it=typeof Object.is=="function"?Object.is:Og;function ro(e,t){if(it(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!nl.call(t,o)||!it(e[o],t[o]))return!1}return!0}function ec(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function tc(e,t){var n=ec(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ec(n)}}function wf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?wf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function kf(){for(var e=window,t=hi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=hi(e.document)}return t}function js(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Tg(e){var t=kf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&wf(n.ownerDocument.documentElement,n)){if(r!==null&&js(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=tc(n,i);var a=tc(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Lg=Ft&&"documentMode"in document&&11>=document.documentMode,Bn=null,kl=null,Vr=null,Sl=!1;function nc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Sl||Bn==null||Bn!==hi(r)||(r=Bn,"selectionStart"in r&&js(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Vr&&ro(Vr,r)||(Vr=r,r=ki(kl,"onSelect"),0<r.length&&(t=new _s("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Bn)))}function $o(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var An={animationend:$o("Animation","AnimationEnd"),animationiteration:$o("Animation","AnimationIteration"),animationstart:$o("Animation","AnimationStart"),transitionend:$o("Transition","TransitionEnd")},Na={},Sf={};Ft&&(Sf=document.createElement("div").style,"AnimationEvent"in window||(delete An.animationend.animation,delete An.animationiteration.animation,delete An.animationstart.animation),"TransitionEvent"in window||delete An.transitionend.transition);function Ki(e){if(Na[e])return Na[e];if(!An[e])return e;var t=An[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Sf)return Na[e]=t[n];return e}var Cf=Ki("animationend"),Ef=Ki("animationiteration"),_f=Ki("animationstart"),Pf=Ki("transitionend"),Nf=new Map,rc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sn(e,t){Nf.set(e,t),Mn(t,[e])}for(var ja=0;ja<rc.length;ja++){var Fa=rc[ja],Rg=Fa.toLowerCase(),zg=Fa[0].toUpperCase()+Fa.slice(1);sn(Rg,"on"+zg)}sn(Cf,"onAnimationEnd");sn(Ef,"onAnimationIteration");sn(_f,"onAnimationStart");sn("dblclick","onDoubleClick");sn("focusin","onFocus");sn("focusout","onBlur");sn(Pf,"onTransitionEnd");or("onMouseEnter",["mouseout","mouseover"]);or("onMouseLeave",["mouseout","mouseover"]);or("onPointerEnter",["pointerout","pointerover"]);or("onPointerLeave",["pointerout","pointerover"]);Mn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ir="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ig=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ir));function oc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Rm(r,t,void 0,e),e.currentTarget=null}function jf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==i&&o.isPropagationStopped())break e;oc(o,l,u),i=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,u=l.currentTarget,l=l.listener,s!==i&&o.isPropagationStopped())break e;oc(o,l,u),i=s}}}if(gi)throw e=vl,gi=!1,vl=null,e}function Q(e,t){var n=t[Nl];n===void 0&&(n=t[Nl]=new Set);var r=e+"__bubble";n.has(r)||(Ff(t,e,2,!1),n.add(r))}function Da(e,t,n){var r=0;t&&(r|=4),Ff(n,e,r,t)}var Wo="_reactListening"+Math.random().toString(36).slice(2);function oo(e){if(!e[Wo]){e[Wo]=!0,Ld.forEach(function(n){n!=="selectionchange"&&(Ig.has(n)||Da(n,!1,e),Da(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Wo]||(t[Wo]=!0,Da("selectionchange",!1,t))}}function Ff(e,t,n,r){switch(ff(t)){case 1:var o=qm;break;case 4:o=Zm;break;default:o=Cs}n=o.bind(null,t,n,e),o=void 0,!gl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Ma(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;a=a.return}for(;l!==null;){if(a=yn(l),a===null)return;if(s=a.tag,s===5||s===6){r=i=a;continue e}l=l.parentNode}}r=r.return}Jd(function(){var u=i,c=xs(n),f=[];e:{var h=Nf.get(e);if(h!==void 0){var v=_s,y=e;switch(e){case"keypress":if(ei(n)===0)break e;case"keydown":case"keyup":v=hg;break;case"focusin":y="focus",v=Ea;break;case"focusout":y="blur",v=Ea;break;case"beforeblur":case"afterblur":v=Ea;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Hu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=ng;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=vg;break;case Cf:case Ef:case _f:v=ig;break;case Pf:v=xg;break;case"scroll":v=eg;break;case"wheel":v=kg;break;case"copy":case"cut":case"paste":v=lg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Qu}var x=(t&4)!==0,k=!x&&e==="scroll",m=x?h!==null?h+"Capture":null:h;x=[];for(var p=u,g;p!==null;){g=p;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,m!==null&&(w=qr(p,m),w!=null&&x.push(io(p,w,g)))),k)break;p=p.return}0<x.length&&(h=new v(h,y,null,n,c),f.push({event:h,listeners:x}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&n!==hl&&(y=n.relatedTarget||n.fromElement)&&(yn(y)||y[Dt]))break e;if((v||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=u,y=y?yn(y):null,y!==null&&(k=bn(y),y!==k||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=u),v!==y)){if(x=Hu,w="onMouseLeave",m="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(x=Qu,w="onPointerLeave",m="onPointerEnter",p="pointer"),k=v==null?h:Un(v),g=y==null?h:Un(y),h=new x(w,p+"leave",v,n,c),h.target=k,h.relatedTarget=g,w=null,yn(c)===u&&(x=new x(m,p+"enter",y,n,c),x.target=g,x.relatedTarget=k,w=x),k=w,v&&y)t:{for(x=v,m=y,p=0,g=x;g;g=Ln(g))p++;for(g=0,w=m;w;w=Ln(w))g++;for(;0<p-g;)x=Ln(x),p--;for(;0<g-p;)m=Ln(m),g--;for(;p--;){if(x===m||m!==null&&x===m.alternate)break t;x=Ln(x),m=Ln(m)}x=null}else x=null;v!==null&&ic(f,h,v,x,!1),y!==null&&k!==null&&ic(f,k,y,x,!0)}}e:{if(h=u?Un(u):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var P=jg;else if(Ju(h))if(yf)P=bg;else{P=Dg;var N=Fg}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(P=Mg);if(P&&(P=P(e,u))){vf(f,P,n,c);break e}N&&N(e,h,u),e==="focusout"&&(N=h._wrapperState)&&N.controlled&&h.type==="number"&&ul(h,"number",h.value)}switch(N=u?Un(u):window,e){case"focusin":(Ju(N)||N.contentEditable==="true")&&(Bn=N,kl=u,Vr=null);break;case"focusout":Vr=kl=Bn=null;break;case"mousedown":Sl=!0;break;case"contextmenu":case"mouseup":case"dragend":Sl=!1,nc(f,n,c);break;case"selectionchange":if(Lg)break;case"keydown":case"keyup":nc(f,n,c)}var _;if(Ns)e:{switch(e){case"compositionstart":var F="onCompositionStart";break e;case"compositionend":F="onCompositionEnd";break e;case"compositionupdate":F="onCompositionUpdate";break e}F=void 0}else Wn?mf(e,n)&&(F="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(F="onCompositionStart");F&&(hf&&n.locale!=="ko"&&(Wn||F!=="onCompositionStart"?F==="onCompositionEnd"&&Wn&&(_=pf()):(Ht=c,Es="value"in Ht?Ht.value:Ht.textContent,Wn=!0)),N=ki(u,F),0<N.length&&(F=new Gu(F,e,null,n,c),f.push({event:F,listeners:N}),_?F.data=_:(_=gf(n),_!==null&&(F.data=_)))),(_=Cg?Eg(e,n):_g(e,n))&&(u=ki(u,"onBeforeInput"),0<u.length&&(c=new Gu("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=_))}jf(f,t)})}function io(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ki(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=qr(e,n),i!=null&&r.unshift(io(e,i,o)),i=qr(e,t),i!=null&&r.push(io(e,i,o))),e=e.return}return r}function Ln(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ic(e,t,n,r,o){for(var i=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,o?(s=qr(n,i),s!=null&&a.unshift(io(n,s,l))):o||(s=qr(n,i),s!=null&&a.push(io(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var $g=/\r\n?/g,Wg=/\u0000|\uFFFD/g;function ac(e){return(typeof e=="string"?e:""+e).replace($g,`
`).replace(Wg,"")}function Bo(e,t,n){if(t=ac(t),ac(e)!==t&&n)throw Error(j(425))}function Si(){}var Cl=null,El=null;function _l(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Pl=typeof setTimeout=="function"?setTimeout:void 0,Bg=typeof clearTimeout=="function"?clearTimeout:void 0,lc=typeof Promise=="function"?Promise:void 0,Ag=typeof queueMicrotask=="function"?queueMicrotask:typeof lc<"u"?function(e){return lc.resolve(null).then(e).catch(Ug)}:Pl;function Ug(e){setTimeout(function(){throw e})}function ba(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),to(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);to(t)}function qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function sc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var wr=Math.random().toString(36).slice(2),ft="__reactFiber$"+wr,ao="__reactProps$"+wr,Dt="__reactContainer$"+wr,Nl="__reactEvents$"+wr,Vg="__reactListeners$"+wr,Yg="__reactHandles$"+wr;function yn(e){var t=e[ft];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Dt]||n[ft]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=sc(e);e!==null;){if(n=e[ft])return n;e=sc(e)}return t}e=n,n=e.parentNode}return null}function So(e){return e=e[ft]||e[Dt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Un(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function Xi(e){return e[ao]||null}var jl=[],Vn=-1;function un(e){return{current:e}}function X(e){0>Vn||(e.current=jl[Vn],jl[Vn]=null,Vn--)}function H(e,t){Vn++,jl[Vn]=e.current,e.current=t}var ln={},ye=un(ln),Fe=un(!1),_n=ln;function ir(e,t){var n=e.type.contextTypes;if(!n)return ln;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function De(e){return e=e.childContextTypes,e!=null}function Ci(){X(Fe),X(ye)}function uc(e,t,n){if(ye.current!==ln)throw Error(j(168));H(ye,t),H(Fe,n)}function Df(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(j(108,Fm(e)||"Unknown",o));return ee({},n,r)}function Ei(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ln,_n=ye.current,H(ye,e),H(Fe,Fe.current),!0}function cc(e,t,n){var r=e.stateNode;if(!r)throw Error(j(169));n?(e=Df(e,t,_n),r.__reactInternalMemoizedMergedChildContext=e,X(Fe),X(ye),H(ye,e)):X(Fe),H(Fe,n)}var _t=null,Ji=!1,Oa=!1;function Mf(e){_t===null?_t=[e]:_t.push(e)}function Hg(e){Ji=!0,Mf(e)}function cn(){if(!Oa&&_t!==null){Oa=!0;var e=0,t=U;try{var n=_t;for(U=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}_t=null,Ji=!1}catch(o){throw _t!==null&&(_t=_t.slice(e+1)),tf(ws,cn),o}finally{U=t,Oa=!1}}return null}var Yn=[],Hn=0,_i=null,Pi=0,Ae=[],Ue=0,Pn=null,Pt=1,Nt="";function mn(e,t){Yn[Hn++]=Pi,Yn[Hn++]=_i,_i=e,Pi=t}function bf(e,t,n){Ae[Ue++]=Pt,Ae[Ue++]=Nt,Ae[Ue++]=Pn,Pn=e;var r=Pt;e=Nt;var o=32-nt(r)-1;r&=~(1<<o),n+=1;var i=32-nt(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,Pt=1<<32-nt(t)+o|n<<o|r,Nt=i+e}else Pt=1<<i|n<<o|r,Nt=e}function Fs(e){e.return!==null&&(mn(e,1),bf(e,1,0))}function Ds(e){for(;e===_i;)_i=Yn[--Hn],Yn[Hn]=null,Pi=Yn[--Hn],Yn[Hn]=null;for(;e===Pn;)Pn=Ae[--Ue],Ae[Ue]=null,Nt=Ae[--Ue],Ae[Ue]=null,Pt=Ae[--Ue],Ae[Ue]=null}var ze=null,Re=null,J=!1,et=null;function Of(e,t){var n=Ve(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function dc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ze=e,Re=qt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ze=e,Re=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Pn!==null?{id:Pt,overflow:Nt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ve(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ze=e,Re=null,!0):!1;default:return!1}}function Fl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Dl(e){if(J){var t=Re;if(t){var n=t;if(!dc(e,t)){if(Fl(e))throw Error(j(418));t=qt(n.nextSibling);var r=ze;t&&dc(e,t)?Of(r,n):(e.flags=e.flags&-4097|2,J=!1,ze=e)}}else{if(Fl(e))throw Error(j(418));e.flags=e.flags&-4097|2,J=!1,ze=e}}}function fc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ze=e}function Ao(e){if(e!==ze)return!1;if(!J)return fc(e),J=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!_l(e.type,e.memoizedProps)),t&&(t=Re)){if(Fl(e))throw Tf(),Error(j(418));for(;t;)Of(e,t),t=qt(t.nextSibling)}if(fc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Re=qt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Re=null}}else Re=ze?qt(e.stateNode.nextSibling):null;return!0}function Tf(){for(var e=Re;e;)e=qt(e.nextSibling)}function ar(){Re=ze=null,J=!1}function Ms(e){et===null?et=[e]:et.push(e)}var Gg=Ot.ReactCurrentBatchConfig;function qe(e,t){if(e&&e.defaultProps){t=ee({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ni=un(null),ji=null,Gn=null,bs=null;function Os(){bs=Gn=ji=null}function Ts(e){var t=Ni.current;X(Ni),e._currentValue=t}function Ml(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function tr(e,t){ji=e,bs=Gn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ne=!0),e.firstContext=null)}function He(e){var t=e._currentValue;if(bs!==e)if(e={context:e,memoizedValue:t,next:null},Gn===null){if(ji===null)throw Error(j(308));Gn=e,ji.dependencies={lanes:0,firstContext:e}}else Gn=Gn.next=e;return t}var xn=null;function Ls(e){xn===null?xn=[e]:xn.push(e)}function Lf(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Ls(t)):(n.next=o.next,o.next=n),t.interleaved=n,Mt(e,r)}function Mt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ut=!1;function Rs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Rf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function jt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Zt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,I&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Mt(e,n)}return o=r.interleaved,o===null?(t.next=t,Ls(r)):(t.next=o.next,o.next=t),r.interleaved=t,Mt(e,n)}function ti(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ks(e,n)}}function pc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Fi(e,t,n,r){var o=e.updateQueue;Ut=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var s=l,u=s.next;s.next=null,a===null?i=u:a.next=u,a=s;var c=e.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==a&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(i!==null){var f=o.baseState;a=0,c=u=s=null,l=i;do{var h=l.lane,v=l.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,x=l;switch(h=t,v=n,x.tag){case 1:if(y=x.payload,typeof y=="function"){f=y.call(v,f,h);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=x.payload,h=typeof y=="function"?y.call(v,f,h):y,h==null)break e;f=ee({},f,h);break e;case 2:Ut=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[l]:h.push(l))}else v={eventTime:v,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=v,s=f):c=c.next=v,a|=h;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;h=l,l=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(!0);if(c===null&&(s=f),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=c,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);jn|=a,e.lanes=a,e.memoizedState=f}}function hc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(j(191,o));o.call(r)}}}var zf=new Td.Component().refs;function bl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ee({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var qi={isMounted:function(e){return(e=e._reactInternals)?bn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ce(),o=tn(e),i=jt(r,o);i.payload=t,n!=null&&(i.callback=n),t=Zt(e,i,o),t!==null&&(rt(t,e,o,r),ti(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ce(),o=tn(e),i=jt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Zt(e,i,o),t!==null&&(rt(t,e,o,r),ti(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ce(),r=tn(e),o=jt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Zt(e,o,r),t!==null&&(rt(t,e,r,n),ti(t,e,r))}};function mc(e,t,n,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!ro(n,r)||!ro(o,i):!0}function If(e,t,n){var r=!1,o=ln,i=t.contextType;return typeof i=="object"&&i!==null?i=He(i):(o=De(t)?_n:ye.current,r=t.contextTypes,i=(r=r!=null)?ir(e,o):ln),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=qi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function gc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&qi.enqueueReplaceState(t,t.state,null)}function Ol(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=zf,Rs(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=He(i):(i=De(t)?_n:ye.current,o.context=ir(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(bl(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&qi.enqueueReplaceState(o,o.state,null),Fi(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Mr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var l=o.refs;l===zf&&(l=o.refs={}),a===null?delete l[i]:l[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,e))}return e}function Uo(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function vc(e){var t=e._init;return t(e._payload)}function $f(e){function t(m,p){if(e){var g=m.deletions;g===null?(m.deletions=[p],m.flags|=16):g.push(p)}}function n(m,p){if(!e)return null;for(;p!==null;)t(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function o(m,p){return m=nn(m,p),m.index=0,m.sibling=null,m}function i(m,p,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<p?(m.flags|=2,p):g):(m.flags|=2,p)):(m.flags|=1048576,p)}function a(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,p,g,w){return p===null||p.tag!==6?(p=Wa(g,m.mode,w),p.return=m,p):(p=o(p,g),p.return=m,p)}function s(m,p,g,w){var P=g.type;return P===$n?c(m,p,g.props.children,w,g.key):p!==null&&(p.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===At&&vc(P)===p.type)?(w=o(p,g.props),w.ref=Mr(m,p,g),w.return=m,w):(w=li(g.type,g.key,g.props,null,m.mode,w),w.ref=Mr(m,p,g),w.return=m,w)}function u(m,p,g,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=Ba(g,m.mode,w),p.return=m,p):(p=o(p,g.children||[]),p.return=m,p)}function c(m,p,g,w,P){return p===null||p.tag!==7?(p=Cn(g,m.mode,w,P),p.return=m,p):(p=o(p,g),p.return=m,p)}function f(m,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Wa(""+p,m.mode,g),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case bo:return g=li(p.type,p.key,p.props,null,m.mode,g),g.ref=Mr(m,null,p),g.return=m,g;case In:return p=Ba(p,m.mode,g),p.return=m,p;case At:var w=p._init;return f(m,w(p._payload),g)}if(Rr(p)||Pr(p))return p=Cn(p,m.mode,g,null),p.return=m,p;Uo(m,p)}return null}function h(m,p,g,w){var P=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return P!==null?null:l(m,p,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case bo:return g.key===P?s(m,p,g,w):null;case In:return g.key===P?u(m,p,g,w):null;case At:return P=g._init,h(m,p,P(g._payload),w)}if(Rr(g)||Pr(g))return P!==null?null:c(m,p,g,w,null);Uo(m,g)}return null}function v(m,p,g,w,P){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(g)||null,l(p,m,""+w,P);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case bo:return m=m.get(w.key===null?g:w.key)||null,s(p,m,w,P);case In:return m=m.get(w.key===null?g:w.key)||null,u(p,m,w,P);case At:var N=w._init;return v(m,p,g,N(w._payload),P)}if(Rr(w)||Pr(w))return m=m.get(g)||null,c(p,m,w,P,null);Uo(p,w)}return null}function y(m,p,g,w){for(var P=null,N=null,_=p,F=p=0,V=null;_!==null&&F<g.length;F++){_.index>F?(V=_,_=null):V=_.sibling;var R=h(m,_,g[F],w);if(R===null){_===null&&(_=V);break}e&&_&&R.alternate===null&&t(m,_),p=i(R,p,F),N===null?P=R:N.sibling=R,N=R,_=V}if(F===g.length)return n(m,_),J&&mn(m,F),P;if(_===null){for(;F<g.length;F++)_=f(m,g[F],w),_!==null&&(p=i(_,p,F),N===null?P=_:N.sibling=_,N=_);return J&&mn(m,F),P}for(_=r(m,_);F<g.length;F++)V=v(_,m,F,g[F],w),V!==null&&(e&&V.alternate!==null&&_.delete(V.key===null?F:V.key),p=i(V,p,F),N===null?P=V:N.sibling=V,N=V);return e&&_.forEach(function(xe){return t(m,xe)}),J&&mn(m,F),P}function x(m,p,g,w){var P=Pr(g);if(typeof P!="function")throw Error(j(150));if(g=P.call(g),g==null)throw Error(j(151));for(var N=P=null,_=p,F=p=0,V=null,R=g.next();_!==null&&!R.done;F++,R=g.next()){_.index>F?(V=_,_=null):V=_.sibling;var xe=h(m,_,R.value,w);if(xe===null){_===null&&(_=V);break}e&&_&&xe.alternate===null&&t(m,_),p=i(xe,p,F),N===null?P=xe:N.sibling=xe,N=xe,_=V}if(R.done)return n(m,_),J&&mn(m,F),P;if(_===null){for(;!R.done;F++,R=g.next())R=f(m,R.value,w),R!==null&&(p=i(R,p,F),N===null?P=R:N.sibling=R,N=R);return J&&mn(m,F),P}for(_=r(m,_);!R.done;F++,R=g.next())R=v(_,m,F,R.value,w),R!==null&&(e&&R.alternate!==null&&_.delete(R.key===null?F:R.key),p=i(R,p,F),N===null?P=R:N.sibling=R,N=R);return e&&_.forEach(function(xt){return t(m,xt)}),J&&mn(m,F),P}function k(m,p,g,w){if(typeof g=="object"&&g!==null&&g.type===$n&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case bo:e:{for(var P=g.key,N=p;N!==null;){if(N.key===P){if(P=g.type,P===$n){if(N.tag===7){n(m,N.sibling),p=o(N,g.props.children),p.return=m,m=p;break e}}else if(N.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===At&&vc(P)===N.type){n(m,N.sibling),p=o(N,g.props),p.ref=Mr(m,N,g),p.return=m,m=p;break e}n(m,N);break}else t(m,N);N=N.sibling}g.type===$n?(p=Cn(g.props.children,m.mode,w,g.key),p.return=m,m=p):(w=li(g.type,g.key,g.props,null,m.mode,w),w.ref=Mr(m,p,g),w.return=m,m=w)}return a(m);case In:e:{for(N=g.key;p!==null;){if(p.key===N)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(m,p.sibling),p=o(p,g.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else t(m,p);p=p.sibling}p=Ba(g,m.mode,w),p.return=m,m=p}return a(m);case At:return N=g._init,k(m,p,N(g._payload),w)}if(Rr(g))return y(m,p,g,w);if(Pr(g))return x(m,p,g,w);Uo(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(m,p.sibling),p=o(p,g),p.return=m,m=p):(n(m,p),p=Wa(g,m.mode,w),p.return=m,m=p),a(m)):n(m,p)}return k}var lr=$f(!0),Wf=$f(!1),Co={},vt=un(Co),lo=un(Co),so=un(Co);function wn(e){if(e===Co)throw Error(j(174));return e}function zs(e,t){switch(H(so,t),H(lo,e),H(vt,Co),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:dl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=dl(t,e)}X(vt),H(vt,t)}function sr(){X(vt),X(lo),X(so)}function Bf(e){wn(so.current);var t=wn(vt.current),n=dl(t,e.type);t!==n&&(H(lo,e),H(vt,n))}function Is(e){lo.current===e&&(X(vt),X(lo))}var q=un(0);function Di(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ta=[];function $s(){for(var e=0;e<Ta.length;e++)Ta[e]._workInProgressVersionPrimary=null;Ta.length=0}var ni=Ot.ReactCurrentDispatcher,La=Ot.ReactCurrentBatchConfig,Nn=0,Z=null,ae=null,se=null,Mi=!1,Yr=!1,uo=0,Qg=0;function he(){throw Error(j(321))}function Ws(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!it(e[n],t[n]))return!1;return!0}function Bs(e,t,n,r,o,i){if(Nn=i,Z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ni.current=e===null||e.memoizedState===null?qg:Zg,e=n(r,o),Yr){i=0;do{if(Yr=!1,uo=0,25<=i)throw Error(j(301));i+=1,se=ae=null,t.updateQueue=null,ni.current=e0,e=n(r,o)}while(Yr)}if(ni.current=bi,t=ae!==null&&ae.next!==null,Nn=0,se=ae=Z=null,Mi=!1,t)throw Error(j(300));return e}function As(){var e=uo!==0;return uo=0,e}function ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return se===null?Z.memoizedState=se=e:se=se.next=e,se}function Ge(){if(ae===null){var e=Z.alternate;e=e!==null?e.memoizedState:null}else e=ae.next;var t=se===null?Z.memoizedState:se.next;if(t!==null)se=t,ae=e;else{if(e===null)throw Error(j(310));ae=e,e={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},se===null?Z.memoizedState=se=e:se=se.next=e}return se}function co(e,t){return typeof t=="function"?t(e):t}function Ra(e){var t=Ge(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=ae,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var l=a=null,s=null,u=i;do{var c=u.lane;if((Nn&c)===c)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=f,a=r):s=s.next=f,Z.lanes|=c,jn|=c}u=u.next}while(u!==null&&u!==i);s===null?a=r:s.next=l,it(r,t.memoizedState)||(Ne=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,Z.lanes|=i,jn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function za(e){var t=Ge(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);it(i,t.memoizedState)||(Ne=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Af(){}function Uf(e,t){var n=Z,r=Ge(),o=t(),i=!it(r.memoizedState,o);if(i&&(r.memoizedState=o,Ne=!0),r=r.queue,Us(Hf.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||se!==null&&se.memoizedState.tag&1){if(n.flags|=2048,fo(9,Yf.bind(null,n,r,o,t),void 0,null),ce===null)throw Error(j(349));Nn&30||Vf(n,t,o)}return o}function Vf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Yf(e,t,n,r){t.value=n,t.getSnapshot=r,Gf(t)&&Qf(e)}function Hf(e,t,n){return n(function(){Gf(t)&&Qf(e)})}function Gf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!it(e,n)}catch{return!0}}function Qf(e){var t=Mt(e,1);t!==null&&rt(t,e,1,-1)}function yc(e){var t=ct();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:co,lastRenderedState:e},t.queue=e,e=e.dispatch=Jg.bind(null,Z,e),[t.memoizedState,e]}function fo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Kf(){return Ge().memoizedState}function ri(e,t,n,r){var o=ct();Z.flags|=e,o.memoizedState=fo(1|t,n,void 0,r===void 0?null:r)}function Zi(e,t,n,r){var o=Ge();r=r===void 0?null:r;var i=void 0;if(ae!==null){var a=ae.memoizedState;if(i=a.destroy,r!==null&&Ws(r,a.deps)){o.memoizedState=fo(t,n,i,r);return}}Z.flags|=e,o.memoizedState=fo(1|t,n,i,r)}function xc(e,t){return ri(8390656,8,e,t)}function Us(e,t){return Zi(2048,8,e,t)}function Xf(e,t){return Zi(4,2,e,t)}function Jf(e,t){return Zi(4,4,e,t)}function qf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Zf(e,t,n){return n=n!=null?n.concat([e]):null,Zi(4,4,qf.bind(null,t,e),n)}function Vs(){}function ep(e,t){var n=Ge();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ws(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function tp(e,t){var n=Ge();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ws(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function np(e,t,n){return Nn&21?(it(n,t)||(n=of(),Z.lanes|=n,jn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ne=!0),e.memoizedState=n)}function Kg(e,t){var n=U;U=n!==0&&4>n?n:4,e(!0);var r=La.transition;La.transition={};try{e(!1),t()}finally{U=n,La.transition=r}}function rp(){return Ge().memoizedState}function Xg(e,t,n){var r=tn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},op(e))ip(t,n);else if(n=Lf(e,t,n,r),n!==null){var o=Ce();rt(n,e,r,o),ap(n,t,r)}}function Jg(e,t,n){var r=tn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(op(e))ip(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,l=i(a,n);if(o.hasEagerState=!0,o.eagerState=l,it(l,a)){var s=t.interleaved;s===null?(o.next=o,Ls(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=Lf(e,t,o,r),n!==null&&(o=Ce(),rt(n,e,r,o),ap(n,t,r))}}function op(e){var t=e.alternate;return e===Z||t!==null&&t===Z}function ip(e,t){Yr=Mi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ap(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ks(e,n)}}var bi={readContext:He,useCallback:he,useContext:he,useEffect:he,useImperativeHandle:he,useInsertionEffect:he,useLayoutEffect:he,useMemo:he,useReducer:he,useRef:he,useState:he,useDebugValue:he,useDeferredValue:he,useTransition:he,useMutableSource:he,useSyncExternalStore:he,useId:he,unstable_isNewReconciler:!1},qg={readContext:He,useCallback:function(e,t){return ct().memoizedState=[e,t===void 0?null:t],e},useContext:He,useEffect:xc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ri(4194308,4,qf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ri(4194308,4,e,t)},useInsertionEffect:function(e,t){return ri(4,2,e,t)},useMemo:function(e,t){var n=ct();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ct();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Xg.bind(null,Z,e),[r.memoizedState,e]},useRef:function(e){var t=ct();return e={current:e},t.memoizedState=e},useState:yc,useDebugValue:Vs,useDeferredValue:function(e){return ct().memoizedState=e},useTransition:function(){var e=yc(!1),t=e[0];return e=Kg.bind(null,e[1]),ct().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Z,o=ct();if(J){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),ce===null)throw Error(j(349));Nn&30||Vf(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,xc(Hf.bind(null,r,i,e),[e]),r.flags|=2048,fo(9,Yf.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=ct(),t=ce.identifierPrefix;if(J){var n=Nt,r=Pt;n=(r&~(1<<32-nt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=uo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Qg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Zg={readContext:He,useCallback:ep,useContext:He,useEffect:Us,useImperativeHandle:Zf,useInsertionEffect:Xf,useLayoutEffect:Jf,useMemo:tp,useReducer:Ra,useRef:Kf,useState:function(){return Ra(co)},useDebugValue:Vs,useDeferredValue:function(e){var t=Ge();return np(t,ae.memoizedState,e)},useTransition:function(){var e=Ra(co)[0],t=Ge().memoizedState;return[e,t]},useMutableSource:Af,useSyncExternalStore:Uf,useId:rp,unstable_isNewReconciler:!1},e0={readContext:He,useCallback:ep,useContext:He,useEffect:Us,useImperativeHandle:Zf,useInsertionEffect:Xf,useLayoutEffect:Jf,useMemo:tp,useReducer:za,useRef:Kf,useState:function(){return za(co)},useDebugValue:Vs,useDeferredValue:function(e){var t=Ge();return ae===null?t.memoizedState=e:np(t,ae.memoizedState,e)},useTransition:function(){var e=za(co)[0],t=Ge().memoizedState;return[e,t]},useMutableSource:Af,useSyncExternalStore:Uf,useId:rp,unstable_isNewReconciler:!1};function ur(e,t){try{var n="",r=t;do n+=jm(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Ia(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Tl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var t0=typeof WeakMap=="function"?WeakMap:Map;function lp(e,t,n){n=jt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ti||(Ti=!0,Vl=r),Tl(e,t)},n}function sp(e,t,n){n=jt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Tl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Tl(e,t),typeof r!="function"&&(en===null?en=new Set([this]):en.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function wc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new t0;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=m0.bind(null,e,t,n),t.then(e,e))}function kc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Sc(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=jt(-1,1),t.tag=2,Zt(n,t,1))),n.lanes|=1),e)}var n0=Ot.ReactCurrentOwner,Ne=!1;function ke(e,t,n,r){t.child=e===null?Wf(t,null,n,r):lr(t,e.child,n,r)}function Cc(e,t,n,r,o){n=n.render;var i=t.ref;return tr(t,o),r=Bs(e,t,n,r,i,o),n=As(),e!==null&&!Ne?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,bt(e,t,o)):(J&&n&&Fs(t),t.flags|=1,ke(e,t,r,o),t.child)}function Ec(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!qs(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,up(e,t,i,r,o)):(e=li(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:ro,n(a,r)&&e.ref===t.ref)return bt(e,t,o)}return t.flags|=1,e=nn(i,r),e.ref=t.ref,e.return=t,t.child=e}function up(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(ro(i,r)&&e.ref===t.ref)if(Ne=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Ne=!0);else return t.lanes=e.lanes,bt(e,t,o)}return Ll(e,t,n,r,o)}function cp(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},H(Kn,Le),Le|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,H(Kn,Le),Le|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,H(Kn,Le),Le|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,H(Kn,Le),Le|=r;return ke(e,t,o,n),t.child}function dp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ll(e,t,n,r,o){var i=De(n)?_n:ye.current;return i=ir(t,i),tr(t,o),n=Bs(e,t,n,r,i,o),r=As(),e!==null&&!Ne?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,bt(e,t,o)):(J&&r&&Fs(t),t.flags|=1,ke(e,t,n,o),t.child)}function _c(e,t,n,r,o){if(De(n)){var i=!0;Ei(t)}else i=!1;if(tr(t,o),t.stateNode===null)oi(e,t),If(t,n,r),Ol(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=He(u):(u=De(n)?_n:ye.current,u=ir(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==u)&&gc(t,a,r,u),Ut=!1;var h=t.memoizedState;a.state=h,Fi(t,r,a,o),s=t.memoizedState,l!==r||h!==s||Fe.current||Ut?(typeof c=="function"&&(bl(t,n,c,r),s=t.memoizedState),(l=Ut||mc(t,n,l,r,h,s,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Rf(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:qe(t.type,l),a.props=u,f=t.pendingProps,h=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=He(s):(s=De(n)?_n:ye.current,s=ir(t,s));var v=n.getDerivedStateFromProps;(c=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==f||h!==s)&&gc(t,a,r,s),Ut=!1,h=t.memoizedState,a.state=h,Fi(t,r,a,o);var y=t.memoizedState;l!==f||h!==y||Fe.current||Ut?(typeof v=="function"&&(bl(t,n,v,r),y=t.memoizedState),(u=Ut||mc(t,n,u,r,h,y,s)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,y,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,y,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),a.props=r,a.state=y,a.context=s,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Rl(e,t,n,r,i,o)}function Rl(e,t,n,r,o,i){dp(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&cc(t,n,!1),bt(e,t,i);r=t.stateNode,n0.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=lr(t,e.child,null,i),t.child=lr(t,null,l,i)):ke(e,t,l,i),t.memoizedState=r.state,o&&cc(t,n,!0),t.child}function fp(e){var t=e.stateNode;t.pendingContext?uc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&uc(e,t.context,!1),zs(e,t.containerInfo)}function Pc(e,t,n,r,o){return ar(),Ms(o),t.flags|=256,ke(e,t,n,r),t.child}var zl={dehydrated:null,treeContext:null,retryLane:0};function Il(e){return{baseLanes:e,cachePool:null,transitions:null}}function pp(e,t,n){var r=t.pendingProps,o=q.current,i=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),H(q,o&1),e===null)return Dl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=na(a,r,0,null),e=Cn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Il(n),t.memoizedState=zl,e):Ys(t,a));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return r0(e,t,a,r,l,o,n);if(i){i=r.fallback,a=t.mode,o=e.child,l=o.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=nn(o,s),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?i=nn(l,i):(i=Cn(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?Il(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=zl,r}return i=e.child,e=i.sibling,r=nn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ys(e,t){return t=na({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Vo(e,t,n,r){return r!==null&&Ms(r),lr(t,e.child,null,n),e=Ys(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function r0(e,t,n,r,o,i,a){if(n)return t.flags&256?(t.flags&=-257,r=Ia(Error(j(422))),Vo(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=na({mode:"visible",children:r.children},o,0,null),i=Cn(i,o,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&lr(t,e.child,null,a),t.child.memoizedState=Il(a),t.memoizedState=zl,i);if(!(t.mode&1))return Vo(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(j(419)),r=Ia(i,r,void 0),Vo(e,t,a,r)}if(l=(a&e.childLanes)!==0,Ne||l){if(r=ce,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Mt(e,o),rt(r,e,o,-1))}return Js(),r=Ia(Error(j(421))),Vo(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=g0.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Re=qt(o.nextSibling),ze=t,J=!0,et=null,e!==null&&(Ae[Ue++]=Pt,Ae[Ue++]=Nt,Ae[Ue++]=Pn,Pt=e.id,Nt=e.overflow,Pn=t),t=Ys(t,r.children),t.flags|=4096,t)}function Nc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ml(e.return,t,n)}function $a(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function hp(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(ke(e,t,r.children,n),r=q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Nc(e,n,t);else if(e.tag===19)Nc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(H(q,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Di(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),$a(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Di(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}$a(t,!0,n,null,i);break;case"together":$a(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function oi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function bt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),jn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=nn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=nn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function o0(e,t,n){switch(t.tag){case 3:fp(t),ar();break;case 5:Bf(t);break;case 1:De(t.type)&&Ei(t);break;case 4:zs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;H(Ni,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(H(q,q.current&1),t.flags|=128,null):n&t.child.childLanes?pp(e,t,n):(H(q,q.current&1),e=bt(e,t,n),e!==null?e.sibling:null);H(q,q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return hp(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),H(q,q.current),r)break;return null;case 22:case 23:return t.lanes=0,cp(e,t,n)}return bt(e,t,n)}var mp,$l,gp,vp;mp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};$l=function(){};gp=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,wn(vt.current);var i=null;switch(n){case"input":o=ll(e,o),r=ll(e,r),i=[];break;case"select":o=ee({},o,{value:void 0}),r=ee({},r,{value:void 0}),i=[];break;case"textarea":o=cl(e,o),r=cl(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Si)}fl(n,r);var a;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var l=o[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Xr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(l=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(i||(i=[]),i.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Xr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&Q("scroll",e),i||l===s||(i=[])):(i=i||[]).push(u,s))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};vp=function(e,t,n,r){n!==r&&(t.flags|=4)};function br(e,t){if(!J)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function me(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function i0(e,t,n){var r=t.pendingProps;switch(Ds(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return me(t),null;case 1:return De(t.type)&&Ci(),me(t),null;case 3:return r=t.stateNode,sr(),X(Fe),X(ye),$s(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ao(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,et!==null&&(Gl(et),et=null))),$l(e,t),me(t),null;case 5:Is(t);var o=wn(so.current);if(n=t.type,e!==null&&t.stateNode!=null)gp(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(j(166));return me(t),null}if(e=wn(vt.current),Ao(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[ft]=t,r[ao]=i,e=(t.mode&1)!==0,n){case"dialog":Q("cancel",r),Q("close",r);break;case"iframe":case"object":case"embed":Q("load",r);break;case"video":case"audio":for(o=0;o<Ir.length;o++)Q(Ir[o],r);break;case"source":Q("error",r);break;case"img":case"image":case"link":Q("error",r),Q("load",r);break;case"details":Q("toggle",r);break;case"input":Ru(r,i),Q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Q("invalid",r);break;case"textarea":Iu(r,i),Q("invalid",r)}fl(n,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var l=i[a];a==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Bo(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Bo(r.textContent,l,e),o=["children",""+l]):Xr.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&Q("scroll",r)}switch(n){case"input":Oo(r),zu(r,i,!0);break;case"textarea":Oo(r),$u(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Si)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ud(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[ft]=t,e[ao]=r,mp(e,t,!1,!1),t.stateNode=e;e:{switch(a=pl(n,r),n){case"dialog":Q("cancel",e),Q("close",e),o=r;break;case"iframe":case"object":case"embed":Q("load",e),o=r;break;case"video":case"audio":for(o=0;o<Ir.length;o++)Q(Ir[o],e);o=r;break;case"source":Q("error",e),o=r;break;case"img":case"image":case"link":Q("error",e),Q("load",e),o=r;break;case"details":Q("toggle",e),o=r;break;case"input":Ru(e,r),o=ll(e,r),Q("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ee({},r,{value:void 0}),Q("invalid",e);break;case"textarea":Iu(e,r),o=cl(e,r),Q("invalid",e);break;default:o=r}fl(n,o),l=o;for(i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="style"?Hd(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Vd(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Jr(e,s):typeof s=="number"&&Jr(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Xr.hasOwnProperty(i)?s!=null&&i==="onScroll"&&Q("scroll",e):s!=null&&ms(e,i,s,a))}switch(n){case"input":Oo(e),zu(e,r,!1);break;case"textarea":Oo(e),$u(e);break;case"option":r.value!=null&&e.setAttribute("value",""+an(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Jn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Jn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Si)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return me(t),null;case 6:if(e&&t.stateNode!=null)vp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(j(166));if(n=wn(so.current),wn(vt.current),Ao(t)){if(r=t.stateNode,n=t.memoizedProps,r[ft]=t,(i=r.nodeValue!==n)&&(e=ze,e!==null))switch(e.tag){case 3:Bo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Bo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ft]=t,t.stateNode=r}return me(t),null;case 13:if(X(q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(J&&Re!==null&&t.mode&1&&!(t.flags&128))Tf(),ar(),t.flags|=98560,i=!1;else if(i=Ao(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(j(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(j(317));i[ft]=t}else ar(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;me(t),i=!1}else et!==null&&(Gl(et),et=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||q.current&1?le===0&&(le=3):Js())),t.updateQueue!==null&&(t.flags|=4),me(t),null);case 4:return sr(),$l(e,t),e===null&&oo(t.stateNode.containerInfo),me(t),null;case 10:return Ts(t.type._context),me(t),null;case 17:return De(t.type)&&Ci(),me(t),null;case 19:if(X(q),i=t.memoizedState,i===null)return me(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)br(i,!1);else{if(le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Di(e),a!==null){for(t.flags|=128,br(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return H(q,q.current&1|2),t.child}e=e.sibling}i.tail!==null&&ne()>cr&&(t.flags|=128,r=!0,br(i,!1),t.lanes=4194304)}else{if(!r)if(e=Di(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),br(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!J)return me(t),null}else 2*ne()-i.renderingStartTime>cr&&n!==1073741824&&(t.flags|=128,r=!0,br(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ne(),t.sibling=null,n=q.current,H(q,r?n&1|2:n&1),t):(me(t),null);case 22:case 23:return Xs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Le&1073741824&&(me(t),t.subtreeFlags&6&&(t.flags|=8192)):me(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function a0(e,t){switch(Ds(t),t.tag){case 1:return De(t.type)&&Ci(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return sr(),X(Fe),X(ye),$s(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Is(t),null;case 13:if(X(q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));ar()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return X(q),null;case 4:return sr(),null;case 10:return Ts(t.type._context),null;case 22:case 23:return Xs(),null;case 24:return null;default:return null}}var Yo=!1,ge=!1,l0=typeof WeakSet=="function"?WeakSet:Set,D=null;function Qn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){te(e,t,r)}else n.current=null}function Wl(e,t,n){try{n()}catch(r){te(e,t,r)}}var jc=!1;function s0(e,t){if(Cl=xi,e=kf(),js(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,u=0,c=0,f=e,h=null;t:for(;;){for(var v;f!==n||o!==0&&f.nodeType!==3||(l=a+o),f!==i||r!==0&&f.nodeType!==3||(s=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(v=f.firstChild)!==null;)h=f,f=v;for(;;){if(f===e)break t;if(h===n&&++u===o&&(l=a),h===i&&++c===r&&(s=a),(v=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=v}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(El={focusedElem:e,selectionRange:n},xi=!1,D=t;D!==null;)if(t=D,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,D=e;else for(;D!==null;){t=D;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var x=y.memoizedProps,k=y.memoizedState,m=t.stateNode,p=m.getSnapshotBeforeUpdate(t.elementType===t.type?x:qe(t.type,x),k);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(w){te(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,D=e;break}D=t.return}return y=jc,jc=!1,y}function Hr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Wl(t,n,i)}o=o.next}while(o!==r)}}function ea(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Bl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function yp(e){var t=e.alternate;t!==null&&(e.alternate=null,yp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ft],delete t[ao],delete t[Nl],delete t[Vg],delete t[Yg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function xp(e){return e.tag===5||e.tag===3||e.tag===4}function Fc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||xp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Al(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Si));else if(r!==4&&(e=e.child,e!==null))for(Al(e,t,n),e=e.sibling;e!==null;)Al(e,t,n),e=e.sibling}function Ul(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ul(e,t,n),e=e.sibling;e!==null;)Ul(e,t,n),e=e.sibling}var de=null,Ze=!1;function $t(e,t,n){for(n=n.child;n!==null;)wp(e,t,n),n=n.sibling}function wp(e,t,n){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(Hi,n)}catch{}switch(n.tag){case 5:ge||Qn(n,t);case 6:var r=de,o=Ze;de=null,$t(e,t,n),de=r,Ze=o,de!==null&&(Ze?(e=de,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):de.removeChild(n.stateNode));break;case 18:de!==null&&(Ze?(e=de,n=n.stateNode,e.nodeType===8?ba(e.parentNode,n):e.nodeType===1&&ba(e,n),to(e)):ba(de,n.stateNode));break;case 4:r=de,o=Ze,de=n.stateNode.containerInfo,Ze=!0,$t(e,t,n),de=r,Ze=o;break;case 0:case 11:case 14:case 15:if(!ge&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&Wl(n,t,a),o=o.next}while(o!==r)}$t(e,t,n);break;case 1:if(!ge&&(Qn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){te(n,t,l)}$t(e,t,n);break;case 21:$t(e,t,n);break;case 22:n.mode&1?(ge=(r=ge)||n.memoizedState!==null,$t(e,t,n),ge=r):$t(e,t,n);break;default:$t(e,t,n)}}function Dc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new l0),t.forEach(function(r){var o=v0.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Je(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:de=l.stateNode,Ze=!1;break e;case 3:de=l.stateNode.containerInfo,Ze=!0;break e;case 4:de=l.stateNode.containerInfo,Ze=!0;break e}l=l.return}if(de===null)throw Error(j(160));wp(i,a,o),de=null,Ze=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){te(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)kp(t,e),t=t.sibling}function kp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Je(t,e),st(e),r&4){try{Hr(3,e,e.return),ea(3,e)}catch(x){te(e,e.return,x)}try{Hr(5,e,e.return)}catch(x){te(e,e.return,x)}}break;case 1:Je(t,e),st(e),r&512&&n!==null&&Qn(n,n.return);break;case 5:if(Je(t,e),st(e),r&512&&n!==null&&Qn(n,n.return),e.flags&32){var o=e.stateNode;try{Jr(o,"")}catch(x){te(e,e.return,x)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Bd(o,i),pl(l,a);var u=pl(l,i);for(a=0;a<s.length;a+=2){var c=s[a],f=s[a+1];c==="style"?Hd(o,f):c==="dangerouslySetInnerHTML"?Vd(o,f):c==="children"?Jr(o,f):ms(o,c,f,u)}switch(l){case"input":sl(o,i);break;case"textarea":Ad(o,i);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?Jn(o,!!i.multiple,v,!1):h!==!!i.multiple&&(i.defaultValue!=null?Jn(o,!!i.multiple,i.defaultValue,!0):Jn(o,!!i.multiple,i.multiple?[]:"",!1))}o[ao]=i}catch(x){te(e,e.return,x)}}break;case 6:if(Je(t,e),st(e),r&4){if(e.stateNode===null)throw Error(j(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(x){te(e,e.return,x)}}break;case 3:if(Je(t,e),st(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{to(t.containerInfo)}catch(x){te(e,e.return,x)}break;case 4:Je(t,e),st(e);break;case 13:Je(t,e),st(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Qs=ne())),r&4&&Dc(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(ge=(u=ge)||c,Je(t,e),ge=u):Je(t,e),st(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(D=e,c=e.child;c!==null;){for(f=D=c;D!==null;){switch(h=D,v=h.child,h.tag){case 0:case 11:case 14:case 15:Hr(4,h,h.return);break;case 1:Qn(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(x){te(r,n,x)}}break;case 5:Qn(h,h.return);break;case 22:if(h.memoizedState!==null){bc(f);continue}}v!==null?(v.return=h,D=v):bc(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{o=f.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=f.stateNode,s=f.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Yd("display",a))}catch(x){te(e,e.return,x)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(x){te(e,e.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Je(t,e),st(e),r&4&&Dc(e);break;case 21:break;default:Je(t,e),st(e)}}function st(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(xp(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Jr(o,""),r.flags&=-33);var i=Fc(e);Ul(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Fc(e);Al(e,l,a);break;default:throw Error(j(161))}}catch(s){te(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function u0(e,t,n){D=e,Sp(e)}function Sp(e,t,n){for(var r=(e.mode&1)!==0;D!==null;){var o=D,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||Yo;if(!a){var l=o.alternate,s=l!==null&&l.memoizedState!==null||ge;l=Yo;var u=ge;if(Yo=a,(ge=s)&&!u)for(D=o;D!==null;)a=D,s=a.child,a.tag===22&&a.memoizedState!==null?Oc(o):s!==null?(s.return=a,D=s):Oc(o);for(;i!==null;)D=i,Sp(i),i=i.sibling;D=o,Yo=l,ge=u}Mc(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,D=i):Mc(e)}}function Mc(e){for(;D!==null;){var t=D;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ge||ea(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ge)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:qe(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&hc(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}hc(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&to(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}ge||t.flags&512&&Bl(t)}catch(h){te(t,t.return,h)}}if(t===e){D=null;break}if(n=t.sibling,n!==null){n.return=t.return,D=n;break}D=t.return}}function bc(e){for(;D!==null;){var t=D;if(t===e){D=null;break}var n=t.sibling;if(n!==null){n.return=t.return,D=n;break}D=t.return}}function Oc(e){for(;D!==null;){var t=D;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ea(4,t)}catch(s){te(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){te(t,o,s)}}var i=t.return;try{Bl(t)}catch(s){te(t,i,s)}break;case 5:var a=t.return;try{Bl(t)}catch(s){te(t,a,s)}}}catch(s){te(t,t.return,s)}if(t===e){D=null;break}var l=t.sibling;if(l!==null){l.return=t.return,D=l;break}D=t.return}}var c0=Math.ceil,Oi=Ot.ReactCurrentDispatcher,Hs=Ot.ReactCurrentOwner,Ye=Ot.ReactCurrentBatchConfig,I=0,ce=null,ie=null,fe=0,Le=0,Kn=un(0),le=0,po=null,jn=0,ta=0,Gs=0,Gr=null,Pe=null,Qs=0,cr=1/0,Ct=null,Ti=!1,Vl=null,en=null,Ho=!1,Gt=null,Li=0,Qr=0,Yl=null,ii=-1,ai=0;function Ce(){return I&6?ne():ii!==-1?ii:ii=ne()}function tn(e){return e.mode&1?I&2&&fe!==0?fe&-fe:Gg.transition!==null?(ai===0&&(ai=of()),ai):(e=U,e!==0||(e=window.event,e=e===void 0?16:ff(e.type)),e):1}function rt(e,t,n,r){if(50<Qr)throw Qr=0,Yl=null,Error(j(185));wo(e,n,r),(!(I&2)||e!==ce)&&(e===ce&&(!(I&2)&&(ta|=n),le===4&&Yt(e,fe)),Me(e,r),n===1&&I===0&&!(t.mode&1)&&(cr=ne()+500,Ji&&cn()))}function Me(e,t){var n=e.callbackNode;Gm(e,t);var r=yi(e,e===ce?fe:0);if(r===0)n!==null&&Au(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Au(n),t===1)e.tag===0?Hg(Tc.bind(null,e)):Mf(Tc.bind(null,e)),Ag(function(){!(I&6)&&cn()}),n=null;else{switch(af(r)){case 1:n=ws;break;case 4:n=nf;break;case 16:n=vi;break;case 536870912:n=rf;break;default:n=vi}n=Dp(n,Cp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Cp(e,t){if(ii=-1,ai=0,I&6)throw Error(j(327));var n=e.callbackNode;if(nr()&&e.callbackNode!==n)return null;var r=yi(e,e===ce?fe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ri(e,r);else{t=r;var o=I;I|=2;var i=_p();(ce!==e||fe!==t)&&(Ct=null,cr=ne()+500,Sn(e,t));do try{p0();break}catch(l){Ep(e,l)}while(!0);Os(),Oi.current=i,I=o,ie!==null?t=0:(ce=null,fe=0,t=le)}if(t!==0){if(t===2&&(o=yl(e),o!==0&&(r=o,t=Hl(e,o))),t===1)throw n=po,Sn(e,0),Yt(e,r),Me(e,ne()),n;if(t===6)Yt(e,r);else{if(o=e.current.alternate,!(r&30)&&!d0(o)&&(t=Ri(e,r),t===2&&(i=yl(e),i!==0&&(r=i,t=Hl(e,i))),t===1))throw n=po,Sn(e,0),Yt(e,r),Me(e,ne()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(j(345));case 2:gn(e,Pe,Ct);break;case 3:if(Yt(e,r),(r&130023424)===r&&(t=Qs+500-ne(),10<t)){if(yi(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ce(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Pl(gn.bind(null,e,Pe,Ct),t);break}gn(e,Pe,Ct);break;case 4:if(Yt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-nt(r);i=1<<a,a=t[a],a>o&&(o=a),r&=~i}if(r=o,r=ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*c0(r/1960))-r,10<r){e.timeoutHandle=Pl(gn.bind(null,e,Pe,Ct),r);break}gn(e,Pe,Ct);break;case 5:gn(e,Pe,Ct);break;default:throw Error(j(329))}}}return Me(e,ne()),e.callbackNode===n?Cp.bind(null,e):null}function Hl(e,t){var n=Gr;return e.current.memoizedState.isDehydrated&&(Sn(e,t).flags|=256),e=Ri(e,t),e!==2&&(t=Pe,Pe=n,t!==null&&Gl(t)),e}function Gl(e){Pe===null?Pe=e:Pe.push.apply(Pe,e)}function d0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!it(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Yt(e,t){for(t&=~Gs,t&=~ta,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-nt(t),r=1<<n;e[n]=-1,t&=~r}}function Tc(e){if(I&6)throw Error(j(327));nr();var t=yi(e,0);if(!(t&1))return Me(e,ne()),null;var n=Ri(e,t);if(e.tag!==0&&n===2){var r=yl(e);r!==0&&(t=r,n=Hl(e,r))}if(n===1)throw n=po,Sn(e,0),Yt(e,t),Me(e,ne()),n;if(n===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,gn(e,Pe,Ct),Me(e,ne()),null}function Ks(e,t){var n=I;I|=1;try{return e(t)}finally{I=n,I===0&&(cr=ne()+500,Ji&&cn())}}function Fn(e){Gt!==null&&Gt.tag===0&&!(I&6)&&nr();var t=I;I|=1;var n=Ye.transition,r=U;try{if(Ye.transition=null,U=1,e)return e()}finally{U=r,Ye.transition=n,I=t,!(I&6)&&cn()}}function Xs(){Le=Kn.current,X(Kn)}function Sn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Bg(n)),ie!==null)for(n=ie.return;n!==null;){var r=n;switch(Ds(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ci();break;case 3:sr(),X(Fe),X(ye),$s();break;case 5:Is(r);break;case 4:sr();break;case 13:X(q);break;case 19:X(q);break;case 10:Ts(r.type._context);break;case 22:case 23:Xs()}n=n.return}if(ce=e,ie=e=nn(e.current,null),fe=Le=t,le=0,po=null,Gs=ta=jn=0,Pe=Gr=null,xn!==null){for(t=0;t<xn.length;t++)if(n=xn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}n.pending=r}xn=null}return e}function Ep(e,t){do{var n=ie;try{if(Os(),ni.current=bi,Mi){for(var r=Z.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Mi=!1}if(Nn=0,se=ae=Z=null,Yr=!1,uo=0,Hs.current=null,n===null||n.return===null){le=1,po=t,ie=null;break}e:{var i=e,a=n.return,l=n,s=t;if(t=fe,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,c=l,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var v=kc(a);if(v!==null){v.flags&=-257,Sc(v,a,l,i,t),v.mode&1&&wc(i,u,t),t=v,s=u;var y=t.updateQueue;if(y===null){var x=new Set;x.add(s),t.updateQueue=x}else y.add(s);break e}else{if(!(t&1)){wc(i,u,t),Js();break e}s=Error(j(426))}}else if(J&&l.mode&1){var k=kc(a);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Sc(k,a,l,i,t),Ms(ur(s,l));break e}}i=s=ur(s,l),le!==4&&(le=2),Gr===null?Gr=[i]:Gr.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var m=lp(i,s,t);pc(i,m);break e;case 1:l=s;var p=i.type,g=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(en===null||!en.has(g)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=sp(i,l,t);pc(i,w);break e}}i=i.return}while(i!==null)}Np(n)}catch(P){t=P,ie===n&&n!==null&&(ie=n=n.return);continue}break}while(!0)}function _p(){var e=Oi.current;return Oi.current=bi,e===null?bi:e}function Js(){(le===0||le===3||le===2)&&(le=4),ce===null||!(jn&268435455)&&!(ta&268435455)||Yt(ce,fe)}function Ri(e,t){var n=I;I|=2;var r=_p();(ce!==e||fe!==t)&&(Ct=null,Sn(e,t));do try{f0();break}catch(o){Ep(e,o)}while(!0);if(Os(),I=n,Oi.current=r,ie!==null)throw Error(j(261));return ce=null,fe=0,le}function f0(){for(;ie!==null;)Pp(ie)}function p0(){for(;ie!==null&&!Im();)Pp(ie)}function Pp(e){var t=Fp(e.alternate,e,Le);e.memoizedProps=e.pendingProps,t===null?Np(e):ie=t,Hs.current=null}function Np(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=a0(n,t),n!==null){n.flags&=32767,ie=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{le=6,ie=null;return}}else if(n=i0(n,t,Le),n!==null){ie=n;return}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);le===0&&(le=5)}function gn(e,t,n){var r=U,o=Ye.transition;try{Ye.transition=null,U=1,h0(e,t,n,r)}finally{Ye.transition=o,U=r}return null}function h0(e,t,n,r){do nr();while(Gt!==null);if(I&6)throw Error(j(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Qm(e,i),e===ce&&(ie=ce=null,fe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ho||(Ho=!0,Dp(vi,function(){return nr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ye.transition,Ye.transition=null;var a=U;U=1;var l=I;I|=4,Hs.current=null,s0(e,n),kp(n,e),Tg(El),xi=!!Cl,El=Cl=null,e.current=n,u0(n),$m(),I=l,U=a,Ye.transition=i}else e.current=n;if(Ho&&(Ho=!1,Gt=e,Li=o),i=e.pendingLanes,i===0&&(en=null),Am(n.stateNode),Me(e,ne()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Ti)throw Ti=!1,e=Vl,Vl=null,e;return Li&1&&e.tag!==0&&nr(),i=e.pendingLanes,i&1?e===Yl?Qr++:(Qr=0,Yl=e):Qr=0,cn(),null}function nr(){if(Gt!==null){var e=af(Li),t=Ye.transition,n=U;try{if(Ye.transition=null,U=16>e?16:e,Gt===null)var r=!1;else{if(e=Gt,Gt=null,Li=0,I&6)throw Error(j(331));var o=I;for(I|=4,D=e.current;D!==null;){var i=D,a=i.child;if(D.flags&16){var l=i.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(D=u;D!==null;){var c=D;switch(c.tag){case 0:case 11:case 15:Hr(8,c,i)}var f=c.child;if(f!==null)f.return=c,D=f;else for(;D!==null;){c=D;var h=c.sibling,v=c.return;if(yp(c),c===u){D=null;break}if(h!==null){h.return=v,D=h;break}D=v}}}var y=i.alternate;if(y!==null){var x=y.child;if(x!==null){y.child=null;do{var k=x.sibling;x.sibling=null,x=k}while(x!==null)}}D=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,D=a;else e:for(;D!==null;){if(i=D,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Hr(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,D=m;break e}D=i.return}}var p=e.current;for(D=p;D!==null;){a=D;var g=a.child;if(a.subtreeFlags&2064&&g!==null)g.return=a,D=g;else e:for(a=p;D!==null;){if(l=D,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ea(9,l)}}catch(P){te(l,l.return,P)}if(l===a){D=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,D=w;break e}D=l.return}}if(I=o,cn(),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(Hi,e)}catch{}r=!0}return r}finally{U=n,Ye.transition=t}}return!1}function Lc(e,t,n){t=ur(n,t),t=lp(e,t,1),e=Zt(e,t,1),t=Ce(),e!==null&&(wo(e,1,t),Me(e,t))}function te(e,t,n){if(e.tag===3)Lc(e,e,n);else for(;t!==null;){if(t.tag===3){Lc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(en===null||!en.has(r))){e=ur(n,e),e=sp(t,e,1),t=Zt(t,e,1),e=Ce(),t!==null&&(wo(t,1,e),Me(t,e));break}}t=t.return}}function m0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ce(),e.pingedLanes|=e.suspendedLanes&n,ce===e&&(fe&n)===n&&(le===4||le===3&&(fe&130023424)===fe&&500>ne()-Qs?Sn(e,0):Gs|=n),Me(e,t)}function jp(e,t){t===0&&(e.mode&1?(t=Ro,Ro<<=1,!(Ro&130023424)&&(Ro=4194304)):t=1);var n=Ce();e=Mt(e,t),e!==null&&(wo(e,t,n),Me(e,n))}function g0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),jp(e,n)}function v0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(t),jp(e,n)}var Fp;Fp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Fe.current)Ne=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ne=!1,o0(e,t,n);Ne=!!(e.flags&131072)}else Ne=!1,J&&t.flags&1048576&&bf(t,Pi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;oi(e,t),e=t.pendingProps;var o=ir(t,ye.current);tr(t,n),o=Bs(null,t,r,e,o,n);var i=As();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,De(r)?(i=!0,Ei(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Rs(t),o.updater=qi,t.stateNode=o,o._reactInternals=t,Ol(t,r,e,n),t=Rl(null,t,r,!0,i,n)):(t.tag=0,J&&i&&Fs(t),ke(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(oi(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=x0(r),e=qe(r,e),o){case 0:t=Ll(null,t,r,e,n);break e;case 1:t=_c(null,t,r,e,n);break e;case 11:t=Cc(null,t,r,e,n);break e;case 14:t=Ec(null,t,r,qe(r.type,e),n);break e}throw Error(j(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:qe(r,o),Ll(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:qe(r,o),_c(e,t,r,o,n);case 3:e:{if(fp(t),e===null)throw Error(j(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Rf(e,t),Fi(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=ur(Error(j(423)),t),t=Pc(e,t,r,n,o);break e}else if(r!==o){o=ur(Error(j(424)),t),t=Pc(e,t,r,n,o);break e}else for(Re=qt(t.stateNode.containerInfo.firstChild),ze=t,J=!0,et=null,n=Wf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ar(),r===o){t=bt(e,t,n);break e}ke(e,t,r,n)}t=t.child}return t;case 5:return Bf(t),e===null&&Dl(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,_l(r,o)?a=null:i!==null&&_l(r,i)&&(t.flags|=32),dp(e,t),ke(e,t,a,n),t.child;case 6:return e===null&&Dl(t),null;case 13:return pp(e,t,n);case 4:return zs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=lr(t,null,r,n):ke(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:qe(r,o),Cc(e,t,r,o,n);case 7:return ke(e,t,t.pendingProps,n),t.child;case 8:return ke(e,t,t.pendingProps.children,n),t.child;case 12:return ke(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,H(Ni,r._currentValue),r._currentValue=a,i!==null)if(it(i.value,a)){if(i.children===o.children&&!Fe.current){t=bt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){a=i.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=jt(-1,n&-n),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?s.next=s:(s.next=c.next,c.next=s),u.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Ml(i.return,n,t),l.lanes|=n;break}s=s.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(j(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Ml(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}ke(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,tr(t,n),o=He(o),r=r(o),t.flags|=1,ke(e,t,r,n),t.child;case 14:return r=t.type,o=qe(r,t.pendingProps),o=qe(r.type,o),Ec(e,t,r,o,n);case 15:return up(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:qe(r,o),oi(e,t),t.tag=1,De(r)?(e=!0,Ei(t)):e=!1,tr(t,n),If(t,r,o),Ol(t,r,o,n),Rl(null,t,r,!0,e,n);case 19:return hp(e,t,n);case 22:return cp(e,t,n)}throw Error(j(156,t.tag))};function Dp(e,t){return tf(e,t)}function y0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ve(e,t,n,r){return new y0(e,t,n,r)}function qs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function x0(e){if(typeof e=="function")return qs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===vs)return 11;if(e===ys)return 14}return 2}function nn(e,t){var n=e.alternate;return n===null?(n=Ve(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function li(e,t,n,r,o,i){var a=2;if(r=e,typeof e=="function")qs(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case $n:return Cn(n.children,o,i,t);case gs:a=8,o|=8;break;case rl:return e=Ve(12,n,t,o|2),e.elementType=rl,e.lanes=i,e;case ol:return e=Ve(13,n,t,o),e.elementType=ol,e.lanes=i,e;case il:return e=Ve(19,n,t,o),e.elementType=il,e.lanes=i,e;case Id:return na(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Rd:a=10;break e;case zd:a=9;break e;case vs:a=11;break e;case ys:a=14;break e;case At:a=16,r=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=Ve(a,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Cn(e,t,n,r){return e=Ve(7,e,r,t),e.lanes=n,e}function na(e,t,n,r){return e=Ve(22,e,r,t),e.elementType=Id,e.lanes=n,e.stateNode={isHidden:!1},e}function Wa(e,t,n){return e=Ve(6,e,null,t),e.lanes=n,e}function Ba(e,t,n){return t=Ve(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function w0(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ka(0),this.expirationTimes=ka(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ka(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Zs(e,t,n,r,o,i,a,l,s){return e=new w0(e,t,n,l,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ve(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Rs(i),e}function k0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:In,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Mp(e){if(!e)return ln;e=e._reactInternals;e:{if(bn(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(De(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var n=e.type;if(De(n))return Df(e,n,t)}return t}function bp(e,t,n,r,o,i,a,l,s){return e=Zs(n,r,!0,e,o,i,a,l,s),e.context=Mp(null),n=e.current,r=Ce(),o=tn(n),i=jt(r,o),i.callback=t??null,Zt(n,i,o),e.current.lanes=o,wo(e,o,r),Me(e,r),e}function ra(e,t,n,r){var o=t.current,i=Ce(),a=tn(o);return n=Mp(n),t.context===null?t.context=n:t.pendingContext=n,t=jt(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Zt(o,t,a),e!==null&&(rt(e,o,a,i),ti(e,o,a)),a}function zi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Rc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function eu(e,t){Rc(e,t),(e=e.alternate)&&Rc(e,t)}function S0(){return null}var Op=typeof reportError=="function"?reportError:function(e){console.error(e)};function tu(e){this._internalRoot=e}oa.prototype.render=tu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));ra(e,t,null,null)};oa.prototype.unmount=tu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Fn(function(){ra(null,e,null,null)}),t[Dt]=null}};function oa(e){this._internalRoot=e}oa.prototype.unstable_scheduleHydration=function(e){if(e){var t=uf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Vt.length&&t!==0&&t<Vt[n].priority;n++);Vt.splice(n,0,e),n===0&&df(e)}};function nu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ia(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function zc(){}function C0(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=zi(a);i.call(u)}}var a=bp(t,r,e,0,null,!1,!1,"",zc);return e._reactRootContainer=a,e[Dt]=a.current,oo(e.nodeType===8?e.parentNode:e),Fn(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var u=zi(s);l.call(u)}}var s=Zs(e,0,!1,null,null,!1,!1,"",zc);return e._reactRootContainer=s,e[Dt]=s.current,oo(e.nodeType===8?e.parentNode:e),Fn(function(){ra(t,s,n,r)}),s}function aa(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var l=o;o=function(){var s=zi(a);l.call(s)}}ra(t,a,e,o)}else a=C0(n,t,e,o,r);return zi(a)}lf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=zr(t.pendingLanes);n!==0&&(ks(t,n|1),Me(t,ne()),!(I&6)&&(cr=ne()+500,cn()))}break;case 13:Fn(function(){var r=Mt(e,1);if(r!==null){var o=Ce();rt(r,e,1,o)}}),eu(e,1)}};Ss=function(e){if(e.tag===13){var t=Mt(e,134217728);if(t!==null){var n=Ce();rt(t,e,134217728,n)}eu(e,134217728)}};sf=function(e){if(e.tag===13){var t=tn(e),n=Mt(e,t);if(n!==null){var r=Ce();rt(n,e,t,r)}eu(e,t)}};uf=function(){return U};cf=function(e,t){var n=U;try{return U=e,t()}finally{U=n}};ml=function(e,t,n){switch(t){case"input":if(sl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Xi(r);if(!o)throw Error(j(90));Wd(r),sl(r,o)}}}break;case"textarea":Ad(e,n);break;case"select":t=n.value,t!=null&&Jn(e,!!n.multiple,t,!1)}};Kd=Ks;Xd=Fn;var E0={usingClientEntryPoint:!1,Events:[So,Un,Xi,Gd,Qd,Ks]},Or={findFiberByHostInstance:yn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},_0={bundleType:Or.bundleType,version:Or.version,rendererPackageName:Or.rendererPackageName,rendererConfig:Or.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ot.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Zd(e),e===null?null:e.stateNode},findFiberByHostInstance:Or.findFiberByHostInstance||S0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Go=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Go.isDisabled&&Go.supportsFiber)try{Hi=Go.inject(_0),gt=Go}catch{}}We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=E0;We.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nu(t))throw Error(j(200));return k0(e,t,null,n)};We.createRoot=function(e,t){if(!nu(e))throw Error(j(299));var n=!1,r="",o=Op;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Zs(e,1,!1,null,null,n,!1,r,o),e[Dt]=t.current,oo(e.nodeType===8?e.parentNode:e),new tu(t)};We.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=Zd(t),e=e===null?null:e.stateNode,e};We.flushSync=function(e){return Fn(e)};We.hydrate=function(e,t,n){if(!ia(t))throw Error(j(200));return aa(null,e,t,!0,n)};We.hydrateRoot=function(e,t,n){if(!nu(e))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",a=Op;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=bp(t,null,e,1,n??null,o,!1,i,a),e[Dt]=t.current,oo(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new oa(t)};We.render=function(e,t,n){if(!ia(t))throw Error(j(200));return aa(null,e,t,!1,n)};We.unmountComponentAtNode=function(e){if(!ia(e))throw Error(j(40));return e._reactRootContainer?(Fn(function(){aa(null,null,e,!1,function(){e._reactRootContainer=null,e[Dt]=null})}),!0):!1};We.unstable_batchedUpdates=Ks;We.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ia(n))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return aa(e,t,n,!1,r)};We.version="18.2.0-next-9e3b772b8-20220608";function Tp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Tp)}catch(e){console.error(e)}}Tp(),Md.exports=We;var P0=Md.exports,Ic=P0;tl.createRoot=Ic.createRoot,tl.hydrateRoot=Ic.hydrateRoot;/**
 * @remix-run/router v1.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ho(){return ho=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ho.apply(this,arguments)}var Qt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Qt||(Qt={}));const $c="popstate";function N0(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:a,hash:l}=r.location;return Ql("",{pathname:i,search:a,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:Ii(o)}return F0(t,n,null,e)}function re(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Lp(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function j0(){return Math.random().toString(36).substr(2,8)}function Wc(e,t){return{usr:e.state,key:e.key,idx:t}}function Ql(e,t,n,r){return n===void 0&&(n=null),ho({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?kr(t):t,{state:n,key:t&&t.key||r||j0()})}function Ii(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function kr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function F0(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,a=o.history,l=Qt.Pop,s=null,u=c();u==null&&(u=0,a.replaceState(ho({},a.state,{idx:u}),""));function c(){return(a.state||{idx:null}).idx}function f(){l=Qt.Pop;let k=c(),m=k==null?null:k-u;u=k,s&&s({action:l,location:x.location,delta:m})}function h(k,m){l=Qt.Push;let p=Ql(x.location,k,m);n&&n(p,k),u=c()+1;let g=Wc(p,u),w=x.createHref(p);try{a.pushState(g,"",w)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;o.location.assign(w)}i&&s&&s({action:l,location:x.location,delta:1})}function v(k,m){l=Qt.Replace;let p=Ql(x.location,k,m);n&&n(p,k),u=c();let g=Wc(p,u),w=x.createHref(p);a.replaceState(g,"",w),i&&s&&s({action:l,location:x.location,delta:0})}function y(k){let m=o.location.origin!=="null"?o.location.origin:o.location.href,p=typeof k=="string"?k:Ii(k);return p=p.replace(/ $/,"%20"),re(m,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,m)}let x={get action(){return l},get location(){return e(o,a)},listen(k){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener($c,f),s=k,()=>{o.removeEventListener($c,f),s=null}},createHref(k){return t(o,k)},createURL:y,encodeLocation(k){let m=y(k);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:h,replace:v,go(k){return a.go(k)}};return x}var Bc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Bc||(Bc={}));function D0(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?kr(t):t,o=ru(r.pathname||"/",n);if(o==null)return null;let i=Rp(e);M0(i);let a=null;for(let l=0;a==null&&l<i.length;++l){let s=U0(o);a=W0(i[l],s)}return a}function Rp(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,a,l)=>{let s={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};s.relativePath.startsWith("/")&&(re(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=rn([r,s.relativePath]),c=n.concat(s);i.children&&i.children.length>0&&(re(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Rp(i.children,t,c,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:I0(u,i.index),routesMeta:c})};return e.forEach((i,a)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))o(i,a);else for(let s of zp(i.path))o(i,a,s)}),t}function zp(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let a=zp(r.join("/")),l=[];return l.push(...a.map(s=>s===""?i:[i,s].join("/"))),o&&l.push(...a),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function M0(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:$0(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const b0=/^:[\w-]+$/,O0=3,T0=2,L0=1,R0=10,z0=-2,Ac=e=>e==="*";function I0(e,t){let n=e.split("/"),r=n.length;return n.some(Ac)&&(r+=z0),t&&(r+=T0),n.filter(o=>!Ac(o)).reduce((o,i)=>o+(b0.test(i)?O0:i===""?L0:R0),r)}function $0(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function W0(e,t){let{routesMeta:n}=e,r={},o="/",i=[];for(let a=0;a<n.length;++a){let l=n[a],s=a===n.length-1,u=o==="/"?t:t.slice(o.length)||"/",c=B0({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},u);if(!c)return null;Object.assign(r,c.params);let f=l.route;i.push({params:r,pathname:rn([o,c.pathname]),pathnameBase:G0(rn([o,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(o=rn([o,c.pathnameBase]))}return i}function B0(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=A0(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:r.reduce((u,c,f)=>{let{paramName:h,isOptional:v}=c;if(h==="*"){let x=l[f]||"";a=i.slice(0,i.length-x.length).replace(/(.)\/+$/,"$1")}const y=l[f];return v&&!y?u[h]=void 0:u[h]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:a,pattern:e}}function A0(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Lp(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,s)=>(r.push({paramName:l,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function U0(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Lp(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ru(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function V0(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?kr(e):e;return{pathname:n?n.startsWith("/")?n:Y0(n,t):t,search:Q0(r),hash:K0(o)}}function Y0(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Aa(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function H0(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ou(e,t){let n=H0(e);return t?n.map((r,o)=>o===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function iu(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=kr(e):(o=ho({},e),re(!o.pathname||!o.pathname.includes("?"),Aa("?","pathname","search",o)),re(!o.pathname||!o.pathname.includes("#"),Aa("#","pathname","hash",o)),re(!o.search||!o.search.includes("#"),Aa("#","search","hash",o)));let i=e===""||o.pathname==="",a=i?"/":o.pathname,l;if(a==null)l=n;else{let f=t.length-1;if(!r&&a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),f-=1;o.pathname=h.join("/")}l=f>=0?t[f]:"/"}let s=V0(o,l),u=a&&a!=="/"&&a.endsWith("/"),c=(i||a===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||c)&&(s.pathname+="/"),s}const rn=e=>e.join("/").replace(/\/\/+/g,"/"),G0=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Q0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,K0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function X0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Ip=["post","put","patch","delete"];new Set(Ip);const J0=["get",...Ip];new Set(J0);/**
 * React Router v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function mo(){return mo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},mo.apply(this,arguments)}const au=C.createContext(null),q0=C.createContext(null),dn=C.createContext(null),la=C.createContext(null),yt=C.createContext({outlet:null,matches:[],isDataRoute:!1}),$p=C.createContext(null);function Z0(e,t){let{relative:n}=t===void 0?{}:t;Sr()||re(!1);let{basename:r,navigator:o}=C.useContext(dn),{hash:i,pathname:a,search:l}=Bp(e,{relative:n}),s=a;return r!=="/"&&(s=a==="/"?r:rn([r,a])),o.createHref({pathname:s,search:l,hash:i})}function Sr(){return C.useContext(la)!=null}function Eo(){return Sr()||re(!1),C.useContext(la).location}function Wp(e){C.useContext(dn).static||C.useLayoutEffect(e)}function Tt(){let{isDataRoute:e}=C.useContext(yt);return e?mv():ev()}function ev(){Sr()||re(!1);let e=C.useContext(au),{basename:t,future:n,navigator:r}=C.useContext(dn),{matches:o}=C.useContext(yt),{pathname:i}=Eo(),a=JSON.stringify(ou(o,n.v7_relativeSplatPath)),l=C.useRef(!1);return Wp(()=>{l.current=!0}),C.useCallback(function(u,c){if(c===void 0&&(c={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let f=iu(u,JSON.parse(a),i,c.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:rn([t,f.pathname])),(c.replace?r.replace:r.push)(f,c.state,c)},[t,r,a,i,e])}const tv=C.createContext(null);function nv(e){let t=C.useContext(yt).outlet;return t&&C.createElement(tv.Provider,{value:e},t)}function rv(){let{matches:e}=C.useContext(yt),t=e[e.length-1];return t?t.params:{}}function Bp(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=C.useContext(dn),{matches:o}=C.useContext(yt),{pathname:i}=Eo(),a=JSON.stringify(ou(o,r.v7_relativeSplatPath));return C.useMemo(()=>iu(e,JSON.parse(a),i,n==="path"),[e,a,i,n])}function ov(e,t){return iv(e,t)}function iv(e,t,n,r){Sr()||re(!1);let{navigator:o}=C.useContext(dn),{matches:i}=C.useContext(yt),a=i[i.length-1],l=a?a.params:{};a&&a.pathname;let s=a?a.pathnameBase:"/";a&&a.route;let u=Eo(),c;if(t){var f;let k=typeof t=="string"?kr(t):t;s==="/"||(f=k.pathname)!=null&&f.startsWith(s)||re(!1),c=k}else c=u;let h=c.pathname||"/",v=h;if(s!=="/"){let k=s.replace(/^\//,"").split("/");v="/"+h.replace(/^\//,"").split("/").slice(k.length).join("/")}let y=D0(e,{pathname:v}),x=cv(y&&y.map(k=>Object.assign({},k,{params:Object.assign({},l,k.params),pathname:rn([s,o.encodeLocation?o.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?s:rn([s,o.encodeLocation?o.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),i,n,r);return t&&x?C.createElement(la.Provider,{value:{location:mo({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Qt.Pop}},x):x}function av(){let e=hv(),t=X0(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},t),n?C.createElement("pre",{style:o},n):null,null)}const lv=C.createElement(av,null);class sv extends C.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?C.createElement(yt.Provider,{value:this.props.routeContext},C.createElement($p.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function uv(e){let{routeContext:t,match:n,children:r}=e,o=C.useContext(au);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(yt.Provider,{value:t},r)}function cv(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let a=e,l=(o=n)==null?void 0:o.errors;if(l!=null){let c=a.findIndex(f=>f.route.id&&(l==null?void 0:l[f.route.id])!==void 0);c>=0||re(!1),a=a.slice(0,Math.min(a.length,c+1))}let s=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<a.length;c++){let f=a[c];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=c),f.route.id){let{loaderData:h,errors:v}=n,y=f.route.loader&&h[f.route.id]===void 0&&(!v||v[f.route.id]===void 0);if(f.route.lazy||y){s=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((c,f,h)=>{let v,y=!1,x=null,k=null;n&&(v=l&&f.route.id?l[f.route.id]:void 0,x=f.route.errorElement||lv,s&&(u<0&&h===0?(gv("route-fallback",!1),y=!0,k=null):u===h&&(y=!0,k=f.route.hydrateFallbackElement||null)));let m=t.concat(a.slice(0,h+1)),p=()=>{let g;return v?g=x:y?g=k:f.route.Component?g=C.createElement(f.route.Component,null):f.route.element?g=f.route.element:g=c,C.createElement(uv,{match:f,routeContext:{outlet:c,matches:m,isDataRoute:n!=null},children:g})};return n&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?C.createElement(sv,{location:n.location,revalidation:n.revalidation,component:x,error:v,children:p(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):p()},null)}var Ap=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Ap||{}),$i=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}($i||{});function dv(e){let t=C.useContext(au);return t||re(!1),t}function fv(e){let t=C.useContext(q0);return t||re(!1),t}function pv(e){let t=C.useContext(yt);return t||re(!1),t}function Up(e){let t=pv(),n=t.matches[t.matches.length-1];return n.route.id||re(!1),n.route.id}function hv(){var e;let t=C.useContext($p),n=fv($i.UseRouteError),r=Up($i.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function mv(){let{router:e}=dv(Ap.UseNavigateStable),t=Up($i.UseNavigateStable),n=C.useRef(!1);return Wp(()=>{n.current=!0}),C.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,mo({fromRouteId:t},i)))},[e,t])}const Uc={};function gv(e,t,n){!t&&!Uc[e]&&(Uc[e]=!0)}function vv(e){let{to:t,replace:n,state:r,relative:o}=e;Sr()||re(!1);let{future:i,static:a}=C.useContext(dn),{matches:l}=C.useContext(yt),{pathname:s}=Eo(),u=Tt(),c=iu(t,ou(l,i.v7_relativeSplatPath),s,o==="path"),f=JSON.stringify(c);return C.useEffect(()=>u(JSON.parse(f),{replace:n,state:r,relative:o}),[u,f,o,n,r]),null}function lu(e){return nv(e.context)}function ut(e){re(!1)}function yv(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Qt.Pop,navigator:i,static:a=!1,future:l}=e;Sr()&&re(!1);let s=t.replace(/^\/*/,"/"),u=C.useMemo(()=>({basename:s,navigator:i,static:a,future:mo({v7_relativeSplatPath:!1},l)}),[s,l,i,a]);typeof r=="string"&&(r=kr(r));let{pathname:c="/",search:f="",hash:h="",state:v=null,key:y="default"}=r,x=C.useMemo(()=>{let k=ru(c,s);return k==null?null:{location:{pathname:k,search:f,hash:h,state:v,key:y},navigationType:o}},[s,c,f,h,v,y,o]);return x==null?null:C.createElement(dn.Provider,{value:u},C.createElement(la.Provider,{children:n,value:x}))}function xv(e){let{children:t,location:n}=e;return ov(Kl(t),n)}new Promise(()=>{});function Kl(e,t){t===void 0&&(t=[]);let n=[];return C.Children.forEach(e,(r,o)=>{if(!C.isValidElement(r))return;let i=[...t,o];if(r.type===C.Fragment){n.push.apply(n,Kl(r.props.children,i));return}r.type!==ut&&re(!1),!r.props.index||!r.props.children||re(!1);let a={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Kl(r.props.children,i)),n.push(a)}),n}/**
 * React Router DOM v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xl(){return Xl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xl.apply(this,arguments)}function wv(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function kv(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Sv(e,t){return e.button===0&&(!t||t==="_self")&&!kv(e)}const Cv=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Ev="6";try{window.__reactRouterVersion=Ev}catch{}const _v="startTransition",Vc=gm[_v];function Pv(e){let{basename:t,children:n,future:r,window:o}=e,i=C.useRef();i.current==null&&(i.current=N0({window:o,v5Compat:!0}));let a=i.current,[l,s]=C.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},c=C.useCallback(f=>{u&&Vc?Vc(()=>s(f)):s(f)},[s,u]);return C.useLayoutEffect(()=>a.listen(c),[a,c]),C.createElement(yv,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a,future:r})}const Nv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",jv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,dr=C.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:a,state:l,target:s,to:u,preventScrollReset:c,unstable_viewTransition:f}=t,h=wv(t,Cv),{basename:v}=C.useContext(dn),y,x=!1;if(typeof u=="string"&&jv.test(u)&&(y=u,Nv))try{let g=new URL(window.location.href),w=u.startsWith("//")?new URL(g.protocol+u):new URL(u),P=ru(w.pathname,v);w.origin===g.origin&&P!=null?u=P+w.search+w.hash:x=!0}catch{}let k=Z0(u,{relative:o}),m=Fv(u,{replace:a,state:l,target:s,preventScrollReset:c,relative:o,unstable_viewTransition:f});function p(g){r&&r(g),g.defaultPrevented||m(g)}return C.createElement("a",Xl({},h,{href:y||k,onClick:x||i?r:p,ref:n,target:s}))});var Yc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Yc||(Yc={}));var Hc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Hc||(Hc={}));function Fv(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:a,unstable_viewTransition:l}=t===void 0?{}:t,s=Tt(),u=Eo(),c=Bp(e,{relative:a});return C.useCallback(f=>{if(Sv(f,n)){f.preventDefault();let h=r!==void 0?r:Ii(u)===Ii(c);s(e,{replace:h,state:o,preventScrollReset:i,relative:a,unstable_viewTransition:l})}},[u,s,c,r,o,n,e,i,a,l])}var ve=function(){return ve=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ve.apply(this,arguments)};function go(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var K="-ms-",Kr="-moz-",B="-webkit-",Vp="comm",sa="rule",su="decl",Dv="@import",Yp="@keyframes",Mv="@layer",Hp=Math.abs,uu=String.fromCharCode,Jl=Object.assign;function bv(e,t){return ue(e,0)^45?(((t<<2^ue(e,0))<<2^ue(e,1))<<2^ue(e,2))<<2^ue(e,3):0}function Gp(e){return e.trim()}function Et(e,t){return(e=t.exec(e))?e[0]:e}function L(e,t,n){return e.replace(t,n)}function si(e,t,n){return e.indexOf(t,n)}function ue(e,t){return e.charCodeAt(t)|0}function fr(e,t,n){return e.slice(t,n)}function dt(e){return e.length}function Qp(e){return e.length}function $r(e,t){return t.push(e),e}function Ov(e,t){return e.map(t).join("")}function Gc(e,t){return e.filter(function(n){return!Et(n,t)})}var ua=1,pr=1,Kp=0,Qe=0,oe=0,Cr="";function ca(e,t,n,r,o,i,a,l){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:ua,column:pr,length:a,return:"",siblings:l}}function Bt(e,t){return Jl(ca("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Rn(e){for(;e.root;)e=Bt(e.root,{children:[e]});$r(e,e.siblings)}function Tv(){return oe}function Lv(){return oe=Qe>0?ue(Cr,--Qe):0,pr--,oe===10&&(pr=1,ua--),oe}function ot(){return oe=Qe<Kp?ue(Cr,Qe++):0,pr++,oe===10&&(pr=1,ua++),oe}function En(){return ue(Cr,Qe)}function ui(){return Qe}function da(e,t){return fr(Cr,e,t)}function ql(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Rv(e){return ua=pr=1,Kp=dt(Cr=e),Qe=0,[]}function zv(e){return Cr="",e}function Ua(e){return Gp(da(Qe-1,Zl(e===91?e+2:e===40?e+1:e)))}function Iv(e){for(;(oe=En())&&oe<33;)ot();return ql(e)>2||ql(oe)>3?"":" "}function $v(e,t){for(;--t&&ot()&&!(oe<48||oe>102||oe>57&&oe<65||oe>70&&oe<97););return da(e,ui()+(t<6&&En()==32&&ot()==32))}function Zl(e){for(;ot();)switch(oe){case e:return Qe;case 34:case 39:e!==34&&e!==39&&Zl(oe);break;case 40:e===41&&Zl(e);break;case 92:ot();break}return Qe}function Wv(e,t){for(;ot()&&e+oe!==57;)if(e+oe===84&&En()===47)break;return"/*"+da(t,Qe-1)+"*"+uu(e===47?e:ot())}function Bv(e){for(;!ql(En());)ot();return da(e,Qe)}function Av(e){return zv(ci("",null,null,null,[""],e=Rv(e),0,[0],e))}function ci(e,t,n,r,o,i,a,l,s){for(var u=0,c=0,f=a,h=0,v=0,y=0,x=1,k=1,m=1,p=0,g="",w=o,P=i,N=r,_=g;k;)switch(y=p,p=ot()){case 40:if(y!=108&&ue(_,f-1)==58){si(_+=L(Ua(p),"&","&\f"),"&\f",Hp(u?l[u-1]:0))!=-1&&(m=-1);break}case 34:case 39:case 91:_+=Ua(p);break;case 9:case 10:case 13:case 32:_+=Iv(y);break;case 92:_+=$v(ui()-1,7);continue;case 47:switch(En()){case 42:case 47:$r(Uv(Wv(ot(),ui()),t,n,s),s);break;default:_+="/"}break;case 123*x:l[u++]=dt(_)*m;case 125*x:case 59:case 0:switch(p){case 0:case 125:k=0;case 59+c:m==-1&&(_=L(_,/\f/g,"")),v>0&&dt(_)-f&&$r(v>32?Kc(_+";",r,n,f-1,s):Kc(L(_," ","")+";",r,n,f-2,s),s);break;case 59:_+=";";default:if($r(N=Qc(_,t,n,u,c,o,l,g,w=[],P=[],f,i),i),p===123)if(c===0)ci(_,t,N,N,w,i,f,l,P);else switch(h===99&&ue(_,3)===110?100:h){case 100:case 108:case 109:case 115:ci(e,N,N,r&&$r(Qc(e,N,N,0,0,o,l,g,o,w=[],f,P),P),o,P,f,l,r?w:P);break;default:ci(_,N,N,N,[""],P,0,l,P)}}u=c=v=0,x=m=1,g=_="",f=a;break;case 58:f=1+dt(_),v=y;default:if(x<1){if(p==123)--x;else if(p==125&&x++==0&&Lv()==125)continue}switch(_+=uu(p),p*x){case 38:m=c>0?1:(_+="\f",-1);break;case 44:l[u++]=(dt(_)-1)*m,m=1;break;case 64:En()===45&&(_+=Ua(ot())),h=En(),c=f=dt(g=_+=Bv(ui())),p++;break;case 45:y===45&&dt(_)==2&&(x=0)}}return i}function Qc(e,t,n,r,o,i,a,l,s,u,c,f){for(var h=o-1,v=o===0?i:[""],y=Qp(v),x=0,k=0,m=0;x<r;++x)for(var p=0,g=fr(e,h+1,h=Hp(k=a[x])),w=e;p<y;++p)(w=Gp(k>0?v[p]+" "+g:L(g,/&\f/g,v[p])))&&(s[m++]=w);return ca(e,t,n,o===0?sa:l,s,u,c,f)}function Uv(e,t,n,r){return ca(e,t,n,Vp,uu(Tv()),fr(e,2,-2),0,r)}function Kc(e,t,n,r,o){return ca(e,t,n,su,fr(e,0,r),fr(e,r+1,-1),r,o)}function Xp(e,t,n){switch(bv(e,t)){case 5103:return B+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return B+e+e;case 4789:return Kr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return B+e+Kr+e+K+e+e;case 5936:switch(ue(e,t+11)){case 114:return B+e+K+L(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return B+e+K+L(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return B+e+K+L(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return B+e+K+e+e;case 6165:return B+e+K+"flex-"+e+e;case 5187:return B+e+L(e,/(\w+).+(:[^]+)/,B+"box-$1$2"+K+"flex-$1$2")+e;case 5443:return B+e+K+"flex-item-"+L(e,/flex-|-self/g,"")+(Et(e,/flex-|baseline/)?"":K+"grid-row-"+L(e,/flex-|-self/g,""))+e;case 4675:return B+e+K+"flex-line-pack"+L(e,/align-content|flex-|-self/g,"")+e;case 5548:return B+e+K+L(e,"shrink","negative")+e;case 5292:return B+e+K+L(e,"basis","preferred-size")+e;case 6060:return B+"box-"+L(e,"-grow","")+B+e+K+L(e,"grow","positive")+e;case 4554:return B+L(e,/([^-])(transform)/g,"$1"+B+"$2")+e;case 6187:return L(L(L(e,/(zoom-|grab)/,B+"$1"),/(image-set)/,B+"$1"),e,"")+e;case 5495:case 3959:return L(e,/(image-set\([^]*)/,B+"$1$`$1");case 4968:return L(L(e,/(.+:)(flex-)?(.*)/,B+"box-pack:$3"+K+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+B+e+e;case 4200:if(!Et(e,/flex-|baseline/))return K+"grid-column-align"+fr(e,t)+e;break;case 2592:case 3360:return K+L(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,Et(r.props,/grid-\w+-end/)})?~si(e+(n=n[t].value),"span",0)?e:K+L(e,"-start","")+e+K+"grid-row-span:"+(~si(n,"span",0)?Et(n,/\d+/):+Et(n,/\d+/)-+Et(e,/\d+/))+";":K+L(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Et(r.props,/grid-\w+-start/)})?e:K+L(L(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return L(e,/(.+)-inline(.+)/,B+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(dt(e)-1-t>6)switch(ue(e,t+1)){case 109:if(ue(e,t+4)!==45)break;case 102:return L(e,/(.+:)(.+)-([^]+)/,"$1"+B+"$2-$3$1"+Kr+(ue(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~si(e,"stretch",0)?Xp(L(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return L(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,a,l,s,u){return K+o+":"+i+u+(a?K+o+"-span:"+(l?s:+s-+i)+u:"")+e});case 4949:if(ue(e,t+6)===121)return L(e,":",":"+B)+e;break;case 6444:switch(ue(e,ue(e,14)===45?18:11)){case 120:return L(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+B+(ue(e,14)===45?"inline-":"")+"box$3$1"+B+"$2$3$1"+K+"$2box$3")+e;case 100:return L(e,":",":"+K)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return L(e,"scroll-","scroll-snap-")+e}return e}function Wi(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Vv(e,t,n,r){switch(e.type){case Mv:if(e.children.length)break;case Dv:case su:return e.return=e.return||e.value;case Vp:return"";case Yp:return e.return=e.value+"{"+Wi(e.children,r)+"}";case sa:if(!dt(e.value=e.props.join(",")))return""}return dt(n=Wi(e.children,r))?e.return=e.value+"{"+n+"}":""}function Yv(e){var t=Qp(e);return function(n,r,o,i){for(var a="",l=0;l<t;l++)a+=e[l](n,r,o,i)||"";return a}}function Hv(e){return function(t){t.root||(t=t.return)&&e(t)}}function Gv(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case su:e.return=Xp(e.value,e.length,n);return;case Yp:return Wi([Bt(e,{value:L(e.value,"@","@"+B)})],r);case sa:if(e.length)return Ov(n=e.props,function(o){switch(Et(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Rn(Bt(e,{props:[L(o,/:(read-\w+)/,":"+Kr+"$1")]})),Rn(Bt(e,{props:[o]})),Jl(e,{props:Gc(n,r)});break;case"::placeholder":Rn(Bt(e,{props:[L(o,/:(plac\w+)/,":"+B+"input-$1")]})),Rn(Bt(e,{props:[L(o,/:(plac\w+)/,":"+Kr+"$1")]})),Rn(Bt(e,{props:[L(o,/:(plac\w+)/,K+"input-$1")]})),Rn(Bt(e,{props:[o]})),Jl(e,{props:Gc(n,r)});break}return""})}}var Qv={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Te={},hr=typeof process<"u"&&Te!==void 0&&(Te.REACT_APP_SC_ATTR||Te.SC_ATTR)||"data-styled",Jp="active",qp="data-styled-version",fa="6.1.9",cu=`/*!sc*/
`,du=typeof window<"u"&&"HTMLElement"in window,Kv=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Te!==void 0&&Te.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Te.REACT_APP_SC_DISABLE_SPEEDY!==""?Te.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Te.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Te!==void 0&&Te.SC_DISABLE_SPEEDY!==void 0&&Te.SC_DISABLE_SPEEDY!==""&&Te.SC_DISABLE_SPEEDY!=="false"&&Te.SC_DISABLE_SPEEDY),Xv={},pa=Object.freeze([]),mr=Object.freeze({});function Zp(e,t,n){return n===void 0&&(n=mr),e.theme!==n.theme&&e.theme||t||n.theme}var eh=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Jv=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,qv=/(^-|-$)/g;function Xc(e){return e.replace(Jv,"-").replace(qv,"")}var Zv=/(a)(d)/gi,Qo=52,Jc=function(e){return String.fromCharCode(e+(e>25?39:97))};function es(e){var t,n="";for(t=Math.abs(e);t>Qo;t=t/Qo|0)n=Jc(t%Qo)+n;return(Jc(t%Qo)+n).replace(Zv,"$1-$2")}var Va,th=5381,Xn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},nh=function(e){return Xn(th,e)};function rh(e){return es(nh(e)>>>0)}function e1(e){return e.displayName||e.name||"Component"}function Ya(e){return typeof e=="string"&&!0}var oh=typeof Symbol=="function"&&Symbol.for,ih=oh?Symbol.for("react.memo"):60115,t1=oh?Symbol.for("react.forward_ref"):60112,n1={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ah={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},o1=((Va={})[t1]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Va[ih]=ah,Va);function qc(e){return("type"in(t=e)&&t.type.$$typeof)===ih?ah:"$$typeof"in e?o1[e.$$typeof]:n1;var t}var i1=Object.defineProperty,a1=Object.getOwnPropertyNames,Zc=Object.getOwnPropertySymbols,l1=Object.getOwnPropertyDescriptor,s1=Object.getPrototypeOf,ed=Object.prototype;function lh(e,t,n){if(typeof t!="string"){if(ed){var r=s1(t);r&&r!==ed&&lh(e,r,n)}var o=a1(t);Zc&&(o=o.concat(Zc(t)));for(var i=qc(e),a=qc(t),l=0;l<o.length;++l){var s=o[l];if(!(s in r1||n&&n[s]||a&&s in a||i&&s in i)){var u=l1(t,s);try{i1(e,s,u)}catch{}}}}return e}function gr(e){return typeof e=="function"}function fu(e){return typeof e=="object"&&"styledComponentId"in e}function kn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function ts(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function vo(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ns(e,t,n){if(n===void 0&&(n=!1),!n&&!vo(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=ns(e[r],t[r]);else if(vo(t))for(var r in t)e[r]=ns(e[r],t[r]);return e}function pu(e,t){Object.defineProperty(e,"toString",{value:t})}function _o(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var u1=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw _o(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var a=o;a<i;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(t+1),s=(a=0,n.length);a<s;a++)this.tag.insertRule(l,n[a])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,a=o;a<i;a++)n+="".concat(this.tag.getRule(a)).concat(cu);return n},e}(),di=new Map,Bi=new Map,fi=1,Ko=function(e){if(di.has(e))return di.get(e);for(;Bi.has(fi);)fi++;var t=fi++;return di.set(e,t),Bi.set(t,e),t},c1=function(e,t){fi=t+1,di.set(e,t),Bi.set(t,e)},d1="style[".concat(hr,"][").concat(qp,'="').concat(fa,'"]'),f1=new RegExp("^".concat(hr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),p1=function(e,t,n){for(var r,o=n.split(","),i=0,a=o.length;i<a;i++)(r=o[i])&&e.registerName(t,r)},h1=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(cu),o=[],i=0,a=r.length;i<a;i++){var l=r[i].trim();if(l){var s=l.match(f1);if(s){var u=0|parseInt(s[1],10),c=s[2];u!==0&&(c1(c,u),p1(e,c,s[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(l)}}};function m1(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var sh=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(l){var s=Array.from(l.querySelectorAll("style[".concat(hr,"]")));return s[s.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(hr,Jp),r.setAttribute(qp,fa);var a=m1();return a&&r.setAttribute("nonce",a),n.insertBefore(r,i),r},g1=function(){function e(t){this.element=sh(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var a=r[o];if(a.ownerNode===n)return a}throw _o(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),v1=function(){function e(t){this.element=sh(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),y1=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),td=du,x1={isServer:!du,useCSSOMInjection:!Kv},Ai=function(){function e(t,n,r){t===void 0&&(t=mr),n===void 0&&(n={});var o=this;this.options=ve(ve({},x1),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&du&&td&&(td=!1,function(i){for(var a=document.querySelectorAll(d1),l=0,s=a.length;l<s;l++){var u=a[l];u&&u.getAttribute(hr)!==Jp&&(h1(i,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),pu(this,function(){return function(i){for(var a=i.getTag(),l=a.length,s="",u=function(f){var h=function(m){return Bi.get(m)}(f);if(h===void 0)return"continue";var v=i.names.get(h),y=a.getGroup(f);if(v===void 0||y.length===0)return"continue";var x="".concat(hr,".g").concat(f,'[id="').concat(h,'"]'),k="";v!==void 0&&v.forEach(function(m){m.length>0&&(k+="".concat(m,","))}),s+="".concat(y).concat(x,'{content:"').concat(k,'"}').concat(cu)},c=0;c<l;c++)u(c);return s}(o)})}return e.registerId=function(t){return Ko(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(ve(ve({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new y1(o):r?new g1(o):new v1(o)}(this.options),new u1(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Ko(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Ko(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ko(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),w1=/&/g,k1=/^\s*\/\/.*$/gm;function uh(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=uh(n.children,t)),n})}function S1(e){var t,n,r,o=e===void 0?mr:e,i=o.options,a=i===void 0?mr:i,l=o.plugins,s=l===void 0?pa:l,u=function(h,v,y){return y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):h},c=s.slice();c.push(function(h){h.type===sa&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(w1,n).replace(r,u))}),a.prefix&&c.push(Gv),c.push(Vv);var f=function(h,v,y,x){v===void 0&&(v=""),y===void 0&&(y=""),x===void 0&&(x="&"),t=x,n=v,r=new RegExp("\\".concat(n,"\\b"),"g");var k=h.replace(k1,""),m=Av(y||v?"".concat(y," ").concat(v," { ").concat(k," }"):k);a.namespace&&(m=uh(m,a.namespace));var p=[];return Wi(m,Yv(c.concat(Hv(function(g){return p.push(g)})))),p};return f.hash=s.length?s.reduce(function(h,v){return v.name||_o(15),Xn(h,v.name)},th).toString():"",f}var C1=new Ai,rs=S1(),ch=tt.createContext({shouldForwardProp:void 0,styleSheet:C1,stylis:rs});ch.Consumer;tt.createContext(void 0);function os(){return C.useContext(ch)}var E1=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=rs);var a=r.name+i.hash;o.hasNameForId(r.id,a)||o.insertRules(r.id,a,i(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,pu(this,function(){throw _o(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=rs),this.name+t.hash},e}(),_1=function(e){return e>="A"&&e<="Z"};function nd(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;_1(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var dh=function(e){return e==null||e===!1||e===""},fh=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!dh(i)&&(Array.isArray(i)&&i.isCss||gr(i)?r.push("".concat(nd(o),":"),i,";"):vo(i)?r.push.apply(r,go(go(["".concat(o," {")],fh(i),!1),["}"],!1)):r.push("".concat(nd(o),": ").concat((t=o,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Qv||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function on(e,t,n,r){if(dh(e))return[];if(fu(e))return[".".concat(e.styledComponentId)];if(gr(e)){if(!gr(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return on(o,t,n,r)}var i;return e instanceof E1?n?(e.inject(n,r),[e.getName(r)]):[e]:vo(e)?fh(e):Array.isArray(e)?Array.prototype.concat.apply(pa,e.map(function(a){return on(a,t,n,r)})):[e.toString()]}function ph(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(gr(n)&&!fu(n))return!1}return!0}var P1=nh(fa),N1=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&ph(t),this.componentId=n,this.baseHash=Xn(P1,n),this.baseStyle=r,Ai.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=kn(o,this.staticRulesId);else{var i=ts(on(this.rules,t,n,r)),a=es(Xn(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,a)){var l=r(i,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,l)}o=kn(o,a),this.staticRulesId=a}else{for(var s=Xn(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var f=this.rules[c];if(typeof f=="string")u+=f;else if(f){var h=ts(on(f,t,n,r));s=Xn(s,h+c),u+=h}}if(u){var v=es(s>>>0);n.hasNameForId(this.componentId,v)||n.insertRules(this.componentId,v,r(u,".".concat(v),void 0,this.componentId)),o=kn(o,v)}}return o},e}(),hu=tt.createContext(void 0);hu.Consumer;var Ha={};function j1(e,t,n){var r=fu(e),o=e,i=!Ya(e),a=t.attrs,l=a===void 0?pa:a,s=t.componentId,u=s===void 0?function(w,P){var N=typeof w!="string"?"sc":Xc(w);Ha[N]=(Ha[N]||0)+1;var _="".concat(N,"-").concat(rh(fa+N+Ha[N]));return P?"".concat(P,"-").concat(_):_}(t.displayName,t.parentComponentId):s,c=t.displayName,f=c===void 0?function(w){return Ya(w)?"styled.".concat(w):"Styled(".concat(e1(w),")")}(e):c,h=t.displayName&&t.componentId?"".concat(Xc(t.displayName),"-").concat(t.componentId):t.componentId||u,v=r&&o.attrs?o.attrs.concat(l).filter(Boolean):l,y=t.shouldForwardProp;if(r&&o.shouldForwardProp){var x=o.shouldForwardProp;if(t.shouldForwardProp){var k=t.shouldForwardProp;y=function(w,P){return x(w,P)&&k(w,P)}}else y=x}var m=new N1(n,h,r?o.componentStyle:void 0);function p(w,P){return function(N,_,F){var V=N.attrs,R=N.componentStyle,xe=N.defaultProps,xt=N.foldedComponentIds,wt=N.styledComponentId,Tn=N.target,Er=tt.useContext(hu),fn=os(),M=N.shouldForwardProp||fn.shouldForwardProp,E=Zp(_,Er,xe)||mr,b=function(zt,Oe,kt){for(var _r,hn=ve(ve({},Oe),{className:void 0,theme:kt}),ma=0;ma<zt.length;ma+=1){var Do=gr(_r=zt[ma])?_r(hn):_r;for(var It in Do)hn[It]=It==="className"?kn(hn[It],Do[It]):It==="style"?ve(ve({},hn[It]),Do[It]):Do[It]}return Oe.className&&(hn.className=kn(hn.className,Oe.className)),hn}(V,_,E),T=b.as||Tn,W={};for(var Y in b)b[Y]===void 0||Y[0]==="$"||Y==="as"||Y==="theme"&&b.theme===E||(Y==="forwardedAs"?W.as=b.forwardedAs:M&&!M(Y,T)||(W[Y]=b[Y]));var pn=function(zt,Oe){var kt=os(),_r=zt.generateAndInjectStyles(Oe,kt.styleSheet,kt.stylis);return _r}(R,b),Xe=kn(xt,wt);return pn&&(Xe+=" "+pn),b.className&&(Xe+=" "+b.className),W[Ya(T)&&!eh.has(T)?"class":"className"]=Xe,W.ref=F,C.createElement(T,W)}(g,w,P)}p.displayName=f;var g=tt.forwardRef(p);return g.attrs=v,g.componentStyle=m,g.displayName=f,g.shouldForwardProp=y,g.foldedComponentIds=r?kn(o.foldedComponentIds,o.styledComponentId):"",g.styledComponentId=h,g.target=r?o.target:e,Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(P){for(var N=[],_=1;_<arguments.length;_++)N[_-1]=arguments[_];for(var F=0,V=N;F<V.length;F++)ns(P,V[F],!0);return P}({},o.defaultProps,w):w}}),pu(g,function(){return".".concat(g.styledComponentId)}),i&&lh(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),g}function rd(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var od=function(e){return Object.assign(e,{isCss:!0})};function hh(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(gr(e)||vo(e))return od(on(rd(pa,go([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?on(r):od(on(rd(r,t)))}function is(e,t,n){if(n===void 0&&(n=mr),!t)throw _o(1,t);var r=function(o){for(var i=[],a=1;a<arguments.length;a++)i[a-1]=arguments[a];return e(t,n,hh.apply(void 0,go([o],i,!1)))};return r.attrs=function(o){return is(e,t,ve(ve({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return is(e,t,ve(ve({},n),o))},r}var mh=function(e){return is(j1,e)},S=mh;eh.forEach(function(e){S[e]=mh(e)});var F1=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=ph(t),Ai.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,o){var i=o(ts(on(this.rules,n,r,o)),""),a=this.componentId+t;r.insertRules(a,a,i)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,o){t>2&&Ai.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,o)},e}();function D1(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=hh.apply(void 0,go([e],t,!1)),o="sc-global-".concat(rh(JSON.stringify(r))),i=new F1(r,o),a=function(s){var u=os(),c=tt.useContext(hu),f=tt.useRef(u.styleSheet.allocateGSInstance(o)).current;return u.styleSheet.server&&l(f,s,u.styleSheet,c,u.stylis),tt.useLayoutEffect(function(){if(!u.styleSheet.server)return l(f,s,u.styleSheet,c,u.stylis),function(){return i.removeStyles(f,u.styleSheet)}},[f,s,u.styleSheet,c,u.stylis]),null};function l(s,u,c,f,h){if(i.isStatic)i.renderStyles(s,Xv,c,h);else{var v=ve(ve({},u),{theme:Zp(u,f,a.defaultProps)});i.renderStyles(s,v,c,h)}}return tt.memo(a)}const M1=D1`
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
`,b1=S.button` 
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
`,O1=S.header`
    width: 100%;
    margin: 0 auto;
    background-color: #FFFFFF;
`,T1=S.img`
    width: 85px;
`,L1=S.div`
    max-width: 1260px;
    width: 100%;
    margin: 0 auto;
    padding: 0 30px;
`,R1=S.div`
    height: 70px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    position: relative;
    top: 0;
    left: 0;
    padding: 0 10px;
`,z1=S.nav`
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`,I1=S(b1)`
  position: static;
  width: 178px;
  height: 30px;

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
`,$1=S.a`
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
`;S.div`
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
`;S.p`
  color: #000;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 4px;
`;S.p`
  color: #94A6BE;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 10px;
`;S.button`
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
`;S.div`
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
`;const W1=S.div`
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
`,B1=S.p`
  color: #000;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 4px;
`,A1=S.p`
  color: #94A6BE;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 10px;
`,U1=S.button`
  width: 72px;
  height: 30px;
  background: transparent;
  color: #565EEF;
  border-radius: 4px;
  border: 1px solid #565EEF;

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
`;function V1(){try{return JSON.parse(localStorage.getItem("user"))}catch{return null}}const mu=C.createContext(null),Y1=({children:e})=>{let t=Tt();const[n,r]=C.useState(V1);function o(a){r(a),t("/")}function i(){r(null),t("/login")}return C.useEffect(()=>{n?localStorage.setItem("user",JSON.stringify(n)):localStorage.removeItem("user")},[n]),d.jsx(mu.Provider,{value:{user:n,setUser:r,loginUser:o,logoutUser:i},children:e})},On=()=>C.useContext(mu),H1=()=>{const[e,t]=C.useState(!1),{user:n}=On(),r=()=>{t(o=>!o)};return d.jsx(O1,{children:d.jsx(L1,{children:d.jsxs(R1,{children:[d.jsx("div",{className:"header__logo _show _light",children:d.jsx("a",{href:"",target:"_self",children:d.jsx(T1,{src:"/images/logo.png",alt:"logo"})})}),d.jsxs(z1,{children:[d.jsx(I1,{id:"btnMainNew",children:d.jsx(dr,{to:"/newcard",children:"Создать новую задачу"})}),d.jsx($1,{href:"#user-set-target",className:"header__user _hover02",onClick:r,children:n.name}),d.jsxs(W1,{id:"user-set-target",className:e?"visible":"",children:[d.jsx(B1,{children:n.name}),d.jsx(A1,{children:n.login}),d.jsx(U1,{type:"button",className:"_hover03",children:d.jsx(dr,{to:"/exit",children:"Выйти"})})]})]})]})})})},G1=["Без статуса","Нужно сделать","В работе","Тестирование","Готово"],Q1=e=>e==="Web Design"?"_orange":e==="Copywriting"?"_purple":e==="Research"?"_green":"_gray",id={_purple:{backgroundColor:"#e9d4ff",color:"#9a48f1"},_orange:{backgroundColor:"#ffe4c2",color:"#ff6d00"},_green:{backgroundColor:"#b4fdd1",color:"#06b16e"},_gray:{backgroundColor:"#94a6be",color:"#ffffff"}},K1=S.div`
    padding: 5px;
    animation-name: card-animation;
    animation-duration: 500ms;
    animation-timing-function: linear;
`,X1=S.div`
    width: 220px;
    height: 130px;
    background-color: #FFFFFF;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: stretch;
    padding: 15px 13px 19px;

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
`,J1=S.div`
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 2px;
`,Ga=S.div`
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #94A6BE;
`,q1=S.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #000000;
  margin-bottom: 10px;
`,Z1=S.div`
    width: 100%;
    height: 20px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`,ey=S.div`
    height: 64px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
`,ty=S.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`,ny=S.p`
    margin-left: 6px;
    font-size: 10px;
    line-height: 13px;
    color: #94A6BE;
    letter-spacing: 0.2px;
`,gh=S.p`
    font-size: 10px;
    font-weight: 600;
    line-height: 10px;
`,ry=S.div`
    width: auto;
    height: 20px;
    padding: 5px 14px;
    border-radius: 18px;
    background-color: ${({$topicColor:e})=>{var t;return((t=id[e])==null?void 0:t.backgroundColor)||"#b4fdd1"}};

    ${gh} {
        color: ${({$topicColor:e})=>{var t;return((t=id[e])==null?void 0:t.color)||"#06b16e"}};
    }
`,oy=({topic:e,title:t,date:n,id:r})=>{const o=Q1(e);return d.jsx(K1,{children:d.jsxs(X1,{children:[d.jsxs(Z1,{children:[d.jsx(ry,{$topicColor:o,children:d.jsx(gh,{children:e})}),d.jsx(dr,{to:`/card/${r}`,children:d.jsxs(J1,{children:[d.jsx(Ga,{}),d.jsx(Ga,{}),d.jsx(Ga,{})]})})]}),d.jsxs(ey,{children:[d.jsx(dr,{to:`/card/${r}`,children:d.jsx(q1,{children:t})}),d.jsxs(ty,{children:[d.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"13",height:"13",viewBox:"0 0 13 13",fill:"none",children:[d.jsxs("g",{clipPath:"url(#clip0_1_415)",children:[d.jsx("path",{d:"M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z",stroke:"#94A6BE",strokeWidth:"0.8",strokeLinejoin:"round"}),d.jsx("path",{d:"M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z",stroke:"#94A6BE",strokeWidth:"0.8",strokeLinecap:"round",strokeLinejoin:"round"})]}),d.jsx("defs",{children:d.jsx("clipPath",{id:"clip0_1_415",children:d.jsx("rect",{width:"13",height:"13",fill:"white"})})})]}),d.jsx(ny,{children:n})]})]})]})})},iy=S.div`
    width: 20%;
    margin: 0 auto;
    display: block;

    @media screen and (max-width: 1200px) {
        width: 100%;
        margin: 0 auto;
        display: block;
    }
`,ay=S.div`
    width: 100%;
    display: block;
    position: relative;

    @media screen and (max-width: 1200px) {
        width: 100%;
        display: flex;
        overflow-y: auto;
    }
`,ly=S.div`
    padding: 0 10px;
    margin: 15px 0;
`,sy=S.p`
    color: #94A6BE;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
`;function $(e){const t=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&t==="[object Date]"?new e.constructor(+e):typeof e=="number"||t==="[object Number]"||typeof e=="string"||t==="[object String]"?new Date(e):new Date(NaN)}function $e(e,t){return e instanceof Date?new e.constructor(t):new Date(t)}function Se(e,t){const n=$(e);return isNaN(t)?$e(e,NaN):(t&&n.setDate(n.getDate()+t),n)}function at(e,t){const n=$(e);if(isNaN(t))return $e(e,NaN);if(!t)return n;const r=n.getDate(),o=$e(e,n.getTime());o.setMonth(n.getMonth()+t+1,0);const i=o.getDate();return r>=i?o:(n.setFullYear(o.getFullYear(),o.getMonth(),r),n)}const gu=6048e5,uy=864e5;let cy={};function Po(){return cy}function Ke(e,t){var l,s,u,c;const n=Po(),r=(t==null?void 0:t.weekStartsOn)??((s=(l=t==null?void 0:t.locale)==null?void 0:l.options)==null?void 0:s.weekStartsOn)??n.weekStartsOn??((c=(u=n.locale)==null?void 0:u.options)==null?void 0:c.weekStartsOn)??0,o=$(e),i=o.getDay(),a=(i<r?7:0)+i-r;return o.setDate(o.getDate()-a),o.setHours(0,0,0,0),o}function Dn(e){return Ke(e,{weekStartsOn:1})}function vh(e){const t=$(e),n=t.getFullYear(),r=$e(e,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const o=Dn(r),i=$e(e,0);i.setFullYear(n,0,4),i.setHours(0,0,0,0);const a=Dn(i);return t.getTime()>=o.getTime()?n+1:t.getTime()>=a.getTime()?n:n-1}function vr(e){const t=$(e);return t.setHours(0,0,0,0),t}function Ui(e){const t=$(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),+e-+n}function mt(e,t){const n=vr(e),r=vr(t),o=+n-Ui(n),i=+r-Ui(r);return Math.round((o-i)/uy)}function dy(e){const t=vh(e),n=$e(e,0);return n.setFullYear(t,0,4),n.setHours(0,0,0,0),Dn(n)}function as(e,t){const n=t*7;return Se(e,n)}function fy(e,t){return at(e,t*12)}function py(e){let t;return e.forEach(function(n){const r=$(n);(t===void 0||t<r||isNaN(Number(r)))&&(t=r)}),t||new Date(NaN)}function hy(e){let t;return e.forEach(n=>{const r=$(n);(!t||t>r||isNaN(+r))&&(t=r)}),t||new Date(NaN)}function je(e,t){const n=vr(e),r=vr(t);return+n==+r}function vu(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function my(e){if(!vu(e)&&typeof e!="number")return!1;const t=$(e);return!isNaN(Number(t))}function yo(e,t){const n=$(e),r=$(t),o=n.getFullYear()-r.getFullYear(),i=n.getMonth()-r.getMonth();return o*12+i}function gy(e,t,n){const r=Ke(e,n),o=Ke(t,n),i=+r-Ui(r),a=+o-Ui(o);return Math.round((i-a)/gu)}function yu(e){const t=$(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t}function be(e){const t=$(e);return t.setDate(1),t.setHours(0,0,0,0),t}function yh(e){const t=$(e),n=$e(e,0);return n.setFullYear(t.getFullYear(),0,1),n.setHours(0,0,0,0),n}function xu(e,t){var l,s,u,c;const n=Po(),r=(t==null?void 0:t.weekStartsOn)??((s=(l=t==null?void 0:t.locale)==null?void 0:l.options)==null?void 0:s.weekStartsOn)??n.weekStartsOn??((c=(u=n.locale)==null?void 0:u.options)==null?void 0:c.weekStartsOn)??0,o=$(e),i=o.getDay(),a=(i<r?-7:0)+6-(i-r);return o.setDate(o.getDate()+a),o.setHours(23,59,59,999),o}function xh(e){return xu(e,{weekStartsOn:1})}const vy={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},yy=(e,t,n)=>{let r;const o=vy[e];return typeof o=="string"?r=o:t===1?r=o.one:r=o.other.replace("{{count}}",t.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function rr(e){return(t={})=>{const n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const xy={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},wy={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},ky={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Sy={date:rr({formats:xy,defaultWidth:"full"}),time:rr({formats:wy,defaultWidth:"full"}),dateTime:rr({formats:ky,defaultWidth:"full"})},Cy={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Ey=(e,t,n,r)=>Cy[e];function pt(e){return(t,n)=>{const r=n!=null&&n.context?String(n.context):"standalone";let o;if(r==="formatting"&&e.formattingValues){const a=e.defaultFormattingWidth||e.defaultWidth,l=n!=null&&n.width?String(n.width):a;o=e.formattingValues[l]||e.formattingValues[a]}else{const a=e.defaultWidth,l=n!=null&&n.width?String(n.width):e.defaultWidth;o=e.values[l]||e.values[a]}const i=e.argumentCallback?e.argumentCallback(t):t;return o[i]}}const _y={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Py={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Ny={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},jy={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Fy={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Dy={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},My=(e,t)=>{const n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},by={ordinalNumber:My,era:pt({values:_y,defaultWidth:"wide"}),quarter:pt({values:Py,defaultWidth:"wide",argumentCallback:e=>e-1}),month:pt({values:Ny,defaultWidth:"wide"}),day:pt({values:jy,defaultWidth:"wide"}),dayPeriod:pt({values:Fy,defaultWidth:"wide",formattingValues:Dy,defaultFormattingWidth:"wide"})};function ht(e){return(t,n={})=>{const r=n.width,o=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],i=t.match(o);if(!i)return null;const a=i[0],l=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],s=Array.isArray(l)?Ty(l,f=>f.test(a)):Oy(l,f=>f.test(a));let u;u=e.valueCallback?e.valueCallback(s):s,u=n.valueCallback?n.valueCallback(u):u;const c=t.slice(a.length);return{value:u,rest:c}}}function Oy(e,t){for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n}function Ty(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n}function wh(e){return(t,n={})=>{const r=t.match(e.matchPattern);if(!r)return null;const o=r[0],i=t.match(e.parsePattern);if(!i)return null;let a=e.valueCallback?e.valueCallback(i[0]):i[0];a=n.valueCallback?n.valueCallback(a):a;const l=t.slice(o.length);return{value:a,rest:l}}}const Ly=/^(\d+)(th|st|nd|rd)?/i,Ry=/\d+/i,zy={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Iy={any:[/^b/i,/^(a|c)/i]},$y={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Wy={any:[/1/i,/2/i,/3/i,/4/i]},By={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Ay={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Uy={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Vy={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Yy={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Hy={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Gy={ordinalNumber:wh({matchPattern:Ly,parsePattern:Ry,valueCallback:e=>parseInt(e,10)}),era:ht({matchPatterns:zy,defaultMatchWidth:"wide",parsePatterns:Iy,defaultParseWidth:"any"}),quarter:ht({matchPatterns:$y,defaultMatchWidth:"wide",parsePatterns:Wy,defaultParseWidth:"any",valueCallback:e=>e+1}),month:ht({matchPatterns:By,defaultMatchWidth:"wide",parsePatterns:Ay,defaultParseWidth:"any"}),day:ht({matchPatterns:Uy,defaultMatchWidth:"wide",parsePatterns:Vy,defaultParseWidth:"any"}),dayPeriod:ht({matchPatterns:Yy,defaultMatchWidth:"any",parsePatterns:Hy,defaultParseWidth:"any"})},kh={code:"en-US",formatDistance:yy,formatLong:Sy,formatRelative:Ey,localize:by,match:Gy,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Qy(e){const t=$(e);return mt(t,yh(t))+1}function Sh(e){const t=$(e),n=+Dn(t)-+dy(t);return Math.round(n/gu)+1}function Ch(e,t){var c,f,h,v;const n=$(e),r=n.getFullYear(),o=Po(),i=(t==null?void 0:t.firstWeekContainsDate)??((f=(c=t==null?void 0:t.locale)==null?void 0:c.options)==null?void 0:f.firstWeekContainsDate)??o.firstWeekContainsDate??((v=(h=o.locale)==null?void 0:h.options)==null?void 0:v.firstWeekContainsDate)??1,a=$e(e,0);a.setFullYear(r+1,0,i),a.setHours(0,0,0,0);const l=Ke(a,t),s=$e(e,0);s.setFullYear(r,0,i),s.setHours(0,0,0,0);const u=Ke(s,t);return n.getTime()>=l.getTime()?r+1:n.getTime()>=u.getTime()?r:r-1}function Ky(e,t){var l,s,u,c;const n=Po(),r=(t==null?void 0:t.firstWeekContainsDate)??((s=(l=t==null?void 0:t.locale)==null?void 0:l.options)==null?void 0:s.firstWeekContainsDate)??n.firstWeekContainsDate??((c=(u=n.locale)==null?void 0:u.options)==null?void 0:c.firstWeekContainsDate)??1,o=Ch(e,t),i=$e(e,0);return i.setFullYear(o,0,r),i.setHours(0,0,0,0),Ke(i,t)}function Eh(e,t){const n=$(e),r=+Ke(n,t)-+Ky(n,t);return Math.round(r/gu)+1}function A(e,t){const n=e<0?"-":"",r=Math.abs(e).toString().padStart(t,"0");return n+r}const Wt={y(e,t){const n=e.getFullYear(),r=n>0?n:1-n;return A(t==="yy"?r%100:r,t.length)},M(e,t){const n=e.getMonth();return t==="M"?String(n+1):A(n+1,2)},d(e,t){return A(e.getDate(),t.length)},a(e,t){const n=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(e,t){return A(e.getHours()%12||12,t.length)},H(e,t){return A(e.getHours(),t.length)},m(e,t){return A(e.getMinutes(),t.length)},s(e,t){return A(e.getSeconds(),t.length)},S(e,t){const n=t.length,r=e.getMilliseconds(),o=Math.trunc(r*Math.pow(10,n-3));return A(o,t.length)}},zn={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},ad={G:function(e,t,n){const r=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if(t==="yo"){const r=e.getFullYear(),o=r>0?r:1-r;return n.ordinalNumber(o,{unit:"year"})}return Wt.y(e,t)},Y:function(e,t,n,r){const o=Ch(e,r),i=o>0?o:1-o;if(t==="YY"){const a=i%100;return A(a,2)}return t==="Yo"?n.ordinalNumber(i,{unit:"year"}):A(i,t.length)},R:function(e,t){const n=vh(e);return A(n,t.length)},u:function(e,t){const n=e.getFullYear();return A(n,t.length)},Q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return A(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return A(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){const r=e.getMonth();switch(t){case"M":case"MM":return Wt.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){const r=e.getMonth();switch(t){case"L":return String(r+1);case"LL":return A(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){const o=Eh(e,r);return t==="wo"?n.ordinalNumber(o,{unit:"week"}):A(o,t.length)},I:function(e,t,n){const r=Sh(e);return t==="Io"?n.ordinalNumber(r,{unit:"week"}):A(r,t.length)},d:function(e,t,n){return t==="do"?n.ordinalNumber(e.getDate(),{unit:"date"}):Wt.d(e,t)},D:function(e,t,n){const r=Qy(e);return t==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):A(r,t.length)},E:function(e,t,n){const r=e.getDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){const o=e.getDay(),i=(o-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return A(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(o,{width:"short",context:"formatting"});case"eeee":default:return n.day(o,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){const o=e.getDay(),i=(o-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return A(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(o,{width:"narrow",context:"standalone"});case"cccccc":return n.day(o,{width:"short",context:"standalone"});case"cccc":default:return n.day(o,{width:"wide",context:"standalone"})}},i:function(e,t,n){const r=e.getDay(),o=r===0?7:r;switch(t){case"i":return String(o);case"ii":return A(o,t.length);case"io":return n.ordinalNumber(o,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){const o=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},b:function(e,t,n){const r=e.getHours();let o;switch(r===12?o=zn.noon:r===0?o=zn.midnight:o=r/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(e,t,n){const r=e.getHours();let o;switch(r>=17?o=zn.evening:r>=12?o=zn.afternoon:r>=4?o=zn.morning:o=zn.night,t){case"B":case"BB":case"BBB":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(o,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(e,t,n){if(t==="ho"){let r=e.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return Wt.h(e,t)},H:function(e,t,n){return t==="Ho"?n.ordinalNumber(e.getHours(),{unit:"hour"}):Wt.H(e,t)},K:function(e,t,n){const r=e.getHours()%12;return t==="Ko"?n.ordinalNumber(r,{unit:"hour"}):A(r,t.length)},k:function(e,t,n){let r=e.getHours();return r===0&&(r=24),t==="ko"?n.ordinalNumber(r,{unit:"hour"}):A(r,t.length)},m:function(e,t,n){return t==="mo"?n.ordinalNumber(e.getMinutes(),{unit:"minute"}):Wt.m(e,t)},s:function(e,t,n){return t==="so"?n.ordinalNumber(e.getSeconds(),{unit:"second"}):Wt.s(e,t)},S:function(e,t){return Wt.S(e,t)},X:function(e,t,n){const r=e.getTimezoneOffset();if(r===0)return"Z";switch(t){case"X":return sd(r);case"XXXX":case"XX":return vn(r);case"XXXXX":case"XXX":default:return vn(r,":")}},x:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"x":return sd(r);case"xxxx":case"xx":return vn(r);case"xxxxx":case"xxx":default:return vn(r,":")}},O:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+ld(r,":");case"OOOO":default:return"GMT"+vn(r,":")}},z:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+ld(r,":");case"zzzz":default:return"GMT"+vn(r,":")}},t:function(e,t,n){const r=Math.trunc(e.getTime()/1e3);return A(r,t.length)},T:function(e,t,n){const r=e.getTime();return A(r,t.length)}};function ld(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),o=Math.trunc(r/60),i=r%60;return i===0?n+String(o):n+String(o)+t+A(i,2)}function sd(e,t){return e%60===0?(e>0?"-":"+")+A(Math.abs(e)/60,2):vn(e,t)}function vn(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),o=A(Math.trunc(r/60),2),i=A(r%60,2);return n+o+t+i}const ud=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},_h=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},Xy=(e,t)=>{const n=e.match(/(P+)(p+)?/)||[],r=n[1],o=n[2];if(!o)return ud(e,t);let i;switch(r){case"P":i=t.dateTime({width:"short"});break;case"PP":i=t.dateTime({width:"medium"});break;case"PPP":i=t.dateTime({width:"long"});break;case"PPPP":default:i=t.dateTime({width:"full"});break}return i.replace("{{date}}",ud(r,t)).replace("{{time}}",_h(o,t))},Jy={p:_h,P:Xy},qy=/^D+$/,Zy=/^Y+$/,ex=["D","DD","YY","YYYY"];function tx(e){return qy.test(e)}function nx(e){return Zy.test(e)}function rx(e,t,n){const r=ox(e,t,n);if(console.warn(r),ex.includes(e))throw new RangeError(r)}function ox(e,t,n){const r=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const ix=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ax=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,lx=/^'([^]*?)'?$/,sx=/''/g,ux=/[a-zA-Z]/;function Lt(e,t,n){var c,f,h,v,y,x,k,m;const r=Po(),o=(n==null?void 0:n.locale)??r.locale??kh,i=(n==null?void 0:n.firstWeekContainsDate)??((f=(c=n==null?void 0:n.locale)==null?void 0:c.options)==null?void 0:f.firstWeekContainsDate)??r.firstWeekContainsDate??((v=(h=r.locale)==null?void 0:h.options)==null?void 0:v.firstWeekContainsDate)??1,a=(n==null?void 0:n.weekStartsOn)??((x=(y=n==null?void 0:n.locale)==null?void 0:y.options)==null?void 0:x.weekStartsOn)??r.weekStartsOn??((m=(k=r.locale)==null?void 0:k.options)==null?void 0:m.weekStartsOn)??0,l=$(e);if(!my(l))throw new RangeError("Invalid time value");let s=t.match(ax).map(p=>{const g=p[0];if(g==="p"||g==="P"){const w=Jy[g];return w(p,o.formatLong)}return p}).join("").match(ix).map(p=>{if(p==="''")return{isToken:!1,value:"'"};const g=p[0];if(g==="'")return{isToken:!1,value:cx(p)};if(ad[g])return{isToken:!0,value:p};if(g.match(ux))throw new RangeError("Format string contains an unescaped latin alphabet character `"+g+"`");return{isToken:!1,value:p}});o.localize.preprocessor&&(s=o.localize.preprocessor(l,s));const u={firstWeekContainsDate:i,weekStartsOn:a,locale:o};return s.map(p=>{if(!p.isToken)return p.value;const g=p.value;(!(n!=null&&n.useAdditionalWeekYearTokens)&&nx(g)||!(n!=null&&n.useAdditionalDayOfYearTokens)&&tx(g))&&rx(g,t,String(e));const w=ad[g[0]];return w(l,g,o.localize,u)}).join("")}function cx(e){const t=e.match(lx);return t?t[1].replace(sx,"'"):e}function dx(e){const t=$(e),n=t.getFullYear(),r=t.getMonth(),o=$e(e,0);return o.setFullYear(n,r+1,0),o.setHours(0,0,0,0),o.getDate()}function fx(e){return Math.trunc(+$(e)/1e3)}function px(e){const t=$(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(0,0,0,0),t}function hx(e,t){return gy(px(e),be(e),t)+1}function ls(e,t){const n=$(e),r=$(t);return n.getTime()>r.getTime()}function Ph(e,t){const n=$(e),r=$(t);return+n<+r}function cd(e,t,n){const r=Ke(e,n),o=Ke(t,n);return+r==+o}function wu(e,t){const n=$(e),r=$(t);return n.getFullYear()===r.getFullYear()&&n.getMonth()===r.getMonth()}function mx(e,t){const n=$(e),r=$(t);return n.getFullYear()===r.getFullYear()}function Qa(e,t){return Se(e,-t)}function Ka(e,t){const n=$(e),r=n.getFullYear(),o=n.getDate(),i=$e(e,0);i.setFullYear(r,t,15),i.setHours(0,0,0,0);const a=dx(i);return n.setMonth(t,Math.min(o,a)),n}function dd(e,t){const n=$(e);return isNaN(+n)?$e(e,NaN):(n.setFullYear(t),n)}const gx=({title:e,cardList:t})=>d.jsxs(iy,{children:[d.jsx(ly,{children:d.jsx(sy,{children:e})}),d.jsx(ay,{children:t.map(n=>{const r=Lt(new Date(n.date),"dd.MM.yyyy");return d.jsx(oy,{id:n._id,userId:n.userId,topic:n.topic,title:n.title,date:r,description:n.description,status:n.status},n._id)})})]}),vx=S.div`
    width: 100%;
    background-color: #EAEEF6;
`,yx=S.div`
    max-width: 1260px;
    width: 100%;
    margin: 0 auto;
    padding: 0 30px;

    @media screen and (max-width: 495px) {
        width: 100%;
        padding: 0 16px;
    }
`,xx=S.div`
    width: 100%;
    margin: 0 auto;
    padding: 25px 0 49px;

    @media screen and (max-width: 1200px) {    
        width: 100%;
        margin: 0 auto;
        padding: 40px 0 64px;
    }
`,wx=S.div`
    width: 100%;
    display: flex;

    @media screen and (max-width: 1200px){
        display: block;
    }
`,kx=({cards:e})=>d.jsx(vx,{children:d.jsx(yx,{children:d.jsx(xx,{children:d.jsx(wx,{children:G1.map(t=>d.jsx(gx,{title:t,cardList:e.filter(n=>n.status===t)},t))})})})}),Sx=S.p`
    text-align: center;
    padding-top: 50px;
`,Nh="https://wedev-api.sky.pro/api/kanban",jh="https://wedev-api.sky.pro/api/user";async function Cx({token:e}){const t=await fetch(Nh,{headers:{Authorization:`Bearer ${e}`}});if(t.status===!1)throw new Error("Ошибка");return await t.json()}async function Ex({user:e,title:t,topic:n,status:r,description:o,date:i}){return fetch(Nh,{method:"POST",headers:{Authorization:`Bearer ${e.token}`},body:JSON.stringify({title:t,topic:n,status:r,description:o,date:i})})}async function _x({id:e,user:t,title:n,topic:r,status:o,description:i,date:a}){const l=await fetch(`https://wedev-api.sky.pro/api/kanban/${e}`,{headers:{Authorization:`Bearer ${t.token}`},method:"PUT",body:JSON.stringify({title:n,topic:r,status:o,description:i,date:a})});if(l.status===!1)throw new Error("Ошибка");return await l.json()}async function Px({id:e,user:t}){const n=await fetch(`https://wedev-api.sky.pro/api/kanban/${e}`,{headers:{Authorization:`Bearer ${t.token}`},method:"DELETE"});if(n.status===!1)throw new Error("Ошибка");return await n.json()}function Nx({login:e,name:t,password:n}){return fetch(jh,{method:"POST",body:JSON.stringify({login:e,name:t,password:n})}).then(r=>{if(r.status===400)throw new Error("Пользователь уже существует");if(r.status===500)throw new Error("Ошибка сервера");return r.json()}).catch(r=>{r.message==="Пользователь уже существует"?alert("Кажется, у вас уже есть аккаунт, войдите в него"):r.message==="Ошибка сервера"&&alert("Что-то пошло не так, уже чиним")})}function jx({login:e,password:t}){return fetch(jh+"/login",{method:"POST",body:JSON.stringify({login:e,password:t})}).then(n=>{if(n.status===400)throw new Error("Неверный логин или пароль");if(n.status===500)throw new Error("Ошибка сервера");return n.json()}).catch(n=>{n.message==="Неверный логин или пароль"?alert("Неверный логин или пароль"):n.message==="Ошибка сервера"&&alert("Что-то пошло не так, уже чиним")})}const Fh=C.createContext(null),Fx=()=>{let e=Tt();const[t,n]=C.useState([]),r=o=>{n(o),e("/")};return d.jsx(Fh.Provider,{value:{tasks:t,setTasks:n,getTasks:r},children:d.jsx(lu,{})})},ku=()=>C.useContext(Fh),Dx=S.div`
    max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: #F1F1F1;
`;function Mx(){const{user:e}=C.useContext(mu),[t,n]=C.useState(!0),{tasks:r,setTasks:o}=ku();return C.useEffect(()=>{(async()=>{if(e&&e.token)try{const a=await Cx({token:e.token});o(a.tasks)}catch{alert("Что-то пошло не так. Попробуйте снова.")}finally{n(!1)}else alert("Пользователь не авторизован."),n(!1)})()},[e]),d.jsxs(Dx,{children:[d.jsx(H1,{}),t?d.jsx(Sx,{children:"Загружаю задачи ..."}):d.jsx(kx,{cards:r}),d.jsx(lu,{})]})}const Dh=S.div`
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    background-color: #EAEEF6;
`,Mh=S.div`
    display: block;
    width: 100vw;
    min-height: 100vh;
    margin: 0 auto;
`,bh=S.div`
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
`,Oh=S.div`
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
`,Th=S.h2`
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -0.6px;
    margin-bottom: 20px; 
`,Lh=S.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;  
`,ss=S.input`
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
`,Rh=S.input`
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
`,zh=S.button`
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
`,Ih=S.p`
    width: 100%;
    height: 100%;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
`,$h=S.div`
    text-align: center;
`,Wh=S.p`
    color: rgba(148, 166, 190, 0.4);
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.14px;
`,Bh=S.a`
    color: rgba(148, 166, 190, 0.4);
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.14px;
    text-decoration: underline;
`;function bx(){let e=Tt();const{loginUser:t}=On(),[n,r]=C.useState({login:"",password:""}),[o,i]=C.useState(!1);C.useEffect(()=>{(()=>{const u=n.login.trim()!=="",c=n.password.trim()!=="";i(u&&c)})()},[n]);const a=s=>{const{name:u,value:c}=s.target;r({...n,[u]:c})},l=async s=>{s.preventDefault();const u=await jx({login:n.login,password:n.password});u!=null&&u.user&&t(u.user)};return d.jsx(Dh,{children:d.jsx(Mh,{children:d.jsx(bh,{children:d.jsxs(Oh,{children:[d.jsx("div",{className:"modal__ttl",children:d.jsx(Th,{children:"Вход"})}),d.jsxs(Lh,{id:"formLogIn",action:"#",onSubmit:l,children:[d.jsx(ss,{type:"email",name:"login",id:"formlogin",placeholder:"Эл. почта",value:n.login,onChange:a,required:!0}),d.jsx(Rh,{type:"password",name:"password",id:"formpassword",placeholder:"Пароль",value:n.password,onChange:a,required:!0}),d.jsx(zh,{id:"btnEnter",type:"submit",style:{opacity:o?1:.5},disabled:!o,children:d.jsx(Ih,{children:"Войти"})}),d.jsxs($h,{children:[d.jsx(Wh,{children:"Нужно зарегистрироваться?"}),d.jsx(Bh,{onClick:()=>e("/register"),children:"Регистрируйтесь здесь"})]})]})]})})})})}function Ox(){let e=Tt();const{loginUser:t}=On();function n(){e("/login")}const[r,o]=C.useState({firstName:"",login:"",password:""}),[i,a]=C.useState(!1);C.useEffect(()=>{(()=>{const c=r.firstName.trim()!=="",f=r.login.trim()!=="",h=r.password.trim()!=="";a(f&&h&&c)})()},[r]);const l=u=>{const{name:c,value:f}=u.target;o({...r,[c]:f})},s=async u=>{u.preventDefault();const c=await Nx({name:r.firstName,login:r.login,password:r.password});c!=null&&c.user&&t(c.user)};return d.jsx(Dh,{children:d.jsx(Mh,{children:d.jsx(bh,{children:d.jsxs(Oh,{children:[d.jsx("div",{className:"modal__ttl",children:d.jsx(Th,{children:"Регистрация"})}),d.jsxs(Lh,{id:"formLogUp",action:"#",onSubmit:s,children:[d.jsx(ss,{type:"text",name:"firstName",id:"first-name",placeholder:"Имя",value:r.firstName,onChange:l,required:!0}),d.jsx(ss,{type:"email",name:"login",id:"loginReg",placeholder:"Эл. почта",value:r.login,onChange:l,required:!0}),d.jsx(Rh,{type:"password",name:"password",id:"passwordFirst",placeholder:"Пароль",value:r.password,onChange:l,required:!0}),d.jsx(zh,{id:"SignUpEnter",type:"submit",style:{opacity:i?1:.5},disabled:!i,children:d.jsx(Ih,{children:"Зарегистрироваться"})}),d.jsxs($h,{children:[d.jsx(Wh,{children:"Уже есть аккаунт?"}),d.jsx(Bh,{onClick:n,children:"Войдите здесь"})]})]})]})})})})}function Tr(e,t){if(e.one!==void 0&&t===1)return e.one;const n=t%10,r=t%100;return n===1&&r!==11?e.singularNominative.replace("{{count}}",String(t)):n>=2&&n<=4&&(r<10||r>20)?e.singularGenitive.replace("{{count}}",String(t)):e.pluralGenitive.replace("{{count}}",String(t))}function we(e){return(t,n)=>n!=null&&n.addSuffix?n.comparison&&n.comparison>0?e.future?Tr(e.future,t):"через "+Tr(e.regular,t):e.past?Tr(e.past,t):Tr(e.regular,t)+" назад":Tr(e.regular,t)}const Tx={lessThanXSeconds:we({regular:{one:"меньше секунды",singularNominative:"меньше {{count}} секунды",singularGenitive:"меньше {{count}} секунд",pluralGenitive:"меньше {{count}} секунд"},future:{one:"меньше, чем через секунду",singularNominative:"меньше, чем через {{count}} секунду",singularGenitive:"меньше, чем через {{count}} секунды",pluralGenitive:"меньше, чем через {{count}} секунд"}}),xSeconds:we({regular:{singularNominative:"{{count}} секунда",singularGenitive:"{{count}} секунды",pluralGenitive:"{{count}} секунд"},past:{singularNominative:"{{count}} секунду назад",singularGenitive:"{{count}} секунды назад",pluralGenitive:"{{count}} секунд назад"},future:{singularNominative:"через {{count}} секунду",singularGenitive:"через {{count}} секунды",pluralGenitive:"через {{count}} секунд"}}),halfAMinute:(e,t)=>t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"через полминуты":"полминуты назад":"полминуты",lessThanXMinutes:we({regular:{one:"меньше минуты",singularNominative:"меньше {{count}} минуты",singularGenitive:"меньше {{count}} минут",pluralGenitive:"меньше {{count}} минут"},future:{one:"меньше, чем через минуту",singularNominative:"меньше, чем через {{count}} минуту",singularGenitive:"меньше, чем через {{count}} минуты",pluralGenitive:"меньше, чем через {{count}} минут"}}),xMinutes:we({regular:{singularNominative:"{{count}} минута",singularGenitive:"{{count}} минуты",pluralGenitive:"{{count}} минут"},past:{singularNominative:"{{count}} минуту назад",singularGenitive:"{{count}} минуты назад",pluralGenitive:"{{count}} минут назад"},future:{singularNominative:"через {{count}} минуту",singularGenitive:"через {{count}} минуты",pluralGenitive:"через {{count}} минут"}}),aboutXHours:we({regular:{singularNominative:"около {{count}} часа",singularGenitive:"около {{count}} часов",pluralGenitive:"около {{count}} часов"},future:{singularNominative:"приблизительно через {{count}} час",singularGenitive:"приблизительно через {{count}} часа",pluralGenitive:"приблизительно через {{count}} часов"}}),xHours:we({regular:{singularNominative:"{{count}} час",singularGenitive:"{{count}} часа",pluralGenitive:"{{count}} часов"}}),xDays:we({regular:{singularNominative:"{{count}} день",singularGenitive:"{{count}} дня",pluralGenitive:"{{count}} дней"}}),aboutXWeeks:we({regular:{singularNominative:"около {{count}} недели",singularGenitive:"около {{count}} недель",pluralGenitive:"около {{count}} недель"},future:{singularNominative:"приблизительно через {{count}} неделю",singularGenitive:"приблизительно через {{count}} недели",pluralGenitive:"приблизительно через {{count}} недель"}}),xWeeks:we({regular:{singularNominative:"{{count}} неделя",singularGenitive:"{{count}} недели",pluralGenitive:"{{count}} недель"}}),aboutXMonths:we({regular:{singularNominative:"около {{count}} месяца",singularGenitive:"около {{count}} месяцев",pluralGenitive:"около {{count}} месяцев"},future:{singularNominative:"приблизительно через {{count}} месяц",singularGenitive:"приблизительно через {{count}} месяца",pluralGenitive:"приблизительно через {{count}} месяцев"}}),xMonths:we({regular:{singularNominative:"{{count}} месяц",singularGenitive:"{{count}} месяца",pluralGenitive:"{{count}} месяцев"}}),aboutXYears:we({regular:{singularNominative:"около {{count}} года",singularGenitive:"около {{count}} лет",pluralGenitive:"около {{count}} лет"},future:{singularNominative:"приблизительно через {{count}} год",singularGenitive:"приблизительно через {{count}} года",pluralGenitive:"приблизительно через {{count}} лет"}}),xYears:we({regular:{singularNominative:"{{count}} год",singularGenitive:"{{count}} года",pluralGenitive:"{{count}} лет"}}),overXYears:we({regular:{singularNominative:"больше {{count}} года",singularGenitive:"больше {{count}} лет",pluralGenitive:"больше {{count}} лет"},future:{singularNominative:"больше, чем через {{count}} год",singularGenitive:"больше, чем через {{count}} года",pluralGenitive:"больше, чем через {{count}} лет"}}),almostXYears:we({regular:{singularNominative:"почти {{count}} год",singularGenitive:"почти {{count}} года",pluralGenitive:"почти {{count}} лет"},future:{singularNominative:"почти через {{count}} год",singularGenitive:"почти через {{count}} года",pluralGenitive:"почти через {{count}} лет"}})},Lx=(e,t,n)=>Tx[e](t,n),Rx={full:"EEEE, d MMMM y 'г.'",long:"d MMMM y 'г.'",medium:"d MMM y 'г.'",short:"dd.MM.y"},zx={full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},Ix={any:"{{date}}, {{time}}"},$x={date:rr({formats:Rx,defaultWidth:"full"}),time:rr({formats:zx,defaultWidth:"full"}),dateTime:rr({formats:Ix,defaultWidth:"any"})},Su=["воскресенье","понедельник","вторник","среду","четверг","пятницу","субботу"];function Wx(e){const t=Su[e];switch(e){case 0:return"'в прошлое "+t+" в' p";case 1:case 2:case 4:return"'в прошлый "+t+" в' p";case 3:case 5:case 6:return"'в прошлую "+t+" в' p"}}function fd(e){const t=Su[e];return e===2?"'во "+t+" в' p":"'в "+t+" в' p"}function Bx(e){const t=Su[e];switch(e){case 0:return"'в следующее "+t+" в' p";case 1:case 2:case 4:return"'в следующий "+t+" в' p";case 3:case 5:case 6:return"'в следующую "+t+" в' p"}}const Ax={lastWeek:(e,t,n)=>{const r=e.getDay();return cd(e,t,n)?fd(r):Wx(r)},yesterday:"'вчера в' p",today:"'сегодня в' p",tomorrow:"'завтра в' p",nextWeek:(e,t,n)=>{const r=e.getDay();return cd(e,t,n)?fd(r):Bx(r)},other:"P"},Ux=(e,t,n,r)=>{const o=Ax[e];return typeof o=="function"?o(t,n,r):o},Vx={narrow:["до н.э.","н.э."],abbreviated:["до н. э.","н. э."],wide:["до нашей эры","нашей эры"]},Yx={narrow:["1","2","3","4"],abbreviated:["1-й кв.","2-й кв.","3-й кв.","4-й кв."],wide:["1-й квартал","2-й квартал","3-й квартал","4-й квартал"]},Hx={narrow:["Я","Ф","М","А","М","И","И","А","С","О","Н","Д"],abbreviated:["янв.","фев.","март","апр.","май","июнь","июль","авг.","сент.","окт.","нояб.","дек."],wide:["январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь"]},Gx={narrow:["Я","Ф","М","А","М","И","И","А","С","О","Н","Д"],abbreviated:["янв.","фев.","мар.","апр.","мая","июн.","июл.","авг.","сент.","окт.","нояб.","дек."],wide:["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"]},Qx={narrow:["В","П","В","С","Ч","П","С"],short:["вс","пн","вт","ср","чт","пт","сб"],abbreviated:["вск","пнд","втр","срд","чтв","птн","суб"],wide:["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"]},Kx={narrow:{am:"ДП",pm:"ПП",midnight:"полн.",noon:"полд.",morning:"утро",afternoon:"день",evening:"веч.",night:"ночь"},abbreviated:{am:"ДП",pm:"ПП",midnight:"полн.",noon:"полд.",morning:"утро",afternoon:"день",evening:"веч.",night:"ночь"},wide:{am:"ДП",pm:"ПП",midnight:"полночь",noon:"полдень",morning:"утро",afternoon:"день",evening:"вечер",night:"ночь"}},Xx={narrow:{am:"ДП",pm:"ПП",midnight:"полн.",noon:"полд.",morning:"утра",afternoon:"дня",evening:"веч.",night:"ночи"},abbreviated:{am:"ДП",pm:"ПП",midnight:"полн.",noon:"полд.",morning:"утра",afternoon:"дня",evening:"веч.",night:"ночи"},wide:{am:"ДП",pm:"ПП",midnight:"полночь",noon:"полдень",morning:"утра",afternoon:"дня",evening:"вечера",night:"ночи"}},Jx=(e,t)=>{const n=Number(e),r=t==null?void 0:t.unit;let o;return r==="date"?o="-е":r==="week"||r==="minute"||r==="second"?o="-я":o="-й",n+o},qx={ordinalNumber:Jx,era:pt({values:Vx,defaultWidth:"wide"}),quarter:pt({values:Yx,defaultWidth:"wide",argumentCallback:e=>e-1}),month:pt({values:Hx,defaultWidth:"wide",formattingValues:Gx,defaultFormattingWidth:"wide"}),day:pt({values:Qx,defaultWidth:"wide"}),dayPeriod:pt({values:Kx,defaultWidth:"any",formattingValues:Xx,defaultFormattingWidth:"wide"})},Zx=/^(\d+)(-?(е|я|й|ое|ье|ая|ья|ый|ой|ий|ый))?/i,ew=/\d+/i,tw={narrow:/^((до )?н\.?\s?э\.?)/i,abbreviated:/^((до )?н\.?\s?э\.?)/i,wide:/^(до нашей эры|нашей эры|наша эра)/i},nw={any:[/^д/i,/^н/i]},rw={narrow:/^[1234]/i,abbreviated:/^[1234](-?[ыои]?й?)? кв.?/i,wide:/^[1234](-?[ыои]?й?)? квартал/i},ow={any:[/1/i,/2/i,/3/i,/4/i]},iw={narrow:/^[яфмаисонд]/i,abbreviated:/^(янв|фев|март?|апр|ма[йя]|июн[ья]?|июл[ья]?|авг|сент?|окт|нояб?|дек)\.?/i,wide:/^(январ[ья]|феврал[ья]|марта?|апрел[ья]|ма[йя]|июн[ья]|июл[ья]|августа?|сентябр[ья]|октябр[ья]|октябр[ья]|ноябр[ья]|декабр[ья])/i},aw={narrow:[/^я/i,/^ф/i,/^м/i,/^а/i,/^м/i,/^и/i,/^и/i,/^а/i,/^с/i,/^о/i,/^н/i,/^я/i],any:[/^я/i,/^ф/i,/^мар/i,/^ап/i,/^ма[йя]/i,/^июн/i,/^июл/i,/^ав/i,/^с/i,/^о/i,/^н/i,/^д/i]},lw={narrow:/^[впсч]/i,short:/^(вс|во|пн|по|вт|ср|чт|че|пт|пя|сб|су)\.?/i,abbreviated:/^(вск|вос|пнд|пон|втр|вто|срд|сре|чтв|чет|птн|пят|суб).?/i,wide:/^(воскресень[ея]|понедельника?|вторника?|сред[аы]|четверга?|пятниц[аы]|суббот[аы])/i},sw={narrow:[/^в/i,/^п/i,/^в/i,/^с/i,/^ч/i,/^п/i,/^с/i],any:[/^в[ос]/i,/^п[он]/i,/^в/i,/^ср/i,/^ч/i,/^п[ят]/i,/^с[уб]/i]},uw={narrow:/^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,abbreviated:/^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,wide:/^([дп]п|полночь|полдень|утр[оа]|день|дня|вечера?|ноч[ьи])/i},cw={any:{am:/^дп/i,pm:/^пп/i,midnight:/^полн/i,noon:/^полд/i,morning:/^у/i,afternoon:/^д[ен]/i,evening:/^в/i,night:/^н/i}},dw={ordinalNumber:wh({matchPattern:Zx,parsePattern:ew,valueCallback:e=>parseInt(e,10)}),era:ht({matchPatterns:tw,defaultMatchWidth:"wide",parsePatterns:nw,defaultParseWidth:"any"}),quarter:ht({matchPatterns:rw,defaultMatchWidth:"wide",parsePatterns:ow,defaultParseWidth:"any",valueCallback:e=>e+1}),month:ht({matchPatterns:iw,defaultMatchWidth:"wide",parsePatterns:aw,defaultParseWidth:"any"}),day:ht({matchPatterns:lw,defaultMatchWidth:"wide",parsePatterns:sw,defaultParseWidth:"any"}),dayPeriod:ht({matchPatterns:uw,defaultMatchWidth:"wide",parsePatterns:cw,defaultParseWidth:"any"})},fw={code:"ru",formatDistance:Lx,formatLong:$x,formatRelative:Ux,localize:qx,match:dw,options:{weekStartsOn:1,firstWeekContainsDate:1}};var O=function(){return O=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},O.apply(this,arguments)};function pw(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function Ah(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}function No(e){return e.mode==="multiple"}function jo(e){return e.mode==="range"}function ha(e){return e.mode==="single"}var hw={root:"rdp",multiple_months:"rdp-multiple_months",with_weeknumber:"rdp-with_weeknumber",vhidden:"rdp-vhidden",button_reset:"rdp-button_reset",button:"rdp-button",caption:"rdp-caption",caption_start:"rdp-caption_start",caption_end:"rdp-caption_end",caption_between:"rdp-caption_between",caption_label:"rdp-caption_label",caption_dropdowns:"rdp-caption_dropdowns",dropdown:"rdp-dropdown",dropdown_month:"rdp-dropdown_month",dropdown_year:"rdp-dropdown_year",dropdown_icon:"rdp-dropdown_icon",months:"rdp-months",month:"rdp-month",table:"rdp-table",tbody:"rdp-tbody",tfoot:"rdp-tfoot",head:"rdp-head",head_row:"rdp-head_row",head_cell:"rdp-head_cell",nav:"rdp-nav",nav_button:"rdp-nav_button",nav_button_previous:"rdp-nav_button_previous",nav_button_next:"rdp-nav_button_next",nav_icon:"rdp-nav_icon",row:"rdp-row",weeknumber:"rdp-weeknumber",cell:"rdp-cell",day:"rdp-day",day_today:"rdp-day_today",day_outside:"rdp-day_outside",day_selected:"rdp-day_selected",day_disabled:"rdp-day_disabled",day_hidden:"rdp-day_hidden",day_range_start:"rdp-day_range_start",day_range_end:"rdp-day_range_end",day_range_middle:"rdp-day_range_middle"};function mw(e,t){return Lt(e,"LLLL y",t)}function gw(e,t){return Lt(e,"d",t)}function vw(e,t){return Lt(e,"LLLL",t)}function yw(e){return"".concat(e)}function xw(e,t){return Lt(e,"cccccc",t)}function ww(e,t){return Lt(e,"yyyy",t)}var kw=Object.freeze({__proto__:null,formatCaption:mw,formatDay:gw,formatMonthCaption:vw,formatWeekNumber:yw,formatWeekdayName:xw,formatYearCaption:ww}),Sw=function(e,t,n){return Lt(e,"do MMMM (EEEE)",n)},Cw=function(){return"Month: "},Ew=function(){return"Go to next month"},_w=function(){return"Go to previous month"},Pw=function(e,t){return Lt(e,"cccc",t)},Nw=function(e){return"Week n. ".concat(e)},jw=function(){return"Year: "},Fw=Object.freeze({__proto__:null,labelDay:Sw,labelMonthDropdown:Cw,labelNext:Ew,labelPrevious:_w,labelWeekNumber:Nw,labelWeekday:Pw,labelYearDropdown:jw});function Dw(){var e="buttons",t=hw,n=kh,r={},o={},i=1,a={},l=new Date;return{captionLayout:e,classNames:t,formatters:kw,labels:Fw,locale:n,modifiersClassNames:r,modifiers:o,numberOfMonths:i,styles:a,today:l,mode:"default"}}function Mw(e){var t=e.fromYear,n=e.toYear,r=e.fromMonth,o=e.toMonth,i=e.fromDate,a=e.toDate;return r?i=be(r):t&&(i=new Date(t,0,1)),o?a=yu(o):n&&(a=new Date(n,11,31)),{fromDate:i?vr(i):void 0,toDate:a?vr(a):void 0}}var Uh=C.createContext(void 0);function bw(e){var t,n=e.initialProps,r=Dw(),o=Mw(n),i=o.fromDate,a=o.toDate,l=(t=n.captionLayout)!==null&&t!==void 0?t:r.captionLayout;l!=="buttons"&&(!i||!a)&&(l="buttons");var s;(ha(n)||No(n)||jo(n))&&(s=n.onSelect);var u=O(O(O({},r),n),{captionLayout:l,classNames:O(O({},r.classNames),n.classNames),components:O({},n.components),formatters:O(O({},r.formatters),n.formatters),fromDate:i,labels:O(O({},r.labels),n.labels),mode:n.mode||r.mode,modifiers:O(O({},r.modifiers),n.modifiers),modifiersClassNames:O(O({},r.modifiersClassNames),n.modifiersClassNames),onSelect:s,styles:O(O({},r.styles),n.styles),toDate:a});return d.jsx(Uh.Provider,{value:u,children:e.children})}function G(){var e=C.useContext(Uh);if(!e)throw new Error("useDayPicker must be used within a DayPickerProvider.");return e}function Vh(e){var t=G(),n=t.locale,r=t.classNames,o=t.styles,i=t.formatters.formatCaption;return d.jsx("div",{className:r.caption_label,style:o.caption_label,"aria-live":"polite",role:"presentation",id:e.id,children:i(e.displayMonth,{locale:n})})}function Ow(e){return d.jsx("svg",O({width:"8px",height:"8px",viewBox:"0 0 120 120","data-testid":"iconDropdown"},e,{children:d.jsx("path",{d:"M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z",fill:"currentColor",fillRule:"nonzero"})}))}function Yh(e){var t,n,r=e.onChange,o=e.value,i=e.children,a=e.caption,l=e.className,s=e.style,u=G(),c=(n=(t=u.components)===null||t===void 0?void 0:t.IconDropdown)!==null&&n!==void 0?n:Ow;return d.jsxs("div",{className:l,style:s,children:[d.jsx("span",{className:u.classNames.vhidden,children:e["aria-label"]}),d.jsx("select",{name:e.name,"aria-label":e["aria-label"],className:u.classNames.dropdown,style:u.styles.dropdown,value:o,onChange:r,children:i}),d.jsxs("div",{className:u.classNames.caption_label,style:u.styles.caption_label,"aria-hidden":"true",children:[a,d.jsx(c,{className:u.classNames.dropdown_icon,style:u.styles.dropdown_icon})]})]})}function Tw(e){var t,n=G(),r=n.fromDate,o=n.toDate,i=n.styles,a=n.locale,l=n.formatters.formatMonthCaption,s=n.classNames,u=n.components,c=n.labels.labelMonthDropdown;if(!r)return d.jsx(d.Fragment,{});if(!o)return d.jsx(d.Fragment,{});var f=[];if(mx(r,o))for(var h=be(r),v=r.getMonth();v<=o.getMonth();v++)f.push(Ka(h,v));else for(var h=be(new Date),v=0;v<=11;v++)f.push(Ka(h,v));var y=function(k){var m=Number(k.target.value),p=Ka(be(e.displayMonth),m);e.onChange(p)},x=(t=u==null?void 0:u.Dropdown)!==null&&t!==void 0?t:Yh;return d.jsx(x,{name:"months","aria-label":c(),className:s.dropdown_month,style:i.dropdown_month,onChange:y,value:e.displayMonth.getMonth(),caption:l(e.displayMonth,{locale:a}),children:f.map(function(k){return d.jsx("option",{value:k.getMonth(),children:l(k,{locale:a})},k.getMonth())})})}function Lw(e){var t,n=e.displayMonth,r=G(),o=r.fromDate,i=r.toDate,a=r.locale,l=r.styles,s=r.classNames,u=r.components,c=r.formatters.formatYearCaption,f=r.labels.labelYearDropdown,h=[];if(!o)return d.jsx(d.Fragment,{});if(!i)return d.jsx(d.Fragment,{});for(var v=o.getFullYear(),y=i.getFullYear(),x=v;x<=y;x++)h.push(dd(yh(new Date),x));var k=function(p){var g=dd(be(n),Number(p.target.value));e.onChange(g)},m=(t=u==null?void 0:u.Dropdown)!==null&&t!==void 0?t:Yh;return d.jsx(m,{name:"years","aria-label":f(),className:s.dropdown_year,style:l.dropdown_year,onChange:k,value:n.getFullYear(),caption:c(n,{locale:a}),children:h.map(function(p){return d.jsx("option",{value:p.getFullYear(),children:c(p,{locale:a})},p.getFullYear())})})}function Rw(e,t){var n=C.useState(e),r=n[0],o=n[1],i=t===void 0?r:t;return[i,o]}function zw(e){var t=e.month,n=e.defaultMonth,r=e.today,o=t||n||r||new Date,i=e.toDate,a=e.fromDate,l=e.numberOfMonths,s=l===void 0?1:l;if(i&&yo(i,o)<0){var u=-1*(s-1);o=at(i,u)}return a&&yo(o,a)<0&&(o=a),be(o)}function Iw(){var e=G(),t=zw(e),n=Rw(t,e.month),r=n[0],o=n[1],i=function(a){var l;if(!e.disableNavigation){var s=be(a);o(s),(l=e.onMonthChange)===null||l===void 0||l.call(e,s)}};return[r,i]}function $w(e,t){for(var n=t.reverseMonths,r=t.numberOfMonths,o=be(e),i=be(at(o,r)),a=yo(i,o),l=[],s=0;s<a;s++){var u=at(o,s);l.push(u)}return n&&(l=l.reverse()),l}function Ww(e,t){if(!t.disableNavigation){var n=t.toDate,r=t.pagedNavigation,o=t.numberOfMonths,i=o===void 0?1:o,a=r?i:1,l=be(e);if(!n)return at(l,a);var s=yo(n,e);if(!(s<i))return at(l,a)}}function Bw(e,t){if(!t.disableNavigation){var n=t.fromDate,r=t.pagedNavigation,o=t.numberOfMonths,i=o===void 0?1:o,a=r?i:1,l=be(e);if(!n)return at(l,-a);var s=yo(l,n);if(!(s<=0))return at(l,-a)}}var Hh=C.createContext(void 0);function Aw(e){var t=G(),n=Iw(),r=n[0],o=n[1],i=$w(r,t),a=Ww(r,t),l=Bw(r,t),s=function(f){return i.some(function(h){return wu(f,h)})},u=function(f,h){s(f)||(h&&Ph(f,h)?o(at(f,1+t.numberOfMonths*-1)):o(f))},c={currentMonth:r,displayMonths:i,goToMonth:o,goToDate:u,previousMonth:l,nextMonth:a,isDateDisplayed:s};return d.jsx(Hh.Provider,{value:c,children:e.children})}function Fo(){var e=C.useContext(Hh);if(!e)throw new Error("useNavigation must be used within a NavigationProvider");return e}function pd(e){var t,n=G(),r=n.classNames,o=n.styles,i=n.components,a=Fo().goToMonth,l=function(c){a(at(c,e.displayIndex?-e.displayIndex:0))},s=(t=i==null?void 0:i.CaptionLabel)!==null&&t!==void 0?t:Vh,u=d.jsx(s,{id:e.id,displayMonth:e.displayMonth});return d.jsxs("div",{className:r.caption_dropdowns,style:o.caption_dropdowns,children:[d.jsx("div",{className:r.vhidden,children:u}),d.jsx(Tw,{onChange:l,displayMonth:e.displayMonth}),d.jsx(Lw,{onChange:l,displayMonth:e.displayMonth})]})}function Uw(e){return d.jsx("svg",O({width:"16px",height:"16px",viewBox:"0 0 120 120"},e,{children:d.jsx("path",{d:"M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z",fill:"currentColor",fillRule:"nonzero"})}))}function Vw(e){return d.jsx("svg",O({width:"16px",height:"16px",viewBox:"0 0 120 120"},e,{children:d.jsx("path",{d:"M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z",fill:"currentColor"})}))}var Vi=C.forwardRef(function(e,t){var n=G(),r=n.classNames,o=n.styles,i=[r.button_reset,r.button];e.className&&i.push(e.className);var a=i.join(" "),l=O(O({},o.button_reset),o.button);return e.style&&Object.assign(l,e.style),d.jsx("button",O({},e,{ref:t,type:"button",className:a,style:l}))});function Yw(e){var t,n,r=G(),o=r.dir,i=r.locale,a=r.classNames,l=r.styles,s=r.labels,u=s.labelPrevious,c=s.labelNext,f=r.components;if(!e.nextMonth&&!e.previousMonth)return d.jsx(d.Fragment,{});var h=u(e.previousMonth,{locale:i}),v=[a.nav_button,a.nav_button_previous].join(" "),y=c(e.nextMonth,{locale:i}),x=[a.nav_button,a.nav_button_next].join(" "),k=(t=f==null?void 0:f.IconRight)!==null&&t!==void 0?t:Vw,m=(n=f==null?void 0:f.IconLeft)!==null&&n!==void 0?n:Uw;return d.jsxs("div",{className:a.nav,style:l.nav,children:[!e.hidePrevious&&d.jsx(Vi,{name:"previous-month","aria-label":h,className:v,style:l.nav_button_previous,disabled:!e.previousMonth,onClick:e.onPreviousClick,children:o==="rtl"?d.jsx(k,{className:a.nav_icon,style:l.nav_icon}):d.jsx(m,{className:a.nav_icon,style:l.nav_icon})}),!e.hideNext&&d.jsx(Vi,{name:"next-month","aria-label":y,className:x,style:l.nav_button_next,disabled:!e.nextMonth,onClick:e.onNextClick,children:o==="rtl"?d.jsx(m,{className:a.nav_icon,style:l.nav_icon}):d.jsx(k,{className:a.nav_icon,style:l.nav_icon})})]})}function hd(e){var t=G().numberOfMonths,n=Fo(),r=n.previousMonth,o=n.nextMonth,i=n.goToMonth,a=n.displayMonths,l=a.findIndex(function(y){return wu(e.displayMonth,y)}),s=l===0,u=l===a.length-1,c=t>1&&(s||!u),f=t>1&&(u||!s),h=function(){r&&i(r)},v=function(){o&&i(o)};return d.jsx(Yw,{displayMonth:e.displayMonth,hideNext:c,hidePrevious:f,nextMonth:o,previousMonth:r,onPreviousClick:h,onNextClick:v})}function Hw(e){var t,n=G(),r=n.classNames,o=n.disableNavigation,i=n.styles,a=n.captionLayout,l=n.components,s=(t=l==null?void 0:l.CaptionLabel)!==null&&t!==void 0?t:Vh,u;return o?u=d.jsx(s,{id:e.id,displayMonth:e.displayMonth}):a==="dropdown"?u=d.jsx(pd,{displayMonth:e.displayMonth,id:e.id}):a==="dropdown-buttons"?u=d.jsxs(d.Fragment,{children:[d.jsx(pd,{displayMonth:e.displayMonth,displayIndex:e.displayIndex,id:e.id}),d.jsx(hd,{displayMonth:e.displayMonth,displayIndex:e.displayIndex,id:e.id})]}):u=d.jsxs(d.Fragment,{children:[d.jsx(s,{id:e.id,displayMonth:e.displayMonth,displayIndex:e.displayIndex}),d.jsx(hd,{displayMonth:e.displayMonth,id:e.id})]}),d.jsx("div",{className:r.caption,style:i.caption,children:u})}function Gw(e){var t=G(),n=t.footer,r=t.styles,o=t.classNames.tfoot;return n?d.jsx("tfoot",{className:o,style:r.tfoot,children:d.jsx("tr",{children:d.jsx("td",{colSpan:8,children:n})})}):d.jsx(d.Fragment,{})}function Qw(e,t,n){for(var r=n?Dn(new Date):Ke(new Date,{locale:e,weekStartsOn:t}),o=[],i=0;i<7;i++){var a=Se(r,i);o.push(a)}return o}function Kw(){var e=G(),t=e.classNames,n=e.styles,r=e.showWeekNumber,o=e.locale,i=e.weekStartsOn,a=e.ISOWeek,l=e.formatters.formatWeekdayName,s=e.labels.labelWeekday,u=Qw(o,i,a);return d.jsxs("tr",{style:n.head_row,className:t.head_row,children:[r&&d.jsx("td",{style:n.head_cell,className:t.head_cell}),u.map(function(c,f){return d.jsx("th",{scope:"col",className:t.head_cell,style:n.head_cell,"aria-label":s(c,{locale:o}),children:l(c,{locale:o})},f)})]})}function Xw(){var e,t=G(),n=t.classNames,r=t.styles,o=t.components,i=(e=o==null?void 0:o.HeadRow)!==null&&e!==void 0?e:Kw;return d.jsx("thead",{style:r.head,className:n.head,children:d.jsx(i,{})})}function Jw(e){var t=G(),n=t.locale,r=t.formatters.formatDay;return d.jsx(d.Fragment,{children:r(e.date,{locale:n})})}var Cu=C.createContext(void 0);function qw(e){if(!No(e.initialProps)){var t={selected:void 0,modifiers:{disabled:[]}};return d.jsx(Cu.Provider,{value:t,children:e.children})}return d.jsx(Zw,{initialProps:e.initialProps,children:e.children})}function Zw(e){var t=e.initialProps,n=e.children,r=t.selected,o=t.min,i=t.max,a=function(u,c,f){var h,v;(h=t.onDayClick)===null||h===void 0||h.call(t,u,c,f);var y=!!(c.selected&&o&&(r==null?void 0:r.length)===o);if(!y){var x=!!(!c.selected&&i&&(r==null?void 0:r.length)===i);if(!x){var k=r?Ah([],r,!0):[];if(c.selected){var m=k.findIndex(function(p){return je(u,p)});k.splice(m,1)}else k.push(u);(v=t.onSelect)===null||v===void 0||v.call(t,k,u,c,f)}}},l={disabled:[]};r&&l.disabled.push(function(u){var c=i&&r.length>i-1,f=r.some(function(h){return je(h,u)});return!!(c&&!f)});var s={selected:r,onDayClick:a,modifiers:l};return d.jsx(Cu.Provider,{value:s,children:n})}function Eu(){var e=C.useContext(Cu);if(!e)throw new Error("useSelectMultiple must be used within a SelectMultipleProvider");return e}function ek(e,t){var n=t||{},r=n.from,o=n.to;return r&&o?je(o,e)&&je(r,e)?void 0:je(o,e)?{from:o,to:void 0}:je(r,e)?void 0:ls(r,e)?{from:e,to:o}:{from:r,to:e}:o?ls(e,o)?{from:o,to:e}:{from:e,to:o}:r?Ph(e,r)?{from:e,to:r}:{from:r,to:e}:{from:e,to:void 0}}var _u=C.createContext(void 0);function tk(e){if(!jo(e.initialProps)){var t={selected:void 0,modifiers:{range_start:[],range_end:[],range_middle:[],disabled:[]}};return d.jsx(_u.Provider,{value:t,children:e.children})}return d.jsx(nk,{initialProps:e.initialProps,children:e.children})}function nk(e){var t=e.initialProps,n=e.children,r=t.selected,o=r||{},i=o.from,a=o.to,l=t.min,s=t.max,u=function(v,y,x){var k,m;(k=t.onDayClick)===null||k===void 0||k.call(t,v,y,x);var p=ek(v,r);(m=t.onSelect)===null||m===void 0||m.call(t,p,v,y,x)},c={range_start:[],range_end:[],range_middle:[],disabled:[]};if(i?(c.range_start=[i],a?(c.range_end=[a],je(i,a)||(c.range_middle=[{after:i,before:a}])):c.range_end=[i]):a&&(c.range_start=[a],c.range_end=[a]),l&&(i&&!a&&c.disabled.push({after:Qa(i,l-1),before:Se(i,l-1)}),i&&a&&c.disabled.push({after:i,before:Se(i,l-1)}),!i&&a&&c.disabled.push({after:Qa(a,l-1),before:Se(a,l-1)})),s){if(i&&!a&&(c.disabled.push({before:Se(i,-s+1)}),c.disabled.push({after:Se(i,s-1)})),i&&a){var f=mt(a,i)+1,h=s-f;c.disabled.push({before:Qa(i,h)}),c.disabled.push({after:Se(a,h)})}!i&&a&&(c.disabled.push({before:Se(a,-s+1)}),c.disabled.push({after:Se(a,s-1)}))}return d.jsx(_u.Provider,{value:{selected:r,onDayClick:u,modifiers:c},children:n})}function Pu(){var e=C.useContext(_u);if(!e)throw new Error("useSelectRange must be used within a SelectRangeProvider");return e}function pi(e){return Array.isArray(e)?Ah([],e,!0):e!==void 0?[e]:[]}function rk(e){var t={};return Object.entries(e).forEach(function(n){var r=n[0],o=n[1];t[r]=pi(o)}),t}var lt;(function(e){e.Outside="outside",e.Disabled="disabled",e.Selected="selected",e.Hidden="hidden",e.Today="today",e.RangeStart="range_start",e.RangeEnd="range_end",e.RangeMiddle="range_middle"})(lt||(lt={}));var ok=lt.Selected,St=lt.Disabled,ik=lt.Hidden,ak=lt.Today,Xa=lt.RangeEnd,Ja=lt.RangeMiddle,qa=lt.RangeStart,lk=lt.Outside;function sk(e,t,n){var r,o=(r={},r[ok]=pi(e.selected),r[St]=pi(e.disabled),r[ik]=pi(e.hidden),r[ak]=[e.today],r[Xa]=[],r[Ja]=[],r[qa]=[],r[lk]=[],r);return e.fromDate&&o[St].push({before:e.fromDate}),e.toDate&&o[St].push({after:e.toDate}),No(e)?o[St]=o[St].concat(t.modifiers[St]):jo(e)&&(o[St]=o[St].concat(n.modifiers[St]),o[qa]=n.modifiers[qa],o[Ja]=n.modifiers[Ja],o[Xa]=n.modifiers[Xa]),o}var Gh=C.createContext(void 0);function uk(e){var t=G(),n=Eu(),r=Pu(),o=sk(t,n,r),i=rk(t.modifiers),a=O(O({},o),i);return d.jsx(Gh.Provider,{value:a,children:e.children})}function Qh(){var e=C.useContext(Gh);if(!e)throw new Error("useModifiers must be used within a ModifiersProvider");return e}function ck(e){return!!(e&&typeof e=="object"&&"before"in e&&"after"in e)}function dk(e){return!!(e&&typeof e=="object"&&"from"in e)}function fk(e){return!!(e&&typeof e=="object"&&"after"in e)}function pk(e){return!!(e&&typeof e=="object"&&"before"in e)}function hk(e){return!!(e&&typeof e=="object"&&"dayOfWeek"in e)}function mk(e,t){var n,r=t.from,o=t.to;if(r&&o){var i=mt(o,r)<0;i&&(n=[o,r],r=n[0],o=n[1]);var a=mt(e,r)>=0&&mt(o,e)>=0;return a}return o?je(o,e):r?je(r,e):!1}function gk(e){return vu(e)}function vk(e){return Array.isArray(e)&&e.every(vu)}function yk(e,t){return t.some(function(n){if(typeof n=="boolean")return n;if(gk(n))return je(e,n);if(vk(n))return n.includes(e);if(dk(n))return mk(e,n);if(hk(n))return n.dayOfWeek.includes(e.getDay());if(ck(n)){var r=mt(n.before,e),o=mt(n.after,e),i=r>0,a=o<0,l=ls(n.before,n.after);return l?a&&i:i||a}return fk(n)?mt(e,n.after)>0:pk(n)?mt(n.before,e)>0:typeof n=="function"?n(e):!1})}function Nu(e,t,n){var r=Object.keys(t).reduce(function(i,a){var l=t[a];return yk(e,l)&&i.push(a),i},[]),o={};return r.forEach(function(i){return o[i]=!0}),n&&!wu(e,n)&&(o.outside=!0),o}function xk(e,t){for(var n=be(e[0]),r=yu(e[e.length-1]),o,i,a=n;a<=r;){var l=Nu(a,t),s=!l.disabled&&!l.hidden;if(!s){a=Se(a,1);continue}if(l.selected)return a;l.today&&!i&&(i=a),o||(o=a),a=Se(a,1)}return i||o}var wk=365;function Kh(e,t){var n=t.moveBy,r=t.direction,o=t.context,i=t.modifiers,a=t.retry,l=a===void 0?{count:0,lastFocused:e}:a,s=o.weekStartsOn,u=o.fromDate,c=o.toDate,f=o.locale,h={day:Se,week:as,month:at,year:fy,startOfWeek:function(k){return o.ISOWeek?Dn(k):Ke(k,{locale:f,weekStartsOn:s})},endOfWeek:function(k){return o.ISOWeek?xh(k):xu(k,{locale:f,weekStartsOn:s})}},v=h[n](e,r==="after"?1:-1);r==="before"&&u?v=py([u,v]):r==="after"&&c&&(v=hy([c,v]));var y=!0;if(i){var x=Nu(v,i);y=!x.disabled&&!x.hidden}return y?v:l.count>wk?l.lastFocused:Kh(v,{moveBy:n,direction:r,context:o,modifiers:i,retry:O(O({},l),{count:l.count+1})})}var Xh=C.createContext(void 0);function kk(e){var t=Fo(),n=Qh(),r=C.useState(),o=r[0],i=r[1],a=C.useState(),l=a[0],s=a[1],u=xk(t.displayMonths,n),c=o??(l&&t.isDateDisplayed(l))?l:u,f=function(){s(o),i(void 0)},h=function(k){i(k)},v=G(),y=function(k,m){if(o){var p=Kh(o,{moveBy:k,direction:m,context:v,modifiers:n});je(o,p)||(t.goToDate(p,o),h(p))}},x={focusedDay:o,focusTarget:c,blur:f,focus:h,focusDayAfter:function(){return y("day","after")},focusDayBefore:function(){return y("day","before")},focusWeekAfter:function(){return y("week","after")},focusWeekBefore:function(){return y("week","before")},focusMonthBefore:function(){return y("month","before")},focusMonthAfter:function(){return y("month","after")},focusYearBefore:function(){return y("year","before")},focusYearAfter:function(){return y("year","after")},focusStartOfWeek:function(){return y("startOfWeek","before")},focusEndOfWeek:function(){return y("endOfWeek","after")}};return d.jsx(Xh.Provider,{value:x,children:e.children})}function ju(){var e=C.useContext(Xh);if(!e)throw new Error("useFocusContext must be used within a FocusProvider");return e}function Sk(e,t){var n=Qh(),r=Nu(e,n,t);return r}var Fu=C.createContext(void 0);function Ck(e){if(!ha(e.initialProps)){var t={selected:void 0};return d.jsx(Fu.Provider,{value:t,children:e.children})}return d.jsx(Ek,{initialProps:e.initialProps,children:e.children})}function Ek(e){var t=e.initialProps,n=e.children,r=function(i,a,l){var s,u,c;if((s=t.onDayClick)===null||s===void 0||s.call(t,i,a,l),a.selected&&!t.required){(u=t.onSelect)===null||u===void 0||u.call(t,void 0,i,a,l);return}(c=t.onSelect)===null||c===void 0||c.call(t,i,i,a,l)},o={selected:t.selected,onDayClick:r};return d.jsx(Fu.Provider,{value:o,children:n})}function Jh(){var e=C.useContext(Fu);if(!e)throw new Error("useSelectSingle must be used within a SelectSingleProvider");return e}function _k(e,t){var n=G(),r=Jh(),o=Eu(),i=Pu(),a=ju(),l=a.focusDayAfter,s=a.focusDayBefore,u=a.focusWeekAfter,c=a.focusWeekBefore,f=a.blur,h=a.focus,v=a.focusMonthBefore,y=a.focusMonthAfter,x=a.focusYearBefore,k=a.focusYearAfter,m=a.focusStartOfWeek,p=a.focusEndOfWeek,g=function(M){var E,b,T,W;ha(n)?(E=r.onDayClick)===null||E===void 0||E.call(r,e,t,M):No(n)?(b=o.onDayClick)===null||b===void 0||b.call(o,e,t,M):jo(n)?(T=i.onDayClick)===null||T===void 0||T.call(i,e,t,M):(W=n.onDayClick)===null||W===void 0||W.call(n,e,t,M)},w=function(M){var E;h(e),(E=n.onDayFocus)===null||E===void 0||E.call(n,e,t,M)},P=function(M){var E;f(),(E=n.onDayBlur)===null||E===void 0||E.call(n,e,t,M)},N=function(M){var E;(E=n.onDayMouseEnter)===null||E===void 0||E.call(n,e,t,M)},_=function(M){var E;(E=n.onDayMouseLeave)===null||E===void 0||E.call(n,e,t,M)},F=function(M){var E;(E=n.onDayPointerEnter)===null||E===void 0||E.call(n,e,t,M)},V=function(M){var E;(E=n.onDayPointerLeave)===null||E===void 0||E.call(n,e,t,M)},R=function(M){var E;(E=n.onDayTouchCancel)===null||E===void 0||E.call(n,e,t,M)},xe=function(M){var E;(E=n.onDayTouchEnd)===null||E===void 0||E.call(n,e,t,M)},xt=function(M){var E;(E=n.onDayTouchMove)===null||E===void 0||E.call(n,e,t,M)},wt=function(M){var E;(E=n.onDayTouchStart)===null||E===void 0||E.call(n,e,t,M)},Tn=function(M){var E;(E=n.onDayKeyUp)===null||E===void 0||E.call(n,e,t,M)},Er=function(M){var E;switch(M.key){case"ArrowLeft":M.preventDefault(),M.stopPropagation(),n.dir==="rtl"?l():s();break;case"ArrowRight":M.preventDefault(),M.stopPropagation(),n.dir==="rtl"?s():l();break;case"ArrowDown":M.preventDefault(),M.stopPropagation(),u();break;case"ArrowUp":M.preventDefault(),M.stopPropagation(),c();break;case"PageUp":M.preventDefault(),M.stopPropagation(),M.shiftKey?x():v();break;case"PageDown":M.preventDefault(),M.stopPropagation(),M.shiftKey?k():y();break;case"Home":M.preventDefault(),M.stopPropagation(),m();break;case"End":M.preventDefault(),M.stopPropagation(),p();break}(E=n.onDayKeyDown)===null||E===void 0||E.call(n,e,t,M)},fn={onClick:g,onFocus:w,onBlur:P,onKeyDown:Er,onKeyUp:Tn,onMouseEnter:N,onMouseLeave:_,onPointerEnter:F,onPointerLeave:V,onTouchCancel:R,onTouchEnd:xe,onTouchMove:xt,onTouchStart:wt};return fn}function Pk(){var e=G(),t=Jh(),n=Eu(),r=Pu(),o=ha(e)?t.selected:No(e)?n.selected:jo(e)?r.selected:void 0;return o}function Nk(e){return Object.values(lt).includes(e)}function jk(e,t){var n=[e.classNames.day];return Object.keys(t).forEach(function(r){var o=e.modifiersClassNames[r];if(o)n.push(o);else if(Nk(r)){var i=e.classNames["day_".concat(r)];i&&n.push(i)}}),n}function Fk(e,t){var n=O({},e.styles.day);return Object.keys(t).forEach(function(r){var o;n=O(O({},n),(o=e.modifiersStyles)===null||o===void 0?void 0:o[r])}),n}function Dk(e,t,n){var r,o,i,a=G(),l=ju(),s=Sk(e,t),u=_k(e,s),c=Pk(),f=!!(a.onDayClick||a.mode!=="default");C.useEffect(function(){var N;s.outside||l.focusedDay&&f&&je(l.focusedDay,e)&&((N=n.current)===null||N===void 0||N.focus())},[l.focusedDay,e,n,f,s.outside]);var h=jk(a,s).join(" "),v=Fk(a,s),y=!!(s.outside&&!a.showOutsideDays||s.hidden),x=(i=(o=a.components)===null||o===void 0?void 0:o.DayContent)!==null&&i!==void 0?i:Jw,k=d.jsx(x,{date:e,displayMonth:t,activeModifiers:s}),m={style:v,className:h,children:k,role:"gridcell"},p=l.focusTarget&&je(l.focusTarget,e)&&!s.outside,g=l.focusedDay&&je(l.focusedDay,e),w=O(O(O({},m),(r={disabled:s.disabled,role:"gridcell"},r["aria-selected"]=s.selected,r.tabIndex=g||p?0:-1,r)),u),P={isButton:f,isHidden:y,activeModifiers:s,selectedDays:c,buttonProps:w,divProps:m};return P}function Mk(e){var t=C.useRef(null),n=Dk(e.date,e.displayMonth,t);return n.isHidden?d.jsx("div",{role:"gridcell"}):n.isButton?d.jsx(Vi,O({name:"day",ref:t},n.buttonProps)):d.jsx("div",O({},n.divProps))}function bk(e){var t=e.number,n=e.dates,r=G(),o=r.onWeekNumberClick,i=r.styles,a=r.classNames,l=r.locale,s=r.labels.labelWeekNumber,u=r.formatters.formatWeekNumber,c=u(Number(t),{locale:l});if(!o)return d.jsx("span",{className:a.weeknumber,style:i.weeknumber,children:c});var f=s(Number(t),{locale:l}),h=function(v){o(t,n,v)};return d.jsx(Vi,{name:"week-number","aria-label":f,className:a.weeknumber,style:i.weeknumber,onClick:h,children:c})}function Ok(e){var t,n,r=G(),o=r.styles,i=r.classNames,a=r.showWeekNumber,l=r.components,s=(t=l==null?void 0:l.Day)!==null&&t!==void 0?t:Mk,u=(n=l==null?void 0:l.WeekNumber)!==null&&n!==void 0?n:bk,c;return a&&(c=d.jsx("td",{className:i.cell,style:o.cell,children:d.jsx(u,{number:e.weekNumber,dates:e.dates})})),d.jsxs("tr",{className:i.row,style:o.row,children:[c,e.dates.map(function(f){return d.jsx("td",{className:i.cell,style:o.cell,role:"presentation",children:d.jsx(s,{displayMonth:e.displayMonth,date:f})},fx(f))})]})}function md(e,t,n){for(var r=n!=null&&n.ISOWeek?xh(t):xu(t,n),o=n!=null&&n.ISOWeek?Dn(e):Ke(e,n),i=mt(r,o),a=[],l=0;l<=i;l++)a.push(Se(o,l));var s=a.reduce(function(u,c){var f=n!=null&&n.ISOWeek?Sh(c):Eh(c,n),h=u.find(function(v){return v.weekNumber===f});return h?(h.dates.push(c),u):(u.push({weekNumber:f,dates:[c]}),u)},[]);return s}function Tk(e,t){var n=md(be(e),yu(e),t);if(t!=null&&t.useFixedWeeks){var r=hx(e,t);if(r<6){var o=n[n.length-1],i=o.dates[o.dates.length-1],a=as(i,6-r),l=md(as(i,1),a,t);n.push.apply(n,l)}}return n}function Lk(e){var t,n,r,o=G(),i=o.locale,a=o.classNames,l=o.styles,s=o.hideHead,u=o.fixedWeeks,c=o.components,f=o.weekStartsOn,h=o.firstWeekContainsDate,v=o.ISOWeek,y=Tk(e.displayMonth,{useFixedWeeks:!!u,ISOWeek:v,locale:i,weekStartsOn:f,firstWeekContainsDate:h}),x=(t=c==null?void 0:c.Head)!==null&&t!==void 0?t:Xw,k=(n=c==null?void 0:c.Row)!==null&&n!==void 0?n:Ok,m=(r=c==null?void 0:c.Footer)!==null&&r!==void 0?r:Gw;return d.jsxs("table",{id:e.id,className:a.table,style:l.table,role:"grid","aria-labelledby":e["aria-labelledby"],children:[!s&&d.jsx(x,{}),d.jsx("tbody",{className:a.tbody,style:l.tbody,children:y.map(function(p){return d.jsx(k,{displayMonth:e.displayMonth,dates:p.dates,weekNumber:p.weekNumber},p.weekNumber)})}),d.jsx(m,{displayMonth:e.displayMonth})]})}function Rk(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}var zk=Rk()?C.useLayoutEffect:C.useEffect,Za=!1,Ik=0;function gd(){return"react-day-picker-".concat(++Ik)}function $k(e){var t,n=e??(Za?gd():null),r=C.useState(n),o=r[0],i=r[1];return zk(function(){o===null&&i(gd())},[]),C.useEffect(function(){Za===!1&&(Za=!0)},[]),(t=e??o)!==null&&t!==void 0?t:void 0}function Wk(e){var t,n,r=G(),o=r.dir,i=r.classNames,a=r.styles,l=r.components,s=Fo().displayMonths,u=$k(r.id?"".concat(r.id,"-").concat(e.displayIndex):void 0),c=r.id?"".concat(r.id,"-grid-").concat(e.displayIndex):void 0,f=[i.month],h=a.month,v=e.displayIndex===0,y=e.displayIndex===s.length-1,x=!v&&!y;o==="rtl"&&(t=[v,y],y=t[0],v=t[1]),v&&(f.push(i.caption_start),h=O(O({},h),a.caption_start)),y&&(f.push(i.caption_end),h=O(O({},h),a.caption_end)),x&&(f.push(i.caption_between),h=O(O({},h),a.caption_between));var k=(n=l==null?void 0:l.Caption)!==null&&n!==void 0?n:Hw;return d.jsxs("div",{className:f.join(" "),style:h,children:[d.jsx(k,{id:u,displayMonth:e.displayMonth,displayIndex:e.displayIndex}),d.jsx(Lk,{id:c,"aria-labelledby":u,displayMonth:e.displayMonth})]},e.displayIndex)}function Bk(e){var t=G(),n=t.classNames,r=t.styles;return d.jsx("div",{className:n.months,style:r.months,children:e.children})}function Ak(e){var t,n,r=e.initialProps,o=G(),i=ju(),a=Fo(),l=C.useState(!1),s=l[0],u=l[1];C.useEffect(function(){o.initialFocus&&i.focusTarget&&(s||(i.focus(i.focusTarget),u(!0)))},[o.initialFocus,s,i.focus,i.focusTarget,i]);var c=[o.classNames.root,o.className];o.numberOfMonths>1&&c.push(o.classNames.multiple_months),o.showWeekNumber&&c.push(o.classNames.with_weeknumber);var f=O(O({},o.styles.root),o.style),h=Object.keys(r).filter(function(y){return y.startsWith("data-")}).reduce(function(y,x){var k;return O(O({},y),(k={},k[x]=r[x],k))},{}),v=(n=(t=r.components)===null||t===void 0?void 0:t.Months)!==null&&n!==void 0?n:Bk;return d.jsx("div",O({className:c.join(" "),style:f,dir:o.dir,id:o.id,nonce:r.nonce,title:r.title,lang:r.lang},h,{children:d.jsx(v,{children:a.displayMonths.map(function(y,x){return d.jsx(Wk,{displayIndex:x,displayMonth:y},x)})})}))}function Uk(e){var t=e.children,n=pw(e,["children"]);return d.jsx(bw,{initialProps:n,children:d.jsx(Aw,{children:d.jsx(Ck,{initialProps:n,children:d.jsx(qw,{initialProps:n,children:d.jsx(tk,{initialProps:n,children:d.jsx(uk,{children:d.jsx(kk,{children:t})})})})})})})}function Vk(e){return d.jsx(Uk,O({},e,{children:d.jsx(Ak,{initialProps:e})}))}const Yk=S(Vk)`
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
`;function qh({date:e,setSelected:t}){const[n,r]=C.useState(e?new Date(e):void 0),o=i=>{r(i),t(i?i.toISOString():"")};return d.jsx(Yk,{locale:fw,mode:"single",selected:n,onSelect:o})}const Hk=S.div`
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
`,Gk=S.div`
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
`,Qk=S.div`
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
`,Kk=S.div`
  display: block;
  text-align: left;

  @media screen and (max-width: 495px) {
    margin-bottom: 20px;
  }
`,Xk=S.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`,Jk=S.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`,qk=S.input`
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

`,Zk=S.div`
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
`,eS=S.div`
  margin-bottom: 11px;
`,tS=S.p`
  margin-bottom: 14px;
`,nS=S.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`,vd=S.div`
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
`,yd=S.p`
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
`,rS=S.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (max-width: 660px) {
    display: block;
  }
`,oS=S.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
`,iS=S.div`
  display: flex;
  flex-direction: column;
`,aS=S.label`
    color: #000;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;  
`,lS=S.textarea`
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
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94A6BE;
    letter-spacing: -0.14px;
  }

  @media screen and (max-width: 495px) {
    max-width: 100%;
  }
`,sS=S.textarea`
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
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94A6BE;
    letter-spacing: -0.14px;
  }
`,uS=S.div`
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
`,cS=S.p`
  margin-bottom: 14px;
  padding: 0 7px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;S.div`
  display: none;
  margin-bottom: 20px;
`;S.p`
  margin-bottom: 14px;
`;S.div`
  background-color: #FFE4C2;
  color: #FF6D00;
  border-radius: 4px;
  padding: 8px 20px;
  opacity: 1;
`;const dS=S.div`
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
`,fS=S.div`
  margin-right: 8px;

  
`,Rt=S.button`
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
`,pS=S(Rt)`
  &._btn-bor {
    margin-right: 8px;

    @media screen and (max-width: 495px) {
      margin-right: 0px;
    }
  }
`,hS=S(Rt)`
  &._btn-bor {
    margin-left: 8px;

    @media screen and (max-width: 495px) {
      margin-left: 0px;      
    }
  }
`,mS=S(Rt)`
  &._btn-bor {
    margin-left: 8px;

    @media screen and (max-width: 495px) {
      margin-left: 0px;
    }
  }
`,gS=S(Rt)``,vS=S(Rt)``,yS=S(Rt)`
  a {
    text-decoration: none;
  }
`;S.div`
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
  }

  .btn-group {
    button {
      margin-right: 8px;
    }
  }
`;S(Rt)`
  &._btn-bg {
    margin-right: 8px;
  }
`;S(Rt)``;S(Rt)``;const xS=S.p`
  color: red;
  font-size: 12px;
  margin-top: 5px;
  margin-left: 5px;
  display: block;
`,wS=S.p`
  color: red;
  position: absolute;
  font-size: 12px;
  top: 110px;
  left: 35px;
`,kS=()=>{let{id:e}=rv();const{tasks:t,setTasks:n}=ku(),r=t.find(F=>F._id===e),[o,i]=C.useState(!1),[a,l]=C.useState((r==null?void 0:r.status)||"Без статуса"),[s,u]=C.useState((r==null?void 0:r.title)||""),[c,f]=C.useState((r==null?void 0:r.description)||""),[h,v]=C.useState({}),y=Tt(),{user:x}=On();if(C.useEffect(()=>{r&&(u(r.title),f(r.description),l(r.status))},[r]),!r)return null;const k=()=>{const F={};return s.trim()||(F.title=d.jsx(wS,{children:"Название задачи не может быть пустым"})),c.trim()||(F.description=d.jsx(xS,{children:"Описание задачи не может быть пустым"})),v(F),Object.keys(F).length===0},m=()=>{i(!0)},p=()=>{i(!1),u(r.title),f(r.description),l(r.status),v({})},g=F=>{l(F)},w=F=>{u(F.target.value)},P=F=>{f(F.target.value)},N=async()=>{try{const F=await Px({id:r._id,user:x});n(F.tasks),y("/")}catch(F){console.error("Ошибка при удалении задачи:",F)}},_=async()=>{if(k())try{const F=await _x({id:r._id,user:x,title:s,topic:r.topic,status:a,description:c,date:r.date});n(F.tasks),i(!1)}catch(F){console.error("Ошибка при редактировании задачи:",F)}};return d.jsx(Hk,{id:"popBrowse",children:d.jsx(Gk,{children:d.jsx(Qk,{children:d.jsxs(Kk,{children:[d.jsxs(Xk,{children:[o?d.jsxs(d.Fragment,{children:[d.jsx(qk,{placeholder:"Введите название задачи...",type:"text",value:s,onChange:w}),h.title&&d.jsx("span",{children:h.title})]}):d.jsx(Jk,{children:r.title}),d.jsx(Zk,{className:`
                  ${r.topic==="Research"?"_green":""}
                  ${r.topic==="Web Design"?"_orange":""}
                  ${r.topic==="Copywriting"?"_purple":""}
                  ${r.topic==="Без категории"?"_gray":""}
                `,children:d.jsx("p",{children:r.topic})})]}),d.jsxs(eS,{children:[d.jsx(tS,{className:"subttl",children:"Статус"}),d.jsx(nS,{children:o?["Без статуса","Нужно сделать","В работе","Тестирование","Готово"].map(F=>d.jsx(vd,{className:a===F?"_gray":"",onClick:()=>g(F),children:d.jsx(yd,{children:F})},F)):d.jsx(vd,{className:"_gray",children:d.jsx(yd,{children:a})})})]}),d.jsxs(rS,{children:[d.jsx(oS,{id:"formBrowseCard",action:"#",children:d.jsxs(iS,{children:[d.jsx(aS,{htmlFor:"textArea01",children:"Описание задачи"}),o?d.jsxs(d.Fragment,{children:[d.jsx(sS,{placeholder:"Введите описание задачи...",value:c,onChange:P}),h.description&&d.jsx("span",{children:h.description})]}):d.jsx(lS,{id:"textArea01",readOnly:!0,value:c})]})}),d.jsxs(uS,{children:[d.jsx(cS,{children:"Даты"}),d.jsx(qh,{date:r.date,setSelected:()=>{},readOnly:!o}),d.jsxs("p",{children:["Срок исполнения: ",d.jsx("span",{children:Lt(new Date(r.date),"dd.MM.yyyy")})]})]})]}),d.jsxs(dS,{children:[d.jsx(fS,{children:o?d.jsxs("div",{className:"editButtons",children:[d.jsx(gS,{className:"_btn-bg _hover01",onClick:_,children:"Сохранить"}),d.jsx(hS,{className:"_btn-bor _hover03",onClick:p,children:"Отменить"}),d.jsx(mS,{className:"_btn-bor _hover03",onClick:N,children:"Удалить задачу"})]}):d.jsxs("div",{className:"mainButtons",children:[d.jsx(pS,{className:"_btn-bor _hover03",onClick:m,children:"Редактировать"}),d.jsx(vS,{className:"_btn-bg _hover01",onClick:N,children:"Удалить"})]})}),d.jsx(yS,{className:"_btn-bor _hover03",children:d.jsx(dr,{to:"/",children:"Закрыть"})})]})]})})})})},SS=()=>d.jsx(kS,{});function CS(){const{user:e}=On();return e?d.jsx(lu,{}):d.jsx(vv,{to:"/login"})}const ES=S.div`
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
`,_S=S.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`,PS=S.div`
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
`,NS=S.div`
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
`,jS=S.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`,FS=S.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 375px) {
    display: block;
  }
`,DS=S.button`
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
`,MS=S.button`
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
`,bS=()=>{const{logoutUser:e}=On();return d.jsx(ES,{id:"popExit",children:d.jsx(_S,{children:d.jsxs(PS,{children:[d.jsx(NS,{children:d.jsx("h2",{children:"Выйти из аккаунта?"})}),d.jsx(jS,{id:"formExit",action:"#",children:d.jsxs(FS,{children:[d.jsx(DS,{children:d.jsx("a",{onClick:e,children:"Да, выйти"})}),d.jsx(MS,{children:d.jsx(dr,{to:"/",children:"Нет, остаться"})})]})})]})})})};function OS(){return d.jsx(bS,{})}function TS(){let e=Tt();return setTimeout(()=>e("/"),2e3),d.jsxs("div",{style:{display:"flex",flexDirection:"column",justifyContent:"start",alignItems:"center",height:"100vh"},children:[d.jsx("img",{src:"https://www.bordur32.ru/upload/editor/error-404.jpg",alt:"Страница не найдена",style:{width:"60%"}}),d.jsx("p",{children:"Возвращаемся на главную..."})]})}const LS=S.div`
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
`,RS=S.div`
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
`,zS=S.div`
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
`,IS=S.div`
  display: block;
  text-align: left;
`,$S=S.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 20px;
`,WS=S.p`
    position: absolute;
    top: 20px;
    right: 30px;
    color: #94A6BE;
    cursor: pointer;

    &:hover {
        color: #000000;
    }
`,BS=S.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (max-width: 660px) {
    display: block;
  }
`,AS=S.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;

  @media screen and (max-width: 495px) {
    max-width: 100%;
    width: 100%;
    display: block;
  }
`,xd=S.div`
  display: flex;
  flex-direction: column;
`,US=S.input`
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
`,VS=S.textarea`
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
`,YS=S.div`
  width: 182px;
  margin-bottom: 20px;
`,HS=S.p`
  margin-bottom: 14px;
  padding: 0 7px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`,GS=S.div`
  margin-bottom: 20px;
`,QS=S.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
`,KS=S.p`
    margin-bottom: 14px;
    padding: 0 7px;
    color: #000;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
`,el=S.div`
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
`,XS=S.button`
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
`,wd=S.label`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;S.div`
  margin-bottom: 12px;
`;S.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  margin: 7px 0;
  padding: 0 7px;
`;S.div`
  color: #94A6BE;
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.2px;
`;S.div`
  width: 182px;
  height: 126px;
  display: flex;
  flex-wrap: wrap;
`;S.div`
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
`;S.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
  padding: 0 7px;
`;S.div`
  width: 18px;
  height: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    fill: #94A6BE;
  }
`;S.div`
  padding: 0 7px;
`;S.div`
  color: #94A6BE;
  font-size: 14px;
  line-height: 25px;
  font-weight: 600;
`;S.div`
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
`;const JS=()=>{const{setTasks:e}=ku(),t=Tt(),{user:n}=On(),[r,o]=C.useState({title:"",topic:"",description:"",date:"",status:"Без статуса"}),i=c=>{const{name:f,value:h}=c.target;o({...r,[f]:h})},[a,l]=C.useState(!1);C.useEffect(()=>{(()=>{const f=r.title.trim()!=="",h=r.description.trim()!=="",v=r.topic,y=r.date;l(f&&h&&v&&y)})()},[r]);const s=async()=>{const c={title:r.title,topic:r.topic,status:r.status,description:r.description,date:r.date},f=await Ex({user:n,title:c.title,topic:c.topic,status:c.status,description:c.description,date:c.date});if(f.ok){const h=await f.json();e(h.tasks),t("/")}else alert("Что-то пошло не так, попробуйте снова...")},u=()=>{t("/")};return d.jsx(LS,{children:d.jsx(RS,{children:d.jsx(zS,{children:d.jsxs(IS,{children:[d.jsx($S,{children:"Создание задачи"}),d.jsx(WS,{onClick:u,children:"✖"}),d.jsxs(BS,{children:[d.jsxs(AS,{id:"formNewCard",action:"#",children:[d.jsxs(xd,{children:[d.jsx(wd,{htmlFor:"formTitle",children:"Название задачи"}),d.jsx(US,{type:"text",name:"title",id:"formTitle",placeholder:"Введите название задачи...",autoFocus:!0,value:r.title,onChange:i})]}),d.jsxs(xd,{children:[d.jsx(wd,{htmlFor:"textArea",children:"Описание задачи"}),d.jsx(VS,{name:"description",id:"textArea",placeholder:"Введите описание задачи...",value:r.description,onChange:i})]})]}),d.jsxs(YS,{children:[d.jsx(HS,{children:"Даты"}),d.jsx(qh,{date:r.date,setSelected:c=>o({...r,date:c})})]})]}),d.jsxs(GS,{children:[d.jsx(KS,{children:"Категория"}),d.jsxs(QS,{children:[d.jsx(el,{className:`_orange ${r.topic==="Web Design"?"_active-topic":""}`,onClick:()=>o({...r,topic:"Web Design"}),children:d.jsx("p",{className:"_orange",children:"Web Design"})}),d.jsx(el,{className:`_green ${r.topic==="Research"?"_active-topic":""}`,onClick:()=>o({...r,topic:"Research"}),children:d.jsx("p",{className:"_green",children:"Research"})}),d.jsx(el,{className:`_purple ${r.topic==="Copywriting"?"_active-topic":""}`,onClick:()=>o({...r,topic:"Copywriting"}),children:d.jsx("p",{className:"_purple",children:"Copywriting"})})]})]}),d.jsx(XS,{id:"btnCreate",onClick:s,style:{opacity:a?1:.5},disabled:!a,children:"Создать задачу"})]})})})})};function qS(){return d.jsx(JS,{})}function ZS(){return d.jsxs(d.Fragment,{children:[d.jsx(M1,{}),d.jsx(Y1,{children:d.jsxs(xv,{children:[d.jsx(ut,{element:d.jsx(CS,{}),children:d.jsx(ut,{element:d.jsx(Fx,{}),children:d.jsxs(ut,{path:"/",element:d.jsx(Mx,{}),children:[d.jsx(ut,{path:"/card/:id",element:d.jsx(SS,{})}),d.jsx(ut,{path:"/exit",element:d.jsx(OS,{})}),d.jsx(ut,{path:"/newcard",element:d.jsx(qS,{})})]})})}),d.jsx(ut,{path:"/login",element:d.jsx(bx,{})}),d.jsx(ut,{path:"/register",element:d.jsx(Ox,{})}),d.jsx(ut,{path:"*",element:d.jsx(TS,{})})]})})]})}tl.createRoot(document.getElementById("root")).render(d.jsx(tt.StrictMode,{children:d.jsx(Pv,{children:d.jsx(ZS,{})})}));
