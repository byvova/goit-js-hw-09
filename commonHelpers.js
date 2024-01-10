import"./assets/modulepreload-polyfill-ec808ebb.js";import"https://cdn.jsdelivr.net/npm/simplelightbox@2.14.2/+esm";const p=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}];console.log(p);const e=document.querySelector(".gallery");e.style.display="grid";e.style.gridTemplateColumns="repeat(3, 1fr)";e.style.gridColumnGap="24px";e.style.gridRowGap="24px";e.style.margin="0 156px";e.innerHTML=p.reduce((t,o)=>t+`
    <li class="gallery-item">
    <a
    class="gallery-link"
    href="${o.original}">
        <img
        class="gallery-image"
        src="${o.preview}" 
        alt="${o.description}" />
    </a>
    </li>
`,"");const l=document.querySelectorAll(".gallery-item");l.forEach(t=>t.style.listStyle="none");const n=document.querySelectorAll(".gallery-image");n.forEach(t=>{t.style.display="block",t.style.width="500px",t.style.maxWidth="100%",t.style.height="300px"});const i=new Simplelightbox(".gallery a");i.on("show.simplelightbox",function(){const t=i.currentImage;if(t&&t.querySelector("img").hasAttribute("alt")){const o=t.querySelector("img").getAttribute("alt"),a=document.createElement("p");a.classList.add("lightbox-alt"),a.textContent=o,t.appendChild(a)}});i.on("close.simplelightbox",function(){const t=document.querySelector(".lightbox-alt");t&&t.remove()});
//# sourceMappingURL=commonHelpers.js.map
