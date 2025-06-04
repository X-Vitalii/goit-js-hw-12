import{a as l,S as d,i as n}from"./assets/vendor-Ca8cN8cH.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const f="50595955-e0b6c1995a30b33308caba1cc";l.defaults.baseURL="https://pixabay.com/api/";function p(e){return l("",{params:{key:f,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:1}}).then(({data:s})=>s)}const h=new d(".gallery-link",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom"}),g=document.querySelector(".gallery");function y(e){const r=e.map(({webformatURL:s,largeImageURL:a,tags:t,likes:o,views:i,comments:u,downloads:m})=>`
      <li class="gallery-item">
    <a class="gallery-link" href="${a}">
      <img
        class="gallery-image"
        src="${s}"
        alt="${t}"
      />
    </a>
    <div class="statisticInfo">
      <div class="itemInfo">
        <h3 class="itemInfoName">Likes</h3>
        <p>${o}</p>
      </div>
      <div class="itemInfo">
        <h3 class="itemInfoName">Views</h3>
        <p>${i}</p>
      </div>
      <div class="itemInfo">
        <h3 class="itemInfoName">Comments</h3>
        <p>${u}</p>
      </div>
      <div class="itemInfo">
        <h3 class="itemInfoName">Downloads</h3>
        <p>${m}</p>  
       </div>
    </div>
  </li>`).join("");g.insertAdjacentHTML("beforeend",r),h.refresh()}function v(){const e=document.querySelector(".loader");e==null||e.classList.add("active")}function L(){const e=document.querySelector(".loader");e==null||e.classList.remove("active")}function S(){const e=document.querySelector(".addMore");e==null||e.classList.add("active")}function b(){const e=document.querySelector(".addMore");e==null||e.classList.remove("active")}const c=document.querySelector(".form");document.querySelector(".gallery");c.addEventListener("submit",I);function I(e){e.preventDefault();const r=c.elements["search-text"].value.trim();if(console.log(r),console.dir(r),r===""){n.warning({message:"Please enter a search term.",position:"topRight"});return}v(),b(),p(r).then(({hits:s})=>{if(s.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(s)}).catch(s=>{console.error("Search failed:",s),n.error({message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{L(),S(),c.reset()})}
//# sourceMappingURL=index.js.map
