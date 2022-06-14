"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[246],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),k=a,d=m["".concat(p,".").concat(k)]||m[k]||u[k]||o;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9318:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={sidebar_label:"Mirror BEP2 and BEP20 Token",hide_table_of_contents:!1,sidebar_position:2},p="Mirror BEP2 and BEP20 Token",c={unversionedId:"mirror",id:"mirror",isDocsHomePage:!1,title:"Mirror BEP2 and BEP20 Token",description:"Pre-requisites",source:"@site/docs/mirror.md",sourceDirName:".",slug:"/mirror",permalink:"/docs/mirror",editUrl:"https://github.com/RumeelHussainbnb/beta_BSC_Docs/blob/master/docs/mirror.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Mirror BEP2 and BEP20 Token",hide_table_of_contents:!1,sidebar_position:2},sidebar:"bscSideBar",previous:{title:"Bind BEP2 and BEP20 Tokens",permalink:"/docs/bind-tokens"},next:{title:"Token Circulation Model",permalink:"/docs/circulation-model"}},s=[{value:"Pre-requisites",id:"pre-requisites",children:[],level:2},{value:"Motivation",id:"motivation",children:[],level:2},{value:"What Happens Under the Hood",id:"what-happens-under-the-hood",children:[],level:2},{value:"Fee Table",id:"fee-table",children:[],level:2},{value:"Mirror With MyEtherWallet",id:"mirror-with-myetherwallet",children:[],level:2},{value:"Query BEP2 Token Symbol",id:"query-bep2-token-symbol",children:[],level:2}],u={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mirror-bep2-and-bep20-token"},"Mirror BEP2 and BEP20 Token"),(0,o.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,o.kt)("p",null,"This BEP20 token is not bonded to any BEP2 token"),(0,o.kt)("h2",{id:"motivation"},"Motivation"),(0,o.kt)("p",null,"Anyone can call the ",(0,o.kt)("inlineCode",{parentName:"p"},"mirror")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/bsc-genesis-contract/blob/af4f3993303213052222f55c721e661862d19638/contracts/TokenManager.sol#L331"},"method")," to issue a BEP2 token automatically and bind them."),(0,o.kt)("h2",{id:"what-happens-under-the-hood"},"What Happens Under the Hood"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Verify there is no pending mirror request"),(0,o.kt)("li",{parentName:"ul"},"Check the total supply and token symbol is valid"),(0,o.kt)("li",{parentName:"ul"},"Send a cross-chain package to issue a BEP2 token on Beacon Chain"),(0,o.kt)("li",{parentName:"ul"},"The newly created BEP2 token is locked until the token holder send cross-chain transfer")),(0,o.kt)("p",null,"After binding, all liquid circulation is on BSC."),(0,o.kt)("h2",{id:"fee-table"},"Fee Table"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Fee Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Pay in BNB"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"mirrorFee"),(0,o.kt)("td",{parentName:"tr",align:null},"it's 10 BNB on mainnet now")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"relayFee"),(0,o.kt)("td",{parentName:"tr",align:null},"it's 0.002BNB on mainnet now")))),(0,o.kt)("p",null,"Both ",(0,o.kt)("inlineCode",{parentName:"p"},"mirrorFee")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"relayFee")," can be changed by on-chain governance"),(0,o.kt)("p",null,"To query ",(0,o.kt)("inlineCode",{parentName:"p"},"mirrorFee")," from system contract;"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Call ",(0,o.kt)("inlineCode",{parentName:"p"},"Tokenmanager")," ",(0,o.kt)("a",{parentName:"p",href:"https://testnet.bscscan.com/address/0x0000000000000000000000000000000000001008#writeContract"},"Contract")," with the latest ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/bsc-genesis-contract/blob/master/abi/tokenmanager.abi"},"ABI"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Query ",(0,o.kt)("inlineCode",{parentName:"p"},"mirrorFee")," function"))),(0,o.kt)("p",null,"Fee= result/1e18"),(0,o.kt)("p",null,"To query ",(0,o.kt)("inlineCode",{parentName:"p"},"relayFee")," from system contract;"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Call ",(0,o.kt)("inlineCode",{parentName:"p"},"TokenHub")," ",(0,o.kt)("a",{parentName:"p",href:"https://testnet.bscscan.com/address/0x0000000000000000000000000000000000001008#writeContract"},"Contract")," with the latest ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/bsc-genesis-contract/blob/master/abi/tokenhub.abi"},"ABI"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Query ",(0,o.kt)("inlineCode",{parentName:"p"},"getMiniRelayFee")," function"))),(0,o.kt)("p",null,"Fee= result/1e18"),(0,o.kt)("h2",{id:"mirror-with-myetherwallet"},"Mirror With MyEtherWallet"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Call ",(0,o.kt)("inlineCode",{parentName:"li"},"Tokenmanager")," Contract")),(0,o.kt)("p",null,"Use the latest ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/bsc-genesis-contract/blob/master/abi/tokenmanager.abi"},"ABI")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lh5.googleusercontent.com/SYyvWVcLHELSE72JSXqBwMJB6Y50jMz5HgH6irmCbyxGwr-W_Hz-vbm4IqWXAqE2hvCAXaqNKfs28ZhGFtMrMrDgWvDfEkHPunnSuxSKPpLBtuxmiX-b5yRjfczENJxKDrqSAYWy",alt:"img"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Select ",(0,o.kt)("inlineCode",{parentName:"li"},"mirror")," function and fill-in with your BEP20 address")),(0,o.kt)("p",null,"The value here should be no less than  ",(0,o.kt)("inlineCode",{parentName:"p"},"mirrorFee"),"+ ",(0,o.kt)("inlineCode",{parentName:"p"},"relayFee"),"."),(0,o.kt)("p",null,"Time stamp should be greater than ",(0,o.kt)("inlineCode",{parentName:"p"},"unix_timestamp(now())"),". The difference should be between 120 and 86400. It's recommended to use ",(0,o.kt)("inlineCode",{parentName:"p"},"unix_timestamp(now())+1000")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/_DpAMjJwZeujn5bud485SPV014Gf4W8DRIcN9Y9FQyPxt3bveWPK8BImBbKF8pNHlE33a88I3aFLfP04uDZ8iFDvnUHtIj8cTuk_uEmImhsOmDU01UxtkNiHYNKxPGQ5jzLMpTzm",alt:"img"})),(0,o.kt)("p",null,"All set!"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lh4.googleusercontent.com/4SrlLnt8g699kcX6cRYviG1GXko7QQQsym4vShNOz3BVvlR9qUtCxGjoK5Mo8XUK23YQUTjgrPXRKLN9Qk_DVkmoVCEhO9K4g94CkrgJM6P8xTb4rV5r2TF0t61EKfxzS3M6fIyB",alt:"img"})),(0,o.kt)("h2",{id:"query-bep2-token-symbol"},"Query BEP2 Token Symbol"),(0,o.kt)("p",null,"You can query BEP2 Token symbol from ",(0,o.kt)("inlineCode",{parentName:"p"},"tokenhub")," contract."),(0,o.kt)("p",null,"Use the latest ",(0,o.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/bnb-chain/bsc-genesis-contract/master/abi/tokenhub.abi"},"ABI")),(0,o.kt)("p",null,"Select ",(0,o.kt)("inlineCode",{parentName:"p"},"getBoundBep2Symbol")," function"),(0,o.kt)("p",null,"Then, you can see the token symbol in the result."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lh6.googleusercontent.com/i1NSu3t9lWEo5lRmsNw7moE_okqZe7VOto1vjGl3MXhQIoNJUJ0wMEwx-68LYRfMKbTs8TfCXzPGWJ7Oj9nSdtF3vo4wVnb_QFCeeC6RQk6kweQOe61_isnt8BOQs7mGmPpz7PKP",alt:"img"})))}m.isMDXComponent=!0}}]);