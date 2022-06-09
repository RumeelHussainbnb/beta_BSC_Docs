"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[7906],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var o=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=o.createContext({}),d=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=d(e.components);return o.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(t),m=i,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||r;return t?o.createElement(h,a(a({ref:n},c),{},{components:t})):o.createElement(h,a({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,a=new Array(r);a[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var d=2;d<r;d++)a[d]=t[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},894:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return c},default:function(){return p}});var o=t(87462),i=t(63366),r=(t(67294),t(3905)),a=["components"],l={},s="Join Mainnet",d={unversionedId:"beaconchain/develop/node/join-mainnet",id:"beaconchain/develop/node/join-mainnet",isDocsHomePage:!1,title:"Join Mainnet",description:"!!! Tip",source:"@site/docs/beaconchain/develop/node/join-mainnet.md",sourceDirName:"beaconchain/develop/node",slug:"/beaconchain/develop/node/join-mainnet",permalink:"/docs/beaconchain/develop/node/join-mainnet",editUrl:"https://github.com/RumeelHussainbnb/beta_BSC_Docs/blob/master/docs/docs/beaconchain/develop/node/join-mainnet.md",tags:[],version:"current",frontMatter:{},sidebar:"bscSideBar",previous:{title:"Install Binaries",permalink:"/docs/beaconchain/develop/node/install"},next:{title:"Join Testnet",permalink:"/docs/beaconchain/develop/node/join-testnet"}},c=[{value:"Minimum System Requirements",id:"minimum-system-requirements",children:[],level:2},{value:"Setting Up a New Node",id:"setting-up-a-new-node",children:[],level:2},{value:"Genesis &amp; Seeds",id:"genesis--seeds",children:[{value:"Download the Genesis File",id:"download-the-genesis-file",children:[],level:3},{value:"Add Seed Nodes",id:"add-seed-nodes",children:[{value:"Additional Configuration",id:"additional-configuration",children:[],level:4}],level:3}],level:2},{value:"Get Extra Information From Your Fullnode",id:"get-extra-information-from-your-fullnode",children:[{value:"Monitor Syncing Process",id:"monitor-syncing-process",children:[],level:5}],level:2},{value:"Prometheus Metrics",id:"prometheus-metrics",children:[],level:2},{value:"Mainnet Tools",id:"mainnet-tools",children:[],level:2}],u={toc:c};function p(e){var n=e.components,t=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"join-mainnet"},"Join Mainnet"),(0,r.kt)("p",null,"!!! Tip\nSee the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/node-binary/blob/master/README.md"},"node-binary repo")," for information on the mainnet, including the correct version of the binaries to use and details about the genesis file."),(0,r.kt)("p",null,"!!! warning\nYou need to install ",(0,r.kt)("a",{parentName:"p",href:"/docs/beaconchain/develop/node/install"},"bnbchaind")," before you go further"),(0,r.kt)("h2",{id:"minimum-system-requirements"},"Minimum System Requirements"),(0,r.kt)("p",null,"The hardware must meet certain requirements to run a Full Node."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Desktop or laptop hardware running recent versions of Mac OS X, Windows, or Linux."),(0,r.kt)("li",{parentName:"ul"},"500 GB of free disk space, accessible at a minimum read/write speed of 100 MB/s."),(0,r.kt)("li",{parentName:"ul"},"4 cores of CPU and 8 gigabytes of memory (RAM)."),(0,r.kt)("li",{parentName:"ul"},"A broadband Internet connection with upload/download speeds of at least 1 megabyte per second"),(0,r.kt)("li",{parentName:"ul"},"Your full node has to run at least 4 hours per 24 hours in order to catch up with Beacon Chain  More hours will be better, run your node continuously for best results.")),(0,r.kt)("h2",{id:"setting-up-a-new-node"},"Setting Up a New Node"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can skip this part if you have executed the install script.")),(0,r.kt)("p",null,"First you need to choose a home folder ",(0,r.kt)("inlineCode",{parentName:"p"},"$BNCHOME")," (i.e. ~/.bnbchaind) for Beacon Chain .\nYou can setup this by:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mkdir ~/.bnbchaind\nmkdir ~/.bnbchaind/config\n")),(0,r.kt)("p",null,"Then, download ",(0,r.kt)("inlineCode",{parentName:"p"},"app.toml")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"config.toml")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"node-binary/fullnode/{network}/{version}/config/")," into ",(0,r.kt)("inlineCode",{parentName:"p"},"$BNCHOME/config")),(0,r.kt)("p",null,"You can edit this moniker later, in the ~/.gaiad/config/config.toml file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'# A custom human readable name for this node\nmoniker = "<your_custom_moniker>"\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note Monikers can contain only ASCII characters. Using Unicode characters will render your node unreachable. :::")),(0,r.kt)("p",null,"Now your Full Node has been initialized!"),(0,r.kt)("h2",{id:"genesis--seeds"},"Genesis & Seeds"),(0,r.kt)("h3",{id:"download-the-genesis-file"},"Download the Genesis File"),(0,r.kt)("p",null,"Fetch the mainnet's genesis.json file into node-binary's config directory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd -p $HOME/.bnbchaind/config\nwget https://raw.githubusercontent.com/bnb-chain/node-binary/master/fullnode/prod/0.6.3-hotfix/config/genesis.json\n")),(0,r.kt)("p",null,"Note we use the latest directory in the node-binary repo which contains details for the mainnet like the latest version and the genesis file."),(0,r.kt)("p",null,"::: tip If you want to understand genesis file, click ",(0,r.kt)("a",{parentName:"p",href:"/docs/beaconchain/learn/genesis"},"here")," :::"),(0,r.kt)("p",null,"To verify the correctness of the configuration run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"bnbchaind start &\n")),(0,r.kt)("p",null,"If you encounter any issue when running a Full Node, you can read the FAQ list ",(0,r.kt)("a",{parentName:"p",href:"/docs/beaconchain/develop/node/fullnodeissue"},"here"),"."),(0,r.kt)("h3",{id:"add-seed-nodes"},"Add Seed Nodes"),(0,r.kt)("p",null,"Your Full Node needs to know how to find peers in the blockchain network. You'll need to add healthy seed nodes to $HOME/.bnbchain/config/config.toml. The recommended ",(0,r.kt)("inlineCode",{parentName:"p"},"config.toml")," already contains links to some seed nodes."),(0,r.kt)("p",null,"If those seeds aren't working, you can find more seeds and persistent peers in HTTP API endpoints: ",(0,r.kt)("a",{parentName:"p",href:"https://dex.binance.org/api/v1/peers"},"https://dex.binance.org/api/v1/peers")),(0,r.kt)("h4",{id:"additional-configuration"},"Additional Configuration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sync type: by default, new nodes will sync with ",(0,r.kt)("inlineCode",{parentName:"li"},"state-sync")," mode. To change sync mode, read the instructions ",(0,r.kt)("a",{parentName:"li",href:"/docs/beaconchain/develop/node/synctypes"},"here")),(0,r.kt)("li",{parentName:"ul"},"Log: The log file is under ",(0,r.kt)("inlineCode",{parentName:"li"},"home"),"- the directory specified when starting ",(0,r.kt)("inlineCode",{parentName:"li"},"bnbchaind"),".\nThe latest log file is ",(0,r.kt)("inlineCode",{parentName:"li"},"bnc.log"),". The process will create a new log file every one hour.\nTo make sure you have sufficient disk space to keep the log files, we strongly recommend you to change the log location by changing ",(0,r.kt)("inlineCode",{parentName:"li"},"logFileRoot")," option in ",(0,r.kt)("inlineCode",{parentName:"li"},"$BNCHOME/config/app.toml"),"."),(0,r.kt)("li",{parentName:"ul"},"Service Port: RPC service listens on port ",(0,r.kt)("inlineCode",{parentName:"li"},"27147")," and P2P service listens on port ",(0,r.kt)("inlineCode",{parentName:"li"},"27146")," by default.\nMake sure these two ports are open before starting a full node, unless the full node has to listen on other ports."),(0,r.kt)("li",{parentName:"ul"},"Store: All the state and block data will store under ",(0,r.kt)("inlineCode",{parentName:"li"},"$BNCHOME/data"),", do not delete or edit any of these files.")),(0,r.kt)("h2",{id:"get-extra-information-from-your-fullnode"},"Get Extra Information From Your Fullnode"),(0,r.kt)("p",null,"If you have a Full Node running, then you can publish extra messages to local files."),(0,r.kt)("h5",{id:"monitor-syncing-process"},"Monitor Syncing Process"),(0,r.kt)("p",null,"You can verify if state sync is done by ",(0,r.kt)("inlineCode",{parentName:"p"},"curl localhost:27147/status")," several times and see whether ",(0,r.kt)("inlineCode",{parentName:"p"},"latest_block_height")," is increasing in response."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"sync_info": {\n  ...\n  "latest_block_height": "878092",\n  "latest_block_time": "2019-04-15T00:01:22.610803768Z",\n  ...\n}\n')),(0,r.kt)("h2",{id:"prometheus-metrics"},"Prometheus Metrics"),(0,r.kt)("p",null,"Prometheus is enabled on port ",(0,r.kt)("inlineCode",{parentName:"p"},"28660")," by default, and the endpoint is ",(0,r.kt)("inlineCode",{parentName:"p"},"/metrics"),"."),(0,r.kt)("h2",{id:"mainnet-tools"},"Mainnet Tools"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://explorer.binance.org/"},"Explorer"))))}p.isMDXComponent=!0}}]);