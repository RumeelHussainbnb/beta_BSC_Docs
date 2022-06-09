"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[9430],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=d(n),h=o,m=s["".concat(c,".").concat(h)]||s[h]||p[h]||l;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var d=2;d<l;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},25233:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return u},default:function(){return s}});var r=n(87462),o=n(63366),l=(n(67294),n(3905)),a=["components"],i={sidebar_label:"Local BNB Smart Chain Network",hide_table_of_contents:!1,sidebar_position:2},c="Local BNB Smart Chain Network",d={unversionedId:"local",id:"local",isDocsHomePage:!1,title:"Local BNB Smart Chain Network",description:"See also//github.com/ethereum/go-ethereum/wiki/Private-network",source:"@site/docs/local.md",sourceDirName:".",slug:"/local",permalink:"/docs/local",editUrl:"https://github.com/RumeelHussainbnb/beta_BSC_Docs/blob/master/docs/docs/local.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Local BNB Smart Chain Network",hide_table_of_contents:!1,sidebar_position:2},sidebar:"bscSideBar",previous:{title:"Download Blockchain Snapshot",permalink:"/docs/validator/snapshot"},next:{title:"Upgrading Geth",permalink:"/docs/validator/upgrade-fullnode"}},u=[{value:"Setting up your BSC Node(s)",id:"setting-up-your-bsc-nodes",children:[{value:"Pre-Requisites",id:"pre-requisites",children:[{value:"Install Geth",id:"install-geth",children:[],level:4},{value:"Create /projects",id:"create-projects",children:[],level:4}],level:3},{value:"Create the genesis block config",id:"create-the-genesis-block-config",children:[],level:3},{value:"Initialize an Ethereum node",id:"initialize-an-ethereum-node",children:[],level:3},{value:"Start the Ethereum node",id:"start-the-ethereum-node",children:[],level:3},{value:"Initialize another Ethereum node",id:"initialize-another-ethereum-node",children:[],level:3},{value:"Start the 2nd Ethereum node",id:"start-the-2nd-ethereum-node",children:[],level:3},{value:"Connect one node to the other",id:"connect-one-node-to-the-other",children:[],level:3}],level:2},{value:"Useful geth commands",id:"useful-geth-commands",children:[{value:"Node info",id:"node-info",children:[],level:3},{value:"Peers",id:"peers",children:[],level:3},{value:"Create an account",id:"create-an-account",children:[],level:3},{value:"Unlock account",id:"unlock-account",children:[],level:3},{value:"Start mining",id:"start-mining",children:[],level:3},{value:"Stop mining",id:"stop-mining",children:[],level:3},{value:"Current block number",id:"current-block-number",children:[],level:3},{value:"Details of current block",id:"details-of-current-block",children:[],level:3},{value:"Which node minded the last block",id:"which-node-minded-the-last-block",children:[],level:3},{value:"Account balance, in ether",id:"account-balance-in-ether",children:[],level:3},{value:"Transfer ether between accounts",id:"transfer-ether-between-accounts",children:[],level:3},{value:"Exit",id:"exit",children:[],level:3}],level:2},{value:"Connect to other nodes on your network",id:"connect-to-other-nodes-on-your-network",children:[],level:2}],p={toc:u};function s(e){var t=e.components,n=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"local-bnb-smart-chain-network"},"Local BNB Smart Chain Network"),(0,l.kt)("p",null,"See also : ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ethereum/go-ethereum/wiki/Private-network"},"https://github.com/ethereum/go-ethereum/wiki/Private-network")),(0,l.kt)("h2",{id:"setting-up-your-bsc-nodes"},"Setting up your BSC Node(s)"),(0,l.kt)("h3",{id:"pre-requisites"},"Pre-Requisites"),(0,l.kt)("h4",{id:"install-geth"},"Install Geth"),(0,l.kt)("p",null,"Review the guide ",(0,l.kt)("a",{parentName:"p",href:"/docs/validator/fullnode"},"here")),(0,l.kt)("h4",{id:"create-projects"},"Create /projects"),(0,l.kt)("p",null,"Create a ",(0,l.kt)("inlineCode",{parentName:"p"},"/projects")," symbolic link\n",(0,l.kt)("em",{parentName:"p"},'(Note:  This step is simply so "/projects" can be used in all other commands, instead you could use full paths, or set an env var)')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ mkdir <my projects folder>\n$ sudo ln -s <my projects folder> /projects\n")),(0,l.kt)("p",null,"###s Create local","_","ethereum","_","blockchain folder"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ mkdir /projects/local_ethereum_blockchain\n")),(0,l.kt)("h3",{id:"create-the-genesis-block-config"},"Create the genesis block config"),(0,l.kt)("p",null,"Create this file :  ",(0,l.kt)("inlineCode",{parentName:"p"},"/projects/local_ethereum_blockchain/genesis.json")),(0,l.kt)("p",null,"With the following contents :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n     "config": {\n       "chainId": 1000,\n       "homesteadBlock": 0,\n       "eip155Block": 0,\n       "eip158Block": 0\n                },\n     "nonce": "0x0000000000000061",\n     "timestamp": "0x0",\n     "parentHash": "0x0000000000000000000000000000000000000000000000000000000000000000",\n     "gasLimit": "0x8000000",\n     "difficulty": "0x100",\n     "mixhash": "0x0000000000000000000000000000000000000000000000000000000000000000",\n     "coinbase": "0x3333333333333333333333333333333333333333",\n     "alloc": {}\n}\n')),(0,l.kt)("p",null,"(",(0,l.kt)("a",{parentName:"p",href:"https://ethereum.stackexchange.com/a/2377/2040"},"info about the genesis file"),")"),(0,l.kt)("h3",{id:"initialize-an-ethereum-node"},"Initialize an Ethereum node"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ geth --datadir /projects/local_ethereum_blockchain/node1 init /projects/local_ethereum_blockchain/genesis.json\n")),(0,l.kt)("h3",{id:"start-the-ethereum-node"},"Start the Ethereum node"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ geth --datadir /projects/local_ethereum_blockchain/node1 --networkid 1000 console\n")),(0,l.kt)("h3",{id:"initialize-another-ethereum-node"},"Initialize another Ethereum node"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ geth --datadir /projects/local_ethereum_blockchain/node-2 init /projects/local_ethereum_blockchain/genesis.json\n")),(0,l.kt)("h3",{id:"start-the-2nd-ethereum-node"},"Start the 2nd Ethereum node"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ geth --datadir /projects/local_ethereum_blockchain/node-2 --port 30304 --nodiscover --networkid 1000 console\n")),(0,l.kt)("h3",{id:"connect-one-node-to-the-other"},"Connect one node to the other"),(0,l.kt)("p",null,"In one geth console :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"> admin.nodeInfo.enode\n")),(0,l.kt)("p",null,"In the other console :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"> admin.addPeer( <the enode value from the first console> )\n")),(0,l.kt)("h2",{id:"useful-geth-commands"},"Useful geth commands"),(0,l.kt)("h3",{id:"node-info"},"Node info"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"> admin.nodeInfo\n")),(0,l.kt)("h3",{id:"peers"},"Peers"),(0,l.kt)("p",null,"Show peers"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"> admin.peers\n")),(0,l.kt)("p",null,"How many peers ?"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"> admin.peers.length\n")),(0,l.kt)("h3",{id:"create-an-account"},"Create an account"),(0,l.kt)("p",null,"You need an account to do be able to do things like mining"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"> personal.newAccount()\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"And make sure you remember/save the password!")),(0,l.kt)("h3",{id:"unlock-account"},"Unlock account"),(0,l.kt)("p",null,"Neccessary before some actions"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"> personal.unlockAccount( eth.accounts[0] )\n")),(0,l.kt)("h3",{id:"start-mining"},"Start mining"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"> miner.start(1)\n")),(0,l.kt)("p",null,"The first block may take a while to mine, allow a few minutes"),(0,l.kt)("h3",{id:"stop-mining"},"Stop mining"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"> miner.stop()\n")),(0,l.kt)("h3",{id:"current-block-number"},"Current block number"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"> eth.blockNumber\n")),(0,l.kt)("h3",{id:"details-of-current-block"},"Details of current block"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"> eth.getBlock( eth.blockNumber )\n")),(0,l.kt)("h3",{id:"which-node-minded-the-last-block"},"Which node minded the last block"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"> eth.getBlock(eth.blockNumber).miner\n")),(0,l.kt)("h3",{id:"account-balance-in-ether"},"Account balance, in ether"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"> web3.fromWei(eth.getBalance(eth.accounts[0]))\n")),(0,l.kt)("h3",{id:"transfer-ether-between-accounts"},"Transfer ether between accounts"),(0,l.kt)("p",null,"First get the account numbers by doing"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"> eth.accounts")),(0,l.kt)("p",null,"Then unlock the account you are sending from"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"> personal.unlockAccount( <from account> )")),(0,l.kt)("p",null,"eg."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"> personal.unlockAccount(eth.accounts[0])")),(0,l.kt)("p",null,"Finally transfer 1 ether"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'> eth.sendTransaction({from: "<from account>", to: "<to account>", value: web3.toWei(1, "ether")})\n')),(0,l.kt)("h3",{id:"exit"},"Exit"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"> exit\n")),(0,l.kt)("p",null,"(This will also stop the node from running if it was started using ",(0,l.kt)("inlineCode",{parentName:"p"},"$ geth console")," (as opposed to ",(0,l.kt)("inlineCode",{parentName:"p"},"$ geth attach"),"))"),(0,l.kt)("h2",{id:"connect-to-other-nodes-on-your-network"},"Connect to other nodes on your network"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Get the IP of the node : ",(0,l.kt)("inlineCode",{parentName:"p"},"$ ifconfig|grep netmask|awk '{print $2}'"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Get the enode of the node : ",(0,l.kt)("inlineCode",{parentName:"p"},"> admin.nodeInfo.enode"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"REPLACE ",(0,l.kt)("inlineCode",{parentName:"p"},"[::]")," in the enode string with the ",(0,l.kt)("inlineCode",{parentName:"p"},"[<ip address>]"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"On your console ",(0,l.kt)("inlineCode",{parentName:"p"},"> admin.addPeer(< the enode string with the ip address in it>)")))))}s.isMDXComponent=!0}}]);