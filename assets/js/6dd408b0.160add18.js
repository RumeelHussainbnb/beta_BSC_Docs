"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[1902],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),h=r,m=u["".concat(s,".").concat(h)]||u[h]||p[h]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},88546:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={},s="Types of Nodes",d={unversionedId:"beaconchain/develop/node/nodetypes",id:"beaconchain/develop/node/nodetypes",isDocsHomePage:!1,title:"Types of Nodes",description:"Full Node Node Roles",source:"@site/docs/beaconchain/develop/node/nodetypes.md",sourceDirName:"beaconchain/develop/node",slug:"/beaconchain/develop/node/nodetypes",permalink:"/docs/beaconchain/develop/node/nodetypes",editUrl:"https://github.com/RumeelHussainbnb/beta_BSC_Docs/docs/beaconchain/develop/node/nodetypes.md",tags:[],version:"current",frontMatter:{},sidebar:"bscSideBar",previous:{title:"Get Extra Data From Your Full Node",permalink:"/docs/beaconchain/develop/node/extra-info"},next:{title:"Upgrade",permalink:"/docs/beaconchain/develop/node/upgrade"}},c=[{value:"Full Node Node Roles",id:"full-node-node-roles",children:[{value:"What is a Validator Node?",id:"what-is-a-validator-node",children:[],level:3},{value:"What is a Witness Node?",id:"what-is-a-witness-node",children:[],level:3},{value:"What is an Accelerated Node?",id:"what-is-an-accelerated-node",children:[],level:3}],level:2}],p={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"types-of-nodes"},"Types of Nodes"),(0,o.kt)("h2",{id:"full-node-node-roles"},"Full Node Node Roles"),(0,o.kt)("p",null,"There are two types of Full Nodes in Beacon Chain  network: validator nodes and witness nodes."),(0,o.kt)("h3",{id:"what-is-a-validator-node"},"What is a Validator Node?"),(0,o.kt)("p",null,'Validators are a group/IT infrastructure that take the responsibility to maintain the Binance\nChain/DEX data and validate all the transactions. They join the consensus procedure and\nvote to produce blocks. The fees are collected and distributed among all validators.\nYou can consider Validator as "miner" in Bitcoin and Ethereum and similar concepts exist in dPoS\nblockchain as EOS or dBFT in NEO. The initial validators are selected from trusted members of the\nBinance community, and will eventually expand to more members as the Binance blockchain and\necosystem matures, this responsibility will be distributed. The decentralized governance procedure\nwill be introduced and executed. More qualified organization/individual can become Validators.'),(0,o.kt)("h3",{id:"what-is-a-witness-node"},"What is a Witness Node?"),(0,o.kt)("p",null,"Witness nodes represent the majority of nodes in a Beacon Chain  deployment. Although they do not join the consensus process\nand produce blocks, they take care of:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The witness consensus process."),(0,o.kt)("li",{parentName:"ul"},"They serve as data replicas and help to propagate the chain state around the network."),(0,o.kt)("li",{parentName:"ul"},"They receive transactions and broadcast them to all other nodes including Validator nodes.")),(0,o.kt)("p",null,"You can see the witness node information from this endpoint: ",(0,o.kt)("a",{parentName:"p",href:"https://dex.binance.org/api/v1/peers"},"https://dex.binance.org/api/v1/peers")),(0,o.kt)("p",null,"For mainnet, there are some witness nodes."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"http://dataseed1.binance.org/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"http://dataseed2.binance.org/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"http://dataseed3.binance.org/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"https://dataseed4.binance.org/"))),(0,o.kt)("p",null,"For testnet, there are some witness nodes."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"https://data-seed-pre-0-s3.binance.org/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"https://data-seed-pre-1-s3.binance.org/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"https://data-seed-pre-2-s3.binance.org/"))),(0,o.kt)("p",null,"To see the existing RPC endpoints provided by witness node, check the list  ",(0,o.kt)("a",{parentName:"p",href:"/docs/beaconchain/develop/api-reference/node-rpc"},"here"),"!"),(0,o.kt)("h3",{id:"what-is-an-accelerated-node"},"What is an Accelerated Node?"),(0,o.kt)("p",null,"While users can submit transactions and most of the queries via normal, self-run full nodes.",(0,o.kt)("br",null),"\nAccelerated Node provides more secure and faster lines to access Beacon Chain ."),(0,o.kt)("p",null,"Accelerated Node is a special infrastructure built around Validator to facilitate accelerated transaction\nrouting and provide richer, faster user interfaces. There are always several Accelerated Nodes running\nat the same time around the world (owned by different organizations) and you are encouraged to choose\none of them to use, or allow your Wallet choose one randomly.",(0,o.kt)("br",null),"\nFor rapid API access, you'd better stay with one Accelerated Node to get better performance."),(0,o.kt)("p",null,"For mainnet, there are more accelerated nodes."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"dex-atlantic.binance.org")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"dex-asiapacific.binance.org")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"dex-european.binance.org"))),(0,o.kt)("p",null,"For testnet, there are 2 accelerated nodes setup as below. API users should try to use them directly."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"testnet-dex-atlantic.binance.org")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"testnet-dex-asiapacific.binance.org"))),(0,o.kt)("p",null,"To see the existing endpoints provided by Accelerated node, check the list ",(0,o.kt)("a",{parentName:"p",href:"/docs/beaconchain/develop/api-reference/dex-api/paths"},"here"),"!"))}u.isMDXComponent=!0}}]);