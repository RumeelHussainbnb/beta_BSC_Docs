"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[7255],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,y=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(y,i(i({ref:t},p),{},{components:n})):o.createElement(y,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58578:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],s={sidebar_label:"Deploy ERC-20 Token"},l="Deploy ERC-20 Token",c={unversionedId:"bas/develop/BAS-Testnet/tutorials/deploy-erc20-tokens",id:"bas/develop/BAS-Testnet/tutorials/deploy-erc20-tokens",isDocsHomePage:!1,title:"Deploy ERC-20 Token",description:"Deployment of ERC-20 token can be done through Remix IDE locally using truffle. As BAS supports both EVM & Web3JS, it is compatible with Ethereum development toolsets. The Remix IDE is the easiest way to deploy the ERC-20 smart contract into a BAS network.",source:"@site/docs/bas/develop/BAS-Testnet/tutorials/deploy-erc20-tokens.md",sourceDirName:"bas/develop/BAS-Testnet/tutorials",slug:"/bas/develop/BAS-Testnet/tutorials/deploy-erc20-tokens",permalink:"/docs/bas/develop/BAS-Testnet/tutorials/deploy-erc20-tokens",editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/bas/develop/BAS-Testnet/tutorials/deploy-erc20-tokens.md",tags:[],version:"current",frontMatter:{sidebar_label:"Deploy ERC-20 Token"},sidebar:"bscSideBar",previous:{title:"Launch BAS",permalink:"/docs/bas/develop/BAS-Testnet/launch-bas"},next:{title:"Deploy NFT",permalink:"/docs/bas/develop/BAS-Testnet/tutorials/deploy-erc721-tokens"}},p=[],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deploy-erc-20-token"},"Deploy ERC-20 Token"),(0,a.kt)("p",null,"Deployment of ERC-20 token can be done through Remix IDE locally using truffle. As BAS supports both EVM & Web3JS, it is compatible with Ethereum development toolsets. The Remix IDE is the easiest way to deploy the ERC-20 smart contract into a BAS network."),(0,a.kt)("p",null,"To deploy an ERC-20 token using Remix IDE go to the ",(0,a.kt)("a",{parentName:"p",href:"https://remix.ethereum.org/"},"remix page"),".\nIn the deploy section, choose ",(0,a.kt)("inlineCode",{parentName:"p"},"Injected Web3")," and make sure your MetaMask is connected to one of the BAS networks.\nTo get connected to the BAS network, go to one of the BAS devnet's staking pages, for example, ",(0,a.kt)("a",{parentName:"p",href:"https://staking.dev-01.bas.ankr.com/"},"https://staking.dev-01.bas.ankr.com/"),", and it will create a new MetaMask network automatically for you.\nYou can also configure your MetaMask manually."),(0,a.kt)("p",null,"Use this snippet of the ERC-20 smart contract:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'// SPDX-License-Identifier: GPL-3.0\npragma solidity >=0.7.0 <0.9.0;\n\nimport "@openzeppelin/contracts/token/ERC20/ERC20.sol";\n\ncontract MyERC20Token is ERC20 {\n\n    constructor() ERC20("My Test Token", "MTT") {\n        _mint(msg.sender, 1000 ether);\n    }\n}\n')),(0,a.kt)("p",null,"Now you can go to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Solidity Compiler")," section to compile your smart contract and deploy it to the BAS network via the ",(0,a.kt)("inlineCode",{parentName:"p"},"Deploy & Run Transaction")," section."),(0,a.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Make sure you choose the ",(0,a.kt)("inlineCode",{parentName:"p"},"MyERC20Token")," smart contract at the deployment stage."))))}d.isMDXComponent=!0}}]);