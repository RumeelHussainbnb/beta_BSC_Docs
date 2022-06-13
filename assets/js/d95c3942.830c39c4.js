"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[3234],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),l=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(n),h=r,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||a;return n?i.createElement(m,o(o({ref:t},d),{},{components:n})):i.createElement(m,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},55633:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var i=n(87462),r=n(63366),a=(n(67294),n(3905)),o=["components"],c={sidebar_label:"Architecture",sidebar_position:2,hide_table_of_contents:!1},s="BNB Sidechain Architecture",l={unversionedId:"BNBSidechain/architecture/overview",id:"BNBSidechain/architecture/overview",isDocsHomePage:!1,title:"BNB Sidechain Architecture",description:"BNB Sidechain is a modular framework for creating BSC-compatible sidechains. It defines requirements for integration with the BSC ecosystem and brings development-ready EVM-compatible features like staking, RPC-API, and smart contracts. Since BSC doesn\u2019t rely on the BNB Sidechain security model, there is no default embedded production-ready bridge solution between the BSC and BNB Sidechain networks. Instead, BNB Sidechain can provide protocols and standards for integrating third-party bridges like Multichain or Celer Network cBridge.",source:"@site/docs/BNBSidechain/architecture/overview.md",sourceDirName:"BNBSidechain/architecture",slug:"/BNBSidechain/architecture/overview",permalink:"/docs/BNBSidechain/architecture/overview",editUrl:"https://github.com/RumeelHussainbnb/beta_BSC_Docs/blob/master/docs/BNBSidechain/architecture/overview.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Architecture",sidebar_position:2,hide_table_of_contents:!1},sidebar:"bscSideBar",previous:{title:"When to Choose BNB Sidechain",permalink:"/docs/BNBSidechain/overview/whentochooseBAS"},next:{title:"Blockchain and EVM Security",permalink:"/docs/BNBSidechain/security/blockchain-and-evm-security"}},d=[{value:"BNB Sidechain structure &amp; integration",id:"bnb-sidechain-structure--integration",children:[],level:2},{value:"Modules",id:"modules",children:[],level:2},{value:"Repositories",id:"repositories",children:[],level:2}],u={toc:d};function p(e){var t=e.components,c=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},u,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bnb-sidechain-architecture"},"BNB Sidechain Architecture"),(0,a.kt)("p",null,"BNB Sidechain is a modular framework for creating BSC-compatible sidechains. It defines requirements for integration with the BSC ecosystem and brings development-ready EVM-compatible features like staking, RPC-API, and smart contracts. Since BSC doesn\u2019t rely on the BNB Sidechain security model, there is no default embedded production-ready bridge solution between the BSC and BNB Sidechain networks. Instead, BNB Sidechain can provide protocols and standards for integrating third-party bridges like Multichain or Celer Network cBridge."),(0,a.kt)("h2",{id:"bnb-sidechain-structure--integration"},"BNB Sidechain structure & integration"),(0,a.kt)("p",null,"BNB Sidechain specifies the primary structure and configuration of the blockchain, using special templates. A ",(0,a.kt)("strong",{parentName:"p"},"template")," is a ready-made blockchain solution that is ",(0,a.kt)("strong",{parentName:"p"},"already integrated into the BSC infrastructure"),". With this integration, developers automatically get access to products like a ready-made staking system, block explorer, SDK, API gateways, interfaces for governance, etc. "),(0,a.kt)("p",null,"After applying templates, BNB Sidechain can be customized using programmable and configurable ",(0,a.kt)("strong",{parentName:"p"},"modules"),"."),(0,a.kt)("p",null,"\xa0",(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:n(79267).Z}))),(0,a.kt)("h2",{id:"modules"},"Modules"),(0,a.kt)("p",null,"The main goal of BNB Sidechain is to build such a multi-modular blockchain architecture that it is flexible, convenient, and easy to use."),(0,a.kt)("p",null,"As the current implementation of BNB Sidechain is built on BSC, all existing modules are built into the system smart contracts and into the EVM machine. In the future, a system of modules will be created to allow you to develop a universal smart contract and a bus for interacting between modules and other parts. This all will make it possible to use such modules in any blockchain solution."),(0,a.kt)("p",null,"BNB Sidechain brings with it programmable and configurable modules that can be used or modified by developers to reach their business goals, for example:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Networking \u2014 for p2p communication between different BNB Sidechain nodes."),(0,a.kt)("li",{parentName:"ul"},"Blockchain & EVM \u2014 for block producing and EVM transaction execution, of course, each BNB Sidechain can define their own runtime execution environment based, for example, on WebAssembly in future."),(0,a.kt)("li",{parentName:"ul"},"Web3 API \u2014 for BNB Sidechainic compatibility with Web3 ecosystem including MetaMask and other applications."),(0,a.kt)("li",{parentName:"ul"},"Transaction Pool \u2014 for managing internal BNB Sidechain policies for transaction filtering and for charging fees for the system operational."),(0,a.kt)("li",{parentName:"ul"},"PoSA Consensus \u2014 for users to be able to stake to the authorized validators in the BNB Sidechain network and guarantee the safeness of actions applied on the chain."),(0,a.kt)("li",{parentName:"ul"},"Storage & State \u2014 for persisting local data.")),(0,a.kt)("p",null,"Internally, BNB Sidechain implements the following modules: Parlia consensus engine, staking pools, governance, dynamic runtime upgrades, reward management, manageable blockchain params, EVM hooks, and deployment proxy."),(0,a.kt)("p",null,"This modular architecture allows to re-use or enable/disable different modules. All modules are runtime-upgradable by on-chain governance."),(0,a.kt)("h2",{id:"repositories"},"Repositories"),(0,a.kt)("p",null,"Here is the list repositories provided by Ankr for development on BNB Sidechain:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Ankr-network/bas-genesis-config"},"BNB Sidechain-genesis-config")," \u2014 genesis smart contracts and scripts for building the genesis config."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Ankr-network/bas-template-bsc"},"BNB Sidechain-template-bsc")," \u2014 BNB Sidechain-compatible BSC-BNB Sidechained template."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Ankr-network/bas-javascript-monorepo"},"BNB Sidechain-javascript-monorepo")," \u2014 mono-repository with all frontend-related packages and SDKs."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Ankr-network/bas-devnet-setup"},"BNB Sidechain-devnet-setup")," \u2014 scripts for running BNB Sidechain devnet.")))}p.isMDXComponent=!0},79267:function(e,t,n){t.Z=n.p+"assets/images/bas-architecture1-c44b99cbe46933bdd693361dfa5a21f7.png"}}]);