var k=Object.defineProperty;var z=(t,e,n)=>e in t?k(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var $=(t,e,n)=>(z(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function f(){}function F(t){return t()}function C(){return Object.create(null)}function _(t){t.forEach(F)}function G(t){return typeof t=="function"}function E(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function D(t){return Object.keys(t).length===0}function N(t,e,n){t.insertBefore(e,n||null)}function g(t){t.parentNode&&t.parentNode.removeChild(t)}function K(t){return document.createElement(t)}function J(t){return document.createTextNode(t)}function Q(){return J(" ")}function R(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function W(t){return Array.from(t.childNodes)}let S;function h(t){S=t}const a=[],M=[];let d=[];const T=[],X=Promise.resolve();let x=!1;function Y(){x||(x=!0,X.then(U))}function b(t){d.push(t)}const y=new Set;let l=0;function U(){if(l!==0)return;const t=S;do{try{for(;l<a.length;){const e=a[l];l++,h(e),Z(e.$$)}}catch(e){throw a.length=0,l=0,e}for(h(null),a.length=0,l=0;M.length;)M.pop()();for(let e=0;e<d.length;e+=1){const n=d[e];y.has(n)||(y.add(n),n())}d.length=0}while(a.length);for(;T.length;)T.pop()();x=!1,y.clear(),h(t)}function Z(t){if(t.fragment!==null){t.update(),_(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(b)}}function tt(t){const e=[],n=[];d.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),d=e}const m=new Set;let et;function w(t,e){t&&t.i&&(m.delete(t),t.i(e))}function H(t,e,n,r){if(t&&t.o){if(m.has(t))return;m.add(t),et.c.push(()=>{m.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function q(t){t&&t.c()}function v(t,e,n){const{fragment:r,after_update:i}=t.$$;r&&r.m(e,n),b(()=>{const o=t.$$.on_mount.map(F).filter(G);t.$$.on_destroy?t.$$.on_destroy.push(...o):_(o),t.$$.on_mount=[]}),i.forEach(b)}function O(t,e){const n=t.$$;n.fragment!==null&&(tt(n.after_update),_(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function nt(t,e){t.$$.dirty[0]===-1&&(a.push(t),Y(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function L(t,e,n,r,i,o,u=null,V=[-1]){const p=S;h(t);const s=t.$$={fragment:null,ctx:[],props:o,update:f,not_equal:i,bound:C(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(p?p.$$.context:[])),callbacks:C(),dirty:V,skip_bound:!1,root:e.target||p.$$.root};u&&u(s.root);let A=!1;if(s.ctx=n?n(t,e.props||{},(c,P,...I)=>{const B=I.length?I[0]:P;return s.ctx&&i(s.ctx[c],s.ctx[c]=B)&&(!s.skip_bound&&s.bound[c]&&s.bound[c](B),A&&nt(t,c)),P}):[],s.update(),A=!0,_(s.before_update),s.fragment=r?r(s.ctx):!1,e.target){if(e.hydrate){const c=W(e.target);s.fragment&&s.fragment.l(c),c.forEach(g)}else s.fragment&&s.fragment.c();e.intro&&w(t.$$.fragment),v(t,e.target,e.anchor),U()}h(p)}class j{constructor(){$(this,"$$");$(this,"$$set")}$destroy(){O(this,1),this.$destroy=f}$on(e,n){if(!G(n))return f;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!D(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const rt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(rt);function ot(t){let e;return{c(){e=K("div"),e.innerHTML='<a href="https://github.com/NxSaroj/" class="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-black border text-red-600 inline-block"><span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-white group-hover:h-full opacity-90"></span> <span class="relative group-hover:text-red"><i class="fa-brands fa-github"></i> Github</span></a>',R(e,"class","flex items-center justify-center mt-10")},m(n,r){N(n,e,r)},p:f,i:f,o:f,d(n){n&&g(e)}}}class it extends j{constructor(e){super(),L(this,e,null,ot,E,{})}}function st(t){let e;return{c(){e=K("h1"),e.textContent="Hey I'm Syst",R(e,"class","transition-all ease-in-out text-5xl text-white font-bold mt-64 text-center")},m(n,r){N(n,e,r)},p:f,i:f,o:f,d(n){n&&g(e)}}}class ut extends j{constructor(e){super(),L(this,e,null,st,E,{})}}function ft(t){let e,n,r,i;return e=new ut({}),r=new it({}),{c(){q(e.$$.fragment),n=Q(),q(r.$$.fragment)},m(o,u){v(e,o,u),N(o,n,u),v(r,o,u),i=!0},p:f,i(o){i||(w(e.$$.fragment,o),w(r.$$.fragment,o),i=!0)},o(o){H(e.$$.fragment,o),H(r.$$.fragment,o),i=!1},d(o){o&&g(n),O(e,o),O(r,o)}}}class ct extends j{constructor(e){super(),L(this,e,null,ft,E,{})}}new ct({target:document.getElementById("app")});