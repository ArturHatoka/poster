import{g as u}from"./index-D7k-th8B.js";import{e as s}from"./index.C-pJD9LT.entry.js";function c(t,f){for(var o=0;o<f.length;o++){const i=f[o];if(typeof i!="string"&&!Array.isArray(i)){for(const e in i)if(e!=="default"&&!(e in t)){const n=Object.getOwnPropertyDescriptor(i,e);n&&Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:()=>i[e]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var x={exports:{}};(function(t,f){(function(o){o(s())})(function(o){o.defineMode("properties",function(){return{token:function(i,e){var n=i.sol()||e.afterSection,p=i.eol();if(e.afterSection=!1,n&&(e.nextMultiline?(e.inMultiline=!0,e.nextMultiline=!1):e.position="def"),p&&!e.nextMultiline&&(e.inMultiline=!1,e.position="def"),n)for(;i.eatSpace(););var r=i.next();return n&&(r==="#"||r==="!"||r===";")?(e.position="comment",i.skipToEnd(),"comment"):n&&r==="["?(e.afterSection=!0,i.skipTo("]"),i.eat("]"),"header"):r==="="||r===":"?(e.position="quote",null):(r==="\\"&&e.position==="quote"&&i.eol()&&(e.nextMultiline=!0),e.position)},startState:function(){return{position:"def",nextMultiline:!1,inMultiline:!1,afterSection:!1}}}}),o.defineMIME("text/x-properties","properties"),o.defineMIME("text/x-ini","properties")})})();var l=x.exports;const d=u(l),g=c({__proto__:null,default:d},[l]);export{g as p};
