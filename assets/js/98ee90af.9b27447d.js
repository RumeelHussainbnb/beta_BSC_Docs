"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[3259],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(a),u=o,m=p["".concat(l,".").concat(u)]||p[u]||h[u]||r;return a?n.createElement(m,i(i({ref:t},d),{},{components:a})):n.createElement(m,i({ref:t},d))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},10597:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),i=["components"],s={sidebar_label:"Consensus Engine",sidebar_position:2,hide_table_of_contents:!1},l="Consensus Engine of BNB Smart Chain",c={unversionedId:"learn/consensus",id:"learn/consensus",isDocsHomePage:!1,title:"Consensus Engine of BNB Smart Chain",description:"Abstract",source:"@site/docs/learn/consensus.md",sourceDirName:"learn",slug:"/learn/consensus",permalink:"/docs/learn/consensus",editUrl:"https://github.com/RumeelHussainbnb/beta_BSC_Docs/blob/master/docs/learn/consensus.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Consensus Engine",sidebar_position:2,hide_table_of_contents:!1},sidebar:"bscSideBar",previous:{title:"Introduction",permalink:"/docs/learn/intro"},next:{title:"Architecture",permalink:"/docs/learn/cross-chain"}},d=[{value:"Abstract",id:"abstract",children:[],level:2},{value:"Infrastructure Components",id:"infrastructure-components",children:[],level:2},{value:"System Reward Distribution",id:"system-reward-distribution",children:[],level:2},{value:"Staking dApps on BSC",id:"staking-dapps-on-bsc",children:[{value:"BSCValidatorSet contract",id:"bscvalidatorset-contract",children:[],level:3},{value:"System Reward contract",id:"system-reward-contract",children:[],level:3},{value:"Liveness Slash contract",id:"liveness-slash-contract",children:[],level:3}],level:2},{value:"Consensus Protocol",id:"consensus-protocol",children:[{value:"Key features",id:"key-features",children:[{value:"Light client security",id:"light-client-security",children:[],level:4},{value:"System transaction",id:"system-transaction",children:[],level:4},{value:"Enforce backoff",id:"enforce-backoff",children:[],level:4}],level:3},{value:"How to Produce a new block",id:"how-to-produce-a-new-block",children:[{value:"Step 1: Prepare",id:"step-1-prepare",children:[],level:4},{value:"Step2: FinalizeAndAssemble",id:"step2-finalizeandassemble",children:[],level:4},{value:"Step3: Seal",id:"step3-seal",children:[],level:4}],level:3},{value:"How to Validate/Replay a block",id:"how-to-validatereplay-a-block",children:[{value:"Step1: VerifyHeader",id:"step1-verifyheader",children:[],level:4},{value:"Step2: Finalize",id:"step2-finalize",children:[],level:4}],level:3},{value:"Signature",id:"signature",children:[],level:3},{value:"Security and Finality",id:"security-and-finality",children:[],level:3},{value:"Potential Issue",id:"potential-issue",children:[{value:"Extending the ruling of the current validator set via temporary censorship",id:"extending-the-ruling-of-the-current-validator-set-via-temporary-censorship",children:[],level:4}],level:3}],level:2}],h={toc:d};function p(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"consensus-engine-of-bnb-smart-chain"},"Consensus Engine of BNB Smart Chain"),(0,r.kt)("h2",{id:"abstract"},"Abstract"),(0,r.kt)("p",null,"We target to design the consensus engine of BSC(BNB Smart Chain) to achieve the following goals:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Wait for a few blocks to confirm (should be less than Ethereum 1.0), better no fork in most cases."),(0,r.kt)("li",{parentName:"ol"},"Blocking time should be shorter than Ethereum 1.0, i.e. 5 seconds or less."),(0,r.kt)("li",{parentName:"ol"},"No inflation, the block reward is transaction gas fees."),(0,r.kt)("li",{parentName:"ol"},"As much as compatible as Ethereum."),(0,r.kt)("li",{parentName:"ol"},"With staking and governance as powerful as cosmos.")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/ethereum/go-ethereum/wiki/geth"},"Geth")," implements two kinds of consensus engines: ethash(based on PoW) and ",(0,r.kt)("a",{parentName:"p",href:"https://ethereum-magicians.org/t/eip-225-clique-proof-of-authority-consensus-protocol/1853"},"clique"),"(based on PoA). Ethash is not a fit option for BSC because BSC gives up PoW. Clique has a shorter blocking time and is invulnerable to 51% attack while doing as little to the core data structure as possible to preserve existing Ethereum client compatibility. The shortcoming of PoA is centralization, and the lack of meaningful staking and governance capability on-chain.  On the other hand, the Beacon Chain is built on Cosmos which does have a deployed staking and governance mechanism. Thus here we try to propose a consensus engine that:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Beacon Chain does the staking and governance parts for BSC."),(0,r.kt)("li",{parentName:"ul"},"ValidatorSet change, double sign slash of BSC is updated through interchain communication."),(0,r.kt)("li",{parentName:"ul"},"Consensus engine of BSC keeps as simple as clique.")),(0,r.kt)("p",null,"We investigated some popular implementations of PoA consensus and found out that ",(0,r.kt)("a",{parentName:"p",href:"https://blog.matic.network/heimdall-and-bor-matic-validator-and-block-production-layers/"},"Bor")," follows a similar design as above. We will borrow a few parts from Bor and propose a new consensus engine to achieve all these goals."),(0,r.kt)("h2",{id:"infrastructure-components"},"Infrastructure Components"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Beacon Chain"),". It is responsible for holding the staking function to determine validators of BSC through an independent election, and the election workflow are performed via staking procedure."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"BSC validators"),". Validators are responsible for validating transactions and generating blocks, ensuring the network\u2019s security and the consistency of the ledger. In return, they receive rewards from the gas consumption of transactions."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Staking dApps on BSC(also named as system contract)"),". There are several genesis contracts to help implement staking on BSC. Six classification groups of them:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Light client contract"),". It is a watcher of distributed consensus process implemented by contract that only validates the consensus algorithm of Beacon Chain."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cross Chain Contract"),". It is the cross chain communication layer. It will verify the sequence and merkle proof of a cross chain package."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"BSCValidatorSet contract"),". It is a watcher of validators change of BSC on Beacon Chain. It will apply the validator set change for BSC. It also stores rewarded gas fee of blocking for validators, and distribute revenue to validators when receiving cross chain package of validatorSet change."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"System Reward contract"),". The incentive mechanism for relayers to maintain system contracts. They will get rewards from system reward contract."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Liveness Slash Contract"),". The liveness of BSC relies on validator set can produce blocks timely when it is their turn. Validators can miss their turns due to any reason. This instability of the operation will hurt the performance of the network and introduce more non-deterministic into the system. This contract responsible for recording the missed blocking metrics of each validator. Once the metrics are above the predefined threshold, the blocking reward for validator will not be relayed to BC for distribution but shared with other better validators."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Other contracts"),". The BSC may take advantage of powerful governance of Beacon Chain, for example, propose to change a parameter of system contracts.")))),(0,r.kt)("p",null,"Staking and Governance on Beacon Chain is at a higher layer upon consensus. As for Relayer, it is a standalone process and is open about how to implement it. The detail of them will not be included in this doc."),(0,r.kt)("p",null,"This doc only focus on the ",(0,r.kt)("strong",{parentName:"p"},"BSC validators")," and ",(0,r.kt)("strong",{parentName:"p"},"Staking dApps")," on BSC parts which are more closely to consensus engine."),(0,r.kt)("h2",{id:"system-reward-distribution"},"System Reward Distribution"),(0,r.kt)("p",null,"The system reward structure in BSC is highly configurable. We may adjust the parameters through governance."),(0,r.kt)("p",null,"The rewards comes from transaction fees, rewards are distributed based on several(configurable) rules:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Validator that generate the block will receives 15/16 of the gas fee."),(0,r.kt)("li",{parentName:"ol"},"System reward contract receive 1/16 of the gas fee.")),(0,r.kt)("p",null,"If the balance of System reward contract is above 100BNB, will not distribute any BNB to it.\nThe coming section will explain how these contracts distributing reward."),(0,r.kt)("h2",{id:"staking-dapps-on-bsc"},"Staking dApps on BSC"),(0,r.kt)("h3",{id:"bscvalidatorset-contract"},(0,r.kt)("a",{parentName:"h3",href:"https://bscscan.com/address/0x0000000000000000000000000000000000001000"},"BSCValidatorSet contract")),(0,r.kt)("p",null,"It is a watcher of validators change of BSC on Beacon Chain. It implement the following interfaces:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"handleSynPackage(uint8, bytes calldata msgBytes)"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Conditions"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    1. Message sender must CrossChainContract.\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Action"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    1. if the first byte of msgBytes is 0x00, do Actions validators update;\n    2. if the first byte of msgBytes is 0x01, do Actions jail.\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Actions jail"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    1. mark the validator as jailed.\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Actions validators update"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    1. Do distribue the revenue of validators:\n    if the revenue is large than 0.1 BNB, will do cross chain transfer to its account on BC, otherwise will transfer to its address on BSC.\n    2. Update the latest validatorSet.\n    3. Clean the metrics record on slash contract.\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"CurrentValidator() returns ([]address)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"returns the the consensus address of not jailed validators.\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"deposit(address valAddr) external")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Conditions"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    1. The message sender must be the coinbase\n    2. Can only call once in one block.\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Actions"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    1. Increase the revenue of the validator.\n")),(0,r.kt)("h3",{id:"system-reward-contract"},(0,r.kt)("a",{parentName:"h3",href:"https://bscscan.com/address/0x0000000000000000000000000000000000001002"},"System Reward contract")),(0,r.kt)("p",null,"For now, only ",(0,r.kt)("strong",{parentName:"p"},"Cross Chain contract")," is permitted to call system reward contract. It implement the following interfaces:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"claimRewards(address payable to, uint256 amount) external")),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("strong",{parentName:"p"},"Conditions"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"  1. The message sender must in permission list.\n  2. The amount should be no more than 1 BNB\n")),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("strong",{parentName:"p"},"Actions"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"  1. Transfer amount of BNB to specified address\n")))),(0,r.kt)("h3",{id:"liveness-slash-contract"},(0,r.kt)("a",{parentName:"h3",href:"https://bscscan.com/address/0x0000000000000000000000000000000000001001"},"Liveness Slash contract")),(0,r.kt)("p",null,"If a validator failed to produce a block, will record it and finally slash it. It implement the following interfaces:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Slash(validator address) external")),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("strong",{parentName:"p"},"Conditions"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"  1. The message sender must in coinbase.\n  2. can only call once in one block.\n")),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("strong",{parentName:"p"},"Actions"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"  1. increase the missing blocks metrics of the validator by one.\n  2. if the missing blocks metrics is times of 50, will call misdemeanor func of BSCValidatorSet contract to trigger a misdemeanor event and distribute the revenue of the validator to others.\n  3. if the missing blocks metrics is times of 150, will call felony func of BSCValidatorSet contract to trigger a felony event, not only distribute the revenue of the validator to others, but also kick the validator out of validatorset.\n")))),(0,r.kt)("h2",{id:"consensus-protocol"},"Consensus Protocol"),(0,r.kt)("p",null,"The implement of the consensus engine is named as ",(0,r.kt)("strong",{parentName:"p"},"Parlia")," which is similar to ",(0,r.kt)("a",{parentName:"p",href:"https://ethereum-magicians.org/t/eip-225-clique-proof-of-authority-consensus-protocol/1853"},"clique"),". This doc will focus more on the difference and ignore the common details."),(0,r.kt)("p",null,"Before introducing, we would like to clarify some terms:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Epoch block. Consensus engine will update validatorSet from BSCValidatorSet contract periodly.  For now the period is 200 blocks, a block is called epoch block if the height of it is times of 200."),(0,r.kt)("li",{parentName:"ol"},"Snapshot.  Snapshot is an assistant object that help to store the validators and recent signers of blocks.")),(0,r.kt)("h3",{id:"key-features"},"Key features"),(0,r.kt)("h4",{id:"light-client-security"},"Light client security"),(0,r.kt)("p",null,"Validators set changes take place at the (epoch+N/2) blocks. (N is the size of validatorset before epoch block). Considering the security of light client, we delay N/2 block to let validatorSet change take place."),(0,r.kt)("p",null,"Every epoch block, validator will query the validatorset from contract and fill it in the extra_data field of block header. Full node will verify it against the validatorset in contract. A light client will use it as the validatorSet for next epoch blocks, however, it can not verify it against contract, it have to believe the signer of the epoch block. If the signer of the epoch block write a wrong extra_data, the light client may just go to a wrong chain. If we delay N/2 block to let validatorSet change take place, the wrong\nepoch block won\u2019t get another N/2 subsequent blocks that signed by other validators, so that the light client are free of such attack."),(0,r.kt)("h4",{id:"system-transaction"},"System transaction"),(0,r.kt)("p",null,"The consensus engine may invoke system contracts, such transactions are called system transactions. System transactions is signed by the the validator who is producing the block. For the witness node, will generate the system transactions(without signature) according to its intrinsic logic and compare them with the system transactions in the block before applying them."),(0,r.kt)("h4",{id:"enforce-backoff"},"Enforce backoff"),(0,r.kt)("p",null,"In Clique consensus protocol, out-of-turn validators have to wait a randomized amount of time before sealing the block. It is implemented in the client-side node software and works with the assumption that validators would run the canonical version.\nHowever, given that validators would be economically incentivized to seal blocks as soon as possible, it would be possible that the validators would run a modified version of the node software to ignore such a delay. To prevent validator rushing to seal a block, every out-turn validator will get a specified time slot to seal the block. Any block with a earlier blocking time produced by a out-turn validator will be discarded by other witness node."),(0,r.kt)("h3",{id:"how-to-produce-a-new-block"},"How to Produce a new block"),(0,r.kt)("h4",{id:"step-1-prepare"},"Step 1: Prepare"),(0,r.kt)("p",null,"A validator node prepares the block header of next block."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Load snapshot from cache or database,"),(0,r.kt)("li",{parentName:"ul"},"If (height % epoch)==0, should fetch ValidatorSet from ",(0,r.kt)("inlineCode",{parentName:"li"},"BSCValidatorSet")," ",(0,r.kt)("a",{parentName:"li",href:"https://bscscan.com/address/0x0000000000000000000000000000000000001000"},"contract"),"."),(0,r.kt)("li",{parentName:"ul"},"Every epoch block, will store validators set message in ",(0,r.kt)("inlineCode",{parentName:"li"},"extraData")," field of block header to facilitate the implement of light client."),(0,r.kt)("li",{parentName:"ul"},"The coinbase is the address of the validator")),(0,r.kt)("h4",{id:"step2-finalizeandassemble"},"Step2: FinalizeAndAssemble"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If the validator is not the in turn validator, will call liveness slash contract to slash the expected validator and generate a slashing transaction."),(0,r.kt)("li",{parentName:"ul"},"If there is gas-fee in the block, will distribute ",(0,r.kt)("strong",{parentName:"li"},"1/16")," to system reward contract, the rest go to validator contract.")),(0,r.kt)("h4",{id:"step3-seal"},"Step3: Seal"),(0,r.kt)("p",null,"The final step before a validator broadcast the new block."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sign all things in block header and append the signature to extraData."),(0,r.kt)("li",{parentName:"ul"},"If it is out of turn for validators to sign blocks, an honest validator it will wait for a random reasonable time.")),(0,r.kt)("h3",{id:"how-to-validatereplay-a-block"},"How to Validate/Replay a block"),(0,r.kt)("h4",{id:"step1-verifyheader"},"Step1: VerifyHeader"),(0,r.kt)("p",null,"Verify the block header when receiving a new block."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Verify the signature of the coinbase is in ",(0,r.kt)("inlineCode",{parentName:"li"},"extraData")," of the ",(0,r.kt)("inlineCode",{parentName:"li"},"blockheader")),(0,r.kt)("li",{parentName:"ul"},"Compare the block time of the ",(0,r.kt)("inlineCode",{parentName:"li"},"blockHeader")," and the expected block time that the signer suppose to use, will deny a ",(0,r.kt)("inlineCode",{parentName:"li"},"blockerHeader")," that is smaller than expected. It helps to prevent a selfish validator from rushing to seal a block."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"coinbase")," should be the signer and the difficulty should be expected value.")),(0,r.kt)("h4",{id:"step2-finalize"},"Step2: Finalize"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If it is an epoch block, a validator node will fetch validatorSet from BSCValidatorSet and compare it with extra_data."),(0,r.kt)("li",{parentName:"ul"},"If the block is not generate by inturn validatorvalidaror, will call slash contract.\nif there is gas-fee in the block, will distribute 1/16 to system reward contract, the rest go to validator contract."),(0,r.kt)("li",{parentName:"ul"},"The transaction generated by the consensus engine must be the same as the tx in block.")),(0,r.kt)("h3",{id:"signature"},"Signature"),(0,r.kt)("p",null,"The signature of the coinbase is in extraData of the blockheader, the structure of extraData is:\nepoch block. 32 bytes of extraVanity + N*{20 bytes of validator address} + 65 bytes of signature.\nnone epoch block. 32 bytes of extraVanity + 65 bytes of signature.\nThe signed content is the ",(0,r.kt)("inlineCode",{parentName:"p"},"Keccak256")," of RLP encoded of the block header."),(0,r.kt)("h3",{id:"security-and-finality"},"Security and Finality"),(0,r.kt)("p",null,"Given there are more than 1/2","*","N+1 validators are honest, PoA based networks usually work securely and properly. However, there are still cases where certain amount Byzantine validators may still manage to attack the network, e.g. through the \u201cClone Attack\u201d. To secure as much as BC, BSC users are encouraged to wait until receiving blocks sealed by more than 2/3","*","N+1 different validators. In that way, the BSC can be trusted at a similar security level to BC and can tolerate less than 1/3","*","N Byzantine validators."),(0,r.kt)("p",null,"With 21 validators, if the block time is 5 seconds, the 2/3","*","N+1 different validator seals will need a time period of (2/3","*","21+1)","*","5 = 75 seconds. Any critical applications for BSC may have to wait for 2/3","*","N+1 to ensure a relatively secure finality. However, besides such an arrangement, BSC does introduce Slashing logic to penalize Byzantine validators for double signing or instability. This Slashing logic will expose the malicious validators in a very short time and make the ",(0,r.kt)("a",{parentName:"p",href:"https://arxiv.org/pdf/1902.10244.pdf"},"Clone Attack")," very hard or extremely non-economic to execute. With this enhancement, 1/2","*","N+1 or even fewer blocks are enough as confirmation for most transactions."),(0,r.kt)("h3",{id:"potential-issue"},"Potential Issue"),(0,r.kt)("h4",{id:"extending-the-ruling-of-the-current-validator-set-via-temporary-censorship"},"Extending the ruling of the current validator set via temporary censorship"),(0,r.kt)("p",null,"If the transaction that updates the validator is sent to the BSC right on the epoch period, then it is possible for the in-turn validator to censor the transaction and not change the set of validators for that epoch. While a transaction cannot be forever censored without the help of other n/2 validators, by this it can extend the time of the current validator set and gain some rewards. In general, the probability of this scheme can increase by colluding with other validators. It is relatively benign issue that a block may be approximately 5 secs and one epoch being 240 blocks, i.e. 20 mins so the validators could only be extended for another 20 mins."))}p.isMDXComponent=!0}}]);