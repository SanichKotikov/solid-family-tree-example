(window.webpackJsonp=window.webpackJsonp||[]).push([[2],[function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return l})),n.d(t,"e",(function(){return a})),n.d(t,"f",(function(){return d}));var i=n(1);new Set(["abort","animationstart","animationend","animationiteration","blur","change","copy","cut","error","focus","gotpointercapture","load","loadend","loadstart","lostpointercapture","mouseenter","mouseleave","paste","progress","reset","scroll","select","submit","transitionstart","transitioncancel","transitionend","transitionrun"]);function r(e,t,n){let i=n.length,r=t.length,o=i,s=0,l=0,d=t[r-1].nextSibling,c=null;for(;s<r||l<o;)if(r===s){const t=o<i?l?n[l-1].nextSibling:n[o-l]:d;for(;l<o;)e.insertBefore(n[l++],t)}else if(o===l)for(;s<r;)c&&c.has(t[s])||e.removeChild(t[s]),s++;else if(t[s]===n[l])s++,l++;else if(t[r-1]===n[o-1])r--,o--;else{if(r-s===1&&o-l===1){c&&c.has(t[s])||t[s].parentNode!==e?e.insertBefore(n[l],o<i?n[o]:d):e.replaceChild(n[l],t[s]);break}if(t[s]===n[o-1]&&n[l]===t[r-1]){const i=t[--r].nextSibling;e.insertBefore(n[l++],t[s++].nextSibling),e.insertBefore(n[--o],i),t[r]=n[o]}else{if(!c){c=new Map;let e=l;for(;e<o;)c.set(n[e],e++)}if(c.has(t[s])){const i=c.get(t[s]);if(l<i&&i<o){let d=s,f=1;for(;++d<r&&d<o&&c.has(t[d])&&c.get(t[d])===i+f;)f++;if(f>i-l){const r=t[s];for(;l<i;)e.insertBefore(n[l++],r)}else e.replaceChild(n[l++],t[s++])}else s++}else e.removeChild(t[s++])}}}const o=new Set,s=globalThis._$HYDRATION||(globalThis._$HYDRATION={});function l(e,t){let n;return Object(i.f)(i=>{n=i,u(t,e(),t.firstChild?null:void 0)}),n}function d(e,t,n){const i=document.createElement("template");if(i.innerHTML=e,t&&i.innerHTML.split("<").length-1!==t)throw"Template html does not match input:\n".concat(i.innerHTML,"\n\n").concat(e);let r=i.content.firstChild;return n&&(r=r.firstChild),r}function c(e){for(let t=0,n=e.length;t<n;t++){const n=e[t];o.has(n)||(o.add(n),document.addEventListener(n,p))}}function f(e,t,n){const i=Object.keys(t);for(let r=0,o=i.length;r<o;r++){const o=i[r],s=!!t[o],l=o.split(/\s+/);if(o&&(!n||n[o]!==s))for(let t=0,n=l.length;t<n;t++)e.classList.toggle(l[t],s)}return t}function a(e,t,n){const i=e.style;if("string"===typeof t)return i.cssText=t;let r,o;if(null!=n&&"string"!==typeof n){for(o in t)r=t[o],r!==n[o]&&i.setProperty(o,r);for(o in n)null==t[o]&&i.removeProperty(o)}else for(o in t)i.setProperty(o,t[o]);return t}function u(e,t,n,r){if(void 0===n||r||(r=[]),"function"!==typeof t)return h(e,t,r,n);Object(i.d)(i=>h(e,t(),i,n),r)}function p(e){const t="__".concat(e.type);let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get:()=>n});null!==n;){const i=n[t];if(i){const r=n["".concat(t,"Data")];if(r?i(r,e):i(e),e.cancelBubble)return}n=n.host&&n.host instanceof Node?n.host:n.parentNode}}function h(e,t,n,o,l){for(;"function"===typeof n;)n=n();if(t===n)return n;const d=typeof t,c=void 0!==o;if(e=c&&n[0]&&n[0].parentNode||e,"string"===d||"number"===d)if("number"===d&&(t=t.toString()),c){let i=n[0];i&&3===i.nodeType?i.data=t:i=document.createTextNode(t),n=b(e,n,o,i)}else n=""!==n&&"string"===typeof n?e.firstChild.data=t:e.textContent=t;else if(null==t||"boolean"===d){if(s.context&&s.context.registry)return n;n=b(e,n,o)}else{if("function"===d)return Object(i.d)(()=>n=h(e,t(),n,o)),()=>n;if(Array.isArray(t)){const d=[];if(function e(t,n,i){let r=!1;for(let o=0,s=n.length;o<s;o++){let s,l=n[o];if(l instanceof Node)t.push(l);else if(null==l||!0===l||!1===l);else if(Array.isArray(l))r=e(t,l)||r;else if("string"===(s=typeof l))t.push(document.createTextNode(l));else if("function"===s)if(i){const n=l();r=e(t,Array.isArray(n)?n:[n])||r}else t.push(l),r=!0;else t.push(document.createTextNode(l.toString()))}return r}(d,t,l))return Object(i.d)(()=>n=h(e,d,n,o,!0)),()=>n;if(s.context&&s.context.registry)return d;if(0===d.length){if(n=b(e,n,o),c)return n}else Array.isArray(n)?0===n.length?g(e,d,o):r(e,n,d):null==n||""===n?g(e,d):r(e,c&&n||[e.firstChild],d);n=d}else if(t instanceof Node){if(Array.isArray(n)){if(c)return n=b(e,n,o,t);b(e,n,null,t)}else null!=n&&""!==n&&e.firstChild?e.replaceChild(t,e.firstChild):e.appendChild(t);n=t}else console.warn("Skipped inserting",t)}return n}function g(e,t,n){for(let i=0,r=t.length;i<r;i++)e.insertBefore(t[i],n)}function b(e,t,n,i){if(void 0===n)return e.textContent="";const r=i||document.createTextNode("");if(t.length){let i=!1;for(let o=t.length-1;o>=0;o--){const s=t[o];if(r!==s){const t=s.parentNode===e;i||o?t&&e.removeChild(s):t?e.replaceChild(r,s):e.insertBefore(r,n)}else i=!0}}else e.insertBefore(r,n);return[r]}},function(e,t,n){"use strict";n.d(t,"a",(function(){return ne})),n.d(t,"b",(function(){return ie})),n.d(t,"c",(function(){return K})),n.d(t,"d",(function(){return g})),n.d(t,"e",(function(){return b})),n.d(t,"f",(function(){return p})),n.d(t,"g",(function(){return h})),n.d(t,"h",(function(){return B})),n.d(t,"i",(function(){return v})),n.d(t,"j",(function(){return m})),n.d(t,"k",(function(){return Q}));const i=(e,t)=>e===t,r=Symbol("error"),o={},s={owned:null,cleanups:null,context:null,owner:null};let l=null,d=null,c=null,f=null,a=[],u=0;function p(e,t){t&&(l=t);const n=d,i=l,o=0===e.length?s:{owned:null,cleanups:null,context:null,owner:i};let c;l=o,d=null;try{c=e(()=>C(o))}catch(f){const e=k(l,r);if(!e)throw f;e.forEach(e=>e(f))}finally{for(;a.length;)a.shift()();d=n,l=i}return c}function h(e,t){const n={value:e,observers:null,observerSlots:null,pending:o,comparator:t?"function"===typeof t?t:i:void 0};return[A.bind(n),S.bind(n)]}function g(e,t){E(j(e,t))}function b(e,t,n){const r=j(e,t);return r.pending=o,r.observers=null,r.observerSlots=null,r.comparator=n?"function"===typeof n?n:i:void 0,E(r),A.bind(r)}function y(e){let t=c,n=c=[];const i=e();return c=t,N(()=>{for(let e=0;e<n.length;e+=1){const t=n[e];if(t.pending!==o){const e=t.pending;t.pending=o,S.call(t,e)}}}),i}function m(e){let t,n=d;return d=null,t=e(),d=n,t}function v(e){return null===l?console.warn("cleanups created outside a `createRoot` or `render` will never be run"):null===l.cleanups?l.cleanups=[e]:l.cleanups.push(e),e}function w(){return null!==d}function x(e){const t=Symbol("context");return{id:t,Provider:O(t),defaultValue:e}}function U(e){return k(l,e.id)||e.defaultValue}function A(){if(this.state&&this.sources){const e=f;f=null,1===this.state?E(this):function e(t){t.state=0;for(let n=0;n<t.sources.length;n+=1){const i=t.sources[n];i.sources&&(1===i.state?I(i):2===i.state&&e(i))}}(this),f=e}if(d){const e=this.observers?this.observers.length:0;d.sources?(d.sources.push(this),d.sourceSlots.push(e)):(d.sources=[this],d.sourceSlots=[e]),this.observers?(this.observers.push(d),this.observerSlots.push(d.sources.length-1)):(this.observers=[d],this.observerSlots=[d.sources.length-1])}return this.value}function S(e){return this.comparator&&this.comparator(this.value,e)?e:c?(this.pending===o&&c.push(this),this.pending=e,e):(this.value=e,!this.observers||f&&!this.observers.length||N(()=>{for(let e=0;e<this.observers.length;e+=1){const t=this.observers[e];if(t.observers&&2!==t.state&&D(t),t.state=1,f.length>1e6)throw new Error("Potential Infinite Loop Detected.");f.push(t)}}),e)}function E(e){if(!e.fn)return;C(e);const t=l,n=d,i=u;d=l=e;const r=e.fn(e.value);(!e.updatedAt||e.updatedAt<=i)&&(e.observers&&e.observers.length?S.call(e,r):e.value=r,e.updatedAt=i),d=n,l=t}function j(e,t){const n={fn:e,state:0,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:l,context:null};return null===l?console.warn("computations created outside a `createRoot` or `render` will never be disposed"):l!==s&&(l.owned?l.owned.push(n):l.owned=[n]),n}function I(e){let t=1===e.state&&e;for(;e.fn&&(e=e.owner);)1===e.state&&(t=e);t&&E(t)}function N(e){if(f)return e();f=[],u++;try{e();for(let e=0;e<f.length;e+=1)try{I(f[e])}catch(t){const e=k(l,r);if(!e)throw t;e.forEach(e=>e(t))}}finally{for(f=null;a.length;)a.shift()()}}function D(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=2,n.observers&&D(n))}}function C(e){let t;if(e.sources){for(;e.sources.length;){const t=e.sources.pop(),n=e.sourceSlots.pop(),i=t.observers;if(i&&i.length){const e=i.pop(),r=t.observerSlots.pop();n<i.length&&(e.sourceSlots[r]=n,i[n]=e,t.observerSlots[n]=r)}}e.state=0}if(e.owned){for(t=0;t<e.owned.length;t++)C(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}}function k(e,t){return e&&(e.context&&e.context[t]||e.owner&&k(e.owner,t))}function O(e){return function(t){let n;return g(()=>{l.context={[e]:t.value},n=m(()=>function e(t){if("function"===typeof t)return b(()=>e(t()));if(Array.isArray(t)){const n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);Array.isArray(r)?n.push.apply(n,r):n.push(r)}return n}return t}(t.children))}),n}}const P=Symbol("state-raw"),J=Symbol("state-node"),M=Symbol("state-proxy");function T(e,t){return e[M]||(e[M]=new Proxy(e,t||_))}function F(e){return null!=e&&"object"===typeof e&&(e.__proto__===Object.prototype||Array.isArray(e))}function R(e){let t,n,i;if(t=null!=e&&e[P])return t;if(!F(e))return e;if(Array.isArray(e)){Object.isFrozen(e)&&(e=e.slice(0));for(let t=0,r=e.length;t<r;t++)i=e[t],(n=R(i))!==i&&(e[t]=n)}else{Object.isFrozen(e)&&(e=Object.assign({},e));let t=Object.keys(e);for(let r=0,o=t.length;r<o;r++)i=e[t[r]],(n=R(i))!==i&&(e[t[r]]=n)}return e}function V(e){let t=e[J];return t||(e[J]=t={}),t}const _={get(e,t){if(t===P)return e;if(t===M||t===J)return;const n=e[t],i=F(n);if(w()&&("function"!==typeof n||e.hasOwnProperty(t))){let r,o;i&&(r=V(n))&&(o=r._||(r._=h()),o[0]()),r=V(e),o=r[t]||(r[t]=h()),o[0]()}return i?T(n):n},set:()=>!0,deleteProperty:()=>!0},z={get(e,t){if(t===P)return e;const n=e[t];return F(n)?new Proxy(n,z):n},set:(e,t,n)=>(L(e,t,R(n)),!0),deleteProperty:(e,t)=>(L(e,t,void 0),!0)};function L(e,t,n,i){if(!i&&e[t]===n)return;const r=Array.isArray(e)||!(t in e);void 0===n?delete e[t]:e[t]=n;let o,s=V(e);(o=s[t])&&o[1](),r&&(o=s._)&&o[1]()}function Z(e,t,n){const i=Object.keys(t);for(let r=0;r<i.length;r+=1){const o=i[r];L(e,o,t[o],n)}}function W(e,t){let n,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=e;if(t.length>1){n=t.shift();const o=typeof n,s=Array.isArray(e);if(Array.isArray(n)){for(let r=0;r<n.length;r++)W(e,[n[r]].concat(t),[n[r]].concat(i));return}if(s&&"function"===o){for(let r=0;r<e.length;r++)n(e[r],r)&&W(e,[r].concat(t),[r].concat(i));return}if(s&&"object"===o){const{from:r=0,to:o=e.length-1,by:s=1}=n;for(let n=r;n<=o;n+=s)W(e,[n].concat(t),[n].concat(i));return}if(t.length>1)return void W(e[n],t,[n].concat(i));r=e[n],i=[n].concat(i)}let o=t[0];if("function"===typeof o){const e=void 0===n||F(r)?new Proxy(r,z):r;if(o=o(e,i),o===e||void 0===o)return}o=R(o),void 0===n||F(r)&&F(o)&&!Array.isArray(o)?Z(r,o):L(e,n,o)}function B(e){const t=R(e||{});return[T(t),function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];y(()=>W(t,n))}]}const H=Symbol("fallback");function G(e,t){const n=e[t];Object.defineProperty(e,t,{get:()=>n(),enumerable:!0})}function K(e,t,n){if(n)for(let r=0;r<n.length;r++)G(t,n[r]);const i=m(()=>e(t));return"function"===typeof i?b(i):i}function Q(e){const t=Object.getOwnPropertyDescriptors(e),n=e=>{const n={};for(let i=0;i<e.length;i++){const r=e[i];t[r]&&(Object.defineProperty(n,r,t[r]),delete t[r])}return n};for(var i=arguments.length,r=new Array(i>1?i-1:0),o=1;o<i;o++)r[o-1]=arguments[o];return r.map(n).concat(n(Object.keys(t)))}function X(){let e=0;const[t,n]=h(!1);return[t,()=>0===e++&&n(!0),()=>--e<=0&&n(!1)]}const q=x({}),[Y,$,ee]=X();q.active=Y,q.increment=$,q.decrement=ee;function te(e){const{state:t}=U(q);let n;return t?(e=b(e),()=>"suspended"===t()?n:n=e()):e}function ne(e){const t="fallback"in e&&{fallback:()=>e.fallback};return te(function(e,t,n){return"function"!==typeof t?(n=t||{},t=e,i):(n||(n={}),i(e));function i(e){let i=[],r=[],o=[],s=0,l=t.length>1?[]:null;return v(()=>{for(let e=0,t=o.length;e<t;e++)o[e]()}),()=>{let d,c,f=e()||[];return m(()=>{let e,t,u,h,g,b,y,m,v,w=f.length;if(0===w){if(0!==s){for(d=0;d<s;d++)o[d]();o=[],i=[],r=[],s=0,l&&(l=[])}n.fallback&&(i=[H],r[0]=p(e=>(o[0]=e,n.fallback())),s=1)}else if(0===s){for(c=0;c<w;c++)i[c]=f[c],r[c]=p(a);s=w}else{for(u=new Array(w),h=new Array(w),l&&(g=new Array(w)),b=0,y=Math.min(s,w);b<y&&i[b]===f[b];b++);for(y=s-1,m=w-1;y>=b&&m>=b&&i[y]===f[m];y--,m--)u[m]=r[y],h[m]=o[y],l&&(g[m]=l[y]);if(b>m){for(c=y;b<=c;c--)o[c]();const e=y-b+1;if(e>0&&(r.splice(b,e),o.splice(b,e),l))for(l.splice(b,e),c=b;c<w;c++)l[c](c);return i=f.slice(0),s=w,r}if(b>y){for(c=b;c<=m;c++)r[c]=p(a);for(;c<w;c++)r[c]=u[c],o[c]=h[c],l&&(l[c]=g[c],l[c](c));return i=f.slice(0),s=w,r}for(e=new Map,t=new Array(m+1),c=m;c>=b;c--)v=f[c],d=e.get(v),t[c]=void 0===d?-1:d,e.set(v,c);for(d=b;d<=y;d++)v=i[d],c=e.get(v),void 0!==c&&-1!==c?(u[c]=r[d],h[c]=o[d],l&&(g[c]=l[d]),c=t[c],e.set(v,c)):o[d]();for(c=b;c<w;c++)c in u?(r[c]=u[c],o[c]=h[c],l&&(l[c]=g[c],l[c](c))):r[c]=p(a);s=r.length=w,i=f.slice(0)}return r});function a(e){if(o[c]=e,l){const[e,n]=h(c,!0);return l[c]=n,t(f[c],e)}return t(f[c])}}}}(()=>e.each,e.children,t||void 0))}function ie(e){const t=Object.getOwnPropertyDescriptor(e,"children").value,n="function"===typeof t&&t.length,i=b(n?()=>e.when:()=>!!e.when,void 0,!0);return te(()=>{const t=i();return t?n?m(()=>e.children(t)):e.children:e.fallback})}x()},,,function(e){e.exports=JSON.parse('[{"id":"HkqEDLvxE","gender":"male","parents":[{"id":"011jVS4rb","type":"blood"},{"id":"PXACjDxmR","type":"blood"}],"siblings":[{"id":"kuVISwh7w","type":"blood"},{"id":"UIEjvLJMd","type":"blood"},{"id":"ZVi8fWDBx","type":"blood"}],"spouses":[],"children":[]},{"id":"011jVS4rb","gender":"male","parents":[{"id":"ypu71w9_Q","type":"blood"},{"id":"GEf8zF7A4","type":"blood"}],"children":[{"id":"HkqEDLvxE","type":"blood"},{"id":"kuVISwh7w","type":"blood"},{"id":"UIEjvLJMd","type":"blood"},{"id":"ZVi8fWDBx","type":"blood"}],"siblings":[],"spouses":[{"id":"PXACjDxmR","type":"married"}]},{"id":"PXACjDxmR","gender":"female","parents":[{"id":"2DlrR0fK8","type":"blood"}],"children":[{"id":"HkqEDLvxE","type":"blood"},{"id":"kuVISwh7w","type":"blood"},{"id":"UIEjvLJMd","type":"blood"},{"id":"ZVi8fWDBx","type":"blood"}],"siblings":[{"id":"H-06WvsfJ","type":"blood"}],"spouses":[{"id":"011jVS4rb","type":"married"}]},{"id":"kuVISwh7w","gender":"male","parents":[{"id":"011jVS4rb","type":"blood"},{"id":"PXACjDxmR","type":"blood"}],"children":[{"id":"Fbc9iwnJl","type":"blood"}],"siblings":[{"id":"HkqEDLvxE","type":"blood"},{"id":"UIEjvLJMd","type":"blood"},{"id":"ZVi8fWDBx","type":"blood"}],"spouses":[{"id":"vRSjcaDGj","type":"married"}]},{"id":"UIEjvLJMd","gender":"female","parents":[{"id":"011jVS4rb","type":"blood"},{"id":"PXACjDxmR","type":"blood"}],"children":[{"id":"6_OTJvbvS","type":"blood"},{"id":"JhSCcdFEP","type":"blood"},{"id":"6hNxNY1-I","type":"blood"}],"siblings":[{"id":"HkqEDLvxE","type":"blood"},{"id":"kuVISwh7w","type":"blood"},{"id":"ZVi8fWDBx","type":"blood"}],"spouses":[{"id":"RZbkr5vAi","type":"married"}]},{"id":"RZbkr5vAi","gender":"male","parents":[],"children":[{"id":"6_OTJvbvS","type":"blood"},{"id":"JhSCcdFEP","type":"blood"},{"id":"6hNxNY1-I","type":"blood"}],"siblings":[],"spouses":[{"id":"UIEjvLJMd","type":"married"}]},{"id":"vRSjcaDGj","gender":"female","parents":[{"id":"6vASIIxhd","type":"blood"},{"id":"iFiwqrWx-","type":"blood"}],"children":[{"id":"Fbc9iwnJl","type":"blood"}],"siblings":[],"spouses":[{"id":"kuVISwh7w","type":"married"}]},{"id":"Fbc9iwnJl","gender":"female","parents":[{"id":"kuVISwh7w","type":"blood"},{"id":"vRSjcaDGj","type":"blood"}],"children":[],"siblings":[],"spouses":[]},{"id":"ypu71w9_Q","gender":"male","parents":[{"id":"TsyAkbF89","type":"blood"},{"id":"T54Km7uOC","type":"blood"}],"children":[{"id":"011jVS4rb","type":"blood"}],"siblings":[],"spouses":[{"id":"GEf8zF7A4","type":"married"}]},{"id":"GEf8zF7A4","gender":"female","parents":[{"id":"gsgwGS_Kw","type":"blood"},{"id":"ZgTZx9uXQ","type":"blood"}],"children":[{"id":"011jVS4rb","type":"blood"}],"siblings":[],"spouses":[{"id":"ypu71w9_Q","type":"married"}]},{"id":"2DlrR0fK8","gender":"male","parents":[],"children":[{"id":"PXACjDxmR","type":"blood"},{"id":"H-06WvsfJ","type":"blood"}],"siblings":[],"spouses":[]},{"id":"gsgwGS_Kw","gender":"male","parents":[],"children":[{"id":"GEf8zF7A4","type":"blood"}],"siblings":[],"spouses":[{"id":"ZgTZx9uXQ","type":"married"}]},{"id":"ZgTZx9uXQ","gender":"female","parents":[],"children":[{"id":"GEf8zF7A4","type":"blood"}],"siblings":[],"spouses":[{"id":"gsgwGS_Kw","type":"married"}]},{"id":"ZVi8fWDBx","gender":"male","parents":[{"id":"011jVS4rb","type":"blood"},{"id":"PXACjDxmR","type":"blood"}],"children":[],"siblings":[{"id":"HkqEDLvxE","type":"blood"},{"id":"kuVISwh7w","type":"blood"},{"id":"UIEjvLJMd","type":"blood"}],"spouses":[{"id":"wJ1EBvc5m","type":"married"}]},{"id":"6_OTJvbvS","gender":"male","parents":[{"id":"RZbkr5vAi","type":"blood"},{"id":"UIEjvLJMd","type":"blood"}],"children":[],"siblings":[{"id":"JhSCcdFEP","type":"blood"},{"id":"6hNxNY1-I","type":"blood"}],"spouses":[]},{"id":"JhSCcdFEP","gender":"female","parents":[{"id":"RZbkr5vAi","type":"blood"},{"id":"UIEjvLJMd","type":"blood"}],"children":[{"id":"Z0QA5oKks","type":"blood"}],"siblings":[{"id":"6_OTJvbvS","type":"blood"},{"id":"6hNxNY1-I","type":"blood"}],"spouses":[{"id":"ilad8NH6g","type":"married"}]},{"id":"6hNxNY1-I","gender":"male","parents":[{"id":"RZbkr5vAi","type":"blood"},{"id":"UIEjvLJMd","type":"blood"}],"children":[],"siblings":[{"id":"6_OTJvbvS","type":"blood"},{"id":"JhSCcdFEP","type":"blood"}],"spouses":[]},{"id":"ilad8NH6g","gender":"male","parents":[],"children":[{"id":"Z0QA5oKks","type":"blood"}],"siblings":[],"spouses":[{"id":"JhSCcdFEP","type":"married"}]},{"id":"Z0QA5oKks","gender":"male","parents":[{"id":"ilad8NH6g","type":"blood"},{"id":"JhSCcdFEP","type":"blood"}],"children":[],"siblings":[],"spouses":[]},{"id":"wJ1EBvc5m","gender":"female","parents":[],"children":[],"siblings":[],"spouses":[{"id":"ZVi8fWDBx","type":"married"}]},{"id":"TsyAkbF89","gender":"male","parents":[],"children":[{"id":"ypu71w9_Q","type":"blood"}],"siblings":[],"spouses":[{"id":"T54Km7uOC","type":"married"}]},{"id":"T54Km7uOC","gender":"female","parents":[],"children":[{"id":"ypu71w9_Q","type":"blood"}],"siblings":[],"spouses":[{"id":"TsyAkbF89","type":"married"}]},{"id":"6vASIIxhd","gender":"male","parents":[],"children":[{"id":"vRSjcaDGj","type":"blood"}],"siblings":[],"spouses":[{"id":"iFiwqrWx-","type":"married"}]},{"id":"iFiwqrWx-","gender":"female","parents":[],"children":[{"id":"vRSjcaDGj","type":"blood"}],"siblings":[],"spouses":[{"id":"6vASIIxhd","type":"married"}]},{"id":"H-06WvsfJ","gender":"female","parents":[{"id":"2DlrR0fK8","type":"blood"}],"children":[],"siblings":[{"id":"PXACjDxmR","type":"blood"}],"spouses":[]}]')},,function(e,t,n){"use strict";const i=e=>t=>t[e],r=e=>t=>t.id===e,o=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>t.includes(e.type)},s=e=>t=>e.ids.join("")===t.ids.join(""),l=(e,t)=>e.concat(t),d=(e,t,n)=>n.indexOf(e)===t,c=(e,t)=>e-t,f=e=>t=>e.getNode(t.id),a=e=>Math.min.apply(null,e),u=e=>Math.max.apply(null,e),p=e=>[e.id,Object.assign({},e)];var h=class{constructor(e,t){if(!e.find(r(t)))throw new Error("".concat("[relatives-tree::store]:"," Can't find a root node with ID: ").concat(t));this.nextId=0,this.families=new Map,this.nodes=new Map(e.map(p)),this.rootNode=this.nodes.get(t),this.gender=this.rootNode.gender}getNextId(){return++this.nextId}getNode(e){return this.nodes.get(e)}getNodes(e){return e.map(this.getNode.bind(this))}getFamily(e){return this.families.get(e)}get familiesArray(){return[...this.families.values()]}};const g=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"blood";return{id:e,type:t}},b=e=>({id:"".concat(e,"-placeholder"),placeholder:!0,gender:e,parents:[],siblings:[],spouses:[],children:[]});var y=e=>{if(e.rootNode.parents.length)return e;const t=e.rootNode,n=(i=((e,t)=>{const n=b("male"),i=b("female");return n.spouses=[g(i.id,"married")],i.spouses=[g(n.id,"married")],[n,i].map(n=>(n.children=t.siblings.concat(g(t.id)),e.nodes.set(n.id,n),g(n.id)))})(e,t),e=>e.parents=i.slice());var i;return n(t),t.siblings.map(f(e)).forEach(n),e};var m=class{constructor(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.familyId=e,this.isChild=n,this.nodes=t,this.shift=0}get size(){return this.nodes.length}get right(){return this.shift+2*this.size}get ids(){return this.nodes.map(i("id"))}},v=(e,t)=>{const n=[...t];if(1===n.length){let t;const i=n[0],r=i.spouses.find(o("married"));r?t=e.getNode(r.id):1===i.spouses.length?t=e.getNode(i.spouses[0].id):i.spouses.length>1&&(t=i.spouses.map(f(e)).sort((e,t)=>t.children.length-e.children.length)[0]),t&&(i.gender===e.gender?n.push(t):n.unshift(t))}const r={left:[],middle:n,right:[]};if(2===n.length){const t=r.middle.map(i("id"));r.left=n[0].spouses.filter(e=>-1===t.indexOf(e.id)).sort(e=>"married"===e.type?1:0).map(f(e)),r.right=n[1].spouses.filter(e=>-1===t.indexOf(e.id)).sort(e=>"married"===e.type?-1:0).map(f(e))}return r};var w=function(e,t,n){if(n.spouses.length){const{left:i,middle:r,right:o}=v(e,[n]);return[...i.map(e=>[e]),r,...o.map(e=>[e])].map(e=>new m(t,e,!0))}return[new m(t,[n],!0)]};var x=class{constructor(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.id=e,this.type=t,this.main=n,this.pID=null,this.cID=null,this.top=0,this.left=0,this.pUnits=[],this.cUnits=[]}get width(){return u([...this.pUnits,...this.cUnits].map(i("right")))}get height(){return this.pUnits.length?4:2}get right(){return this.left+this.width}get pCount(){return this.pUnits.reduce((e,t)=>e+t.size,0)}get cCount(){return this.cUnits.reduce((e,t)=>e+t.size,0)}get pUnitsWithParents(){return this.pUnits.filter(e=>!!e.nodes.find(e=>!!e.parents.length))}get cUnitsWithChildren(){return this.cUnits.filter(e=>!!e.nodes.find(e=>!!e.children.length))}};const U=(e,t)=>{e.forEach((e,n,i)=>e.shift=0===n?t:i[n-1].right)};var A=function(e){const t=e.cCount-e.pCount;U(e.pUnits,t>0?Math.abs(t):0),U(e.cUnits,t<0?Math.abs(t):0)},S=e=>function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"root",i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const o=new x(e.getNextId(),n,i),s=t.map(e.getNode.bind(e));o.main&&s.sort((t,n)=>n.gender!==e.gender?-1:0),o.pUnits.push(new m(o.id,s));let l=[];if(1===s.length)l=s[0].children.map(f(e));else{const t=s[0],n=s[1];l=t.children.filter(e=>n.children.find(r(e.id))).map(f(e))}return l.forEach(t=>{w(e,o.id,t).forEach(e=>{o.cUnits.push(e)})}),A(o),o},E=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(e.length>=t+1){const i=n-e[t].left;for(let n=t;n<e.length;n++)e[n].left+=i}};const j=[e=>{const t=[];return e.filter(o("parent")).forEach(e=>{e.pUnits.forEach(n=>{const r=e.left+n.shift+n.size,o=e.top+1,s=e.top+2;2===n.size&&t.push({points:[r-1,o,r-1+2,o]}),t.push({points:[r,o,r,s]});const c=n.nodes.map(i("children")).reduce(l).map(i("id")).filter(d);e.cUnits.forEach(n=>{const i=n.nodes.findIndex(e=>-1!==c.indexOf(e.id)),o=e.left+n.shift+2*i+1;t.push({points:[o,s,o,s+1]}),r!==o&&t.push({points:[Math.min(r,o),s,Math.max(r,o),s]})})})}),t},e=>{const t=[];return e.filter(o("root")).forEach(n=>{n.pUnits.forEach(i=>{const o=n.left+i.shift+1,s=n.top+1;2===i.size?t.push({points:[o,s,o+2,s]}):1===i.size&&i.nodes[0].spouses.length&&e.filter(e=>e.id!==n.id).forEach(e=>{e.pUnits.forEach(n=>{if(-1!==n.nodes.findIndex(r(i.nodes[0].spouses[0].id))){const i=[o,e.left+n.shift+1].sort(c);t.push({points:[i[0],s,i[1],s]})}})})})}),t},e=>{const t=[];return e.filter(o("root","child")).forEach(e=>{let n=0;const o=e.top+(e.pUnits.length?2:0);if(1===e.pUnits.length){const i=e.pUnits[0];if(n=e.left+i.shift+i.size,i.nodes.every(e=>!!e.children.length)){const i=e.top+1;t.push({points:[n,i,n,o]})}}const s=e.pUnits.map(i("ids")).reduce(l,[]),d=[];e.cUnits.forEach(n=>{const i=e.left+n.shift+1;n.nodes.forEach((e,n)=>{if(e.parents.find(e=>-1!==s.indexOf(e.id))){const e=i+2*n;d.push(e),t.push({points:[e,o,e,o+1]})}}),2===n.size?t.push({points:[i,o+1,i+2,o+1]}):1===n.size&&n.nodes[0].spouses.length&&e.cUnits.forEach(s=>{if(-1!==s.nodes.findIndex(r(n.nodes[0].spouses[0].id))){const n=[i,e.left+s.shift+1].sort(c);t.push({points:[n[0],o+1,n[1],o+1]})}})}),d.length>1?t.push({points:[a(d),o,u(d),o]}):1===d.length&&n!==d[0]&&t.push({points:[Math.min(n,d[0]),o,Math.max(n,d[0]),o]})}),t}];var I=e=>j.map(function(e){return t=>t(e)}(e)).reduce(l),N=e=>({width:u(e.map(i("right"))),height:u(e.map(e=>e.top+e.height))});function D(e,t){return!!e.find(e=>!!e.nodes.find(r(t)))}var C=(e,t)=>{if("child"!==e.type&&D(e.pUnits,t.id))return"parent"===e.type&&(t.children.length>1||t.spouses.length>1)||!t.parents.length&&!!t.siblings.length;if("parent"!==e.type&&D(e.cUnits,t.id)){const n=e.pUnits.length?e.pUnits[0].ids:[];return!!!t.parents.filter(e=>n.includes(e.id)).length&&(!!t.parents.length||!!t.siblings.length)}return!1};const k=["root","parent"],O=["root","child"];function P(e){return t=>t.nodes.map((n,i)=>Object.assign(Object.assign({},n),{top:e.top+(t.isChild&&e.pUnits.length?2:0),left:e.left+t.shift+2*i,hasSubTree:C(e,n)}))}function J(e){return(k.includes(e.type)?e.pUnits:[]).map(P(e))}function M(e){return(O.includes(e.type)?e.cUnits:[]).map(P(e))}function T(e){return[...J(e),...M(e)].reduce(l,[])}var F=e=>e.map(T).reduce(l);const R=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>t.reduce((e,t)=>t(e),e)}(e=>{let t=[];if(e.rootNode.parents.length){const n=S(e);if(e.rootNode.parents.map(i("type")).filter(d).length>1){const s=e.rootNode.parents.filter(o("blood")).map(i("id")),l=e.rootNode.parents.filter(o("adopted")).map(i("id")),d=n(s,"root",!0),c=n(l);((e,t)=>{const n=e.cUnits.reduce((e,t)=>e.concat(t.nodes),[]),o=t.cUnits.reduce((e,t)=>e.concat(t.nodes),[]),s=n.filter(e=>!!o.find(r(e.id))).map(i("id")),l=e.cUnits.map(i("shift"));e.cUnits=e.cUnits.sort((e,t)=>{const n=!!e.nodes.find(e=>-1!==s.indexOf(e.id)),i=!!t.nodes.find(e=>-1!==s.indexOf(e.id));return n&&!i?1:!n&&i?-1:0}),e.cUnits.forEach((e,t)=>e.shift=l[t]),t.cUnits=t.cUnits.filter(e=>!!e.nodes.find(e=>-1===s.indexOf(e.id))),A(t)})(d,c),t=[d,c]}else{const r=e.rootNode.parents.map(i("id")),o=n(r,"root",!0);t.push(o);const s=o.pUnits.map(i("nodes")).reduce(l);if(2===s.length){const{left:i,right:r}=v(e,s);t=[...i.map(e=>n([e.id])),...t,...r.map(e=>n([e.id]))]}}}else{const n=new x(e.getNextId(),"root",!0);w(e,n.id,e.rootNode).forEach(e=>n.cUnits.push(e)),A(n),t.push(n)}if(t.length>1)for(let n=1;n<t.length;n++)t[n].left=t[n-1].right;return t.forEach(t=>e.families.set(t.id,t)),e},e=>{const t=(e=>function(t){const n=new x(e.getNextId(),"parent"),r=new m(n.id,e.getNodes(t),!0);return r.nodes.forEach((t,o)=>{const s=e.getNodes(t.parents.map(i("id"))).sort((t,n)=>n.gender!==e.gender?-1:0);if(s.length){const i=new m(n.id,s);i.size>1&&r.size>1&&e.gender===t.gender?r.shift+=2:i.shift=r.shift+2*o,n.pUnits.push(i)}}),n.cUnits.push(r),n})(e),n=(e=>function(t){if(null===t.cID)return;let n=0;for(;t;){const i=t.cUnits[0];2===t.pUnits.length&&t.pCount>2&&(i.shift=Math.floor(t.pUnits[1].shift/2));const r=i.shift;n=Math.max(n,t.right);const o=e.getFamily(t.cID);if(null===o.cID){i.shift=(t.width-2*i.size)/2;break}const l=o.pUnits.find(s(i)),d=o.pUnits.findIndex(e=>e.nodes[0].id===i.nodes[0].id);if(0===d&&0===l.shift){const e=t.left+r;o.left=Math.max(o.left,e)}else l.shift=t.left+i.shift-o.left;const c=o.pUnits[d+1];if(c){const e=n-(o.left+c.shift);if(e>0)for(let t=d+1;t<o.pUnits.length;t++)o.pUnits[t].shift+=e}t=o}})(e),r=e.familiesArray.filter(o("root"));for(const o of r){if(!o.main)continue;let r=o.pUnitsWithParents.reverse();for(;r.length;){const o=r.pop(),s=t(o.nodes.map(i("id"))),l=e.getFamily(o.familyId);s.cID=l.id,s.top=l.top-2,s.left=l.left+o.shift,n(s),e.families.set(s.id,s);const d=s.pUnitsWithParents;d.length&&(r=[...r,...d.reverse()])}}return e},e=>{const t=S(e),n=(e=>function(t){if(null===t.pID)return;let n=0;for(;t;){const i=t.pUnits[0],l=i.shift;n=Math.max(n,t.right);const d=e.getFamily(t.pID),c=d.cUnits.find(s(i)),f=d.cUnits.findIndex(e=>e.nodes[0].id===i.nodes[0].id);if(0===f){const e=t.left+l-c.shift;d.left=Math.max(d.left,e)}else c.shift=t.left+i.shift-d.left;const a=d.cUnits[f+1];if(a){const e=n-(d.left+a.shift);for(let t=f+1;t<d.cUnits.length;t++)d.cUnits[t].shift+=e}const u=d.pUnits[0];if(u){const e=d.width;u.shift=Math.floor((e-2*u.size)/2)}if(null===d.pID){const n=e.familiesArray.filter(o("root")),i=n.findIndex(r(d.id));E(n,i+1,t.right);break}t=d}})(e),l=e.familiesArray.filter(o("root"));for(const r of l){let o=r.cUnitsWithChildren.reverse();for(;o.length;){const r=o.pop(),s=t(r.nodes.map(i("id")),"child"),l=e.getFamily(r.familyId);s.pID=l.id,s.top=l.top+l.height-2,s.left=l.left+r.shift,n(s),e.families.set(s.id,s);const d=s.cUnitsWithChildren;d.length&&(o=[...o,...d.reverse()])}}return e},e=>{const t=e.familiesArray,n=-1*a(t.map(i("top")));0!==n&&t.forEach(e=>e.top+=n);const r=t.find(e=>e.main),s=t.find(e=>e.cID===r.id);if(s){const e=r.pUnits[0],n=s.cUnits[0],l=s.left+n.shift-(r.left+e.shift);l>0?t.filter(o("child","root")).forEach(e=>e.left+=l):l<0&&t.filter(o("parent")).forEach(e=>e.left+=-1*l);const d=a(t.map(i("left")));d>0&&t.forEach(e=>e.left-=d)}const l=-1*a(t.map(e=>e.left));return 0!==l&&t.forEach(e=>e.left+=l),e});t.a=(e,t)=>{const n=new h(e,t.rootId);t.placeholders&&y(n);const i=R(n).familiesArray;return{families:i,canvas:N(i),nodes:F(i),connectors:I(i)}}}]]);