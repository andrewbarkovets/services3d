(()=>{"use strict";const e=document.querySelectorAll('menu ul>li a, a[href="#service-block"]');for(const t of e)t.addEventListener("click",(e=>{e.preventDefault();const o=t.getAttribute("href");document.querySelector(o).scrollIntoView({behavior:"smooth",block:"start"})}));(e=>{const t=document.querySelector("#timer-hours"),o=document.querySelector("#timer-minutes"),n=document.querySelector("#timer-seconds");let c=0;const r=()=>{const c=(()=>{const t=(new Date(e).getTime()-(new Date).getTime())/1e3,o=Math.floor(t%60),n=Math.floor(t/60%60);return{timeRemaining:t,hours:Math.floor(t/60/60),minutes:n,seconds:o}})(),r=(e,t)=>{return t.textContent=e<=0?"00":(o=e)<10?"0"+o:o;var o};r(c.hours,t),r(c.minutes,o),r(c.seconds,n),c.timeRemaining<=0&&clearInterval((void 0).timeInterval)};r(),c=setInterval(r,1e3)})("31 december 2020"),document.body.addEventListener("click",(()=>{const e=event.target,t=()=>{document.querySelector("menu").classList.toggle("active-menu")};(e.closest(".menu")||!e.closest("menu")&&document.querySelector("menu").classList.contains("active-menu"))&&t(),e.closest("menu")&&e.closest('[href^="#"]')&&t()})),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),o=document.querySelector(".popup-close"),n=document.querySelector(".popup-content"),c={count:-445,speed:15,startPos:-445,endPos:0},r=()=>{c.startPos>c.endPos?c.count-=c.speed:c.count+=c.speed,n.style.transform=`translateY(${c.count}px)`,(c.startPos>c.endPos?c.count>c.endPos:c.count<c.endPos)&&requestAnimationFrame(r)};t.forEach((t=>{t.addEventListener("click",(()=>{e.style.display="block",window.innerWidth>768&&(c.count=c.startPos,document.body.style.overflowY="hidden",requestAnimationFrame(r))}))})),o.addEventListener("click",(()=>{document.body.style.overflowY="",e.style.display="none"}))})(),(()=>{const e=document.querySelector(".service-header"),t=e.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{let n=e.target;n=n.closest(".service-header-tab"),n&&t.forEach(((e,c)=>{e===n&&(e=>{for(let n=0;n<o.length;n++)e===n?(t[n].classList.add("active"),o[n].classList.remove("d-none")):(t[n].classList.remove("active"),o[n].classList.add("d-none"))})(c)}))}))})(),(()=>{const e=document.querySelectorAll(".portfolio-item"),t=document.querySelector(".portfolio-dots");e.forEach((()=>{const e=document.createElement("li");e.classList.add("dot"),t.appendChild(e)})),t.children[0].classList.add("dot-active")})(),(()=>{const e=document.querySelector("#command .row"),t=e=>{const t=e.target;if(t.classList.contains("command__photo")){const e=t.src;t.src=t.dataset.img,t.dataset.img=e}};e.addEventListener("mouseover",t),e.addEventListener("mouseout",t)})(),((e=100)=>{const t=document.querySelector(".calc-block"),o=document.querySelector(".calc-type"),n=document.querySelector(".calc-square"),c=document.querySelector(".calc-day"),r=document.querySelector(".calc-count"),s=document.getElementById("total");t.addEventListener("input",(t=>{const a=t.target;(a.matches("select")||a.matches("input"))&&(()=>{let t=0,a=1,l=10;const d=o.options[o.selectedIndex].value,u=+n.value;r.value>1&&(a+=(r.value-1)/10),c.value&&c.value<5&&(l*=2),c.value&&c.value<10&&(l*=1.5),d&&u&&(t=e*d*u*a*l),s.textContent=((e,t)=>{let o=t/100;const n=setInterval((()=>{+e.textContent>=t?(e.textContent=t,clearInterval(n)):(e.textContent=Math.round(+e.textContent+o),o+=e.textContent/100)}),10);return Math.round(e.textContent)})(s,t)})()})),t.addEventListener("input",(e=>{(e.target.matches(".calc-square")||e.target.matches(".calc-count")||e.target.matches(".calc-day"))&&(e.target.value=e.target.value.replace(/\D/g,""))}))})(100),(()=>{const e=document.createElement("div");e.style.cssText="font-size: 2rem; color: white";const t=e=>{const t=e.target;t.matches(".form-phone")&&(t.value=t.value.replace(/[^+\d]/g,"")),"user_name"===t.name&&(t.value=t.value.replace(/[^а-яё ]/gi,"")),t.matches(".mess")&&(t.value=t.value.replace(/[^а-яё ,.]/gi,""))};document.querySelectorAll("form").forEach((n=>{n.addEventListener("submit",(t=>{t.preventDefault(),n.appendChild(e),e.textContent="Загрузка...";const c=new FormData(n),r={};c.forEach(((e,t)=>{r[t]=e})),o(r).then((()=>{e.textContent="Спасибо!Мы с вами свяжемся! ",n.querySelectorAll("input").forEach((e=>e.value="")),setTimeout((()=>{e.textContent=""}),2500)})).catch((t=>{e.textContent="Что-то пошло нет...",console.error(t)}))})),n.addEventListener("input",t)}));const o=e=>new Promise(((t,o)=>{const n=new XMLHttpRequest;n.addEventListener("readystatechange",(()=>{4===n.readyState&&(200!==n.readyState?t():o(n.status))})),n.open("POST","./server.php"),n.setRequestHeader("Content-Type","application/json"),n.send(JSON.stringify(e))}))})(),(()=>{const e=document.querySelectorAll(".portfolio-item"),t=document.querySelectorAll(".dot"),o=document.querySelector(".portfolio-content");let n,c=0;const r=(e,t,o)=>{e[t].classList.remove(o)},s=(e,t,o)=>{e[t].classList.add(o)},a=()=>{r(e,c,"portfolio-item-active"),r(t,c,"dot-active"),c=c<e.length-1?c+1:0,s(e,c,"portfolio-item-active"),s(t,c,"dot-active")},l=(e=2e3)=>{n=setInterval(a,e)};o.addEventListener("click",(o=>{o.preventDefault();const n=o.target;n.matches(".portfolio-btn, .dot")&&(r(e,c,"portfolio-item-active"),r(t,c,"dot-active"),n.matches("#arrow-right")?c++:n.matches("#arrow-left")?c--:n.matches(".dot")&&t.forEach(((e,t)=>{e===n&&(c=t)})),c>=e.length&&(c=0),c<0&&(c=e.length-1),s(e,c,"portfolio-item-active"),s(t,c,"dot-active"))})),o.addEventListener("mouseover",(e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&clearInterval(n)})),o.addEventListener("mouseout",(e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&l()})),l()})(),(()=>{const e=document.querySelector("#page-preloader"),t=document.querySelector(".cssload-box-loading");setTimeout((()=>{e.style.display="none",t.style.display="none"}),500)})()})();