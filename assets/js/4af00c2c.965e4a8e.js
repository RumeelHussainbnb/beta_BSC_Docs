"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[2248],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return y}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),y=o,h=p["".concat(l,".").concat(y)]||p[y]||u[y]||i;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},72278:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var a=n(87462),o=n(63366),i=(n(67294),n(3905)),r=["components"],s={},l="Different Sync Types",c={unversionedId:"beaconchain/develop/node/synctypes",id:"beaconchain/develop/node/synctypes",isDocsHomePage:!1,title:"Different Sync Types",description:"There are three ways for you to get synced with other peers in blockchain network and these methods can be used together.",source:"@site/docs/beaconchain/develop/node/synctypes.md",sourceDirName:"beaconchain/develop/node",slug:"/beaconchain/develop/node/synctypes",permalink:"/docs/beaconchain/develop/node/synctypes",editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/beaconchain/develop/node/synctypes.md",tags:[],version:"current",frontMatter:{},sidebar:"bscSideBar",previous:{title:"Join Testnet",permalink:"/docs/beaconchain/develop/node/join-testnet"},next:{title:"Get Extra Data From Your Full Node",permalink:"/docs/beaconchain/develop/node/extra-info"}},d=[{value:"Fast Sync",id:"fast-sync",children:[],level:2},{value:"State Sync",id:"state-sync",children:[{value:"Switch From Fast Sync to State Sync",id:"switch-from-fast-sync-to-state-sync",children:[],level:3},{value:"Recover From State Sync Failure",id:"recover-from-state-sync-failure",children:[],level:3},{value:"Skip Blocks in State Sync",id:"skip-blocks-in-state-sync",children:[],level:3}],level:2},{value:"Hot Sync",id:"hot-sync",children:[],level:2}],u={toc:d};function p(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"different-sync-types"},"Different Sync Types"),(0,i.kt)("p",null,"There are three ways for you to get synced with other peers in blockchain network and these methods can be used together."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fast Sync"),(0,i.kt)("li",{parentName:"ul"},"State Sync"),(0,i.kt)("li",{parentName:"ul"},"Hot Sync")),(0,i.kt)("h2",{id:"fast-sync"},"Fast Sync"),(0,i.kt)("p",null,"In fast sync, you need to download all the blocks from your peers and execute all the transactions in every block. The sync speed is about 20 blocks/sec, which is slower than state sync."),(0,i.kt)("p",null,"Configuration is located in ",(0,i.kt)("inlineCode",{parentName:"p"},"$BNCHOME/config/config.toml"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fast_sync")," Must be set to ",(0,i.kt)("inlineCode",{parentName:"li"},"true")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"state_sync_reactor")," Can be set to ",(0,i.kt)("inlineCode",{parentName:"li"},"false")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"true")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"state_sync")," Can be set to ",(0,i.kt)("inlineCode",{parentName:"li"},"false")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"true"))),(0,i.kt)("h2",{id:"state-sync"},"State Sync"),(0,i.kt)("p",null,"The default way to get newly joined Full Node syncing with other Full Node is ",(0,i.kt)("inlineCode",{parentName:"p"},"state sync"),". Once your Full Node is synced to a snapshot, it will switch to ",(0,i.kt)("inlineCode",{parentName:"p"},"fast-sync")," mode to catch up with its peers."),(0,i.kt)("p",null,"State sync can help fullnode in same status with other peers within short time (according to our test, a one month ~800M DB snapshot in Beacon Chain  testnet can be synced in around 45 minutes). As explained in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/BEPs/blob/master/BEP18.md"},"BEP18"),", State sync will get the application state of your full node to be up to date without downloading all of the blocks.The sync speed is faster than fast sync.\nNow you do not need to allocate more memories to your full node for this feature to work."),(0,i.kt)("p",null,"Configuration is located in ",(0,i.kt)("inlineCode",{parentName:"p"},"$BNCHOME/config/config.toml"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"state_sync_reactor")," Must be set to ",(0,i.kt)("inlineCode",{parentName:"li"},"true")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"recv_rate")," Must set to ",(0,i.kt)("inlineCode",{parentName:"li"},"102428800")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ping_interval")," Recommendation is set to ",(0,i.kt)("inlineCode",{parentName:"li"},"10m30s")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pong_timeout")," Recommendation is set to ",(0,i.kt)("inlineCode",{parentName:"li"},"450s")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"state_sync_height")," Recommendation is set to ",(0,i.kt)("inlineCode",{parentName:"li"},"0"),", so it allows to state sync from the peers's latest height.")),(0,i.kt)("p",null,"State sync can help you receive latest blocks/transactions and query latest status of orderbook, account balances etc.. But state sync ",(0,i.kt)("strong",{parentName:"p"},"DOES NOT")," download historical blocks before ",(0,i.kt)("inlineCode",{parentName:"p"},"state sync")," height, if you start your node with state sync and it synced at height 10000, then your local database would only have blocks after height 10000."),(0,i.kt)("h3",{id:"switch-from-fast-sync-to-state-sync"},"Switch From Fast Sync to State Sync"),(0,i.kt)("p",null,"If full node has already started, suggested way is to delete the (after backup) ",(0,i.kt)("inlineCode",{parentName:"p"},"$BNCHOME/data")," directory and ",(0,i.kt)("inlineCode",{parentName:"p"},"$BNCHOME/config/priv_validator_key.json")," before enabling state sync."),(0,i.kt)("p",null,"If you turn on the ",(0,i.kt)("inlineCode",{parentName:"p"},"state_sync_reactor"),", the snapshots of heights will be saved at ",(0,i.kt)("inlineCode",{parentName:"p"},"$HOME/data/snapshot/")," automatically. To save disk space, you can delete the directory or turn off the ",(0,i.kt)("inlineCode",{parentName:"p"},"state_sync_reactor"),"."),(0,i.kt)("h3",{id:"recover-from-state-sync-failure"},"Recover From State Sync Failure"),(0,i.kt)("p",null,"If state sync did not succeed, please repeat deletion of ",(0,i.kt)("inlineCode",{parentName:"p"},"$BNCHOME/data")," directory and ",(0,i.kt)("inlineCode",{parentName:"p"},"$BNCHOME/config/priv_validator_key.json")," before starting full node next time in case of data inconsistency."),(0,i.kt)("h3",{id:"skip-blocks-in-state-sync"},"Skip Blocks in State Sync"),(0,i.kt)("p",null,"Once state sync succeeded, later full node restart would not state sync anymore (in case the local blocks are not continuous).\nBut if you do want state sync again (don't care that there are missing blocks between last stop and latest state sync snapshot) and you want to keep already synced blocks, you can just delete ",(0,i.kt)("inlineCode",{parentName:"p"},"$BNCHOME/data/STATESYNC.LOCK"),"."),(0,i.kt)("p",null,"For example, you start your full node at Jan 1st with state sync at height 10000 and after a while you shut it down at height 22000 on Feb 10th. Now its Mar 1st, latest sync-able block height is 50000, you don't care blocks between 22000 and 50000, you can delete ",(0,i.kt)("inlineCode",{parentName:"p"},"$BNCHOME/data/STATESYNC.LOCK")," before start your node. Then the full node would continue state sync from height 50000."),(0,i.kt)("p",null,"Turning off ",(0,i.kt)("inlineCode",{parentName:"p"},"state_sync_reactor")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"state_sync")," can save your memory after you successfully state synced."),(0,i.kt)("h2",{id:"hot-sync"},"Hot Sync"),(0,i.kt)("p",null,"In Beacon Chain  network, almost every fullnode operator will first enable ",(0,i.kt)("inlineCode",{parentName:"p"},"state-sync")," to get synced with peers. After downloading all the state machine changes, the fullnode will go back to ",(0,i.kt)("inlineCode",{parentName:"p"},"fast-sync")," mode and eventually in ",(0,i.kt)("inlineCode",{parentName:"p"},"consensus")," mode. In fast-sync mode, the fullnode will have high delay because it needs to be aware of peers\u2019 heights. It downloads all the blocks in parallel and verifying their commits. On the other hand, when a fullnode is under ",(0,i.kt)("inlineCode",{parentName:"p"},"consensus")," state, it will consume a lot of bandwidth and CPU resources because it receives a lot of redundant messages for consensus engine and writes more WAL. To increase the efficiency for fullnodes, the ",(0,i.kt)("inlineCode",{parentName:"p"},"hot-sync")," protocol is introduced. A fullnode under ",(0,i.kt)("inlineCode",{parentName:"p"},"hot-sync")," protocol will pull the blocks from its peers and it will subscribe these blocks in advance. It will skip the message for prevotes and only subscribe to maj23 precommit and block proposal messages. At the same time, it will put its peers in different buckets and subscribe to peers in active buckets. ",(0,i.kt)("inlineCode",{parentName:"p"},"Hot-Sync")," can help fullnodes gossip blocks in low latency, while cost less network, memory, cpu and disk resources than Tendermint consensus protocol. Even cheap hardware can easily run a fullnode, and a fullnode can connect with more peers than before by saving network and CPU resources."),(0,i.kt)("p",null,"The state transition of a hot sync reactor can be of three part:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"                              Hot --\x3e Consensus\n                                 ^    ^\n                                 |   /\n                                 |  /\n                                Mute\n")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Mute"),": will only answer subscribe requests from others, will not sync from others or from consensus reactor. The Hot Sync reactor stays in ",(0,i.kt)("inlineCode",{parentName:"li"},"Mute")," when it is fast syncing."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Hot"),": handle subscribe requests from other peers as a publisher, also subscribe block messages from other peers as a subscriber. A non-validators will stay in ",(0,i.kt)("inlineCode",{parentName:"li"},"Hot")," when the peer have catch up after fast syncing."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Consensus"),": handle subscribes requests from other peers as a publisher, but get block/commit message from consensus reactor. A sentry node should stay in ",(0,i.kt)("inlineCode",{parentName:"li"},"Consensus"),". Or a non-validator should switch from ",(0,i.kt)("inlineCode",{parentName:"li"},"Hot")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"Consensus")," when it become a validator.")),(0,i.kt)("p",null,"Configuration is located in ",(0,i.kt)("inlineCode",{parentName:"p"},"$BNCHOME/config/config.toml"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hot_sync_reactor")," Must be set to ",(0,i.kt)("inlineCode",{parentName:"li"},"true")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hot_sync")," Can be set to ",(0,i.kt)("inlineCode",{parentName:"li"},"false")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"true")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hot_sync_timeout")," is the max wait time for subscribe a block. It only takes effect when hot_sync is true")))}p.isMDXComponent=!0}}]);