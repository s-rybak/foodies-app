"use strict";(self.webpackChunkfoodies_app=self.webpackChunkfoodies_app||[]).push([[275],{5320:(e,a,t)=>{t.d(a,{A:()=>r});const s="ButtonOutline_button__-fCWq";var i=t(579);const r=function(e){let{className:a,onClick:t,children:r}=e;return(0,i.jsx)("button",{onClick:t,type:"button",className:`${a} ${s}`,children:r})}},9031:(e,a,t)=>{t.d(a,{A:()=>d});var s=t(5043),i=t(5475);const r="Pagination_pagination-container__dShop",n="Pagination_btn__8zdFY",c="Pagination_active__DDld0";var o=t(579);const d=e=>{let{total:a,limit:t=10}=e;const[d,l]=(0,s.useState)(3),[p,m]=(0,i.ok)(),h=Math.ceil(a/t),u=parseInt(p.get("page"))||1,x=()=>{const e=document.querySelector(`.${r}`),a=window.getComputedStyle(e);return parseInt(a.getPropertyValue("--count"))};(0,s.useEffect)((()=>{l(x());const e=()=>{l(x())};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]),(0,s.useEffect)((()=>{u>h&&h>0&&m(new URLSearchParams({page:h.toString()}))}),[u,h,m]);return(0,o.jsx)("div",{className:r,role:"navigation","aria-label":"Pagination Navigation",children:(()=>{let e=Math.max(1,u-Math.floor(d/2)),a=e+d-1;a>h&&(a=h,e=Math.max(1,h-d+1));const t=[];for(let s=e;s<=a;s++)t.push((0,o.jsx)("button",{onClick:()=>{var e;(e=s)>=1&&e<=h&&m({page:e})},className:`${n} ${u===s?c:""}`,"aria-current":u===s?"page":void 0,"aria-label":`Go to page ${s}`,children:s},s));return t})()})}},5844:(e,a,t)=>{t.d(a,{j:()=>k});var s=t(655),i=t(3393),r=t(2426);const n="RecipeCard_card__z1Thu",c="RecipeCard_image__eRYIq",o="RecipeCard_title__LqNPs",d="RecipeCard_text__Kxlmm",l="RecipeCard_info__-KP-z",p="RecipeCard_userInfo__bRQFJ",m="RecipeCard_avatarContainer__2+hvG",h="RecipeCard_avatar__WyO1n",u="RecipeCard_name__U1yM9",x="RecipeCard_buttons__72SFX",g="RecipeCard_btn__-28SB",_="RecipeCard_icon__9j+DD";var j=t(5475),b=t(3003),f=t(7723),v=t(5043),N=t(7606),w=t(2524);const C="RecipeCardFavoriteButton_btn__2lvvD",y="RecipeCardFavoriteButton_icon__OaxJT";var S=t(579);const A=function(e){let{idRecipe:a,favorite:t}=e;const[s,i]=(0,v.useState)(t),n=(0,b.wA)(),c=(0,b.d4)(N.xH);return(0,S.jsx)(S.Fragment,{children:s?(0,S.jsx)("button",{className:C,type:"button",onClick:()=>(async e=>{c||(i(!1),n((0,w.Vf)(e)))})(a),children:(0,S.jsx)("svg",{className:y,children:(0,S.jsx)("use",{href:`${r.A}#icon-heart`})})}):(0,S.jsx)("button",{className:C,type:"button",onClick:()=>(async e=>{c||(i(!0),n((0,w.oU)(e)))})(a),children:(0,S.jsx)("svg",{className:y,children:(0,S.jsx)("use",{href:`${r.A}#icon-heart-outline`})})})})},k=e=>{let{recipe:a,isFavorite:t}=e;const v=(0,b.d4)(f.Ah);return(0,S.jsxs)("div",{className:n,children:[(0,S.jsx)("img",{className:c,src:null!==a&&void 0!==a&&a.thumb?`${a.thumb.startsWith("http")?a.thumb:"https://foodies-api-hrrk.onrender.com/"+a.thumb}`:s,alt:a.title}),(0,S.jsx)("h3",{className:o,children:a.title}),(0,S.jsx)("p",{className:d,children:a.description}),(0,S.jsxs)("div",{className:l,children:[(0,S.jsxs)("div",{className:p,children:[(0,S.jsx)("div",{className:m,children:(0,S.jsx)("img",{className:h,src:a.user.avatar?`${a.user.avatar.startsWith("http")?a.user.avatar:"https://foodies-api-hrrk.onrender.com/"+a.user.avatar}`:i,alt:a.user.name})}),(0,S.jsx)("h4",{className:u,children:a.user.name})]}),(0,S.jsxs)("div",{className:x,children:[v?(0,S.jsx)(A,{idRecipe:a.id,favorite:t}):(0,S.jsx)(S.Fragment,{}),(0,S.jsx)(j.k2,{to:`recipe/${a.id}`,className:g,type:"button",children:(0,S.jsx)("svg",{className:_,children:(0,S.jsx)("use",{href:`${r.A}#icon-arrow-up-right`})})})]})]})]})}},8392:(e,a,t)=>{t.d(a,{A:()=>r});const s="SubtitleComponent_subtitle__jqa2f";var i=t(579);const r=function(e){let{className:a,children:t}=e;return(0,i.jsx)("p",{className:`${a} ${s}`,children:t})}},6457:(e,a,t)=>{t.d(a,{A:()=>i});var s=t(579);function i(e){let{src:a,alt:t,className:i}=e;const r=Array.isArray(a),n=r?`${a[0]} 1x, ${a[1]} 2x`:void 0;return(0,s.jsx)("img",{src:r?a[0]:a,srcSet:n,alt:t,className:i})}},573:(e,a,t)=>{t.d(a,{A:()=>c});var s=t(2951),i=t(5043);const r={control:(e,a)=>{let{isFocused:t,isSelected:s}=a;return{...e,display:"flex",alignItems:"center",borderRadius:"30px",border:t||s?"1px solid var(--color-button)":"1px solid var(--color-gray)",boxShadow:t?"0 0 0 1px var(--color-main)":null,":hover":{border:"1px solid var(--color-button)"},":active":{border:"1px solid var(--color-button)"},padding:"0 14px","@media (min-width: 375px)":{width:"343px"},"@media (min-width: 765px)":{width:"315px",height:"56px",padding:"0 18px"}}},menu:e=>({...e,padding:"16px 18px",borderRadius:"15px",border:"1px solid var(--color-button)",fontSize:"16px",fontWeight:"500",lineHeight:"calc(24 / 16)",letterSpacing:"-0.32px","@media (min-width: 375px)":{width:"343px"},"@media (min-width: 765px)":{width:"315px"}}),placeholder:e=>({...e,fontSize:"14px",fontWeight:"500",lineHeight:"calc(20 / 14)",letterSpacing:"-0.28px",color:"var(--color-button)","@media (min-width: 1440px)":{fontSize:"16px"}}),indicatorSeparator:e=>({...e,display:"none"}),dropdownIndicator:e=>({...e,color:"var(--color-main)",paddigRight:"14px",svg:{width:"18px",height:"18px"}}),valueContainer:e=>({...e,padding:"10px 0px"}),option:(e,a)=>{let{isFocused:t,isSelected:s}=a;return{...e,color:t?"var(--color-button)":"var(--color-main)",backgroundColor:t?"var(--color-gray)":"var(--color-white)"}}};var n=t(579);const c=i.forwardRef(((e,a)=>{let{options:t,placeholder:i,className:c,onChange:o,value:d}=e;return(0,n.jsx)(s.Ay,{ref:a,options:t,placeholder:i,className:c,onChange:o,value:d,styles:r})}))},704:(e,a,t)=>{t.r(a),t.d(a,{default:()=>Ze});const s={"recipes-category":"Home_recipes-category__0XIFo",icon:"Home_icon__qpU8J",btn:"Home_btn__PmZsX","no-recipes":"Home_no-recipes__pmaiP"};var i=t(5043),r=t(3003),n=t(9938);const c=e=>e.testimonials.testimonials,o=e=>e.testimonials.isLoading,d=e=>e.testimonials.error,l="Testimonials_testimonials__4Fc8I",p="Testimonials_testimonial_message__P2YlU",m="Testimonials_testimonial_text__fYcDW",h="Testimonials_slider__QjDCA",u="Testimonials_container_icon__QiAeD",x="Testimonials_icon__+WoeF",g="Testimonials_pagination__77ZLz",_="Testimonials_active__Oubx8";var j=t(9824),b=t(579);const f=()=>{var e,a,t;const s=(0,r.wA)(),f=(0,r.d4)(c),v=(0,r.d4)(o),N=(0,r.d4)(d),[w,C]=(0,i.useState)(0);return(0,i.useEffect)((()=>{s((0,n.V)())}),[s]),(0,i.useEffect)((()=>{const e=setInterval((()=>{C((e=>(e+1)%f.length))}),5e3);return()=>clearInterval(e)}),[f.length]),v||N?(0,b.jsx)(b.Fragment,{}):(0,b.jsxs)("div",{className:l,children:[(0,b.jsx)("p",{className:m,children:"What our customer say"}),(0,b.jsx)("h2",{children:"Testimonials"}),(0,b.jsx)("div",{className:u,children:(0,b.jsx)(j.A,{iconId:"icon-testimoals",customStyle:x,stroke:""})}),(0,b.jsxs)("div",{className:h,children:[(0,b.jsx)("p",{className:p,children:null===(e=f[w])||void 0===e?void 0:e.testimonial}),(0,b.jsx)("h4",{children:null===(a=f[w])||void 0===a||null===(t=a.user)||void 0===t?void 0:t.name})]}),(0,b.jsx)("div",{className:g,children:f.map(((e,a)=>(0,b.jsx)("button",{className:a===w?_:"",onClick:()=>C(a)},e.id)))})]})},v="HeroTitle_title__B45nl";const N=function(e){let{children:a}=e;return(0,b.jsx)("h1",{className:v,children:a})};var w=t(8392),C=t(5320);const y=t.p+"static/media/hero-image-big.44ee22595162e1a3b02a.webp",S=t.p+"static/media/hero-image-big@2x.33f1ae2189c3f28c9d54.webp",A=t.p+"static/media/hero-image-small.cb607fd36e3f10c4c846.webp",k=t.p+"static/media/hero-image-small@2x.986250262b4393069d03.webp",$=t.p+"static/media/hero-image-big-tablet_and_desktop.f3beb048e712fcd334c2.webp",R=t.p+"static/media/hero-image-big-tablet_and_desktop@2x.3ae4f61fdda62f736b9c.webp",H=t.p+"static/media/hero-image-small-tablet_and_desktop.c9ffc4a15320dbdac131.webp",I=t.p+"static/media/hero-image-small-tablet_and_desktop@2x.f86f90cde4be853cf374.webp",F="HeroImages_component__wKpoW",L="HeroImages_image_small__rU7z0",P="HeroImages_image_big__Bjj6c";const B=function(){return(0,b.jsxs)("ul",{className:F,children:[(0,b.jsx)("li",{children:(0,b.jsxs)("picture",{children:[(0,b.jsx)("source",{media:"(min-width: 768px)",srcSet:`${H} 1x, ${I} 2x`}),(0,b.jsx)("img",{className:L,src:A,srcSet:`${A} 1x, ${k} 2x`,width:77,height:70,alt:"tiramisu in a glass"})]})}),(0,b.jsx)("li",{children:(0,b.jsxs)("picture",{children:[(0,b.jsx)("source",{media:"(min-width: 768px)",srcSet:`${$} 1x, ${R} 2x`}),(0,b.jsx)("img",{className:P,src:y,srcSet:`${y} 1x, ${S} 2x`,width:190,height:172,alt:"wellington on the desk"})]})})]})},z="LinkOutline_link__eM4wn";var E=t(5475);const T=function(e){let{className:a,path:t,children:s}=e;return(0,b.jsx)(E.N_,{to:t,className:`${a} ${z}`,children:s})},D="Hero_component__rceeW",V="Hero_subtitle__8Mcc5",W="Hero_button__r+LVG";var M=t(7723),q=t(2806),O=t(4156);const G=function(){const e=(0,r.d4)(M.Ah),[a,t]=(0,i.useState)(!1);return(0,b.jsxs)("div",{className:D,children:[(0,b.jsx)(N,{children:"Improve Your Culinary Talents"}),(0,b.jsx)(w.A,{className:V,children:"Amazing recipes for beginners in the world of cooking, enveloping you in the aromas and tastes of various cuisines."}),e?(0,b.jsx)(T,{path:"/recipe/add",className:W,children:"Add recipe"}):(0,b.jsx)(C.A,{onClick:()=>{t(!0)},className:W,children:"Add recipe"}),(0,b.jsx)(B,{}),(0,b.jsx)(q.A,{isOpen:a,onClose:()=>t(!1),children:(0,b.jsx)(O.A,{variant:"sign-in"})})]})};var U=t(3139);const J="CategoryList_category-list__zaqP1",K="CategoryList_category-btn__gI8Gc";var Y=t(6457);const Q="CardCategory_card__BDoX4",X="CardCategory_cardImg__hwu7-",Z="CardCategory_cardActions__I8szL",ee="CardCategory_button__6rBVS",ae="CardCategory_titlebutton__zHwEK",te="CardCategory_iconbutton__RfKSx",se=t.p+"static/media/Beef-min.74f3187187b2cd9f74a3.jpg",ie=t.p+"static/media/Beef@2x.fbb9da57ec9b601f1630.jpg",re=t.p+"static/media/Breakfast-min.9e2dad9e3c7f32abb7c1.jpg",ne=t.p+"static/media/Breakfast@2x.f595257f22d9e3517271.jpg",ce=t.p+"static/media/Desserts-min.2bdd50475892ce226e61.jpg",oe=t.p+"static/media/Desserts@2x.70de2ea9d32cd4d4e96b.jpg",de=t.p+"static/media/Goat-min.abdb09b94a7cd48d8453.jpg",le=t.p+"static/media/Goat@2x.5a18cf1c014e2c3bb42f.jpg",pe=t.p+"static/media/Lamb-min.7f563c812add070ab96f.jpg",me=t.p+"static/media/Lamb@2x.48c6373d9546dea522af.jpg",he=t.p+"static/media/Miscellaneous-min.46c3b0ff8a1ef7124445.jpg",ue=t.p+"static/media/Miscellaneous@2x.ac70a5df61810c30404b.jpg",xe=t.p+"static/media/Pasta-min.38852d02b7c62b04874f.jpg",ge=t.p+"static/media/Pasta@2x.7d82674eb0b8c95b5853.jpg",_e=t.p+"static/media/Pork-min.8bad52455373e73578d5.jpg",je=t.p+"static/media/Pork@2x.e1841770296978283d80.jpg",be=t.p+"static/media/Seafood-min.a609e0a629f778b25a2b.jpg",fe=t.p+"static/media/Seafood@2x.18ac1a2bb70422e81b4d.jpg",ve=t.p+"static/media/Side-min.6635fc1eeeaf6b8d09b0.jpg",Ne=t.p+"static/media/Side@2x.82b79c35045dd8fc802d.jpg",we=t.p+"static/media/Starter.f503f2a5265ec2d373a7.webp",Ce=t.p+"static/media/Starter.@2x.f503f2a5265ec2d373a7.webp",ye=t.p+"static/media/Vegan.e1c578e94f9918d538b5.png",Se=t.p+"static/media/Vegan2x.c19717fe349f585e3d49.png",Ae=t.p+"static/media/Vegetarian.b833432dc3ec3673e67c.png",ke=t.p+"static/media/Vegetarian2x.426c23ffce6a2fe42ab4.png",$e=t.p+"static/media/Soup.2f89a66c522bd4ab52d6.webp",Re={Vegan:[ye,Se],Vegetarian:[Ae,ke],Soup:[$e,$e],Beef:[se,ie],Breakfast:[re,ne],Dessert:[ce,oe],Goat:[de,le],Lamb:[pe,me],Chicken:[pe,me],Miscellaneous:[he,ue],Pasta:[xe,ge],Pork:[_e,je],Seafood:[be,fe],Side:[ve,Ne],Starter:[we,Ce]};function He(e){let{category:a,handleSelect:t}=e;return(0,b.jsxs)("div",{className:Q,children:[(0,b.jsx)(Y.A,{src:Re[a.name],alt:`${a.name} category`,className:X}),(0,b.jsxs)("div",{className:Z,children:[(0,b.jsx)("button",{onClick:()=>t(a),className:`${ae} ${ee}`,children:a.name}),(0,b.jsx)("button",{onClick:()=>t(a),className:`${te}`,children:(0,b.jsx)(U.Ah,{name:"icon-arrow-up-right"})})]})]})}var Ie=t(6990),Fe=t(2932);const Le=e=>{let{handleSelect:a}=e;const[t,s]=(0,i.useState)(!1),n=(0,r.d4)(Fe.J),c=(0,r.wA)();return(0,i.useEffect)((()=>{c((0,Ie.j)())}),[c]),(0,b.jsx)("div",{className:J,children:n&&n.length>0&&(0,b.jsxs)(b.Fragment,{children:[(t?n:n.slice(0,11)).map(((e,t)=>(0,b.jsx)(He,{category:e,handleSelect:a},e.id))),!t&&n.length>11&&(0,b.jsx)("button",{className:K,onClick:()=>{s(!0)},children:"All categories"})]})})};var Pe=t(5844);const Be="recipeList_recipes-list__voqj+";var ze=t(2524),Ee=t(7606);const Te=e=>{let{recipes:a}=e;const t=(0,r.wA)(),s=(0,r.d4)(Ee.aA);(0,i.useEffect)((()=>{t((0,ze.OV)())}),[t]);return(0,b.jsx)("div",{className:Be,children:a.map((e=>{return(0,b.jsx)(Pe.j,{recipe:e,isFavorite:(a=e.id,-1!==s.findIndex((e=>e.recipeId===a)))},e.id);var a}))})};var De=t(9031);const Ve="recipeFilters_container__dQDN2";var We=t(5666),Me=t(2614),qe=t(7008),Oe=t(8572),Ge=t(573);const Ue=e=>{let{changeHandler:a}=e;const t=(0,r.wA)();(0,i.useEffect)((()=>{t((0,qe.L)())}),[t]);const s=(0,r.d4)(We.v).map((e=>{let{id:a,name:t}=e;return{value:a,label:t}}));return(0,b.jsx)(Ge.A,{options:s,placeholder:"Ingredients",onChange:e=>a(e.value)})},Je=e=>{let{changeHandler:a}=e;const t=(0,r.wA)();(0,i.useEffect)((()=>{t((0,Oe.R)())}),[t]);const s=(0,r.d4)(Me.d).map((e=>{let{id:a,name:t}=e;return{value:a,label:t}}));return(0,b.jsx)(Ge.A,{options:s,placeholder:"Area",onChange:e=>a(e.value)})},Ke=e=>{let{changeHandler:a}=e;return(0,b.jsxs)("div",{className:Ve,children:[(0,b.jsx)(Ue,{changeHandler:e=>{a(e,"ingredients")}}),(0,b.jsx)(Je,{changeHandler:e=>{a(e,"areas")}})]})};var Ye=t(9621),Qe=t(2426),Xe=t(3216);function Ze(){const e=(0,i.useRef)(null),[a,t]=(0,i.useState)([]),[r,n]=(0,i.useState)(0),[c,o]=(0,i.useState)({}),[d,l]=(0,i.useState)(""),[p,m]=(0,i.useState)(""),h=(0,Xe.zy)();var u;const x=(u=h.search,new URLSearchParams(u)).get("page")||1,g=e=>0===Object.keys(e).length&&e.constructor===Object;return(0,i.useEffect)((()=>{if(!c.id)return;(async()=>{try{const e=`/api/recipes?page=${x}&limit=6&category=${c.id}`+(p?`&area=${p}`:"")+(d?`&ingredient=${d}`:""),a=await Ye.Ay.get(e);t(a.data.recipes),n(a.data.total)}catch(e){t([]),n(0)}})()}),[c,x,p,d]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(G,{}),(0,b.jsxs)(U.mc,{children:[!g(c)&&(0,b.jsxs)("button",{className:s.btn,onClick:()=>{o({}),l(""),m("")},children:[(0,b.jsx)("svg",{className:s.icon,children:(0,b.jsx)("use",{href:`${Qe.A}#icon-arrow-up-right`})}),"back"]}),(0,b.jsx)("div",{ref:e}),(0,b.jsx)(U.hE,{children:g(c)?"Categories":c.name}),(0,b.jsx)(U.B8,{children:g(c)?"Discover a limitless world of culinary possibilities and enjoy\n          exquisite recipes that combine taste, style and the warm atmosphere of\n          the kitchen.":"Go on a taste journey, where every sip is a sophisticated creative chord, and every dessert is an expression of the most refined gastronomic desires."}),g(c)?(0,b.jsx)(Le,{handleSelect:a=>{o(a),e.current&&setTimeout((()=>{e.current&&e.current.scrollIntoView({behavior:"smooth"})}),100)}}):(0,b.jsxs)("div",{className:s["recipes-category"],children:[(0,b.jsx)("div",{children:(0,b.jsx)(Ke,{changeHandler:(e,a)=>{"ingredients"===a?l(e):m(e)}})}),(0,b.jsxs)("div",{children:[(0,b.jsxs)("div",{className:s["recipes-list"],children:[(0,b.jsx)(Te,{recipes:a}),0===a.length&&(0,b.jsx)("div",{className:s["no-recipes"],children:(0,b.jsx)("p",{children:"No recipes found"})})]}),(0,b.jsx)(De.A,{total:r,limit:6})]})]})]}),(0,b.jsx)("div",{children:(0,b.jsx)(f,{})})]})}},2614:(e,a,t)=>{t.d(a,{d:()=>s});const s=e=>e.areas.areas},2932:(e,a,t)=>{t.d(a,{J:()=>s});const s=e=>e.categories.categories},5666:(e,a,t)=>{t.d(a,{v:()=>s});const s=e=>e.ingredients.ingredients},7606:(e,a,t)=>{t.d(a,{BS:()=>c,Nd:()=>r,R4:()=>l,TV:()=>i,aA:()=>n,dB:()=>s,ie:()=>o,xH:()=>d,z5:()=>p});const s=e=>e.recipes.selectedRecipe,i=e=>e.recipes.isLoading,r=e=>e.recipes.isError,n=e=>e.recipes.favoriteRecipes,c=e=>e.recipes.recipes,o=e=>e.recipes.myFavorites,d=e=>e.recipes.isLoadingFavorite,l=e=>e.recipes.isErrorFavorite,p=e=>e.recipes.popularRecipes}}]);
//# sourceMappingURL=275.60b04fb9.chunk.js.map