function Dk(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function xk(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ru={},Pk={get exports(){return Ru},set exports(t){Ru=t}},$c={},P={},Ok={get exports(){return P},set exports(t){P=t}},se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ya=Symbol.for("react.element"),Mk=Symbol.for("react.portal"),Lk=Symbol.for("react.fragment"),bk=Symbol.for("react.strict_mode"),Fk=Symbol.for("react.profiler"),$k=Symbol.for("react.provider"),Uk=Symbol.for("react.context"),Vk=Symbol.for("react.forward_ref"),zk=Symbol.for("react.suspense"),Bk=Symbol.for("react.memo"),jk=Symbol.for("react.lazy"),Hy=Symbol.iterator;function Wk(t){return t===null||typeof t!="object"?null:(t=Hy&&t[Hy]||t["@@iterator"],typeof t=="function"?t:null)}var Sw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Cw=Object.assign,Iw={};function Gs(t,e,n){this.props=t,this.context=e,this.refs=Iw,this.updater=n||Sw}Gs.prototype.isReactComponent={};Gs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Gs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Tw(){}Tw.prototype=Gs.prototype;function Yp(t,e,n){this.props=t,this.context=e,this.refs=Iw,this.updater=n||Sw}var Xp=Yp.prototype=new Tw;Xp.constructor=Yp;Cw(Xp,Gs.prototype);Xp.isPureReactComponent=!0;var qy=Array.isArray,kw=Object.prototype.hasOwnProperty,Jp={current:null},Rw={key:!0,ref:!0,__self:!0,__source:!0};function Nw(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)kw.call(e,r)&&!Rw.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ya,type:t,key:s,ref:o,props:i,_owner:Jp.current}}function Hk(t,e){return{$$typeof:Ya,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Zp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ya}function qk(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Gy=/\/+/g;function Zh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?qk(""+t.key):e.toString(36)}function au(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ya:case Mk:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Zh(o,0):r,qy(i)?(n="",t!=null&&(n=t.replace(Gy,"$&/")+"/"),au(i,e,n,"",function(u){return u})):i!=null&&(Zp(i)&&(i=Hk(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Gy,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",qy(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Zh(s,a);o+=au(s,e,n,l,i)}else if(l=Wk(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Zh(s,a++),o+=au(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Pl(t,e,n){if(t==null)return t;var r=[],i=0;return au(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Gk(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Dt={current:null},lu={transition:null},Kk={ReactCurrentDispatcher:Dt,ReactCurrentBatchConfig:lu,ReactCurrentOwner:Jp};se.Children={map:Pl,forEach:function(t,e,n){Pl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Pl(t,function(){e++}),e},toArray:function(t){return Pl(t,function(e){return e})||[]},only:function(t){if(!Zp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};se.Component=Gs;se.Fragment=Lk;se.Profiler=Fk;se.PureComponent=Yp;se.StrictMode=bk;se.Suspense=zk;se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Kk;se.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Cw({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Jp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)kw.call(e,l)&&!Rw.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ya,type:t.type,key:i,ref:s,props:r,_owner:o}};se.createContext=function(t){return t={$$typeof:Uk,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:$k,_context:t},t.Consumer=t};se.createElement=Nw;se.createFactory=function(t){var e=Nw.bind(null,t);return e.type=t,e};se.createRef=function(){return{current:null}};se.forwardRef=function(t){return{$$typeof:Vk,render:t}};se.isValidElement=Zp;se.lazy=function(t){return{$$typeof:jk,_payload:{_status:-1,_result:t},_init:Gk}};se.memo=function(t,e){return{$$typeof:Bk,type:t,compare:e===void 0?null:e}};se.startTransition=function(t){var e=lu.transition;lu.transition={};try{t()}finally{lu.transition=e}};se.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};se.useCallback=function(t,e){return Dt.current.useCallback(t,e)};se.useContext=function(t){return Dt.current.useContext(t)};se.useDebugValue=function(){};se.useDeferredValue=function(t){return Dt.current.useDeferredValue(t)};se.useEffect=function(t,e){return Dt.current.useEffect(t,e)};se.useId=function(){return Dt.current.useId()};se.useImperativeHandle=function(t,e,n){return Dt.current.useImperativeHandle(t,e,n)};se.useInsertionEffect=function(t,e){return Dt.current.useInsertionEffect(t,e)};se.useLayoutEffect=function(t,e){return Dt.current.useLayoutEffect(t,e)};se.useMemo=function(t,e){return Dt.current.useMemo(t,e)};se.useReducer=function(t,e,n){return Dt.current.useReducer(t,e,n)};se.useRef=function(t){return Dt.current.useRef(t)};se.useState=function(t){return Dt.current.useState(t)};se.useSyncExternalStore=function(t,e,n){return Dt.current.useSyncExternalStore(t,e,n)};se.useTransition=function(){return Dt.current.useTransition()};se.version="18.2.0";(function(t){t.exports=se})(Ok);const Aw=xk(P),sf=Dk({__proto__:null,default:Aw},[P]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qk=P,Yk=Symbol.for("react.element"),Xk=Symbol.for("react.fragment"),Jk=Object.prototype.hasOwnProperty,Zk=Qk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,eR={key:!0,ref:!0,__self:!0,__source:!0};function Dw(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Jk.call(e,r)&&!eR.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Yk,type:t,key:s,ref:o,props:i,_owner:Zk.current}}$c.Fragment=Xk;$c.jsx=Dw;$c.jsxs=Dw;(function(t){t.exports=$c})(Pk);const oe=Ru.jsx,Tn=Ru.jsxs;var of={},af={},tR={get exports(){return af},set exports(t){af=t}},qt={},lf={},nR={get exports(){return lf},set exports(t){lf=t}},xw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,Y){var V=O.length;O.push(Y);e:for(;0<V;){var ge=V-1>>>1,Me=O[ge];if(0<i(Me,Y))O[ge]=Y,O[V]=Me,V=ge;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var Y=O[0],V=O.pop();if(V!==Y){O[0]=V;e:for(var ge=0,Me=O.length,ji=Me>>>1;ge<ji;){var dt=2*(ge+1)-1,fo=O[dt],$n=dt+1,Zr=O[$n];if(0>i(fo,V))$n<Me&&0>i(Zr,fo)?(O[ge]=Zr,O[$n]=V,ge=$n):(O[ge]=fo,O[dt]=V,ge=dt);else if($n<Me&&0>i(Zr,V))O[ge]=Zr,O[$n]=V,ge=$n;else break e}}return Y}function i(O,Y){var V=O.sortIndex-Y.sortIndex;return V!==0?V:O.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,p=!1,v=!1,_=!1,g=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(O){for(var Y=n(u);Y!==null;){if(Y.callback===null)r(u);else if(Y.startTime<=O)r(u),Y.sortIndex=Y.expirationTime,e(l,Y);else break;Y=n(u)}}function w(O){if(_=!1,y(O),!v)if(n(l)!==null)v=!0,Jr(S);else{var Y=n(u);Y!==null&&ho(w,Y.startTime-O)}}function S(O,Y){v=!1,_&&(_=!1,m(D),D=-1),p=!0;var V=d;try{for(y(Y),h=n(l);h!==null&&(!(h.expirationTime>Y)||O&&!rt());){var ge=h.callback;if(typeof ge=="function"){h.callback=null,d=h.priorityLevel;var Me=ge(h.expirationTime<=Y);Y=t.unstable_now(),typeof Me=="function"?h.callback=Me:h===n(l)&&r(l),y(Y)}else r(l);h=n(l)}if(h!==null)var ji=!0;else{var dt=n(u);dt!==null&&ho(w,dt.startTime-Y),ji=!1}return ji}finally{h=null,d=V,p=!1}}var k=!1,x=null,D=-1,he=5,Q=-1;function rt(){return!(t.unstable_now()-Q<he)}function En(){if(x!==null){var O=t.unstable_now();Q=O;var Y=!0;try{Y=x(!0,O)}finally{Y?Kt():(k=!1,x=null)}}else k=!1}var Kt;if(typeof f=="function")Kt=function(){f(En)};else if(typeof MessageChannel<"u"){var Sn=new MessageChannel,Cn=Sn.port2;Sn.port1.onmessage=En,Kt=function(){Cn.postMessage(null)}}else Kt=function(){g(En,0)};function Jr(O){x=O,k||(k=!0,Kt())}function ho(O,Y){D=g(function(){O(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,Jr(S))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):he=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(O){switch(d){case 1:case 2:case 3:var Y=3;break;default:Y=d}var V=d;d=Y;try{return O()}finally{d=V}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,Y){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var V=d;d=O;try{return Y()}finally{d=V}},t.unstable_scheduleCallback=function(O,Y,V){var ge=t.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?ge+V:ge):V=ge,O){case 1:var Me=-1;break;case 2:Me=250;break;case 5:Me=1073741823;break;case 4:Me=1e4;break;default:Me=5e3}return Me=V+Me,O={id:c++,callback:Y,priorityLevel:O,startTime:V,expirationTime:Me,sortIndex:-1},V>ge?(O.sortIndex=V,e(u,O),n(l)===null&&O===n(u)&&(_?(m(D),D=-1):_=!0,ho(w,V-ge))):(O.sortIndex=Me,e(l,O),v||p||(v=!0,Jr(S))),O},t.unstable_shouldYield=rt,t.unstable_wrapCallback=function(O){var Y=d;return function(){var V=d;d=Y;try{return O.apply(this,arguments)}finally{d=V}}}})(xw);(function(t){t.exports=xw})(nR);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pw=P,Wt=lf;function R(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ow=new Set,ua={};function Fi(t,e){Rs(t,e),Rs(t+"Capture",e)}function Rs(t,e){for(ua[t]=e,t=0;t<e.length;t++)Ow.add(e[t])}var Jn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uf=Object.prototype.hasOwnProperty,rR=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ky={},Qy={};function iR(t){return uf.call(Qy,t)?!0:uf.call(Ky,t)?!1:rR.test(t)?Qy[t]=!0:(Ky[t]=!0,!1)}function sR(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function oR(t,e,n,r){if(e===null||typeof e>"u"||sR(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function xt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ct={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ct[t]=new xt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ct[e]=new xt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ct[t]=new xt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ct[t]=new xt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ct[t]=new xt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ct[t]=new xt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ct[t]=new xt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ct[t]=new xt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ct[t]=new xt(t,5,!1,t.toLowerCase(),null,!1,!1)});var em=/[\-:]([a-z])/g;function tm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(em,tm);ct[e]=new xt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(em,tm);ct[e]=new xt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(em,tm);ct[e]=new xt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ct[t]=new xt(t,1,!1,t.toLowerCase(),null,!1,!1)});ct.xlinkHref=new xt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ct[t]=new xt(t,1,!1,t.toLowerCase(),null,!0,!0)});function nm(t,e,n,r){var i=ct.hasOwnProperty(e)?ct[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(oR(e,n,i,r)&&(n=null),r||i===null?iR(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var ur=Pw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ol=Symbol.for("react.element"),Qi=Symbol.for("react.portal"),Yi=Symbol.for("react.fragment"),rm=Symbol.for("react.strict_mode"),cf=Symbol.for("react.profiler"),Mw=Symbol.for("react.provider"),Lw=Symbol.for("react.context"),im=Symbol.for("react.forward_ref"),hf=Symbol.for("react.suspense"),df=Symbol.for("react.suspense_list"),sm=Symbol.for("react.memo"),mr=Symbol.for("react.lazy"),bw=Symbol.for("react.offscreen"),Yy=Symbol.iterator;function _o(t){return t===null||typeof t!="object"?null:(t=Yy&&t[Yy]||t["@@iterator"],typeof t=="function"?t:null)}var De=Object.assign,ed;function Mo(t){if(ed===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ed=e&&e[1]||""}return`
`+ed+t}var td=!1;function nd(t,e){if(!t||td)return"";td=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{td=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Mo(t):""}function aR(t){switch(t.tag){case 5:return Mo(t.type);case 16:return Mo("Lazy");case 13:return Mo("Suspense");case 19:return Mo("SuspenseList");case 0:case 2:case 15:return t=nd(t.type,!1),t;case 11:return t=nd(t.type.render,!1),t;case 1:return t=nd(t.type,!0),t;default:return""}}function ff(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Yi:return"Fragment";case Qi:return"Portal";case cf:return"Profiler";case rm:return"StrictMode";case hf:return"Suspense";case df:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Lw:return(t.displayName||"Context")+".Consumer";case Mw:return(t._context.displayName||"Context")+".Provider";case im:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case sm:return e=t.displayName||null,e!==null?e:ff(t.type)||"Memo";case mr:e=t._payload,t=t._init;try{return ff(t(e))}catch{}}return null}function lR(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ff(e);case 8:return e===rm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ur(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Fw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function uR(t){var e=Fw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ml(t){t._valueTracker||(t._valueTracker=uR(t))}function $w(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Fw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Nu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function pf(t,e){var n=e.checked;return De({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Xy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ur(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Uw(t,e){e=e.checked,e!=null&&nm(t,"checked",e,!1)}function mf(t,e){Uw(t,e);var n=Ur(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?gf(t,e.type,n):e.hasOwnProperty("defaultValue")&&gf(t,e.type,Ur(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Jy(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function gf(t,e,n){(e!=="number"||Nu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Lo=Array.isArray;function ds(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ur(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function yf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(R(91));return De({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Zy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(R(92));if(Lo(n)){if(1<n.length)throw Error(R(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ur(n)}}function Vw(t,e){var n=Ur(e.value),r=Ur(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function ev(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function zw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?zw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ll,Bw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ll=Ll||document.createElement("div"),Ll.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ll.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ca(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var jo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},cR=["Webkit","ms","Moz","O"];Object.keys(jo).forEach(function(t){cR.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),jo[e]=jo[t]})});function jw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||jo.hasOwnProperty(t)&&jo[t]?(""+e).trim():e+"px"}function Ww(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=jw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var hR=De({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _f(t,e){if(e){if(hR[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(R(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(R(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(R(61))}if(e.style!=null&&typeof e.style!="object")throw Error(R(62))}}function wf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ef=null;function om(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Sf=null,fs=null,ps=null;function tv(t){if(t=Za(t)){if(typeof Sf!="function")throw Error(R(280));var e=t.stateNode;e&&(e=jc(e),Sf(t.stateNode,t.type,e))}}function Hw(t){fs?ps?ps.push(t):ps=[t]:fs=t}function qw(){if(fs){var t=fs,e=ps;if(ps=fs=null,tv(t),e)for(t=0;t<e.length;t++)tv(e[t])}}function Gw(t,e){return t(e)}function Kw(){}var rd=!1;function Qw(t,e,n){if(rd)return t(e,n);rd=!0;try{return Gw(t,e,n)}finally{rd=!1,(fs!==null||ps!==null)&&(Kw(),qw())}}function ha(t,e){var n=t.stateNode;if(n===null)return null;var r=jc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(R(231,e,typeof n));return n}var Cf=!1;if(Jn)try{var wo={};Object.defineProperty(wo,"passive",{get:function(){Cf=!0}}),window.addEventListener("test",wo,wo),window.removeEventListener("test",wo,wo)}catch{Cf=!1}function dR(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Wo=!1,Au=null,Du=!1,If=null,fR={onError:function(t){Wo=!0,Au=t}};function pR(t,e,n,r,i,s,o,a,l){Wo=!1,Au=null,dR.apply(fR,arguments)}function mR(t,e,n,r,i,s,o,a,l){if(pR.apply(this,arguments),Wo){if(Wo){var u=Au;Wo=!1,Au=null}else throw Error(R(198));Du||(Du=!0,If=u)}}function $i(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Yw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function nv(t){if($i(t)!==t)throw Error(R(188))}function gR(t){var e=t.alternate;if(!e){if(e=$i(t),e===null)throw Error(R(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return nv(i),t;if(s===r)return nv(i),e;s=s.sibling}throw Error(R(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?t:e}function Xw(t){return t=gR(t),t!==null?Jw(t):null}function Jw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Jw(t);if(e!==null)return e;t=t.sibling}return null}var Zw=Wt.unstable_scheduleCallback,rv=Wt.unstable_cancelCallback,yR=Wt.unstable_shouldYield,vR=Wt.unstable_requestPaint,Le=Wt.unstable_now,_R=Wt.unstable_getCurrentPriorityLevel,am=Wt.unstable_ImmediatePriority,eE=Wt.unstable_UserBlockingPriority,xu=Wt.unstable_NormalPriority,wR=Wt.unstable_LowPriority,tE=Wt.unstable_IdlePriority,Uc=null,Dn=null;function ER(t){if(Dn&&typeof Dn.onCommitFiberRoot=="function")try{Dn.onCommitFiberRoot(Uc,t,void 0,(t.current.flags&128)===128)}catch{}}var mn=Math.clz32?Math.clz32:IR,SR=Math.log,CR=Math.LN2;function IR(t){return t>>>=0,t===0?32:31-(SR(t)/CR|0)|0}var bl=64,Fl=4194304;function bo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Pu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=bo(a):(s&=o,s!==0&&(r=bo(s)))}else o=n&~i,o!==0?r=bo(o):s!==0&&(r=bo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-mn(e),i=1<<n,r|=t[n],e&=~i;return r}function TR(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kR(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-mn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=TR(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Tf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function nE(){var t=bl;return bl<<=1,!(bl&4194240)&&(bl=64),t}function id(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Xa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-mn(e),t[e]=n}function RR(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-mn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function lm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-mn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var me=0;function rE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var iE,um,sE,oE,aE,kf=!1,$l=[],Tr=null,kr=null,Rr=null,da=new Map,fa=new Map,yr=[],NR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function iv(t,e){switch(t){case"focusin":case"focusout":Tr=null;break;case"dragenter":case"dragleave":kr=null;break;case"mouseover":case"mouseout":Rr=null;break;case"pointerover":case"pointerout":da.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":fa.delete(e.pointerId)}}function Eo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Za(e),e!==null&&um(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function AR(t,e,n,r,i){switch(e){case"focusin":return Tr=Eo(Tr,t,e,n,r,i),!0;case"dragenter":return kr=Eo(kr,t,e,n,r,i),!0;case"mouseover":return Rr=Eo(Rr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return da.set(s,Eo(da.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,fa.set(s,Eo(fa.get(s)||null,t,e,n,r,i)),!0}return!1}function lE(t){var e=si(t.target);if(e!==null){var n=$i(e);if(n!==null){if(e=n.tag,e===13){if(e=Yw(n),e!==null){t.blockedOn=e,aE(t.priority,function(){sE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function uu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Rf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ef=r,n.target.dispatchEvent(r),Ef=null}else return e=Za(n),e!==null&&um(e),t.blockedOn=n,!1;e.shift()}return!0}function sv(t,e,n){uu(t)&&n.delete(e)}function DR(){kf=!1,Tr!==null&&uu(Tr)&&(Tr=null),kr!==null&&uu(kr)&&(kr=null),Rr!==null&&uu(Rr)&&(Rr=null),da.forEach(sv),fa.forEach(sv)}function So(t,e){t.blockedOn===e&&(t.blockedOn=null,kf||(kf=!0,Wt.unstable_scheduleCallback(Wt.unstable_NormalPriority,DR)))}function pa(t){function e(i){return So(i,t)}if(0<$l.length){So($l[0],t);for(var n=1;n<$l.length;n++){var r=$l[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Tr!==null&&So(Tr,t),kr!==null&&So(kr,t),Rr!==null&&So(Rr,t),da.forEach(e),fa.forEach(e),n=0;n<yr.length;n++)r=yr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<yr.length&&(n=yr[0],n.blockedOn===null);)lE(n),n.blockedOn===null&&yr.shift()}var ms=ur.ReactCurrentBatchConfig,Ou=!0;function xR(t,e,n,r){var i=me,s=ms.transition;ms.transition=null;try{me=1,cm(t,e,n,r)}finally{me=i,ms.transition=s}}function PR(t,e,n,r){var i=me,s=ms.transition;ms.transition=null;try{me=4,cm(t,e,n,r)}finally{me=i,ms.transition=s}}function cm(t,e,n,r){if(Ou){var i=Rf(t,e,n,r);if(i===null)pd(t,e,r,Mu,n),iv(t,r);else if(AR(i,t,e,n,r))r.stopPropagation();else if(iv(t,r),e&4&&-1<NR.indexOf(t)){for(;i!==null;){var s=Za(i);if(s!==null&&iE(s),s=Rf(t,e,n,r),s===null&&pd(t,e,r,Mu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else pd(t,e,r,null,n)}}var Mu=null;function Rf(t,e,n,r){if(Mu=null,t=om(r),t=si(t),t!==null)if(e=$i(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Yw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Mu=t,null}function uE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_R()){case am:return 1;case eE:return 4;case xu:case wR:return 16;case tE:return 536870912;default:return 16}default:return 16}}var Cr=null,hm=null,cu=null;function cE(){if(cu)return cu;var t,e=hm,n=e.length,r,i="value"in Cr?Cr.value:Cr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return cu=i.slice(t,1<r?1-r:void 0)}function hu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ul(){return!0}function ov(){return!1}function Gt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ul:ov,this.isPropagationStopped=ov,this}return De(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ul)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ul)},persist:function(){},isPersistent:Ul}),e}var Ks={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dm=Gt(Ks),Ja=De({},Ks,{view:0,detail:0}),OR=Gt(Ja),sd,od,Co,Vc=De({},Ja,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Co&&(Co&&t.type==="mousemove"?(sd=t.screenX-Co.screenX,od=t.screenY-Co.screenY):od=sd=0,Co=t),sd)},movementY:function(t){return"movementY"in t?t.movementY:od}}),av=Gt(Vc),MR=De({},Vc,{dataTransfer:0}),LR=Gt(MR),bR=De({},Ja,{relatedTarget:0}),ad=Gt(bR),FR=De({},Ks,{animationName:0,elapsedTime:0,pseudoElement:0}),$R=Gt(FR),UR=De({},Ks,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),VR=Gt(UR),zR=De({},Ks,{data:0}),lv=Gt(zR),BR={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jR={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},WR={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function HR(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=WR[t])?!!e[t]:!1}function fm(){return HR}var qR=De({},Ja,{key:function(t){if(t.key){var e=BR[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=hu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?jR[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fm,charCode:function(t){return t.type==="keypress"?hu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?hu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),GR=Gt(qR),KR=De({},Vc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),uv=Gt(KR),QR=De({},Ja,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fm}),YR=Gt(QR),XR=De({},Ks,{propertyName:0,elapsedTime:0,pseudoElement:0}),JR=Gt(XR),ZR=De({},Vc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),eN=Gt(ZR),tN=[9,13,27,32],pm=Jn&&"CompositionEvent"in window,Ho=null;Jn&&"documentMode"in document&&(Ho=document.documentMode);var nN=Jn&&"TextEvent"in window&&!Ho,hE=Jn&&(!pm||Ho&&8<Ho&&11>=Ho),cv=String.fromCharCode(32),hv=!1;function dE(t,e){switch(t){case"keyup":return tN.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Xi=!1;function rN(t,e){switch(t){case"compositionend":return fE(e);case"keypress":return e.which!==32?null:(hv=!0,cv);case"textInput":return t=e.data,t===cv&&hv?null:t;default:return null}}function iN(t,e){if(Xi)return t==="compositionend"||!pm&&dE(t,e)?(t=cE(),cu=hm=Cr=null,Xi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return hE&&e.locale!=="ko"?null:e.data;default:return null}}var sN={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!sN[t.type]:e==="textarea"}function pE(t,e,n,r){Hw(r),e=Lu(e,"onChange"),0<e.length&&(n=new dm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var qo=null,ma=null;function oN(t){TE(t,0)}function zc(t){var e=es(t);if($w(e))return t}function aN(t,e){if(t==="change")return e}var mE=!1;if(Jn){var ld;if(Jn){var ud="oninput"in document;if(!ud){var fv=document.createElement("div");fv.setAttribute("oninput","return;"),ud=typeof fv.oninput=="function"}ld=ud}else ld=!1;mE=ld&&(!document.documentMode||9<document.documentMode)}function pv(){qo&&(qo.detachEvent("onpropertychange",gE),ma=qo=null)}function gE(t){if(t.propertyName==="value"&&zc(ma)){var e=[];pE(e,ma,t,om(t)),Qw(oN,e)}}function lN(t,e,n){t==="focusin"?(pv(),qo=e,ma=n,qo.attachEvent("onpropertychange",gE)):t==="focusout"&&pv()}function uN(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return zc(ma)}function cN(t,e){if(t==="click")return zc(e)}function hN(t,e){if(t==="input"||t==="change")return zc(e)}function dN(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var vn=typeof Object.is=="function"?Object.is:dN;function ga(t,e){if(vn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!uf.call(e,i)||!vn(t[i],e[i]))return!1}return!0}function mv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function gv(t,e){var n=mv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=mv(n)}}function yE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?yE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function vE(){for(var t=window,e=Nu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Nu(t.document)}return e}function mm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function fN(t){var e=vE(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&yE(n.ownerDocument.documentElement,n)){if(r!==null&&mm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=gv(n,s);var o=gv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var pN=Jn&&"documentMode"in document&&11>=document.documentMode,Ji=null,Nf=null,Go=null,Af=!1;function yv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Af||Ji==null||Ji!==Nu(r)||(r=Ji,"selectionStart"in r&&mm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Go&&ga(Go,r)||(Go=r,r=Lu(Nf,"onSelect"),0<r.length&&(e=new dm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ji)))}function Vl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Zi={animationend:Vl("Animation","AnimationEnd"),animationiteration:Vl("Animation","AnimationIteration"),animationstart:Vl("Animation","AnimationStart"),transitionend:Vl("Transition","TransitionEnd")},cd={},_E={};Jn&&(_E=document.createElement("div").style,"AnimationEvent"in window||(delete Zi.animationend.animation,delete Zi.animationiteration.animation,delete Zi.animationstart.animation),"TransitionEvent"in window||delete Zi.transitionend.transition);function Bc(t){if(cd[t])return cd[t];if(!Zi[t])return t;var e=Zi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in _E)return cd[t]=e[n];return t}var wE=Bc("animationend"),EE=Bc("animationiteration"),SE=Bc("animationstart"),CE=Bc("transitionend"),IE=new Map,vv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gr(t,e){IE.set(t,e),Fi(e,[t])}for(var hd=0;hd<vv.length;hd++){var dd=vv[hd],mN=dd.toLowerCase(),gN=dd[0].toUpperCase()+dd.slice(1);Gr(mN,"on"+gN)}Gr(wE,"onAnimationEnd");Gr(EE,"onAnimationIteration");Gr(SE,"onAnimationStart");Gr("dblclick","onDoubleClick");Gr("focusin","onFocus");Gr("focusout","onBlur");Gr(CE,"onTransitionEnd");Rs("onMouseEnter",["mouseout","mouseover"]);Rs("onMouseLeave",["mouseout","mouseover"]);Rs("onPointerEnter",["pointerout","pointerover"]);Rs("onPointerLeave",["pointerout","pointerover"]);Fi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yN=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fo));function _v(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,mR(r,e,void 0,t),t.currentTarget=null}function TE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;_v(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;_v(i,a,u),s=l}}}if(Du)throw t=If,Du=!1,If=null,t}function Ee(t,e){var n=e[Mf];n===void 0&&(n=e[Mf]=new Set);var r=t+"__bubble";n.has(r)||(kE(e,t,2,!1),n.add(r))}function fd(t,e,n){var r=0;e&&(r|=4),kE(n,t,r,e)}var zl="_reactListening"+Math.random().toString(36).slice(2);function ya(t){if(!t[zl]){t[zl]=!0,Ow.forEach(function(n){n!=="selectionchange"&&(yN.has(n)||fd(n,!1,t),fd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[zl]||(e[zl]=!0,fd("selectionchange",!1,e))}}function kE(t,e,n,r){switch(uE(e)){case 1:var i=xR;break;case 4:i=PR;break;default:i=cm}n=i.bind(null,e,n,t),i=void 0,!Cf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function pd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=si(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Qw(function(){var u=s,c=om(n),h=[];e:{var d=IE.get(t);if(d!==void 0){var p=dm,v=t;switch(t){case"keypress":if(hu(n)===0)break e;case"keydown":case"keyup":p=GR;break;case"focusin":v="focus",p=ad;break;case"focusout":v="blur",p=ad;break;case"beforeblur":case"afterblur":p=ad;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=av;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=LR;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=YR;break;case wE:case EE:case SE:p=$R;break;case CE:p=JR;break;case"scroll":p=OR;break;case"wheel":p=eN;break;case"copy":case"cut":case"paste":p=VR;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=uv}var _=(e&4)!==0,g=!_&&t==="scroll",m=_?d!==null?d+"Capture":null:d;_=[];for(var f=u,y;f!==null;){y=f;var w=y.stateNode;if(y.tag===5&&w!==null&&(y=w,m!==null&&(w=ha(f,m),w!=null&&_.push(va(f,w,y)))),g)break;f=f.return}0<_.length&&(d=new p(d,v,null,n,c),h.push({event:d,listeners:_}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==Ef&&(v=n.relatedTarget||n.fromElement)&&(si(v)||v[Zn]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=u,v=v?si(v):null,v!==null&&(g=$i(v),v!==g||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=u),p!==v)){if(_=av,w="onMouseLeave",m="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(_=uv,w="onPointerLeave",m="onPointerEnter",f="pointer"),g=p==null?d:es(p),y=v==null?d:es(v),d=new _(w,f+"leave",p,n,c),d.target=g,d.relatedTarget=y,w=null,si(c)===u&&(_=new _(m,f+"enter",v,n,c),_.target=y,_.relatedTarget=g,w=_),g=w,p&&v)t:{for(_=p,m=v,f=0,y=_;y;y=Hi(y))f++;for(y=0,w=m;w;w=Hi(w))y++;for(;0<f-y;)_=Hi(_),f--;for(;0<y-f;)m=Hi(m),y--;for(;f--;){if(_===m||m!==null&&_===m.alternate)break t;_=Hi(_),m=Hi(m)}_=null}else _=null;p!==null&&wv(h,d,p,_,!1),v!==null&&g!==null&&wv(h,g,v,_,!0)}}e:{if(d=u?es(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var S=aN;else if(dv(d))if(mE)S=hN;else{S=uN;var k=lN}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(S=cN);if(S&&(S=S(t,u))){pE(h,S,n,c);break e}k&&k(t,d,u),t==="focusout"&&(k=d._wrapperState)&&k.controlled&&d.type==="number"&&gf(d,"number",d.value)}switch(k=u?es(u):window,t){case"focusin":(dv(k)||k.contentEditable==="true")&&(Ji=k,Nf=u,Go=null);break;case"focusout":Go=Nf=Ji=null;break;case"mousedown":Af=!0;break;case"contextmenu":case"mouseup":case"dragend":Af=!1,yv(h,n,c);break;case"selectionchange":if(pN)break;case"keydown":case"keyup":yv(h,n,c)}var x;if(pm)e:{switch(t){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else Xi?dE(t,n)&&(D="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(hE&&n.locale!=="ko"&&(Xi||D!=="onCompositionStart"?D==="onCompositionEnd"&&Xi&&(x=cE()):(Cr=c,hm="value"in Cr?Cr.value:Cr.textContent,Xi=!0)),k=Lu(u,D),0<k.length&&(D=new lv(D,t,null,n,c),h.push({event:D,listeners:k}),x?D.data=x:(x=fE(n),x!==null&&(D.data=x)))),(x=nN?rN(t,n):iN(t,n))&&(u=Lu(u,"onBeforeInput"),0<u.length&&(c=new lv("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=x))}TE(h,e)})}function va(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Lu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ha(t,n),s!=null&&r.unshift(va(t,s,i)),s=ha(t,e),s!=null&&r.push(va(t,s,i))),t=t.return}return r}function Hi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function wv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ha(n,s),l!=null&&o.unshift(va(n,l,a))):i||(l=ha(n,s),l!=null&&o.push(va(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var vN=/\r\n?/g,_N=/\u0000|\uFFFD/g;function Ev(t){return(typeof t=="string"?t:""+t).replace(vN,`
`).replace(_N,"")}function Bl(t,e,n){if(e=Ev(e),Ev(t)!==e&&n)throw Error(R(425))}function bu(){}var Df=null,xf=null;function Pf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Of=typeof setTimeout=="function"?setTimeout:void 0,wN=typeof clearTimeout=="function"?clearTimeout:void 0,Sv=typeof Promise=="function"?Promise:void 0,EN=typeof queueMicrotask=="function"?queueMicrotask:typeof Sv<"u"?function(t){return Sv.resolve(null).then(t).catch(SN)}:Of;function SN(t){setTimeout(function(){throw t})}function md(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),pa(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);pa(e)}function Nr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Cv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Qs=Math.random().toString(36).slice(2),Nn="__reactFiber$"+Qs,_a="__reactProps$"+Qs,Zn="__reactContainer$"+Qs,Mf="__reactEvents$"+Qs,CN="__reactListeners$"+Qs,IN="__reactHandles$"+Qs;function si(t){var e=t[Nn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Zn]||n[Nn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Cv(t);t!==null;){if(n=t[Nn])return n;t=Cv(t)}return e}t=n,n=t.parentNode}return null}function Za(t){return t=t[Nn]||t[Zn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function es(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(R(33))}function jc(t){return t[_a]||null}var Lf=[],ts=-1;function Kr(t){return{current:t}}function Ie(t){0>ts||(t.current=Lf[ts],Lf[ts]=null,ts--)}function we(t,e){ts++,Lf[ts]=t.current,t.current=e}var Vr={},It=Kr(Vr),bt=Kr(!1),wi=Vr;function Ns(t,e){var n=t.type.contextTypes;if(!n)return Vr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ft(t){return t=t.childContextTypes,t!=null}function Fu(){Ie(bt),Ie(It)}function Iv(t,e,n){if(It.current!==Vr)throw Error(R(168));we(It,e),we(bt,n)}function RE(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(R(108,lR(t)||"Unknown",i));return De({},n,r)}function $u(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Vr,wi=It.current,we(It,t),we(bt,bt.current),!0}function Tv(t,e,n){var r=t.stateNode;if(!r)throw Error(R(169));n?(t=RE(t,e,wi),r.__reactInternalMemoizedMergedChildContext=t,Ie(bt),Ie(It),we(It,t)):Ie(bt),we(bt,n)}var Bn=null,Wc=!1,gd=!1;function NE(t){Bn===null?Bn=[t]:Bn.push(t)}function TN(t){Wc=!0,NE(t)}function Qr(){if(!gd&&Bn!==null){gd=!0;var t=0,e=me;try{var n=Bn;for(me=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Bn=null,Wc=!1}catch(i){throw Bn!==null&&(Bn=Bn.slice(t+1)),Zw(am,Qr),i}finally{me=e,gd=!1}}return null}var ns=[],rs=0,Uu=null,Vu=0,Qt=[],Yt=0,Ei=null,jn=1,Wn="";function ti(t,e){ns[rs++]=Vu,ns[rs++]=Uu,Uu=t,Vu=e}function AE(t,e,n){Qt[Yt++]=jn,Qt[Yt++]=Wn,Qt[Yt++]=Ei,Ei=t;var r=jn;t=Wn;var i=32-mn(r)-1;r&=~(1<<i),n+=1;var s=32-mn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,jn=1<<32-mn(e)+i|n<<i|r,Wn=s+t}else jn=1<<s|n<<i|r,Wn=t}function gm(t){t.return!==null&&(ti(t,1),AE(t,1,0))}function ym(t){for(;t===Uu;)Uu=ns[--rs],ns[rs]=null,Vu=ns[--rs],ns[rs]=null;for(;t===Ei;)Ei=Qt[--Yt],Qt[Yt]=null,Wn=Qt[--Yt],Qt[Yt]=null,jn=Qt[--Yt],Qt[Yt]=null}var jt=null,Bt=null,ke=!1,cn=null;function DE(t,e){var n=Jt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function kv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,jt=t,Bt=Nr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,jt=t,Bt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ei!==null?{id:jn,overflow:Wn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Jt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,jt=t,Bt=null,!0):!1;default:return!1}}function bf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ff(t){if(ke){var e=Bt;if(e){var n=e;if(!kv(t,e)){if(bf(t))throw Error(R(418));e=Nr(n.nextSibling);var r=jt;e&&kv(t,e)?DE(r,n):(t.flags=t.flags&-4097|2,ke=!1,jt=t)}}else{if(bf(t))throw Error(R(418));t.flags=t.flags&-4097|2,ke=!1,jt=t}}}function Rv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;jt=t}function jl(t){if(t!==jt)return!1;if(!ke)return Rv(t),ke=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Pf(t.type,t.memoizedProps)),e&&(e=Bt)){if(bf(t))throw xE(),Error(R(418));for(;e;)DE(t,e),e=Nr(e.nextSibling)}if(Rv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(R(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Bt=Nr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Bt=null}}else Bt=jt?Nr(t.stateNode.nextSibling):null;return!0}function xE(){for(var t=Bt;t;)t=Nr(t.nextSibling)}function As(){Bt=jt=null,ke=!1}function vm(t){cn===null?cn=[t]:cn.push(t)}var kN=ur.ReactCurrentBatchConfig;function ln(t,e){if(t&&t.defaultProps){e=De({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var zu=Kr(null),Bu=null,is=null,_m=null;function wm(){_m=is=Bu=null}function Em(t){var e=zu.current;Ie(zu),t._currentValue=e}function $f(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function gs(t,e){Bu=t,_m=is=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ot=!0),t.firstContext=null)}function tn(t){var e=t._currentValue;if(_m!==t)if(t={context:t,memoizedValue:e,next:null},is===null){if(Bu===null)throw Error(R(308));is=t,Bu.dependencies={lanes:0,firstContext:t}}else is=is.next=t;return e}var oi=null;function Sm(t){oi===null?oi=[t]:oi.push(t)}function PE(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Sm(e)):(n.next=i.next,i.next=n),e.interleaved=n,er(t,r)}function er(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var gr=!1;function Cm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function OE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Qn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ar(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ue&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,er(t,n)}return i=r.interleaved,i===null?(e.next=e,Sm(r)):(e.next=i.next,i.next=e),r.interleaved=e,er(t,n)}function du(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,lm(t,n)}}function Nv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ju(t,e,n,r){var i=t.updateQueue;gr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,_=a;switch(d=e,p=n,_.tag){case 1:if(v=_.payload,typeof v=="function"){h=v.call(p,h,d);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=_.payload,d=typeof v=="function"?v.call(p,h,d):v,d==null)break e;h=De({},h,d);break e;case 2:gr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=h):c=c.next=p,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ci|=o,t.lanes=o,t.memoizedState=h}}function Av(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(R(191,i));i.call(r)}}}var ME=new Pw.Component().refs;function Uf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:De({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Hc={isMounted:function(t){return(t=t._reactInternals)?$i(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=At(),i=xr(t),s=Qn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Ar(t,s,i),e!==null&&(gn(e,t,i,r),du(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=At(),i=xr(t),s=Qn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ar(t,s,i),e!==null&&(gn(e,t,i,r),du(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=At(),r=xr(t),i=Qn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Ar(t,i,r),e!==null&&(gn(e,t,r,n),du(e,t,r))}};function Dv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ga(n,r)||!ga(i,s):!0}function LE(t,e,n){var r=!1,i=Vr,s=e.contextType;return typeof s=="object"&&s!==null?s=tn(s):(i=Ft(e)?wi:It.current,r=e.contextTypes,s=(r=r!=null)?Ns(t,i):Vr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Hc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function xv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Hc.enqueueReplaceState(e,e.state,null)}function Vf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=ME,Cm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=tn(s):(s=Ft(e)?wi:It.current,i.context=Ns(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Uf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Hc.enqueueReplaceState(i,i.state,null),ju(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Io(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===ME&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,t))}return t}function Wl(t,e){throw t=Object.prototype.toString.call(e),Error(R(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Pv(t){var e=t._init;return e(t._payload)}function bE(t){function e(m,f){if(t){var y=m.deletions;y===null?(m.deletions=[f],m.flags|=16):y.push(f)}}function n(m,f){if(!t)return null;for(;f!==null;)e(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=Pr(m,f),m.index=0,m.sibling=null,m}function s(m,f,y){return m.index=y,t?(y=m.alternate,y!==null?(y=y.index,y<f?(m.flags|=2,f):y):(m.flags|=2,f)):(m.flags|=1048576,f)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,f,y,w){return f===null||f.tag!==6?(f=Cd(y,m.mode,w),f.return=m,f):(f=i(f,y),f.return=m,f)}function l(m,f,y,w){var S=y.type;return S===Yi?c(m,f,y.props.children,w,y.key):f!==null&&(f.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===mr&&Pv(S)===f.type)?(w=i(f,y.props),w.ref=Io(m,f,y),w.return=m,w):(w=vu(y.type,y.key,y.props,null,m.mode,w),w.ref=Io(m,f,y),w.return=m,w)}function u(m,f,y,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==y.containerInfo||f.stateNode.implementation!==y.implementation?(f=Id(y,m.mode,w),f.return=m,f):(f=i(f,y.children||[]),f.return=m,f)}function c(m,f,y,w,S){return f===null||f.tag!==7?(f=mi(y,m.mode,w,S),f.return=m,f):(f=i(f,y),f.return=m,f)}function h(m,f,y){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Cd(""+f,m.mode,y),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ol:return y=vu(f.type,f.key,f.props,null,m.mode,y),y.ref=Io(m,null,f),y.return=m,y;case Qi:return f=Id(f,m.mode,y),f.return=m,f;case mr:var w=f._init;return h(m,w(f._payload),y)}if(Lo(f)||_o(f))return f=mi(f,m.mode,y,null),f.return=m,f;Wl(m,f)}return null}function d(m,f,y,w){var S=f!==null?f.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return S!==null?null:a(m,f,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ol:return y.key===S?l(m,f,y,w):null;case Qi:return y.key===S?u(m,f,y,w):null;case mr:return S=y._init,d(m,f,S(y._payload),w)}if(Lo(y)||_o(y))return S!==null?null:c(m,f,y,w,null);Wl(m,y)}return null}function p(m,f,y,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(y)||null,a(f,m,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ol:return m=m.get(w.key===null?y:w.key)||null,l(f,m,w,S);case Qi:return m=m.get(w.key===null?y:w.key)||null,u(f,m,w,S);case mr:var k=w._init;return p(m,f,y,k(w._payload),S)}if(Lo(w)||_o(w))return m=m.get(y)||null,c(f,m,w,S,null);Wl(f,w)}return null}function v(m,f,y,w){for(var S=null,k=null,x=f,D=f=0,he=null;x!==null&&D<y.length;D++){x.index>D?(he=x,x=null):he=x.sibling;var Q=d(m,x,y[D],w);if(Q===null){x===null&&(x=he);break}t&&x&&Q.alternate===null&&e(m,x),f=s(Q,f,D),k===null?S=Q:k.sibling=Q,k=Q,x=he}if(D===y.length)return n(m,x),ke&&ti(m,D),S;if(x===null){for(;D<y.length;D++)x=h(m,y[D],w),x!==null&&(f=s(x,f,D),k===null?S=x:k.sibling=x,k=x);return ke&&ti(m,D),S}for(x=r(m,x);D<y.length;D++)he=p(x,m,D,y[D],w),he!==null&&(t&&he.alternate!==null&&x.delete(he.key===null?D:he.key),f=s(he,f,D),k===null?S=he:k.sibling=he,k=he);return t&&x.forEach(function(rt){return e(m,rt)}),ke&&ti(m,D),S}function _(m,f,y,w){var S=_o(y);if(typeof S!="function")throw Error(R(150));if(y=S.call(y),y==null)throw Error(R(151));for(var k=S=null,x=f,D=f=0,he=null,Q=y.next();x!==null&&!Q.done;D++,Q=y.next()){x.index>D?(he=x,x=null):he=x.sibling;var rt=d(m,x,Q.value,w);if(rt===null){x===null&&(x=he);break}t&&x&&rt.alternate===null&&e(m,x),f=s(rt,f,D),k===null?S=rt:k.sibling=rt,k=rt,x=he}if(Q.done)return n(m,x),ke&&ti(m,D),S;if(x===null){for(;!Q.done;D++,Q=y.next())Q=h(m,Q.value,w),Q!==null&&(f=s(Q,f,D),k===null?S=Q:k.sibling=Q,k=Q);return ke&&ti(m,D),S}for(x=r(m,x);!Q.done;D++,Q=y.next())Q=p(x,m,D,Q.value,w),Q!==null&&(t&&Q.alternate!==null&&x.delete(Q.key===null?D:Q.key),f=s(Q,f,D),k===null?S=Q:k.sibling=Q,k=Q);return t&&x.forEach(function(En){return e(m,En)}),ke&&ti(m,D),S}function g(m,f,y,w){if(typeof y=="object"&&y!==null&&y.type===Yi&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Ol:e:{for(var S=y.key,k=f;k!==null;){if(k.key===S){if(S=y.type,S===Yi){if(k.tag===7){n(m,k.sibling),f=i(k,y.props.children),f.return=m,m=f;break e}}else if(k.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===mr&&Pv(S)===k.type){n(m,k.sibling),f=i(k,y.props),f.ref=Io(m,k,y),f.return=m,m=f;break e}n(m,k);break}else e(m,k);k=k.sibling}y.type===Yi?(f=mi(y.props.children,m.mode,w,y.key),f.return=m,m=f):(w=vu(y.type,y.key,y.props,null,m.mode,w),w.ref=Io(m,f,y),w.return=m,m=w)}return o(m);case Qi:e:{for(k=y.key;f!==null;){if(f.key===k)if(f.tag===4&&f.stateNode.containerInfo===y.containerInfo&&f.stateNode.implementation===y.implementation){n(m,f.sibling),f=i(f,y.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else e(m,f);f=f.sibling}f=Id(y,m.mode,w),f.return=m,m=f}return o(m);case mr:return k=y._init,g(m,f,k(y._payload),w)}if(Lo(y))return v(m,f,y,w);if(_o(y))return _(m,f,y,w);Wl(m,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,f!==null&&f.tag===6?(n(m,f.sibling),f=i(f,y),f.return=m,m=f):(n(m,f),f=Cd(y,m.mode,w),f.return=m,m=f),o(m)):n(m,f)}return g}var Ds=bE(!0),FE=bE(!1),el={},xn=Kr(el),wa=Kr(el),Ea=Kr(el);function ai(t){if(t===el)throw Error(R(174));return t}function Im(t,e){switch(we(Ea,e),we(wa,t),we(xn,el),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:vf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=vf(e,t)}Ie(xn),we(xn,e)}function xs(){Ie(xn),Ie(wa),Ie(Ea)}function $E(t){ai(Ea.current);var e=ai(xn.current),n=vf(e,t.type);e!==n&&(we(wa,t),we(xn,n))}function Tm(t){wa.current===t&&(Ie(xn),Ie(wa))}var Ne=Kr(0);function Wu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var yd=[];function km(){for(var t=0;t<yd.length;t++)yd[t]._workInProgressVersionPrimary=null;yd.length=0}var fu=ur.ReactCurrentDispatcher,vd=ur.ReactCurrentBatchConfig,Si=0,Ae=null,je=null,Je=null,Hu=!1,Ko=!1,Sa=0,RN=0;function pt(){throw Error(R(321))}function Rm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!vn(t[n],e[n]))return!1;return!0}function Nm(t,e,n,r,i,s){if(Si=s,Ae=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,fu.current=t===null||t.memoizedState===null?xN:PN,t=n(r,i),Ko){s=0;do{if(Ko=!1,Sa=0,25<=s)throw Error(R(301));s+=1,Je=je=null,e.updateQueue=null,fu.current=ON,t=n(r,i)}while(Ko)}if(fu.current=qu,e=je!==null&&je.next!==null,Si=0,Je=je=Ae=null,Hu=!1,e)throw Error(R(300));return t}function Am(){var t=Sa!==0;return Sa=0,t}function kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?Ae.memoizedState=Je=t:Je=Je.next=t,Je}function nn(){if(je===null){var t=Ae.alternate;t=t!==null?t.memoizedState:null}else t=je.next;var e=Je===null?Ae.memoizedState:Je.next;if(e!==null)Je=e,je=t;else{if(t===null)throw Error(R(310));je=t,t={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},Je===null?Ae.memoizedState=Je=t:Je=Je.next=t}return Je}function Ca(t,e){return typeof e=="function"?e(t):e}function _d(t){var e=nn(),n=e.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=t;var r=je,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Si&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,Ae.lanes|=c,Ci|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,vn(r,e.memoizedState)||(Ot=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ae.lanes|=s,Ci|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function wd(t){var e=nn(),n=e.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);vn(s,e.memoizedState)||(Ot=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function UE(){}function VE(t,e){var n=Ae,r=nn(),i=e(),s=!vn(r.memoizedState,i);if(s&&(r.memoizedState=i,Ot=!0),r=r.queue,Dm(jE.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Je!==null&&Je.memoizedState.tag&1){if(n.flags|=2048,Ia(9,BE.bind(null,n,r,i,e),void 0,null),tt===null)throw Error(R(349));Si&30||zE(n,e,i)}return i}function zE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ae.updateQueue,e===null?(e={lastEffect:null,stores:null},Ae.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function BE(t,e,n,r){e.value=n,e.getSnapshot=r,WE(e)&&HE(t)}function jE(t,e,n){return n(function(){WE(e)&&HE(t)})}function WE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!vn(t,n)}catch{return!0}}function HE(t){var e=er(t,1);e!==null&&gn(e,t,1,-1)}function Ov(t){var e=kn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ca,lastRenderedState:t},e.queue=t,t=t.dispatch=DN.bind(null,Ae,t),[e.memoizedState,t]}function Ia(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ae.updateQueue,e===null?(e={lastEffect:null,stores:null},Ae.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function qE(){return nn().memoizedState}function pu(t,e,n,r){var i=kn();Ae.flags|=t,i.memoizedState=Ia(1|e,n,void 0,r===void 0?null:r)}function qc(t,e,n,r){var i=nn();r=r===void 0?null:r;var s=void 0;if(je!==null){var o=je.memoizedState;if(s=o.destroy,r!==null&&Rm(r,o.deps)){i.memoizedState=Ia(e,n,s,r);return}}Ae.flags|=t,i.memoizedState=Ia(1|e,n,s,r)}function Mv(t,e){return pu(8390656,8,t,e)}function Dm(t,e){return qc(2048,8,t,e)}function GE(t,e){return qc(4,2,t,e)}function KE(t,e){return qc(4,4,t,e)}function QE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function YE(t,e,n){return n=n!=null?n.concat([t]):null,qc(4,4,QE.bind(null,e,t),n)}function xm(){}function XE(t,e){var n=nn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Rm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function JE(t,e){var n=nn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Rm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function ZE(t,e,n){return Si&21?(vn(n,e)||(n=nE(),Ae.lanes|=n,Ci|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ot=!0),t.memoizedState=n)}function NN(t,e){var n=me;me=n!==0&&4>n?n:4,t(!0);var r=vd.transition;vd.transition={};try{t(!1),e()}finally{me=n,vd.transition=r}}function eS(){return nn().memoizedState}function AN(t,e,n){var r=xr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},tS(t))nS(e,n);else if(n=PE(t,e,n,r),n!==null){var i=At();gn(n,t,r,i),rS(n,e,r)}}function DN(t,e,n){var r=xr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(tS(t))nS(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,vn(a,o)){var l=e.interleaved;l===null?(i.next=i,Sm(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=PE(t,e,i,r),n!==null&&(i=At(),gn(n,t,r,i),rS(n,e,r))}}function tS(t){var e=t.alternate;return t===Ae||e!==null&&e===Ae}function nS(t,e){Ko=Hu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function rS(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,lm(t,n)}}var qu={readContext:tn,useCallback:pt,useContext:pt,useEffect:pt,useImperativeHandle:pt,useInsertionEffect:pt,useLayoutEffect:pt,useMemo:pt,useReducer:pt,useRef:pt,useState:pt,useDebugValue:pt,useDeferredValue:pt,useTransition:pt,useMutableSource:pt,useSyncExternalStore:pt,useId:pt,unstable_isNewReconciler:!1},xN={readContext:tn,useCallback:function(t,e){return kn().memoizedState=[t,e===void 0?null:e],t},useContext:tn,useEffect:Mv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,pu(4194308,4,QE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return pu(4194308,4,t,e)},useInsertionEffect:function(t,e){return pu(4,2,t,e)},useMemo:function(t,e){var n=kn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=kn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=AN.bind(null,Ae,t),[r.memoizedState,t]},useRef:function(t){var e=kn();return t={current:t},e.memoizedState=t},useState:Ov,useDebugValue:xm,useDeferredValue:function(t){return kn().memoizedState=t},useTransition:function(){var t=Ov(!1),e=t[0];return t=NN.bind(null,t[1]),kn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ae,i=kn();if(ke){if(n===void 0)throw Error(R(407));n=n()}else{if(n=e(),tt===null)throw Error(R(349));Si&30||zE(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Mv(jE.bind(null,r,s,t),[t]),r.flags|=2048,Ia(9,BE.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=kn(),e=tt.identifierPrefix;if(ke){var n=Wn,r=jn;n=(r&~(1<<32-mn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Sa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=RN++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},PN={readContext:tn,useCallback:XE,useContext:tn,useEffect:Dm,useImperativeHandle:YE,useInsertionEffect:GE,useLayoutEffect:KE,useMemo:JE,useReducer:_d,useRef:qE,useState:function(){return _d(Ca)},useDebugValue:xm,useDeferredValue:function(t){var e=nn();return ZE(e,je.memoizedState,t)},useTransition:function(){var t=_d(Ca)[0],e=nn().memoizedState;return[t,e]},useMutableSource:UE,useSyncExternalStore:VE,useId:eS,unstable_isNewReconciler:!1},ON={readContext:tn,useCallback:XE,useContext:tn,useEffect:Dm,useImperativeHandle:YE,useInsertionEffect:GE,useLayoutEffect:KE,useMemo:JE,useReducer:wd,useRef:qE,useState:function(){return wd(Ca)},useDebugValue:xm,useDeferredValue:function(t){var e=nn();return je===null?e.memoizedState=t:ZE(e,je.memoizedState,t)},useTransition:function(){var t=wd(Ca)[0],e=nn().memoizedState;return[t,e]},useMutableSource:UE,useSyncExternalStore:VE,useId:eS,unstable_isNewReconciler:!1};function Ps(t,e){try{var n="",r=e;do n+=aR(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ed(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function zf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var MN=typeof WeakMap=="function"?WeakMap:Map;function iS(t,e,n){n=Qn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ku||(Ku=!0,Xf=r),zf(t,e)},n}function sS(t,e,n){n=Qn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){zf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){zf(t,e),typeof r!="function"&&(Dr===null?Dr=new Set([this]):Dr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Lv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new MN;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=KN.bind(null,t,e,n),e.then(t,t))}function bv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Fv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Qn(-1,1),e.tag=2,Ar(n,e,1))),n.lanes|=1),t)}var LN=ur.ReactCurrentOwner,Ot=!1;function Rt(t,e,n,r){e.child=t===null?FE(e,null,n,r):Ds(e,t.child,n,r)}function $v(t,e,n,r,i){n=n.render;var s=e.ref;return gs(e,i),r=Nm(t,e,n,r,s,i),n=Am(),t!==null&&!Ot?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,tr(t,e,i)):(ke&&n&&gm(e),e.flags|=1,Rt(t,e,r,i),e.child)}function Uv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Um(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,oS(t,e,s,r,i)):(t=vu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ga,n(o,r)&&t.ref===e.ref)return tr(t,e,i)}return e.flags|=1,t=Pr(s,r),t.ref=e.ref,t.return=e,e.child=t}function oS(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ga(s,r)&&t.ref===e.ref)if(Ot=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ot=!0);else return e.lanes=t.lanes,tr(t,e,i)}return Bf(t,e,n,r,i)}function aS(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},we(os,zt),zt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,we(os,zt),zt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,we(os,zt),zt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,we(os,zt),zt|=r;return Rt(t,e,i,n),e.child}function lS(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Bf(t,e,n,r,i){var s=Ft(n)?wi:It.current;return s=Ns(e,s),gs(e,i),n=Nm(t,e,n,r,s,i),r=Am(),t!==null&&!Ot?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,tr(t,e,i)):(ke&&r&&gm(e),e.flags|=1,Rt(t,e,n,i),e.child)}function Vv(t,e,n,r,i){if(Ft(n)){var s=!0;$u(e)}else s=!1;if(gs(e,i),e.stateNode===null)mu(t,e),LE(e,n,r),Vf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=tn(u):(u=Ft(n)?wi:It.current,u=Ns(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&xv(e,o,r,u),gr=!1;var d=e.memoizedState;o.state=d,ju(e,r,o,i),l=e.memoizedState,a!==r||d!==l||bt.current||gr?(typeof c=="function"&&(Uf(e,n,c,r),l=e.memoizedState),(a=gr||Dv(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,OE(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:ln(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=tn(l):(l=Ft(n)?wi:It.current,l=Ns(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&xv(e,o,r,l),gr=!1,d=e.memoizedState,o.state=d,ju(e,r,o,i);var v=e.memoizedState;a!==h||d!==v||bt.current||gr?(typeof p=="function"&&(Uf(e,n,p,r),v=e.memoizedState),(u=gr||Dv(e,n,u,r,d,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return jf(t,e,n,r,s,i)}function jf(t,e,n,r,i,s){lS(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Tv(e,n,!1),tr(t,e,s);r=e.stateNode,LN.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ds(e,t.child,null,s),e.child=Ds(e,null,a,s)):Rt(t,e,a,s),e.memoizedState=r.state,i&&Tv(e,n,!0),e.child}function uS(t){var e=t.stateNode;e.pendingContext?Iv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Iv(t,e.context,!1),Im(t,e.containerInfo)}function zv(t,e,n,r,i){return As(),vm(i),e.flags|=256,Rt(t,e,n,r),e.child}var Wf={dehydrated:null,treeContext:null,retryLane:0};function Hf(t){return{baseLanes:t,cachePool:null,transitions:null}}function cS(t,e,n){var r=e.pendingProps,i=Ne.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),we(Ne,i&1),t===null)return Ff(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Qc(o,r,0,null),t=mi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Hf(n),e.memoizedState=Wf,t):Pm(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return bN(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Pr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Pr(a,s):(s=mi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Hf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Wf,r}return s=t.child,t=s.sibling,r=Pr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Pm(t,e){return e=Qc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Hl(t,e,n,r){return r!==null&&vm(r),Ds(e,t.child,null,n),t=Pm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function bN(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Ed(Error(R(422))),Hl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Qc({mode:"visible",children:r.children},i,0,null),s=mi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ds(e,t.child,null,o),e.child.memoizedState=Hf(o),e.memoizedState=Wf,s);if(!(e.mode&1))return Hl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(R(419)),r=Ed(s,r,void 0),Hl(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ot||a){if(r=tt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,er(t,i),gn(r,t,i,-1))}return $m(),r=Ed(Error(R(421))),Hl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=QN.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Bt=Nr(i.nextSibling),jt=e,ke=!0,cn=null,t!==null&&(Qt[Yt++]=jn,Qt[Yt++]=Wn,Qt[Yt++]=Ei,jn=t.id,Wn=t.overflow,Ei=e),e=Pm(e,r.children),e.flags|=4096,e)}function Bv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),$f(t.return,e,n)}function Sd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function hS(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Rt(t,e,r.children,n),r=Ne.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Bv(t,n,e);else if(t.tag===19)Bv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(we(Ne,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Wu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Sd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Wu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Sd(e,!0,n,null,s);break;case"together":Sd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function mu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function tr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ci|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(R(153));if(e.child!==null){for(t=e.child,n=Pr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Pr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function FN(t,e,n){switch(e.tag){case 3:uS(e),As();break;case 5:$E(e);break;case 1:Ft(e.type)&&$u(e);break;case 4:Im(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;we(zu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(we(Ne,Ne.current&1),e.flags|=128,null):n&e.child.childLanes?cS(t,e,n):(we(Ne,Ne.current&1),t=tr(t,e,n),t!==null?t.sibling:null);we(Ne,Ne.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return hS(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),we(Ne,Ne.current),r)break;return null;case 22:case 23:return e.lanes=0,aS(t,e,n)}return tr(t,e,n)}var dS,qf,fS,pS;dS=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};qf=function(){};fS=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ai(xn.current);var s=null;switch(n){case"input":i=pf(t,i),r=pf(t,r),s=[];break;case"select":i=De({},i,{value:void 0}),r=De({},r,{value:void 0}),s=[];break;case"textarea":i=yf(t,i),r=yf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=bu)}_f(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ua.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ua.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ee("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};pS=function(t,e,n,r){n!==r&&(e.flags|=4)};function To(t,e){if(!ke)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function mt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function $N(t,e,n){var r=e.pendingProps;switch(ym(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mt(e),null;case 1:return Ft(e.type)&&Fu(),mt(e),null;case 3:return r=e.stateNode,xs(),Ie(bt),Ie(It),km(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(jl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,cn!==null&&(ep(cn),cn=null))),qf(t,e),mt(e),null;case 5:Tm(e);var i=ai(Ea.current);if(n=e.type,t!==null&&e.stateNode!=null)fS(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(R(166));return mt(e),null}if(t=ai(xn.current),jl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Nn]=e,r[_a]=s,t=(e.mode&1)!==0,n){case"dialog":Ee("cancel",r),Ee("close",r);break;case"iframe":case"object":case"embed":Ee("load",r);break;case"video":case"audio":for(i=0;i<Fo.length;i++)Ee(Fo[i],r);break;case"source":Ee("error",r);break;case"img":case"image":case"link":Ee("error",r),Ee("load",r);break;case"details":Ee("toggle",r);break;case"input":Xy(r,s),Ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ee("invalid",r);break;case"textarea":Zy(r,s),Ee("invalid",r)}_f(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Bl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Bl(r.textContent,a,t),i=["children",""+a]):ua.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ee("scroll",r)}switch(n){case"input":Ml(r),Jy(r,s,!0);break;case"textarea":Ml(r),ev(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=bu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=zw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Nn]=e,t[_a]=r,dS(t,e,!1,!1),e.stateNode=t;e:{switch(o=wf(n,r),n){case"dialog":Ee("cancel",t),Ee("close",t),i=r;break;case"iframe":case"object":case"embed":Ee("load",t),i=r;break;case"video":case"audio":for(i=0;i<Fo.length;i++)Ee(Fo[i],t);i=r;break;case"source":Ee("error",t),i=r;break;case"img":case"image":case"link":Ee("error",t),Ee("load",t),i=r;break;case"details":Ee("toggle",t),i=r;break;case"input":Xy(t,r),i=pf(t,r),Ee("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=De({},r,{value:void 0}),Ee("invalid",t);break;case"textarea":Zy(t,r),i=yf(t,r),Ee("invalid",t);break;default:i=r}_f(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Ww(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Bw(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ca(t,l):typeof l=="number"&&ca(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ua.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ee("scroll",t):l!=null&&nm(t,s,l,o))}switch(n){case"input":Ml(t),Jy(t,r,!1);break;case"textarea":Ml(t),ev(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ur(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ds(t,!!r.multiple,s,!1):r.defaultValue!=null&&ds(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=bu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return mt(e),null;case 6:if(t&&e.stateNode!=null)pS(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(R(166));if(n=ai(Ea.current),ai(xn.current),jl(e)){if(r=e.stateNode,n=e.memoizedProps,r[Nn]=e,(s=r.nodeValue!==n)&&(t=jt,t!==null))switch(t.tag){case 3:Bl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Bl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Nn]=e,e.stateNode=r}return mt(e),null;case 13:if(Ie(Ne),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ke&&Bt!==null&&e.mode&1&&!(e.flags&128))xE(),As(),e.flags|=98560,s=!1;else if(s=jl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(R(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(R(317));s[Nn]=e}else As(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;mt(e),s=!1}else cn!==null&&(ep(cn),cn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ne.current&1?He===0&&(He=3):$m())),e.updateQueue!==null&&(e.flags|=4),mt(e),null);case 4:return xs(),qf(t,e),t===null&&ya(e.stateNode.containerInfo),mt(e),null;case 10:return Em(e.type._context),mt(e),null;case 17:return Ft(e.type)&&Fu(),mt(e),null;case 19:if(Ie(Ne),s=e.memoizedState,s===null)return mt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)To(s,!1);else{if(He!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Wu(t),o!==null){for(e.flags|=128,To(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return we(Ne,Ne.current&1|2),e.child}t=t.sibling}s.tail!==null&&Le()>Os&&(e.flags|=128,r=!0,To(s,!1),e.lanes=4194304)}else{if(!r)if(t=Wu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),To(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ke)return mt(e),null}else 2*Le()-s.renderingStartTime>Os&&n!==1073741824&&(e.flags|=128,r=!0,To(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Le(),e.sibling=null,n=Ne.current,we(Ne,r?n&1|2:n&1),e):(mt(e),null);case 22:case 23:return Fm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?zt&1073741824&&(mt(e),e.subtreeFlags&6&&(e.flags|=8192)):mt(e),null;case 24:return null;case 25:return null}throw Error(R(156,e.tag))}function UN(t,e){switch(ym(e),e.tag){case 1:return Ft(e.type)&&Fu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return xs(),Ie(bt),Ie(It),km(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Tm(e),null;case 13:if(Ie(Ne),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(R(340));As()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ie(Ne),null;case 4:return xs(),null;case 10:return Em(e.type._context),null;case 22:case 23:return Fm(),null;case 24:return null;default:return null}}var ql=!1,vt=!1,VN=typeof WeakSet=="function"?WeakSet:Set,M=null;function ss(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){xe(t,e,r)}else n.current=null}function Gf(t,e,n){try{n()}catch(r){xe(t,e,r)}}var jv=!1;function zN(t,e){if(Df=Ou,t=vE(),mm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var p;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(xf={focusedElem:t,selectionRange:n},Ou=!1,M=e;M!==null;)if(e=M,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,M=t;else for(;M!==null;){e=M;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var _=v.memoizedProps,g=v.memoizedState,m=e.stateNode,f=m.getSnapshotBeforeUpdate(e.elementType===e.type?_:ln(e.type,_),g);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(w){xe(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,M=t;break}M=e.return}return v=jv,jv=!1,v}function Qo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Gf(e,n,s)}i=i.next}while(i!==r)}}function Gc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Kf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function mS(t){var e=t.alternate;e!==null&&(t.alternate=null,mS(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Nn],delete e[_a],delete e[Mf],delete e[CN],delete e[IN])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function gS(t){return t.tag===5||t.tag===3||t.tag===4}function Wv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||gS(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Qf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=bu));else if(r!==4&&(t=t.child,t!==null))for(Qf(t,e,n),t=t.sibling;t!==null;)Qf(t,e,n),t=t.sibling}function Yf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Yf(t,e,n),t=t.sibling;t!==null;)Yf(t,e,n),t=t.sibling}var st=null,un=!1;function fr(t,e,n){for(n=n.child;n!==null;)yS(t,e,n),n=n.sibling}function yS(t,e,n){if(Dn&&typeof Dn.onCommitFiberUnmount=="function")try{Dn.onCommitFiberUnmount(Uc,n)}catch{}switch(n.tag){case 5:vt||ss(n,e);case 6:var r=st,i=un;st=null,fr(t,e,n),st=r,un=i,st!==null&&(un?(t=st,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):st.removeChild(n.stateNode));break;case 18:st!==null&&(un?(t=st,n=n.stateNode,t.nodeType===8?md(t.parentNode,n):t.nodeType===1&&md(t,n),pa(t)):md(st,n.stateNode));break;case 4:r=st,i=un,st=n.stateNode.containerInfo,un=!0,fr(t,e,n),st=r,un=i;break;case 0:case 11:case 14:case 15:if(!vt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Gf(n,e,o),i=i.next}while(i!==r)}fr(t,e,n);break;case 1:if(!vt&&(ss(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){xe(n,e,a)}fr(t,e,n);break;case 21:fr(t,e,n);break;case 22:n.mode&1?(vt=(r=vt)||n.memoizedState!==null,fr(t,e,n),vt=r):fr(t,e,n);break;default:fr(t,e,n)}}function Hv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new VN),e.forEach(function(r){var i=YN.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function an(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:st=a.stateNode,un=!1;break e;case 3:st=a.stateNode.containerInfo,un=!0;break e;case 4:st=a.stateNode.containerInfo,un=!0;break e}a=a.return}if(st===null)throw Error(R(160));yS(s,o,i),st=null,un=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){xe(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)vS(e,t),e=e.sibling}function vS(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(an(e,t),In(t),r&4){try{Qo(3,t,t.return),Gc(3,t)}catch(_){xe(t,t.return,_)}try{Qo(5,t,t.return)}catch(_){xe(t,t.return,_)}}break;case 1:an(e,t),In(t),r&512&&n!==null&&ss(n,n.return);break;case 5:if(an(e,t),In(t),r&512&&n!==null&&ss(n,n.return),t.flags&32){var i=t.stateNode;try{ca(i,"")}catch(_){xe(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Uw(i,s),wf(a,o);var u=wf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?Ww(i,h):c==="dangerouslySetInnerHTML"?Bw(i,h):c==="children"?ca(i,h):nm(i,c,h,u)}switch(a){case"input":mf(i,s);break;case"textarea":Vw(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?ds(i,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?ds(i,!!s.multiple,s.defaultValue,!0):ds(i,!!s.multiple,s.multiple?[]:"",!1))}i[_a]=s}catch(_){xe(t,t.return,_)}}break;case 6:if(an(e,t),In(t),r&4){if(t.stateNode===null)throw Error(R(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){xe(t,t.return,_)}}break;case 3:if(an(e,t),In(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{pa(e.containerInfo)}catch(_){xe(t,t.return,_)}break;case 4:an(e,t),In(t);break;case 13:an(e,t),In(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Lm=Le())),r&4&&Hv(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(vt=(u=vt)||c,an(e,t),vt=u):an(e,t),In(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(M=t,c=t.child;c!==null;){for(h=M=c;M!==null;){switch(d=M,p=d.child,d.tag){case 0:case 11:case 14:case 15:Qo(4,d,d.return);break;case 1:ss(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(_){xe(r,n,_)}}break;case 5:ss(d,d.return);break;case 22:if(d.memoizedState!==null){Gv(h);continue}}p!==null?(p.return=d,M=p):Gv(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=jw("display",o))}catch(_){xe(t,t.return,_)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(_){xe(t,t.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:an(e,t),In(t),r&4&&Hv(t);break;case 21:break;default:an(e,t),In(t)}}function In(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(gS(n)){var r=n;break e}n=n.return}throw Error(R(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ca(i,""),r.flags&=-33);var s=Wv(t);Yf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Wv(t);Qf(t,a,o);break;default:throw Error(R(161))}}catch(l){xe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function BN(t,e,n){M=t,_S(t)}function _S(t,e,n){for(var r=(t.mode&1)!==0;M!==null;){var i=M,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ql;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||vt;a=ql;var u=vt;if(ql=o,(vt=l)&&!u)for(M=i;M!==null;)o=M,l=o.child,o.tag===22&&o.memoizedState!==null?Kv(i):l!==null?(l.return=o,M=l):Kv(i);for(;s!==null;)M=s,_S(s),s=s.sibling;M=i,ql=a,vt=u}qv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,M=s):qv(t)}}function qv(t){for(;M!==null;){var e=M;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:vt||Gc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!vt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:ln(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Av(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Av(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&pa(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}vt||e.flags&512&&Kf(e)}catch(d){xe(e,e.return,d)}}if(e===t){M=null;break}if(n=e.sibling,n!==null){n.return=e.return,M=n;break}M=e.return}}function Gv(t){for(;M!==null;){var e=M;if(e===t){M=null;break}var n=e.sibling;if(n!==null){n.return=e.return,M=n;break}M=e.return}}function Kv(t){for(;M!==null;){var e=M;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Gc(4,e)}catch(l){xe(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){xe(e,i,l)}}var s=e.return;try{Kf(e)}catch(l){xe(e,s,l)}break;case 5:var o=e.return;try{Kf(e)}catch(l){xe(e,o,l)}}}catch(l){xe(e,e.return,l)}if(e===t){M=null;break}var a=e.sibling;if(a!==null){a.return=e.return,M=a;break}M=e.return}}var jN=Math.ceil,Gu=ur.ReactCurrentDispatcher,Om=ur.ReactCurrentOwner,Zt=ur.ReactCurrentBatchConfig,ue=0,tt=null,Ve=null,lt=0,zt=0,os=Kr(0),He=0,Ta=null,Ci=0,Kc=0,Mm=0,Yo=null,Pt=null,Lm=0,Os=1/0,Vn=null,Ku=!1,Xf=null,Dr=null,Gl=!1,Ir=null,Qu=0,Xo=0,Jf=null,gu=-1,yu=0;function At(){return ue&6?Le():gu!==-1?gu:gu=Le()}function xr(t){return t.mode&1?ue&2&&lt!==0?lt&-lt:kN.transition!==null?(yu===0&&(yu=nE()),yu):(t=me,t!==0||(t=window.event,t=t===void 0?16:uE(t.type)),t):1}function gn(t,e,n,r){if(50<Xo)throw Xo=0,Jf=null,Error(R(185));Xa(t,n,r),(!(ue&2)||t!==tt)&&(t===tt&&(!(ue&2)&&(Kc|=n),He===4&&vr(t,lt)),$t(t,r),n===1&&ue===0&&!(e.mode&1)&&(Os=Le()+500,Wc&&Qr()))}function $t(t,e){var n=t.callbackNode;kR(t,e);var r=Pu(t,t===tt?lt:0);if(r===0)n!==null&&rv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&rv(n),e===1)t.tag===0?TN(Qv.bind(null,t)):NE(Qv.bind(null,t)),EN(function(){!(ue&6)&&Qr()}),n=null;else{switch(rE(r)){case 1:n=am;break;case 4:n=eE;break;case 16:n=xu;break;case 536870912:n=tE;break;default:n=xu}n=RS(n,wS.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function wS(t,e){if(gu=-1,yu=0,ue&6)throw Error(R(327));var n=t.callbackNode;if(ys()&&t.callbackNode!==n)return null;var r=Pu(t,t===tt?lt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Yu(t,r);else{e=r;var i=ue;ue|=2;var s=SS();(tt!==t||lt!==e)&&(Vn=null,Os=Le()+500,pi(t,e));do try{qN();break}catch(a){ES(t,a)}while(1);wm(),Gu.current=s,ue=i,Ve!==null?e=0:(tt=null,lt=0,e=He)}if(e!==0){if(e===2&&(i=Tf(t),i!==0&&(r=i,e=Zf(t,i))),e===1)throw n=Ta,pi(t,0),vr(t,r),$t(t,Le()),n;if(e===6)vr(t,r);else{if(i=t.current.alternate,!(r&30)&&!WN(i)&&(e=Yu(t,r),e===2&&(s=Tf(t),s!==0&&(r=s,e=Zf(t,s))),e===1))throw n=Ta,pi(t,0),vr(t,r),$t(t,Le()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(R(345));case 2:ni(t,Pt,Vn);break;case 3:if(vr(t,r),(r&130023424)===r&&(e=Lm+500-Le(),10<e)){if(Pu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){At(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Of(ni.bind(null,t,Pt,Vn),e);break}ni(t,Pt,Vn);break;case 4:if(vr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-mn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Le()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*jN(r/1960))-r,10<r){t.timeoutHandle=Of(ni.bind(null,t,Pt,Vn),r);break}ni(t,Pt,Vn);break;case 5:ni(t,Pt,Vn);break;default:throw Error(R(329))}}}return $t(t,Le()),t.callbackNode===n?wS.bind(null,t):null}function Zf(t,e){var n=Yo;return t.current.memoizedState.isDehydrated&&(pi(t,e).flags|=256),t=Yu(t,e),t!==2&&(e=Pt,Pt=n,e!==null&&ep(e)),t}function ep(t){Pt===null?Pt=t:Pt.push.apply(Pt,t)}function WN(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!vn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function vr(t,e){for(e&=~Mm,e&=~Kc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-mn(e),r=1<<n;t[n]=-1,e&=~r}}function Qv(t){if(ue&6)throw Error(R(327));ys();var e=Pu(t,0);if(!(e&1))return $t(t,Le()),null;var n=Yu(t,e);if(t.tag!==0&&n===2){var r=Tf(t);r!==0&&(e=r,n=Zf(t,r))}if(n===1)throw n=Ta,pi(t,0),vr(t,e),$t(t,Le()),n;if(n===6)throw Error(R(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ni(t,Pt,Vn),$t(t,Le()),null}function bm(t,e){var n=ue;ue|=1;try{return t(e)}finally{ue=n,ue===0&&(Os=Le()+500,Wc&&Qr())}}function Ii(t){Ir!==null&&Ir.tag===0&&!(ue&6)&&ys();var e=ue;ue|=1;var n=Zt.transition,r=me;try{if(Zt.transition=null,me=1,t)return t()}finally{me=r,Zt.transition=n,ue=e,!(ue&6)&&Qr()}}function Fm(){zt=os.current,Ie(os)}function pi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,wN(n)),Ve!==null)for(n=Ve.return;n!==null;){var r=n;switch(ym(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Fu();break;case 3:xs(),Ie(bt),Ie(It),km();break;case 5:Tm(r);break;case 4:xs();break;case 13:Ie(Ne);break;case 19:Ie(Ne);break;case 10:Em(r.type._context);break;case 22:case 23:Fm()}n=n.return}if(tt=t,Ve=t=Pr(t.current,null),lt=zt=e,He=0,Ta=null,Mm=Kc=Ci=0,Pt=Yo=null,oi!==null){for(e=0;e<oi.length;e++)if(n=oi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}oi=null}return t}function ES(t,e){do{var n=Ve;try{if(wm(),fu.current=qu,Hu){for(var r=Ae.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Hu=!1}if(Si=0,Je=je=Ae=null,Ko=!1,Sa=0,Om.current=null,n===null||n.return===null){He=1,Ta=e,Ve=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=lt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=bv(o);if(p!==null){p.flags&=-257,Fv(p,o,a,s,e),p.mode&1&&Lv(s,u,e),e=p,l=u;var v=e.updateQueue;if(v===null){var _=new Set;_.add(l),e.updateQueue=_}else v.add(l);break e}else{if(!(e&1)){Lv(s,u,e),$m();break e}l=Error(R(426))}}else if(ke&&a.mode&1){var g=bv(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Fv(g,o,a,s,e),vm(Ps(l,a));break e}}s=l=Ps(l,a),He!==4&&(He=2),Yo===null?Yo=[s]:Yo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=iS(s,l,e);Nv(s,m);break e;case 1:a=l;var f=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Dr===null||!Dr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=sS(s,a,e);Nv(s,w);break e}}s=s.return}while(s!==null)}IS(n)}catch(S){e=S,Ve===n&&n!==null&&(Ve=n=n.return);continue}break}while(1)}function SS(){var t=Gu.current;return Gu.current=qu,t===null?qu:t}function $m(){(He===0||He===3||He===2)&&(He=4),tt===null||!(Ci&268435455)&&!(Kc&268435455)||vr(tt,lt)}function Yu(t,e){var n=ue;ue|=2;var r=SS();(tt!==t||lt!==e)&&(Vn=null,pi(t,e));do try{HN();break}catch(i){ES(t,i)}while(1);if(wm(),ue=n,Gu.current=r,Ve!==null)throw Error(R(261));return tt=null,lt=0,He}function HN(){for(;Ve!==null;)CS(Ve)}function qN(){for(;Ve!==null&&!yR();)CS(Ve)}function CS(t){var e=kS(t.alternate,t,zt);t.memoizedProps=t.pendingProps,e===null?IS(t):Ve=e,Om.current=null}function IS(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=UN(n,e),n!==null){n.flags&=32767,Ve=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{He=6,Ve=null;return}}else if(n=$N(n,e,zt),n!==null){Ve=n;return}if(e=e.sibling,e!==null){Ve=e;return}Ve=e=t}while(e!==null);He===0&&(He=5)}function ni(t,e,n){var r=me,i=Zt.transition;try{Zt.transition=null,me=1,GN(t,e,n,r)}finally{Zt.transition=i,me=r}return null}function GN(t,e,n,r){do ys();while(Ir!==null);if(ue&6)throw Error(R(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(R(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(RR(t,s),t===tt&&(Ve=tt=null,lt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Gl||(Gl=!0,RS(xu,function(){return ys(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Zt.transition,Zt.transition=null;var o=me;me=1;var a=ue;ue|=4,Om.current=null,zN(t,n),vS(n,t),fN(xf),Ou=!!Df,xf=Df=null,t.current=n,BN(n),vR(),ue=a,me=o,Zt.transition=s}else t.current=n;if(Gl&&(Gl=!1,Ir=t,Qu=i),s=t.pendingLanes,s===0&&(Dr=null),ER(n.stateNode),$t(t,Le()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ku)throw Ku=!1,t=Xf,Xf=null,t;return Qu&1&&t.tag!==0&&ys(),s=t.pendingLanes,s&1?t===Jf?Xo++:(Xo=0,Jf=t):Xo=0,Qr(),null}function ys(){if(Ir!==null){var t=rE(Qu),e=Zt.transition,n=me;try{if(Zt.transition=null,me=16>t?16:t,Ir===null)var r=!1;else{if(t=Ir,Ir=null,Qu=0,ue&6)throw Error(R(331));var i=ue;for(ue|=4,M=t.current;M!==null;){var s=M,o=s.child;if(M.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(M=u;M!==null;){var c=M;switch(c.tag){case 0:case 11:case 15:Qo(8,c,s)}var h=c.child;if(h!==null)h.return=c,M=h;else for(;M!==null;){c=M;var d=c.sibling,p=c.return;if(mS(c),c===u){M=null;break}if(d!==null){d.return=p,M=d;break}M=p}}}var v=s.alternate;if(v!==null){var _=v.child;if(_!==null){v.child=null;do{var g=_.sibling;_.sibling=null,_=g}while(_!==null)}}M=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,M=o;else e:for(;M!==null;){if(s=M,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Qo(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,M=m;break e}M=s.return}}var f=t.current;for(M=f;M!==null;){o=M;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,M=y;else e:for(o=f;M!==null;){if(a=M,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Gc(9,a)}}catch(S){xe(a,a.return,S)}if(a===o){M=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,M=w;break e}M=a.return}}if(ue=i,Qr(),Dn&&typeof Dn.onPostCommitFiberRoot=="function")try{Dn.onPostCommitFiberRoot(Uc,t)}catch{}r=!0}return r}finally{me=n,Zt.transition=e}}return!1}function Yv(t,e,n){e=Ps(n,e),e=iS(t,e,1),t=Ar(t,e,1),e=At(),t!==null&&(Xa(t,1,e),$t(t,e))}function xe(t,e,n){if(t.tag===3)Yv(t,t,n);else for(;e!==null;){if(e.tag===3){Yv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Dr===null||!Dr.has(r))){t=Ps(n,t),t=sS(e,t,1),e=Ar(e,t,1),t=At(),e!==null&&(Xa(e,1,t),$t(e,t));break}}e=e.return}}function KN(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=At(),t.pingedLanes|=t.suspendedLanes&n,tt===t&&(lt&n)===n&&(He===4||He===3&&(lt&130023424)===lt&&500>Le()-Lm?pi(t,0):Mm|=n),$t(t,e)}function TS(t,e){e===0&&(t.mode&1?(e=Fl,Fl<<=1,!(Fl&130023424)&&(Fl=4194304)):e=1);var n=At();t=er(t,e),t!==null&&(Xa(t,e,n),$t(t,n))}function QN(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),TS(t,n)}function YN(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(e),TS(t,n)}var kS;kS=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||bt.current)Ot=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ot=!1,FN(t,e,n);Ot=!!(t.flags&131072)}else Ot=!1,ke&&e.flags&1048576&&AE(e,Vu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;mu(t,e),t=e.pendingProps;var i=Ns(e,It.current);gs(e,n),i=Nm(null,e,r,t,i,n);var s=Am();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ft(r)?(s=!0,$u(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Cm(e),i.updater=Hc,e.stateNode=i,i._reactInternals=e,Vf(e,r,t,n),e=jf(null,e,r,!0,s,n)):(e.tag=0,ke&&s&&gm(e),Rt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(mu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=JN(r),t=ln(r,t),i){case 0:e=Bf(null,e,r,t,n);break e;case 1:e=Vv(null,e,r,t,n);break e;case 11:e=$v(null,e,r,t,n);break e;case 14:e=Uv(null,e,r,ln(r.type,t),n);break e}throw Error(R(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ln(r,i),Bf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ln(r,i),Vv(t,e,r,i,n);case 3:e:{if(uS(e),t===null)throw Error(R(387));r=e.pendingProps,s=e.memoizedState,i=s.element,OE(t,e),ju(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ps(Error(R(423)),e),e=zv(t,e,r,n,i);break e}else if(r!==i){i=Ps(Error(R(424)),e),e=zv(t,e,r,n,i);break e}else for(Bt=Nr(e.stateNode.containerInfo.firstChild),jt=e,ke=!0,cn=null,n=FE(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(As(),r===i){e=tr(t,e,n);break e}Rt(t,e,r,n)}e=e.child}return e;case 5:return $E(e),t===null&&Ff(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Pf(r,i)?o=null:s!==null&&Pf(r,s)&&(e.flags|=32),lS(t,e),Rt(t,e,o,n),e.child;case 6:return t===null&&Ff(e),null;case 13:return cS(t,e,n);case 4:return Im(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ds(e,null,r,n):Rt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ln(r,i),$v(t,e,r,i,n);case 7:return Rt(t,e,e.pendingProps,n),e.child;case 8:return Rt(t,e,e.pendingProps.children,n),e.child;case 12:return Rt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,we(zu,r._currentValue),r._currentValue=o,s!==null)if(vn(s.value,o)){if(s.children===i.children&&!bt.current){e=tr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Qn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),$f(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(R(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),$f(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Rt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,gs(e,n),i=tn(i),r=r(i),e.flags|=1,Rt(t,e,r,n),e.child;case 14:return r=e.type,i=ln(r,e.pendingProps),i=ln(r.type,i),Uv(t,e,r,i,n);case 15:return oS(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ln(r,i),mu(t,e),e.tag=1,Ft(r)?(t=!0,$u(e)):t=!1,gs(e,n),LE(e,r,i),Vf(e,r,i,n),jf(null,e,r,!0,t,n);case 19:return hS(t,e,n);case 22:return aS(t,e,n)}throw Error(R(156,e.tag))};function RS(t,e){return Zw(t,e)}function XN(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jt(t,e,n,r){return new XN(t,e,n,r)}function Um(t){return t=t.prototype,!(!t||!t.isReactComponent)}function JN(t){if(typeof t=="function")return Um(t)?1:0;if(t!=null){if(t=t.$$typeof,t===im)return 11;if(t===sm)return 14}return 2}function Pr(t,e){var n=t.alternate;return n===null?(n=Jt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function vu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Um(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Yi:return mi(n.children,i,s,e);case rm:o=8,i|=8;break;case cf:return t=Jt(12,n,e,i|2),t.elementType=cf,t.lanes=s,t;case hf:return t=Jt(13,n,e,i),t.elementType=hf,t.lanes=s,t;case df:return t=Jt(19,n,e,i),t.elementType=df,t.lanes=s,t;case bw:return Qc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Mw:o=10;break e;case Lw:o=9;break e;case im:o=11;break e;case sm:o=14;break e;case mr:o=16,r=null;break e}throw Error(R(130,t==null?t:typeof t,""))}return e=Jt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function mi(t,e,n,r){return t=Jt(7,t,r,e),t.lanes=n,t}function Qc(t,e,n,r){return t=Jt(22,t,r,e),t.elementType=bw,t.lanes=n,t.stateNode={isHidden:!1},t}function Cd(t,e,n){return t=Jt(6,t,null,e),t.lanes=n,t}function Id(t,e,n){return e=Jt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ZN(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=id(0),this.expirationTimes=id(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=id(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Vm(t,e,n,r,i,s,o,a,l){return t=new ZN(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Jt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cm(s),t}function eA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function NS(t){if(!t)return Vr;t=t._reactInternals;e:{if($i(t)!==t||t.tag!==1)throw Error(R(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ft(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(R(171))}if(t.tag===1){var n=t.type;if(Ft(n))return RE(t,n,e)}return e}function AS(t,e,n,r,i,s,o,a,l){return t=Vm(n,r,!0,t,i,s,o,a,l),t.context=NS(null),n=t.current,r=At(),i=xr(n),s=Qn(r,i),s.callback=e??null,Ar(n,s,i),t.current.lanes=i,Xa(t,i,r),$t(t,r),t}function Yc(t,e,n,r){var i=e.current,s=At(),o=xr(i);return n=NS(n),e.context===null?e.context=n:e.pendingContext=n,e=Qn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Ar(i,e,o),t!==null&&(gn(t,i,o,s),du(t,i,o)),o}function Xu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Xv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function zm(t,e){Xv(t,e),(t=t.alternate)&&Xv(t,e)}function tA(){return null}var DS=typeof reportError=="function"?reportError:function(t){console.error(t)};function Bm(t){this._internalRoot=t}Xc.prototype.render=Bm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(R(409));Yc(t,e,null,null)};Xc.prototype.unmount=Bm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ii(function(){Yc(null,t,null,null)}),e[Zn]=null}};function Xc(t){this._internalRoot=t}Xc.prototype.unstable_scheduleHydration=function(t){if(t){var e=oE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<yr.length&&e!==0&&e<yr[n].priority;n++);yr.splice(n,0,t),n===0&&lE(t)}};function jm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Jc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Jv(){}function nA(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Xu(o);s.call(u)}}var o=AS(e,r,t,0,null,!1,!1,"",Jv);return t._reactRootContainer=o,t[Zn]=o.current,ya(t.nodeType===8?t.parentNode:t),Ii(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Xu(l);a.call(u)}}var l=Vm(t,0,!1,null,null,!1,!1,"",Jv);return t._reactRootContainer=l,t[Zn]=l.current,ya(t.nodeType===8?t.parentNode:t),Ii(function(){Yc(e,l,n,r)}),l}function Zc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Xu(o);a.call(l)}}Yc(e,o,t,i)}else o=nA(n,e,t,i,r);return Xu(o)}iE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=bo(e.pendingLanes);n!==0&&(lm(e,n|1),$t(e,Le()),!(ue&6)&&(Os=Le()+500,Qr()))}break;case 13:Ii(function(){var r=er(t,1);if(r!==null){var i=At();gn(r,t,1,i)}}),zm(t,1)}};um=function(t){if(t.tag===13){var e=er(t,134217728);if(e!==null){var n=At();gn(e,t,134217728,n)}zm(t,134217728)}};sE=function(t){if(t.tag===13){var e=xr(t),n=er(t,e);if(n!==null){var r=At();gn(n,t,e,r)}zm(t,e)}};oE=function(){return me};aE=function(t,e){var n=me;try{return me=t,e()}finally{me=n}};Sf=function(t,e,n){switch(e){case"input":if(mf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=jc(r);if(!i)throw Error(R(90));$w(r),mf(r,i)}}}break;case"textarea":Vw(t,n);break;case"select":e=n.value,e!=null&&ds(t,!!n.multiple,e,!1)}};Gw=bm;Kw=Ii;var rA={usingClientEntryPoint:!1,Events:[Za,es,jc,Hw,qw,bm]},ko={findFiberByHostInstance:si,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},iA={bundleType:ko.bundleType,version:ko.version,rendererPackageName:ko.rendererPackageName,rendererConfig:ko.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ur.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Xw(t),t===null?null:t.stateNode},findFiberByHostInstance:ko.findFiberByHostInstance||tA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kl.isDisabled&&Kl.supportsFiber)try{Uc=Kl.inject(iA),Dn=Kl}catch{}}qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rA;qt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jm(e))throw Error(R(200));return eA(t,e,null,n)};qt.createRoot=function(t,e){if(!jm(t))throw Error(R(299));var n=!1,r="",i=DS;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Vm(t,1,!1,null,null,n,!1,r,i),t[Zn]=e.current,ya(t.nodeType===8?t.parentNode:t),new Bm(e)};qt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(R(188)):(t=Object.keys(t).join(","),Error(R(268,t)));return t=Xw(e),t=t===null?null:t.stateNode,t};qt.flushSync=function(t){return Ii(t)};qt.hydrate=function(t,e,n){if(!Jc(e))throw Error(R(200));return Zc(null,t,e,!0,n)};qt.hydrateRoot=function(t,e,n){if(!jm(t))throw Error(R(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=DS;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=AS(e,null,t,1,n??null,i,!1,s,o),t[Zn]=e.current,ya(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Xc(e)};qt.render=function(t,e,n){if(!Jc(e))throw Error(R(200));return Zc(null,t,e,!1,n)};qt.unmountComponentAtNode=function(t){if(!Jc(t))throw Error(R(40));return t._reactRootContainer?(Ii(function(){Zc(null,null,t,!1,function(){t._reactRootContainer=null,t[Zn]=null})}),!0):!1};qt.unstable_batchedUpdates=bm;qt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Jc(n))throw Error(R(200));if(t==null||t._reactInternals===void 0)throw Error(R(38));return Zc(t,e,n,!1,r)};qt.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=qt})(tR);var Zv=af;of.createRoot=Zv.createRoot,of.hydrateRoot=Zv.hydrateRoot;/**
 * @remix-run/router v1.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function le(){return le=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},le.apply(this,arguments)}var $e;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})($e||($e={}));const e_="popstate";function sA(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:l=""}=Fn(i.location.hash.substr(1));return ka("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");a=u===-1?l:l.slice(0,u)}return a+"#"+(typeof s=="string"?s:ki(s))}function r(i,s){Ti(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return aA(e,n,r,t)}function ee(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Ti(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function oA(){return Math.random().toString(36).substr(2,8)}function t_(t,e){return{usr:t.state,key:t.key,idx:e}}function ka(t,e,n,r){return n===void 0&&(n=null),le({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Fn(e):e,{state:n,key:e&&e.key||r||oA()})}function ki(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Fn(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function aA(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=$e.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(le({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=$e.Pop;let g=c(),m=g==null?null:g-u;u=g,l&&l({action:a,location:_.location,delta:m})}function d(g,m){a=$e.Push;let f=ka(_.location,g,m);n&&n(f,g),u=c()+1;let y=t_(f,u),w=_.createHref(f);try{o.pushState(y,"",w)}catch{i.location.assign(w)}s&&l&&l({action:a,location:_.location,delta:1})}function p(g,m){a=$e.Replace;let f=ka(_.location,g,m);n&&n(f,g),u=c();let y=t_(f,u),w=_.createHref(f);o.replaceState(y,"",w),s&&l&&l({action:a,location:_.location,delta:0})}function v(g){let m=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof g=="string"?g:ki(g);return ee(m,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,m)}let _={get action(){return a},get location(){return t(i,o)},listen(g){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(e_,h),l=g,()=>{i.removeEventListener(e_,h),l=null}},createHref(g){return e(i,g)},createURL:v,encodeLocation(g){let m=v(g);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:d,replace:p,go(g){return o.go(g)}};return _}var Be;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Be||(Be={}));const lA=new Set(["lazy","caseSensitive","path","id","index","children"]);function uA(t){return t.index===!0}function xS(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,s],a=typeof i.id=="string"?i.id:o.join("-");if(ee(i.index!==!0||!i.children,"Cannot specify children on an index route"),ee(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),uA(i)){let l=le({},i,{hasErrorBoundary:e(i),id:a});return r[a]=l,l}else{let l=le({},i,{id:a,hasErrorBoundary:e(i),children:void 0});return r[a]=l,i.children&&(l.children=xS(i.children,e,o,r)),l}})}function as(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Fn(e):e,i=eh(r.pathname||"/",n);if(i==null)return null;let s=PS(t);cA(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=_A(s[a],SA(i));return o}function PS(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(ee(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Or([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(ee(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),PS(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:yA(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of OS(s.path))i(s,o,l)}),e}function OS(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=OS(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function cA(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:vA(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const hA=/^:\w+$/,dA=3,fA=2,pA=1,mA=10,gA=-2,n_=t=>t==="*";function yA(t,e){let n=t.split("/"),r=n.length;return n.some(n_)&&(r+=gA),e&&(r+=fA),n.filter(i=>!n_(i)).reduce((i,s)=>i+(hA.test(s)?dA:s===""?pA:mA),r)}function vA(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function _A(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=wA({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:Or([i,c.pathname]),pathnameBase:kA(Or([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=Or([i,c.pathnameBase]))}return s}function wA(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=EA(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=CA(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function EA(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Ti(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function SA(t){try{return decodeURI(t)}catch(e){return Ti(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function CA(t,e){try{return decodeURIComponent(t)}catch(n){return Ti(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function eh(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function IA(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Fn(t):t;return{pathname:n?n.startsWith("/")?n:TA(n,e):e,search:RA(r),hash:NA(i)}}function TA(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Td(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Wm(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function MS(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Fn(t):(i=le({},t),ee(!i.pathname||!i.pathname.includes("?"),Td("?","pathname","search",i)),ee(!i.pathname||!i.pathname.includes("#"),Td("#","pathname","hash",i)),ee(!i.search||!i.search.includes("#"),Td("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=IA(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Or=t=>t.join("/").replace(/\/\/+/g,"/"),kA=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),RA=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,NA=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class Hm{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function LS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const bS=["post","put","patch","delete"],AA=new Set(bS),DA=["get",...bS],xA=new Set(DA),PA=new Set([301,302,303,307,308]),OA=new Set([307,308]),kd={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},MA={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},r_={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},FS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,$S=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",LA=!$S,bA=t=>!!t.hasErrorBoundary;function FA(t){ee(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let e=t.detectErrorBoundary||bA,n={},r=xS(t.routes,e,void 0,n),i,s=le({v7_normalizeFormMethod:!1},t.future),o=null,a=new Set,l=null,u=null,c=null,h=t.hydrationData!=null,d=as(r,t.history.location,t.basename),p=null;if(d==null){let E=Rn(404,{pathname:t.history.location.pathname}),{matches:C,route:T}=c_(r);d=C,p={[T.id]:E}}let v=!d.some(E=>E.route.lazy)&&(!d.some(E=>E.route.loader)||t.hydrationData!=null),_,g={historyAction:t.history.action,location:t.history.location,matches:d,initialized:v,navigation:kd,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||p,fetchers:new Map,blockers:new Map},m=$e.Pop,f=!1,y,w=!1,S=!1,k=[],x=[],D=new Map,he=0,Q=-1,rt=new Map,En=new Set,Kt=new Map,Sn=new Map,Cn=new Map,Jr=!1;function ho(){return o=t.history.listen(E=>{let{action:C,location:T,delta:F}=E;if(Jr){Jr=!1;return}Ti(Cn.size===0||F!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let U=By({currentLocation:g.location,nextLocation:T,historyAction:C});if(U&&F!=null){Jr=!0,t.history.go(F*-1),xl(U,{state:"blocked",location:T,proceed(){xl(U,{state:"proceeding",proceed:void 0,reset:void 0,location:T}),t.history.go(F)},reset(){mo(U),V({blockers:new Map(_.state.blockers)})}});return}return dt(C,T)}),g.initialized||dt($e.Pop,g.location),_}function O(){o&&o(),a.clear(),y&&y.abort(),g.fetchers.forEach((E,C)=>Gh(C)),g.blockers.forEach((E,C)=>mo(C))}function Y(E){return a.add(E),()=>a.delete(E)}function V(E){g=le({},g,E),a.forEach(C=>C(g))}function ge(E,C){var T,F;let U=g.actionData!=null&&g.navigation.formMethod!=null&&zn(g.navigation.formMethod)&&g.navigation.state==="loading"&&((T=E.state)==null?void 0:T._isRedirect)!==!0,H;C.actionData?Object.keys(C.actionData).length>0?H=C.actionData:H=null:U?H=g.actionData:H=null;let q=C.loaderData?u_(g.loaderData,C.loaderData,C.matches||[],C.errors):g.loaderData;for(let[B]of Cn)mo(B);let X=f===!0||g.navigation.formMethod!=null&&zn(g.navigation.formMethod)&&((F=E.state)==null?void 0:F._isRedirect)!==!0;i&&(r=i,i=void 0),V(le({},C,{actionData:H,loaderData:q,historyAction:m,location:E,initialized:!0,navigation:kd,revalidation:"idle",restoreScrollPosition:jy(E,C.matches||g.matches),preventScrollReset:X,blockers:new Map(g.blockers)})),w||m===$e.Pop||(m===$e.Push?t.history.push(E,E.state):m===$e.Replace&&t.history.replace(E,E.state)),m=$e.Pop,f=!1,w=!1,S=!1,k=[],x=[]}async function Me(E,C){if(typeof E=="number"){t.history.go(E);return}let{path:T,submission:F,error:U}=i_(E,s,C),H=g.location,q=ka(g.location,T,C&&C.state);q=le({},q,t.history.encodeLocation(q));let X=C&&C.replace!=null?C.replace:void 0,B=$e.Push;X===!0?B=$e.Replace:X===!1||F!=null&&zn(F.formMethod)&&F.formAction===g.location.pathname+g.location.search&&(B=$e.Replace);let ve=C&&"preventScrollReset"in C?C.preventScrollReset===!0:void 0,de=By({currentLocation:H,nextLocation:q,historyAction:B});if(de){xl(de,{state:"blocked",location:q,proceed(){xl(de,{state:"proceeding",proceed:void 0,reset:void 0,location:q}),Me(E,C)},reset(){mo(de),V({blockers:new Map(g.blockers)})}});return}return await dt(B,q,{submission:F,pendingError:U,preventScrollReset:ve,replace:C&&C.replace})}function ji(){if(Hh(),V({revalidation:"loading"}),g.navigation.state!=="submitting"){if(g.navigation.state==="idle"){dt(g.historyAction,g.location,{startUninterruptedRevalidation:!0});return}dt(m||g.historyAction,g.navigation.location,{overrideNavigation:g.navigation})}}async function dt(E,C,T){y&&y.abort(),y=null,m=E,w=(T&&T.startUninterruptedRevalidation)===!0,Tk(g.location,g.matches),f=(T&&T.preventScrollReset)===!0;let F=i||r,U=T&&T.overrideNavigation,H=as(F,C,t.basename);if(!H){let Qe=Rn(404,{pathname:C.pathname}),{matches:it,route:sn}=c_(F);Kh(),ge(C,{matches:it,loaderData:{},errors:{[sn.id]:Qe}});return}if(BA(g.location,C)&&!(T&&T.submission&&zn(T.submission.formMethod))){ge(C,{matches:H});return}y=new AbortController;let q=No(t.history,C,y.signal,T&&T.submission),X,B;if(T&&T.pendingError)B={[ls(H).route.id]:T.pendingError};else if(T&&T.submission&&zn(T.submission.formMethod)){let Qe=await fo(q,C,T.submission,H,{replace:T.replace});if(Qe.shortCircuited)return;X=Qe.pendingActionData,B=Qe.pendingActionError,U=le({state:"loading",location:C},T.submission),q=new Request(q.url,{signal:q.signal})}let{shortCircuited:ve,loaderData:de,errors:rn}=await $n(q,C,H,U,T&&T.submission,T&&T.fetcherSubmission,T&&T.replace,X,B);ve||(y=null,ge(C,le({matches:H},X?{actionData:X}:{},{loaderData:de,errors:rn})))}async function fo(E,C,T,F,U){Hh();let H=le({state:"submitting",location:C},T);V({navigation:H});let q,X=tp(F,C);if(!X.route.action&&!X.route.lazy)q={type:Be.error,error:Rn(405,{method:E.method,pathname:C.pathname,routeId:X.route.id})};else if(q=await Ro("action",E,X,F,n,e,_.basename),E.signal.aborted)return{shortCircuited:!0};if(vs(q)){let B;return U&&U.replace!=null?B=U.replace:B=q.location===g.location.pathname+g.location.search,await po(g,q,{submission:T,replace:B}),{shortCircuited:!0}}if(Jo(q)){let B=ls(F,X.route.id);return(U&&U.replace)!==!0&&(m=$e.Push),{pendingActionData:{},pendingActionError:{[B.route.id]:q.error}}}if(li(q))throw Rn(400,{type:"defer-action"});return{pendingActionData:{[X.route.id]:q.data}}}async function $n(E,C,T,F,U,H,q,X,B){let ve=F;ve||(ve=le({state:"loading",location:C,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},U));let de=U||H?U||H:ve.formMethod&&ve.formAction&&ve.formData&&ve.formEncType?{formMethod:ve.formMethod,formAction:ve.formAction,formData:ve.formData,formEncType:ve.formEncType}:void 0,rn=i||r,[Qe,it]=s_(t.history,g,T,de,C,S,k,x,Kt,rn,t.basename,X,B);if(Kh(ft=>!(T&&T.some(on=>on.route.id===ft))||Qe&&Qe.some(on=>on.route.id===ft)),Qe.length===0&&it.length===0)return ge(C,le({matches:T,loaderData:{},errors:B||null},X?{actionData:X}:{})),{shortCircuited:!0};if(!w){it.forEach(on=>{let ei=g.fetchers.get(on.key),vo={state:"loading",data:ei&&ei.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(on.key,vo)});let ft=X||g.actionData;V(le({navigation:ve},ft?Object.keys(ft).length===0?{actionData:null}:{actionData:ft}:{},it.length>0?{fetchers:new Map(g.fetchers)}:{}))}Q=++he,it.forEach(ft=>D.set(ft.key,y));let{results:sn,loaderResults:go,fetcherResults:Qh}=await Uy(g.matches,T,Qe,it,E);if(E.signal.aborted)return{shortCircuited:!0};it.forEach(ft=>D.delete(ft.key));let yo=h_(sn);if(yo)return await po(g,yo,{replace:q}),{shortCircuited:!0};let{loaderData:Wi,errors:Yh}=l_(g,T,Qe,go,B,it,Qh,Sn);Sn.forEach((ft,on)=>{ft.subscribe(ei=>{(ei||ft.done)&&Sn.delete(on)})}),Sk();let Xh=zy(Q);return le({loaderData:Wi,errors:Yh},Xh||it.length>0?{fetchers:new Map(g.fetchers)}:{})}function Zr(E){return g.fetchers.get(E)||MA}function _k(E,C,T,F){if(LA)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");D.has(E)&&Dl(E);let H=as(i||r,T,t.basename);if(!H){qh(E,C,Rn(404,{pathname:T}));return}let{path:q,submission:X}=i_(T,s,F,!0),B=tp(H,q);if(f=(F&&F.preventScrollReset)===!0,X&&zn(X.formMethod)){wk(E,C,q,B,H,X);return}Kt.set(E,{routeId:C,path:q}),Ek(E,C,q,B,H,X)}async function wk(E,C,T,F,U,H){if(Hh(),Kt.delete(E),!F.route.action&&!F.route.lazy){let Un=Rn(405,{method:H.formMethod,pathname:T,routeId:C});qh(E,C,Un);return}let q=g.fetchers.get(E),X=le({state:"submitting"},H,{data:q&&q.data," _hasFetcherDoneAnything ":!0});g.fetchers.set(E,X),V({fetchers:new Map(g.fetchers)});let B=new AbortController,ve=No(t.history,T,B.signal,H);D.set(E,B);let de=await Ro("action",ve,F,U,n,e,_.basename);if(ve.signal.aborted){D.get(E)===B&&D.delete(E);return}if(vs(de)){D.delete(E),En.add(E);let Un=le({state:"loading"},H,{data:void 0," _hasFetcherDoneAnything ":!0});return g.fetchers.set(E,Un),V({fetchers:new Map(g.fetchers)}),po(g,de,{submission:H,isFetchActionRedirect:!0})}if(Jo(de)){qh(E,C,de.error);return}if(li(de))throw Rn(400,{type:"defer-action"});let rn=g.navigation.location||g.location,Qe=No(t.history,rn,B.signal),it=i||r,sn=g.navigation.state!=="idle"?as(it,g.navigation.location,t.basename):g.matches;ee(sn,"Didn't find any matches after fetcher action");let go=++he;rt.set(E,go);let Qh=le({state:"loading",data:de.data},H,{" _hasFetcherDoneAnything ":!0});g.fetchers.set(E,Qh);let[yo,Wi]=s_(t.history,g,sn,H,rn,S,k,x,Kt,it,t.basename,{[F.route.id]:de.data},void 0);Wi.filter(Un=>Un.key!==E).forEach(Un=>{let Jh=Un.key,Wy=g.fetchers.get(Jh),Ak={state:"loading",data:Wy&&Wy.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(Jh,Ak),D.set(Jh,B)}),V({fetchers:new Map(g.fetchers)});let{results:Yh,loaderResults:Xh,fetcherResults:ft}=await Uy(g.matches,sn,yo,Wi,Qe);if(B.signal.aborted)return;rt.delete(E),D.delete(E),Wi.forEach(Un=>D.delete(Un.key));let on=h_(Yh);if(on)return po(g,on);let{loaderData:ei,errors:vo}=l_(g,g.matches,yo,Xh,void 0,Wi,ft,Sn),Rk={state:"idle",data:de.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(E,Rk);let Nk=zy(go);g.navigation.state==="loading"&&go>Q?(ee(m,"Expected pending action"),y&&y.abort(),ge(g.navigation.location,{matches:sn,loaderData:ei,errors:vo,fetchers:new Map(g.fetchers)})):(V(le({errors:vo,loaderData:u_(g.loaderData,ei,sn,vo)},Nk?{fetchers:new Map(g.fetchers)}:{})),S=!1)}async function Ek(E,C,T,F,U,H){let q=g.fetchers.get(E),X=le({state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},H,{data:q&&q.data," _hasFetcherDoneAnything ":!0});g.fetchers.set(E,X),V({fetchers:new Map(g.fetchers)});let B=new AbortController,ve=No(t.history,T,B.signal);D.set(E,B);let de=await Ro("loader",ve,F,U,n,e,_.basename);if(li(de)&&(de=await BS(de,ve.signal,!0)||de),D.get(E)===B&&D.delete(E),ve.signal.aborted)return;if(vs(de)){await po(g,de);return}if(Jo(de)){let Qe=ls(g.matches,C);g.fetchers.delete(E),V({fetchers:new Map(g.fetchers),errors:{[Qe.route.id]:de.error}});return}ee(!li(de),"Unhandled fetcher deferred data");let rn={state:"idle",data:de.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(E,rn),V({fetchers:new Map(g.fetchers)})}async function po(E,C,T){var F;let{submission:U,replace:H,isFetchActionRedirect:q}=T===void 0?{}:T;C.revalidate&&(S=!0);let X=ka(E.location,C.location,le({_isRedirect:!0},q?{_isFetchActionRedirect:!0}:{}));if(ee(X,"Expected a location on the redirect navigation"),FS.test(C.location)&&$S&&typeof((F=window)==null?void 0:F.location)<"u"){let it=t.history.createURL(C.location),sn=eh(it.pathname,t.basename||"/")==null;if(window.location.origin!==it.origin||sn){H?window.location.replace(C.location):window.location.assign(C.location);return}}y=null;let B=H===!0?$e.Replace:$e.Push,{formMethod:ve,formAction:de,formEncType:rn,formData:Qe}=E.navigation;!U&&ve&&de&&Qe&&rn&&(U={formMethod:ve,formAction:de,formEncType:rn,formData:Qe}),OA.has(C.status)&&U&&zn(U.formMethod)?await dt(B,X,{submission:le({},U,{formAction:C.location}),preventScrollReset:f}):q?await dt(B,X,{overrideNavigation:{state:"loading",location:X,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},fetcherSubmission:U,preventScrollReset:f}):await dt(B,X,{overrideNavigation:{state:"loading",location:X,formMethod:U?U.formMethod:void 0,formAction:U?U.formAction:void 0,formEncType:U?U.formEncType:void 0,formData:U?U.formData:void 0},preventScrollReset:f})}async function Uy(E,C,T,F,U){let H=await Promise.all([...T.map(B=>Ro("loader",U,B,C,n,e,_.basename)),...F.map(B=>B.matches&&B.match?Ro("loader",No(t.history,B.path,U.signal),B.match,B.matches,n,e,_.basename):{type:Be.error,error:Rn(404,{pathname:B.path})})]),q=H.slice(0,T.length),X=H.slice(T.length);return await Promise.all([d_(E,T,q,U.signal,!1,g.loaderData),d_(E,F.map(B=>B.match),X,U.signal,!0)]),{results:H,loaderResults:q,fetcherResults:X}}function Hh(){S=!0,k.push(...Kh()),Kt.forEach((E,C)=>{D.has(C)&&(x.push(C),Dl(C))})}function qh(E,C,T){let F=ls(g.matches,C);Gh(E),V({errors:{[F.route.id]:T},fetchers:new Map(g.fetchers)})}function Gh(E){D.has(E)&&Dl(E),Kt.delete(E),rt.delete(E),En.delete(E),g.fetchers.delete(E)}function Dl(E){let C=D.get(E);ee(C,"Expected fetch controller: "+E),C.abort(),D.delete(E)}function Vy(E){for(let C of E){let F={state:"idle",data:Zr(C).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(C,F)}}function Sk(){let E=[];for(let C of En){let T=g.fetchers.get(C);ee(T,"Expected fetcher: "+C),T.state==="loading"&&(En.delete(C),E.push(C))}Vy(E)}function zy(E){let C=[];for(let[T,F]of rt)if(F<E){let U=g.fetchers.get(T);ee(U,"Expected fetcher: "+T),U.state==="loading"&&(Dl(T),rt.delete(T),C.push(T))}return Vy(C),C.length>0}function Ck(E,C){let T=g.blockers.get(E)||r_;return Cn.get(E)!==C&&Cn.set(E,C),T}function mo(E){g.blockers.delete(E),Cn.delete(E)}function xl(E,C){let T=g.blockers.get(E)||r_;ee(T.state==="unblocked"&&C.state==="blocked"||T.state==="blocked"&&C.state==="blocked"||T.state==="blocked"&&C.state==="proceeding"||T.state==="blocked"&&C.state==="unblocked"||T.state==="proceeding"&&C.state==="unblocked","Invalid blocker state transition: "+T.state+" -> "+C.state),g.blockers.set(E,C),V({blockers:new Map(g.blockers)})}function By(E){let{currentLocation:C,nextLocation:T,historyAction:F}=E;if(Cn.size===0)return;Cn.size>1&&Ti(!1,"A router only supports one blocker at a time");let U=Array.from(Cn.entries()),[H,q]=U[U.length-1],X=g.blockers.get(H);if(!(X&&X.state==="proceeding")&&q({currentLocation:C,nextLocation:T,historyAction:F}))return H}function Kh(E){let C=[];return Sn.forEach((T,F)=>{(!E||E(F))&&(T.cancel(),C.push(F),Sn.delete(F))}),C}function Ik(E,C,T){if(l=E,c=C,u=T||(F=>F.key),!h&&g.navigation===kd){h=!0;let F=jy(g.location,g.matches);F!=null&&V({restoreScrollPosition:F})}return()=>{l=null,c=null,u=null}}function Tk(E,C){if(l&&u&&c){let T=C.map(U=>f_(U,g.loaderData)),F=u(E,T)||E.key;l[F]=c()}}function jy(E,C){if(l&&u&&c){let T=C.map(H=>f_(H,g.loaderData)),F=u(E,T)||E.key,U=l[F];if(typeof U=="number")return U}return null}function kk(E){i=E}return _={get basename(){return t.basename},get state(){return g},get routes(){return r},initialize:ho,subscribe:Y,enableScrollRestoration:Ik,navigate:Me,fetch:_k,revalidate:ji,createHref:E=>t.history.createHref(E),encodeLocation:E=>t.history.encodeLocation(E),getFetcher:Zr,deleteFetcher:Gh,dispose:O,getBlocker:Ck,deleteBlocker:mo,_internalFetchControllers:D,_internalActiveDeferreds:Sn,_internalSetRoutes:kk},_}function $A(t){return t!=null&&"formData"in t}function i_(t,e,n,r){r===void 0&&(r=!1);let i=typeof t=="string"?t:ki(t);if(!n||!$A(n))return{path:i};if(n.formMethod&&!HA(n.formMethod))return{path:i,error:Rn(405,{method:n.formMethod})};let s;if(n.formData){let l=n.formMethod||"get";if(s={formMethod:e.v7_normalizeFormMethod?l.toUpperCase():l.toLowerCase(),formAction:zS(i),formEncType:n&&n.formEncType||"application/x-www-form-urlencoded",formData:n.formData},zn(s.formMethod))return{path:i,submission:s}}let o=Fn(i),a=VS(n.formData);return r&&o.search&&jS(o.search)&&a.append("index",""),o.search="?"+a,{path:ki(o),submission:s}}function UA(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function s_(t,e,n,r,i,s,o,a,l,u,c,h,d){let p=d?Object.values(d)[0]:h?Object.values(h)[0]:void 0,v=t.createURL(e.location),_=t.createURL(i),g=s||v.toString()===_.toString()||v.search!==_.search,m=d?Object.keys(d)[0]:void 0,y=UA(n,m).filter((S,k)=>{if(S.route.lazy)return!0;if(S.route.loader==null)return!1;if(VA(e.loaderData,e.matches[k],S)||o.some(he=>he===S.route.id))return!0;let x=e.matches[k],D=S;return o_(S,le({currentUrl:v,currentParams:x.params,nextUrl:_,nextParams:D.params},r,{actionResult:p,defaultShouldRevalidate:g||US(x,D)}))}),w=[];return l.forEach((S,k)=>{if(!n.some(Q=>Q.route.id===S.routeId))return;let x=as(u,S.path,c);if(!x){w.push(le({key:k},S,{matches:null,match:null}));return}let D=tp(x,S.path);if(a.includes(k)){w.push(le({key:k,matches:x,match:D},S));return}o_(D,le({currentUrl:v,currentParams:e.matches[e.matches.length-1].params,nextUrl:_,nextParams:n[n.length-1].params},r,{actionResult:p,defaultShouldRevalidate:g}))&&w.push(le({key:k,matches:x,match:D},S))}),[y,w]}function VA(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function US(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function o_(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function a_(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];ee(i,"No route found in manifest");let s={};for(let o in r){let l=i[o]!==void 0&&o!=="hasErrorBoundary";Ti(!l,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!l&&!lA.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,{hasErrorBoundary:e(le({},i)),lazy:void 0})}async function Ro(t,e,n,r,i,s,o,a,l,u){o===void 0&&(o="/"),a===void 0&&(a=!1),l===void 0&&(l=!1);let c,h,d,p=g=>{let m,f=new Promise((y,w)=>m=w);return d=()=>m(),e.signal.addEventListener("abort",d),Promise.race([g({request:e,params:n.params,context:u}),f])};try{let g=n.route[t];if(n.route.lazy)if(g)h=(await Promise.all([p(g),a_(n.route,s,i)]))[0];else if(await a_(n.route,s,i),g=n.route[t],g)h=await p(g);else{if(t==="action")throw Rn(405,{method:e.method,pathname:new URL(e.url).pathname,routeId:n.route.id});return{type:Be.data,data:void 0}}else ee(g,"Could not find the "+t+' to run on the "'+n.route.id+'" route'),h=await p(g);ee(h!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(g){c=Be.error,h=g}finally{d&&e.signal.removeEventListener("abort",d)}if(WA(h)){let g=h.status;if(PA.has(g)){let y=h.headers.get("Location");if(ee(y,"Redirects returned/thrown from loaders/actions must have a Location header"),FS.test(y)){if(!a){let w=new URL(e.url),S=y.startsWith("//")?new URL(w.protocol+y):new URL(y),k=eh(S.pathname,o)!=null;S.origin===w.origin&&k&&(y=S.pathname+S.search+S.hash)}}else{let w=r.slice(0,r.indexOf(n)+1),S=Wm(w).map(x=>x.pathnameBase),k=MS(y,S,new URL(e.url).pathname);if(ee(ki(k),"Unable to resolve redirect location: "+y),o){let x=k.pathname;k.pathname=x==="/"?o:Or([o,x])}y=ki(k)}if(a)throw h.headers.set("Location",y),h;return{type:Be.redirect,status:g,location:y,revalidate:h.headers.get("X-Remix-Revalidate")!==null}}if(l)throw{type:c||Be.data,response:h};let m,f=h.headers.get("Content-Type");return f&&/\bapplication\/json\b/.test(f)?m=await h.json():m=await h.text(),c===Be.error?{type:c,error:new Hm(g,h.statusText,m),headers:h.headers}:{type:Be.data,data:m,statusCode:h.status,headers:h.headers}}if(c===Be.error)return{type:c,error:h};if(jA(h)){var v,_;return{type:Be.deferred,deferredData:h,statusCode:(v=h.init)==null?void 0:v.status,headers:((_=h.init)==null?void 0:_.headers)&&new Headers(h.init.headers)}}return{type:Be.data,data:h}}function No(t,e,n,r){let i=t.createURL(zS(e)).toString(),s={signal:n};if(r&&zn(r.formMethod)){let{formMethod:o,formEncType:a,formData:l}=r;s.method=o.toUpperCase(),s.body=a==="application/x-www-form-urlencoded"?VS(l):l}return new Request(i,s)}function VS(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,r instanceof File?r.name:r);return e}function zA(t,e,n,r,i){let s={},o=null,a,l=!1,u={};return n.forEach((c,h)=>{let d=e[h].route.id;if(ee(!vs(c),"Cannot handle redirect results in processLoaderData"),Jo(c)){let p=ls(t,d),v=c.error;r&&(v=Object.values(r)[0],r=void 0),o=o||{},o[p.route.id]==null&&(o[p.route.id]=v),s[d]=void 0,l||(l=!0,a=LS(c.error)?c.error.status:500),c.headers&&(u[d]=c.headers)}else li(c)?(i.set(d,c.deferredData),s[d]=c.deferredData.data):s[d]=c.data,c.statusCode!=null&&c.statusCode!==200&&!l&&(a=c.statusCode),c.headers&&(u[d]=c.headers)}),r&&(o=r,s[Object.keys(r)[0]]=void 0),{loaderData:s,errors:o,statusCode:a||200,loaderHeaders:u}}function l_(t,e,n,r,i,s,o,a){let{loaderData:l,errors:u}=zA(e,n,r,i,a);for(let c=0;c<s.length;c++){let{key:h,match:d}=s[c];ee(o!==void 0&&o[c]!==void 0,"Did not find corresponding fetcher result");let p=o[c];if(Jo(p)){let v=ls(t.matches,d==null?void 0:d.route.id);u&&u[v.route.id]||(u=le({},u,{[v.route.id]:p.error})),t.fetchers.delete(h)}else if(vs(p))ee(!1,"Unhandled fetcher revalidation redirect");else if(li(p))ee(!1,"Unhandled fetcher deferred data");else{let v={state:"idle",data:p.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};t.fetchers.set(h,v)}}return{loaderData:l,errors:u}}function u_(t,e,n,r){let i=le({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function ls(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function c_(t){let e=t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function Rn(t,e){let{pathname:n,routeId:r,method:i,type:s}=e===void 0?{}:e,o="Unknown Server Error",a="Unknown @remix-run/router error";return t===400?(o="Bad Request",i&&n&&r?a="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"&&(a="defer() is not supported in actions")):t===403?(o="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):t===404?(o="Not Found",a='No route matches URL "'+n+'"'):t===405&&(o="Method Not Allowed",i&&n&&r?a="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(a='Invalid request method "'+i.toUpperCase()+'"')),new Hm(t||500,o,new Error(a),!0)}function h_(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(vs(n))return n}}function zS(t){let e=typeof t=="string"?Fn(t):t;return ki(le({},e,{hash:""}))}function BA(t,e){return t.pathname===e.pathname&&t.search===e.search&&t.hash!==e.hash}function li(t){return t.type===Be.deferred}function Jo(t){return t.type===Be.error}function vs(t){return(t&&t.type)===Be.redirect}function jA(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function WA(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function HA(t){return xA.has(t.toLowerCase())}function zn(t){return AA.has(t.toLowerCase())}async function d_(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let a=n[o],l=e[o];if(!l)continue;let u=t.find(h=>h.route.id===l.route.id),c=u!=null&&!US(u,l)&&(s&&s[l.route.id])!==void 0;li(a)&&(i||c)&&await BS(a,r,i).then(h=>{h&&(n[o]=h||n[o])})}}async function BS(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:Be.data,data:t.deferredData.unwrappedData}}catch(i){return{type:Be.error,error:i}}return{type:Be.data,data:t.deferredData.data}}}function jS(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function f_(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function tp(t,e){let n=typeof e=="string"?Fn(e).search:e.search;if(t[t.length-1].route.index&&jS(n||""))return t[t.length-1];let r=Wm(t);return r[r.length-1]}/**
 * React Router v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const GA=typeof Object.is=="function"?Object.is:qA,{useState:KA,useEffect:QA,useLayoutEffect:YA,useDebugValue:XA}=sf;function JA(t,e,n){const r=e(),[{inst:i},s]=KA({inst:{value:r,getSnapshot:e}});return YA(()=>{i.value=r,i.getSnapshot=e,Rd(i)&&s({inst:i})},[t,r,e]),QA(()=>(Rd(i)&&s({inst:i}),t(()=>{Rd(i)&&s({inst:i})})),[t]),XA(r),r}function Rd(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!GA(n,r)}catch{return!0}}function ZA(t,e,n){return e()}const eD=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",tD=!eD,nD=tD?ZA:JA,rD="useSyncExternalStore"in sf?(t=>t.useSyncExternalStore)(sf):nD,qm=P.createContext(null),Gm=P.createContext(null),Km=P.createContext(null),th=P.createContext(null),Ys=P.createContext({outlet:null,matches:[]}),WS=P.createContext(null);function np(){return np=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},np.apply(this,arguments)}function nh(){return P.useContext(th)!=null}function HS(){return nh()||ee(!1),P.useContext(th).location}function iD(){nh()||ee(!1);let{basename:t,navigator:e}=P.useContext(Km),{matches:n}=P.useContext(Ys),{pathname:r}=HS(),i=JSON.stringify(Wm(n).map(a=>a.pathnameBase)),s=P.useRef(!1);return P.useEffect(()=>{s.current=!0}),P.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=MS(a,JSON.parse(i),r,l.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:Or([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state,l)},[t,e,i,r])}const sD=P.createContext(null);function oD(t){let e=P.useContext(Ys).outlet;return e&&P.createElement(sD.Provider,{value:t},e)}function aD(t,e){nh()||ee(!1);let{navigator:n}=P.useContext(Km),r=P.useContext(Gm),{matches:i}=P.useContext(Ys),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=HS(),u;if(e){var c;let _=typeof e=="string"?Fn(e):e;a==="/"||(c=_.pathname)!=null&&c.startsWith(a)||ee(!1),u=_}else u=l;let h=u.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",p=as(t,{pathname:d}),v=hD(p&&p.map(_=>Object.assign({},_,{params:Object.assign({},o,_.params),pathname:Or([a,n.encodeLocation?n.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?a:Or([a,n.encodeLocation?n.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),i,r||void 0);return e&&v?P.createElement(th.Provider,{value:{location:np({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:$e.Pop}},v):v}function lD(){let t=mD(),e=LS(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return P.createElement(P.Fragment,null,P.createElement("h2",null,"Unexpected Application Error!"),P.createElement("h3",{style:{fontStyle:"italic"}},e),n?P.createElement("pre",{style:i},n):null,s)}class uD extends P.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?P.createElement(Ys.Provider,{value:this.props.routeContext},P.createElement(WS.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function cD(t){let{routeContext:e,match:n,children:r}=t,i=P.useContext(qm);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),P.createElement(Ys.Provider,{value:e},r)}function hD(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||ee(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,a)=>{let l=o.route.id?i==null?void 0:i[o.route.id]:null,u=null;n&&(o.route.ErrorBoundary?u=P.createElement(o.route.ErrorBoundary,null):o.route.errorElement?u=o.route.errorElement:u=P.createElement(lD,null));let c=e.concat(r.slice(0,a+1)),h=()=>{let d=s;return l?d=u:o.route.Component?d=P.createElement(o.route.Component,null):o.route.element&&(d=o.route.element),P.createElement(cD,{match:o,routeContext:{outlet:s,matches:c},children:d})};return n&&(o.route.ErrorBoundary||o.route.errorElement||a===0)?P.createElement(uD,{location:n.location,component:u,error:l,children:h(),routeContext:{outlet:null,matches:c}}):h()},null)}var p_;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator"})(p_||(p_={}));var Ju;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(Ju||(Ju={}));function dD(t){let e=P.useContext(Gm);return e||ee(!1),e}function fD(t){let e=P.useContext(Ys);return e||ee(!1),e}function pD(t){let e=fD(),n=e.matches[e.matches.length-1];return n.route.id||ee(!1),n.route.id}function mD(){var t;let e=P.useContext(WS),n=dD(Ju.UseRouteError),r=pD(Ju.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function gD(t){let{fallbackElement:e,router:n}=t,r=P.useCallback(()=>n.state,[n]),i=rD(n.subscribe,r,r),s=P.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:l=>n.navigate(l),push:(l,u,c)=>n.navigate(l,{state:u,preventScrollReset:c==null?void 0:c.preventScrollReset}),replace:(l,u,c)=>n.navigate(l,{replace:!0,state:u,preventScrollReset:c==null?void 0:c.preventScrollReset})}),[n]),o=n.basename||"/",a=P.useMemo(()=>({router:n,navigator:s,static:!1,basename:o}),[n,s,o]);return P.createElement(P.Fragment,null,P.createElement(qm.Provider,{value:a},P.createElement(Gm.Provider,{value:i},P.createElement(_D,{basename:n.basename,location:n.state.location,navigationType:n.state.historyAction,navigator:s},n.state.initialized?P.createElement(wD,null):e))),null)}function yD(t){return oD(t.context)}function vD(t){ee(!1)}function _D(t){let{basename:e="/",children:n=null,location:r,navigationType:i=$e.Pop,navigator:s,static:o=!1}=t;nh()&&ee(!1);let a=e.replace(/^\/*/,"/"),l=P.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Fn(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:p="default"}=r,v=P.useMemo(()=>{let _=eh(u,a);return _==null?null:{location:{pathname:_,search:c,hash:h,state:d,key:p},navigationType:i}},[a,u,c,h,d,p,i]);return v==null?null:P.createElement(Km.Provider,{value:l},P.createElement(th.Provider,{children:n,value:v}))}function wD(t){let{children:e,location:n}=t,r=P.useContext(qm),i=r&&!e?r.router.routes:rp(e);return aD(i,n)}var m_;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(m_||(m_={}));new Promise(()=>{});function rp(t,e){e===void 0&&(e=[]);let n=[];return P.Children.forEach(t,(r,i)=>{if(!P.isValidElement(r))return;let s=[...e,i];if(r.type===P.Fragment){n.push.apply(n,rp(r.props.children,s));return}r.type!==vD&&ee(!1),!r.props.index||!r.props.children||ee(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=rp(r.props.children,s)),n.push(o)}),n}function ED(t){return!!t.ErrorBoundary||!!t.errorElement}/**
 * React Router DOM v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ip(){return ip=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ip.apply(this,arguments)}function SD(t,e){return FA({basename:e==null?void 0:e.basename,future:e==null?void 0:e.future,history:sA({window:e==null?void 0:e.window}),hydrationData:(e==null?void 0:e.hydrationData)||CD(),routes:t,detectErrorBoundary:ED}).initialize()}function CD(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=ip({},e,{errors:ID(e.errors)})),e}function ID(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new Hm(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){let s=new Error(i.message);s.stack="",n[r]=s}else n[r]=i;return n}var g_;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(g_||(g_={}));var y_;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(y_||(y_={}));const qS=P.createContext(null);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GS={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A=function(t,e){if(!t)throw Xs(e)},Xs=function(t){return new Error("Firebase Database ("+GS.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},TD=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Qm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,p=u&63;l||(p=64,o||(d=64)),r.push(n[c],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(KS(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):TD(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new kD;const d=s<<2|a>>4;if(r.push(d),u!==64){const p=a<<4&240|u>>2;if(r.push(p),h!==64){const v=u<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class kD extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const QS=function(t){const e=KS(t);return Qm.encodeByteArray(e,!0)},Zu=function(t){return QS(t).replace(/\./g,"")},ec=function(t){try{return Qm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RD(t){return YS(void 0,t)}function YS(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!ND(n)||(t[n]=YS(t[n],e[n]));return t}function ND(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AD(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DD=()=>AD().__FIREBASE_DEFAULTS__,xD=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},PD=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ec(t[1]);return e&&JSON.parse(e)},Ym=()=>{try{return DD()||xD()||PD()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},XS=t=>{var e,n;return(n=(e=Ym())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},JS=t=>{const e=XS(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},OD=()=>{var t;return(t=Ym())===null||t===void 0?void 0:t.config},ZS=t=>{var e;return(e=Ym())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eC(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Zu(JSON.stringify(n)),Zu(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Xm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Tt())}function MD(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function tC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function LD(){const t=Tt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function nC(){return GS.NODE_ADMIN===!0}function bD(){try{return typeof indexedDB=="object"}catch{return!1}}function FD(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $D="FirebaseError";class cr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=$D,Object.setPrototypeOf(this,cr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,tl.prototype.create)}}class tl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?UD(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new cr(i,a,r)}}function UD(t,e){return t.replace(VD,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const VD=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ra(t){return JSON.parse(t)}function et(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rC=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Ra(ec(s[0])||""),n=Ra(ec(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},zD=function(t){const e=rC(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},BD=function(t){const e=rC(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ms(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function sp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function tc(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function nc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(v_(s)&&v_(o)){if(!nc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function v_(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Js(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function $o(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Uo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jD{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let h=0;h<80;h++){h<40?h<20?(u=a^s&(o^a),c=1518500249):(u=s^o^a,c=1859775393):h<60?(u=s&o|a&(s|o),c=2400959708):(u=s^o^a,c=3395469782);const d=(i<<5|i>>>27)+u+l+c+r[h]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function WD(t,e){const n=new HD(t,e);return n.subscribe.bind(n)}class HD{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");qD(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Nd),i.error===void 0&&(i.error=Nd),i.complete===void 0&&(i.complete=Nd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function qD(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Nd(){}function Jm(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GD=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,A(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ih=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(t){return t&&t._delegate?t._delegate:t}class zr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KD{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new rh;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(YD(e))try{this.getOrInitializeService({instanceIdentifier:ri})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ri){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ri){return this.instances.has(e)}getOptions(e=ri){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:QD(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ri){return this.component?this.component.multipleInstances?e:ri:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function QD(t){return t===ri?void 0:t}function YD(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XD{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new KD(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const JD={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},ZD=ce.INFO,ex={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},tx=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=ex[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class sh{constructor(e){this.name=e,this._logLevel=ZD,this._logHandler=tx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?JD[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const nx=(t,e)=>e.some(n=>t instanceof n);let __,w_;function rx(){return __||(__=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ix(){return w_||(w_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const iC=new WeakMap,op=new WeakMap,sC=new WeakMap,Ad=new WeakMap,Zm=new WeakMap;function sx(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Mr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&iC.set(n,t)}).catch(()=>{}),Zm.set(e,t),e}function ox(t){if(op.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});op.set(t,e)}let ap={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return op.get(t);if(e==="objectStoreNames")return t.objectStoreNames||sC.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ax(t){ap=t(ap)}function lx(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Dd(this),e,...n);return sC.set(r,e.sort?e.sort():[e]),Mr(r)}:ix().includes(t)?function(...e){return t.apply(Dd(this),e),Mr(iC.get(this))}:function(...e){return Mr(t.apply(Dd(this),e))}}function ux(t){return typeof t=="function"?lx(t):(t instanceof IDBTransaction&&ox(t),nx(t,rx())?new Proxy(t,ap):t)}function Mr(t){if(t instanceof IDBRequest)return sx(t);if(Ad.has(t))return Ad.get(t);const e=ux(t);return e!==t&&(Ad.set(t,e),Zm.set(e,t)),e}const Dd=t=>Zm.get(t);function cx(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Mr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Mr(o.result),l.oldVersion,l.newVersion,Mr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const hx=["get","getKey","getAll","getAllKeys","count"],dx=["put","add","delete","clear"],xd=new Map;function E_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(xd.get(e))return xd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=dx.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||hx.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return xd.set(e,s),s}ax(t=>({...t,get:(e,n,r)=>E_(e,n)||t.get(e,n,r),has:(e,n)=>!!E_(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fx{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(px(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function px(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const lp="@firebase/app",S_="0.9.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ri=new sh("@firebase/app"),mx="@firebase/app-compat",gx="@firebase/analytics-compat",yx="@firebase/analytics",vx="@firebase/app-check-compat",_x="@firebase/app-check",wx="@firebase/auth",Ex="@firebase/auth-compat",Sx="@firebase/database",Cx="@firebase/database-compat",Ix="@firebase/functions",Tx="@firebase/functions-compat",kx="@firebase/installations",Rx="@firebase/installations-compat",Nx="@firebase/messaging",Ax="@firebase/messaging-compat",Dx="@firebase/performance",xx="@firebase/performance-compat",Px="@firebase/remote-config",Ox="@firebase/remote-config-compat",Mx="@firebase/storage",Lx="@firebase/storage-compat",bx="@firebase/firestore",Fx="@firebase/firestore-compat",$x="firebase",Ux="9.19.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const up="[DEFAULT]",Vx={[lp]:"fire-core",[mx]:"fire-core-compat",[yx]:"fire-analytics",[gx]:"fire-analytics-compat",[_x]:"fire-app-check",[vx]:"fire-app-check-compat",[wx]:"fire-auth",[Ex]:"fire-auth-compat",[Sx]:"fire-rtdb",[Cx]:"fire-rtdb-compat",[Ix]:"fire-fn",[Tx]:"fire-fn-compat",[kx]:"fire-iid",[Rx]:"fire-iid-compat",[Nx]:"fire-fcm",[Ax]:"fire-fcm-compat",[Dx]:"fire-perf",[xx]:"fire-perf-compat",[Px]:"fire-rc",[Ox]:"fire-rc-compat",[Mx]:"fire-gcs",[Lx]:"fire-gcs-compat",[bx]:"fire-fst",[Fx]:"fire-fst-compat","fire-js":"fire-js",[$x]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc=new Map,cp=new Map;function zx(t,e){try{t.container.addComponent(e)}catch(n){Ri.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ni(t){const e=t.name;if(cp.has(e))return Ri.debug(`There were multiple attempts to register component ${e}.`),!1;cp.set(e,t);for(const n of rc.values())zx(n,t);return!0}function oh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bx={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Lr=new tl("app","Firebase",Bx);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jx{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new zr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Lr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs=Ux;function oC(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:up,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Lr.create("bad-app-name",{appName:String(i)});if(n||(n=OD()),!n)throw Lr.create("no-options");const s=rc.get(i);if(s){if(nc(n,s.options)&&nc(r,s.config))return s;throw Lr.create("duplicate-app",{appName:i})}const o=new XD(i);for(const l of cp.values())o.addComponent(l);const a=new jx(n,r,o);return rc.set(i,a),a}function eg(t=up){const e=rc.get(t);if(!e&&t===up)return oC();if(!e)throw Lr.create("no-app",{appName:t});return e}function Pn(t,e,n){var r;let i=(r=Vx[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ri.warn(a.join(" "));return}Ni(new zr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wx="firebase-heartbeat-database",Hx=1,Na="firebase-heartbeat-store";let Pd=null;function aC(){return Pd||(Pd=cx(Wx,Hx,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Na)}}}).catch(t=>{throw Lr.create("idb-open",{originalErrorMessage:t.message})})),Pd}async function qx(t){try{return(await aC()).transaction(Na).objectStore(Na).get(lC(t))}catch(e){if(e instanceof cr)Ri.warn(e.message);else{const n=Lr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ri.warn(n.message)}}}async function C_(t,e){try{const r=(await aC()).transaction(Na,"readwrite");return await r.objectStore(Na).put(e,lC(t)),r.done}catch(n){if(n instanceof cr)Ri.warn(n.message);else{const r=Lr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ri.warn(r.message)}}}function lC(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gx=1024,Kx=30*24*60*60*1e3;class Qx{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Xx(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=I_();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Kx}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=I_(),{heartbeatsToSend:n,unsentEntries:r}=Yx(this._heartbeatsCache.heartbeats),i=Zu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function I_(){return new Date().toISOString().substring(0,10)}function Yx(t,e=Gx){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),T_(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),T_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Xx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bD()?FD().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await qx(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return C_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return C_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function T_(t){return Zu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jx(t){Ni(new zr("platform-logger",e=>new fx(e),"PRIVATE")),Ni(new zr("heartbeat",e=>new Qx(e),"PRIVATE")),Pn(lp,S_,t),Pn(lp,S_,"esm2017"),Pn("fire-js","")}Jx("");var Zx="firebase",eP="9.19.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pn(Zx,eP,"app");function tg(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function uC(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const tP=uC,cC=new tl("auth","Firebase",uC());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k_=new sh("@firebase/auth");function _u(t,...e){k_.logLevel<=ce.ERROR&&k_.error(`Auth (${Zs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(t,...e){throw ng(t,...e)}function On(t,...e){return ng(t,...e)}function nP(t,e,n){const r=Object.assign(Object.assign({},tP()),{[e]:n});return new tl("auth","Firebase",r).create(e,{appName:t.name})}function ng(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return cC.create(t,...e)}function W(t,e,...n){if(!t)throw ng(e,...n)}function Hn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw _u(e),new Error(e)}function nr(t,e){t||Hn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R_=new Map;function qn(t){nr(t instanceof Function,"Expected a class definition");let e=R_.get(t);return e?(nr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,R_.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rP(t,e){const n=oh(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(nc(s,e??{}))return i;_n(i,"already-initialized")}return n.initialize({options:e})}function iP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(qn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function sP(){return N_()==="http:"||N_()==="https:"}function N_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(sP()||MD()||"connection"in navigator)?navigator.onLine:!0}function aP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e,n){this.shortDelay=e,this.longDelay=n,nr(n>e,"Short delay should be less than long delay!"),this.isMobile=Xm()||tC()}get(){return oP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rg(t,e){nr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Hn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Hn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Hn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uP=new nl(3e4,6e4);function rl(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function il(t,e,n,r,i={}){return dC(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Js(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),hC.fetch()(fC(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function dC(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},lP),e);try{const i=new cP(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ql(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ql(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ql(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ql(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw nP(t,c,u);_n(t,c)}}catch(i){if(i instanceof cr)throw i;_n(t,"network-request-failed",{message:String(i)})}}async function sl(t,e,n,r,i={}){const s=await il(t,e,n,r,i);return"mfaPendingCredential"in s&&_n(t,"multi-factor-auth-required",{_serverResponse:s}),s}function fC(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?rg(t.config,i):`${t.config.apiScheme}://${i}`}class cP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(On(this.auth,"network-request-failed")),uP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ql(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=On(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hP(t,e){return il(t,"POST","/v1/accounts:delete",e)}async function dP(t,e){return il(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function fP(t,e=!1){const n=be(t),r=await n.getIdToken(e),i=ig(r);W(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Zo(Od(i.auth_time)),issuedAtTime:Zo(Od(i.iat)),expirationTime:Zo(Od(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Od(t){return Number(t)*1e3}function ig(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return _u("JWT malformed, contained fewer than 3 sections"),null;try{const i=ec(n);return i?JSON.parse(i):(_u("Failed to decode base64 JWT payload"),null)}catch(i){return _u("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function pP(t){const e=ig(t);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Aa(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof cr&&mP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function mP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pC{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Zo(this.lastLoginAt),this.creationTime=Zo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ic(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Aa(t,dP(n,{idToken:r}));W(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?_P(s.providerUserInfo):[],a=vP(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new pC(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function yP(t){const e=be(t);await ic(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function vP(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function _P(t){return t.map(e=>{var{providerId:n}=e,r=tg(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wP(t,e){const n=await dC(t,{},async()=>{const r=Js({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=fC(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",hC.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):pP(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return W(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await wP(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Da;return r&&(W(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(W(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(W(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Da,this.toJSON())}_performRefresh(){return Hn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(t,e){W(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class gi{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=tg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new gP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new pC(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Aa(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return fP(this,e)}reload(){return yP(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new gi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ic(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Aa(this,hP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,g=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:y,emailVerified:w,isAnonymous:S,providerData:k,stsTokenManager:x}=n;W(y&&x,e,"internal-error");const D=Da.fromJSON(this.name,x);W(typeof y=="string",e,"internal-error"),pr(h,e.name),pr(d,e.name),W(typeof w=="boolean",e,"internal-error"),W(typeof S=="boolean",e,"internal-error"),pr(p,e.name),pr(v,e.name),pr(_,e.name),pr(g,e.name),pr(m,e.name),pr(f,e.name);const he=new gi({uid:y,auth:e,email:d,emailVerified:w,displayName:h,isAnonymous:S,photoURL:v,phoneNumber:p,tenantId:_,stsTokenManager:D,createdAt:m,lastLoginAt:f});return k&&Array.isArray(k)&&(he.providerData=k.map(Q=>Object.assign({},Q))),g&&(he._redirectEventId=g),he}static async _fromIdTokenResponse(e,n,r=!1){const i=new Da;i.updateFromServerResponse(n);const s=new gi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ic(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}mC.type="NONE";const A_=mC;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wu(t,e,n){return`firebase:${t}:${e}:${n}`}class _s{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=wu(this.userKey,i.apiKey,s),this.fullPersistenceKey=wu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?gi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new _s(qn(A_),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||qn(A_);const o=wu(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=gi._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new _s(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new _s(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(vC(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(gC(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(wC(e))return"Blackberry";if(EC(e))return"Webos";if(sg(e))return"Safari";if((e.includes("chrome/")||yC(e))&&!e.includes("edge/"))return"Chrome";if(_C(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function gC(t=Tt()){return/firefox\//i.test(t)}function sg(t=Tt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function yC(t=Tt()){return/crios\//i.test(t)}function vC(t=Tt()){return/iemobile/i.test(t)}function _C(t=Tt()){return/android/i.test(t)}function wC(t=Tt()){return/blackberry/i.test(t)}function EC(t=Tt()){return/webos/i.test(t)}function ah(t=Tt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function EP(t=Tt()){var e;return ah(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function SP(){return LD()&&document.documentMode===10}function SC(t=Tt()){return ah(t)||_C(t)||EC(t)||wC(t)||/windows phone/i.test(t)||vC(t)}function CP(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CC(t,e=[]){let n;switch(t){case"Browser":n=D_(Tt());break;case"Worker":n=`${D_(Tt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Zs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TP{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new x_(this),this.idTokenSubscription=new x_(this),this.beforeStateQueue=new IP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=cC,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=qn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await _s.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ic(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=aP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?be(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(qn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new tl("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&qn(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await _s.create(this,[qn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return W(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=CC(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function ol(t){return be(t)}class x_{constructor(e){this.auth=e,this.observer=null,this.addObserver=WD(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function kP(t,e,n){const r=ol(t);W(r._canInitEmulator,r,"emulator-config-failed"),W(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=IC(e),{host:o,port:a}=RP(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||NP()}function IC(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function RP(t){const e=IC(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:P_(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:P_(o)}}}function P_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function NP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Hn("not implemented")}_getIdTokenResponse(e){return Hn("not implemented")}_linkToIdToken(e,n){return Hn("not implemented")}_getReauthenticationResolver(e){return Hn("not implemented")}}async function AP(t,e){return il(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DP(t,e){return sl(t,"POST","/v1/accounts:signInWithPassword",rl(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xP(t,e){return sl(t,"POST","/v1/accounts:signInWithEmailLink",rl(t,e))}async function PP(t,e){return sl(t,"POST","/v1/accounts:signInWithEmailLink",rl(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa extends og{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new xa(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new xa(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return DP(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return xP(e,{email:this._email,oobCode:this._password});default:_n(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return AP(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return PP(e,{idToken:n,email:this._email,oobCode:this._password});default:_n(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ws(t,e){return sl(t,"POST","/v1/accounts:signInWithIdp",rl(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OP="http://localhost";class Ai extends og{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ai(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):_n("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=tg(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ai(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ws(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ws(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ws(e,n)}buildRequest(){const e={requestUri:OP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Js(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function LP(t){const e=$o(Uo(t)).link,n=e?$o(Uo(e)).deep_link_id:null,r=$o(Uo(t)).deep_link_id;return(r?$o(Uo(r)).link:null)||r||n||e||t}class ag{constructor(e){var n,r,i,s,o,a;const l=$o(Uo(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=MP((i=l.mode)!==null&&i!==void 0?i:null);W(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=LP(e);try{return new ag(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(){this.providerId=eo.PROVIDER_ID}static credential(e,n){return xa._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ag.parseLink(n);return W(r,"argument-error"),xa._fromEmailAndCode(e,r.code,r.tenantId)}}eo.PROVIDER_ID="password";eo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";eo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al extends TC{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r extends al{constructor(){super("facebook.com")}static credential(e){return Ai._fromParams({providerId:_r.PROVIDER_ID,signInMethod:_r.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _r.credentialFromTaggedObject(e)}static credentialFromError(e){return _r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _r.credential(e.oauthAccessToken)}catch{return null}}}_r.FACEBOOK_SIGN_IN_METHOD="facebook.com";_r.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr extends al{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ai._fromParams({providerId:wr.PROVIDER_ID,signInMethod:wr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return wr.credentialFromTaggedObject(e)}static credentialFromError(e){return wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return wr.credential(n,r)}catch{return null}}}wr.GOOGLE_SIGN_IN_METHOD="google.com";wr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er extends al{constructor(){super("github.com")}static credential(e){return Ai._fromParams({providerId:Er.PROVIDER_ID,signInMethod:Er.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Er.credentialFromTaggedObject(e)}static credentialFromError(e){return Er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Er.credential(e.oauthAccessToken)}catch{return null}}}Er.GITHUB_SIGN_IN_METHOD="github.com";Er.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr extends al{constructor(){super("twitter.com")}static credential(e,n){return Ai._fromParams({providerId:Sr.PROVIDER_ID,signInMethod:Sr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Sr.credentialFromTaggedObject(e)}static credentialFromError(e){return Sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Sr.credential(n,r)}catch{return null}}}Sr.TWITTER_SIGN_IN_METHOD="twitter.com";Sr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bP(t,e){return sl(t,"POST","/v1/accounts:signUp",rl(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await gi._fromIdTokenResponse(e,r,i),o=O_(r);return new Di({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=O_(r);return new Di({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function O_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc extends cr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,sc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new sc(e,n,r,i)}}function kC(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?sc._fromErrorAndOperation(t,s,e,r):s})}async function FP(t,e,n=!1){const r=await Aa(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Di._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $P(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Aa(t,kC(r,i,e,t),n);W(s.idToken,r,"internal-error");const o=ig(s.idToken);W(o,r,"internal-error");const{sub:a}=o;return W(t.uid===a,r,"user-mismatch"),Di._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&_n(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RC(t,e,n=!1){const r="signIn",i=await kC(t,r,e),s=await Di._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function UP(t,e){return RC(ol(t),e)}async function VP(t,e,n){const r=ol(t),i=await bP(r,{returnSecureToken:!0,email:e,password:n}),s=await Di._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function zP(t,e,n){return UP(be(t),eo.credential(e,n))}function BP(t,e,n,r){return be(t).onIdTokenChanged(e,n,r)}function jP(t,e,n){return be(t).beforeAuthStateChanged(e,n)}function WP(t,e,n,r){return be(t).onAuthStateChanged(e,n,r)}function HP(t){return be(t).signOut()}const oc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(oc,"1"),this.storage.removeItem(oc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qP(){const t=Tt();return sg(t)||ah(t)}const GP=1e3,KP=10;class AC extends NC{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=qP()&&CP(),this.fallbackToPolling=SC(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);SP()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,KP):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},GP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}AC.type="LOCAL";const QP=AC;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC extends NC{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}DC.type="SESSION";const xC=DC;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new lh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await YP(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}lh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=lg("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(){return window}function JP(t){Mn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PC(){return typeof Mn().WorkerGlobalScope<"u"&&typeof Mn().importScripts=="function"}async function ZP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function eO(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function tO(){return PC()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OC="firebaseLocalStorageDb",nO=1,ac="firebaseLocalStorage",MC="fbase_key";class ll{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function uh(t,e){return t.transaction([ac],e?"readwrite":"readonly").objectStore(ac)}function rO(){const t=indexedDB.deleteDatabase(OC);return new ll(t).toPromise()}function dp(){const t=indexedDB.open(OC,nO);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ac,{keyPath:MC})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ac)?e(r):(r.close(),await rO(),e(await dp()))})})}async function M_(t,e,n){const r=uh(t,!0).put({[MC]:e,value:n});return new ll(r).toPromise()}async function iO(t,e){const n=uh(t,!1).get(e),r=await new ll(n).toPromise();return r===void 0?null:r.value}function L_(t,e){const n=uh(t,!0).delete(e);return new ll(n).toPromise()}const sO=800,oO=3;class LC{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await dp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>oO)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return PC()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=lh._getInstance(tO()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await ZP(),!this.activeServiceWorker)return;this.sender=new XP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||eO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await dp();return await M_(e,oc,"1"),await L_(e,oc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>M_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>iO(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>L_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=uh(i,!1).getAll();return new ll(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),sO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}LC.type="LOCAL";const aO=LC;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lO(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function uO(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=On("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",lO().appendChild(r)})}function cO(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new nl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hO(t,e){return e?qn(e):(W(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug extends og{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ws(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ws(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ws(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function dO(t){return RC(t.auth,new ug(t),t.bypassAuthState)}function fO(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),$P(n,new ug(t),t.bypassAuthState)}async function pO(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),FP(n,new ug(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bC{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return dO;case"linkViaPopup":case"linkViaRedirect":return pO;case"reauthViaPopup":case"reauthViaRedirect":return fO;default:_n(this.auth,"internal-error")}}resolve(e){nr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){nr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mO=new nl(2e3,1e4);class us extends bC{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,us.currentPopupAction&&us.currentPopupAction.cancel(),us.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){nr(this.filter.length===1,"Popup operations only handle one event");const e=lg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(On(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(On(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,us.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(On(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,mO.get())};e()}}us.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gO="pendingRedirect",Eu=new Map;class yO extends bC{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Eu.get(this.auth._key());if(!e){try{const r=await vO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Eu.set(this.auth._key(),e)}return this.bypassAuthState||Eu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vO(t,e){const n=EO(e),r=wO(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function _O(t,e){Eu.set(t._key(),e)}function wO(t){return qn(t._redirectPersistence)}function EO(t){return wu(gO,t.config.apiKey,t.name)}async function SO(t,e,n=!1){const r=ol(t),i=hO(r,e),o=await new yO(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CO=10*60*1e3;class IO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!TO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!FC(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(On(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=CO&&this.cachedEventUids.clear(),this.cachedEventUids.has(b_(e))}saveEventToCache(e){this.cachedEventUids.add(b_(e)),this.lastProcessedEventTime=Date.now()}}function b_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function FC({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function TO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return FC(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kO(t,e={}){return il(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,NO=/^https?/;async function AO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await kO(t);for(const n of e)try{if(DO(n))return}catch{}_n(t,"unauthorized-domain")}function DO(t){const e=hp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!NO.test(n))return!1;if(RO.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xO=new nl(3e4,6e4);function F_(){const t=Mn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function PO(t){return new Promise((e,n)=>{var r,i,s;function o(){F_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{F_(),n(On(t,"network-request-failed"))},timeout:xO.get()})}if(!((i=(r=Mn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Mn().gapi)===null||s===void 0)&&s.load)o();else{const a=cO("iframefcb");return Mn()[a]=()=>{gapi.load?o():n(On(t,"network-request-failed"))},uO(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Su=null,e})}let Su=null;function OO(t){return Su=Su||PO(t),Su}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MO=new nl(5e3,15e3),LO="__/auth/iframe",bO="emulator/auth/iframe",FO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$O=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function UO(t){const e=t.config;W(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?rg(e,bO):`https://${t.config.authDomain}/${LO}`,r={apiKey:e.apiKey,appName:t.name,v:Zs},i=$O.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Js(r).slice(1)}`}async function VO(t){const e=await OO(t),n=Mn().gapi;return W(n,t,"internal-error"),e.open({where:document.body,url:UO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:FO,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=On(t,"network-request-failed"),a=Mn().setTimeout(()=>{s(o)},MO.get());function l(){Mn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},BO=500,jO=600,WO="_blank",HO="http://localhost";class $_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function qO(t,e,n,r=BO,i=jO){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},zO),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Tt().toLowerCase();n&&(a=yC(u)?WO:n),gC(u)&&(e=e||HO,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[p,v])=>`${d}${p}=${v},`,"");if(EP(u)&&a!=="_self")return GO(e||"",a),new $_(null);const h=window.open(e||"",a,c);W(h,t,"popup-blocked");try{h.focus()}catch{}return new $_(h)}function GO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KO="__/auth/handler",QO="emulator/auth/handler";function U_(t,e,n,r,i,s){W(t.config.authDomain,t,"auth-domain-config-required"),W(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Zs,eventId:i};if(e instanceof TC){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",sp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof al){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${YO(t)}?${Js(a).slice(1)}`}function YO({config:t}){return t.emulator?rg(t,QO):`https://${t.authDomain}/${KO}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Md="webStorageSupport";class XO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=xC,this._completeRedirectFn=SO,this._overrideRedirectResult=_O}async _openPopup(e,n,r,i){var s;nr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=U_(e,n,r,hp(),i);return qO(e,o,lg())}async _openRedirect(e,n,r,i){return await this._originValidation(e),JP(U_(e,n,r,hp(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(nr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await VO(e),r=new IO(e);return n.register("authEvent",i=>(W(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Md,{type:Md},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Md];o!==void 0&&n(!!o),_n(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=AO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return SC()||sg()||ah()}}const JO=XO;var V_="@firebase/auth",z_="0.22.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eM(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function tM(t){Ni(new zr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{W(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),W(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:CC(t)},c=new TP(a,l,u);return iP(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ni(new zr("auth-internal",e=>{const n=ol(e.getProvider("auth").getImmediate());return(r=>new ZO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pn(V_,z_,eM(t)),Pn(V_,z_,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nM=5*60,rM=ZS("authIdTokenMaxAge")||nM;let B_=null;const iM=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>rM)return;const i=n==null?void 0:n.token;B_!==i&&(B_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function sM(t=eg()){const e=oh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=rP(t,{popupRedirectResolver:JO,persistence:[aO,QP,xC]}),r=ZS("authTokenSyncURL");if(r){const s=iM(r);jP(n,s,()=>s(n.currentUser)),BP(n,o=>s(o))}const i=XS("auth");return i&&kP(n,`http://${i}`),n}tM("Browser");var oM=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},b,cg=cg||{},K=oM||self;function lc(){}function ch(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ul(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function aM(t){return Object.prototype.hasOwnProperty.call(t,Ld)&&t[Ld]||(t[Ld]=++lM)}var Ld="closure_uid_"+(1e9*Math.random()>>>0),lM=0;function uM(t,e,n){return t.call.apply(t.bind,arguments)}function cM(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function St(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?St=uM:St=cM,St.apply(null,arguments)}function Yl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function ht(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Yr(){this.s=this.s,this.o=this.o}var hM=0;Yr.prototype.s=!1;Yr.prototype.na=function(){!this.s&&(this.s=!0,this.M(),hM!=0)&&aM(this)};Yr.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const $C=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function hg(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function j_(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(ch(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Ct(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ct.prototype.h=function(){this.defaultPrevented=!0};var dM=function(){if(!K.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{K.addEventListener("test",lc,e),K.removeEventListener("test",lc,e)}catch{}return t}();function uc(t){return/^[\s\xa0]*$/.test(t)}var W_=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function bd(t,e){return t<e?-1:t>e?1:0}function hh(){var t=K.navigator;return t&&(t=t.userAgent)?t:""}function An(t){return hh().indexOf(t)!=-1}function dg(t){return dg[" "](t),t}dg[" "]=lc;function fM(t){var e=gM;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var pM=An("Opera"),Ls=An("Trident")||An("MSIE"),UC=An("Edge"),fp=UC||Ls,VC=An("Gecko")&&!(hh().toLowerCase().indexOf("webkit")!=-1&&!An("Edge"))&&!(An("Trident")||An("MSIE"))&&!An("Edge"),mM=hh().toLowerCase().indexOf("webkit")!=-1&&!An("Edge");function zC(){var t=K.document;return t?t.documentMode:void 0}var cc;e:{var Fd="",$d=function(){var t=hh();if(VC)return/rv:([^\);]+)(\)|;)/.exec(t);if(UC)return/Edge\/([\d\.]+)/.exec(t);if(Ls)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(mM)return/WebKit\/(\S+)/.exec(t);if(pM)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if($d&&(Fd=$d?$d[1]:""),Ls){var Ud=zC();if(Ud!=null&&Ud>parseFloat(Fd)){cc=String(Ud);break e}}cc=Fd}var gM={};function yM(){return fM(function(){let t=0;const e=W_(String(cc)).split("."),n=W_("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=bd(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||bd(i[2].length==0,s[2].length==0)||bd(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var pp;if(K.document&&Ls){var H_=zC();pp=H_||parseInt(cc,10)||void 0}else pp=void 0;var vM=pp;function Pa(t,e){if(Ct.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(VC){e:{try{dg(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:_M[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Pa.X.h.call(this)}}ht(Pa,Ct);var _M={2:"touch",3:"pen",4:"mouse"};Pa.prototype.h=function(){Pa.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var cl="closure_listenable_"+(1e6*Math.random()|0),wM=0;function EM(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++wM,this.ba=this.ea=!1}function dh(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function fg(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function BC(t){const e={};for(const n in t)e[n]=t[n];return e}const q_="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function jC(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<q_.length;s++)n=q_[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function fh(t){this.src=t,this.g={},this.h=0}fh.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=gp(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new EM(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function mp(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=$C(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(dh(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function gp(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var pg="closure_lm_"+(1e6*Math.random()|0),Vd={};function WC(t,e,n,r,i){if(r&&r.once)return qC(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)WC(t,e[s],n,r,i);return null}return n=yg(n),t&&t[cl]?t.N(e,n,ul(r)?!!r.capture:!!r,i):HC(t,e,n,!1,r,i)}function HC(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=ul(i)?!!i.capture:!!i,a=gg(t);if(a||(t[pg]=a=new fh(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=SM(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)dM||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(KC(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function SM(){function t(n){return e.call(t.src,t.listener,n)}const e=CM;return t}function qC(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)qC(t,e[s],n,r,i);return null}return n=yg(n),t&&t[cl]?t.O(e,n,ul(r)?!!r.capture:!!r,i):HC(t,e,n,!0,r,i)}function GC(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)GC(t,e[s],n,r,i);else r=ul(r)?!!r.capture:!!r,n=yg(n),t&&t[cl]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=gp(s,n,r,i),-1<n&&(dh(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=gg(t))&&(e=t.g[e.toString()],t=-1,e&&(t=gp(e,n,r,i)),(n=-1<t?e[t]:null)&&mg(n))}function mg(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[cl])mp(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(KC(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=gg(e))?(mp(n,t),n.h==0&&(n.src=null,e[pg]=null)):dh(t)}}}function KC(t){return t in Vd?Vd[t]:Vd[t]="on"+t}function CM(t,e){if(t.ba)t=!0;else{e=new Pa(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&mg(t),t=n.call(r,e)}return t}function gg(t){return t=t[pg],t instanceof fh?t:null}var zd="__closure_events_fn_"+(1e9*Math.random()>>>0);function yg(t){return typeof t=="function"?t:(t[zd]||(t[zd]=function(e){return t.handleEvent(e)}),t[zd])}function nt(){Yr.call(this),this.i=new fh(this),this.P=this,this.I=null}ht(nt,Yr);nt.prototype[cl]=!0;nt.prototype.removeEventListener=function(t,e,n,r){GC(this,t,e,n,r)};function ut(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Ct(e,t);else if(e instanceof Ct)e.target=e.target||t;else{var i=e;e=new Ct(r,t),jC(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Xl(o,r,!0,e)&&i}if(o=e.g=t,i=Xl(o,r,!0,e)&&i,i=Xl(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Xl(o,r,!1,e)&&i}nt.prototype.M=function(){if(nt.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)dh(n[r]);delete t.g[e],t.h--}}this.I=null};nt.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};nt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Xl(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&mp(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var vg=K.JSON.stringify;function IM(){var t=XC;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class TM{constructor(){this.h=this.g=null}add(e,n){const r=QC.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var QC=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new kM,t=>t.reset());class kM{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function RM(t){K.setTimeout(()=>{throw t},0)}function YC(t,e){yp||NM(),vp||(yp(),vp=!0),XC.add(t,e)}var yp;function NM(){var t=K.Promise.resolve(void 0);yp=function(){t.then(AM)}}var vp=!1,XC=new TM;function AM(){for(var t;t=IM();){try{t.h.call(t.g)}catch(n){RM(n)}var e=QC;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}vp=!1}function ph(t,e){nt.call(this),this.h=t||1,this.g=e||K,this.j=St(this.lb,this),this.l=Date.now()}ht(ph,nt);b=ph.prototype;b.ca=!1;b.R=null;b.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),ut(this,"tick"),this.ca&&(_g(this),this.start()))}};b.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function _g(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}b.M=function(){ph.X.M.call(this),_g(this),delete this.g};function wg(t,e,n){if(typeof t=="function")n&&(t=St(t,n));else if(t&&typeof t.handleEvent=="function")t=St(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:K.setTimeout(t,e||0)}function JC(t){t.g=wg(()=>{t.g=null,t.i&&(t.i=!1,JC(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class DM extends Yr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:JC(this)}M(){super.M(),this.g&&(K.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Oa(t){Yr.call(this),this.h=t,this.g={}}ht(Oa,Yr);var G_=[];function ZC(t,e,n,r){Array.isArray(n)||(n&&(G_[0]=n.toString()),n=G_);for(var i=0;i<n.length;i++){var s=WC(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function eI(t){fg(t.g,function(e,n){this.g.hasOwnProperty(n)&&mg(e)},t),t.g={}}Oa.prototype.M=function(){Oa.X.M.call(this),eI(this)};Oa.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function mh(){this.g=!0}mh.prototype.Aa=function(){this.g=!1};function xM(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function PM(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function cs(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+MM(t,n)+(r?" "+r:"")})}function OM(t,e){t.info(function(){return"TIMEOUT: "+e})}mh.prototype.info=function(){};function MM(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return vg(n)}catch{return e}}var Ui={},K_=null;function gh(){return K_=K_||new nt}Ui.Pa="serverreachability";function tI(t){Ct.call(this,Ui.Pa,t)}ht(tI,Ct);function Ma(t){const e=gh();ut(e,new tI(e))}Ui.STAT_EVENT="statevent";function nI(t,e){Ct.call(this,Ui.STAT_EVENT,t),this.stat=e}ht(nI,Ct);function Nt(t){const e=gh();ut(e,new nI(e,t))}Ui.Qa="timingevent";function rI(t,e){Ct.call(this,Ui.Qa,t),this.size=e}ht(rI,Ct);function hl(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return K.setTimeout(function(){t()},e)}var yh={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},iI={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Eg(){}Eg.prototype.h=null;function Q_(t){return t.h||(t.h=t.i())}function sI(){}var dl={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Sg(){Ct.call(this,"d")}ht(Sg,Ct);function Cg(){Ct.call(this,"c")}ht(Cg,Ct);var _p;function vh(){}ht(vh,Eg);vh.prototype.g=function(){return new XMLHttpRequest};vh.prototype.i=function(){return{}};_p=new vh;function fl(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new Oa(this),this.O=LM,t=fp?125:void 0,this.T=new ph(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new oI}function oI(){this.i=null,this.g="",this.h=!1}var LM=45e3,wp={},hc={};b=fl.prototype;b.setTimeout=function(t){this.O=t};function Ep(t,e,n){t.K=1,t.v=wh(rr(e)),t.s=n,t.P=!0,aI(t,null)}function aI(t,e){t.F=Date.now(),pl(t),t.A=rr(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),mI(n.i,"t",r),t.C=0,n=t.l.H,t.h=new oI,t.g=bI(t.l,n?e:null,!t.s),0<t.N&&(t.L=new DM(St(t.La,t,t.g),t.N)),ZC(t.S,t.g,"readystatechange",t.ib),e=t.H?BC(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Ma(),xM(t.j,t.u,t.A,t.m,t.U,t.s)}b.ib=function(t){t=t.target;const e=this.L;e&&Gn(t)==3?e.l():this.La(t)};b.La=function(t){try{if(t==this.g)e:{const c=Gn(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>c)&&(c!=3||fp||this.g&&(this.h.h||this.g.fa()||Z_(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?Ma(3):Ma(2)),_h(this);var n=this.g.aa();this.Y=n;t:if(lI(this)){var r=Z_(this.g);t="";var i=r.length,s=Gn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ui(this),ea(this);var o="";break t}this.h.i=new K.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,PM(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!uc(a)){var u=a;break t}}u=null}if(n=u)cs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Sp(this,n);else{this.i=!1,this.o=3,Nt(12),ui(this),ea(this);break e}}this.P?(uI(this,c,o),fp&&this.i&&c==3&&(ZC(this.S,this.T,"tick",this.hb),this.T.start())):(cs(this.j,this.m,o,null),Sp(this,o)),c==4&&ui(this),this.i&&!this.I&&(c==4?PI(this.l,this):(this.i=!1,pl(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Nt(12)):(this.o=0,Nt(13)),ui(this),ea(this)}}}catch{}finally{}};function lI(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function uI(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=bM(t,n),i==hc){e==4&&(t.o=4,Nt(14),r=!1),cs(t.j,t.m,null,"[Incomplete Response]");break}else if(i==wp){t.o=4,Nt(15),cs(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else cs(t.j,t.m,i,null),Sp(t,i);lI(t)&&i!=hc&&i!=wp&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Nt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Dg(e),e.K=!0,Nt(11))):(cs(t.j,t.m,n,"[Invalid Chunked Response]"),ui(t),ea(t))}b.hb=function(){if(this.g){var t=Gn(this.g),e=this.g.fa();this.C<e.length&&(_h(this),uI(this,t,e),this.i&&t!=4&&pl(this))}};function bM(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?hc:(n=Number(e.substring(n,r)),isNaN(n)?wp:(r+=1,r+n>e.length?hc:(e=e.substr(r,n),t.C=r+n,e)))}b.cancel=function(){this.I=!0,ui(this)};function pl(t){t.V=Date.now()+t.O,cI(t,t.O)}function cI(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=hl(St(t.gb,t),e)}function _h(t){t.B&&(K.clearTimeout(t.B),t.B=null)}b.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(OM(this.j,this.A),this.K!=2&&(Ma(),Nt(17)),ui(this),this.o=2,ea(this)):cI(this,this.V-t)};function ea(t){t.l.G==0||t.I||PI(t.l,t)}function ui(t){_h(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,_g(t.T),eI(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Sp(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Cp(n.h,t))){if(!t.J&&Cp(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)pc(n),Ch(n);else break e;Ag(n),Nt(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=hl(St(n.cb,n),6e3));if(1>=vI(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else ci(n,11)}else if((t.J||n.g==t)&&pc(n),!uc(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const c=u[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const v=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var s=r.h;s.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Ig(s,s.h),s.h=null))}if(r.D){const _=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.za=_,Re(r.F,r.D,_))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=LI(r,r.H?r.ka:null,r.V),o.J){_I(r.h,o);var a=o,l=r.J;l&&a.setTimeout(l),a.B&&(_h(a),pl(a)),r.g=o}else DI(r);0<n.i.length&&Ih(n)}else u[0]!="stop"&&u[0]!="close"||ci(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?ci(n,7):Ng(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}Ma(4)}catch{}}function FM(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ch(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function $M(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ch(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function hI(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ch(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=$M(t),r=FM(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var dI=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function UM(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function yi(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof yi){this.h=e!==void 0?e:t.h,dc(this,t.j),this.s=t.s,this.g=t.g,fc(this,t.m),this.l=t.l,e=t.i;var n=new La;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Y_(this,n),this.o=t.o}else t&&(n=String(t).match(dI))?(this.h=!!e,dc(this,n[1]||"",!0),this.s=Vo(n[2]||""),this.g=Vo(n[3]||"",!0),fc(this,n[4]),this.l=Vo(n[5]||"",!0),Y_(this,n[6]||"",!0),this.o=Vo(n[7]||"")):(this.h=!!e,this.i=new La(null,this.h))}yi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(zo(e,X_,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(zo(e,X_,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(zo(n,n.charAt(0)=="/"?BM:zM,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",zo(n,WM)),t.join("")};function rr(t){return new yi(t)}function dc(t,e,n){t.j=n?Vo(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function fc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Y_(t,e,n){e instanceof La?(t.i=e,HM(t.i,t.h)):(n||(e=zo(e,jM)),t.i=new La(e,t.h))}function Re(t,e,n){t.i.set(e,n)}function wh(t){return Re(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Vo(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function zo(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,VM),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function VM(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var X_=/[#\/\?@]/g,zM=/[#\?:]/g,BM=/[#\?]/g,jM=/[#\?@]/g,WM=/#/g;function La(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Xr(t){t.g||(t.g=new Map,t.h=0,t.i&&UM(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}b=La.prototype;b.add=function(t,e){Xr(this),this.i=null,t=to(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function fI(t,e){Xr(t),e=to(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function pI(t,e){return Xr(t),e=to(t,e),t.g.has(e)}b.forEach=function(t,e){Xr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};b.oa=function(){Xr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};b.W=function(t){Xr(this);let e=[];if(typeof t=="string")pI(this,t)&&(e=e.concat(this.g.get(to(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};b.set=function(t,e){return Xr(this),this.i=null,t=to(this,t),pI(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};b.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function mI(t,e,n){fI(t,e),0<n.length&&(t.i=null,t.g.set(to(t,e),hg(n)),t.h+=n.length)}b.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function to(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function HM(t,e){e&&!t.j&&(Xr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(fI(this,r),mI(this,i,n))},t)),t.j=e}var qM=class{constructor(e,n){this.h=e,this.g=n}};function gI(t){this.l=t||GM,K.PerformanceNavigationTiming?(t=K.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(K.g&&K.g.Ga&&K.g.Ga()&&K.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var GM=10;function yI(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function vI(t){return t.h?1:t.g?t.g.size:0}function Cp(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Ig(t,e){t.g?t.g.add(e):t.h=e}function _I(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}gI.prototype.cancel=function(){if(this.i=wI(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function wI(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return hg(t.i)}function Tg(){}Tg.prototype.stringify=function(t){return K.JSON.stringify(t,void 0)};Tg.prototype.parse=function(t){return K.JSON.parse(t,void 0)};function KM(){this.g=new Tg}function QM(t,e,n){const r=n||"";try{hI(t,function(i,s){let o=i;ul(i)&&(o=vg(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function YM(t,e){const n=new mh;if(K.Image){const r=new Image;r.onload=Yl(Jl,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Yl(Jl,n,r,"TestLoadImage: error",!1,e),r.onabort=Yl(Jl,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Yl(Jl,n,r,"TestLoadImage: timeout",!1,e),K.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Jl(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function ml(t){this.l=t.ac||null,this.j=t.jb||!1}ht(ml,Eg);ml.prototype.g=function(){return new Eh(this.l,this.j)};ml.prototype.i=function(t){return function(){return t}}({});function Eh(t,e){nt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=kg,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ht(Eh,nt);var kg=0;b=Eh.prototype;b.open=function(t,e){if(this.readyState!=kg)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ba(this)};b.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||K).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};b.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,gl(this)),this.readyState=kg};b.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ba(this)),this.g&&(this.readyState=3,ba(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof K.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;EI(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function EI(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}b.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?gl(this):ba(this),this.readyState==3&&EI(this)}};b.Va=function(t){this.g&&(this.response=this.responseText=t,gl(this))};b.Ua=function(t){this.g&&(this.response=t,gl(this))};b.ga=function(){this.g&&gl(this)};function gl(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ba(t)}b.setRequestHeader=function(t,e){this.v.append(t,e)};b.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};b.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ba(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Eh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var XM=K.JSON.parse;function Oe(t){nt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=SI,this.K=this.L=!1}ht(Oe,nt);var SI="",JM=/^https?$/i,ZM=["POST","PUT"];b=Oe.prototype;b.Ka=function(t){this.L=t};b.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():_p.g(),this.C=this.u?Q_(this.u):Q_(_p),this.g.onreadystatechange=St(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){J_(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=K.FormData&&t instanceof K.FormData,!(0<=$C(ZM,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{TI(this),0<this.B&&((this.K=eL(this.g))?(this.g.timeout=this.B,this.g.ontimeout=St(this.qa,this)):this.A=wg(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){J_(this,s)}};function eL(t){return Ls&&yM()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}b.qa=function(){typeof cg<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ut(this,"timeout"),this.abort(8))};function J_(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,CI(t),Sh(t)}function CI(t){t.D||(t.D=!0,ut(t,"complete"),ut(t,"error"))}b.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ut(this,"complete"),ut(this,"abort"),Sh(this))};b.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Sh(this,!0)),Oe.X.M.call(this)};b.Ha=function(){this.s||(this.F||this.v||this.l?II(this):this.fb())};b.fb=function(){II(this)};function II(t){if(t.h&&typeof cg<"u"&&(!t.C[1]||Gn(t)!=4||t.aa()!=2)){if(t.v&&Gn(t)==4)wg(t.Ha,0,t);else if(ut(t,"readystatechange"),Gn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(dI)[1]||null;if(!i&&K.self&&K.self.location){var s=K.self.location.protocol;i=s.substr(0,s.length-1)}r=!JM.test(i?i.toLowerCase():"")}n=r}if(n)ut(t,"complete"),ut(t,"success");else{t.m=6;try{var o=2<Gn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",CI(t)}}finally{Sh(t)}}}}function Sh(t,e){if(t.g){TI(t);const n=t.g,r=t.C[0]?lc:null;t.g=null,t.C=null,e||ut(t,"ready");try{n.onreadystatechange=r}catch{}}}function TI(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(K.clearTimeout(t.A),t.A=null)}function Gn(t){return t.g?t.g.readyState:0}b.aa=function(){try{return 2<Gn(this)?this.g.status:-1}catch{return-1}};b.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};b.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),XM(e)}};function Z_(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case SI:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}b.Ea=function(){return this.m};b.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function kI(t){let e="";return fg(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Rg(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=kI(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Re(t,e,n))}function Ao(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function RI(t){this.Ca=0,this.i=[],this.j=new mh,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Ao("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Ao("baseRetryDelayMs",5e3,t),this.bb=Ao("retryDelaySeedMs",1e4,t),this.$a=Ao("forwardChannelMaxRetries",2,t),this.ta=Ao("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new gI(t&&t.concurrentRequestLimit),this.Fa=new KM,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}b=RI.prototype;b.ma=8;b.G=1;function Ng(t){if(NI(t),t.G==3){var e=t.U++,n=rr(t.F);Re(n,"SID",t.I),Re(n,"RID",e),Re(n,"TYPE","terminate"),yl(t,n),e=new fl(t,t.j,e,void 0),e.K=2,e.v=wh(rr(n)),n=!1,K.navigator&&K.navigator.sendBeacon&&(n=K.navigator.sendBeacon(e.v.toString(),"")),!n&&K.Image&&(new Image().src=e.v,n=!0),n||(e.g=bI(e.l,null),e.g.da(e.v)),e.F=Date.now(),pl(e)}MI(t)}function Ch(t){t.g&&(Dg(t),t.g.cancel(),t.g=null)}function NI(t){Ch(t),t.u&&(K.clearTimeout(t.u),t.u=null),pc(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&K.clearTimeout(t.m),t.m=null)}function Ih(t){yI(t.h)||t.m||(t.m=!0,YC(t.Ja,t),t.C=0)}function tL(t,e){return vI(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=hl(St(t.Ja,t,e),OI(t,t.C)),t.C++,!0)}b.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new fl(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=BC(s),jC(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=AI(this,i,e),n=rr(this.F),Re(n,"RID",t),Re(n,"CVER",22),this.D&&Re(n,"X-HTTP-Session-Id",this.D),yl(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(kI(s)))+"&"+e:this.o&&Rg(n,this.o,s)),Ig(this.h,i),this.Ya&&Re(n,"TYPE","init"),this.O?(Re(n,"$req",e),Re(n,"SID","null"),i.Z=!0,Ep(i,n,null)):Ep(i,n,e),this.G=2}}else this.G==3&&(t?e0(this,t):this.i.length==0||yI(this.h)||e0(this))};function e0(t,e){var n;e?n=e.m:n=t.U++;const r=rr(t.F);Re(r,"SID",t.I),Re(r,"RID",n),Re(r,"AID",t.T),yl(t,r),t.o&&t.s&&Rg(r,t.o,t.s),n=new fl(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=AI(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Ig(t.h,n),Ep(n,r,e)}function yl(t,e){t.ia&&fg(t.ia,function(n,r){Re(e,r,n)}),t.l&&hI({},function(n,r){Re(e,r,n)})}function AI(t,e,n){n=Math.min(t.i.length,n);var r=t.l?St(t.l.Ra,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{QM(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function DI(t){t.g||t.u||(t.Z=1,YC(t.Ia,t),t.A=0)}function Ag(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=hl(St(t.Ia,t),OI(t,t.A)),t.A++,!0)}b.Ia=function(){if(this.u=null,xI(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=hl(St(this.eb,this),t)}};b.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Nt(10),Ch(this),xI(this))};function Dg(t){t.B!=null&&(K.clearTimeout(t.B),t.B=null)}function xI(t){t.g=new fl(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=rr(t.sa);Re(e,"RID","rpc"),Re(e,"SID",t.I),Re(e,"CI",t.L?"0":"1"),Re(e,"AID",t.T),Re(e,"TYPE","xmlhttp"),yl(t,e),t.o&&t.s&&Rg(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=wh(rr(e)),n.s=null,n.P=!0,aI(n,t)}b.cb=function(){this.v!=null&&(this.v=null,Ch(this),Ag(this),Nt(19))};function pc(t){t.v!=null&&(K.clearTimeout(t.v),t.v=null)}function PI(t,e){var n=null;if(t.g==e){pc(t),Dg(t),t.g=null;var r=2}else if(Cp(t.h,e))n=e.D,_I(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=gh(),ut(r,new rI(r,n)),Ih(t)}else DI(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&tL(t,e)||r==2&&Ag(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:ci(t,5);break;case 4:ci(t,10);break;case 3:ci(t,6);break;default:ci(t,2)}}}function OI(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function ci(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=St(t.kb,t);n||(n=new yi("//www.google.com/images/cleardot.gif"),K.location&&K.location.protocol=="http"||dc(n,"https"),wh(n)),YM(n.toString(),r)}else Nt(2);t.G=0,t.l&&t.l.va(e),MI(t),NI(t)}b.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Nt(2)):(this.j.info("Failed to ping google.com"),Nt(1))};function MI(t){if(t.G=0,t.la=[],t.l){const e=wI(t.h);(e.length!=0||t.i.length!=0)&&(j_(t.la,e),j_(t.la,t.i),t.h.i.length=0,hg(t.i),t.i.length=0),t.l.ua()}}function LI(t,e,n){var r=n instanceof yi?rr(n):new yi(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),fc(r,r.m);else{var i=K.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new yi(null,void 0);r&&dc(s,r),e&&(s.g=e),i&&fc(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&Re(r,n,e),Re(r,"VER",t.ma),yl(t,r),r}function bI(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Oe(new ml({jb:!0})):new Oe(t.ra),e.Ka(t.H),e}function FI(){}b=FI.prototype;b.xa=function(){};b.wa=function(){};b.va=function(){};b.ua=function(){};b.Ra=function(){};function mc(){if(Ls&&!(10<=Number(vM)))throw Error("Environmental error: no available transport.")}mc.prototype.g=function(t,e){return new Ht(t,e)};function Ht(t,e){nt.call(this),this.g=new RI(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!uc(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!uc(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new no(this)}ht(Ht,nt);Ht.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Nt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=LI(t,null,t.V),Ih(t)};Ht.prototype.close=function(){Ng(this.g)};Ht.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=vg(t),t=n);e.i.push(new qM(e.ab++,t)),e.G==3&&Ih(e)};Ht.prototype.M=function(){this.g.l=null,delete this.j,Ng(this.g),delete this.g,Ht.X.M.call(this)};function $I(t){Sg.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ht($I,Sg);function UI(){Cg.call(this),this.status=1}ht(UI,Cg);function no(t){this.g=t}ht(no,FI);no.prototype.xa=function(){ut(this.g,"a")};no.prototype.wa=function(t){ut(this.g,new $I(t))};no.prototype.va=function(t){ut(this.g,new UI)};no.prototype.ua=function(){ut(this.g,"b")};mc.prototype.createWebChannel=mc.prototype.g;Ht.prototype.send=Ht.prototype.u;Ht.prototype.open=Ht.prototype.m;Ht.prototype.close=Ht.prototype.close;yh.NO_ERROR=0;yh.TIMEOUT=8;yh.HTTP_ERROR=6;iI.COMPLETE="complete";sI.EventType=dl;dl.OPEN="a";dl.CLOSE="b";dl.ERROR="c";dl.MESSAGE="d";nt.prototype.listen=nt.prototype.N;Oe.prototype.listenOnce=Oe.prototype.O;Oe.prototype.getLastError=Oe.prototype.Oa;Oe.prototype.getLastErrorCode=Oe.prototype.Ea;Oe.prototype.getStatus=Oe.prototype.aa;Oe.prototype.getResponseJson=Oe.prototype.Sa;Oe.prototype.getResponseText=Oe.prototype.fa;Oe.prototype.send=Oe.prototype.da;Oe.prototype.setWithCredentials=Oe.prototype.Ka;var nL=function(){return new mc},rL=function(){return gh()},Bd=yh,iL=iI,sL=Ui,t0={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},oL=ml,Zl=sI,aL=Oe;const n0="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}yt.UNAUTHENTICATED=new yt(null),yt.GOOGLE_CREDENTIALS=new yt("google-credentials-uid"),yt.FIRST_PARTY=new yt("first-party-uid"),yt.MOCK_USER=new yt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ro="9.19.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi=new sh("@firebase/firestore");function r0(){return xi.logLevel}function $(t,...e){if(xi.logLevel<=ce.DEBUG){const n=e.map(xg);xi.debug(`Firestore (${ro}): ${t}`,...n)}}function ir(t,...e){if(xi.logLevel<=ce.ERROR){const n=e.map(xg);xi.error(`Firestore (${ro}): ${t}`,...n)}}function gc(t,...e){if(xi.logLevel<=ce.WARN){const n=e.map(xg);xi.warn(`Firestore (${ro}): ${t}`,...n)}}function xg(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(t="Unexpected state"){const e=`FIRESTORE (${ro}) INTERNAL ASSERTION FAILED: `+t;throw ir(e),new Error(e)}function Te(t,e){t||G()}function Z(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends cr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class lL{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(yt.UNAUTHENTICATED))}shutdown(){}}class uL{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class cL{constructor(e){this.t=e,this.currentUser=yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new br;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new br,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new br)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Te(typeof r.accessToken=="string"),new VI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Te(e===null||typeof e=="string"),new yt(e)}}class hL{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=yt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class dL{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new hL(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(yt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class fL{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class pL{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Te(typeof n.token=="string"),this.T=n.token,new fL(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mL(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=mL(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function pe(t,e){return t<e?-1:t>e?1:0}function bs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new L(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new L(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new L(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return qe.fromMillis(Date.now())}static fromDate(e){return qe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new qe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?pe(this.nanoseconds,e.nanoseconds):pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new qe(0,0))}static max(){return new J(new qe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(),r===void 0?r=e.length-n:r>e.length-n&&G(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Fa.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Fa?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ce extends Fa{construct(e,n,r){return new Ce(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new L(I.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ce(n)}static emptyPath(){return new Ce([])}}const gL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Et extends Fa{construct(e,n,r){return new Et(e,n,r)}static isValidIdentifier(e){return gL.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Et.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Et(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new L(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new L(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new L(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new L(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Et(n)}static emptyPath(){return new Et([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.path=e}static fromPath(e){return new z(Ce.fromString(e))}static fromName(e){return new z(Ce.fromString(e).popFirst(5))}static empty(){return new z(Ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ce.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new z(new Ce(e.slice()))}}function yL(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=J.fromTimestamp(r===1e9?new qe(n+1,0):new qe(n,r));return new Br(i,z.empty(),e)}function vL(t){return new Br(t.readTime,t.key,-1)}class Br{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Br(J.min(),z.empty(),-1)}static max(){return new Br(J.max(),z.empty(),-1)}}function _L(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=z.comparator(t.documentKey,e.documentKey),n!==0?n:pe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wL="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class EL{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vl(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==wL)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new N((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof N?n:N.resolve(n)}catch(n){return N.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):N.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):N.reject(n)}static resolve(e){return new N((n,r)=>{n(e)})}static reject(e){return new N((n,r)=>{r(e)})}static waitFor(e){return new N((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=N.resolve(!1);for(const r of e)n=n.next(i=>i?N.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new N((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new N((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function _l(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Pg.ct=-1;function Th(t){return t==null}function yc(t){return t===0&&1/t==-1/0}function SL(t){return typeof t=="number"&&Number.isInteger(t)&&!yc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function io(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function BI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,n){this.comparator=e,this.root=n||ot.EMPTY}insert(e,n){return new Ke(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ot.BLACK,null,null))}remove(e){return new Ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ot.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new eu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new eu(this.root,e,this.comparator,!1)}getReverseIterator(){return new eu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new eu(this.root,e,this.comparator,!0)}}class eu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ot{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ot.RED,this.left=i??ot.EMPTY,this.right=s??ot.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new ot(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ot.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ot.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}ot.EMPTY=null,ot.RED=!0,ot.BLACK=!1;ot.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(t,e,n,r,i){return this}insert(t,e,n){return new ot(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.comparator=e,this.data=new Ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new s0(this.data.getIterator())}getIteratorFrom(e){return new s0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ge)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ge(this.comparator);return n.data=e,n}}class s0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e){this.fields=e,e.sort(Et.comparator)}static empty(){return new dn([])}unionWith(e){let n=new Ge(Et.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new dn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return bs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CL extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new CL("Invalid base64 string: "+i):i}}(e);return new kt(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new kt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}kt.EMPTY_BYTE_STRING=new kt("");const IL=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function jr(t){if(Te(!!t),typeof t=="string"){let e=0;const n=IL.exec(t);if(Te(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ue(t.seconds),nanos:Ue(t.nanos)}}function Ue(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Fs(t){return typeof t=="string"?kt.fromBase64String(t):kt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jI(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function WI(t){const e=t.mapValue.fields.__previous_value__;return jI(e)?WI(e):e}function $a(t){const e=jr(t.mapValue.fields.__local_write_time__.timestampValue);return new qe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TL{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Ua{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ua("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ua&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Pi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?jI(t)?4:kL(t)?9007199254740991:10:G()}function bn(t,e){if(t===e)return!0;const n=Pi(t);if(n!==Pi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return $a(t).isEqual($a(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=jr(r.timestampValue),o=jr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Fs(r.bytesValue).isEqual(Fs(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Ue(r.geoPointValue.latitude)===Ue(i.geoPointValue.latitude)&&Ue(r.geoPointValue.longitude)===Ue(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Ue(r.integerValue)===Ue(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Ue(r.doubleValue),o=Ue(i.doubleValue);return s===o?yc(s)===yc(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return bs(t.arrayValue.values||[],e.arrayValue.values||[],bn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(i0(s)!==i0(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!bn(s[a],o[a])))return!1;return!0}(t,e);default:return G()}}function Va(t,e){return(t.values||[]).find(n=>bn(n,e))!==void 0}function $s(t,e){if(t===e)return 0;const n=Pi(t),r=Pi(e);if(n!==r)return pe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return pe(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Ue(i.integerValue||i.doubleValue),a=Ue(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return o0(t.timestampValue,e.timestampValue);case 4:return o0($a(t),$a(e));case 5:return pe(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Fs(i),a=Fs(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=pe(o[l],a[l]);if(u!==0)return u}return pe(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=pe(Ue(i.latitude),Ue(s.latitude));return o!==0?o:pe(Ue(i.longitude),Ue(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=$s(o[l],a[l]);if(u)return u}return pe(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===tu.mapValue&&s===tu.mapValue)return 0;if(i===tu.mapValue)return 1;if(s===tu.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=pe(a[c],u[c]);if(h!==0)return h;const d=$s(o[a[c]],l[u[c]]);if(d!==0)return d}return pe(a.length,u.length)}(t.mapValue,e.mapValue);default:throw G()}}function o0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return pe(t,e);const n=jr(t),r=jr(e),i=pe(n.seconds,r.seconds);return i!==0?i:pe(n.nanos,r.nanos)}function Us(t){return Ip(t)}function Ip(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=jr(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Fs(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,z.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Ip(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Ip(r.fields[a])}`;return s+"}"}(t.mapValue):G();var e,n}function a0(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Tp(t){return!!t&&"integerValue"in t}function Og(t){return!!t&&"arrayValue"in t}function l0(t){return!!t&&"nullValue"in t}function u0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Cu(t){return!!t&&"mapValue"in t}function ta(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return io(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ta(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ta(t.arrayValue.values[n]);return e}return Object.assign({},t)}function kL(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this.value=e}static empty(){return new Xt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Cu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ta(n)}setAll(e){let n=Et.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=ta(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Cu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return bn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Cu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){io(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Xt(ta(this.value))}}function HI(t){const e=[];return io(t.fields,(n,r)=>{const i=new Et([n]);if(Cu(r)){const s=HI(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new dn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new _t(e,0,J.min(),J.min(),J.min(),Xt.empty(),0)}static newFoundDocument(e,n,r,i){return new _t(e,1,n,J.min(),r,i,0)}static newNoDocument(e,n){return new _t(e,2,n,J.min(),J.min(),Xt.empty(),0)}static newUnknownDocument(e,n){return new _t(e,3,n,J.min(),J.min(),Xt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Xt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Xt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof _t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e,n){this.position=e,this.inclusive=n}}function c0(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=z.comparator(z.fromName(o.referenceValue),n.key):r=$s(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function h0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!bn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e,n="asc"){this.field=e,this.dir=n}}function RL(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{}class ze extends qI{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new AL(e,n,r):n==="array-contains"?new PL(e,r):n==="in"?new OL(e,r):n==="not-in"?new ML(e,r):n==="array-contains-any"?new LL(e,r):new ze(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new DL(e,r):new xL(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison($s(n,this.value)):n!==null&&Pi(this.value)===Pi(n)&&this.matchesComparison($s(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class wn extends qI{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new wn(e,n)}matches(e){return GI(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function GI(t){return t.op==="and"}function KI(t){return NL(t)&&GI(t)}function NL(t){for(const e of t.filters)if(e instanceof wn)return!1;return!0}function kp(t){if(t instanceof ze)return t.field.canonicalString()+t.op.toString()+Us(t.value);if(KI(t))return t.filters.map(e=>kp(e)).join(",");{const e=t.filters.map(n=>kp(n)).join(",");return`${t.op}(${e})`}}function QI(t,e){return t instanceof ze?function(n,r){return r instanceof ze&&n.op===r.op&&n.field.isEqual(r.field)&&bn(n.value,r.value)}(t,e):t instanceof wn?function(n,r){return r instanceof wn&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&QI(s,r.filters[o]),!0):!1}(t,e):void G()}function YI(t){return t instanceof ze?function(e){return`${e.field.canonicalString()} ${e.op} ${Us(e.value)}`}(t):t instanceof wn?function(e){return e.op.toString()+" {"+e.getFilters().map(YI).join(" ,")+"}"}(t):"Filter"}class AL extends ze{constructor(e,n,r){super(e,n,r),this.key=z.fromName(r.referenceValue)}matches(e){const n=z.comparator(e.key,this.key);return this.matchesComparison(n)}}class DL extends ze{constructor(e,n){super(e,"in",n),this.keys=XI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class xL extends ze{constructor(e,n){super(e,"not-in",n),this.keys=XI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function XI(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>z.fromName(r.referenceValue))}class PL extends ze{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Og(n)&&Va(n.arrayValue,this.value)}}class OL extends ze{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Va(this.value.arrayValue,n)}}class ML extends ze{constructor(e,n){super(e,"not-in",n)}matches(e){if(Va(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Va(this.value.arrayValue,n)}}class LL extends ze{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Og(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Va(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bL{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function d0(t,e=null,n=[],r=[],i=null,s=null,o=null){return new bL(t,e,n,r,i,s,o)}function Mg(t){const e=Z(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>kp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Th(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Us(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Us(r)).join(",")),e.ft=n}return e.ft}function Lg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!RL(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!QI(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!h0(t.startAt,e.startAt)&&h0(t.endAt,e.endAt)}function Rp(t){return z.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this.wt=null,this.startAt,this.endAt}}function FL(t,e,n,r,i,s,o,a){return new wl(t,e,n,r,i,s,o,a)}function JI(t){return new wl(t)}function f0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function ZI(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function bg(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function e1(t){return t.collectionGroup!==null}function Es(t){const e=Z(t);if(e.dt===null){e.dt=[];const n=bg(e),r=ZI(e);if(n!==null&&r===null)n.isKeyField()||e.dt.push(new na(n)),e.dt.push(new na(Et.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.dt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new na(Et.keyField(),s))}}}return e.dt}function sr(t){const e=Z(t);if(!e.wt)if(e.limitType==="F")e.wt=d0(e.path,e.collectionGroup,Es(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Es(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new na(s.field,o))}const r=e.endAt?new vc(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new vc(e.startAt.position,e.startAt.inclusive):null;e.wt=d0(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.wt}function Np(t,e){e.getFirstInequalityField(),bg(t);const n=t.filters.concat([e]);return new wl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ap(t,e,n){return new wl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function kh(t,e){return Lg(sr(t),sr(e))&&t.limitType===e.limitType}function t1(t){return`${Mg(sr(t))}|lt:${t.limitType}`}function Dp(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>YI(r)).join(", ")}]`),Th(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Us(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Us(r)).join(",")),`Target(${n})`}(sr(t))}; limitType=${t.limitType})`}function Rh(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):z.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of Es(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=c0(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Es(n),r)||n.endAt&&!function(i,s,o){const a=c0(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Es(n),r))}(t,e)}function $L(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function n1(t){return(e,n)=>{let r=!1;for(const i of Es(t)){const s=UL(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function UL(t,e,n){const r=t.field.isKeyField()?z.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?$s(a,l):G()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){io(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return BI(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VL=new Ke(z.comparator);function or(){return VL}const r1=new Ke(z.comparator);function Bo(...t){let e=r1;for(const n of t)e=e.insert(n.key,n);return e}function i1(t){let e=r1;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function hi(){return ra()}function s1(){return ra()}function ra(){return new so(t=>t.toString(),(t,e)=>t.isEqual(e))}const zL=new Ke(z.comparator),BL=new Ge(z.comparator);function ie(...t){let e=BL;for(const n of t)e=e.add(n);return e}const jL=new Ge(pe);function o1(){return jL}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a1(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:yc(e)?"-0":e}}function l1(t){return{integerValue:""+t}}function WL(t,e){return SL(e)?l1(e):a1(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(){this._=void 0}}function HL(t,e,n){return t instanceof _c?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof za?c1(t,e):t instanceof Ba?h1(t,e):function(r,i){const s=u1(r,i),o=p0(s)+p0(r._t);return Tp(s)&&Tp(r._t)?l1(o):a1(r.serializer,o)}(t,e)}function qL(t,e,n){return t instanceof za?c1(t,e):t instanceof Ba?h1(t,e):n}function u1(t,e){return t instanceof wc?Tp(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class _c extends Nh{}class za extends Nh{constructor(e){super(),this.elements=e}}function c1(t,e){const n=d1(e);for(const r of t.elements)n.some(i=>bn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ba extends Nh{constructor(e){super(),this.elements=e}}function h1(t,e){let n=d1(e);for(const r of t.elements)n=n.filter(i=>!bn(i,r));return{arrayValue:{values:n}}}class wc extends Nh{constructor(e,n){super(),this.serializer=e,this._t=n}}function p0(t){return Ue(t.integerValue||t.doubleValue)}function d1(t){return Og(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function GL(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof za&&r instanceof za||n instanceof Ba&&r instanceof Ba?bs(n.elements,r.elements,bn):n instanceof wc&&r instanceof wc?bn(n._t,r._t):n instanceof _c&&r instanceof _c}(t.transform,e.transform)}class KL{constructor(e,n){this.version=e,this.transformResults=n}}class Yn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Yn}static exists(e){return new Yn(void 0,e)}static updateTime(e){return new Yn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Iu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ah{}function f1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new m1(t.key,Yn.none()):new El(t.key,t.data,Yn.none());{const n=t.data,r=Xt.empty();let i=new Ge(Et.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Vi(t.key,r,new dn(i.toArray()),Yn.none())}}function QL(t,e,n){t instanceof El?function(r,i,s){const o=r.value.clone(),a=g0(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Vi?function(r,i,s){if(!Iu(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=g0(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(p1(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function ia(t,e,n,r){return t instanceof El?function(i,s,o,a){if(!Iu(i.precondition,s))return o;const l=i.value.clone(),u=y0(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Vi?function(i,s,o,a){if(!Iu(i.precondition,s))return o;const l=y0(i.fieldTransforms,a,s),u=s.data;return u.setAll(p1(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return Iu(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function YL(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=u1(r.transform,i||null);s!=null&&(n===null&&(n=Xt.empty()),n.set(r.field,s))}return n||null}function m0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&bs(n,r,(i,s)=>GL(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class El extends Ah{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Vi extends Ah{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function p1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function g0(t,e,n){const r=new Map;Te(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,qL(o,a,n[i]))}return r}function y0(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,HL(s,o,e))}return r}class m1 extends Ah{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class XL extends Ah{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JL{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&QL(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ia(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ia(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=s1();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=f1(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ie())}isEqual(e){return this.batchId===e.batchId&&bs(this.mutations,e.mutations,(n,r)=>m0(n,r))&&bs(this.baseMutations,e.baseMutations,(n,r)=>m0(n,r))}}class Fg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Te(e.mutations.length===r.length);let i=zL;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Fg(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZL{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fe,ae;function tb(t){switch(t){default:return G();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function g1(t){if(t===void 0)return ir("GRPC error has no .code"),I.UNKNOWN;switch(t){case Fe.OK:return I.OK;case Fe.CANCELLED:return I.CANCELLED;case Fe.UNKNOWN:return I.UNKNOWN;case Fe.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case Fe.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case Fe.INTERNAL:return I.INTERNAL;case Fe.UNAVAILABLE:return I.UNAVAILABLE;case Fe.UNAUTHENTICATED:return I.UNAUTHENTICATED;case Fe.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case Fe.NOT_FOUND:return I.NOT_FOUND;case Fe.ALREADY_EXISTS:return I.ALREADY_EXISTS;case Fe.PERMISSION_DENIED:return I.PERMISSION_DENIED;case Fe.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case Fe.ABORTED:return I.ABORTED;case Fe.OUT_OF_RANGE:return I.OUT_OF_RANGE;case Fe.UNIMPLEMENTED:return I.UNIMPLEMENTED;case Fe.DATA_LOSS:return I.DATA_LOSS;default:return G()}}(ae=Fe||(Fe={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return nu}static getOrCreateInstance(){return nu===null&&(nu=new $g),nu}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let nu=null;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Sl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Dh(J.min(),i,o1(),or(),ie())}}class Sl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Sl(r,n,ie(),ie(),ie())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(e,n,r,i){this.It=e,this.removedTargetIds=n,this.key=r,this.Tt=i}}class y1{constructor(e,n){this.targetId=e,this.Et=n}}class v1{constructor(e,n,r=kt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class v0{constructor(){this.At=0,this.Rt=w0(),this.vt=kt.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=ie(),n=ie(),r=ie();return this.Rt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:G()}}),new Sl(this.vt,this.bt,e,n,r)}xt(){this.Pt=!1,this.Rt=w0()}Nt(e,n){this.Pt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class nb{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=or(),this.qt=_0(),this.Ut=new Ge(pe)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}zt(e){this.forEachTarget(e,n=>{const r=this.jt(n);switch(e.state){case 0:this.Wt(n)&&r.Dt(e.resumeToken);break;case 1:r.$t(),r.Vt||r.xt(),r.Dt(e.resumeToken);break;case 2:r.$t(),r.Vt||this.removeTarget(n);break;case 3:this.Wt(n)&&(r.Mt(),r.Dt(e.resumeToken));break;case 4:this.Wt(n)&&(this.Ht(n),r.Dt(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((r,i)=>{this.Wt(i)&&n(i)})}Jt(e){var n;const r=e.targetId,i=e.Et.count,s=this.Yt(r);if(s){const o=s.target;if(Rp(o))if(i===0){const a=new z(o.path);this.Qt(r,a,_t.newNoDocument(a,J.min()))}else Te(i===1);else{const a=this.Zt(r);a!==i&&(this.Ht(r),this.Ut=this.Ut.add(r),(n=$g.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:e.Et.count}))}}}Xt(e){const n=new Map;this.Bt.forEach((s,o)=>{const a=this.Yt(o);if(a){if(s.current&&Rp(a.target)){const l=new z(a.target.path);this.Lt.get(l)!==null||this.te(o,l)||this.Qt(o,l,_t.newNoDocument(l,e))}s.St&&(n.set(o,s.Ct()),s.xt())}});let r=ie();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Yt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Lt.forEach((s,o)=>o.setReadTime(e));const i=new Dh(e,n,this.Ut,this.Lt,r);return this.Lt=or(),this.qt=_0(),this.Ut=new Ge(pe),i}Gt(e,n){if(!this.Wt(e))return;const r=this.te(e,n.key)?2:0;this.jt(e).Nt(n.key,r),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,r){if(!this.Wt(e))return;const i=this.jt(e);this.te(e,n)?i.Nt(n,1):i.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),r&&(this.Lt=this.Lt.insert(n,r))}removeTarget(e){this.Bt.delete(e)}Zt(e){const n=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let n=this.Bt.get(e);return n||(n=new v0,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new Ge(pe),this.qt=this.qt.insert(e,n)),n}Wt(e){const n=this.Yt(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new v0),this.Ft.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.Ft.getRemoteKeysForTarget(e).has(n)}}function _0(){return new Ke(z.comparator)}function w0(){return new Ke(z.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rb=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),ib=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),sb=(()=>({and:"AND",or:"OR"}))();class ob{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ec(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function _1(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function ab(t,e){return Ec(t,e.toTimestamp())}function Ln(t){return Te(!!t),J.fromTimestamp(function(e){const n=jr(e);return new qe(n.seconds,n.nanos)}(t))}function Ug(t,e){return function(n){return new Ce(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function w1(t){const e=Ce.fromString(t);return Te(I1(e)),e}function xp(t,e){return Ug(t.databaseId,e.path)}function jd(t,e){const n=w1(e);if(n.get(1)!==t.databaseId.projectId)throw new L(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new L(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new z(E1(n))}function Pp(t,e){return Ug(t.databaseId,e)}function lb(t){const e=w1(t);return e.length===4?Ce.emptyPath():E1(e)}function Op(t){return new Ce(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function E1(t){return Te(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function E0(t,e,n){return{name:xp(t,e),fields:n.value.mapValue.fields}}function ub(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(Te(u===void 0||typeof u=="string"),kt.fromBase64String(u||"")):(Te(u===void 0||u instanceof Uint8Array),kt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?I.UNKNOWN:g1(l.code);return new L(u,l.message||"")}(o);n=new v1(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=jd(t,r.document.name),s=Ln(r.document.updateTime),o=r.document.createTime?Ln(r.document.createTime):J.min(),a=new Xt({mapValue:{fields:r.document.fields}}),l=_t.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Tu(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=jd(t,r.document),s=r.readTime?Ln(r.readTime):J.min(),o=_t.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Tu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=jd(t,r.document),s=r.removedTargetIds||[];n=new Tu([],s,i,null)}else{if(!("filter"in e))return G();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new eb(i),o=r.targetId;n=new y1(o,s)}}return n}function cb(t,e){let n;if(e instanceof El)n={update:E0(t,e.key,e.value)};else if(e instanceof m1)n={delete:xp(t,e.key)};else if(e instanceof Vi)n={update:E0(t,e.key,e.data),updateMask:_b(e.fieldMask)};else{if(!(e instanceof XL))return G();n={verify:xp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof _c)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof za)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ba)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof wc)return{fieldPath:s.field.canonicalString(),increment:o._t};throw G()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:ab(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:G()}(t,e.precondition)),n}function hb(t,e){return t&&t.length>0?(Te(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Ln(r.updateTime):Ln(i);return s.isEqual(J.min())&&(s=Ln(i)),new KL(s,r.transformResults||[])}(n,e))):[]}function db(t,e){return{documents:[Pp(t,e.path)]}}function fb(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Pp(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Pp(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return C1(wn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:Gi(c.field),direction:gb(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.useProto3Json||Th(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function pb(t){let e=lb(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Te(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const h=S1(c);return h instanceof wn&&KI(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new na(Ki(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Th(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new vc(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new vc(d,h)}(n.endAt)),FL(e,i,o,s,a,"F",l,u)}function mb(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return G()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function S1(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Ki(e.unaryFilter.field);return ze.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Ki(e.unaryFilter.field);return ze.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ki(e.unaryFilter.field);return ze.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Ki(e.unaryFilter.field);return ze.create(s,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(t):t.fieldFilter!==void 0?function(e){return ze.create(Ki(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return wn.create(e.compositeFilter.filters.map(n=>S1(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return G()}}(e.compositeFilter.op))}(t):G()}function gb(t){return rb[t]}function yb(t){return ib[t]}function vb(t){return sb[t]}function Gi(t){return{fieldPath:t.canonicalString()}}function Ki(t){return Et.fromServerFormat(t.fieldPath)}function C1(t){return t instanceof ze?function(e){if(e.op==="=="){if(u0(e.value))return{unaryFilter:{field:Gi(e.field),op:"IS_NAN"}};if(l0(e.value))return{unaryFilter:{field:Gi(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(u0(e.value))return{unaryFilter:{field:Gi(e.field),op:"IS_NOT_NAN"}};if(l0(e.value))return{unaryFilter:{field:Gi(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Gi(e.field),op:yb(e.op),value:e.value}}}(t):t instanceof wn?function(e){const n=e.getFilters().map(r=>C1(r));return n.length===1?n[0]:{compositeFilter:{op:vb(e.op),filters:n}}}(t):G()}function _b(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function I1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e,n,r,i,s=J.min(),o=J.min(),a=kt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new vi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new vi(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new vi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb{constructor(e){this.se=e}}function Eb(t){const e=pb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ap(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{constructor(){this.He=new Cb}addToCollectionParentIndex(e,n){return this.He.add(n),N.resolve()}getCollectionParents(e,n){return N.resolve(this.He.getEntries(n))}addFieldIndex(e,n){return N.resolve()}deleteFieldIndex(e,n){return N.resolve()}getDocumentsMatchingTarget(e,n){return N.resolve(null)}getIndexType(e,n){return N.resolve(0)}getFieldIndexes(e,n){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,n){return N.resolve(Br.min())}getMinOffsetFromCollectionGroup(e,n){return N.resolve(Br.min())}updateCollectionGroup(e,n,r){return N.resolve()}updateIndexEntries(e,n){return N.resolve()}}class Cb{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ge(Ce.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ge(Ce.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new Vs(0)}static bn(){return new Vs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ib{constructor(){this.changes=new so(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,_t.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?N.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kb{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ia(r.mutation,i,dn.empty(),qe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ie()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ie()){const i=hi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Bo();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=hi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ie()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=or();const o=ra(),a=ra();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Vi)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),ia(c.mutation,u,c.mutation.getFieldMask(),qe.now())):o.set(u.key,dn.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new Tb(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ra();let i=new Ke((o,a)=>o-a),s=ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||dn.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||ie()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=s1();c.forEach(d=>{if(!s.has(d)){const p=f1(n.get(d),r.get(d));p!==null&&h.set(d,p),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return N.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return z.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):e1(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):N.resolve(hi());let a=-1,l=s;return o.next(u=>N.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?N.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,ie())).next(c=>({batchId:a,changes:i1(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new z(n)).next(r=>{let i=Bo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Bo();return this.indexManager.getCollectionParents(e,i).next(o=>N.forEach(o,a=>{const l=function(u,c){return new wl(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,_t.newInvalidDocument(u)))});let o=Bo();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&ia(u.mutation,l,dn.empty(),qe.now()),Rh(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return N.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:Ln(r.createTime)}),N.resolve()}getNamedQuery(e,n){return N.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(r){return{name:r.name,query:Eb(r.bundledQuery),readTime:Ln(r.readTime)}}(n)),N.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(){this.overlays=new Ke(z.comparator),this.ts=new Map}getOverlay(e,n){return N.resolve(this.overlays.get(n))}getOverlays(e,n){const r=hi();return N.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.re(e,n,s)}),N.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.ts.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ts.delete(r)),N.resolve()}getOverlaysForCollection(e,n,r){const i=hi(),s=n.length+1,o=new z(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return N.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ke((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=hi(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=hi(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return N.resolve(a)}re(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ts.get(i.largestBatchId).delete(r.key);this.ts.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new ZL(n,r));let s=this.ts.get(n);s===void 0&&(s=ie(),this.ts.set(n,s)),this.ts.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(){this.es=new Ge(Xe.ns),this.ss=new Ge(Xe.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,n){const r=new Xe(e,n);this.es=this.es.add(r),this.ss=this.ss.add(r)}os(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.us(new Xe(e,n))}cs(e,n){e.forEach(r=>this.removeReference(r,n))}hs(e){const n=new z(new Ce([])),r=new Xe(n,e),i=new Xe(n,e+1),s=[];return this.ss.forEachInRange([r,i],o=>{this.us(o),s.push(o.key)}),s}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const n=new z(new Ce([])),r=new Xe(n,e),i=new Xe(n,e+1);let s=ie();return this.ss.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Xe(e,0),r=this.es.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Xe{constructor(e,n){this.key=e,this.ds=n}static ns(e,n){return z.comparator(e.key,n.key)||pe(e.ds,n.ds)}static rs(e,n){return pe(e.ds,n.ds)||z.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this._s=new Ge(Xe.ns)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new JL(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this._s=this._s.add(new Xe(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return N.resolve(o)}lookupMutationBatch(e,n){return N.resolve(this.gs(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ys(r),s=i<0?0:i;return N.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Xe(n,0),i=new Xe(n,Number.POSITIVE_INFINITY),s=[];return this._s.forEachInRange([r,i],o=>{const a=this.gs(o.ds);s.push(a)}),N.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ge(pe);return n.forEach(i=>{const s=new Xe(i,0),o=new Xe(i,Number.POSITIVE_INFINITY);this._s.forEachInRange([s,o],a=>{r=r.add(a.ds)})}),N.resolve(this.ps(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;z.isDocumentKey(s)||(s=s.child(""));const o=new Xe(new z(s),0);let a=new Ge(pe);return this._s.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.ds)),!0)},o),N.resolve(this.ps(a))}ps(e){const n=[];return e.forEach(r=>{const i=this.gs(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Te(this.Is(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this._s;return N.forEach(n.mutations,i=>{const s=new Xe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this._s=r})}En(e){}containsKey(e,n){const r=new Xe(n,0),i=this._s.firstAfterOrEqual(r);return N.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}Is(e,n){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const n=this.ys(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Db{constructor(e){this.Ts=e,this.docs=new Ke(z.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ts(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return N.resolve(r?r.document.mutableCopy():_t.newInvalidDocument(n))}getEntries(e,n){let r=or();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():_t.newInvalidDocument(i))}),N.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=or();const o=n.path,a=new z(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||_L(vL(c),r)<=0||(i.has(c.key)||Rh(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return N.resolve(s)}getAllFromCollectionGroup(e,n,r,i){G()}Es(e,n){return N.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new xb(this)}getSize(e){return N.resolve(this.size)}}class xb extends Ib{constructor(e){super(),this.Jn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Jn.addEntry(e,i)):this.Jn.removeEntry(r)}),N.waitFor(n)}getFromCache(e,n){return this.Jn.getEntry(e,n)}getAllFromCache(e,n){return this.Jn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pb{constructor(e){this.persistence=e,this.As=new so(n=>Mg(n),Lg),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Rs=0,this.vs=new Vg,this.targetCount=0,this.bs=Vs.vn()}forEachTarget(e,n){return this.As.forEach((r,i)=>n(i)),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Rs&&(this.Rs=n),N.resolve()}Sn(e){this.As.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new Vs(n),this.highestTargetId=n),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,n){return this.Sn(n),this.targetCount+=1,N.resolve()}updateTargetData(e,n){return this.Sn(n),N.resolve()}removeTargetData(e,n){return this.As.delete(n.target),this.vs.hs(n.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.As.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),N.waitFor(s).next(()=>i)}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,n){const r=this.As.get(n)||null;return N.resolve(r)}addMatchingKeys(e,n,r){return this.vs.os(n,r),N.resolve()}removeMatchingKeys(e,n,r){this.vs.cs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),N.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.vs.hs(n),N.resolve()}getMatchingKeysForTargetId(e,n){const r=this.vs.fs(n);return N.resolve(r)}containsKey(e,n){return N.resolve(this.vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ob{constructor(e,n){this.Ps={},this.overlays={},this.Vs=new Pg(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new Pb(this),this.indexManager=new Sb,this.remoteDocumentCache=function(r){return new Db(r)}(r=>this.referenceDelegate.Cs(r)),this.serializer=new wb(n),this.xs=new Rb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Nb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Ps[e.toKey()];return r||(r=new Ab(n,this.referenceDelegate),this.Ps[e.toKey()]=r),r}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,n,r){$("MemoryPersistence","Starting transaction:",e);const i=new Mb(this.Vs.next());return this.referenceDelegate.Ns(),r(i).next(s=>this.referenceDelegate.ks(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Os(e,n){return N.or(Object.values(this.Ps).map(r=>()=>r.containsKey(e,n)))}}class Mb extends EL{constructor(e){super(),this.currentSequenceNumber=e}}class zg{constructor(e){this.persistence=e,this.$s=new Vg,this.Ms=null}static Fs(e){return new zg(e)}get Bs(){if(this.Ms)return this.Ms;throw G()}addReference(e,n,r){return this.$s.addReference(r,n),this.Bs.delete(r.toString()),N.resolve()}removeReference(e,n,r){return this.$s.removeReference(r,n),this.Bs.add(r.toString()),N.resolve()}markPotentiallyOrphaned(e,n){return this.Bs.add(n.toString()),N.resolve()}removeTarget(e,n){this.$s.hs(n.targetId).forEach(i=>this.Bs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Bs.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ns(){this.Ms=new Set}ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.Bs,r=>{const i=z.fromPath(r);return this.Ls(e,i).next(s=>{s||n.removeEntry(i,J.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ls(e,n).next(r=>{r?this.Bs.delete(n.toString()):this.Bs.add(n.toString())})}Cs(e){return 0}Ls(e,n){return N.or([()=>N.resolve(this.$s.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Vi=r,this.Si=i}static Di(e,n){let r=ie(),i=ie();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Bg(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(){this.Ci=!1}initialize(e,n){this.xi=e,this.indexManager=n,this.Ci=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ni(e,n).next(s=>s||this.ki(e,n,i,r)).next(s=>s||this.Oi(e,n))}Ni(e,n){if(f0(n))return N.resolve(null);let r=sr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Ap(n,null,"F"),r=sr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ie(...s);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.$i(n,a);return this.Mi(n,u,o,l.readTime)?this.Ni(e,Ap(n,null,"F")):this.Fi(e,u,n,l)}))})))}ki(e,n,r,i){return f0(n)||i.isEqual(J.min())?this.Oi(e,n):this.xi.getDocuments(e,r).next(s=>{const o=this.$i(n,s);return this.Mi(n,o,r,i)?this.Oi(e,n):(r0()<=ce.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Dp(n)),this.Fi(e,o,n,yL(i,-1)))})}$i(e,n){let r=new Ge(n1(e));return n.forEach((i,s)=>{Rh(e,s)&&(r=r.add(s))}),r}Mi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Oi(e,n){return r0()<=ce.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",Dp(n)),this.xi.getDocumentsMatchingQuery(e,n,Br.min())}Fi(e,n,r,i){return this.xi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb{constructor(e,n,r,i){this.persistence=e,this.Bi=n,this.serializer=i,this.Li=new Ke(pe),this.qi=new so(s=>Mg(s),Lg),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(r)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new kb(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Li))}}function Fb(t,e,n,r){return new bb(t,e,n,r)}async function T1(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Gi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=ie();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({Qi:u,removedBatchIds:o,addedBatchIds:a}))})})}function $b(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=N.resolve();return h.forEach(p=>{d=d.next(()=>u.getEntry(a,p)).next(v=>{const _=l.docVersions.get(p);Te(_!==null),v.version.compareTo(_)<0&&(c.applyToRemoteDocument(v,l),v.isValidDocument()&&(v.setReadTime(l.commitVersion),u.addEntry(v)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=ie();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function k1(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ds.getLastRemoteSnapshotVersion(n))}function Ub(t,e){const n=Z(t),r=e.snapshotVersion;let i=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ki.newChangeBuffer({trackRemovals:!0});i=n.Li;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Ds.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Ds.addMatchingKeys(s,c.addedDocuments,h)));let p=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(kt.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):c.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(c.resumeToken,r)),i=i.insert(h,p),function(v,_,g){return v.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:g.addedDocuments.size+g.modifiedDocuments.size+g.removedDocuments.size>0}(d,p,c)&&a.push(n.Ds.updateTargetData(s,p))});let l=or(),u=ie();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(Vb(s,o,e.documentUpdates).next(c=>{l=c.zi,u=c.ji})),!r.isEqual(J.min())){const c=n.Ds.getLastRemoteSnapshotVersion(s).next(h=>n.Ds.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return N.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Li=i,s))}function Vb(t,e,n){let r=ie(),i=ie();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=or();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(J.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):$("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{zi:o,ji:i}})}function zb(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Bb(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ds.getTargetData(r,e).next(s=>s?(i=s,N.resolve(i)):n.Ds.allocateTargetId(r).next(o=>(i=new vi(e,o,0,r.currentSequenceNumber),n.Ds.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Li.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Li=n.Li.insert(r.targetId,r),n.qi.set(e,r.targetId)),r})}async function Mp(t,e,n){const r=Z(t),i=r.Li.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!_l(o))throw o;$("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Li=r.Li.remove(e),r.qi.delete(i.target)}function S0(t,e,n){const r=Z(t);let i=J.min(),s=ie();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=Z(a),h=c.qi.get(u);return h!==void 0?N.resolve(c.Li.get(h)):c.Ds.getTargetData(l,u)}(r,o,sr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ds.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Bi.getDocumentsMatchingQuery(o,e,n?i:J.min(),n?s:ie())).next(a=>(jb(r,$L(e),a),{documents:a,Wi:s})))}function jb(t,e,n){let r=t.Ui.get(e)||J.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ui.set(e,r)}class C0{constructor(){this.activeTargetIds=o1()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Wb{constructor(){this.Br=new C0,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,n,r){this.Lr[e]=n}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new C0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hb{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ru=null;function Wd(){return ru===null?ru=268435456+Math.round(2147483648*Math.random()):ru++,"0x"+ru.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gb{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt="WebChannelConnection";class Kb extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.ro=n+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,n,r,i,s){const o=Wd(),a=this.ao(e,n);$("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this.ho(l,i,s),this.lo(e,a,l,r).then(u=>($("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw gc("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}fo(e,n,r,i,s,o){return this.co(e,n,r,i,s)}ho(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+ro,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ao(e,n){const r=qb[e];return`${this.ro}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,r,i){const s=Wd();return new Promise((o,a)=>{const l=new aL;l.setWithCredentials(!0),l.listenOnce(iL.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Bd.NO_ERROR:const c=l.getResponseJson();$(gt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Bd.TIMEOUT:$(gt,`RPC '${e}' ${s} timed out`),a(new L(I.DEADLINE_EXCEEDED,"Request time out"));break;case Bd.HTTP_ERROR:const h=l.getStatus();if($(gt,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const v=function(_){const g=_.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(g)>=0?g:I.UNKNOWN}(p.status);a(new L(v,p.message))}else a(new L(I.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new L(I.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{$(gt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);$(gt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}wo(e,n,r){const i=Wd(),s=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=nL(),a=rL(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new oL({})),this.ho(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=s.join("");$(gt,`Creating RPC '${e}' stream ${i}: ${u}`,l);const c=o.createWebChannel(u,l);let h=!1,d=!1;const p=new Gb({Wr:_=>{d?$(gt,`Not sending because RPC '${e}' stream ${i} is closed:`,_):(h||($(gt,`Opening RPC '${e}' stream ${i} transport.`),c.open(),h=!0),$(gt,`RPC '${e}' stream ${i} sending:`,_),c.send(_))},Hr:()=>c.close()}),v=(_,g,m)=>{_.listen(g,f=>{try{m(f)}catch(y){setTimeout(()=>{throw y},0)}})};return v(c,Zl.EventType.OPEN,()=>{d||$(gt,`RPC '${e}' stream ${i} transport opened.`)}),v(c,Zl.EventType.CLOSE,()=>{d||(d=!0,$(gt,`RPC '${e}' stream ${i} transport closed`),p.so())}),v(c,Zl.EventType.ERROR,_=>{d||(d=!0,gc(gt,`RPC '${e}' stream ${i} transport errored:`,_),p.so(new L(I.UNAVAILABLE,"The operation could not be completed")))}),v(c,Zl.EventType.MESSAGE,_=>{var g;if(!d){const m=_.data[0];Te(!!m);const f=m,y=f.error||((g=f[0])===null||g===void 0?void 0:g.error);if(y){$(gt,`RPC '${e}' stream ${i} received error:`,y);const w=y.status;let S=function(x){const D=Fe[x];if(D!==void 0)return g1(D)}(w),k=y.message;S===void 0&&(S=I.INTERNAL,k="Unknown error status: "+w+" with message "+y.message),d=!0,p.so(new L(S,k)),c.close()}else $(gt,`RPC '${e}' stream ${i} received:`,m),p.io(m)}}),v(a,sL.STAT_EVENT,_=>{_.stat===t0.PROXY?$(gt,`RPC '${e}' stream ${i} detected buffering proxy`):_.stat===t0.NOPROXY&&$(gt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{p.no()},0),p}}function Hd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xh(t){return new ob(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R1{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ws=e,this.timerId=n,this._o=r,this.mo=i,this.yo=s,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),r=Math.max(0,Date.now()-this.To),i=Math.max(0,n-r);i>0&&$("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,i,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N1{constructor(e,n,r,i,s,o,a,l){this.Ws=e,this.bo=r,this.Po=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new R1(e,n)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,n){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(ir(n.toString()),ir("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Vo===n&&this.Ko(r,i)},r=>{e(()=>{const i=new L(I.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Go(i)})})}Ko(e,n){const r=this.Uo(this.Vo);this.stream=this.Qo(e,n),this.stream.Jr(()=>{r(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(i=>{r(()=>this.Go(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return $("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Ws.enqueueAndForget(()=>this.Vo===e?n():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Qb extends N1{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}Qo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Co.reset();const n=ub(this.serializer,e),r=function(i){if(!("targetChange"in i))return J.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?J.min():s.readTime?Ln(s.readTime):J.min()}(e);return this.listener.zo(n,r)}jo(e){const n={};n.database=Op(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;return o=Rp(a)?{documents:db(i,a)}:{query:fb(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=_1(i,s.resumeToken):s.snapshotVersion.compareTo(J.min())>0&&(o.readTime=Ec(i,s.snapshotVersion.toTimestamp())),o}(this.serializer,e);const r=mb(this.serializer,e);r&&(n.labels=r),this.Fo(n)}Wo(e){const n={};n.database=Op(this.serializer),n.removeTarget=e,this.Fo(n)}}class Yb extends N1{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Te(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const n=hb(e.writeResults,e.commitTime),r=Ln(e.commitTime);return this.listener.Zo(r,n)}return Te(!e.writeResults||e.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=Op(this.serializer),this.Fo(e)}Yo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>cb(this.serializer,r))};this.Fo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.eu=!1}nu(){if(this.eu)throw new L(I.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,r){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.co(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new L(I.UNKNOWN,i.toString())})}fo(e,n,r,i){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.fo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new L(I.UNKNOWN,s.toString())})}terminate(){this.eu=!0}}class Jb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,e==="Online"&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(ir(n),this.ru=!1):$("OnlineStateTracker",n)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=s,this._u.qr(o=>{r.enqueueAndForget(async()=>{zi(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=Z(a);l.du.add(4),await Cl(l),l.mu.set("Unknown"),l.du.delete(4),await Ph(l)}(this))})}),this.mu=new Jb(r,i)}}async function Ph(t){if(zi(t))for(const e of t.wu)await e(!0)}async function Cl(t){for(const e of t.wu)await e(!1)}function A1(t,e){const n=Z(t);n.fu.has(e.targetId)||(n.fu.set(e.targetId,e),Hg(n)?Wg(n):oo(n).No()&&jg(n,e))}function D1(t,e){const n=Z(t),r=oo(n);n.fu.delete(e),r.No()&&x1(n,e),n.fu.size===0&&(r.No()?r.$o():zi(n)&&n.mu.set("Unknown"))}function jg(t,e){t.gu.Ot(e.targetId),oo(t).jo(e)}function x1(t,e){t.gu.Ot(e),oo(t).Wo(e)}function Wg(t){t.gu=new nb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.fu.get(e)||null}),oo(t).start(),t.mu.ou()}function Hg(t){return zi(t)&&!oo(t).xo()&&t.fu.size>0}function zi(t){return Z(t).du.size===0}function P1(t){t.gu=void 0}async function eF(t){t.fu.forEach((e,n)=>{jg(t,e)})}async function tF(t,e){P1(t),Hg(t)?(t.mu.au(e),Wg(t)):t.mu.set("Unknown")}async function nF(t,e,n){if(t.mu.set("Online"),e instanceof v1&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.fu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.fu.delete(o),r.gu.removeTarget(o))}(t,e)}catch(r){$("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Sc(t,r)}else if(e instanceof Tu?t.gu.Kt(e):e instanceof y1?t.gu.Jt(e):t.gu.zt(e),!n.isEqual(J.min()))try{const r=await k1(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.gu.Xt(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.fu.get(l);u&&i.fu.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i.fu.get(a);if(!l)return;i.fu.set(a,l.withResumeToken(kt.EMPTY_BYTE_STRING,l.snapshotVersion)),x1(i,a);const u=new vi(l.target,a,1,l.sequenceNumber);jg(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){$("RemoteStore","Failed to raise snapshot:",r),await Sc(t,r)}}async function Sc(t,e,n){if(!_l(e))throw e;t.du.add(1),await Cl(t),t.mu.set("Offline"),n||(n=()=>k1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await n(),t.du.delete(1),await Ph(t)})}function O1(t,e){return e().catch(n=>Sc(t,n,e))}async function Oh(t){const e=Z(t),n=Wr(e);let r=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;rF(e);)try{const i=await zb(e.localStore,r);if(i===null){e.lu.length===0&&n.$o();break}r=i.batchId,iF(e,i)}catch(i){await Sc(e,i)}M1(e)&&L1(e)}function rF(t){return zi(t)&&t.lu.length<10}function iF(t,e){t.lu.push(e);const n=Wr(t);n.No()&&n.Jo&&n.Yo(e.mutations)}function M1(t){return zi(t)&&!Wr(t).xo()&&t.lu.length>0}function L1(t){Wr(t).start()}async function sF(t){Wr(t).tu()}async function oF(t){const e=Wr(t);for(const n of t.lu)e.Yo(n.mutations)}async function aF(t,e,n){const r=t.lu.shift(),i=Fg.from(r,e,n);await O1(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Oh(t)}async function lF(t,e){e&&Wr(t).Jo&&await async function(n,r){if(i=r.code,tb(i)&&i!==I.ABORTED){const s=n.lu.shift();Wr(n).Oo(),await O1(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Oh(n)}var i}(t,e),M1(t)&&L1(t)}async function T0(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const r=zi(n);n.du.add(3),await Cl(n),r&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.du.delete(3),await Ph(n)}async function uF(t,e){const n=Z(t);e?(n.du.delete(2),await Ph(n)):e||(n.du.add(2),await Cl(n),n.mu.set("Unknown"))}function oo(t){return t.yu||(t.yu=function(e,n,r){const i=Z(e);return i.nu(),new Qb(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{Jr:eF.bind(null,t),Zr:tF.bind(null,t),zo:nF.bind(null,t)}),t.wu.push(async e=>{e?(t.yu.Oo(),Hg(t)?Wg(t):t.mu.set("Unknown")):(await t.yu.stop(),P1(t))})),t.yu}function Wr(t){return t.pu||(t.pu=function(e,n,r){const i=Z(e);return i.nu(),new Yb(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{Jr:sF.bind(null,t),Zr:lF.bind(null,t),Xo:oF.bind(null,t),Zo:aF.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),await Oh(t)):(await t.pu.stop(),t.lu.length>0&&($("RemoteStore",`Stopping write stream with ${t.lu.length} pending writes`),t.lu=[]))})),t.pu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new br,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new qg(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Gg(t,e){if(ir("AsyncQueue",`${e}: ${t}`),_l(t))return new L(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e){this.comparator=e?(n,r)=>e(n,r)||z.comparator(n.key,r.key):(n,r)=>z.comparator(n.key,r.key),this.keyedMap=Bo(),this.sortedSet=new Ke(this.comparator)}static emptySet(e){return new Ss(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ss)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ss;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0{constructor(){this.Iu=new Ke(z.comparator)}track(e){const n=e.doc.key,r=this.Iu.get(n);r?e.type!==0&&r.type===3?this.Iu=this.Iu.insert(n,e):e.type===3&&r.type!==1?this.Iu=this.Iu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Iu=this.Iu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Iu=this.Iu.remove(n):e.type===1&&r.type===2?this.Iu=this.Iu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):G():this.Iu=this.Iu.insert(n,e)}Tu(){const e=[];return this.Iu.inorderTraversal((n,r)=>{e.push(r)}),e}}class zs{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new zs(e,n,Ss.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&kh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cF{constructor(){this.Eu=void 0,this.listeners=[]}}class hF{constructor(){this.queries=new so(e=>t1(e),kh),this.onlineState="Unknown",this.Au=new Set}}async function dF(t,e){const n=Z(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new cF),i)try{s.Eu=await n.onListen(r)}catch(o){const a=Gg(o,`Initialization of query '${Dp(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Ru(n.onlineState),s.Eu&&e.vu(s.Eu)&&Kg(n)}async function fF(t,e){const n=Z(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function pF(t,e){const n=Z(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.vu(i)&&(r=!0);o.Eu=i}}r&&Kg(n)}function mF(t,e,n){const r=Z(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Kg(t){t.Au.forEach(e=>{e.next()})}class gF{constructor(e,n,r){this.query=e,this.bu=n,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=r||{}}vu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new zs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),n=!0):this.Du(e,this.onlineState)&&(this.Cu(e),n=!0),this.Vu=e,n}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let n=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),n=!0),n}Du(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.xu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Cu(e){e=zs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b1{constructor(e){this.key=e}}class F1{constructor(e){this.key=e}}class yF{constructor(e,n){this.query=e,this.Lu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=ie(),this.mutatedKeys=ie(),this.Ku=n1(e),this.Gu=new Ss(this.Ku)}get Qu(){return this.Lu}zu(e,n){const r=n?n.ju:new k0,i=n?n.Gu:this.Gu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),p=Rh(this.query,h)?h:null,v=!!d&&this.mutatedKeys.has(d.key),_=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let g=!1;d&&p?d.data.isEqual(p.data)?v!==_&&(r.track({type:3,doc:p}),g=!0):this.Wu(d,p)||(r.track({type:2,doc:p}),g=!0,(l&&this.Ku(p,l)>0||u&&this.Ku(p,u)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),g=!0):d&&!p&&(r.track({type:1,doc:d}),g=!0,(l||u)&&(a=!0)),g&&(p?(o=o.add(p),s=_?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Gu:o,ju:r,Mi:a,mutatedKeys:s}}Wu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const s=e.ju.Tu();s.sort((u,c)=>function(h,d){const p=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return p(h)-p(d)}(u.type,c.type)||this.Ku(u.doc,c.doc)),this.Hu(r);const o=n?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,l=a!==this.qu;return this.qu=a,s.length!==0||l?{snapshot:new zs(this.query,e.Gu,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new k0,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=ie(),this.Gu.forEach(r=>{this.Zu(r.key)&&(this.Uu=this.Uu.add(r.key))});const n=[];return e.forEach(r=>{this.Uu.has(r)||n.push(new F1(r))}),this.Uu.forEach(r=>{e.has(r)||n.push(new b1(r))}),n}Xu(e){this.Lu=e.Wi,this.Uu=ie();const n=this.zu(e.documents);return this.applyChanges(n,!0)}tc(){return zs.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class vF{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class _F{constructor(e){this.key=e,this.ec=!1}}class wF{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new so(a=>t1(a),kh),this.ic=new Map,this.rc=new Set,this.oc=new Ke(z.comparator),this.uc=new Map,this.cc=new Vg,this.ac={},this.hc=new Map,this.lc=Vs.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function EF(t,e){const n=xF(t);let r,i;const s=n.sc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.tc();else{const o=await Bb(n.localStore,sr(e));n.isPrimaryClient&&A1(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await SF(n,e,r,a==="current",o.resumeToken)}return i}async function SF(t,e,n,r,i){t.dc=(h,d,p)=>async function(v,_,g,m){let f=_.view.zu(g);f.Mi&&(f=await S0(v.localStore,_.query,!1).then(({documents:S})=>_.view.zu(S,f)));const y=m&&m.targetChanges.get(_.targetId),w=_.view.applyChanges(f,v.isPrimaryClient,y);return N0(v,_.targetId,w.Yu),w.snapshot}(t,h,d,p);const s=await S0(t.localStore,e,!0),o=new yF(e,s.Wi),a=o.zu(s.documents),l=Sl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);N0(t,n,u.Yu);const c=new vF(e,n,o);return t.sc.set(e,c),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),u.snapshot}async function CF(t,e){const n=Z(t),r=n.sc.get(e),i=n.ic.get(r.targetId);if(i.length>1)return n.ic.set(r.targetId,i.filter(s=>!kh(s,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Mp(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),D1(n.remoteStore,r.targetId),Lp(n,r.targetId)}).catch(vl)):(Lp(n,r.targetId),await Mp(n.localStore,r.targetId,!0))}async function IF(t,e,n){const r=PF(t);try{const i=await function(s,o){const a=Z(s),l=qe.now(),u=o.reduce((d,p)=>d.add(p.key),ie());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=or(),v=ie();return a.Ki.getEntries(d,u).next(_=>{p=_,p.forEach((g,m)=>{m.isValidDocument()||(v=v.add(g))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(_=>{c=_;const g=[];for(const m of o){const f=YL(m,c.get(m.key).overlayedDocument);f!=null&&g.push(new Vi(m.key,f,HI(f.value.mapValue),Yn.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,g,o)}).next(_=>{h=_;const g=_.applyToLocalDocumentSet(c,v);return a.documentOverlayCache.saveOverlays(d,_.batchId,g)})}).then(()=>({batchId:h.batchId,changes:i1(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.ac[s.currentUser.toKey()];l||(l=new Ke(pe)),l=l.insert(o,a),s.ac[s.currentUser.toKey()]=l}(r,i.batchId,n),await Il(r,i.changes),await Oh(r.remoteStore)}catch(i){const s=Gg(i,"Failed to persist write");n.reject(s)}}async function $1(t,e){const n=Z(t);try{const r=await Ub(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.uc.get(s);o&&(Te(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ec=!0:i.modifiedDocuments.size>0?Te(o.ec):i.removedDocuments.size>0&&(Te(o.ec),o.ec=!1))}),await Il(n,r,e)}catch(r){await vl(r)}}function R0(t,e,n){const r=Z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.sc.forEach((s,o)=>{const a=o.view.Ru(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=Z(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.Ru(o)&&(l=!0)}),l&&Kg(a)}(r.eventManager,e),i.length&&r.nc.zo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function TF(t,e,n){const r=Z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.uc.get(e),s=i&&i.key;if(s){let o=new Ke(z.comparator);o=o.insert(s,_t.newNoDocument(s,J.min()));const a=ie().add(s),l=new Dh(J.min(),new Map,new Ge(pe),o,a);await $1(r,l),r.oc=r.oc.remove(s),r.uc.delete(e),Qg(r)}else await Mp(r.localStore,e,!1).then(()=>Lp(r,e,n)).catch(vl)}async function kF(t,e){const n=Z(t),r=e.batch.batchId;try{const i=await $b(n.localStore,e);V1(n,r,null),U1(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Il(n,i)}catch(i){await vl(i)}}async function RF(t,e,n){const r=Z(t);try{const i=await function(s,o){const a=Z(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(Te(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);V1(r,e,n),U1(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Il(r,i)}catch(i){await vl(i)}}function U1(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function V1(t,e,n){const r=Z(t);let i=r.ac[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.ac[r.currentUser.toKey()]=i}}function Lp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ic.get(e))t.sc.delete(r),n&&t.nc.wc(r,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.hs(e).forEach(r=>{t.cc.containsKey(r)||z1(t,r)})}function z1(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(D1(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),Qg(t))}function N0(t,e,n){for(const r of n)r instanceof b1?(t.cc.addReference(r.key,e),NF(t,r)):r instanceof F1?($("SyncEngine","Document no longer in limbo: "+r.key),t.cc.removeReference(r.key,e),t.cc.containsKey(r.key)||z1(t,r.key)):G()}function NF(t,e){const n=e.key,r=n.path.canonicalString();t.oc.get(n)||t.rc.has(r)||($("SyncEngine","New document in limbo: "+n),t.rc.add(r),Qg(t))}function Qg(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new z(Ce.fromString(e)),r=t.lc.next();t.uc.set(r,new _F(n)),t.oc=t.oc.insert(n,r),A1(t.remoteStore,new vi(sr(JI(n.path)),r,2,Pg.ct))}}async function Il(t,e,n){const r=Z(t),i=[],s=[],o=[];r.sc.isEmpty()||(r.sc.forEach((a,l)=>{o.push(r.dc(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Bg.Di(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.nc.zo(i),await async function(a,l){const u=Z(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>N.forEach(l,h=>N.forEach(h.Vi,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>N.forEach(h.Si,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!_l(c))throw c;$("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.Li.get(h),p=d.snapshotVersion,v=d.withLastLimboFreeSnapshotVersion(p);u.Li=u.Li.insert(h,v)}}}(r.localStore,s))}async function AF(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){$("SyncEngine","User change. New user:",e.toKey());const r=await T1(n.localStore,e);n.currentUser=e,function(i,s){i.hc.forEach(o=>{o.forEach(a=>{a.reject(new L(I.CANCELLED,s))})}),i.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Il(n,r.Qi)}}function DF(t,e){const n=Z(t),r=n.uc.get(e);if(r&&r.ec)return ie().add(r.key);{let i=ie();const s=n.ic.get(e);if(!s)return i;for(const o of s){const a=n.sc.get(o);i=i.unionWith(a.view.Qu)}return i}}function xF(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=$1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=DF.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=TF.bind(null,e),e.nc.zo=pF.bind(null,e.eventManager),e.nc.wc=mF.bind(null,e.eventManager),e}function PF(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=kF.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=RF.bind(null,e),e}class A0{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=xh(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return Fb(this.persistence,new Lb,e.initialUser,this.serializer)}createPersistence(e){return new Ob(zg.Fs,this.serializer)}createSharedClientState(e){return new Wb}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class OF{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>R0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=AF.bind(null,this.syncEngine),await uF(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new hF}createDatastore(e){const n=xh(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new Kb(i));var i;return function(s,o,a,l){return new Xb(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>R0(this.syncEngine,a,0),o=I0.D()?new I0:new Hb,new Zb(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new wF(r,i,s,o,a,l);return u&&(c.fc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Z(e);$("RemoteStore","RemoteStore shutting down."),n.du.add(5),await Cl(n),n._u.shutdown(),n.mu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MF{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):ir("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LF{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=yt.UNAUTHENTICATED,this.clientId=zI.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{$("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>($("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new L(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new br;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Gg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function qd(t,e){t.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await T1(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function D0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await FF(t);$("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>T0(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>T0(e.remoteStore,s)),t._onlineComponents=e}function bF(t){return t.name==="FirebaseError"?t.code===I.FAILED_PRECONDITION||t.code===I.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function FF(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){$("FirestoreClient","Using user provided OfflineComponentProvider");try{await qd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!bF(n))throw n;gc("Error using user provided cache. Falling back to memory cache: "+n),await qd(t,new A0)}}else $("FirestoreClient","Using default OfflineComponentProvider"),await qd(t,new A0);return t._offlineComponents}async function B1(t){return t._onlineComponents||(t._uninitializedComponentsProvider?($("FirestoreClient","Using user provided OnlineComponentProvider"),await D0(t,t._uninitializedComponentsProvider._online)):($("FirestoreClient","Using default OnlineComponentProvider"),await D0(t,new OF))),t._onlineComponents}function $F(t){return B1(t).then(e=>e.syncEngine)}async function UF(t){const e=await B1(t),n=e.eventManager;return n.onListen=EF.bind(null,e.syncEngine),n.onUnlisten=CF.bind(null,e.syncEngine),n}function VF(t,e,n={}){const r=new br;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new MF({next:h=>{s.enqueueAndForget(()=>fF(i,c)),h.fromCache&&a.source==="server"?l.reject(new L(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new gF(o,u,{includeMetadataChanges:!0,xu:!0});return dF(i,c)}(await UF(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x0=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j1(t,e,n){if(!n)throw new L(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function zF(t,e,n,r){if(e===!0&&r===!0)throw new L(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function P0(t){if(!z.isDocumentKey(t))throw new L(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function O0(t){if(z.isDocumentKey(t))throw new L(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Mh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function Cc(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new L(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Mh(t);throw new L(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new L(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new L(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,zF("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new M0({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new L(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new L(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new M0(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new lL;switch(n.type){case"firstParty":return new dL(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new L(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=x0.get(e);n&&($("ComponentProvider","Removing Datastore"),x0.delete(e),n.terminate())}(this),Promise.resolve()}}function BF(t,e,n,r={}){var i;const s=(t=Cc(t,Lh))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&gc("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=yt.MOCK_USER;else{o=eC(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new L(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new yt(l)}t._authCredentials=new uL(new VI(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Fr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new en(this.firestore,e,this._key)}}class ao{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ao(this.firestore,e,this._query)}}class Fr extends ao{constructor(e,n,r){super(e,n,JI(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new en(this.firestore,null,new z(e))}withConverter(e){return new Fr(this.firestore,e,this._path)}}function Gd(t,e,...n){if(t=be(t),j1("collection","path",e),t instanceof Lh){const r=Ce.fromString(e,...n);return O0(r),new Fr(t,null,r)}{if(!(t instanceof en||t instanceof Fr))throw new L(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ce.fromString(e,...n));return O0(r),new Fr(t.firestore,null,r)}}function jF(t,e,...n){if(t=be(t),arguments.length===1&&(e=zI.A()),j1("doc","path",e),t instanceof Lh){const r=Ce.fromString(e,...n);return P0(r),new en(t,null,new z(r))}{if(!(t instanceof en||t instanceof Fr))throw new L(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ce.fromString(e,...n));return P0(r),new en(t.firestore,t instanceof Fr?t.converter:null,new z(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WF{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new R1(this,"async_queue_retry"),this.qc=()=>{const n=Hd();n&&$("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const e=Hd();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const n=Hd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new br;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!_l(e))throw e;$("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const n=this.Nc.then(()=>(this.Fc=!0,e().catch(r=>{this.Mc=r,this.Fc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw ir("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Fc=!1,r))));return this.Nc=n,n}enqueueAfterDelay(e,n,r){this.Uc(),this.Lc.indexOf(e)>-1&&(n=0);const i=qg.createAndSchedule(this,e,n,r,s=>this.Qc(s));return this.$c.push(i),i}Uc(){this.Mc&&G()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}class Yg extends Lh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new WF,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||H1(this),this._firestoreClient.terminate()}}function HF(t,e){const n=typeof t=="object"?t:eg(),r=typeof t=="string"?t:e||"(default)",i=oh(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=JS("firestore");s&&BF(i,...s)}return i}function W1(t){return t._firestoreClient||H1(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function H1(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,l,u){return new TL(o,a,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new LF(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Bs(kt.fromBase64String(e))}catch(n){throw new L(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Bs(kt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new L(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Et(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q1{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new L(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new L(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return pe(this._lat,e._lat)||pe(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qF=/^__.*__$/;class GF{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Vi(e,this.data,this.fieldMask,n,this.fieldTransforms):new El(e,this.data,n,this.fieldTransforms)}}function G1(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class Zg{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Jc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new Zg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Zc({path:r,ta:!1});return i.ea(e),i}na(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Zc({path:r,ta:!1});return i.Jc(),i}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return Ic(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(e.length===0)throw this.ia("Document fields must not be empty");if(G1(this.Yc)&&qF.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class KF{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||xh(e)}ua(e,n,r,i=!1){return new Zg({Yc:e,methodName:n,oa:r,path:Et.emptyPath(),ta:!1,ra:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function K1(t){const e=t._freezeSettings(),n=xh(t._databaseId);return new KF(t._databaseId,!!e.ignoreUndefinedProperties,n)}function QF(t,e,n,r,i,s={}){const o=t.ua(s.merge||s.mergeFields?2:0,e,n,i);X1("Data must be an object, but it was:",o,r);const a=Q1(r,o);let l,u;if(s.merge)l=new dn(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=XF(e,h,n);if(!o.contains(d))throw new L(I.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);ZF(c,d)||c.push(d)}l=new dn(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new GF(new Xt(a),l,u)}function YF(t,e,n,r=!1){return ey(n,t.ua(r?4:3,e))}function ey(t,e){if(Y1(t=be(t)))return X1("Unsupported field value:",e,t),Q1(t,e);if(t instanceof q1)return function(n,r){if(!G1(r.Yc))throw r.ia(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ia(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ta&&e.Yc!==4)throw e.ia("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=ey(o,r.sa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=be(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return WL(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=qe.fromDate(n);return{timestampValue:Ec(r.serializer,i)}}if(n instanceof qe){const i=new qe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ec(r.serializer,i)}}if(n instanceof Jg)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Bs)return{bytesValue:_1(r.serializer,n._byteString)};if(n instanceof en){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.ia(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ug(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ia(`Unsupported field value: ${Mh(n)}`)}(t,e)}function Q1(t,e){const n={};return BI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):io(t,(r,i)=>{const s=ey(i,e.Xc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Y1(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof qe||t instanceof Jg||t instanceof Bs||t instanceof en||t instanceof q1)}function X1(t,e,n){if(!Y1(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Mh(n);throw r==="an object"?e.ia(t+" a custom object"):e.ia(t+" "+r)}}function XF(t,e,n){if((e=be(e))instanceof Xg)return e._internalPath;if(typeof e=="string")return J1(t,e);throw Ic("Field path arguments must be of type string or ",t,!1,void 0,n)}const JF=new RegExp("[~\\*/\\[\\]]");function J1(t,e,n){if(e.search(JF)>=0)throw Ic(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Xg(...e.split("."))._internalPath}catch{throw Ic(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ic(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new L(I.INVALID_ARGUMENT,a+t+l)}function ZF(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z1{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new en(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new e$(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ty("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class e$ extends Z1{data(){return super.data()}}function ty(t,e){return typeof e=="string"?J1(t,e):e instanceof Xg?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t$(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new L(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ny{}class n$ extends ny{}function L0(t,e,...n){let r=[];e instanceof ny&&r.push(e),r=r.concat(n),function(i){const s=i.filter(a=>a instanceof ry).length,o=i.filter(a=>a instanceof bh).length;if(s>1||s>0&&o>0)throw new L(I.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class bh extends n${constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new bh(e,n,r)}_apply(e){const n=this._parse(e);return eT(e._query,n),new ao(e.firestore,e.converter,Np(e._query,n))}_parse(e){const n=K1(e.firestore);return function(i,s,o,a,l,u,c){let h;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new L(I.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){F0(c,u);const d=[];for(const p of c)d.push(b0(a,i,p));h={arrayValue:{values:d}}}else h=b0(a,i,c)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||F0(c,u),h=YF(o,s,c,u==="in"||u==="not-in");return ze.create(l,u,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function r$(t,e,n){const r=e,i=ty("where",t);return bh._create(i,r,n)}class ry extends ny{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new ry(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:wn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)eT(s,a),s=Np(s,a)}(e._query,n),new ao(e.firestore,e.converter,Np(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function b0(t,e,n){if(typeof(n=be(n))=="string"){if(n==="")throw new L(I.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!e1(e)&&n.indexOf("/")!==-1)throw new L(I.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ce.fromString(n));if(!z.isDocumentKey(r))throw new L(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return a0(t,new z(r))}if(n instanceof en)return a0(t,n._key);throw new L(I.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Mh(n)}.`)}function F0(t,e){if(!Array.isArray(t)||t.length===0)throw new L(I.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function eT(t,e){if(e.isInequality()){const r=bg(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new L(I.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=ZI(t);s!==null&&i$(t,i,s)}const n=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new L(I.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new L(I.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function i$(t,e,n){if(!n.isEqual(e))throw new L(I.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class s${convertValue(e,n="none"){switch(Pi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Fs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw G()}}convertObject(e,n){const r={};return io(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Jg(Ue(e.latitude),Ue(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=WI(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp($a(e));default:return null}}convertTimestamp(e){const n=jr(e);return new qe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ce.fromString(e);Te(I1(r));const i=new Ua(r.get(1),r.get(3)),s=new z(r.popFirst(5));return i.isEqual(n)||ir(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o$(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class a$ extends Z1{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ku(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ty("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ku extends a${data(e={}){return super.data(e)}}class l${constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new iu(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ku(this._firestore,this._userDataWriter,r.key,r,new iu(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new L(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new ku(r._firestore,r._userDataWriter,o.doc.key,o.doc,new iu(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new ku(r._firestore,r._userDataWriter,o.doc.key,o.doc,new iu(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:u$(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function u$(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}class c$ extends s${constructor(e){super(),this.firestore=e}convertBytes(e){return new Bs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new en(this.firestore,null,n)}}function $0(t){t=Cc(t,ao);const e=Cc(t.firestore,Yg),n=W1(e),r=new c$(e);return t$(t._query),VF(n,t._query).then(i=>new l$(e,r,t,i))}function h$(t,e){const n=Cc(t.firestore,Yg),r=jF(t),i=o$(t.converter,e);return d$(n,[QF(K1(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Yn.exists(!1))]).then(()=>r)}function d$(t,e){return function(n,r){const i=new br;return n.asyncQueue.enqueueAndForget(async()=>IF(await $F(n),r,i)),i.promise}(W1(t),e)}(function(t,e=!0){(function(n){ro=n})(Zs),Ni(new zr("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new Yg(new cL(n.getProvider("auth-internal")),new pL(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new L(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ua(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Pn(n0,"3.10.0",t),Pn(n0,"3.10.0","esm2017")})();const U0="@firebase/database",V0="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tT="";function f$(t){tT=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p${constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),et(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ra(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m${constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return hr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nT=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new p$(e)}}catch{}return new m$},di=nT("localStorage"),bp=nT("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs=new sh("@firebase/database"),g$=function(){let t=1;return function(){return t++}}(),rT=function(t){const e=GD(t),n=new jD;n.update(e);const r=n.digest();return Qm.encodeByteArray(r)},Tl=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Tl.apply(null,r):typeof r=="object"?e+=et(r):e+=r,e+=" "}return e};let _i=null,z0=!0;const y$=function(t,e){A(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Cs.logLevel=ce.VERBOSE,_i=Cs.log.bind(Cs),e&&bp.set("logging_enabled",!0)):typeof t=="function"?_i=t:(_i=null,bp.remove("logging_enabled"))},wt=function(...t){if(z0===!0&&(z0=!1,_i===null&&bp.get("logging_enabled")===!0&&y$(!0)),_i){const e=Tl.apply(null,t);_i(e)}},kl=function(t){return function(...e){wt(t,...e)}},Fp=function(...t){const e="FIREBASE INTERNAL ERROR: "+Tl(...t);Cs.error(e)},ar=function(...t){const e=`FIREBASE FATAL ERROR: ${Tl(...t)}`;throw Cs.error(e),new Error(e)},Ut=function(...t){const e="FIREBASE WARNING: "+Tl(...t);Cs.warn(e)},v$=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ut("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},iT=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},_$=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},js="[MIN_NAME]",Oi="[MAX_NAME]",lo=function(t,e){if(t===e)return 0;if(t===js||e===Oi)return-1;if(e===js||t===Oi)return 1;{const n=B0(t),r=B0(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},w$=function(t,e){return t===e?0:t<e?-1:1},Do=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+et(e))},iy=function(t){if(typeof t!="object"||t===null)return et(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=et(e[r]),n+=":",n+=iy(t[e[r]]);return n+="}",n},sT=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Vt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const oT=function(t){A(!iT(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(c.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},E$=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},S$=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function C$(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const I$=new RegExp("^-?(0*)\\d{1,10}$"),T$=-2147483648,k$=2147483647,B0=function(t){if(I$.test(t)){const e=Number(t);if(e>=T$&&e<=k$)return e}return null},uo=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ut("Exception was thrown by user callback.",n),e},Math.floor(0))}},R$=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},sa=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N${constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Ut(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A${constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(wt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ut(e)}}class Is{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Is.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sy="5",aT="v",lT="s",uT="r",cT="f",hT=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,dT="ls",fT="p",$p="ac",pT="websocket",mT="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=di.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&di.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function D$(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function yT(t,e,n){A(typeof e=="string","typeof type must == string"),A(typeof n=="object","typeof params must == object");let r;if(e===pT)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===mT)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);D$(t)&&(n.ns=t.namespace);const i=[];return Vt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x${constructor(){this.counters_={}}incrementCounter(e,n=1){hr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return RD(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kd={},Qd={};function oy(t){const e=t.toString();return Kd[e]||(Kd[e]=new x$),Kd[e]}function P$(t,e){const n=t.toString();return Qd[n]||(Qd[n]=e()),Qd[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O${constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&uo(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j0="start",M$="close",L$="pLPCommand",b$="pRTLPCB",vT="id",_T="pw",wT="ser",F$="cb",$$="seg",U$="ts",V$="d",z$="dframe",ET=1870,ST=30,B$=ET-ST,j$=25e3,W$=3e4;class hs{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=kl(e),this.stats_=oy(n),this.urlFn=l=>(this.appCheckToken&&(l[$p]=this.appCheckToken),yT(n,mT,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new O$(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(W$)),_$(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ay((...s)=>{const[o,a,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===j0)this.id=a,this.password=l;else if(o===M$)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[j0]="t",r[wT]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[F$]=this.scriptTagHolder.uniqueCallbackIdentifier),r[aT]=sy,this.transportSessionId&&(r[lT]=this.transportSessionId),this.lastSessionId&&(r[dT]=this.lastSessionId),this.applicationId&&(r[fT]=this.applicationId),this.appCheckToken&&(r[$p]=this.appCheckToken),typeof location<"u"&&location.hostname&&hT.test(location.hostname)&&(r[uT]=cT);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){hs.forceAllow_=!0}static forceDisallow(){hs.forceDisallow_=!0}static isAvailable(){return hs.forceAllow_?!0:!hs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!E$()&&!S$()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=et(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=QS(n),i=sT(r,B$);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[z$]="t",r[vT]=e,r[_T]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=et(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class ay{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=g$(),window[L$+this.uniqueCallbackIdentifier]=e,window[b$+this.uniqueCallbackIdentifier]=n,this.myIFrame=ay.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){wt("frame writing exception"),a.stack&&wt(a.stack),wt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||wt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[vT]=this.myID,e[_T]=this.myPW,e[wT]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+ST+r.length<=ET;){const o=this.pendingSegs.shift();r=r+"&"+$$+i+"="+o.seg+"&"+U$+i+"="+o.ts+"&"+V$+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(j$)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{wt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H$=16384,q$=45e3;let Tc=null;typeof MozWebSocket<"u"?Tc=MozWebSocket:typeof WebSocket<"u"&&(Tc=WebSocket);class hn{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=kl(this.connId),this.stats_=oy(n),this.connURL=hn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[aT]=sy,typeof location<"u"&&location.hostname&&hT.test(location.hostname)&&(o[uT]=cT),n&&(o[lT]=n),r&&(o[dT]=r),i&&(o[$p]=i),s&&(o[fT]=s),yT(e,pT,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,di.set("previous_websocket_failure",!0);try{let r;nC(),this.mySock=new Tc(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){hn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Tc!==null&&!hn.forceDisallow_}static previouslyFailed(){return di.isInMemoryStorage||di.get("previous_websocket_failure")===!0}markConnectionHealthy(){di.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Ra(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(A(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=et(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=sT(n,H$);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(q$))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}hn.responsesRequiredToBeHealthy=2;hn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[hs,hn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=hn&&hn.isAvailable();let r=n&&!hn.previouslyFailed();if(e.webSocketOnly&&(n||Ut("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[hn];else{const i=this.transports_=[];for(const s of ja.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);ja.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ja.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G$=6e4,K$=5e3,Q$=10*1024,Y$=100*1024,Yd="t",W0="d",X$="s",H0="r",J$="e",q0="o",G0="a",K0="n",Q0="p",Z$="h";class eU{constructor(e,n,r,i,s,o,a,l,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=kl("c:"+this.id+":"),this.transportManager_=new ja(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=sa(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Y$?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Q$?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Yd in e){const n=e[Yd];n===G0?this.upgradeIfSecondaryHealthy_():n===H0?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===q0&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Do("t",e),r=Do("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Q0,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:G0,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:K0,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Do("t",e),r=Do("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Do(Yd,e);if(W0 in e){const r=e[W0];if(n===Z$){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===K0){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===X$?this.onConnectionShutdown_(r):n===H0?this.onReset_(r):n===J$?Fp("Server Error: "+r):n===q0?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Fp("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),sy!==r&&Ut("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),sa(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(G$))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):sa(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(K$))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Q0,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(di.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IT{constructor(e){this.allowedEvents_=e,this.listeners_={},A(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){A(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc extends IT{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Xm()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new kc}getInitialEvent(e){return A(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y0=32,X0=768;class ye{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function fe(){return new ye("")}function te(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Hr(t){return t.pieces_.length-t.pieceNum_}function _e(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ye(t.pieces_,e)}function TT(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function tU(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function kT(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function RT(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ye(e,0)}function We(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ye)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new ye(n,0)}function re(t){return t.pieceNum_>=t.pieces_.length}function Mt(t,e){const n=te(t),r=te(e);if(n===null)return e;if(n===r)return Mt(_e(t),_e(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function ly(t,e){if(Hr(t)!==Hr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function fn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Hr(t)>Hr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class nU{constructor(e,n){this.errorPrefix_=n,this.parts_=kT(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=ih(this.parts_[r]);NT(this)}}function rU(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ih(e),NT(t)}function iU(t){const e=t.parts_.pop();t.byteLength_-=ih(e),t.parts_.length>0&&(t.byteLength_-=1)}function NT(t){if(t.byteLength_>X0)throw new Error(t.errorPrefix_+"has a key path longer than "+X0+" bytes ("+t.byteLength_+").");if(t.parts_.length>Y0)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Y0+") or object contains a cycle "+ii(t))}function ii(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy extends IT{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new uy}getInitialEvent(e){return A(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo=1e3,sU=60*5*1e3,J0=30*1e3,oU=1.3,aU=3e4,lU="server_kill",Z0=3;class Xn extends CT{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Xn.nextPersistentConnectionId_++,this.log_=kl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=xo,this.maxReconnectDelay_=sU,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!nC())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");uy.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&kc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(et(s)),A(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new rh,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),A(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),A(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;Xn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&hr(e,"w")){const r=Ms(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Ut(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||BD(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=J0)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=zD(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),A(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+et(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Fp("Unrecognized action received from server: "+et(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){A(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=xo,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=xo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>aU&&(this.reconnectDelay_=xo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*oU)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Xn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(h){A(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?wt("getToken() completed but was canceled"):(wt("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new eU(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,p=>{Ut(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(lU)},s))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Ut(h),l())}}}interrupt(e){wt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){wt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],sp(this.interruptReasons_)&&(this.reconnectDelay_=xo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>iy(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new ye(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){wt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Z0&&(this.reconnectDelay_=J0,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){wt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Z0&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+tT.replace(/\./g,"-")]=1,Xm()?e["framework.cordova"]=1:tC()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=kc.getInstance().currentlyOnline();return sp(this.interruptReasons_)&&e}}Xn.nextPersistentConnectionId_=0;Xn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ne(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new ne(js,e),i=new ne(js,n);return this.compare(r,i)!==0}minPost(){return ne.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let su;class AT extends Fh{static get __EMPTY_NODE(){return su}static set __EMPTY_NODE(e){su=e}compare(e,n){return lo(e.name,n.name)}isDefinedOn(e){throw Xs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ne.MIN}maxPost(){return new ne(Oi,su)}makePost(e,n){return A(typeof e=="string","KeyIndex indexValue must always be a string."),new ne(e,su)}toString(){return".key"}}const Ts=new AT;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ze{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ze.RED,this.left=i??Lt.EMPTY_NODE,this.right=s??Lt.EMPTY_NODE}copy(e,n,r,i,s){return new Ze(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Lt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Lt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ze.RED=!0;Ze.BLACK=!1;class uU{copy(e,n,r,i,s){return this}insert(e,n,r){return new Ze(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Lt{constructor(e,n=Lt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Lt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ze.BLACK,null,null))}remove(e){return new Lt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ze.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ou(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ou(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ou(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ou(this.root_,null,this.comparator_,!0,e)}}Lt.EMPTY_NODE=new uU;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cU(t,e){return lo(t.name,e.name)}function cy(t,e){return lo(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Up;function hU(t){Up=t}const DT=function(t){return typeof t=="number"?"number:"+oT(t):"string:"+t},xT=function(t){if(t.isLeafNode()){const e=t.val();A(typeof e=="string"||typeof e=="number"||typeof e=="object"&&hr(e,".sv"),"Priority must be a string or number.")}else A(t===Up||t.isEmpty(),"priority of unexpected type.");A(t===Up||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ew;class Ye{constructor(e,n=Ye.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,A(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),xT(this.priorityNode_)}static set __childrenNodeConstructor(e){ew=e}static get __childrenNodeConstructor(){return ew}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ye(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ye.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return re(e)?this:te(e)===".priority"?this.priorityNode_:Ye.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ye.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=te(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(A(r!==".priority"||Hr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ye.__childrenNodeConstructor.EMPTY_NODE.updateChild(_e(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+DT(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=oT(this.value_):e+=this.value_,this.lazyHash_=rT(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ye.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ye.__childrenNodeConstructor?-1:(A(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Ye.VALUE_TYPE_ORDER.indexOf(n),s=Ye.VALUE_TYPE_ORDER.indexOf(r);return A(i>=0,"Unknown leaf type: "+n),A(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ye.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let PT,OT;function dU(t){PT=t}function fU(t){OT=t}class pU extends Fh{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?lo(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ne.MIN}maxPost(){return new ne(Oi,new Ye("[PRIORITY-POST]",OT))}makePost(e,n){const r=PT(e);return new ne(n,new Ye("[PRIORITY-POST]",r))}toString(){return".priority"}}const Pe=new pU;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mU=Math.log(2);class gU{constructor(e){const n=s=>parseInt(Math.log(s)/mU,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Rc=function(t,e,n,r){t.sort(e);const i=function(l,u){const c=u-l;let h,d;if(c===0)return null;if(c===1)return h=t[l],d=n?n(h):h,new Ze(d,h.node,Ze.BLACK,null,null);{const p=parseInt(c/2,10)+l,v=i(l,p),_=i(p+1,u);return h=t[p],d=n?n(h):h,new Ze(d,h.node,Ze.BLACK,v,_)}},s=function(l){let u=null,c=null,h=t.length;const d=function(v,_){const g=h-v,m=h;h-=v;const f=i(g+1,m),y=t[g],w=n?n(y):y;p(new Ze(w,y.node,_,null,f))},p=function(v){u?(u.left=v,u=v):(c=v,u=v)};for(let v=0;v<l.count;++v){const _=l.nextBitIsOne(),g=Math.pow(2,l.count-(v+1));_?d(g,Ze.BLACK):(d(g,Ze.BLACK),d(g,Ze.RED))}return c},o=new gU(t.length),a=s(o);return new Lt(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xd;const qi={};class Kn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return A(qi&&Pe,"ChildrenNode.ts has not been loaded"),Xd=Xd||new Kn({".priority":qi},{".priority":Pe}),Xd}get(e){const n=Ms(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Lt?n:null}hasIndex(e){return hr(this.indexSet_,e.toString())}addIndex(e,n){A(e!==Ts,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(ne.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Rc(r,e.getCompare()):a=qi;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const c=Object.assign({},this.indexes_);return c[l]=a,new Kn(c,u)}addToIndexes(e,n){const r=tc(this.indexes_,(i,s)=>{const o=Ms(this.indexSet_,s);if(A(o,"Missing index implementation for "+s),i===qi)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(ne.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),Rc(a,o.getCompare())}else return qi;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new ne(e.name,a))),l.insert(e,e.node)}});return new Kn(r,this.indexSet_)}removeFromIndexes(e,n){const r=tc(this.indexes_,i=>{if(i===qi)return i;{const s=n.get(e.name);return s?i.remove(new ne(e.name,s)):i}});return new Kn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Po;class j{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&xT(this.priorityNode_),this.children_.isEmpty()&&A(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Po||(Po=new j(new Lt(cy),null,Kn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Po}updatePriority(e){return this.children_.isEmpty()?this:new j(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Po:n}}getChild(e){const n=te(e);return n===null?this:this.getImmediateChild(n).getChild(_e(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(A(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new ne(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Po:this.priorityNode_;return new j(i,o,s)}}updateChild(e,n){const r=te(e);if(r===null)return n;{A(te(e)!==".priority"||Hr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(_e(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Pe,(o,a)=>{n[o]=a.val(e),r++,s&&j.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+DT(this.getPriority().val())+":"),this.forEachChild(Pe,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":rT(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new ne(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ne(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ne(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ne.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ne.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Rl?-1:0}withIndex(e){if(e===Ts||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new j(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ts||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Pe),i=n.getIterator(Pe);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ts?null:this.indexMap_.get(e.toString())}}j.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class yU extends j{constructor(){super(new Lt(cy),j.EMPTY_NODE,Kn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return j.EMPTY_NODE}isEmpty(){return!1}}const Rl=new yU;Object.defineProperties(ne,{MIN:{value:new ne(js,j.EMPTY_NODE)},MAX:{value:new ne(Oi,Rl)}});AT.__EMPTY_NODE=j.EMPTY_NODE;Ye.__childrenNodeConstructor=j;hU(Rl);fU(Rl);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vU=!0;function at(t,e=null){if(t===null)return j.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),A(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ye(n,at(e))}if(!(t instanceof Array)&&vU){const n=[];let r=!1;if(Vt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=at(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new ne(o,l)))}}),n.length===0)return j.EMPTY_NODE;const s=Rc(n,cU,o=>o.name,cy);if(r){const o=Rc(n,Pe.getCompare());return new j(s,at(e),new Kn({".priority":o},{".priority":Pe}))}else return new j(s,at(e),Kn.Default)}else{let n=j.EMPTY_NODE;return Vt(t,(r,i)=>{if(hr(t,r)&&r.substring(0,1)!=="."){const s=at(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(at(e))}}dU(at);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _U extends Fh{constructor(e){super(),this.indexPath_=e,A(!re(e)&&te(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?lo(e.name,n.name):s}makePost(e,n){const r=at(e),i=j.EMPTY_NODE.updateChild(this.indexPath_,r);return new ne(n,i)}maxPost(){const e=j.EMPTY_NODE.updateChild(this.indexPath_,Rl);return new ne(Oi,e)}toString(){return kT(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wU extends Fh{compare(e,n){const r=e.node.compareTo(n.node);return r===0?lo(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ne.MIN}maxPost(){return ne.MAX}makePost(e,n){const r=at(e);return new ne(n,r)}toString(){return".value"}}const EU=new wU;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MT(t){return{type:"value",snapshotNode:t}}function Ws(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Wa(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ha(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function SU(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){A(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Wa(n,a)):A(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ws(n,r)):o.trackChildChange(Ha(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Pe,(i,s)=>{n.hasChild(i)||r.trackChildChange(Wa(i,s))}),n.isLeafNode()||n.forEachChild(Pe,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Ha(i,s,o))}else r.trackChildChange(Ws(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?j.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(e){this.indexedFilter_=new hy(e.getIndex()),this.index_=e.getIndex(),this.startPost_=qa.getStartPost_(e),this.endPost_=qa.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new ne(n,r))||(r=j.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=j.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(j.EMPTY_NODE);const s=this;return n.forEachChild(Pe,(o,a)=>{s.matches(new ne(o,a))||(i=i.updateImmediateChild(o,j.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CU{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new qa(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new ne(n,r))||(r=j.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=j.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=j.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(j.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,j.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,p)=>h(p,d)}else o=this.index_.getCompare();const a=e;A(a.numChildren()===this.limit_,"");const l=new ne(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,u,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const p=d==null?1:o(d,l);if(c&&!r.isEmpty()&&p>=0)return s!=null&&s.trackChildChange(Ha(n,r,h)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Wa(n,h));const _=a.updateImmediateChild(n,j.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(s!=null&&s.trackChildChange(Ws(d.name,d.node)),_.updateImmediateChild(d.name,d.node)):_}}else return r.isEmpty()?e:c&&o(u,l)>=0?(s!=null&&(s.trackChildChange(Wa(u.name,u.node)),s.trackChildChange(Ws(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,j.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Pe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return A(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return A(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:js}hasEnd(){return this.endSet_}getIndexEndValue(){return A(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return A(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Oi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return A(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Pe}copy(){const e=new dy;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function IU(t){return t.loadsAllData()?new hy(t.getIndex()):t.hasLimit()?new CU(t):new qa(t)}function tw(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Pe?n="$priority":t.index_===EU?n="$value":t.index_===Ts?n="$key":(A(t.index_ instanceof _U,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=et(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=et(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+et(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=et(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+et(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function nw(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Pe&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc extends CT{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=kl("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(A(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Nc.getListenId_(e,r),a={};this.listens_[o]=a;const l=tw(e._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let h=c;if(u===404&&(h=null,u=null),u===null&&this.onDataUpdate_(s,h,!1,r),Ms(this.listens_,o)===a){let d;u?u===401?d="permission_denied":d="rest_error:"+u:d="ok",i(d,null)}})}unlisten(e,n){const r=Nc.getListenId_(e,n);delete this.listens_[r]}get(e){const n=tw(e._queryParams),r=e._path.toString(),i=new rh;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Js(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Ra(a.responseText)}catch{Ut("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Ut("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TU{constructor(){this.rootNode_=j.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ac(){return{value:null,children:new Map}}function LT(t,e,n){if(re(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=te(e);t.children.has(r)||t.children.set(r,Ac());const i=t.children.get(r);e=_e(e),LT(i,e,n)}}function Vp(t,e,n){t.value!==null?n(e,t.value):kU(t,(r,i)=>{const s=new ye(e.toString()+"/"+r);Vp(i,s,n)})}function kU(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RU{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Vt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rw=10*1e3,NU=30*1e3,AU=5*60*1e3;class DU{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new RU(e);const r=rw+(NU-rw)*Math.random();sa(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Vt(e,(i,s)=>{s>0&&hr(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),sa(this.reportStats_.bind(this),Math.floor(Math.random()*2*AU))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(pn||(pn={}));function bT(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function fy(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function py(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=pn.ACK_USER_WRITE,this.source=bT()}operationForChild(e){if(re(this.path)){if(this.affectedTree.value!=null)return A(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ye(e));return new Dc(fe(),n,this.revert)}}else return A(te(this.path)===e,"operationForChild called for unrelated child."),new Dc(_e(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e,n){this.source=e,this.path=n,this.type=pn.LISTEN_COMPLETE}operationForChild(e){return re(this.path)?new Ga(this.source,fe()):new Ga(this.source,_e(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=pn.OVERWRITE}operationForChild(e){return re(this.path)?new Mi(this.source,fe(),this.snap.getImmediateChild(e)):new Mi(this.source,_e(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=pn.MERGE}operationForChild(e){if(re(this.path)){const n=this.children.subtree(new ye(e));return n.isEmpty()?null:n.value?new Mi(this.source,fe(),n.value):new Ka(this.source,fe(),n)}else return A(te(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ka(this.source,_e(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(re(e))return this.isFullyInitialized()&&!this.filtered_;const n=te(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xU{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function PU(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(SU(o.childName,o.snapshotNode))}),Oo(t,i,"child_removed",e,r,n),Oo(t,i,"child_added",e,r,n),Oo(t,i,"child_moved",s,r,n),Oo(t,i,"child_changed",e,r,n),Oo(t,i,"value",e,r,n),i}function Oo(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>MU(t,a,l)),o.forEach(a=>{const l=OU(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function OU(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function MU(t,e,n){if(e.childName==null||n.childName==null)throw Xs("Should only compare child_ events.");const r=new ne(e.childName,e.snapshotNode),i=new ne(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $h(t,e){return{eventCache:t,serverCache:e}}function oa(t,e,n,r){return $h(new Li(e,n,r),t.serverCache)}function FT(t,e,n,r){return $h(t.eventCache,new Li(e,n,r))}function zp(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function bi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jd;const LU=()=>(Jd||(Jd=new Lt(w$)),Jd);class Se{constructor(e,n=LU()){this.value=e,this.children=n}static fromObject(e){let n=new Se(null);return Vt(e,(r,i)=>{n=n.set(new ye(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:fe(),value:this.value};if(re(e))return null;{const r=te(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(_e(e),n);return s!=null?{path:We(new ye(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(re(e))return this;{const n=te(e),r=this.children.get(n);return r!==null?r.subtree(_e(e)):new Se(null)}}set(e,n){if(re(e))return new Se(n,this.children);{const r=te(e),s=(this.children.get(r)||new Se(null)).set(_e(e),n),o=this.children.insert(r,s);return new Se(this.value,o)}}remove(e){if(re(e))return this.children.isEmpty()?new Se(null):new Se(null,this.children);{const n=te(e),r=this.children.get(n);if(r){const i=r.remove(_e(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Se(null):new Se(this.value,s)}else return this}}get(e){if(re(e))return this.value;{const n=te(e),r=this.children.get(n);return r?r.get(_e(e)):null}}setTree(e,n){if(re(e))return n;{const r=te(e),s=(this.children.get(r)||new Se(null)).setTree(_e(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Se(this.value,o)}}fold(e){return this.fold_(fe(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(We(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,fe(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(re(e))return null;{const s=te(e),o=this.children.get(s);return o?o.findOnPath_(_e(e),We(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,fe(),n)}foreachOnPath_(e,n,r){if(re(e))return this;{this.value&&r(n,this.value);const i=te(e),s=this.children.get(i);return s?s.foreachOnPath_(_e(e),We(n,i),r):new Se(null)}}foreach(e){this.foreach_(fe(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(We(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this.writeTree_=e}static empty(){return new yn(new Se(null))}}function aa(t,e,n){if(re(e))return new yn(new Se(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Mt(i,e);return s=s.updateChild(o,n),new yn(t.writeTree_.set(i,s))}else{const i=new Se(n),s=t.writeTree_.setTree(e,i);return new yn(s)}}}function iw(t,e,n){let r=t;return Vt(n,(i,s)=>{r=aa(r,We(e,i),s)}),r}function sw(t,e){if(re(e))return yn.empty();{const n=t.writeTree_.setTree(e,new Se(null));return new yn(n)}}function Bp(t,e){return Bi(t,e)!=null}function Bi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Mt(n.path,e)):null}function ow(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Pe,(r,i)=>{e.push(new ne(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new ne(r,i.value))}),e}function $r(t,e){if(re(e))return t;{const n=Bi(t,e);return n!=null?new yn(new Se(n)):new yn(t.writeTree_.subtree(e))}}function jp(t){return t.writeTree_.isEmpty()}function Hs(t,e){return $T(fe(),t.writeTree_,e)}function $T(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(A(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=$T(We(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(We(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function my(t,e){return BT(e,t)}function bU(t,e,n,r,i){A(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=aa(t.visibleWrites,e,n)),t.lastWriteId=r}function FU(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function $U(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);A(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&UU(a,r.path)?i=!1:fn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return VU(t),!0;if(r.snap)t.visibleWrites=sw(t.visibleWrites,r.path);else{const a=r.children;Vt(a,l=>{t.visibleWrites=sw(t.visibleWrites,We(r.path,l))})}return!0}else return!1}function UU(t,e){if(t.snap)return fn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&fn(We(t.path,n),e))return!0;return!1}function VU(t){t.visibleWrites=UT(t.allWrites,zU,fe()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function zU(t){return t.visible}function UT(t,e,n){let r=yn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)fn(n,o)?(a=Mt(n,o),r=aa(r,a,s.snap)):fn(o,n)&&(a=Mt(o,n),r=aa(r,fe(),s.snap.getChild(a)));else if(s.children){if(fn(n,o))a=Mt(n,o),r=iw(r,a,s.children);else if(fn(o,n))if(a=Mt(o,n),re(a))r=iw(r,fe(),s.children);else{const l=Ms(s.children,te(a));if(l){const u=l.getChild(_e(a));r=aa(r,fe(),u)}}}else throw Xs("WriteRecord should have .snap or .children")}}return r}function VT(t,e,n,r,i){if(!r&&!i){const s=Bi(t.visibleWrites,e);if(s!=null)return s;{const o=$r(t.visibleWrites,e);if(jp(o))return n;if(n==null&&!Bp(o,fe()))return null;{const a=n||j.EMPTY_NODE;return Hs(o,a)}}}else{const s=$r(t.visibleWrites,e);if(!i&&jp(s))return n;if(!i&&n==null&&!Bp(s,fe()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(fn(u.path,e)||fn(e,u.path))},a=UT(t.allWrites,o,e),l=n||j.EMPTY_NODE;return Hs(a,l)}}}function BU(t,e,n){let r=j.EMPTY_NODE;const i=Bi(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Pe,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=$r(t.visibleWrites,e);return n.forEachChild(Pe,(o,a)=>{const l=Hs($r(s,new ye(o)),a);r=r.updateImmediateChild(o,l)}),ow(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=$r(t.visibleWrites,e);return ow(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function jU(t,e,n,r,i){A(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=We(e,n);if(Bp(t.visibleWrites,s))return null;{const o=$r(t.visibleWrites,s);return jp(o)?i.getChild(n):Hs(o,i.getChild(n))}}function WU(t,e,n,r){const i=We(e,n),s=Bi(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=$r(t.visibleWrites,i);return Hs(o,r.getNode().getImmediateChild(n))}else return null}function HU(t,e){return Bi(t.visibleWrites,e)}function qU(t,e,n,r,i,s,o){let a;const l=$r(t.visibleWrites,e),u=Bi(l,fe());if(u!=null)a=u;else if(n!=null)a=Hs(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],h=o.getCompare(),d=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let p=d.getNext();for(;p&&c.length<i;)h(p,r)!==0&&c.push(p),p=d.getNext();return c}else return[]}function GU(){return{visibleWrites:yn.empty(),allWrites:[],lastWriteId:-1}}function xc(t,e,n,r){return VT(t.writeTree,t.treePath,e,n,r)}function gy(t,e){return BU(t.writeTree,t.treePath,e)}function aw(t,e,n,r){return jU(t.writeTree,t.treePath,e,n,r)}function Pc(t,e){return HU(t.writeTree,We(t.treePath,e))}function KU(t,e,n,r,i,s){return qU(t.writeTree,t.treePath,e,n,r,i,s)}function yy(t,e,n){return WU(t.writeTree,t.treePath,e,n)}function zT(t,e){return BT(We(t.treePath,e),t.writeTree)}function BT(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QU{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;A(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),A(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Ha(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Wa(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Ws(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Ha(r,e.snapshotNode,i.oldSnap));else throw Xs("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YU{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const jT=new YU;class vy{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Li(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return yy(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:bi(this.viewCache_),s=KU(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XU(t){return{filter:t}}function JU(t,e){A(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),A(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function ZU(t,e,n,r,i){const s=new QU;let o,a;if(n.type===pn.OVERWRITE){const u=n;u.source.fromUser?o=Wp(t,e,u.path,u.snap,r,i,s):(A(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!re(u.path),o=Oc(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===pn.MERGE){const u=n;u.source.fromUser?o=t2(t,e,u.path,u.children,r,i,s):(A(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Hp(t,e,u.path,u.children,r,i,a,s))}else if(n.type===pn.ACK_USER_WRITE){const u=n;u.revert?o=i2(t,e,u.path,r,i,s):o=n2(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===pn.LISTEN_COMPLETE)o=r2(t,e,n.path,r,s);else throw Xs("Unknown operation type: "+n.type);const l=s.getChanges();return e2(e,o,l),{viewCache:o,changes:l}}function e2(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=zp(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(MT(zp(e)))}}function WT(t,e,n,r,i,s){const o=e.eventCache;if(Pc(r,n)!=null)return e;{let a,l;if(re(n))if(A(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=bi(e),c=u instanceof j?u:j.EMPTY_NODE,h=gy(r,c);a=t.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const u=xc(r,bi(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=te(n);if(u===".priority"){A(Hr(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=e.serverCache.getNode();const h=aw(r,n,c,l);h!=null?a=t.filter.updatePriority(c,h):a=o.getNode()}else{const c=_e(n);let h;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const d=aw(r,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(u).updateChild(c,d):h=o.getNode().getImmediateChild(u)}else h=yy(r,u,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),u,h,c,i,s):a=o.getNode()}}return oa(e,a,o.isFullyInitialized()||re(n),t.filter.filtersNodes())}}function Oc(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(re(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),p,null)}else{const p=te(n);if(!l.isCompleteForPath(n)&&Hr(n)>1)return e;const v=_e(n),g=l.getNode().getImmediateChild(p).updateChild(v,r);p===".priority"?u=c.updatePriority(l.getNode(),g):u=c.updateChild(l.getNode(),p,g,v,jT,null)}const h=FT(e,u,l.isFullyInitialized()||re(n),c.filtersNodes()),d=new vy(i,h,s);return WT(t,h,n,i,d,a)}function Wp(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const c=new vy(i,e,s);if(re(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=oa(e,u,!0,t.filter.filtersNodes());else{const h=te(n);if(h===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=oa(e,u,a.isFullyInitialized(),a.isFiltered());else{const d=_e(n),p=a.getNode().getImmediateChild(h);let v;if(re(d))v=r;else{const _=c.getCompleteChild(h);_!=null?TT(d)===".priority"&&_.getChild(RT(d)).isEmpty()?v=_:v=_.updateChild(d,r):v=j.EMPTY_NODE}if(p.equals(v))l=e;else{const _=t.filter.updateChild(a.getNode(),h,v,d,c,o);l=oa(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function lw(t,e){return t.eventCache.isCompleteForChild(e)}function t2(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const c=We(n,l);lw(e,te(c))&&(a=Wp(t,a,c,u,i,s,o))}),r.foreach((l,u)=>{const c=We(n,l);lw(e,te(c))||(a=Wp(t,a,c,u,i,s,o))}),a}function uw(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Hp(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;re(n)?u=r:u=new Se(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((h,d)=>{if(c.hasChild(h)){const p=e.serverCache.getNode().getImmediateChild(h),v=uw(t,p,d);l=Oc(t,l,new ye(h),v,i,s,o,a)}}),u.children.inorderTraversal((h,d)=>{const p=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!c.hasChild(h)&&!p){const v=e.serverCache.getNode().getImmediateChild(h),_=uw(t,v,d);l=Oc(t,l,new ye(h),_,i,s,o,a)}}),l}function n2(t,e,n,r,i,s,o){if(Pc(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(re(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Oc(t,e,n,l.getNode().getChild(n),i,s,a,o);if(re(n)){let u=new Se(null);return l.getNode().forEachChild(Ts,(c,h)=>{u=u.set(new ye(c),h)}),Hp(t,e,n,u,i,s,a,o)}else return e}else{let u=new Se(null);return r.foreach((c,h)=>{const d=We(n,c);l.isCompleteForPath(d)&&(u=u.set(c,l.getNode().getChild(d)))}),Hp(t,e,n,u,i,s,a,o)}}function r2(t,e,n,r,i){const s=e.serverCache,o=FT(e,s.getNode(),s.isFullyInitialized()||re(n),s.isFiltered());return WT(t,o,n,r,jT,i)}function i2(t,e,n,r,i,s){let o;if(Pc(r,n)!=null)return e;{const a=new vy(r,e,i),l=e.eventCache.getNode();let u;if(re(n)||te(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=xc(r,bi(e));else{const h=e.serverCache.getNode();A(h instanceof j,"serverChildren would be complete if leaf node"),c=gy(r,h)}c=c,u=t.filter.updateFullNode(l,c,s)}else{const c=te(n);let h=yy(r,c,e.serverCache);h==null&&e.serverCache.isCompleteForChild(c)&&(h=l.getImmediateChild(c)),h!=null?u=t.filter.updateChild(l,c,h,_e(n),a,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(l,c,j.EMPTY_NODE,_e(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=xc(r,bi(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Pc(r,fe())!=null,oa(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s2{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new hy(r.getIndex()),s=IU(r);this.processor_=XU(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(j.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(j.EMPTY_NODE,a.getNode(),null),c=new Li(l,o.isFullyInitialized(),i.filtersNodes()),h=new Li(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=$h(h,c),this.eventGenerator_=new xU(this.query_)}get query(){return this.query_}}function o2(t){return t.viewCache_.serverCache.getNode()}function a2(t,e){const n=bi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!re(e)&&!n.getImmediateChild(te(e)).isEmpty())?n.getChild(e):null}function cw(t){return t.eventRegistrations_.length===0}function l2(t,e){t.eventRegistrations_.push(e)}function hw(t,e,n){const r=[];if(n){A(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function dw(t,e,n,r){e.type===pn.MERGE&&e.source.queryId!==null&&(A(bi(t.viewCache_),"We should always have a full cache before handling merges"),A(zp(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=ZU(t.processor_,i,e,n,r);return JU(t.processor_,s.viewCache),A(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,HT(t,s.changes,s.viewCache.eventCache.getNode(),null)}function u2(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Pe,(s,o)=>{r.push(Ws(s,o))}),n.isFullyInitialized()&&r.push(MT(n.getNode())),HT(t,r,n.getNode(),e)}function HT(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return PU(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mc;class c2{constructor(){this.views=new Map}}function h2(t){A(!Mc,"__referenceConstructor has already been defined"),Mc=t}function d2(){return A(Mc,"Reference.ts has not been loaded"),Mc}function f2(t){return t.views.size===0}function _y(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return A(s!=null,"SyncTree gave us an op for an invalid query."),dw(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(dw(o,e,n,r));return s}}function p2(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=xc(n,i?r:null),l=!1;a?l=!0:r instanceof j?(a=gy(n,r),l=!1):(a=j.EMPTY_NODE,l=!1);const u=$h(new Li(a,l,!1),new Li(r,i,!1));return new s2(e,u)}return o}function m2(t,e,n,r,i,s){const o=p2(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),l2(o,n),u2(o,n)}function g2(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=qr(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(hw(u,n,r)),cw(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(hw(l,n,r)),cw(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!qr(t)&&s.push(new(d2())(e._repo,e._path)),{removed:s,events:o}}function qT(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function ks(t,e){let n=null;for(const r of t.views.values())n=n||a2(r,e);return n}function GT(t,e){if(e._queryParams.loadsAllData())return Uh(t);{const r=e._queryIdentifier;return t.views.get(r)}}function KT(t,e){return GT(t,e)!=null}function qr(t){return Uh(t)!=null}function Uh(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lc;function y2(t){A(!Lc,"__referenceConstructor has already been defined"),Lc=t}function v2(){return A(Lc,"Reference.ts has not been loaded"),Lc}let _2=1;class fw{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Se(null),this.pendingWriteTree_=GU(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function QT(t,e,n,r,i){return bU(t.pendingWriteTree_,e,n,r,i),i?Nl(t,new Mi(bT(),e,n)):[]}function fi(t,e,n=!1){const r=FU(t.pendingWriteTree_,e);if($U(t.pendingWriteTree_,e)){let s=new Se(null);return r.snap!=null?s=s.set(fe(),!0):Vt(r.children,o=>{s=s.set(new ye(o),!0)}),Nl(t,new Dc(r.path,s,n))}else return[]}function Vh(t,e,n){return Nl(t,new Mi(fy(),e,n))}function w2(t,e,n){const r=Se.fromObject(n);return Nl(t,new Ka(fy(),e,r))}function E2(t,e){return Nl(t,new Ga(fy(),e))}function S2(t,e,n){const r=Ey(t,n);if(r){const i=Sy(r),s=i.path,o=i.queryId,a=Mt(s,e),l=new Ga(py(o),a);return Cy(t,s,l)}else return[]}function qp(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||KT(o,e))){const l=g2(o,e,n,r);f2(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const c=u.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(s,(d,p)=>qr(p));if(c&&!h){const d=t.syncPointTree_.subtree(s);if(!d.isEmpty()){const p=T2(d);for(let v=0;v<p.length;++v){const _=p[v],g=_.query,m=JT(t,_);t.listenProvider_.startListening(la(g),bc(t,g),m.hashFn,m.onComplete)}}}!h&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(la(e),null):u.forEach(d=>{const p=t.queryToTagMap.get(zh(d));t.listenProvider_.stopListening(la(d),p)}))}k2(t,u)}return a}function C2(t,e,n,r){const i=Ey(t,r);if(i!=null){const s=Sy(i),o=s.path,a=s.queryId,l=Mt(o,e),u=new Mi(py(a),l,n);return Cy(t,o,u)}else return[]}function I2(t,e,n,r){const i=Ey(t,r);if(i){const s=Sy(i),o=s.path,a=s.queryId,l=Mt(o,e),u=Se.fromObject(n),c=new Ka(py(a),l,u);return Cy(t,o,c)}else return[]}function pw(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,p)=>{const v=Mt(d,i);s=s||ks(p,v),o=o||qr(p)});let a=t.syncPointTree_.get(i);a?(o=o||qr(a),s=s||ks(a,fe())):(a=new c2,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=j.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((p,v)=>{const _=ks(v,fe());_&&(s=s.updateImmediateChild(p,_))}));const u=KT(a,e);if(!u&&!e._queryParams.loadsAllData()){const d=zh(e);A(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const p=R2();t.queryToTagMap.set(d,p),t.tagToQueryMap.set(p,d)}const c=my(t.pendingWriteTree_,i);let h=m2(a,e,n,c,s,l);if(!u&&!o&&!r){const d=GT(a,e);h=h.concat(N2(t,e,d))}return h}function wy(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Mt(o,e),u=ks(a,l);if(u)return u});return VT(i,e,s,n,!0)}function Nl(t,e){return YT(e,t.syncPointTree_,null,my(t.pendingWriteTree_,fe()))}function YT(t,e,n,r){if(re(t.path))return XT(t,e,n,r);{const i=e.get(fe());n==null&&i!=null&&(n=ks(i,fe()));let s=[];const o=te(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=zT(r,o);s=s.concat(YT(a,l,u,c))}return i&&(s=s.concat(_y(i,t,r,n))),s}}function XT(t,e,n,r){const i=e.get(fe());n==null&&i!=null&&(n=ks(i,fe()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=zT(r,o),c=t.operationForChild(o);c&&(s=s.concat(XT(c,a,l,u)))}),i&&(s=s.concat(_y(i,t,r,n))),s}function JT(t,e){const n=e.query,r=bc(t,n);return{hashFn:()=>(o2(e)||j.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?S2(t,n._path,r):E2(t,n._path);{const s=C$(i,n);return qp(t,n,null,s)}}}}function bc(t,e){const n=zh(e);return t.queryToTagMap.get(n)}function zh(t){return t._path.toString()+"$"+t._queryIdentifier}function Ey(t,e){return t.tagToQueryMap.get(e)}function Sy(t){const e=t.indexOf("$");return A(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ye(t.substr(0,e))}}function Cy(t,e,n){const r=t.syncPointTree_.get(e);A(r,"Missing sync point for query tag that we're tracking");const i=my(t.pendingWriteTree_,e);return _y(r,n,i,null)}function T2(t){return t.fold((e,n,r)=>{if(n&&qr(n))return[Uh(n)];{let i=[];return n&&(i=qT(n)),Vt(r,(s,o)=>{i=i.concat(o)}),i}})}function la(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(v2())(t._repo,t._path):t}function k2(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=zh(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function R2(){return _2++}function N2(t,e,n){const r=e._path,i=bc(t,e),s=JT(t,n),o=t.listenProvider_.startListening(la(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)A(!qr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,c,h)=>{if(!re(u)&&c&&qr(c))return[Uh(c).query];{let d=[];return c&&(d=d.concat(qT(c).map(p=>p.query))),Vt(h,(p,v)=>{d=d.concat(v)}),d}});for(let u=0;u<l.length;++u){const c=l[u];t.listenProvider_.stopListening(la(c),bc(t,c))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Iy(n)}node(){return this.node_}}class Ty{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=We(this.path_,e);return new Ty(this.syncTree_,n)}node(){return wy(this.syncTree_,this.path_)}}const A2=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},mw=function(t,e,n){if(!t||typeof t!="object")return t;if(A(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return D2(t[".sv"],e,n);if(typeof t[".sv"]=="object")return x2(t[".sv"],e);A(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},D2=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:A(!1,"Unexpected server value: "+t)}},x2=function(t,e,n){t.hasOwnProperty("increment")||A(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&A(!1,"Unexpected increment value: "+r);const i=e.node();if(A(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},P2=function(t,e,n,r){return ky(e,new Ty(n,t),r)},ZT=function(t,e,n){return ky(t,new Iy(e),n)};function ky(t,e,n){const r=t.getPriority().val(),i=mw(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=mw(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ye(a,at(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Ye(i))),o.forEachChild(Pe,(a,l)=>{const u=ky(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Ny(t,e){let n=e instanceof ye?e:new ye(e),r=t,i=te(n);for(;i!==null;){const s=Ms(r.node.children,i)||{children:{},childCount:0};r=new Ry(i,r,s),n=_e(n),i=te(n)}return r}function co(t){return t.node.value}function ek(t,e){t.node.value=e,Gp(t)}function tk(t){return t.node.childCount>0}function O2(t){return co(t)===void 0&&!tk(t)}function Bh(t,e){Vt(t.node.children,(n,r)=>{e(new Ry(n,t,r))})}function nk(t,e,n,r){n&&!r&&e(t),Bh(t,i=>{nk(i,e,!0,r)}),n&&r&&e(t)}function M2(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Al(t){return new ye(t.parent===null?t.name:Al(t.parent)+"/"+t.name)}function Gp(t){t.parent!==null&&L2(t.parent,t.name,t)}function L2(t,e,n){const r=O2(n),i=hr(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Gp(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Gp(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b2=/[\[\].#$\/\u0000-\u001F\u007F]/,F2=/[\[\].#$\u0000-\u001F\u007F]/,Zd=10*1024*1024,rk=function(t){return typeof t=="string"&&t.length!==0&&!b2.test(t)},ik=function(t){return typeof t=="string"&&t.length!==0&&!F2.test(t)},$2=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ik(t)},sk=function(t,e,n,r){r&&e===void 0||Ay(Jm(t,"value"),e,n)},Ay=function(t,e,n){const r=n instanceof ye?new nU(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+ii(r));if(typeof e=="function")throw new Error(t+"contains a function "+ii(r)+" with contents = "+e.toString());if(iT(e))throw new Error(t+"contains "+e.toString()+" "+ii(r));if(typeof e=="string"&&e.length>Zd/3&&ih(e)>Zd)throw new Error(t+"contains a string greater than "+Zd+" utf8 bytes "+ii(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Vt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!rk(o)))throw new Error(t+" contains an invalid key ("+o+") "+ii(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);rU(r,o),Ay(t,a,r),iU(r)}),i&&s)throw new Error(t+' contains ".value" child '+ii(r)+" in addition to actual children.")}},ok=function(t,e,n,r){if(!(r&&n===void 0)&&!ik(n))throw new Error(Jm(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},U2=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),ok(t,e,n,r)},ak=function(t,e){if(te(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},V2=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!rk(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!$2(n))throw new Error(Jm(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z2{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Dy(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!ly(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function lk(t,e,n){Dy(t,n),uk(t,r=>ly(r,e))}function lr(t,e,n){Dy(t,n),uk(t,r=>fn(r,e)||fn(e,r))}function uk(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(B2(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function B2(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();_i&&wt("event: "+n.toString()),uo(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j2="repo_interrupt",W2=25;class H2{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new z2,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ac(),this.transactionQueueTree_=new Ry,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function q2(t,e,n){if(t.stats_=oy(t.repoInfo_),t.forceRestClient_||R$())t.server_=new Nc(t.repoInfo_,(r,i,s,o)=>{gw(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>yw(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{et(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Xn(t.repoInfo_,e,(r,i,s,o)=>{gw(t,r,i,s,o)},r=>{yw(t,r)},r=>{G2(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=P$(t.repoInfo_,()=>new DU(t.stats_,t.server_)),t.infoData_=new TU,t.infoSyncTree_=new fw({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Vh(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Py(t,"connected",!1),t.serverSyncTree_=new fw({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);lr(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function ck(t){const n=t.infoData_.getNode(new ye(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function xy(t){return A2({timestamp:ck(t)})}function gw(t,e,n,r,i){t.dataUpdateCount++;const s=new ye(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=tc(n,u=>at(u));o=I2(t.serverSyncTree_,s,l,i)}else{const l=at(n);o=C2(t.serverSyncTree_,s,l,i)}else if(r){const l=tc(n,u=>at(u));o=w2(t.serverSyncTree_,s,l)}else{const l=at(n);o=Vh(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=jh(t,s)),lr(t.eventQueue_,a,o)}function yw(t,e){Py(t,"connected",e),e===!1&&Q2(t)}function G2(t,e){Vt(e,(n,r)=>{Py(t,n,r)})}function Py(t,e,n){const r=new ye("/.info/"+e),i=at(n);t.infoData_.updateSnapshot(r,i);const s=Vh(t.infoSyncTree_,r,i);lr(t.eventQueue_,r,s)}function hk(t){return t.nextWriteId_++}function K2(t,e,n,r,i){Oy(t,"set",{path:e.toString(),value:n,priority:r});const s=xy(t),o=at(n,r),a=wy(t.serverSyncTree_,e),l=ZT(o,a,s),u=hk(t),c=QT(t.serverSyncTree_,e,l,u,!0);Dy(t.eventQueue_,c),t.server_.put(e.toString(),o.val(!0),(d,p)=>{const v=d==="ok";v||Ut("set at "+e+" failed: "+d);const _=fi(t.serverSyncTree_,u,!v);lr(t.eventQueue_,e,_),J2(t,i,d,p)});const h=gk(t,e);jh(t,h),lr(t.eventQueue_,h,[])}function Q2(t){Oy(t,"onDisconnectEvents");const e=xy(t),n=Ac();Vp(t.onDisconnect_,fe(),(i,s)=>{const o=P2(i,s,t.serverSyncTree_,e);LT(n,i,o)});let r=[];Vp(n,fe(),(i,s)=>{r=r.concat(Vh(t.serverSyncTree_,i,s));const o=gk(t,i);jh(t,o)}),t.onDisconnect_=Ac(),lr(t.eventQueue_,fe(),r)}function Y2(t,e,n){let r;te(e._path)===".info"?r=pw(t.infoSyncTree_,e,n):r=pw(t.serverSyncTree_,e,n),lk(t.eventQueue_,e._path,r)}function vw(t,e,n){let r;te(e._path)===".info"?r=qp(t.infoSyncTree_,e,n):r=qp(t.serverSyncTree_,e,n),lk(t.eventQueue_,e._path,r)}function X2(t){t.persistentConnection_&&t.persistentConnection_.interrupt(j2)}function Oy(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),wt(n,...e)}function J2(t,e,n,r){e&&uo(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function dk(t,e,n){return wy(t.serverSyncTree_,e,n)||j.EMPTY_NODE}function My(t,e=t.transactionQueueTree_){if(e||Wh(t,e),co(e)){const n=pk(t,e);A(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Z2(t,Al(e),n)}else tk(e)&&Bh(e,n=>{My(t,n)})}function Z2(t,e,n){const r=n.map(u=>u.currentWriteId),i=dk(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];A(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const h=Mt(e,c.path);s=s.updateChild(h,c.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{Oy(t,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,c=c.concat(fi(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Wh(t,Ny(t.transactionQueueTree_,e)),My(t,t.transactionQueueTree_),lr(t.eventQueue_,e,c);for(let d=0;d<h.length;d++)uo(h[d])}else{if(u==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Ut("transaction at "+l.toString()+" failed: "+u);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=u}jh(t,e)}},o)}function jh(t,e){const n=fk(t,e),r=Al(n),i=pk(t,n);return eV(t,i,r),r}function eV(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=Mt(n,l.path);let c=!1,h;if(A(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,h=l.abortReason,i=i.concat(fi(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=W2)c=!0,h="maxretry",i=i.concat(fi(t.serverSyncTree_,l.currentWriteId,!0));else{const d=dk(t,l.path,o);l.currentInputSnapshot=d;const p=e[a].update(d.val());if(p!==void 0){Ay("transaction failed: Data returned ",p,l.path);let v=at(p);typeof p=="object"&&p!=null&&hr(p,".priority")||(v=v.updatePriority(d.getPriority()));const g=l.currentWriteId,m=xy(t),f=ZT(v,d,m);l.currentOutputSnapshotRaw=v,l.currentOutputSnapshotResolved=f,l.currentWriteId=hk(t),o.splice(o.indexOf(g),1),i=i.concat(QT(t.serverSyncTree_,l.path,f,l.currentWriteId,l.applyLocally)),i=i.concat(fi(t.serverSyncTree_,g,!0))}else c=!0,h="nodata",i=i.concat(fi(t.serverSyncTree_,l.currentWriteId,!0))}lr(t.eventQueue_,n,i),i=[],c&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(h),!1,null))))}Wh(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)uo(r[a]);My(t,t.transactionQueueTree_)}function fk(t,e){let n,r=t.transactionQueueTree_;for(n=te(e);n!==null&&co(r)===void 0;)r=Ny(r,n),e=_e(e),n=te(e);return r}function pk(t,e){const n=[];return mk(t,e,n),n.sort((r,i)=>r.order-i.order),n}function mk(t,e,n){const r=co(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Bh(e,i=>{mk(t,i,n)})}function Wh(t,e){const n=co(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,ek(e,n.length>0?n:void 0)}Bh(e,r=>{Wh(t,r)})}function gk(t,e){const n=Al(fk(t,e)),r=Ny(t.transactionQueueTree_,e);return M2(r,i=>{ef(t,i)}),ef(t,r),nk(r,i=>{ef(t,i)}),n}function ef(t,e){const n=co(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(A(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(A(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(fi(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?ek(e,void 0):n.length=s+1,lr(t.eventQueue_,Al(e),i);for(let o=0;o<r.length;o++)uo(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tV(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function nV(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Ut(`Invalid query segment '${n}' in query '${t}'`)}return e}const _w=function(t,e){const n=rV(t),r=n.namespace;n.domain==="firebase.com"&&ar(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&ar("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||v$();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new gT(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new ye(n.pathString)}},rV=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(c,h)),c<h&&(i=tV(t.substring(c,h)));const d=nV(t.substring(Math.min(t.length,h)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const p=e.slice(0,u);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in d&&(s=d.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ww="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",iV=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=ww.charAt(n%64),n=Math.floor(n/64);A(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=ww.charAt(e[i]);return A(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+et(this.snapshot.exportVal())}}class vk{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sV{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return A(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return re(this._path)?null:TT(this._path)}get ref(){return new dr(this._repo,this._path)}get _queryIdentifier(){const e=nw(this._queryParams),n=iy(e);return n==="{}"?"default":n}get _queryObject(){return nw(this._queryParams)}isEqual(e){if(e=be(e),!(e instanceof Ly))return!1;const n=this._repo===e._repo,r=ly(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+tU(this._path)}}class dr extends Ly{constructor(e,n){super(e,n,new dy,!1)}get parent(){const e=RT(this._path);return e===null?null:new dr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Qa{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ye(e),r=qs(this.ref,e);return new Qa(this._node.getChild(n),r,Pe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Qa(i,qs(this.ref,r),Pe)))}hasChild(e){const n=new ye(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function tf(t,e){return t=be(t),t._checkNotDeleted("ref"),e!==void 0?qs(t._root,e):t._root}function qs(t,e){return t=be(t),te(t._path)===null?U2("child","path",e,!1):ok("child","path",e,!1),new dr(t._repo,We(t._path,e))}function Ew(t,e){t=be(t),ak("push",t._path),sk("push",e,t._path,!0);const n=ck(t._repo),r=iV(n),i=qs(t,r),s=qs(t,r);let o;return e!=null?o=Kp(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function Kp(t,e){t=be(t),ak("set",t._path),sk("set",e,t._path,!1);const n=new rh;return K2(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class by{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new yk("value",this,new Qa(e.snapshotNode,new dr(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new vk(this,e,n):null}matches(e){return e instanceof by?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Fy{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new vk(this,e,n):null}createEvent(e,n){A(e.childName!=null,"Child events should have a childName.");const r=qs(new dr(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new yk(e.type,this,new Qa(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Fy?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function oV(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,u=(c,h)=>{vw(t._repo,t,a),l(c,h)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new sV(n,s||void 0),a=e==="value"?new by(o):new Fy(e,o);return Y2(t._repo,t,a),()=>vw(t._repo,t,a)}function aV(t,e,n,r){return oV(t,"child_added",e,n,r)}h2(dr);y2(dr);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lV="FIREBASE_DATABASE_EMULATOR_HOST",Qp={};let uV=!1;function cV(t,e,n,r){t.repoInfo_=new gT(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function hV(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||ar("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),wt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=_w(s,i),a=o.repoInfo,l,u;typeof process<"u"&&process.env&&(u=process.env[lV]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=_w(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const c=i&&l?new Is(Is.OWNER):new A$(t.name,t.options,e);V2("Invalid Firebase Database URL",o),re(o.path)||ar("Database URL must point to the root of a Firebase Database (not including a child path).");const h=fV(a,t,c,new N$(t.name,n));return new pV(h,t)}function dV(t,e){const n=Qp[e];(!n||n[t.key]!==t)&&ar(`Database ${e}(${t.repoInfo_}) has already been deleted.`),X2(t),delete n[t.key]}function fV(t,e,n,r){let i=Qp[e.name];i||(i={},Qp[e.name]=i);let s=i[t.toURLString()];return s&&ar("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new H2(t,uV,n,r),i[t.toURLString()]=s,s}class pV{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(q2(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new dr(this._repo,fe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(dV(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ar("Cannot call "+e+" on a deleted database.")}}function mV(t=eg(),e){const n=oh(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=JS("database");r&&gV(n,...r)}return n}function gV(t,e,n,r={}){t=be(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&ar("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&ar('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Is(Is.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:eC(r.mockUserToken,t.app.options.projectId);s=new Is(o)}cV(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yV(t){f$(Zs),Ni(new zr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return hV(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Pn(U0,V0,t),Pn(U0,V0,"esm2017")}Xn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Xn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};yV();const vV={apiKey:"AIzaSyB243RFUqGfCV4Cai1jthFRrvghEPmaX5g",authDomain:"chat-app-64111.firebaseapp.com",projectId:"chat-app-64111",storageBucket:"chat-app-64111.appspot.com",messagingSenderId:"1007274908455",appId:"1:1007274908455:web:fa789e69eda0de05386702"},$y=oC(vV),Fc=sM($y),nf=HF($y),rf=mV($y),_V=()=>{const[t,e]=P.useState(!1),[n,r]=P.useState(null),[i,s]=P.useState(!0),o=iD();return P.useEffect(()=>{const a=WP(Fc,l=>{s(!1),l!==null?(r(l),e(!!l)):(r(null),e(!1)),console.log("Our user is: ",l)});return i||o(t?"/chat":"/login"),a},[t,i]),oe(qS.Provider,{value:n,children:i?oe("div",{children:"Loading..."}):oe(yD,{})})},wV=()=>{const[t,e]=P.useState(""),[n,r]=P.useState("");function i(){VP(Fc,t,n).then(({user:o})=>{console.log(o)})}function s(){zP(Fc,t,n).then(({user:o})=>{console.log(o)})}return oe("div",{className:"container",children:Tn("div",{className:"login",children:[oe("div",{children:"Login / Create Account"}),oe("input",{type:"email",value:t,onChange:o=>e(o.target.value),placeholder:"Email"}),oe("input",{type:"password",value:n,onChange:o=>r(o.target.value),placeholder:"Password"}),Tn("div",{className:"login-controls",children:[oe("button",{className:"secondary",onClick:i,children:"Create Account"}),oe("button",{onClick:s,children:"Sign In"})]})]})})},EV=t=>{if(!t.latitude||!t.longitude)return oe("p",{children:'"Could not share location"'});let e="https://www.google.com/maps/embed/v1/place";return e+="?key=AIzaSyCKLK88KSPJDGICEcAYoVFfBE42aknKAqo",e+="&q="+t.latitude+","+t.longitude,e+="&center="+t.latitude+","+t.longitude,e+="&maptype=satellite",oe("iframe",{width:"450",height:"250",frameBorder:"0",referrerPolicy:"no-referrer-when-downgrade",src:e})},SV=()=>{const t=P.useContext(qS),[e,n]=P.useState([]),[r,i]=P.useState([]),[s,o]=P.useState(null),[a,l]=P.useState(""),[u,c]=P.useState(""),[h,d]=P.useState(""),[p,v]=P.useState("");P.useEffect(()=>{async function w(){const S=await $0(L0(Gd(nf,"rooms"))),k=[];S.forEach(x=>{k.push({...x.data(),id:x.id})}),i(k)}w()},[]),console.log(r),P.useEffect(()=>{if(n([]),!s)return;const w=tf(rf,`/messages/${s.id}`);return aV(w,k=>{console.log("Message recieved");const x={...k.val(),id:k.key};n(D=>[x,...D])})},[s]);async function _(){if(!p||!h)return;const w={name:h,code:p,creatorId:t.uid},S=await h$(Gd(nf,"rooms"),w);w.id=S.id,i([...r,w])}function g(w){o(w)}async function m(){if(a==="")return;const w=await $0(L0(Gd(nf,"rooms"),r$("code","==",a))),S=[];w.forEach(k=>{S.push({...k.data(),id:k.id})}),S.length>0&&(console.log(S),g(S[0]))}function f(){const w=tf(rf,`/messages/${s.id}`),S=Ew(w);Kp(S,{authorId:t.uid,authorEmail:t.email,contentType:"message",content:u})}function y(){navigator.geolocation.getCurrentPosition(w=>{const S=tf(rf,`/messages/${s.id}`),k=Ew(S);Kp(k,{authorId:t.uid,authorEmail:t.email,contentType:"map",latitude:w.coords.latitude,longitude:w.coords.longitude})})}return Tn("div",{className:"panels",children:[Tn("div",{className:"rooms-panel",children:[oe("h2",{children:"Rooms"}),Tn("div",{className:"create-room",children:[oe("input",{type:"text",placeholder:"Room Name",value:h,onChange:w=>d(w.target.value)}),oe("input",{type:"text",placeholder:"Code",value:p,onChange:w=>v(w.target.value)}),oe("div",{className:"create-room-controls",children:oe("button",{onClick:_,children:"Create Room"})})]}),oe("div",{children:r.map(w=>Tn("div",{className:"room",children:[oe("div",{children:w.name}),oe("button",{onClick:()=>g(w),children:"Join"})]},w.id))})]}),s?Tn("div",{className:"chat-panel",children:[oe("div",{className:"messages",children:e.map(w=>Tn("div",{children:[oe("h3",{children:w.authorEmail}),w.contentType=="message"?w.content:null,w.contentType=="map"?oe(EV,{latitude:w.latitude,longitude:w.longitude}):null]},w.id))}),Tn("div",{className:"chatbar",children:[oe("input",{type:"text",className:"chat-input",placeholder:"Message",value:u,onChange:w=>c(w.target.value)}),oe("button",{className:"share-location-button",onClick:y,children:"Share Location"}),oe("button",{className:"send-button",onClick:f,children:"Send"})]})]}):Tn("div",{className:"join-room",children:[oe("h2",{children:"Chat"}),oe("input",{type:"text",value:a,onChange:w=>l(w.target.value),placeholder:"Room Code"}),oe("button",{onClick:()=>m(),children:"Join"}),oe("button",{onClick:()=>HP(Fc),children:"Logout"})]})]})},CV=SD([{path:"/",element:oe(_V,{}),children:[{path:"/login",element:oe(wV,{})},{path:"/chat",element:oe(SV,{})}]}]);function IV(){return oe(gD,{router:CV})}of.createRoot(document.getElementById("root")).render(oe(Aw.StrictMode,{children:oe(IV,{})}));
