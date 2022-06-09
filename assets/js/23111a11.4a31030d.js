"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[5691],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return f}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(r),f=i,m=p["".concat(c,".").concat(f)]||p[f]||u[f]||o;return r?n.createElement(m,a(a({ref:t},d),{},{components:r})):n.createElement(m,a({ref:t},d))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},79496:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var n=r(87462),i=r(63366),o=(r(67294),r(3905)),a=["components"],s={sidebar_label:"Bridge Security"},c="Bridge Security",l={unversionedId:"bas/security/bridge-security",id:"bas/security/bridge-security",isDocsHomePage:!1,title:"Bridge Security",description:"cBridge introduces the best-in-class cross-chain token bridging experience for BAS. cBridge for bridging assets from BAS to BSC and vice-versa can be accessed here",source:"@site/docs/bas/security/bridge-security.md",sourceDirName:"bas/security",slug:"/bas/security/bridge-security",permalink:"/docs/bas/security/bridge-security",editUrl:"https://github.com/RumeelHussainbnb/beta_BSC_Docs/docs/bas/security/bridge-security.md",tags:[],version:"current",frontMatter:{sidebar_label:"Bridge Security"},sidebar:"bscSideBar",previous:{title:"On-chain Security",permalink:"/docs/bas/security/on-chain-security"},next:{title:"Development Tools",permalink:"/docs/bas/develop/BAS-Testnet/development-tools"}},d=[],u={toc:d};function p(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bridge-security"},"Bridge Security"),(0,o.kt)("p",null,"cBridge introduces the best-in-class cross-chain token bridging experience for BAS. cBridge for bridging assets from BAS to BSC and vice-versa can be accessed ",(0,o.kt)("a",{parentName:"p",href:"https://test-bas-bridge.celer.network/#/transfer"},"here")," "),(0,o.kt)("p",null,"Time and again several news headlines have resurfaced about the compromise and hacking of different cross-chain bridges resulting in a loss of million of dollars. The development teams at BNB Chain and Celer understand the importance for our community, users, and developers to have a clear understanding of the security models of the Celer Inter-chain Message Framework (Celer IM). "),(0,o.kt)("p",null,"Different from existing interoperability solutions, Celer has two different security models, an ",(0,o.kt)("a",{parentName:"p",href:"https://cbridge-docs.celer.network/introduction/cbridge-security#optimistic-rollup-style-security-model"},"optimistic-rollup")," inspired model and an L1-PoS-blockchain security model. Each of these comes with different delay and security assumptions tradeoffs that developers and users can freely choose from or set. The security model is highly flexible and even for a single application, developers can choose to build a hybrid model based on the \u201cvalue\u201d or \u201csignificance\u201d of every cross-chain message."),(0,o.kt)("p",null,"Celer cBridge, an asset bridge built on top of Celer IM, supports a ",(0,o.kt)("a",{parentName:"p",href:"https://cbridge-docs.celer.network/introduction/cbridge-security#hybrid-model-is-available"},"hybrid model")," so that the various tradeoffs can be dynamically chosen by the connecting chain based on the cross-chain transfer amount, token and source/destination chain. "),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For more details on the security of the Celer cBridge, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://cbridge-docs.celer.network/introduction/cbridge-security"},"Celer's official documentation"),"."))))}p.isMDXComponent=!0}}]);