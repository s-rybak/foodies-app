"use strict";(self.webpackChunkfoodies_app=self.webpackChunkfoodies_app||[]).push([[654],{9031:(e,s,r)=>{r.d(s,{A:()=>c});var a=r(5043),i=r(5475);const l="Pagination_pagination-container__dShop",o="Pagination_btn__8zdFY",t="Pagination_active__DDld0";var n=r(579);const c=e=>{let{total:s,limit:r=10}=e;const[c,d]=(0,a.useState)(3),[p,_]=(0,i.ok)(),m=Math.ceil(s/r),u=parseInt(p.get("page"))||1,h=()=>{const e=document.querySelector(`.${l}`),s=window.getComputedStyle(e);return parseInt(s.getPropertyValue("--count"))};(0,a.useEffect)((()=>{d(h());const e=()=>{d(h())};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]),(0,a.useEffect)((()=>{u>m&&m>0&&_(new URLSearchParams({page:m.toString()}))}),[u,m,_]);return(0,n.jsx)("div",{className:l,role:"navigation","aria-label":"Pagination Navigation",children:(()=>{let e=Math.max(1,u-Math.floor(c/2)),s=e+c-1;s>m&&(s=m,e=Math.max(1,m-c+1));const r=[];for(let a=e;a<=s;a++)r.push((0,n.jsx)("button",{onClick:()=>{var e;(e=a)>=1&&e<=m&&_({page:e})},className:`${o} ${u===a?t:""}`,"aria-current":u===a?"page":void 0,"aria-label":`Go to page ${a}`,children:a},a));return r})()})}},5704:(e,s,r)=>{r.d(s,{A:()=>n});r(5043);var a=r(5475);const i="PathInfo_path-info__oV2qx",l="PathInfo_home-link__KCe5g",o="PathInfo_current-page__N-cAI";var t=r(579);const n=e=>{let{currentPage:s}=e;return(0,t.jsxs)("div",{className:i,children:[(0,t.jsx)(a.N_,{to:"/",className:l,children:"Home"}),(0,t.jsx)("span",{className:o,children:s})]})}},8392:(e,s,r)=>{r.d(s,{A:()=>l});const a="SubtitleComponent_subtitle__jqa2f";var i=r(579);const l=function(e){let{className:s,children:r}=e;return(0,i.jsx)("p",{className:`${s} ${a}`,children:r})}},6457:(e,s,r)=>{r.d(s,{A:()=>i});var a=r(579);function i(e){let{src:s,alt:r,className:i}=e;const l=Array.isArray(s),o=l?`${s[0]} 1x, ${s[1]} 2x`:void 0;return(0,a.jsx)("img",{src:l?s[0]:s,srcSet:o,alt:r,className:i})}},2393:(e,s,r)=>{r.d(s,{A:()=>t});const a="MainTitle_mainTitle__Ubri6";var i=r(8139),l=r.n(i),o=r(579);const t=e=>{let{text:s,addStyle:r=""}=e;return(0,o.jsx)("h2",{className:l()(a,r),children:s})}},503:(e,s,r)=>{r.r(s),r.d(s,{default:()=>je});var a=r(5043),i=r(5704),l=r(2393),o=r(8392),t=r(6286);const n="UserPage_userPageWrapper__dACwz",c="UserPage_userPageButton__6oUrM",d="UserPage_userPageMainTitle__ytco-",p="UserPage_userPageSubtitle__NS1eT",_="UserPage_userWrapper__QS86o",m="UserPage_userInfoWrapper__sqRFI",u="UserPage_tabsWrapper__v5dwO";var h=r(6457);const f="UserInfo_profile-head-holder__OqlGj",w="UserInfo_profile-head__qVY9B",x="UserInfo_profile-img-holder__aCT3B",v="UserInfo_user-avatar__WW7aE",j="UserInfo_no-image__EIbyu",g="UserInfo_upload-avatar__o-cpX",N="UserInfo_user-login__1-xBt",y="UserInfo_profile-data__aYB-4",P="UserInfo_profile-data-li__JUmd9",C="UserInfo_profile-data-li-name__+7zv2",b="UserInfo_profile-data-li-value__isiZj";var A=r(5810),U=r(3139),F=r(3003),I=r(8378),R=r(579);const S=e=>{let{user:s,isOwnProfile:r}=e;const a=(0,F.wA)();return(0,R.jsx)("div",{className:f,children:(0,R.jsxs)("div",{className:w,children:[(0,R.jsxs)("div",{className:x,children:[(0,R.jsx)(h.A,{src:s.avatar?s.avatar.startsWith("http")?s.avatar:`https://foodies-api-hrrk.onrender.com/${s.avatar}`:A.A.noImage,alt:"",className:`${v} ${A.A?j:""}`}),r&&(0,R.jsxs)("label",{className:g,children:[(0,R.jsx)("input",{type:"file",name:"avatar",onChange:e=>{const s=e.target.files[0];s&&a((0,I.F4)(s))}}),(0,R.jsx)(U.Ah,{name:"icon-plus"})]})]}),(0,R.jsx)("h3",{className:N,children:s.name}),(0,R.jsxs)("ul",{className:y,children:[(0,R.jsxs)("li",{className:P,children:[(0,R.jsx)("span",{className:C,children:"Email:"}),(0,R.jsx)("span",{className:b,children:s.email})]}),(0,R.jsxs)("li",{className:P,children:[(0,R.jsx)("span",{className:C,children:"Recipes:"}),(0,R.jsx)("span",{className:b,children:s.createRecipeCount})]}),r&&(0,R.jsxs)("li",{className:P,children:[(0,R.jsx)("span",{className:C,children:"Favorites:"}),(0,R.jsx)("span",{className:b,children:s.countFavouriteRecipe})]}),(0,R.jsxs)("li",{className:P,children:[(0,R.jsx)("span",{className:C,children:"Followers:"}),(0,R.jsx)("span",{className:b,children:s.followingUsersCount})]}),r&&(0,R.jsxs)("li",{className:P,children:[(0,R.jsx)("span",{className:C,children:"Following:"}),(0,R.jsx)("span",{className:b,children:s.followersUserCount})]})]})]})})},L="TabsList_tabListWrapper__eoz6t",k="TabsList_tabsList__w4O2H",E="TabsList_tabItem__NrWpo",B="TabsList_activeTab__KlxAO";var T=r(3216);const W=e=>{let{isOwnProfile:s,onTabChange:r}=e;const i=(0,T.Zp)(),[l,o]=(0,a.useState)(s?"my-recipes":"recipes"),t=s?[{id:"my-recipes",label:"My Recipes"},{id:"my-favorites",label:"My Favorites"},{id:"followers",label:"Followers"},{id:"following",label:"Following"}]:[{id:"recipes",label:"Recipes"},{id:"followers",label:"Followers"}];return(0,R.jsx)("div",{className:L,children:(0,R.jsx)("ul",{className:k,children:t.map((e=>(0,R.jsx)("li",{className:`${E} ${e.id===l?B:""}`,onClick:()=>{return s=e.id,o(s),r(s),void i("?page=1");var s},children:e.label},e.id)))})})},$="RecipePreview_recipeCard__mOBjY",O="RecipePreview_recipeImage__6aJA2",D="RecipePreview_recipeDetails__-NxfS",z="RecipePreview_recipeTitle__F2Yzm",M="RecipePreview_recipeDescription__JLUvy",V="RecipePreview_actions__9Uw1i",q="RecipePreview_link__fYUyp",K="RecipePreview_icon__2u+Xj",H="RecipePreview_deleteButton__HFZ5k",Y="RecipePreview_deleteIcon__A1iqC";var J=r(5475),Q=r(9824),Z=r(9621);const G=e=>{let{recipe:s,onDelete:r}=e;const{id:a,title:i,description:l,imageUrl:o,thumb:t}=s;return(0,R.jsxs)("div",{className:$,children:[(0,R.jsx)("img",{src:o||t||"path/to/placeholder_image.jpg",alt:i,className:O}),(0,R.jsxs)("div",{className:D,children:[(0,R.jsx)("h3",{className:z,children:i}),(0,R.jsx)("p",{className:M,children:l}),(0,R.jsxs)("div",{className:V,children:[(0,R.jsx)(J.N_,{to:`/recipe/${a}`,className:q,children:(0,R.jsx)(Q.A,{iconId:"icon-arrow-up-right",customStyle:K,stroke:""})}),(0,R.jsx)("button",{onClick:async()=>{try{await(async e=>{try{await Z.Ay.delete(`/api/recipes/${e}`)}catch(s){throw console.error("Error deleting recipe:",s),s}})(a),r(a)}catch(e){console.error("Error deleting recipe:",e)}},className:H,children:(0,R.jsx)(Q.A,{iconId:"icon-custom-delete",customStyle:Y,stroke:"#BFBEBE"})})]})]})]})},X="ListItem_litsItemWrapper__mxh2x";var ee=r(3264);const se={cardWrapper:"FollowerCard_cardWrapper__lmnn5",photoWrapper:"FollowerCard_photoWrapper__7QfDR",smallProfilePhoto:"FollowerCard_smallProfilePhoto__08cDi",followerData:"FollowerCard_followerData__4Ruva",name:"FollowerCard_name__hmE5E",descr:"FollowerCard_descr__pQCmL",followBtn:"FollowerCard_followBtn__mlvPm",followerCardList:"FollowerCard_followerCardList__JuZOg",iconBtn:"FollowerCard_iconBtn__UlEKa",icon:"FollowerCard_icon__RxkOf",recipesList:"FollowerCard_recipesList__8wocP",recipeCard:"FollowerCard_recipeCard__EIUUA","link-wrapper":"FollowerCard_link-wrapper__CVBVm"},re="SmallRecipePhoto_recipeCard__uk3di",ae="SmallRecipePhoto_recipeImg__4yCKK",ie=r.p+"static/media/recipe_without_img.7261336669f398ac4f83.jpg",le=e=>{let{imgUrl:s,title:r}=e;return(0,R.jsx)("div",{className:re,children:(0,R.jsx)("img",{className:ae,src:"[object FileList]"!==s?s:ie,alt:r})})},oe=(e,s,r)=>{const[i,l]=(0,a.useState)(window.innerWidth>=e?r:s);return(0,a.useEffect)((()=>{const a=()=>{window.innerWidth>=e?l(r):l(s)};return window.addEventListener("resize",a),a(),()=>window.removeEventListener("resize",a)}),[e,r,s]),i},te=e=>{var s;let{data:r,tab:a,handleFollowUser:i,handleUnfollowUser:l}=e;const o=oe(768,!1,3),n=oe(1440,3,4);console.log("data in rfollowersCard",r);const c=()=>"followers"===a?r.isFollowing?"unfollow":"follow":"following"===a?"unfollow":void 0;return(0,R.jsxs)("li",{className:se.cardWrapper,children:[(0,R.jsxs)("div",{className:se.followerData,children:[(0,R.jsx)("img",{src:r.avatarURL||"https://gravatar.com/avatar/000000000000000000000000000000000000000000000000000000?d=mp",className:se.smallProfilePhoto,alt:"User avatar"}),(0,R.jsxs)("div",{children:[(0,R.jsxs)("h5",{className:se.name,children:[" ",r.name]}),(0,R.jsxs)("p",{className:se.descr,children:["Own recipes: ",r.recipeCount]}),(0,R.jsx)(t.A,{disabled:1===r.id,text:c(),variant:"follow_user",classname:se.followBtn,onClick:()=>"follow"===c()?i(r.id):l(r.id)})]})]}),o&&(0,R.jsx)("ul",{className:se.recipesList,children:null===r||void 0===r||null===(s=r.recipes)||void 0===s?void 0:s.map(((e,s)=>s<n?(0,R.jsx)("li",{children:(0,R.jsx)(le,{imgUrl:e.thumb,title:e.title})},e._id):null))}),(0,R.jsx)(J.k2,{to:`/user/${r.id}`,className:se.link_wrapper,children:(0,R.jsx)(ee.A,{iconId:"icon-arrow-up-right",style:se.iconBtn,styleSVG:se.icon})})]})},ne=e=>{let{data:s}=e;const r=(0,F.wA)(),a=e=>{r((0,I.pV)(e))},i=e=>{r((0,I.Qt)(e))};return(0,R.jsx)("ul",{className:se.followerCardList,children:s.map((e=>(0,R.jsx)(te,{data:e,tab:"followers",handleFollowUser:a,handleUnfollowUser:i},e.id)))})};var ce=r(7606),de=r(2524);const pe=e=>e.user,_e=e=>e.user.followingUsers,me=e=>e.user.followers;var ue=r(9031);const he=e=>{var s,r,i,l;let{activeTab:t,userId:n}=e;const c=(0,F.wA)(),d=(0,F.d4)(ce.BS),p=(0,F.d4)(me)||[],_=(0,F.d4)(ce.ie),m=(0,F.d4)(_e)||[],u=(0,T.zy)(),h=(0,a.useCallback)((()=>new URLSearchParams(u.search).get("page")||1),[u.search]),[f,w]=(0,a.useState)(h());return(0,a.useEffect)((()=>{const e=h();w(e)}),[h,u.search]),(0,a.useEffect)((()=>{"my-recipes"===t?c((0,de.HK)({limit:9,page:f})):"followers"===t?c((0,I.ip)({userId:n,limit:9,page:f})):"following"===t?c((0,I.SB)({userId:n,limit:9,page:f})):"my-favorites"===t&&c((0,de.qM)({limit:9,page:f}))}),[c,t,n,f]),(0,R.jsx)("div",{className:X,children:(0,R.jsx)("ul",{children:"my-recipes"===t||"recipes"===t?(null===(s=d.recipes)||void 0===s?void 0:s.length)>0?(0,R.jsxs)(R.Fragment,{children:[d.recipes.map((e=>(0,R.jsx)("li",{children:(0,R.jsx)(G,{recipe:e,onDelete:e=>{c((0,de.HK)({limit:9,page:f}))}})},e.id))),(0,R.jsx)(ue.A,{total:d.total,limit:9})]}):(0,R.jsx)(o.A,{children:"Nothing has been added to your recipes list yet. Please browse our recipes and add your favorites for easy access in the future."}):"my-favorites"===t?(null===(r=_.favoriteRecipes)||void 0===r?void 0:r.length)>0?(0,R.jsxs)(R.Fragment,{children:[_.favoriteRecipes.map((e=>(0,R.jsx)("li",{children:(0,R.jsx)(G,{recipe:e.recipe,onDelete:e=>{c((0,de.HK)({limit:9,page:f}))}})},e.recipeId))),(0,R.jsx)(ue.A,{total:_.total,limit:9})]}):(0,R.jsx)(o.A,{children:"Nothing has been added to your favorite recipes list yet. Please browse our recipes and add your favorites for easy access in the future."}):"followers"===t?(null===(i=p.users)||void 0===i?void 0:i.length)>0?(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(ne,{data:p.users}),(0,R.jsx)(ue.A,{total:p.followersCount,limit:9})]}):(0,R.jsx)(o.A,{children:"There are currently no followers on your account. Please engage our visitors with interesting content and draw their attention to your profile."}):"following"===t?(null===(l=m.users)||void 0===l?void 0:l.length)>0?(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(ne,{data:m.users}),(0,R.jsx)(ue.A,{total:m.followingCount,limit:9})]}):(0,R.jsx)(o.A,{children:"Your account currently has no subscriptions to other users. Learn more about our users and select those whose content interests you."}):null})})};var fe=r(9673),we=r(7723),xe=r(9146),ve=r(2806);const je=()=>{const{id:e}=(0,T.g)(),s=(0,F.wA)(),{user:r,loading:h,error:f}=(0,F.d4)(pe),w=(0,F.d4)(we.l),[x,v]=(0,a.useState)("my-recipes"),[,j]=(0,a.useState)(1),[g,N]=(0,a.useState)(!1),y=w===r.id;(0,a.useEffect)((()=>{s((0,I.im)(e)),s((0,I.SB)(w))}),[e,s,w]),(0,a.useEffect)((()=>{v(y?"my-recipes":"followers")}),[y]);const P=()=>{N(!1)};return h?(0,R.jsx)(xe.A,{}):f?(0,R.jsxs)("div",{children:["\u041f\u043e\u043c\u0438\u043b\u043a\u0430: ",f]}):(0,R.jsxs)("div",{className:n,children:[(0,R.jsx)(i.A,{currentPage:"profile"}),(0,R.jsx)(l.A,{text:"Profile",addStyle:d}),(0,R.jsx)(o.A,{className:p,children:"Reveal your culinary art, share your favorite recipe and create gastronomic masterpieces with us."}),(0,R.jsxs)("div",{className:_,children:[(0,R.jsxs)("div",{className:m,children:[(0,R.jsx)(S,{user:r,isOwnProfile:y}),y?(0,R.jsx)(t.A,{text:"Log out",classname:c,onClick:()=>{N(!0)}}):(0,R.jsx)(t.A,{text:"Follow",classname:c,onClick:()=>{s((0,I.pV)(r.id))}})]}),(0,R.jsxs)("div",{className:u,children:[(0,R.jsx)(W,{isOwnProfile:y,onTabChange:e=>{v(e),j(1)}}),(0,R.jsx)(he,{activeTab:x,userId:e})]})]}),g&&(0,R.jsx)(ve.A,{isOpen:g,onClose:P,children:(0,R.jsx)(fe.A,{setModalLogoutOpen:P})})]})}},7606:(e,s,r)=>{r.d(s,{BS:()=>t,Nd:()=>l,R4:()=>d,TV:()=>i,aA:()=>o,dB:()=>a,ie:()=>n,xH:()=>c,z5:()=>p});const a=e=>e.recipes.selectedRecipe,i=e=>e.recipes.isLoading,l=e=>e.recipes.isError,o=e=>e.recipes.favoriteRecipes,t=e=>e.recipes.recipes,n=e=>e.recipes.myFavorites,c=e=>e.recipes.isLoadingFavorite,d=e=>e.recipes.isErrorFavorite,p=e=>e.recipes.popularRecipes}}]);
//# sourceMappingURL=654.f8524a11.chunk.js.map