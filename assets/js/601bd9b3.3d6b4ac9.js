"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[9109],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return u}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=l(t),u=i,m=h["".concat(c,".").concat(u)]||h[u]||p[u]||r;return t?a.createElement(m,o(o({ref:n},d),{},{components:t})):a.createElement(m,o({ref:n},d))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=h;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},31745:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return h}});var a=t(87462),i=t(63366),r=(t(67294),t(3905)),o=["components"],s={},c="The Beacon Chain Blockchain",l={unversionedId:"beaconchain/blockchain",id:"beaconchain/blockchain",isDocsHomePage:!1,title:"The Beacon Chain Blockchain",description:"The purpose of the Beacon Chain blockchain and DEX is to create an alternative marketplace for issuing and exchanging digital assets in a decentralized manner.",source:"@site/docs/beaconchain/blockchain.md",sourceDirName:"beaconchain",slug:"/beaconchain/blockchain",permalink:"/docs/beaconchain/blockchain",editUrl:"https://github.com/RumeelHussainbnb/beta_BSC_Docs/blob/master/docs/beaconchain/blockchain.md",tags:[],version:"current",frontMatter:{}},d=[{value:"Consensus Details",id:"consensus-details",children:[],level:2},{value:"Node Roles",id:"node-roles",children:[{value:"What is a Validator Node?",id:"what-is-a-validator-node",children:[],level:3},{value:"What is a Witness Node?",id:"what-is-a-witness-node",children:[],level:3},{value:"What is an Accelerated Node?",id:"what-is-an-accelerated-node",children:[],level:3}],level:2},{value:"Blocking",id:"blocking",children:[],level:2},{value:"Blockchain State",id:"blockchain-state",children:[],level:2},{value:"Cryptographic Design",id:"cryptographic-design",children:[{value:"Account and Address",id:"account-and-address",children:[{value:"Keys",id:"keys",children:[],level:4},{value:"Address",id:"address",children:[],level:4},{value:"Signature",id:"signature",children:[],level:4}],level:3}],level:2}],p={toc:d};function h(e){var n=e.components,t=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"the-beacon-chain-blockchain"},"The Beacon Chain Blockchain"),(0,r.kt)("p",null,"The purpose of the Beacon Chain blockchain and DEX is to create an alternative marketplace for issuing and exchanging digital assets in a decentralized manner."),(0,r.kt)("h2",{id:"consensus-details"},"Consensus Details"),(0,r.kt)("p",null,'Beacon Chain  is a peer-to-peer distributed system, connecting together multiple clients that reach consensus on their views of the "state of the world". Beacon Chain  uses ',(0,r.kt)("a",{parentName:"p",href:"https://github.com/tendermint/tendermint"},"Tendermint")," BFT consensus and has a dedicated ",(0,r.kt)("inlineCode",{parentName:"p"},"application layer")," that runs upon it. A simplified overview of the application's architecture might look something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"+------------+-----------+\n| RPC API    | Web API   |\n+------------------------+---------+\n| Asset Management | Match Engine  |\n+----------------------------------+\n| Account Management | Governance  |---------\x3e crypto and blockchain governance\n+----------------------------------+\n| State Caching and Persisence     +-+\n+----------------------------------+ |\n| Consensus Protocol               | |\n+----------------------------------+ |-----\x3e revised Tendermint\n| P2P Protocol                     | |\n+----------------------------------+ |\n| Networking    |  Database        +-+\n+----------------------------------+\n\n")),(0,r.kt)("p",null,"For more information, please have a look at the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tendermint/tendermint/blob/master/docs/spec/consensus/consensus.md"},"Tendermint spec"),"."),(0,r.kt)("h2",{id:"node-roles"},"Node Roles"),(0,r.kt)("h3",{id:"what-is-a-validator-node"},"What is a Validator Node?"),(0,r.kt)("p",null,'Validators are a group/IT infrastructure that take the responsibility to maintain the Binance\nChain/DEX data and validate all the transactions. They join the consensus procedure and\nvote to produce blocks. The fees are collected and distributed among all validators.\nYou can consider Validator as "miner" in Bitcoin and Ethereum and similar concepts exist in dPoS\nblockchain as EOS or dBFT in NEO. The initial validators are selected from trusted members of the\nBinance community, and will eventually expand to more members as the Binance blockchain and\necosystem matures, this responsibility will be distributed. The decentralized governance procedure\nwill be introduced and executed. More qualified organization/individual can become Validators.'),(0,r.kt)("h3",{id:"what-is-a-witness-node"},"What is a Witness Node?"),(0,r.kt)("p",null,"Witness nodes represent the majority of nodes in a Beacon Chain  deployment. Although they do not join the consensus process\nand produce blocks, they take care of:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The witness consensus process."),(0,r.kt)("li",{parentName:"ul"},"They serve as data replicas and help to propagate the chain state around the network."),(0,r.kt)("li",{parentName:"ul"},"They receive transactions and broadcast them to all other nodes including Validator nodes.")),(0,r.kt)("h3",{id:"what-is-an-accelerated-node"},"What is an Accelerated Node?"),(0,r.kt)("p",null,"Please check ",(0,r.kt)("a",{parentName:"p",href:"/docs/beaconchain/faq/faq#what-is-the-accelerated-node"},"here"),"."),(0,r.kt)("p",null,"For testnet, there are 2 accelerated nodes setup as below. API users should try to use them directly."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"testnet-dex-atlantic.binance.org")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"testnet-dex-asiapacific.binance.org"))),(0,r.kt)("p",null,"For mainnet, there are more accelerated nodes."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dex-atlantic.binance.org")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dex-asiapacific.binance.org")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dex-european.binance.org"))),(0,r.kt)("h2",{id:"blocking"},"Blocking"),(0,r.kt)("p",null,"Beacon Chain  uses a similar block structure as Tendermint proposes, with a size limit of 1 megabyte.\nIt is expected a block will be produced on a-few-of-seconds level among validators, and can include\nfrom 0 up to several thousands of transactions."),(0,r.kt)("h2",{id:"blockchain-state"},"Blockchain State"),(0,r.kt)("p",null,"Blockchain state stores the below information:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"account and balances"),(0,r.kt)("li",{parentName:"ul"},"fees"),(0,r.kt)("li",{parentName:"ul"},"token information"),(0,r.kt)("li",{parentName:"ul"},"trading pairs"),(0,r.kt)("li",{parentName:"ul"},"tick size and lot size"),(0,r.kt)("li",{parentName:"ul"},"governance information")),(0,r.kt)("p",null,"please note the transactions are not stored as chain state, because they are stored in blocks, while\ntrades are not stored as state either, because they can be reproduced via balances and transactions."),(0,r.kt)("h2",{id:"cryptographic-design"},"Cryptographic Design"),(0,r.kt)("h3",{id:"account-and-address"},"Account and Address"),(0,r.kt)("p",null,"For normal users, all the keys and addresses can be generated via Binance ",(0,r.kt)("a",{parentName:"p",href:"https://www.binance.org/en/create"},"Web Wallet"),"."),(0,r.kt)("p",null,"This default wallet would use a similar way to generate keys as Bitcoin, i.e. use 256 bits entropy to generate a 24-word mnemonic based on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki"},"BIP39"),", and then use the mnemonic and an empty passphrase to generate a seed; finally use the seed to generate a master key, and derive the private key using BIP32/BIP44 with HD prefix as ",(0,r.kt)("inlineCode",{parentName:"p"},"\"44'/714'/\""),", which is reserved at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/satoshilabs/slips/blob/master/slip-0044.md"},"SLIP 44"),"."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"714 comes from Binance's birthday, July 14th. :)")),(0,r.kt)("h4",{id:"keys"},"Keys"),(0,r.kt)("p",null,"Beacon Chain  uses the same elliptic curve cryptography as the current ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/btcsuite/btcd/tree/master/btcec"},"Bitcoin implementation"),", i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"secp256k1"),". Its private key is 32 bytes while public key is 33 bytes."),(0,r.kt)("h4",{id:"address"},"Address"),(0,r.kt)("p",null,"Addresses on Beacon Chain  are 20 bytes and may be expressed as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Address = RIPEMD160(SHA256(compressed public key))\n")),(0,r.kt)("p",null,"Typically, an address is encoded in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki"},"bech32")," format which includes a checksum and human-readable prefix (HRP). However, it doesn't use the ",(0,r.kt)("inlineCode",{parentName:"p"},"SegWit")," address format (because we do not have ",(0,r.kt)("inlineCode",{parentName:"p"},"SegWit")," function anyway, so no ",(0,r.kt)("inlineCode",{parentName:"p"},"witness program version")," etc.)."),(0,r.kt)("p",null,"A Beacon Chain  address is therefore more similar to a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bitcoincashorg/bitcoincash.org/blob/master/spec/cashaddr.md"},"Bitcoin Cash address"),", which does not include a SegWit program script."),(0,r.kt)("p",null,"Address format pseudo-code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Address_Bech32 = HRP + '1' + bech32.encode(convert8BitsTo5Bits(RIPEMD160(SHA256(compressed public key))))\n")),(0,r.kt)("p",null,"For Beacon Chain  address, the prefix is ",(0,r.kt)("inlineCode",{parentName:"p"},"bnb")," for production network, and ",(0,r.kt)("inlineCode",{parentName:"p"},"tbnb")," for testnet."),(0,r.kt)("h4",{id:"signature"},"Signature"),(0,r.kt)("p",null,"Beacon Chain  uses an ECDSA signature on curve secp256k1 against a ",(0,r.kt)("inlineCode",{parentName:"p"},"SHA256")," hash of the byte array of a JSON-encoded canonical representation of the transaction. For more information, please see ",(0,r.kt)("a",{parentName:"p",href:"/docs/beaconchain/encoding#canonical-bytes-for-signing"},"this page"),"."))}h.isMDXComponent=!0}}]);