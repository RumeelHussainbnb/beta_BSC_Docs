"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[617],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(n),f=a,m=p["".concat(l,".").concat(f)]||p[f]||u[f]||o;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},51237:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return d},default:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],c={sidebar_label:"Add Account",hide_table_of_contents:!1,sidebar_position:2},l="How does Add Account Work",s={unversionedId:"add-account",id:"add-account",isDocsHomePage:!1,title:"How does Add Account Work",description:"BIP39",source:"@site/docs/add-account.md",sourceDirName:".",slug:"/add-account",permalink:"/docs/add-account",editUrl:"https://github.com/RumeelHussainbnb/beta_BSC_Docs/blob/master/docs/add-account.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Add Account",hide_table_of_contents:!1,sidebar_position:2},sidebar:"bscSideBar",previous:{title:"Manually Install BNB Chain Extension Wallet",permalink:"/docs/manual"},next:{title:"API",permalink:"/docs/wallet_api"}},d=[{value:"BIP39",id:"bip39",children:[],level:2},{value:"BIP32",id:"bip32",children:[],level:2},{value:"Add Account in Extension Wallet",id:"add-account-in-extension-wallet",children:[],level:2}],u={toc:d};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-does-add-account-work"},"How does Add Account Work"),(0,o.kt)("h2",{id:"bip39"},"BIP39"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki"},"Bitcoin Improvement Proposal (BIP) 39")," defines a formula for the generation of a mnemonic sentence (also referred to as mnemonic words, seed phrase, recovery phrase, etc.) the generation of a seed from that mnemonic sentence. The seed pharse is used to produce your private and public keys."),(0,o.kt)("h2",{id:"bip32"},"BIP32"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki"},"BIP 32")," is a specification for creating ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki"},"Hierarchical Deterministic wallets"),". They are wallets that from a root can generate multiple \"child\" private keys in a deterministic way. You only need to remember the \"path\" of the child key.For example hardware wallets use them from a single root you can generate separate keys for Bitcoin (with path m/44'/0'/0'/0) and Ethereum (path m/44'/60'/0'/0)."),(0,o.kt)("h2",{id:"add-account-in-extension-wallet"},"Add Account in Extension Wallet"),(0,o.kt)("p",null,"BNB Chain extension wallet would use a similar way to generate keys as Ethereum, i.e. derive the private key using BIP32/BIP44 with HD prefix as \"44'/60'/\", which is the same as Ethereum's derivation path."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://camo.githubusercontent.com/27efab81cd5ca43ba036a29bc4e2dfdfda88cac69de2880385335d0a4234619a/68747470733a2f2f6c68332e676f6f676c6575736572636f6e74656e742e636f6d2f73506b703861503069334161766e6176506255473459777a6666324649694c724f754b7372636a34706365687a39414c716f7553705f61715f54315354485953324d43414e6145776367687135795076376f4a78414f39476d4d5869666d7a3936514a2d4457496350337063432d786355736d317a3763416f31456e4b5f54707a5f31646b643742",alt:"img"})),(0,o.kt)("p",null,"Whenever you click on \u201c",(0,o.kt)("strong",{parentName:"p"},"Add Account"),"\u201d, your seed is extended at the end by a counter value which makes it possible to automatically derive an unlimited number of new addresses in your extension wallet."))}p.isMDXComponent=!0}}]);