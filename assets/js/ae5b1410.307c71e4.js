"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[956],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return h}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(t),h=r,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||i;return t?a.createElement(m,o(o({ref:n},d),{},{components:t})):a.createElement(m,o({ref:n},d))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},10507:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var a=t(87462),r=t(63366),i=(t(67294),t(3905)),o=["components"],c={},l="How to Access Beacon Chain",s={unversionedId:"beaconchain/chain-access",id:"beaconchain/chain-access",isDocsHomePage:!1,title:"How to Access Beacon Chain",description:"Get Started pages already show how to access Beacon Chain and DEX via",source:"@site/docs/beaconchain/chain-access.md",sourceDirName:"beaconchain",slug:"/beaconchain/chain-access",permalink:"/docs/beaconchain/chain-access",editUrl:"https://github.com/RumeelHussainbnb/beta_BSC_Docs/blob/master/docs/docs/beaconchain/chain-access.md",tags:[],version:"current",frontMatter:{}},d=[{value:"Web API",id:"web-api",children:[],level:2},{value:"Node RPC",id:"node-rpc",children:[],level:2},{value:"Command Line Interface",id:"command-line-interface",children:[],level:2},{value:"Write APIs",id:"write-apis",children:[{value:"Message Composition",id:"message-composition",children:[],level:3},{value:"Transaction Encoding",id:"transaction-encoding",children:[],level:3},{value:"Signature",id:"signature",children:[],level:3}],level:2},{value:"Account and Sequence Number",id:"account-and-sequence-number",children:[],level:2},{value:"Examples",id:"examples",children:[],level:2}],p={toc:d};function u(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-to-access-beacon-chain"},"How to Access Beacon Chain"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/beaconchain/get-started"},"Get Started")," pages already show how to access Beacon Chain and DEX via\nWallet and Explorers. Here we would like to dive into some technology details for access\nin a programming way."),(0,i.kt)("p",null,"There are 3 ways to read and write data from Beacon Chain :"),(0,i.kt)("h2",{id:"web-api"},"Web API"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Accelerated Node")," infrastructure provides easy access via http REST APIs and WebSocket\npush APIs. There are multiple endpoints from different validator's infrastructure. Please\ncheck the ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/dex-api/paths"},"Web API Reference")),(0,i.kt)("h2",{id:"node-rpc"},"Node RPC"),(0,i.kt)("p",null,"There are public data seed nodes that joins the Beacon Chain  network. They usually\nprovide RPC calls. Please check the ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/node-rpc"},"Node RPC Reference"),"."),(0,i.kt)("p",null,"You can also run a ",(0,i.kt)("a",{parentName:"p",href:"/docs/beaconchain/fullnode"},"full node")," by yourself, so that you will have a local server\nto send RPC requests and read Chain information off."),(0,i.kt)("h2",{id:"command-line-interface"},"Command Line Interface"),(0,i.kt)("p",null,"Essentially command line interfaces are just tools that wrap the incoming command line arguments and call RPCs. Please check the ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/cli"},"Command Line Referenace"),"."),(0,i.kt)("h2",{id:"write-apis"},"Write APIs"),(0,i.kt)("p",null,"You can only write to Beacon Chain  via ",(0,i.kt)("inlineCode",{parentName:"p"},"Transactions"),". Both Web API and Node RPC provide\na ",(0,i.kt)("inlineCode",{parentName:"p"},"broadcastTx")," API to submit a ",(0,i.kt)("inlineCode",{parentName:"p"},"signed and encoded")," transaction onto the Beacon Chain . The detailed process is outlined below:"),(0,i.kt)("h3",{id:"message-composition"},"Message Composition"),(0,i.kt)("p",null,"The transaction message and related information will be packed into ",(0,i.kt)("inlineCode",{parentName:"p"},"payload"),", which is the so called ",(0,i.kt)("a",{parentName:"p",href:"/docs/beaconchain/encoding#standard-transaction-to-use-and-encode-for-binance_chain"},(0,i.kt)("inlineCode",{parentName:"a"},"Standard Transaction")),"."),(0,i.kt)("p",null,"The transaction body, memo, signature, etc. all fill in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Standard Transaction"),", encode and then broadcast out together onto Beacon Chain ."),(0,i.kt)("h3",{id:"transaction-encoding"},"Transaction Encoding"),(0,i.kt)("p",null,"Encoding defines the way how transactions are serialized and transferred between clients and nodes,\nand different nodes themselves. ",(0,i.kt)("a",{parentName:"p",href:"/docs/beaconchain/encoding"},"here")," is a detailed specification on the transaction\ntypes and encoding logic."),(0,i.kt)("h3",{id:"signature"},"Signature"),(0,i.kt)("p",null,"Signature is the evidence to prove the sender owns the transaction. It will be created from the actions outlined below:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Compose a data structure. please note ",(0,i.kt)("inlineCode",{parentName:"p"},"msgs"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"memo"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"source"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," are the same as in the above ",(0,i.kt)("inlineCode",{parentName:"p"},"payload"),"."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"chain_id"),": a string, unique ID for the Chain, it stays the same for most time, but may vary as Beacon Chain  evolves;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"account_number"),": a string for a 64-bit integer, an identifier number associated with the signing address"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sequence"),": a string for a a 64-bit integer, please check ",(0,i.kt)("a",{parentName:"li",href:"#account_and_sequence_number"},"the below")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"memo"),": a string, a short sentence of remark for the transaction"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"msgs"),": a byte array, ",(0,i.kt)("strong",{parentName:"li"},"json encoded")," transaction messages, please check the ",(0,i.kt)("a",{parentName:"li",href:"/docs/beaconchain/encoding"},"encoding")," section."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"source"),": a string for a 64 bits integer, which is an identifier for transaction incoming tools"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"data"),": byte array, reserved for future use")))),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Encode the above data structure in json, with ordered key, Specifically:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Maps have their keys sorted lexicographically"),(0,i.kt)("li",{parentName:"ul"},"Structs keys are marshalled in the order defined in the struct")))),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Sign SHA256 of the encoded byte array, to create an ECDSA signature on curve Secp256k1 and serialize the ",(0,i.kt)("inlineCode",{parentName:"li"},"R")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"S")," result into a 64-byte array. (both ",(0,i.kt)("inlineCode",{parentName:"li"},"R")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"S")," are encoded into 32-byte big endian integers, and then ",(0,i.kt)("inlineCode",{parentName:"li"},"R")," is put into the first 32 bytes and ",(0,i.kt)("inlineCode",{parentName:"li"},"S")," are put into the last 32 bytes of the byte array. In order to break ",(0,i.kt)("inlineCode",{parentName:"li"},"S")," 's malleability, ",(0,i.kt)("inlineCode",{parentName:"li"},"S")," set to ",(0,i.kt)("inlineCode",{parentName:"li"},"curve.Order() - S")," if ",(0,i.kt)("inlineCode",{parentName:"li"},"S > curnve.Order()/2"),".)")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"signature")," will be encoded together with transaction message and sent as ",(0,i.kt)("inlineCode",{parentName:"p"},"payload")," to Beacon Chain  node via RPC or http REST API, as described in the above section."),(0,i.kt)("h2",{id:"account-and-sequence-number"},"Account and Sequence Number"),(0,i.kt)("p",null,"After ",(0,i.kt)("inlineCode",{parentName:"p"},"Account")," is ",(0,i.kt)("a",{parentName:"p",href:"/docs/beaconchain/transfer#account_and_balance"},"created"),", besides the balances, ",(0,i.kt)("inlineCode",{parentName:"p"},"Account")," also contains:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Account Number: an internal identifier for the account"),(0,i.kt)("li",{parentName:"ul"},"Sequence Number: an ever-changing integer.")),(0,i.kt)("p",null,"The Sequence Number is the way how Beacon Chain  prevents ",(0,i.kt)("inlineCode",{parentName:"p"},"Replay Attack")," (the idea is borrowed from Cosmos\nnetwork, but varies a bit in handling). Every transaction should have a new ",(0,i.kt)("inlineCode",{parentName:"p"},"Sequence Number")," increased by\n1 from the current latest sequence number of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Account"),", and after this transaction is recorded on the\nblock chain, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Sequence Number")," will be set to the same number as the one of latest transaction."),(0,i.kt)("p",null,"This logic forces the client to be aware of the current ",(0,i.kt)("inlineCode",{parentName:"p"},"Sequence Number"),", either by reading from the\nblockchain via API, or keep the counting locally by themselves. The recommended way is to keep\ncounting locally and re-synchronize from the blockchain periodically."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/sdk"},"SDK")," in different languages are provided to simplify use of APIs to access Beacon Chain ."))}u.isMDXComponent=!0}}]);