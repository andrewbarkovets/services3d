!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/dist",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);var n=e=>{const t=document.querySelector("#timer-hours"),o=document.querySelector("#timer-minutes"),n=document.querySelector("#timer-seconds");let r=0;const c=()=>{const r=(()=>{const t=(new Date(e).getTime()-(new Date).getTime())/1e3,o=Math.floor(t%60),n=Math.floor(t/60%60);return{timeRemaining:t,hours:Math.floor(t/60/60),minutes:n,seconds:o}})(),c=(e,t)=>{return t.textContent=e<=0?"00":(o=e)<10?"0"+o:o;var o};c(r.hours,t),c(r.minutes,o),c(r.seconds,n),r.timeRemaining<=0&&clearInterval((void 0).timeInterval)};c(),r=setInterval(c,1e3)};const r=document.querySelectorAll('menu ul>li a, a[href="#service-block"]');for(const e of r)e.addEventListener("click",t=>{t.preventDefault();const o=e.getAttribute("href");document.querySelector(o).scrollIntoView({behavior:"smooth",block:"start"})});var c=()=>{document.body.addEventListener("click",()=>{const e=event.target,t=()=>{document.querySelector("menu").classList.toggle("active-menu")};(e.closest(".menu")||!e.closest("menu")&&document.querySelector("menu").classList.contains("active-menu"))&&t(),e.closest("menu")&&e.closest('[href^="#"]')&&t()})};var a=()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),o=document.querySelector(".popup-close"),n=document.querySelector(".popup-content"),r={count:-445,speed:15,startPos:-445,endPos:0},c=()=>{r.startPos>r.endPos?r.count-=r.speed:r.count+=r.speed,n.style.transform=`translateY(${r.count}px)`,(r.startPos>r.endPos?r.count>r.endPos:r.count<r.endPos)&&requestAnimationFrame(c)};t.forEach(t=>{t.addEventListener("click",()=>{e.style.display="block",window.innerWidth>768&&(r.count=r.startPos,document.body.style.overflowY="hidden",requestAnimationFrame(c))})}),o.addEventListener("click",()=>{document.body.style.overflowY="",e.style.display="none",document.getElementById("form3").reset()})};var s=()=>{const e=document.querySelector(".service-header"),t=e.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",e=>{let n=e.target;n=n.closest(".service-header-tab"),n&&t.forEach((e,r)=>{e===n&&(e=>{for(let n=0;n<o.length;n++)e===n?(t[n].classList.add("active"),o[n].classList.remove("d-none")):(t[n].classList.remove("active"),o[n].classList.add("d-none"))})(r)})})};var l=()=>{const e=document.querySelectorAll(".portfolio-item"),t=document.querySelector(".portfolio-dots");e.forEach(()=>{const e=document.createElement("li");e.classList.add("dot"),t.appendChild(e)}),t.children[0].classList.add("dot-active")};var u=()=>{const e=document.querySelector("#command .row"),t=e=>{const t=e.target;if(t.classList.contains("command__photo")){const e=t.src;t.src=t.dataset.img,t.dataset.img=e}};e.addEventListener("mouseover",t),e.addEventListener("mouseout",t)};var d=(e=100)=>{const t=document.querySelector(".calc-block"),o=document.querySelector(".calc-type"),n=document.querySelector(".calc-square"),r=document.querySelector(".calc-day"),c=document.querySelector(".calc-count"),a=document.getElementById("total");t.addEventListener("input",t=>{const s=t.target;(s.matches("select")||s.matches("input"))&&(()=>{let t=0,s=1,l=10;const u=o.options[o.selectedIndex].value,d=+n.value;c.value>1&&(s+=(c.value-1)/10),r.value&&r.value<5&&(l*=2),r.value&&r.value<10&&(l*=1.5),u&&d&&(t=e*u*d*s*l);a.textContent=((e,o)=>{let n=o/100;a.textContent!==t&&a.textContent>t&&(n-=a.textContent/100);const r=setInterval(()=>{a.textContent=Math.ceil(+a.textContent+n),(t-a.textContent)*n<1&&(clearInterval(r),a.textContent=Math.round(t))},10);return Math.round(e.textContent)})(a,t)})()});t.addEventListener("input",e=>{(e.target.matches(".calc-square")||e.target.matches(".calc-count")||e.target.matches(".calc-day"))&&(e.target.value=e.target.value.replace(/\D/g,""))})};var i=()=>{const e=document.createElement("div");e.style.cssText="font-size: 2rem; color: white";document.addEventListener("submit",t=>{t.preventDefault();const o=t.target;o.appendChild(e),e.textContent="Загрузка...";const n=new FormData(o),r={};n.forEach((e,t)=>{r[t]=e});(e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e),credentials:"include"}))(r).then(t=>{if(200!==t.status)throw new Error("status network not 200!");e.textContent="Спасибо!Мы с вами свяжемся! ",(e=>{e.querySelectorAll("input").forEach(e=>{e.value=""})})(o);setTimeout(()=>{e.textContent=""},2500)}).catch(t=>{e.textContent="Что-то пошло нет...",console.error(t)})});const t=()=>{document.addEventListener("input",e=>{const t=e.target;t.matches('[name="user_name"]')||t.matches('[name="user_message"]')?t.value=t.value.replace(/[^а-яА-ЯёЁ,.!?\s]/,""):t.matches('[name="user_phone"]')&&(t.value=t.value.replace(/[^\\+?[0-9]/i,""),/^\+?[78][0-9]{10}$/.test(t.value)||/^\+?[378][0-9]{11}$/.test(t.value)?(t.style.cssText="border:2px solid green",t.setCustomValidity("")):0===t.value.length?t.style.border="":(t.setCustomValidity("Введите значение в формате +79273335544 или 89273335544"),t.style.cssText="border:2px solid red;"))})};t(),document.body.addEventListener("input",t)};var m=()=>{const e=document.querySelectorAll(".portfolio-item"),t=document.querySelectorAll(".dot"),o=document.querySelector(".portfolio-content");let n,r=0;const c=(e,t,o)=>{e[t].classList.remove(o)},a=(e,t,o)=>{e[t].classList.add(o)},s=()=>{c(e,r,"portfolio-item-active"),c(t,r,"dot-active"),r=r<e.length-1?r+1:0,a(e,r,"portfolio-item-active"),a(t,r,"dot-active")},l=(e=2e3)=>{n=setInterval(s,e)};o.addEventListener("click",o=>{o.preventDefault();const n=o.target;n.matches(".portfolio-btn, .dot")&&(c(e,r,"portfolio-item-active"),c(t,r,"dot-active"),n.matches("#arrow-right")?r++:n.matches("#arrow-left")?r--:n.matches(".dot")&&t.forEach((e,t)=>{e===n&&(r=t)}),r>=e.length&&(r=0),r<0&&(r=e.length-1),a(e,r,"portfolio-item-active"),a(t,r,"dot-active"))}),o.addEventListener("mouseover",e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&clearInterval(n)}),o.addEventListener("mouseout",e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&l()}),l()};var v=()=>{const e=document.querySelector("#page-preloader"),t=document.querySelector(".cssload-box-loading");setTimeout(()=>{e.style.display="none",t.style.display="none"},500)};n("31 december 2020"),c(),a(),s(),l(),u(),d(100),i(),m(),v()}]);