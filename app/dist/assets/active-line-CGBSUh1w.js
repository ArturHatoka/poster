import{g as y}from"./index-D7k-th8B.js";import{e as A}from"./index.C-pJD9LT.entry.js";function S(l,u){for(var r=0;r<u.length;r++){const a=u[r];if(typeof a!="string"&&!Array.isArray(a)){for(const i in a)if(i!=="default"&&!(i in l)){const o=Object.getOwnPropertyDescriptor(a,i);o&&Object.defineProperty(l,i,o.get?o:{enumerable:!0,get:()=>a[i]})}}}return Object.freeze(Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}))}var b={exports:{}};(function(l,u){(function(r){r(A())})(function(r){var a="CodeMirror-activeline",i="CodeMirror-activeline-background",o="CodeMirror-activeline-gutter";r.defineOption("styleActiveLine",!1,function(e,n,t){var s=t==r.Init?!1:t;n!=s&&(s&&(e.off("beforeSelectionChange",g),c(e),delete e.state.activeLines),n&&(e.state.activeLines=[],L(e,e.listSelections()),e.on("beforeSelectionChange",g)))});function c(e){for(var n=0;n<e.state.activeLines.length;n++)e.removeLineClass(e.state.activeLines[n],"wrap",a),e.removeLineClass(e.state.activeLines[n],"background",i),e.removeLineClass(e.state.activeLines[n],"gutter",o)}function h(e,n){if(e.length!=n.length)return!1;for(var t=0;t<e.length;t++)if(e[t]!=n[t])return!1;return!0}function L(e,n){for(var t=[],s=0;s<n.length;s++){var v=n[s],p=e.getOption("styleActiveLine");if(!(typeof p=="object"&&p.nonEmpty?v.anchor.line!=v.head.line:!v.empty())){var d=e.getLineHandleVisualStart(v.head.line);t[t.length-1]!=d&&t.push(d)}}h(e.state.activeLines,t)||e.operation(function(){c(e);for(var f=0;f<t.length;f++)e.addLineClass(t[f],"wrap",a),e.addLineClass(t[f],"background",i),e.addLineClass(t[f],"gutter",o);e.state.activeLines=t})}function g(e,n){L(e,n.ranges)}})})();var C=b.exports;const _=y(C),x=S({__proto__:null,default:_},[C]);export{x as a};