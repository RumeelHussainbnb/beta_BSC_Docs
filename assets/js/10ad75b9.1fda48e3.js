"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[646],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(a),d=n,u=m["".concat(l,".").concat(d)]||m[d]||k[d]||r;return a?o.createElement(u,s(s({ref:t},p),{},{components:a})):o.createElement(u,s({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<r;c++)s[c]=a[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},34685:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var o=a(87462),n=a(63366),r=(a(67294),a(3905)),s=["components"],i={sidebar_label:"Use MetaMask with Aries Network"},l="Using MetaMask Wallet with Aries Test Network",c={unversionedId:"bas/develop/Aries-Testnet/metamask-with-aries-testnet",id:"bas/develop/Aries-Testnet/metamask-with-aries-testnet",isDocsHomePage:!1,title:"Using MetaMask Wallet with Aries Test Network",description:"!!! Tip",source:"@site/docs/bas/develop/Aries-Testnet/metamask-with-aries-testnet.md",sourceDirName:"bas/develop/Aries-Testnet",slug:"/bas/develop/Aries-Testnet/metamask-with-aries-testnet",permalink:"/docs/bas/develop/Aries-Testnet/metamask-with-aries-testnet",editUrl:"https://github.com/RumeelHussainbnb/beta_BSC_Docs/docs/bas/develop/Aries-Testnet/metamask-with-aries-testnet.md",tags:[],version:"current",frontMatter:{sidebar_label:"Use MetaMask with Aries Network"},sidebar:"bscSideBar",previous:{title:"Development Tools",permalink:"/docs/bas/develop/Aries-Testnet/development-tools"},next:{title:"Key Management",permalink:"/docs/bas/develop/Aries-Testnet/key-management"}},p=[{value:"What is MetaMask?",id:"what-is-metamask",children:[],level:2},{value:"Install MetaMask",id:"install-metamask",children:[],level:2},{value:"Create an account in MetaMask for BAS",id:"create-an-account-in-metamask-for-bas",children:[],level:2},{value:"Connect Your MetaMask With BAS",id:"connect-your-metamask-with-bas",children:[{value:"MetaMask Network Configuration for Aries Testnet",id:"metamask-network-configuration-for-aries-testnet",children:[],level:3}],level:2},{value:"Transfer ARS to other address on Aries Network",id:"transfer-ars-to-other-address-on-aries-network",children:[],level:2},{value:"Import BEP20 Tokens to MetaMask Wallet",id:"import-bep20-tokens-to-metamask-wallet",children:[],level:2},{value:"Create Multiple Accounts",id:"create-multiple-accounts",children:[],level:2}],k={toc:p};function m(e){var t=e.components,i=(0,n.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},k,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"using-metamask-wallet-with-aries-test-network"},"Using MetaMask Wallet with Aries Test Network"),(0,r.kt)("p",null,"!!! Tip\nYou may encounter a network configuration issue in recent releases of MetaMask. If so, please make sure you have the recent version installed."),(0,r.kt)("h2",{id:"what-is-metamask"},"What is MetaMask?"),(0,r.kt)("p",null,"MetaMask was created out of the need for creating more secure and usable Ethereum-based websites. In particular, it handles account management and connecting users to the blockchain. It\u2019s supported in Chrome, Brave, and Safari browsers."),(0,r.kt)("h2",{id:"install-metamask"},"Install MetaMask"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),": Install MetaMask on Chrome browser. Nevertheless, the workflow is the same for all browsers.\nNavigate to the Metamask extension in the Chrome Webstore's Extension Category: ",(0,r.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/category/extensionsSearch"},"https://chrome.google.com/webstore/category/extensionsSearch")," "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:a(30361).Z})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: Make sure it\u2019s offered by metamask.io"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"Click on \u201cAdd to Chrome\u201d. "))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:a(5858).Z})),(0,r.kt)("p",null,"That\u2019s it! You have successfully installed the MetaMask extension on Chrome! "),(0,r.kt)("h2",{id:"create-an-account-in-metamask-for-bas"},"Create an account in MetaMask for BAS"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click on the \u201cCreate a wallet\u201d button")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:a(47615).Z})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Create a Password of at least 8 characters")),(0,r.kt)("img",{src:"https://lh6.googleusercontent.com/q2Yq_dtl38CD2V41amALyCSr2IjrLeEYgpEQh1LKrI7iVWjzkWse0FdLPNlCb_qqjR6mI3vfkKxYgHemCBgHLkEPwPErBXb0ioGxC0GGEzGyh_JYz8kL3MukPll-xhgMpjZmDNXp",alt:"img",style:{zoom:"50%"}}),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Click on \u201cCreate\u201d and then write down your backup phrase.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://lh5.googleusercontent.com/hluBiNbCN4-8J31jX_5j2OqoNZZxb1WoApMr8RnxQ68FswgpD5D0WCZLb01nMVxDR57k-7WlDndvHEIgpB9pVHCr6O9KgenSPG6ayZrZ3D2wtZuWfTiu5Pbi_mDM19414i5FUDl4",alt:"img"})),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Select each phrase to make sure it is correct then click \u201cConfirm\u201d.")),(0,r.kt)("img",{src:"https://lh5.googleusercontent.com/rokxHmh0CZCjyIQqrngQm7qfEGRXbBvHoHuiZHvAon4_k0DLirngnQKqzucSJfrGdyVf-42IhwtDhz2C4PLm4dUjWH3rMrOTPqNC0kUYMSQEflF1ltbGwtiAYFQoxvyKfcNFGJCj",alt:"img",style:{zoom:"50%"}}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Congratulations"),"! You have created your MetaMask account!"),(0,r.kt)("h2",{id:"connect-your-metamask-with-bas"},"Connect Your MetaMask With BAS"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to the setting page")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://lh5.googleusercontent.com/NqWPIv1MrMJ-W2wDKjxtdxcdFhDwiqhsZ6G6MY6FQnhxPTCCPfPHBJ59vBl1ddxpbfV11ufETWAolV1s9YjCYHPeJCKW1S-sr8gfjcFt3swXM-p3IgafNBqPZ86DvThK-I9gKbrw",alt:"img"})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Add a new network")),(0,r.kt)("img",{src:"https://3273513804-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FoXY90dh2y66ykYGiiavc%2Fuploads%2FN1UetvVGZzPTugoahHse%2F1-add-network-4.png?alt=media&token=e6bcb4bf-075f-46b6-8718-e035f8ed3baf",alt:"img",style:{zoom:"50%"}}),(0,r.kt)("h3",{id:"metamask-network-configuration-for-aries-testnet"},"MetaMask Network Configuration for Aries Testnet"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"RPC URL"),":  ",(0,r.kt)("a",{parentName:"p",href:"https://bas-aries-public.nodereal.io"},"https://bas-aries-public.nodereal.io"),"\n",(0,r.kt)("strong",{parentName:"p"},"ChainID"),": 0x75, 117 in decimal (if 117 doesn\u2019t work, try 0x75)\n",(0,r.kt)("strong",{parentName:"p"},"Symbol"),": ARS"),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Claim some testnet ARS tokens to your account then click on your address to copy")),(0,r.kt)("img",{src:"https://3273513804-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FoXY90dh2y66ykYGiiavc%2Fuploads%2FxsMhw1jUFHr9aq7AFiPB%2FCOPY.png?alt=media&token=8bfa09e2-ca5d-4492-9169-49ac34b2c240",alt:"img",style:{zoom:"50%"}}),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Go to the faucet page: ",(0,r.kt)("a",{parentName:"li",href:"https://bas-aries-faucet.nodereal.io/"},"https://bas-aries-faucet.nodereal.io/"),", then paste your address in the box and click on \u201cGive me ARS\u201d")),(0,r.kt)("p",null,"!!! Tip: Please note that you can only claim once every minute\nAfter the transfer transaction is sent, you will see an increase in your balance."),(0,r.kt)("img",{src:"https://3273513804-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FoXY90dh2y66ykYGiiavc%2Fuploads%2F7JVjMOJwf8cOcx738JbX%2FGOT-TOKEN.png?alt=media&token=75f1a868-a66f-4dfa-83fa-b27117384c6d",alt:"img",style:{zoom:"50%"}}),(0,r.kt)("h2",{id:"transfer-ars-to-other-address-on-aries-network"},"Transfer ARS to other address on Aries Network"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Log in to your MetaMask ")),(0,r.kt)("img",{src:"https://lh3.googleusercontent.com/7HKZWIzMtfolKrO42OI6Zw3XCUj4CjKo15mXT8n_B3J6CC4Po3nDK59ORv2qvgL_G84I_JOYrnp3oNXcfSO3u0IsXBo4vvB3CpaberJ86ORb9_02campWQOyBr-Y07yYPI68qR85",alt:"img",style:{zoom:"50%"}}),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},'Click on the "Send" button')),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://3273513804-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FoXY90dh2y66ykYGiiavc%2Fuploads%2FDGVcSQKVwHeYoxxPSttI%2F7-transfer.png?alt=media&token=3319ff4a-2132-452f-b3b2-d07e9372d118",alt:"img"})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Copy the receiver\u2019s address in the box")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://3273513804-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FoXY90dh2y66ykYGiiavc%2Fuploads%2FjjPhjcboRrwd7J9HQmNV%2F8-transfer.png?alt=media&token=8844cccc-3ffe-4f2f-ac19-e1043ba4061f",alt:"img"})),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Input the amount")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://3273513804-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FoXY90dh2y66ykYGiiavc%2Fuploads%2FbkIwNUYPZ8IBCjawRpjw%2F9-transfer.png?alt=media&token=9f86ee71-b84f-45bc-a0d0-c372e19ed434",alt:"img"})),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Confirm your transaction, then click Next"),(0,r.kt)("li",{parentName:"ol"},"Click Confirm to send your transaction")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://3273513804-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FoXY90dh2y66ykYGiiavc%2Fuploads%2FYWPFbPfedOT5HrtJq8QB%2F10-transfer-confirm.png?alt=media&token=b2842a5e-e0c7-4004-b946-3387430d895a",alt:"img"})),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"Wait for your transaction to be included in the new block")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://3273513804-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FoXY90dh2y66ykYGiiavc%2Fuploads%2FleD0AkSvjSqruUWKIhbf%2F11-waiting.png?alt=media&token=5759ba49-b9e4-4618-992e-13d944b972f3",alt:"img"})),(0,r.kt)("ol",{start:8},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once your transaction is confirmed, check it on block explorer by clicking Details")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on your account to see \"Details''"))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://3273513804-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FoXY90dh2y66ykYGiiavc%2Fuploads%2FZEE2JA4SWJpvJl5z9oge%2F12-details.png?alt=media&token=fcfe5491-ded4-43cf-8868-4df567cb9c0d",alt:"img"})),(0,r.kt)("h2",{id:"import-bep20-tokens-to-metamask-wallet"},"Import BEP20 Tokens to MetaMask Wallet"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In MetaMask, Click on \u201cImport tokens\u201d")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://3273513804-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FoXY90dh2y66ykYGiiavc%2Fuploads%2FCFNPFrmwkZfl1O72O6Dh%2F13-importToken.png?alt=media&token=4bf6c3eb-ce87-426a-92dd-5a92ea7d5508",alt:"img"})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Copy the token contract address in the box")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://3273513804-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FoXY90dh2y66ykYGiiavc%2Fuploads%2FhqgYWYdmZ83rfUkoeCXy%2F14-inputToken.png?alt=media&token=c0d20f17-1a94-4e03-9317-c01e597254db",alt:"img"})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Click on \u201cAdd Custom Token\u201d")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://3273513804-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FoXY90dh2y66ykYGiiavc%2Fuploads%2FbIMTMzXuwtFmhTqbu1lC%2F15-import.png?alt=media&token=77ac45b9-3861-45a1-aad6-52e9555a417f",alt:"img"})),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},'Click on "Import Tokens"'),(0,r.kt)("li",{parentName:"ol"},"BEP20 token added")),(0,r.kt)("h2",{id:"create-multiple-accounts"},"Create Multiple Accounts"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"To create multiple accounts, click on the Profile icon on MetaMask and then click on Create Account")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://3273513804-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FoXY90dh2y66ykYGiiavc%2Fuploads%2F8WEpWfDtNPxVsUYh7bZM%2F16-create.png?alt=media&token=6fe5b75c-e33e-4efa-8253-909e0d98f815",alt:"img"})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"You can then add an account name and click on Create.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://3273513804-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FoXY90dh2y66ykYGiiavc%2Fuploads%2FggpTmHfXGCm36N72Yg7u%2F18-added.png?alt=media&token=87337b1e-2aee-45c5-849b-6ecce07bb02c",alt:"img"})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Then you can see a new account has been created!")))}m.isMDXComponent=!0},47615:function(e,t,a){t.Z=a.p+"assets/images/create-wallet-for-bas-d945cf8ecc4c5df1a60d42e387708d3f.png"},5858:function(e,t,a){t.Z=a.p+"assets/images/metamask-getstarted-d773e8dc2f6f87a6dd975efcd9c23872.png"},30361:function(e,t,a){t.Z=a.p+"assets/images/metamask-install-0e16601c85a612004a0abef83d74fba2.png"}}]);