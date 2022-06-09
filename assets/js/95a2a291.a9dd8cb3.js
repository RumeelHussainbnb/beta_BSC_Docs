"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[7479],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return u}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=s(t),u=i,m=h["".concat(c,".").concat(u)]||h[u]||p[u]||r;return t?a.createElement(m,o(o({ref:n},d),{},{components:t})):a.createElement(m,o({ref:n},d))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=h;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},64227:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return d},default:function(){return h}});var a=t(87462),i=t(63366),r=(t(67294),t(3905)),o=["components"],l={},c="Run a Light Client to Join Beacon Chain",s={unversionedId:"beaconchain/light-client",id:"beaconchain/light-client",isDocsHomePage:!1,title:"Run a Light Client to Join Beacon Chain",description:"Light client is a program that connects to a full node to help users access and interact with Beacon Chain",source:"@site/docs/beaconchain/light-client.md",sourceDirName:"beaconchain",slug:"/beaconchain/light-client",permalink:"/docs/beaconchain/light-client",editUrl:"https://github.com/RumeelHussainbnb/beta_BSC_Docs/blob/master/docs/docs/beaconchain/light-client.md",tags:[],version:"current",frontMatter:{},sidebar:"bscSideBar",previous:{title:"Command Line Interface (CLI)",permalink:"/docs/beaconchain/develop/api-reference/cli"},next:{title:"API Server",permalink:"/docs/beaconchain/develop/api-reference/api-server"}},d=[{value:"Light Client Versus Full Node",id:"light-client-versus-full-node",children:[],level:2},{value:"Platforms and System Requirement",id:"platforms-and-system-requirement",children:[{value:"Platforms",id:"platforms",children:[],level:3},{value:"Requirements",id:"requirements",children:[],level:3}],level:2},{value:"Run a light client node",id:"run-a-light-client-node",children:[{value:"Example for Mainnet:",id:"example-for-mainnet",children:[],level:3},{value:"Example for Testnet:",id:"example-for-testnet",children:[],level:3}],level:2},{value:"Working with the light client",id:"working-with-the-light-client",children:[],level:2}],p={toc:d};function h(e){var n=e.components,t=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"run-a-light-client-to-join-beacon-chain"},"Run a Light Client to Join Beacon Chain"),(0,r.kt)("p",null,"Light client is a program that connects to a full node to help users access and interact with Beacon Chain\nin a secure and decentralized manner without having to sync the full blockchain."),(0,r.kt)("h2",{id:"light-client-versus-full-node"},"Light Client Versus Full Node"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Light client does not store blocks or states,this way it needs less disk space (50 megabytes will be enough)."),(0,r.kt)("li",{parentName:"ul"},"Light client does not join p2p network and it does not produce any network cost when it is idle. The network\noverhead depends on how many requests the light client handles concurrently."),(0,r.kt)("li",{parentName:"ul"},"Light client does not replay state of the chain so that there is not CPU cost when idle. The CPU cost also\ndepends on how many requests the light client handles concurrently."),(0,r.kt)("li",{parentName:"ul"},"Light client is faster than a full node even if it lagged behind the core network for a few months. It only needs a few seconds\nto catch up with core network.")),(0,r.kt)("h2",{id:"platforms-and-system-requirement"},"Platforms and System Requirement"),(0,r.kt)("h3",{id:"platforms"},"Platforms"),(0,r.kt)("p",null,"We support running light client node on ",(0,r.kt)("inlineCode",{parentName:"p"},"Mac OS X"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Windows")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Linux"),".",(0,r.kt)("br",null),"\nThe light client will soon be open sourced, afterwards you can cross compile light client binary and run it on other platforms."),(0,r.kt)("h3",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"50 megabytes of free disk space."),(0,r.kt)("li",{parentName:"ul"},"2 CPU cores, 50 megabytes of memory (RAM).")),(0,r.kt)("h2",{id:"run-a-light-client-node"},"Run a light client node"),(0,r.kt)("p",null,"Download:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/bnb-chain/node-binary.git\n")),(0,r.kt)("p",null,"Go to directory according to the network you want to join in.",(0,r.kt)("br",null),"\nReplace the ",(0,r.kt)("inlineCode",{parentName:"p"},"network")," variable with ",(0,r.kt)("inlineCode",{parentName:"p"},"testnet")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"prod")," in the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd node-binary/lightd/{network}/{version}\n")),(0,r.kt)("p",null,"Help info:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'./lightd --help\nThis node will run a secure proxy to a binance rpc server.\n\nAll calls that can be tracked back to a block header by a proof\nwill be verified before passing them back to the caller. Other that\nthat it will present the same interface as a full binance node,\njust with added trust and running locally.\n\nUsage:\n  lite [flags]\n\nFlags:\n      --cache-size int             Specify the memory trust store cache size (default 10)\n      --chain-id string            Specify the Beacon Chain  ID (default "bnbchain")\n  -h, --help                       help for lite\n      --home-dir string            Specify the home directory (default ".binance-lite")\n      --laddr string               Serve the proxy on the given address (default "tcp://localhost:27147")\n      --max-open-connections int   Maximum number of simultaneous connections (including WebSocket). (default 900)\n      --node string                Connect to a binance node at this address (default "tcp://localhost:27147")\n')),(0,r.kt)("p",null,"You can specify all the parameters above."),(0,r.kt)("p",null,"Start the light client node according to the Platform. Replace the ",(0,r.kt)("inlineCode",{parentName:"p"},"platform")," variable with ",(0,r.kt)("inlineCode",{parentName:"p"},"mac"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"windows")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"linux")," in the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'./{{platform}}/lightd --chain-id "{chain-id}" --node tcp://{full node addr}:80 > node.log  &\n')),(0,r.kt)("p",null,"There are two required parameters to start a light client node: ",(0,r.kt)("inlineCode",{parentName:"p"},"chain id")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"full node addr"),".",(0,r.kt)("br",null),"\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"chain id")," of the network that you want join in.",(0,r.kt)("br",null),"\nYou can find chain id at ",(0,r.kt)("a",{parentName:"p",href:"https://https://github.com/bnb-chain/node-binary/blob/master/fullnode/testnet/0.5.8/config/genesis.json"},"genesis file in test network"),"\nor ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/node-binary/blob/master/fullnode/prod/0.5.8/config/genesis.json"},"genesis file in prod network"),".",(0,r.kt)("br",null),"\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"full node addr")," field can be an address of any full node that you have deployed.",(0,r.kt)("br",null),"\nYou can refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/beaconchain/fullnode"},"Run a Beacon Chain  full node")," to get more details.",(0,r.kt)("br",null)),(0,r.kt)("p",null,"We supply a bunch of full nodes that you can connect to for both mainnet and testnet.",(0,r.kt)("br",null),"\nYou cat get full nodes info through a simple python script(notice to replace domain according to different network):",(0,r.kt)("br",null)),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import requests, json\nd = requests.get(\'https://dex.binance.org/api/v1/peers\').text # replace dex.binance.org with testnet-dex.binance.org for testnet\nl = json.loads(d)\nseeds = ",".join([ (seed["id"]+"@"+seed["original_listen_addr"]) for seed in l if seed["accelerated"] == False])\nprint (seeds)\n')),(0,r.kt)("h3",{id:"example-for-mainnet"},"Example for Mainnet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'./lightd --chain-id "Binance-Chain-Tigris" --node tcp://dataseed1.binance.org:80 > node.log  &\n')),(0,r.kt)("h3",{id:"example-for-testnet"},"Example for Testnet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'./lightd --chain-id "Binance-Chain-Ganges" --node tcp://data-seed-pre-0-s1.binance.org:80 > node.log  &\n')),(0,r.kt)("h2",{id:"working-with-the-light-client"},"Working with the light client"),(0,r.kt)("p",null,"Light client has the same RPC interface as ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/node-rpc"},"rpc-api"),".",(0,r.kt)("br",null),"\nThe default port of light client is ",(0,r.kt)("inlineCode",{parentName:"p"},"27147"),"."))}h.isMDXComponent=!0}}]);