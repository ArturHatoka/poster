import{g as x}from"./index-D7k-th8B.js";import{e as S,g as C}from"./index.C-pJD9LT.entry.js";function $(g,u){for(var a=0;a<u.length;a++){const l=u[a];if(typeof l!="string"&&!Array.isArray(l)){for(const s in l)if(s!=="default"&&!(s in g)){const h=Object.getOwnPropertyDescriptor(l,s);h&&Object.defineProperty(g,s,h.get?h:{enumerable:!0,get:()=>l[s]})}}}return Object.freeze(Object.defineProperty(g,Symbol.toStringTag,{value:"Module"}))}var j={exports:{}};(function(g,u){(function(a){a(S(),C)})(function(a){var l={style:"matchhighlight",minChars:2,delay:100,wordsOnly:!1,annotateScrollbar:!1,showToken:!1,trim:!0};function s(t){this.options={};for(var e in l)this.options[e]=(t&&t.hasOwnProperty(e)?t:l)[e];this.overlay=this.timeout=null,this.matchesonscroll=null,this.active=!1}a.defineOption("highlightSelectionMatches",!1,function(t,e,i){if(i&&i!=a.Init&&(O(t),clearTimeout(t.state.matchHighlighter.timeout),t.state.matchHighlighter=null,t.off("cursorActivity",h),t.off("focus",y)),e){var o=t.state.matchHighlighter=new s(e);t.hasFocus()?(o.active=!0,b(t)):t.on("focus",y),t.on("cursorActivity",h)}});function h(t){var e=t.state.matchHighlighter;(e.active||t.hasFocus())&&w(t,e)}function y(t){var e=t.state.matchHighlighter;e.active||(e.active=!0,w(t,e))}function w(t,e){clearTimeout(e.timeout),e.timeout=setTimeout(function(){b(t)},e.options.delay)}function d(t,e,i,o){var r=t.state.matchHighlighter;if(t.addOverlay(r.overlay=k(e,i,o)),r.options.annotateScrollbar&&t.showMatchesOnScrollbar){var n=i?new RegExp((/\w/.test(e.charAt(0))?"\\b":"")+e.replace(/[\\\[.+*?(){|^$]/g,"\\$&")+(/\w/.test(e.charAt(e.length-1))?"\\b":"")):e;r.matchesonscroll=t.showMatchesOnScrollbar(n,!1,{className:"CodeMirror-selection-highlight-scrollbar"})}}function O(t){var e=t.state.matchHighlighter;e.overlay&&(t.removeOverlay(e.overlay),e.overlay=null,e.matchesonscroll&&(e.matchesonscroll.clear(),e.matchesonscroll=null))}function b(t){t.operation(function(){var e=t.state.matchHighlighter;if(O(t),!t.somethingSelected()&&e.options.showToken){for(var i=e.options.showToken===!0?/[\w$]/:e.options.showToken,o=t.getCursor(),r=t.getLine(o.line),n=o.ch,c=n;n&&i.test(r.charAt(n-1));)--n;for(;c<r.length&&i.test(r.charAt(c));)++c;n<c&&d(t,r.slice(n,c),i,e.options.style);return}var v=t.getCursor("from"),p=t.getCursor("to");if(v.line==p.line&&!(e.options.wordsOnly&&!H(t,v,p))){var f=t.getRange(v,p);e.options.trim&&(f=f.replace(/^\s+|\s+$/g,"")),f.length>=e.options.minChars&&d(t,f,!1,e.options.style)}})}function H(t,e,i){var o=t.getRange(e,i);if(o.match(/^\w+$/)!==null){if(e.ch>0){var r={line:e.line,ch:e.ch-1},n=t.getRange(r,e);if(n.match(/\W/)===null)return!1}if(i.ch<t.getLine(e.line).length){var r={line:i.line,ch:i.ch+1},n=t.getRange(i,r);if(n.match(/\W/)===null)return!1}return!0}else return!1}function T(t,e){return(!t.start||!e.test(t.string.charAt(t.start-1)))&&(t.pos==t.string.length||!e.test(t.string.charAt(t.pos)))}function k(t,e,i){return{token:function(o){if(o.match(t)&&(!e||T(o,e)))return i;o.next(),o.skipTo(t.charAt(0))||o.skipToEnd()}}}})})();var A=j.exports;const m=x(A),R=$({__proto__:null,default:m},[A]);export{R as m};
