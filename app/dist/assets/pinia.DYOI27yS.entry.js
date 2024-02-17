import{az as D,i as J,av as N,e as U,aJ as z,L as B,aF as C,aD as W,bi as M,w as tt,r as et,aw as nt,aW as st,n as ot,bj as rt,c as ct}from"./runtime-core.esm-bundler-B9Ihh7Ob.js";var it=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let A;const R=t=>A=t,St=()=>D()&&J(E)||A,E=Symbol();function I(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var x;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(x||(x={}));const ut=typeof window<"u";function dt(){const t=N(!0),s=t.run(()=>U({}));let n=[],e=[];const o=z({install(c){R(o),o._a=c,c.provide(E,o),c.config.globalProperties.$pinia=o,e.forEach(a=>n.push(a)),e=[]},use(c){return!this._a&&!it?e.push(c):n.push(c),this},_p:n,_a:null,_e:t,_s:new Map,state:s});return o}function yt(t,s){return()=>{}}const K=()=>{};function V(t,s,n,e=K){t.push(s);const o=()=>{const c=t.indexOf(s);c>-1&&(t.splice(c,1),e())};return!n&&nt()&&st(o),o}function j(t,...s){t.slice().forEach(n=>{n(...s)})}const at=t=>t();function L(t,s){t instanceof Map&&s instanceof Map&&s.forEach((n,e)=>t.set(e,n)),t instanceof Set&&s instanceof Set&&s.forEach(t.add,t);for(const n in s){if(!s.hasOwnProperty(n))continue;const e=s[n],o=t[n];I(o)&&I(e)&&t.hasOwnProperty(n)&&!C(e)&&!W(e)?t[n]=L(o,e):t[n]=e}return t}const q=Symbol();function mt(t){return Object.defineProperty(t,q,{})}function ft(t){return!I(t)||!t.hasOwnProperty(q)}const{assign:v}=Object;function lt(t){return!!(C(t)&&t.effect)}function ht(t,s,n,e){const{state:o,actions:c,getters:a}=s,u=n.state.value[t];let P;function b(){u||(n.state.value[t]=o?o():{});const p=rt(n.state.value[t]);return v(p,c,Object.keys(a||{}).reduce((d,y)=>(d[y]=z(ct(()=>{R(n);const m=n._s.get(t);return a[y].call(m,m)})),d),{}))}return P=G(t,b,s,n,e,!0),P}function G(t,s,n={},e,o,c){let a;const u=v({actions:{}},n),P={deep:!0};let b,p,d=[],y=[],m;const _=e.state.value[t];!c&&!_&&(e.state.value[t]={}),U({});let F;function H(i){let r;b=p=!1,typeof i=="function"?(i(e.state.value[t]),r={type:x.patchFunction,storeId:t,events:m}):(L(e.state.value[t],i),r={type:x.patchObject,payload:i,storeId:t,events:m});const h=F=Symbol();ot().then(()=>{F===h&&(b=!0)}),p=!0,j(d,r,e.state.value[t])}const Q=c?function(){const{state:r}=n,h=r?r():{};this.$patch(S=>{v(S,h)})}:K;function X(){a.stop(),d=[],y=[],e._s.delete(t)}function Y(i,r){return function(){R(e);const h=Array.from(arguments),S=[],$=[];function T(f){S.push(f)}function k(f){$.push(f)}j(y,{args:h,name:i,store:l,after:T,onError:k});let w;try{w=r.apply(this&&this.$id===t?this:l,h)}catch(f){throw j($,f),f}return w instanceof Promise?w.then(f=>(j(S,f),f)).catch(f=>(j($,f),Promise.reject(f))):(j(S,w),w)}}const Z={_p:e,$id:t,$onAction:V.bind(null,y),$patch:H,$reset:Q,$subscribe(i,r={}){const h=V(d,i,r.detached,()=>S()),S=a.run(()=>tt(()=>e.state.value[t],$=>{(r.flush==="sync"?p:b)&&i({storeId:t,type:x.direct,events:m},$)},v({},P,r)));return h},$dispose:X},l=et(Z);e._s.set(t,l);const g=(e._a&&e._a.runWithContext||at)(()=>e._e.run(()=>(a=N()).run(s)));for(const i in g){const r=g[i];if(C(r)&&!lt(r)||W(r))c||(_&&ft(r)&&(C(r)?r.value=_[i]:L(r,_[i])),e.state.value[t][i]=r);else if(typeof r=="function"){const h=Y(i,r);g[i]=h,u.actions[i]=r}}return v(l,g),v(B(l),g),Object.defineProperty(l,"$state",{get:()=>e.state.value[t],set:i=>{H(r=>{v(r,i)})}}),e._p.forEach(i=>{v(l,a.run(()=>i({store:l,app:e._a,pinia:e,options:u})))}),_&&c&&n.hydrate&&n.hydrate(l.$state,_),b=!0,p=!0,l}function _t(t,s,n){let e,o;const c=typeof s=="function";typeof t=="string"?(e=t,o=c?n:s):(o=t,e=t.id);function a(u,P){const b=D();return u=u||(b?J(E,null):null),u&&R(u),u=A,u._s.has(e)||(c?G(e,s,o,u):ht(e,o,u)),u._s.get(e)}return a.$id=e,a}let O="Store";function jt(t){O=t}function Pt(...t){return t.reduce((s,n)=>(s[n.$id+O]=function(){return n(this.$pinia)},s),{})}function bt(t,s){return Array.isArray(s)?s.reduce((n,e)=>(n[e]=function(){return t(this.$pinia)[e]},n),{}):Object.keys(s).reduce((n,e)=>(n[e]=function(){const o=t(this.$pinia),c=s[e];return typeof c=="function"?c.call(this,o):o[c]},n),{})}const gt=bt;function $t(t,s){return Array.isArray(s)?s.reduce((n,e)=>(n[e]=function(...o){return t(this.$pinia)[e](...o)},n),{}):Object.keys(s).reduce((n,e)=>(n[e]=function(...o){return t(this.$pinia)[s[e]](...o)},n),{})}function wt(t,s){return Array.isArray(s)?s.reduce((n,e)=>(n[e]={get(){return t(this.$pinia)[e]},set(o){return t(this.$pinia)[e]=o}},n),{}):Object.keys(s).reduce((n,e)=>(n[e]={get(){return t(this.$pinia)[s[e]]},set(o){return t(this.$pinia)[s[e]]=o}},n),{})}function xt(t){{t=B(t);const s={};for(const n in t){const e=t[n];(C(e)||W(e))&&(s[n]=M(t,n))}return s}}const Ct=function(t){t.mixin({beforeCreate(){const s=this.$options;if(s.pinia){const n=s.pinia;if(!this._provided){const e={};Object.defineProperty(this,"_provided",{get:()=>e,set:o=>Object.assign(e,o)})}this._provided[E]=n,this.$pinia||(this.$pinia=n),n._a=this,ut&&R(n)}else!this.$pinia&&s.parent&&s.parent.$pinia&&(this.$pinia=s.parent.$pinia)},destroyed(){delete this._pStores}})};export{x as MutationType,Ct as PiniaVuePlugin,yt as acceptHMRUpdate,dt as createPinia,_t as defineStore,St as getActivePinia,$t as mapActions,gt as mapGetters,bt as mapState,Pt as mapStores,wt as mapWritableState,R as setActivePinia,jt as setMapStoreSuffix,mt as skipHydrate,xt as storeToRefs};
