import{j as a,r as f,_ as l,I as d,B as p,a as m,R as y,b as h}from"./vendor.e2248b32.js";const g=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}};g();const u=r=>r.type==="object"?x(r.properties):r.type==="array"?[u(r.items)]:v(r.type)+"  // "+r.description;function x(r){let n={};for(const s in r){const i=r[s];n[s]=u(i)}return n}function v(r){return r==="integer"?"number":r}const o=a.exports.jsx,F=a.exports.jsxs,N=()=>{const[r,n]=f.exports.useState(""),[s]=l.useForm(),i=()=>{const e=s.getFieldValue("yapiJson");console.log("[faiz:] === json",e);try{const t=JSON.parse(e),c=u(t);n(JSON.stringify(c,null,2)),console.log("[faiz:] === result",c)}catch{m.error("JSON \u683C\u5F0F\u5316\u5931\u8D25")}};return F("div",{className:"w-screen h-screen flex items-center justify-center",children:[o("div",{className:"w-2/5",children:o(l,{form:s,children:o(l.Item,{name:"yapiJson",noStyle:!0,children:o(d.TextArea,{rows:15,placeholder:"\u8BF7\u8F93\u5165 Yapi \u539F\u59CB json"})})})}),o(p,{type:"primary",className:"mx-4",onClick:i,children:"\u70B9\u51FB\u751F\u6210 ts"}),o("div",{className:"w-2/5",children:o(d.TextArea,{rows:15,placeholder:"",value:r})})]})};O("browser");function O(r){y.render(o(h.StrictMode,{children:o(N,{env:r})}),document.getElementById("root"))}
