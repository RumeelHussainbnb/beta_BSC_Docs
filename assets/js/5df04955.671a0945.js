"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[4330],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},74838:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],c={},l="Introduction",p={unversionedId:"beaconchain/develop/api-reference/dex-api/bridge-widget",id:"beaconchain/develop/api-reference/dex-api/bridge-widget",isDocsHomePage:!1,title:"Introduction",description:"Currently, users can't perform any actions with Binance Bridge unless their wallets are connected. This widget is meant to be used client-side to improve the flow of connecting wallets.",source:"@site/docs/beaconchain/develop/api-reference/dex-api/bridge-widget.md",sourceDirName:"beaconchain/develop/api-reference/dex-api",slug:"/beaconchain/develop/api-reference/dex-api/bridge-widget",permalink:"/docs/beaconchain/develop/api-reference/dex-api/bridge-widget",editUrl:"https://github.com/RumeelHussainbnb/beta_BSC_Docs/blob/master/docs/beaconchain/develop/api-reference/dex-api/bridge-widget.md",tags:[],version:"current",frontMatter:{}},u=[{value:"Connect",id:"connect",children:[],level:2}],s={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Currently, users can't perform any actions with Binance Bridge unless their wallets are connected. This widget is meant to be used client-side to improve the flow of connecting wallets."),(0,o.kt)("h2",{id:"connect"},"Connect"),(0,o.kt)("p",null,"You should see a connection request from Binance Bridge. Click on the Connect button to accept it."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/BUHkPydTlqrvXGrcc0uTmf_JItIBC0EKEjpOjZJQjhevnuDDLff-Dv37TTBG-r1vo4Icwth-p3um5FUIkElbuOmDj7hsk7ypEJkn9yx_HBvLMaTjtlN909R_VEjXK74TTMZ7UdtZ",alt:"img"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Base URL")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.binance.org/en/bridge?wallet=$wallet_name"},"https://www.binance.org/en/bridge?wallet=$wallet_name")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Supported wallet name in desktop browser: metamask, binanceWallet.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Supported wallet name in mobile app browser: metamask"))),(0,o.kt)("p",null,"Example request"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://www.binance.org/en/bridge?wallet=metamask\n")),(0,o.kt)("p",null,"This URL support both MathWallet and MetaMask. Open the link in the wallet browser."),(0,o.kt)("p",null,"Note: please make sure the wallet is connected to Binance Smart Chain mainnet."))}d.isMDXComponent=!0}}]);