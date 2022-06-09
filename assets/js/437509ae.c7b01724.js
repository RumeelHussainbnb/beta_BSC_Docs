"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[9581],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return p}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=c(n),p=a,m=u["".concat(l,".").concat(p)]||u[p]||d[p]||i;return n?o.createElement(m,r(r({ref:t},h),{},{components:n})):o.createElement(m,r({ref:t},h))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},54923:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return h},default:function(){return u}});var o=n(87462),a=n(63366),i=(n(67294),n(3905)),r=["components"],s={sidebar_label:"Scaling",sidebar_position:2},l="Scaling",c={unversionedId:"dev-outlook/scaling",id:"dev-outlook/scaling",isDocsHomePage:!1,title:"Scaling",description:"BSC Throughput Boost",source:"@site/docs/dev-outlook/scaling.md",sourceDirName:"dev-outlook",slug:"/dev-outlook/scaling",permalink:"/docs/dev-outlook/scaling",editUrl:"https://github.com/RumeelHussainbnb/beta_BSC_Docs/docs/dev-outlook/scaling.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Scaling",sidebar_position:2},sidebar:"bscSideBar",previous:{title:"Overview",permalink:"/docs/dev-outlook-2022"},next:{title:"User Experience",permalink:"/docs/dev-outlook/user-exp"}},h=[{value:"BSC Throughput Boost",id:"bsc-throughput-boost",children:[],level:2},{value:"Erigon Based BSC Client or Another Storage Model",id:"erigon-based-bsc-client-or-another-storage-model",children:[],level:2},{value:"Distributed Node",id:"distributed-node",children:[],level:2},{value:"Ephemeral Client and Hot/Cold Data Segregation",id:"ephemeral-client-and-hotcold-data-segregation",children:[],level:2},{value:"EVM Parallelization",id:"evm-parallelization",children:[],level:2},{value:"EVM JIT Compilation",id:"evm-jit-compilation",children:[],level:2}],d={toc:h};function u(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"scaling"},"Scaling"),(0,i.kt)("h2",{id:"bsc-throughput-boost"},"BSC Throughput Boost"),(0,i.kt)("p",null,"Though many have challenged that BSC chose to scale up the capacity by shorter block time and larger block gas limit. There is strong faith that there is still room to improve the capacity of the current PoSA based BSC."),(0,i.kt)("p",null,"Based on the past research and investigation, storage has been commonly considered as the major bottleneck. The 17TB data of a BSC archive node / 2TB for a full node on one machine is not sustainable. As a result, storage optimization is the main focus as well."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://aws1.discourse-cdn.com/standard11/uploads/binancesmartchain1/original/1X/d177780f6baa8cfe6c6b5761b08b980d51cabcee.jpeg",alt:"storage-stats"})),(0,i.kt)("h2",{id:"erigon-based-bsc-client-or-another-storage-model"},"Erigon Based BSC Client or Another Storage Model"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ledgerwatch/erigon"},"Erigon"),", a.k.a the previous \u201cturbo-geth\u201d, has been striving hard to improve the storage system of Ethereum/Geth in the past 3 years and now blossomed into beta status. Its new storage model with the new database, MPT generation methodology and staged sync has been proven to run much more efficiently than Geth for the large storage. Creating a BSC client based on Erigon will certainly improve the efficiency of the BSC archive node by reducing the storage size and improving the sync time."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/binance-chain/bsc-erigon"},"Ankr is already contributing to the task"),". The full node binary is ready to run while the validator mode is being worked on."),(0,i.kt)("p",null,"Besides the instant benefits, the new storage model of Erigon may also set a better cornerstone for the other storage related optimizations."),(0,i.kt)("p",null,"One shortcoming of Erigon is that it doesn\u2019t support Snapshot Sync yet, which is a must for BSC node runners. The BSC community will work with Erigon to overcome this in 2022."),(0,i.kt)("h2",{id:"distributed-node"},"Distributed Node"),(0,i.kt)("p",null,"For high performance computing, it is almost impossible to only rely on one node nowadays. The principle of BSC is to allow the node runners to use multiple servers with common hardware specs to support the network, instead of one \u201cbare-metal\u201d super machine."),(0,i.kt)("p",null,"Running different functions of a blockchain client on different processes or machines are not new. Erigon proposes to run the RPC function in a standalone process on the same or different machine. The Merge of ETH 2.0 will also decompose the consensus and execution layers onto different client softwares."),(0,i.kt)("p",null,"A typical blockchain client comprises many functionalities, P2P networking, consensus, RPC service, execution layer etc. Even zooming in these parts, e.g. the execution layer, is composed of many steps, such as the computing of transactions, the state persistence and the generation of different MPT(Merkle Patricia Trie) roots. Decoupling the functions onto different processes and machines can take advantage of the better computing and storage capacity. Some community members have started ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/binance-chain/bsc/pull/640"},"some trials")," 1. However, distributing the node also poses great challenges, especially on synchronization between the distributed sub-nodes without losing the blockchain network security, i.e. the full node operators can easily run the suite of processes to keep the network running with the same level of security but much more capacity."),(0,i.kt)("p",null,"A straightforward approach may be to arrange the tasks in a \u201csynchronized, distributed, assembly line\u201d (SDAL), due to the sequential characteristics of the blockchain. Some change may be required on the consensus logic to make this type optimization easier. This is also discussed in other blockchains that break sequencing, execution and storage (settlement) into different components."),(0,i.kt)("h2",{id:"ephemeral-client-and-hotcold-data-segregation"},"Ephemeral Client and Hot/Cold Data Segregation"),(0,i.kt)("p",null,"One foreseeable problem of the current public blockchain is that it stores ALL the data FOREVER. It is very likely that only 20% of the state in the EVM blockchain is still useful, while 80% may not be used much anymore. BSC has more than 121 million unique addresses in Dec. 2021, while daily active addresses are only over 2 million. Many data were created on the blockchain for just one time use and the creators do not bother with calling the SELF DESTRUCT instruction. But the data will be there forever, and accumulated only to break the bones of the archive node."),(0,i.kt)("p",null,"Ideally there should be an \u201cEphemeral Client\u201d, which is a mode between a \u201cfull node\u201d and a \u201clight client\u201d:"),(0,i.kt)("p",null,"Ephemeral Client starts with a much smaller snapshot of the blockchain, which only contains state of the accounts and contracts that are active in the past 2 weeks or 1 months, with only recent block bodies, headers and receipts, with all other data excluded;\nThe excluded accounts and contracts will only be presented as intermediate node of MPT, so that they can still be used to calculate the new MPT;\nEphemeral Client can work in a similar way as a full node, in the sense that it will execute all the transactions and verify all the data. It should load the excluded data during the execution from another full node or the Portal Network, or even pre-load the excluded data based on the transactions in the mempool.\nApparently sometimes the ephemeral clients may run slower than a full node, but it is a trade-off to make it much easier to run, and run faster."),(0,i.kt)("p",null,"Deriving from this concept, it is natural to consider separating the hot data from the cold data, which has been a classic technique used in the computing industry. If the EVM blockchain is considered as a \u201cworld computer\u201d, the memory of the node should be the registers, while the storage can be the RAM (yes, with MPT used in a similar way as ECC in RAM). RAM has never been big enough, so that the data has to be swapped out onto local or/and remote disks. The EVM blockchain needs such \u201clocal or/and remote disks\u201d too."),(0,i.kt)("p",null,"This is not an easy problem to solve:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"1. Data location is not part of the consensus. It may be easy to mark the data as \u201cswap-out\u201d or \u201coffline\u201d and reach the consensus, but the more important issue is to reach the implicit consensus that \u201cmy proposed block has some transactions that swap in data from the offline mode\u201d. The short blocking time may not be enough from other validators to respond.\n2. Some contracts may have a very big storage, which is a great help to swap it out, but very challenging to swap it in as a whole back to \u201conline\u201d.\n")),(0,i.kt)("p",null,"One potential solution may be:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"1. Swap the data out by the unit of account and contract when they have not been changed for a long time, and put this as an transaction to get consensus;\n2. Swap in data by a deterministic set size, which may not be as large as the whole contract data.\n3. The swapped-in data can be passed in as extra calldata on the block, and the other validators can execute the transactions and verify the data as a \u201cstateless client\u201d if they cannot load the data in time.\n4. The transaction senders will pay extra gas to run any transaction that requires swapping in the data.\n")),(0,i.kt)("p",null,"A new data layer may emerge due to the requirement to store the cold data."),(0,i.kt)("h2",{id:"evm-parallelization"},"EVM Parallelization"),(0,i.kt)("p",null,"Running transactions in parallel for Ethereum has been studied for several years. Solana goes with a native design to enable this as much as possible so that it can take advantage of the powerful GPU."),(0,i.kt)("p",null,"Based on the analytics of BSC data, the CPU has not been the No.1 bottleneck but the storage is. Even though the EVM parallelization will take better usage of multiple cores of the modern CPUs, the primary goal is to increase the parallelism of storage operation to maximize the SSD usage (even the SATA ones)."),(0,i.kt)("p",null,"In order to maintain backwards compatibility and not change the account structures as Solana does, the most straightforward method is heuristic based, i.e. try-and-rerun-the-failed. The full nodes can do some preprocessing to categorize the transactions in the blocks and mempool into different concurrent workers before actually running them. A lower level instrument monitor will be planted at the storage level, if the race condition is detected, and relevant transactions will be put back into the main worker to rerun in order to generate the correct state. Block producers may even place some hints for others to run the blocks in the most efficient way via the P2P network, though the hint itself is not part of the block."),(0,i.kt)("p",null,"Besides the parallelization within one block, BSC inherits one limit from Ethereum that the block proposer has to wait until it applies all the previous blocks before it can execute any transactions in its block to propose at its turn. If the previous block proposers send the block late, or the blocks are delayed due to slow network etc, the proposer may not have enough time to execute enough transactions into their blocks and have to propose an empty block or even miss its turn. Tendermint is a good example that solves the above issue. The block proposer on Tendermint network only needs to assemble the block without executing them. How to control the gas used within one block without executing transactions is a difficult topic on the EVM network."),(0,i.kt)("p",null,"How to run transactions in parallel even among different blocks will be very rewarding here, but it will be very difficult as well."),(0,i.kt)("h2",{id:"evm-jit-compilation"},"EVM JIT Compilation"),(0,i.kt)("p",null,"Using JIT compilation in EVM was ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ethereum/evmjit"},"proposed")," and ",(0,i.kt)("a",{parentName:"p",href:"https://ethresear.ch/t/evm-performance/2791"},"discussed")," in the early days of Ethereum. When popular dApps dominate the network, such as OpenSea and Uniswap on Ethereum, and PancakeSwap on BSC, and one GameFi dApp had a few million transactions per day, the idea is fascinating that these applications can be compiled into native instructions and able to run faster. This benefits even the compilation is not done \u201cjust-in-time\u201d but offline."),(0,i.kt)("p",null,"However, this is a very challenging feature because it touches the very low level of EVM and can be quite prone to error and security issues. Here is just a placeholder for the talented developers to conquer in the later stage."))}u.isMDXComponent=!0}}]);