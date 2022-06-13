"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[2090],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},37713:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],c={sidebar_label:"Deploy NFT"},s="Deploy ERC-721 token",l={unversionedId:"BNBSidechain/develop/BNBSidechainTestnet/tutorials/deploy-erc721-tokens",id:"BNBSidechain/develop/BNBSidechainTestnet/tutorials/deploy-erc721-tokens",isDocsHomePage:!1,title:"Deploy ERC-721 token",description:"Deployment of ERC-20 token can be done through Remix IDE locally using truffle. As BNB Sidechain supports both EVM & Web3JS, it is compatible with Ethereum development toolsets. The Remix IDE is the easiest way to deploy the ERC-20 smart contract into a BNB Sidechain network.",source:"@site/docs/BNBSidechain/develop/BNBSidechainTestnet/tutorials/deploy-erc721-tokens.md",sourceDirName:"BNBSidechain/develop/BNBSidechainTestnet/tutorials",slug:"/BNBSidechain/develop/BNBSidechainTestnet/tutorials/deploy-erc721-tokens",permalink:"/docs/BNBSidechain/develop/BNBSidechainTestnet/tutorials/deploy-erc721-tokens",editUrl:"https://github.com/RumeelHussainbnb/beta_BSC_Docs/blob/master/docs/BNBSidechain/develop/BNBSidechainTestnet/tutorials/deploy-erc721-tokens.md",tags:[],version:"current",frontMatter:{sidebar_label:"Deploy NFT"}},p=[],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deploy-erc-721-token"},"Deploy ERC-721 token"),(0,a.kt)("p",null,"Deployment of ERC-20 token can be done through Remix IDE locally using truffle. As BNB Sidechain supports both EVM & Web3JS, it is compatible with Ethereum development toolsets. The Remix IDE is the easiest way to deploy the ERC-20 smart contract into a BNB Sidechain network."),(0,a.kt)("p",null,"To deploy an ERC-721 token using Remix IDE go to the ",(0,a.kt)("a",{parentName:"p",href:"https://remix.ethereum.org/"},"remix page"),".\nIn the deploy section, choose ",(0,a.kt)("inlineCode",{parentName:"p"},"Injected Web3")," and make sure your MetaMask is connected to one of the BNB Sidechain networks.\nTo get connected to the BNB Sidechain network, go to one of the BNB Sidechain devnet's staking pages, for example, ",(0,a.kt)("a",{parentName:"p",href:"https://staking.dev-01.bas.ankr.com/"},"https://staking.dev-01.bas.ankr.com/"),", and it will create a new MetaMask network automatically for you.\nYou can also configure your MetaMask manually."),(0,a.kt)("p",null,"Use this snippet from the ERC-721 smart contract:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'// SPDX-License-Identifier: GPL-3.0\npragma solidity >=0.7.0 <0.9.0;\n\nimport "@openzeppelin/contracts/token/ERC20/ERC20.sol";\n\ncontract MyERC20Token is ERC20 {\n\n    constructor() ERC20("My Test Token", "MTT") {\n        _mint(msg.sender, 1000 ether);\n    }\n}\n')),(0,a.kt)("p",null,"MetaData URI is a link (usually on ipfs) that returns a JSON object with information about your NFT token."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"For more information on NFT (EIP-721) metadata, visit the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md"},"official EIP page"),"."))))}d.isMDXComponent=!0}}]);