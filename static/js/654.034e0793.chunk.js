"use strict";(self.webpackChunkfoodies_app=self.webpackChunkfoodies_app||[]).push([[654],{9031:(e,s,r)=>{r.d(s,{A:()=>c});var a=r(5043),i=r(5475);const l="Pagination_pagination-container__dShop",o="Pagination_btn__8zdFY",t="Pagination_active__DDld0";var n=r(579);const c=e=>{let{total:s,limit:r=10}=e;const[c,d]=(0,a.useState)(3),[p,_]=(0,i.ok)(),m=Math.ceil(s/r),u=parseInt(p.get("page"))||1,h=()=>{const e=document.querySelector(`.${l}`),s=window.getComputedStyle(e);return parseInt(s.getPropertyValue("--count"))};(0,a.useEffect)((()=>{d(h());const e=()=>{d(h())};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]),(0,a.useEffect)((()=>{u>m&&m>0&&_(new URLSearchParams({page:m.toString()}))}),[u,m,_]);return(0,n.jsx)("div",{className:l,role:"navigation","aria-label":"Pagination Navigation",children:(()=>{let e=Math.max(1,u-Math.floor(c/2)),s=e+c-1;s>m&&(s=m,e=Math.max(1,m-c+1));const r=[];for(let a=e;a<=s;a++)r.push((0,n.jsx)("button",{onClick:()=>{var e;(e=a)>=1&&e<=m&&_({page:e})},className:`${o} ${u===a?t:""}`,"aria-current":u===a?"page":void 0,"aria-label":`Go to page ${a}`,children:a},a));return r})()})}},5704:(e,s,r)=>{r.d(s,{A:()=>n});r(5043);var a=r(5475);const i="PathInfo_path-info__oV2qx",l="PathInfo_home-link__KCe5g",o="PathInfo_current-page__N-cAI";var t=r(579);const n=e=>{let{currentPage:s}=e;return(0,t.jsxs)("div",{className:i,children:[(0,t.jsx)(a.N_,{to:"/",className:l,children:"Home"}),(0,t.jsx)("span",{className:o,children:s})]})}},8392:(e,s,r)=>{r.d(s,{A:()=>l});const a="SubtitleComponent_subtitle__jqa2f";var i=r(579);const l=function(e){let{className:s,children:r}=e;return(0,i.jsx)("p",{className:`${s} ${a}`,children:r})}},6457:(e,s,r)=>{r.d(s,{A:()=>i});var a=r(579);function i(e){let{src:s,alt:r,className:i}=e;const l=Array.isArray(s),o=l?`${s[0]} 1x, ${s[1]} 2x`:void 0;return(0,a.jsx)("img",{src:l?s[0]:s,srcSet:o,alt:r,className:i})}},2393:(e,s,r)=>{r.d(s,{A:()=>t});const a="MainTitle_mainTitle__Ubri6";var i=r(8139),l=r.n(i),o=r(579);const t=e=>{let{text:s,addStyle:r=""}=e;return(0,o.jsx)("h2",{className:l()(a,r),children:s})}},503:(e,s,r)=>{r.r(s),r.d(s,{default:()=>ge});var a=r(5043),i=r(5704),l=r(2393),o=r(8392),t=r(6286);const n="UserPage_userPageWrapper__dACwz",c="UserPage_userPageButton__6oUrM",d="UserPage_userPageMainTitle__ytco-",p="UserPage_userPageSubtitle__NS1eT",_="UserPage_pageLoader__Wof2z",m="UserPage_userWrapper__QS86o",u="UserPage_userInfoWrapper__sqRFI",h="UserPage_tabsWrapper__v5dwO";var f=r(6457);const w="UserInfo_profile-head-holder__OqlGj",x="UserInfo_profile-head__qVY9B",v="UserInfo_profile-img-holder__aCT3B",j="UserInfo_user-avatar__WW7aE",g="UserInfo_no-image__EIbyu",N="UserInfo_upload-avatar__o-cpX",P="UserInfo_user-login__1-xBt",y="UserInfo_profile-data__aYB-4",C="UserInfo_profile-data-li__JUmd9",b="UserInfo_profile-data-li-name__+7zv2",U="UserInfo_profile-data-li-value__isiZj";var A=r(5810),F=r(3139),I=r(3003),R=r(8378),S=r(579);const L=e=>{let{user:s,isOwnProfile:r}=e;const a=(0,I.wA)();return(0,S.jsx)("div",{className:w,children:(0,S.jsxs)("div",{className:x,children:[(0,S.jsxs)("div",{className:v,children:[(0,S.jsx)(f.A,{src:s.avatar?s.avatar.startsWith("http")?s.avatar:`https://foodies-api-hrrk.onrender.com/${s.avatar}`:A.A.noImage,alt:"",className:`${j} ${A.A?g:""}`}),r&&(0,S.jsxs)("label",{className:N,children:[(0,S.jsx)("input",{type:"file",name:"avatar",onChange:e=>{const s=e.target.files[0];s&&a((0,R.F4)(s))}}),(0,S.jsx)(F.Ah,{name:"icon-plus"})]})]}),(0,S.jsx)("h3",{className:P,children:s.name}),(0,S.jsxs)("ul",{className:y,children:[(0,S.jsxs)("li",{className:C,children:[(0,S.jsx)("span",{className:b,children:"Email:"}),(0,S.jsx)("span",{className:U,children:s.email})]}),(0,S.jsxs)("li",{className:C,children:[(0,S.jsx)("span",{className:b,children:"Recipes:"}),(0,S.jsx)("span",{className:U,children:s.createRecipeCount})]}),r&&(0,S.jsxs)("li",{className:C,children:[(0,S.jsx)("span",{className:b,children:"Favorites:"}),(0,S.jsx)("span",{className:U,children:s.countFavouriteRecipe})]}),(0,S.jsxs)("li",{className:C,children:[(0,S.jsx)("span",{className:b,children:"Followers:"}),(0,S.jsx)("span",{className:U,children:s.followingUsersCount})]}),r&&(0,S.jsxs)("li",{className:C,children:[(0,S.jsx)("span",{className:b,children:"Following:"}),(0,S.jsx)("span",{className:U,children:s.followersUserCount})]})]})]})})},k="TabsList_tabListWrapper__eoz6t",E="TabsList_tabsList__w4O2H",B="TabsList_tabItem__NrWpo",W="TabsList_activeTab__KlxAO";var T=r(3216);const $=e=>{let{isOwnProfile:s,onTabChange:r}=e;const i=(0,T.Zp)(),[l,o]=(0,a.useState)(s?"my-recipes":"recipes"),t=s?[{id:"my-recipes",label:"My Recipes"},{id:"my-favorites",label:"My Favorites"},{id:"followers",label:"Followers"},{id:"following",label:"Following"}]:[{id:"recipes",label:"Recipes"},{id:"followers",label:"Followers"}];return(0,S.jsx)("div",{className:k,children:(0,S.jsx)("ul",{className:E,children:t.map((e=>(0,S.jsx)("li",{className:`${B} ${e.id===l?W:""}`,onClick:()=>{return s=e.id,o(s),r(s),void i("?page=1");var s},children:e.label},e.id)))})})},O="RecipePreview_recipeCard__mOBjY",z="RecipePreview_recipeImage__6aJA2",D="RecipePreview_recipeDetails__-NxfS",M="RecipePreview_recipeTitle__F2Yzm",V="RecipePreview_recipeDescription__JLUvy",q="RecipePreview_actions__9Uw1i",K="RecipePreview_link__fYUyp",H="RecipePreview_icon__2u+Xj",Y="RecipePreview_deleteButton__HFZ5k",J="RecipePreview_deleteIcon__A1iqC";var Q=r(5475),Z=r(9824),G=r(9621);const X=e=>{let{recipe:s,onDelete:r}=e;const{id:a,title:i,description:l,imageUrl:o,thumb:t}=s;return(0,S.jsxs)("div",{className:O,children:[(0,S.jsx)("img",{src:o||t||"path/to/placeholder_image.jpg",alt:i,className:z}),(0,S.jsxs)("div",{className:D,children:[(0,S.jsx)("h3",{className:M,children:i}),(0,S.jsx)("p",{className:V,children:l}),(0,S.jsxs)("div",{className:q,children:[(0,S.jsx)(Q.N_,{to:`/recipe/${a}`,className:K,children:(0,S.jsx)(Z.A,{iconId:"icon-arrow-up-right",customStyle:H,stroke:""})}),(0,S.jsx)("button",{onClick:async()=>{try{await(async e=>{try{await G.Ay.delete(`/api/recipes/${e}`)}catch(s){throw console.error("Error deleting recipe:",s),s}})(a),r(a)}catch(e){console.error("Error deleting recipe:",e)}},className:Y,children:(0,S.jsx)(Z.A,{iconId:"icon-custom-delete",customStyle:J,stroke:"#BFBEBE"})})]})]})]})},ee="ListItem_litsItemWrapper__mxh2x";var se=r(3264);const re={cardWrapper:"FollowerCard_cardWrapper__lmnn5",photoWrapper:"FollowerCard_photoWrapper__7QfDR",smallProfilePhoto:"FollowerCard_smallProfilePhoto__08cDi",followerData:"FollowerCard_followerData__4Ruva",name:"FollowerCard_name__hmE5E",descr:"FollowerCard_descr__pQCmL",followBtn:"FollowerCard_followBtn__mlvPm",followerCardList:"FollowerCard_followerCardList__JuZOg",iconBtn:"FollowerCard_iconBtn__UlEKa",icon:"FollowerCard_icon__RxkOf",recipesList:"FollowerCard_recipesList__8wocP",recipeCard:"FollowerCard_recipeCard__EIUUA","link-wrapper":"FollowerCard_link-wrapper__CVBVm"},ae="SmallRecipePhoto_recipeCard__uk3di",ie="SmallRecipePhoto_recipeImg__4yCKK",le=r.p+"static/media/recipe_without_img.7261336669f398ac4f83.jpg",oe=e=>{let{imgUrl:s,title:r}=e;return(0,S.jsx)("div",{className:ae,children:(0,S.jsx)("img",{className:ie,src:"[object FileList]"!==s?s:le,alt:r})})},te=(e,s,r)=>{const[i,l]=(0,a.useState)(window.innerWidth>=e?r:s);return(0,a.useEffect)((()=>{const a=()=>{window.innerWidth>=e?l(r):l(s)};return window.addEventListener("resize",a),a(),()=>window.removeEventListener("resize",a)}),[e,r,s]),i},ne=e=>{var s;let{data:r,tab:a,handleFollowUser:i,handleUnfollowUser:l}=e;const o=te(768,!1,3),n=te(1440,3,4);console.log("data in rfollowersCard",r);const c=()=>"followers"===a?r.isFollowing?"unfollow":"follow":"following"===a?"unfollow":void 0;return(0,S.jsxs)("li",{className:re.cardWrapper,children:[(0,S.jsxs)("div",{className:re.followerData,children:[(0,S.jsx)("img",{src:r.avatarURL||"https://gravatar.com/avatar/000000000000000000000000000000000000000000000000000000?d=mp",className:re.smallProfilePhoto,alt:"User avatar"}),(0,S.jsxs)("div",{children:[(0,S.jsxs)("h5",{className:re.name,children:[" ",r.name]}),(0,S.jsxs)("p",{className:re.descr,children:["Own recipes: ",r.recipeCount]}),(0,S.jsx)(t.A,{disabled:1===r.id,text:c(),variant:"follow_user",classname:re.followBtn,onClick:()=>"follow"===c()?i(r.id):l(r.id)})]})]}),o&&(0,S.jsx)("ul",{className:re.recipesList,children:null===r||void 0===r||null===(s=r.recipes)||void 0===s?void 0:s.map(((e,s)=>s<n?(0,S.jsx)("li",{children:(0,S.jsx)(oe,{imgUrl:e.thumb,title:e.title})},e._id):null))}),(0,S.jsx)(Q.k2,{to:`/user/${r.id}`,className:re.link_wrapper,children:(0,S.jsx)(se.A,{iconId:"icon-arrow-up-right",style:re.iconBtn,styleSVG:re.icon})})]})},ce=e=>{let{data:s}=e;const r=(0,I.wA)(),a=e=>{r((0,R.pV)(e))},i=e=>{r((0,R.Qt)(e))};return(0,S.jsx)("ul",{className:re.followerCardList,children:s.map((e=>(0,S.jsx)(ne,{data:e,tab:"followers",handleFollowUser:a,handleUnfollowUser:i},e.id)))})};var de=r(7606),pe=r(2524);const _e=e=>e.user,me=e=>e.user.followingUsers,ue=e=>e.user.followers;var he=r(9031);const fe=e=>{var s,r,i,l;let{activeTab:t,userId:n}=e;const c=(0,I.wA)(),d=(0,I.d4)(de.BS),p=(0,I.d4)(ue)||[],_=(0,I.d4)(de.ie),m=(0,I.d4)(me)||[],u=(0,T.zy)(),h=(0,a.useCallback)((()=>new URLSearchParams(u.search).get("page")||1),[u.search]),[f,w]=(0,a.useState)(h());return(0,a.useEffect)((()=>{const e=h();w(e)}),[h,u.search]),(0,a.useEffect)((()=>{"my-recipes"===t?c((0,pe.HK)({limit:9,page:f})):"followers"===t?c((0,R.ip)({userId:n,limit:9,page:f})):"following"===t?c((0,R.SB)({userId:n,limit:9,page:f})):"my-favorites"===t&&c((0,pe.qM)({limit:9,page:f}))}),[c,t,n,f]),(0,S.jsx)("div",{className:ee,children:(0,S.jsx)("ul",{children:"my-recipes"===t||"recipes"===t?(null===(s=d.recipes)||void 0===s?void 0:s.length)>0?(0,S.jsxs)(S.Fragment,{children:[d.recipes.map((e=>(0,S.jsx)("li",{children:(0,S.jsx)(X,{recipe:e,onDelete:e=>{c((0,pe.HK)({limit:9,page:f}))}})},e.id))),(0,S.jsx)(he.A,{total:d.total,limit:9})]}):(0,S.jsx)(o.A,{children:"Nothing has been added to your recipes list yet. Please browse our recipes and add your favorites for easy access in the future."}):"my-favorites"===t?(null===(r=_.favoriteRecipes)||void 0===r?void 0:r.length)>0?(0,S.jsxs)(S.Fragment,{children:[_.favoriteRecipes.map((e=>(0,S.jsx)("li",{children:(0,S.jsx)(X,{recipe:e.recipe,onDelete:e=>{c((0,pe.HK)({limit:9,page:f}))}})},e.recipeId))),(0,S.jsx)(he.A,{total:_.total,limit:9})]}):(0,S.jsx)(o.A,{children:"Nothing has been added to your favorite recipes list yet. Please browse our recipes and add your favorites for easy access in the future."}):"followers"===t?(null===(i=p.users)||void 0===i?void 0:i.length)>0?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(ce,{data:p.users}),(0,S.jsx)(he.A,{total:p.followersCount,limit:9})]}):(0,S.jsx)(o.A,{children:"There are currently no followers on your account. Please engage our visitors with interesting content and draw their attention to your profile."}):"following"===t?(null===(l=m.users)||void 0===l?void 0:l.length)>0?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(ce,{data:m.users}),(0,S.jsx)(he.A,{total:m.followingCount,limit:9})]}):(0,S.jsx)(o.A,{children:"Your account currently has no subscriptions to other users. Learn more about our users and select those whose content interests you."}):null})})};var we=r(9673),xe=r(7723),ve=r(2806),je=r(1544);const ge=()=>{const{id:e}=(0,T.g)(),s=(0,I.wA)(),{user:r,loading:f,error:w}=(0,I.d4)(_e),x=(0,I.d4)(xe.l),[v,j]=(0,a.useState)("my-recipes"),[,g]=(0,a.useState)(1),[N,P]=(0,a.useState)(!1),y=x===r.id;(0,a.useEffect)((()=>{s((0,R.im)(e)),s((0,R.SB)(x))}),[e,s,x]),(0,a.useEffect)((()=>{j(y?"my-recipes":"followers")}),[y]);const C=()=>{P(!1)};return f?(0,S.jsx)(je.A,{className:_}):w?(0,S.jsxs)("div",{children:["\u041f\u043e\u043c\u0438\u043b\u043a\u0430: ",w]}):(0,S.jsxs)("div",{className:n,children:[(0,S.jsx)(i.A,{currentPage:"profile"}),(0,S.jsx)(l.A,{text:"Profile",addStyle:d}),(0,S.jsx)(o.A,{className:p,children:"Reveal your culinary art, share your favorite recipe and create gastronomic masterpieces with us."}),(0,S.jsxs)("div",{className:m,children:[(0,S.jsxs)("div",{className:u,children:[(0,S.jsx)(L,{user:r,isOwnProfile:y}),y?(0,S.jsx)(t.A,{text:"Log out",classname:c,onClick:()=>{P(!0)}}):(0,S.jsx)(t.A,{text:"Follow",classname:c,onClick:()=>{s((0,R.pV)(r.id))}})]}),(0,S.jsxs)("div",{className:h,children:[(0,S.jsx)($,{isOwnProfile:y,onTabChange:e=>{j(e),g(1)}}),(0,S.jsx)(fe,{activeTab:v,userId:e})]})]}),N&&(0,S.jsx)(ve.A,{isOpen:N,onClose:C,children:(0,S.jsx)(we.A,{setModalLogoutOpen:C})})]})}},7606:(e,s,r)=>{r.d(s,{BS:()=>t,Nd:()=>l,R4:()=>d,TV:()=>i,aA:()=>o,dB:()=>a,ie:()=>n,xH:()=>c,z5:()=>p});const a=e=>e.recipes.selectedRecipe,i=e=>e.recipes.isLoading,l=e=>e.recipes.isError,o=e=>e.recipes.favoriteRecipes,t=e=>e.recipes.recipes,n=e=>e.recipes.myFavorites,c=e=>e.recipes.isLoadingFavorite,d=e=>e.recipes.isErrorFavorite,p=e=>e.recipes.popularRecipes}}]);
//# sourceMappingURL=654.034e0793.chunk.js.map