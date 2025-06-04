import{a as l,S as f,i as n}from"./assets/vendor-Ca8cN8cH.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const d="50595955-e0b6c1995a30b33308caba1cc";l.defaults.baseURL="https://pixabay.com/api/";function p(t){return l("",{params:{key:d,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(({data:s})=>s)}const h=new f(".gallery-link",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom"}),g=document.querySelector(".gallery");function y(t){const o=t.map(({webformatURL:s,largeImageURL:a,tags:e,likes:r,views:i,comments:m,downloads:u})=>`
      <li class="gallery-item">
    <a class="gallery-link" href="${a}">
      <img
        class="gallery-image"
        src="${s}"
        alt="${e}"
      />
    </a>
    <div class="statisticInfo">
      <div class="itemInfo">
        <h3 class="itemInfoName">Likes</h3>
        <p>${r}</p>
      </div>
      <div class="itemInfo">
        <h3 class="itemInfoName">Views</h3>
        <p>${i}</p>
      </div>
      <div class="itemInfo">
        <h3 class="itemInfoName">Comments</h3>
        <p>${m}</p>
      </div>
      <div class="itemInfo">
        <h3 class="itemInfoName">Downloads</h3>
        <p>${u}</p>  
       </div>
    </div>
  </li>`).join("");g.insertAdjacentHTML("beforeend",o),h.refresh()}function v(){const t=document.querySelector(".loader");t==null||t.classList.add("active")}function L(){const t=document.querySelector(".loader");t==null||t.classList.remove("active")}const c=document.querySelector(".form"),b=document.querySelector(".gallery");c.addEventListener("submit",S);function S(t){t.preventDefault();const o=c.elements["search-text"].value.trim();if(console.log(o),console.dir(o),o===""){n.warning({message:"Please enter a search term.",position:"topRight"});return}b.innerHTML="",v(),p(o).then(({hits:s})=>{if(s.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(s)}).catch(s=>{console.error("Search failed:",s),n.error({message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{L(),c.reset()})}
//# sourceMappingURL=index.js.map
