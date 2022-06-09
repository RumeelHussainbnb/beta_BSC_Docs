"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[2014],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,b=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(b,a(a({ref:t},u),{},{components:r})):n.createElement(b,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},31740:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],c={sidebar_label:"User Experience",sidebar_position:2},s="Imporvements for better User Experience",l={unversionedId:"dev-outlook/user-exp",id:"dev-outlook/user-exp",isDocsHomePage:!1,title:"Imporvements for better User Experience",description:"User Experience",source:"@site/docs/dev-outlook/user-exp.md",sourceDirName:"dev-outlook",slug:"/dev-outlook/user-exp",permalink:"/docs/dev-outlook/user-exp",editUrl:"https://github.com/RumeelHussainbnb/beta_BSC_Docs/blob/master/docs/dev-outlook/user-exp.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"User Experience",sidebar_position:2},sidebar:"bscSideBar",previous:{title:"Scaling",permalink:"/docs/dev-outlook/scaling"},next:{title:"Sharding and Multi-chain",permalink:"/docs/dev-outlook/sharding-and-multichain"}},u=[{value:"User Experience",id:"user-experience",children:[],level:2},{value:"Fast Finality",id:"fast-finality",children:[],level:2}],p={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"imporvements-for-better-user-experience"},"Imporvements for better User Experience"),(0,i.kt)("h2",{id:"user-experience"},"User Experience"),(0,i.kt)("p",null,"Besides the limitation of the block gas limit cap, the other major factor that can impact BSC capacity is the rate of fork. Fork and re-organization of the blockchain can be very costly for both validators and fullnode."),(0,i.kt)("h2",{id:"fast-finality"},"Fast Finality"),(0,i.kt)("p",null,"Although BSC is designed to produce blocks every 3 seconds, it is recommended to wait until more than half of the validator set has produced new blocks on the block before the block can be confirmed in a probabilistic manner. This will cost at least 3x11 = 33 seconds after the block is visible on the network."),(0,i.kt)("p",null,"As the validator set is well known every 24 hours, BSC can get a faster consensus on the longest chain based on the \u201cattestation\u201d from more than a certain percentage of the validator set considering it is the longest chain."),(0,i.kt)("p",null,"This essentially requires altering the \u201cParlia\u201d consensus mechanism of BSC. A BEP candidate has been proposed by the community at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/binance-chain/BEPs/pull/126"},"[WIP] BEP-97: Introduce Fast Finality Mechanism by KeefeL \xb7 Pull Request #126 \xb7 binance-chain/BEPs \xb7 GitHub")))}d.isMDXComponent=!0}}]);