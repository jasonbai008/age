import{d,a as Y,r as f,b as M,c as k,o as p,e as h,f as n,w as B,v as L,u as _,i as x,g as N,h as O,p as A,j,k as I,l as S}from"./vendor.c14d2509.js";const $=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}};$();var P="assets/logo.61f0cc60.gif";var T=(a,s)=>{const r=a.__vccOpts||a;for(const[i,e]of s)r[i]=e;return r};const y=a=>(A("data-v-96820e76"),a=a(),j(),a),K={class:"age-wrap"},V={class:"top"},E=y(()=>n("h4",null,"\u771F\u5B9E\u5E74\u9F84\u8BA1\u7B97\u5668",-1)),C={class:"input"},H=["onKeyup"],q={key:0,class:"output"},F=["innerHTML"],J=y(()=>n("p",{class:"bot"},"Developed by Jason Bai with LOVE",-1)),R={setup(a){d.extend(Y);let s=new Audio;s.src="./mp3/blindedByTheNight.mp3";let r=!1,i=/^\d{4}\.\d{1,2}\.\d{1,2}$/,e=f(!1),t=f("");const o=M({data:{years:"",months:"",days:"",totalDays:""}}),m=k(()=>`\u60A8\u5DF2\u5728\u5730\u7403\u4E0A\u6D3B\u4E86${o.data.totalDays}\u5929<br>${o.data.years}\u5C81 ${o.data.months}\u6708 ${o.data.days}\u5929 `),g=u=>i.test(u)?!0:(alert("\u8BF7\u8F93\u5165\u5E74\u6708\u65E5\uFF0C\u4EE5\u70B9\u53F7\u5206\u5272"),!1),v=()=>{if(g(t.value)){let l=d(t.value.split(".").join("/"),"YYYY/MM/DD"),c=d(d().format("YYYY/MM/DD"),"YYYY/MM/DD"),D=c.diff(l,"day");o.data=Object.assign({totalDays:D.toLocaleString()},d.duration(c.diff(l)).$d),console.table(o.data),e.value=!0}},b=()=>{r?s.pause():s.play(),r=!r},w=()=>alert("\u6B4C\u66F2\u540D\uFF1ABlinded By The Night");return(u,l)=>(p(),h("div",K,[n("div",V,[n("img",{src:P,width:"200",height:"200",onClick:b,onDblclick:w},null,32),E,n("div",C,[B(n("input",{type:"text","onUpdate:modelValue":l[0]||(l[0]=c=>x(t)?t.value=c:t=c),onKeyup:N(v,["enter"]),placeholder:"\u8BF7\u8F93\u5165\u51FA\u751F\u65E5\u671F,\u5982:1989.02.14"},null,40,H),[[L,_(t)]])]),_(e)?(p(),h("div",q,[n("p",{innerHTML:_(m)},null,8,F)])):O("",!0)]),J]))}};var U=T(R,[["__scopeId","data-v-96820e76"]]);const z={setup(a){return(s,r)=>(p(),I(U))}};S(z).mount("#app");