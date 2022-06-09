"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[8478],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,b=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(b,i(i({ref:n},p),{},{components:t})):r.createElement(b,i({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},52253:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],s={},l="List Transaction",c={unversionedId:"beaconchain/list",id:"beaconchain/list",isDocsHomePage:!1,title:"List Transaction",description:"Only BEP2 tokens issued on Beacon Chain  can be listed. Learn how to issue BEP2 tokens here. If a token's listing proposal has been passed by valdiators, then a list transaction must be sent before expire-time.",source:"@site/docs/beaconchain/list.md",sourceDirName:"beaconchain",slug:"/beaconchain/list",permalink:"/docs/beaconchain/list",editUrl:"https://github.com/RumeelHussainbnb/beta_BSC_Docs/blob/master/docs/beaconchain/list.md",tags:[],version:"current",frontMatter:{}},p=[{value:"List Fee",id:"list-fee",children:[],level:2},{value:"List Transaction",id:"list-transaction-1",children:[{value:"Proposal Parameters",id:"proposal-parameters",children:[],level:3}],level:2}],u={toc:p};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"list-transaction"},"List Transaction"),(0,o.kt)("p",null,"Only ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/BEPs/blob/master/BEP2.md"},"BEP2")," tokens issued on Beacon Chain  can be listed. Learn how to issue BEP2 tokens ",(0,o.kt)("a",{parentName:"p",href:"/docs/beaconchain/tokens"},"here"),". If a token's listing proposal has been passed by valdiators, then a ",(0,o.kt)("inlineCode",{parentName:"p"},"list")," transaction must be sent before ",(0,o.kt)("inlineCode",{parentName:"p"},"expire-time"),"."),(0,o.kt)("h2",{id:"list-fee"},"List Fee"),(0,o.kt)("p",null,"Fees will be charge when issuing a token, creating a proposal, depositing and listing. You can refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/beaconchain/trading-spec"},"fee table in trading spec"),"."),(0,o.kt)("h2",{id:"list-transaction-1"},"List Transaction"),(0,o.kt)("h3",{id:"proposal-parameters"},"Proposal Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"quote-asset-symbol"),": For now, only support BNB as quote asset."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"init-price"),": the initial price for your asset, it is boosted by ",(0,o.kt)("strong",{parentName:"li"},"1e8")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"proposal-id"),": this corresponds to the listing proposal that is passed"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"from"),": this address should be the issuer of base asset")),(0,o.kt)("p",null,"Example on ",(0,o.kt)("strong",{parentName:"p"},"mainnet"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'\n$  ./bnbcli dex list -s AAA-254 --quote-asset-symbol BNB --from test \\\n--init-price 100000000 --proposal-id 15 --chain-id Binance-Chain-Tigris   --node  https://dataseed5.defibit.io:443  --json\n{\n   "Height":"282409",\n   "TxHash":"77AE3D190F430FE6E4B1A9659BEBB3F022CF7631",\n   "Response":{\n      "log":"Msg 0: ",\n      "tags":[\n         {\n            "key":"YWN0aW9u",\n            "value":"ZGV4TGlzdA=="\n         }\n      ]\n   }\n}\n')),(0,o.kt)("p",null,"Example on ",(0,o.kt)("strong",{parentName:"p"},"testnet"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$  ./tbnbcli dex list -s AAA-254 --quote-asset-symbol BNB --from test \\\n--init-price 100000000 --proposal-id 15 --chain-id=Binance-Chain-Ganges --node=data-seed-pre-2-s1.binance.org:80 --json\n{\n   "Height":"282409",\n   "TxHash":"77AE3D190F430FE6E4B1A9659BEBB3F022CF7631",\n   "Response":{\n      "log":"Msg 0: ",\n      "tags":[\n         {\n            "key":"YWN0aW9u",\n            "value":"ZGV4TGlzdA=="\n         }\n      ]\n   }\n}\n')),(0,o.kt)("p",null,"After the transaction is executed, you could see the newly added trading pair from Explorer and maket API."))}d.isMDXComponent=!0}}]);