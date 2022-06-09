"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[2042],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=c(a),m=r,u=h["".concat(s,".").concat(m)]||h[m]||p[m]||i;return a?n.createElement(u,o(o({ref:t},d),{},{components:a})):n.createElement(u,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},34132:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return h}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],l={sidebar_label:"Build-in System Contracts",sidebar_position:2,hide_table_of_contents:!1},s="Build-in System Contract",c={unversionedId:"learn/system-contract",id:"learn/system-contract",isDocsHomePage:!1,title:"Build-in System Contract",description:"Disclaimer",source:"@site/docs/learn/system-contract.md",sourceDirName:"learn",slug:"/learn/system-contract",permalink:"/docs/learn/system-contract",editUrl:"https://github.com/RumeelHussainbnb/beta_BSC_Docs/blob/master/docs/docs/learn/system-contract.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Build-in System Contracts",sidebar_position:2,hide_table_of_contents:!1},sidebar:"bscSideBar",previous:{title:"Architecture",permalink:"/docs/learn/cross-chain"},next:{title:"Cross-Chain Transfer Token Transfer",permalink:"/docs/learn/cross-chain-transfer"}},d=[{value:"Disclaimer",id:"disclaimer",children:[],level:3},{value:"On-Chain Light Client",id:"on-chain-light-client",children:[{value:"Precompile Contract",id:"precompile-contract",children:[{value:"Validate Tendermint Header",id:"validate-tendermint-header",children:[],level:4},{value:"Validate Merkle Proof",id:"validate-merkle-proof",children:[],level:4}],level:3},{value:"Solidity Contract",id:"solidity-contract",children:[{value:"Tendermint Light Client Contract",id:"tendermint-light-client-contract",children:[],level:4},{value:"Merkle Proof Verification Library",id:"merkle-proof-verification-library",children:[],level:4}],level:3}],level:2},{value:"Other Build-in System Contract",id:"other-build-in-system-contract",children:[],level:2}],p={toc:d};function h(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"build-in-system-contract"},"Build-in System Contract"),(0,i.kt)("h3",{id:"disclaimer"},"Disclaimer"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"The software and related documentation are under active development, all subject to potential future change without notification and not ready for production use. The code and security audit have not been fully completed and are not ready for any bug bounty. We advise you to be careful and experiment on the network at your own risk. Stay safe out there.")),(0,i.kt)("p",null,"GitHub Implementation link: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/bsc-genesis-contract"},"https://github.com/bnb-chain/bsc-genesis-contract")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Contract Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Contract Address"),(0,i.kt)("th",{parentName:"tr",align:null},"ABI file"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"BSCValidatorSet Contract"),(0,i.kt)("td",{parentName:"tr",align:null},"0x0000000000000000000000000000000000001000"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{target:"_blank",href:a(99438).Z},"bscvalidatorset"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Liveness Slash Contract"),(0,i.kt)("td",{parentName:"tr",align:null},"0x0000000000000000000000000000000000001001"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{target:"_blank",href:a(65630).Z},"slashindicator"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SystemReward Contract"),(0,i.kt)("td",{parentName:"tr",align:null},"0x0000000000000000000000000000000000001002"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{target:"_blank",href:a(25920).Z},"systemreward"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"TendermintLightClient Contract"),(0,i.kt)("td",{parentName:"tr",align:null},"0x0000000000000000000000000000000000001003"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{target:"_blank",href:a(88839).Z},"tendermintlightclient"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"TokenHub Contract"),(0,i.kt)("td",{parentName:"tr",align:null},"0x0000000000000000000000000000000000001004"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{target:"_blank",href:a(42533).Z},"tokenhub"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"RelayerIncentivize Contract"),(0,i.kt)("td",{parentName:"tr",align:null},"0x0000000000000000000000000000000000001005"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{target:"_blank",href:a(22193).Z},"relayerincentivize"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"RelayerHub Contract"),(0,i.kt)("td",{parentName:"tr",align:null},"0x0000000000000000000000000000000000001006"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{target:"_blank",href:a(13179).Z},"relayerhub"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"GovHub Contract"),(0,i.kt)("td",{parentName:"tr",align:null},"0x0000000000000000000000000000000000001007"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{target:"_blank",href:a(91561).Z},"govhub"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"TokenManager Contract"),(0,i.kt)("td",{parentName:"tr",align:null},"0x0000000000000000000000000000000000001008"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{target:"_blank",href:a(66166).Z},"tokenmanager"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CrossChain Contract"),(0,i.kt)("td",{parentName:"tr",align:null},"0x0000000000000000000000000000000000002000"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{target:"_blank",href:a(24307).Z},"crosschain"))))),(0,i.kt)("h2",{id:"on-chain-light-client"},"On-Chain Light Client"),(0,i.kt)("p",null,"The purpose of cross-chain interoperability is to enable one blockchain to function as a light-client of another. Since Beacon Chain is using a classical Byzantine Fault Tolerant consensus algorithm, light-client verification is cheap and easy: all we have to do is check validator signatures on the latest block, and verify a Merkle proof of the state."),(0,i.kt)("p",null,"In Tendermint, validators agree on a block before processing it. This means that the signatures and state root for that block aren't included until the next block. Thus, each block contains a field called LastCommit, which contains the votes responsible for committing the previous block, and a field in the block header called AppHash, which refers to the Merkle root hash of the application after processing the transactions from the previous block. So, if we want to verify the AppHash from height H, we need the signatures from LastCommit at height H+1. (And remember that this AppHash only contains the results from all transactions up to and including block H-1)"),(0,i.kt)("p",null,"Unlike Proof-of-Work, the light-client protocol does not need to download and check all the headers in the blockchain - the client can always jump straight to the latest header available, so long as the validator set has not changed much. If the validator set is changing, the client needs to track these changes, which requires downloading headers for each block in which there is a significant change. Here, we will assume the validator set is constant, and postpone handling validator set changes for another time."),(0,i.kt)("p",null,"Ethereum platform supports stateless precompiled contract implemented with golang and normal contract implemented with solidity. As compared to normal contracts, precompiled contracts are more efficient and costs less gas, but they are stateless. However, on-chain light client must be stateful. So here we will try to a mixed approach: precompiled implemented contract(stateless calculation, such as signature verification) and normal contract (store validator set and trusted appHash)."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img",src:a(22681).Z})),(0,i.kt)("h3",{id:"precompile-contract"},"Precompile Contract"),(0,i.kt)("h4",{id:"validate-tendermint-header"},"Validate Tendermint Header"),(0,i.kt)("p",null,"This contract implements tendermint header verification algorithm. The input parameters contain the trusted consensus state and a new tendermint header. The validation algorithm will verify the new tendermint header against the trusted consensus state. If the new header is valid, a new consensus state will be created and returned to caller. Otherwise, an error will be returned."),(0,i.kt)("h4",{id:"validate-merkle-proof"},"Validate Merkle Proof"),(0,i.kt)("p",null,"This contract implements a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tendermint/tendermint/blob/master/docs/architecture/adr-026-general-merkle-proof.md"},"Tendermint merkle proof verification algorithm"),"."),(0,i.kt)("h3",{id:"solidity-contract"},"Solidity Contract"),(0,i.kt)("h4",{id:"tendermint-light-client-contract"},"Tendermint Light Client Contract"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"ConsensusState: The first consensus state will be written in the constructor. Once a new tendermint header is verified, a new consensus state will be created."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-golang"},"type ConsensusState struct {\n  chainID              string\n  height               int64\n  appHash              []byte\n  curValidatorSetHash  []byte\n  nextValidatorSet     *tmtypes.ValidatorSet\n}\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Tendermint Header: A relayer who want to sync new tendermint headers need to query BC to build this object. Then encode it to byte array and call syncTendermintHeader."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"```golang\ntype Header struct {\n    Header blockHeader\n    Validator[] CurValidatorSet\n    Validator[] NextValidatorSet\n}\n```\n")),(0,i.kt)("p",{parentName:"li"},"This contract implements the following four methods:")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"function ",(0,i.kt)("strong",{parentName:"p"},"syncTendermintHeader"),"(byte[] header, uint64 height)"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"syncTendermintHeader")," gets nearest consensus state by height and call validateTendermintHeader in precompiled contract to verify the tendermint header. If the success, a new consensus state will be saved.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"function ",(0,i.kt)("strong",{parentName:"p"},"getAppHash"),"(uint64 height) returns(bytes32)"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"getAppHash")," provides a method to get the verified appHash at the specified height. Besides, If the header of the specified height have not be verified, then zero value will be returned.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"function ",(0,i.kt)("strong",{parentName:"p"},"isHeaderSynced"),"(uint64 height) returns (bool)"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"isHeaderSynced")," provides a lower cost method to judge if the specified height has been synced.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"function ",(0,i.kt)("strong",{parentName:"p"},"getSubmitter"),"(uint64 height) returns (address)"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"getSubmitter")," provides a method to get the submitter address of the specified header."))),(0,i.kt)("h4",{id:"merkle-proof-verification-library"},"Merkle Proof Verification Library"),(0,i.kt)("p",null,"This library provides an util to verify merkle proof from BC. Contracts which need to verify Merkle proof just need to import this library."),(0,i.kt)("p",null,"function ",(0,i.kt)("strong",{parentName:"p"},"verifyMerkleProof"),"(int64 height, byte[] key, byte[] value, byte[] proof) bool"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"verifyMerkleProof")," reassembles user parameters and calls the above precompiled contract to validate the proof."),(0,i.kt)("h2",{id:"other-build-in-system-contract"},"Other Build-in System Contract"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"TokenHub Contract")),(0,i.kt)("p",{parentName:"li"},"  This contract focuses on cross chain token transfer.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"TokenManager Contract")),(0,i.kt)("p",{parentName:"li"},"  This contract focuses on binding and unbinding tokens on two chains.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"BSCValidatorSet Contract")),(0,i.kt)("p",{parentName:"li"},"  It is a watcher of validators change of BSC on Beacon Chain. It will interact with light client contracts to verify the interchain transaction, and apply the validator set change for BSC. It also stores rewarded gas fee of blocking for validators, and distribute it to validators when receiving cross chain package of validatorSet change.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"System Reward Contract")),(0,i.kt)("p",{parentName:"li"},"  The incentive mechanism for relayers to maintain system contracts. They will get rewards from system reward contract.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Liveness Slash Contract")),(0,i.kt)("p",{parentName:"li"},"  The liveness of BSC relies on validator set can produce blocks timely when it is their turn. Validators can miss their turns due to any reason. This instability of the operation will hurt the performance of the network and introduce more non-deterministic into the system. This contract responsible for recording the missed blocking metrics of each validator. Once the metrics are above the predefined threshold, the blocking reward for validator will not be relayed to BC for distribution but shared with other better validators.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"BscValidatorSet Contract")),(0,i.kt)("p",{parentName:"li"},"  This contract focuses on handling staking change package from BC. It also provides the validatorset data query for BSC consensus engine.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"RelayerHub Contract")),(0,i.kt)("p",{parentName:"li"},"  This contract manages the authority of bsc-relayer. Someone who wants to run a bsc-relayer must call the contract to deposit some BNB to get the authorization.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Governance Contract")),(0,i.kt)("p",{parentName:"li"},"  This contract handles the governance package from BC. The governance package contains the target contract address, parameter name and new parameter value. Once the package is verified, this contract will call the parameter update method of the target contract to update the parameter to new value.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Cross Chain Contract")),(0,i.kt)("p",{parentName:"li"},"  This contract focuses on cross chain packages pretreatment and sending cross chain packages to BC by emit event. The packages pretreatment includes sequence validation and the merkle proof verification. Once they are passed, the package will be routed to application build-in system contract, such as tokenhub or bscvalidator. Besides, if tokenhub or bscvalidator wants to send packages to BC, they need to encode their packages with rlp and call this contract to send them."))))}h.isMDXComponent=!0},99438:function(e,t,a){t.Z=a.p+"assets/files/bscvalidatorset-e93af3ed11dcc8b8f5a0e31cf43e8683.abi"},24307:function(e,t,a){t.Z=a.p+"assets/files/crosschain-6c943df2b1a8e3b8393b22843d377d3a.abi"},91561:function(e,t,a){t.Z=a.p+"assets/files/govhub-ebb0b1dd9adfd7853efb6998525fcfd2.abi"},13179:function(e,t,a){t.Z=a.p+"assets/files/relayerhub-1922b1e0cba6061932ff2d4213266998.abi"},22193:function(e,t,a){t.Z=a.p+"assets/files/relayerincentivize-13feec12cd9c3b44a7bfd4dcfd371a8b.abi"},65630:function(e,t,a){t.Z=a.p+"assets/files/slashindicator-0f5d34f574de68095e3b82cdbbad1e5c.abi"},25920:function(e,t,a){t.Z=a.p+"assets/files/systemreward-f70b7f8c7fd637c0d83ef49226f7ad67.abi"},88839:function(e,t,a){t.Z=a.p+"assets/files/tendermintlightclient-4874bd41584670e92156af58e6308c7d.abi"},42533:function(e,t,a){t.Z=a.p+"assets/files/tokenhub-f4db6c171d894cbbb74fafe6a0c744cc.abi"},66166:function(e,t,a){t.Z=a.p+"assets/files/tokenmanager-479524181e732b33de075eacca6d6820.abi"},22681:function(e,t,a){t.Z=a.p+"assets/images/lightclient-7f313cf3188b6d313659a17c721dd143.png"}}]);