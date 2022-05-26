var L=Object.defineProperty;var f=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var h=(e,t,n)=>t in e?L(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,l=(e,t)=>{for(var n in t||(t={}))S.call(t,n)&&h(e,n,t[n]);if(f)for(var n of f(t))T.call(t,n)&&h(e,n,t[n]);return e};const b=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}};b();const k="b",E=!1,A="**";var I=e=>!e||e==="",W=(e,t)=>Object.keys(e).reduce((o,r)=>(t(o[r])&&delete o[r],o),e),O=(e,t)=>l(l({},t),W(e,I));const q=e=>O(e,{highlightTag:k,markdown:E,markdownStyle:A}),$=(e,t)=>n=>n.length?`${e}${n}${t!=null?t:e}`:"",p=(e,t)=>([n,o,r])=>`${n}${$(e,t)(o)}${r}`;var x=e=>{const{highlightTag:t,markdown:n,markdownStyle:o}=q(e);return n?p(o):p(`<${t}>`,`</${t}>`)};const M=e=>{const n=[4,12,16,24,29,35,42,48].findIndex(r=>e<=r);let o=n+1;return n===-1&&(o=9),Math.max(e-o,0)},R=e=>{var t,n;return(n=(t=e.match(/\w[\W|\w]*\w/))==null?void 0:t[0])!=null?n:""};var F=e=>{const t=R(e),{length:n}=t,o=M(n),r=e.indexOf(t),i=r+o,a=e.slice(0,r),m=t.slice(0,o),s=e.slice(i);return[a,m,s]},u=(e,t,n,o)=>e.split(t).map(o).join(n);const y=(e,t={})=>{if(!(e!=null&&e.length))return"";const n=x(t),o=s=>{const w=F(s);return n(w)},r=s=>u(s,"-","-",o),i=s=>u(s," "," ",r);return(s=>u(s,/\r?\n/,`
`,i))(e)};let c={markdown:!1,highlightTag:"b",markdownStyle:"**"};const g=document.querySelector("#paragraph");g.value="Bionic Reading is a new method facilitating the reading process by guiding the eyes through text with artificial fixation points. As a result, the reader is only focusing on the highlighted initial letters and lets the brain center complete the word. In a digital world dominated by shallow forms of reading, Bionic Reading aims to encourage a more in-depth reading and understanding of written content.";const v=()=>g.value,P=document.querySelector("#rendered"),B=document.querySelector("#rendered-raw"),d=(()=>{let e;return()=>{e&&cancelAnimationFrame(e),e=requestAnimationFrame(()=>{P.innerHTML=y(v(),c),B.textContent=y(v(),c),e=void 0})}})();g.addEventListener("input",d);const D=document.querySelector("#render-style");D.addEventListener("click",({target:e})=>{if(!e||!(e instanceof HTMLInputElement))return;const t=e.value==="markdown";c.markdown=t,d()});const H=document.querySelector("#dom-tag-style");H.addEventListener("input",({target:e})=>{const{value:t}=e;c.highlightTag=t,d()});const N=document.querySelector("#markdown-style");N.addEventListener("input",({target:e})=>{const{value:t}=e;c.markdownStyle=t,d()});d();