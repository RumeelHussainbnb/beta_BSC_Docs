"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[6140],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},19114:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],l={sidebar_label:"Development Tools"},s="Development Tools",c={unversionedId:"bas/develop/Aries-Testnet/development-tools",id:"bas/develop/Aries-Testnet/development-tools",isDocsHomePage:!1,title:"Development Tools",description:"JSON RPC Endpoints",source:"@site/docs/bas/develop/Aries-Testnet/development-tools.md",sourceDirName:"bas/develop/Aries-Testnet",slug:"/bas/develop/Aries-Testnet/development-tools",permalink:"/docs/bas/develop/Aries-Testnet/development-tools",editUrl:"https://github.com/RumeelHussainbnb/beta_BSC_Docs/blob/master/docs/docs/bas/develop/Aries-Testnet/development-tools.md",tags:[],version:"current",frontMatter:{sidebar_label:"Development Tools"},sidebar:"bscSideBar",previous:{title:"Deploy NFT",permalink:"/docs/bas/develop/BAS-Testnet/tutorials/deploy-erc721-tokens"},next:{title:"Use MetaMask with Aries Network",permalink:"/docs/bas/develop/Aries-Testnet/metamask-with-aries-testnet"}},p=[{value:"JSON RPC Endpoints",id:"json-rpc-endpoints",children:[{value:"ChainID",id:"chainid",children:[],level:3},{value:"RPC Endpoints",id:"rpc-endpoints",children:[],level:3},{value:"Rate limit",id:"rate-limit",children:[],level:3},{value:"Starting HTTP JSON-RPC",id:"starting-http-json-rpc",children:[],level:3},{value:"JSON-RPC methods",id:"json-rpc-methods",children:[],level:3}],level:2},{value:"Smart Contracts",id:"smart-contracts",children:[],level:2},{value:"IDE and Libraries",id:"ide-and-libraries",children:[],level:2},{value:"Faucet",id:"faucet",children:[],level:2},{value:"Explorer",id:"explorer",children:[],level:2}],d={toc:p};function u(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"development-tools"},"Development Tools"),(0,a.kt)("h2",{id:"json-rpc-endpoints"},"JSON RPC Endpoints"),(0,a.kt)("h3",{id:"chainid"},"ChainID"),(0,a.kt)("p",null," 0x75 in hex or 117 in decimal"),(0,a.kt)("h3",{id:"rpc-endpoints"},"RPC Endpoints"),(0,a.kt)("p",null," ",(0,a.kt)("a",{parentName:"p",href:"https://bas-aries-public.nodereal.io/"},"https://bas-aries-public.nodereal.io/")),(0,a.kt)("h3",{id:"rate-limit"},"Rate limit"),(0,a.kt)("p",null,"The rate limit of the BAS endpoint on Testnet is 10K/5min."),(0,a.kt)("h3",{id:"starting-http-json-rpc"},"Starting HTTP JSON-RPC"),(0,a.kt)("p",null,"You can start the HTTP JSON-RPC with the --rpc flag"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"## testnet\ngeth attach * https://bas-aries-public.nodereal.io\n")),(0,a.kt)("h3",{id:"json-rpc-methods"},"JSON-RPC methods"),(0,a.kt)("p",null,"Please refer to this wiki page or use Postman: ",(0,a.kt)("a",{parentName:"p",href:"https://documenter.getpostman.com/view/4117254/ethereum-json-rpc/RVu7CT5J?version=latest"},"https://documenter.getpostman.com/view/4117254/ethereum-json-rpc/RVu7CT5J?version=latest")),(0,a.kt)("h2",{id:"smart-contracts"},"Smart Contracts"),(0,a.kt)("p",null,"Smart contracts development with BAS enables you to build your smart contracts for any use, including cryptocurrency exchanges, smart contract-based dApps, Decentralized Finance, and more.\nSmart contracts are programming logic that are executed automatically when a certain condition(s) are met. In BAS, smart contracts can be written in Solidity programming language.\nPlease refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.soliditylang.org/"},"official documentation of Solidity")," for any queries."),(0,a.kt)("h2",{id:"ide-and-libraries"},"IDE and Libraries"),(0,a.kt)("p",null,"Multiple IDEs and libraries can be used for developing and deploying smart contracts."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://remix.ethereum.org/"},"Remix IDE"),": powerful open-source tool that helps you write Solidity contracts straight from the browser. It is written in JavaScript and supports both usages in the browser, but runs locally and in a desktop version. Remix IDE has modules for testing, debugging, deploying smart contracts, and much more.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://www.trufflesuite.com/docs/teams/quickstart"},"Truffle"),": development tool that allows users to compile, test, debug and deploy smart contracts.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://web3js.readthedocs.io/en/v1.2.11/"},"Web3JS"),": collection of libraries that allow you to interact with a local or remote Ethereum node using HTTP, IPC, or WebSocket."))),(0,a.kt)("h2",{id:"faucet"},"Faucet"),(0,a.kt)("p",null,"To get test ARS tokens, developers can use the ",(0,a.kt)("a",{parentName:"p",href:"https://bas-aries-faucet.nodereal.io/"},"faucet"),"."),(0,a.kt)("h2",{id:"explorer"},"Explorer"),(0,a.kt)("p",null,"View blocks and transactions on ",(0,a.kt)("a",{parentName:"p",href:"https://bas-aries-testnet-explorer.nodereal.io/"},"BAS Aries Explorer"),"."))}u.isMDXComponent=!0}}]);