"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[855],{3905:function(A,e,t){t.d(e,{Zo:function(){return c},kt:function(){return p}});var n=t(67294);function r(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function o(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,n)}return t}function a(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){r(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function i(A,e){if(null==A)return{};var t,n,r=function(A,e){if(null==A)return{};var t,n,r={},o=Object.keys(A);for(n=0;n<o.length;n++)t=o[n],e.indexOf(t)>=0||(r[t]=A[t]);return r}(A,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(A);for(n=0;n<o.length;n++)t=o[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(r[t]=A[t])}return r}var s=n.createContext({}),u=function(A){var e=n.useContext(s),t=e;return A&&(t="function"==typeof A?A(e):a(a({},e),A)),t},c=function(A){var e=u(A.components);return n.createElement(s.Provider,{value:e},A.children)},l={inlineCode:"code",wrapper:function(A){var e=A.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(A,e){var t=A.components,r=A.mdxType,o=A.originalType,s=A.parentName,c=i(A,["components","mdxType","originalType","parentName"]),d=u(t),p=r,b=d["".concat(s,".").concat(p)]||d[p]||l[p]||o;return t?n.createElement(b,a(a({ref:e},c),{},{components:t})):n.createElement(b,a({ref:e},c))}));function p(A,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof A||r){var o=t.length,a=new Array(o);a[0]=d;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=A,i.mdxType="string"==typeof A?A:r,a[1]=i;for(var u=2;u<o;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},28032:function(A,e,t){t.r(e),t.d(e,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var n=t(87462),r=t(63366),o=(t(67294),t(3905)),a=["components"],i={},s="List Instructions",u={unversionedId:"beaconchain/list_instruction",id:"beaconchain/list_instruction",isDocsHomePage:!1,title:"List Instructions",description:"Listing a trading pair is a rather advanced feature in DEX. To list your token, you can follow the step-by-step instruction here.",source:"@site/docs/beaconchain/list_instruction.md",sourceDirName:"beaconchain",slug:"/beaconchain/list_instruction",permalink:"/docs/beaconchain/list_instruction",editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/beaconchain/list_instruction.md",tags:[],version:"current",frontMatter:{}},c=[{value:"1. Issue Tokens on Beacon Chain",id:"1-issue-tokens-on-beacon-chain",children:[],level:2},{value:"2. Submit Proposal",id:"2-submit-proposal",children:[],level:2},{value:"3. Send List Transaction",id:"3-send-list-transaction",children:[],level:2},{value:"FAQ about Listing  Tokens",id:"faq-about-listing--tokens",children:[{value:"Which trading pair can be listed?",id:"which-trading-pair-can-be-listed",children:[],level:3},{value:"How is a trading pair created on Binance DEX?",id:"how-is-a-trading-pair-created-on-binance-dex",children:[],level:3}],level:2}],l={toc:c};function d(A){var e=A.components,i=(0,r.Z)(A,a);return(0,o.kt)("wrapper",(0,n.Z)({},l,i,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"list-instructions"},"List Instructions"),(0,o.kt)("p",null,"Listing a trading pair is a rather advanced feature in DEX. To list your token, you can follow the step-by-step instruction here."),(0,o.kt)("p",null,"There are the steps to get your tokens listed:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"workflow",src:t(42223).Z})),(0,o.kt)("h2",{id:"1-issue-tokens-on-beacon-chain"},"1. Issue Tokens on Beacon Chain"),(0,o.kt)("p",null,"Please refer to this ",(0,o.kt)("a",{parentName:"p",href:"/docs/beaconchain/tokens"},"token issue doc")," to learn about how to issue your own asset on Beacon Chain ."),(0,o.kt)("h2",{id:"2-submit-proposal"},"2. Submit Proposal"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"On-Chain Proposal Request")),(0,o.kt)("p",null,"Please refer to this ",(0,o.kt)("a",{parentName:"p",href:"/docs/beaconchain/governance"},"governance doc")," to learn about how to create a proposal about listing a new trading pair on Beacon Chain ."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Please ensure that you test EVERYTHING on our testnet (multiple times at least) before you officially execute this on the mainnet.")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Community Thread Proposal (Recommended)")),(0,o.kt)("p",null,"It is recommended that Token Issuers first create a thread under the \u201cToken Issuance & Listings\u201d category in the Beacon Chain  Community Forum (",(0,o.kt)("a",{parentName:"p",href:"https://community.binance.org/"},"https://community.binance.org/"),"). The whole guideline is ",(0,o.kt)("a",{parentName:"p",href:"https://community.binance.org/topic/18/guidelines-on-how-to-list-your-token-on-binance-dex"},"here")),(0,o.kt)("h2",{id:"3-send-list-transaction"},"3. Send List Transaction"),(0,o.kt)("p",null,"Please refer to this ",(0,o.kt)("a",{parentName:"p",href:"/docs/beaconchain/list"},"list doc")," to learn about how to send a list transaction and finish listing process on Beacon Chain ."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Please ensure that  a ",(0,o.kt)("inlineCode",{parentName:"p"},"list")," transaction must be sent before ",(0,o.kt)("inlineCode",{parentName:"p"},"expire-time"),".")),(0,o.kt)("h2",{id:"faq-about-listing--tokens"},"FAQ about Listing  Tokens"),(0,o.kt)("h3",{id:"which-trading-pair-can-be-listed"},"Which trading pair can be listed?"),(0,o.kt)("p",null,"Simply allowing trading between two assets seems easy enough, however it is expensive for not only the network  but also its users in long term (and liquidity costs can be much larger). In order to efficiently use the network, Beacon Chain  only list assets against BNB and other widely accepted market quote assets."),(0,o.kt)("h3",{id:"how-is-a-trading-pair-created-on-binance-dex"},"How is a trading pair created on Binance DEX?"),(0,o.kt)("p",null,"The design philosophy of Binance DEX adheres to the idea that the most efficient and low cost way to perform trading and price-discovery is still to use single order book. This single order book is managed and replicated across all full nodes with the same, deterministic matching logic."))}d.isMDXComponent=!0},42223:function(A,e){e.Z="data:image/jpeg;base64,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"}}]);