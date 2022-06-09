"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[6212],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),u=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=u(e.components);return a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(t),f=r,b=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return t?a.createElement(b,i(i({ref:n},l),{},{components:t})):a.createElement(b,i({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},61723:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return p}});var a=t(87462),r=t(63366),o=(t(67294),t(3905)),i=["components"],s={},c="Offline",u={unversionedId:"beaconchain/offline",id:"beaconchain/offline",isDocsHomePage:!1,title:"Offline",description:"bnbcli support generating and signing all types of transactions offline, then broadcast them. This feature will let users generate and sign their transactions at an offline machine, then use another machine to broadcast it to the network",source:"@site/docs/beaconchain/offline.md",sourceDirName:"beaconchain",slug:"/beaconchain/offline",permalink:"/docs/beaconchain/offline",editUrl:"https://github.com/RumeelHussainbnb/beta_BSC_Docs/blob/master/docs/docs/beaconchain/offline.md",tags:[],version:"current",frontMatter:{}},l=[{value:"Generate your unsigned transaction",id:"generate-your-unsigned-transaction",children:[],level:2},{value:"Sign your transaction",id:"sign-your-transaction",children:[],level:2},{value:"Broadcast Your Transaction",id:"broadcast-your-transaction",children:[],level:2}],d={toc:l};function p(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"offline"},"Offline"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"bnbcli")," support generating and signing all types of transactions offline, then broadcast them. This feature will let users generate and sign their transactions at an offline machine, then use another machine to broadcast it to the network"),(0,o.kt)("h2",{id:"generate-your-unsigned-transaction"},"Generate your unsigned transaction"),(0,o.kt)("p",null,"First step is that you need to generate your unsigned transaction and save it in a file."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: ",(0,o.kt)("inlineCode",{parentName:"p"},"--account-number")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"--node")," is not mandatory in unsigned command")),(0,o.kt)("p",null,"You can generate an unsigned transfer transaction on testnet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./tbnbcli send --from <your-key-name> --account-number <your-sccount-number> --to <destination-address> --amount 200000000:BNB --chain-id Binance-Chain-Ganges --node=data-seed-pre-2-s1.binance.org:80 --generate-only --offline >> unsigned.json\n")),(0,o.kt)("p",null,"You can generate an unsigned transfer transaction on mainnet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./bnbcli send --from <your-key-name> --account-number <your-sccount-number> --to <destination-address> --amount 200000000:BNB --chain-id Binance-Chain-Tigris --node https://dataseed5.defibit.io:443 --generate-only --offline >> unsigned.json\n")),(0,o.kt)("p",null,"Then, you can see that the signature of unsigned.json is empty."),(0,o.kt)("h2",{id:"sign-your-transaction"},"Sign your transaction"),(0,o.kt)("p",null,"You can view the unsigned.json to verify that all the info about this transaction is correct. You need to get the account-number and sequence about your address here: ",(0,o.kt)("a",{parentName:"p",href:"https://docs.bnbchain.org/docs/beaconchain/develop/api-reference/dex-api/paths#apiv1accountaddress"},"https://docs.bnbchain.org/docs/beaconchain/develop/api-reference/dex-api/paths#apiv1accountaddress")),(0,o.kt)("p",null,"You can sign an unsigned transfer transaction on testnet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./tbnbcli sign unsigned.json --account-number <address-account-number> --sequence <address-sequence> --chain-id Binance-Chain-Ganges --offline --name <your-key-name> >> signed.json\n")),(0,o.kt)("p",null,"You can sign an unsigned transfer transaction on mainnet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./bnbcli sign unsigned.json --account-number <address-account-number> --sequence <address-sequence> --chain-id Binance-Chain-Tigris --offline --name <your-key-name> >> signed.json\n")),(0,o.kt)("p",null,"You need to type in your password in this step"),(0,o.kt)("p",null,"Then, you can see that the signature of signed.json is no longer empty."),(0,o.kt)("h2",{id:"broadcast-your-transaction"},"Broadcast Your Transaction"),(0,o.kt)("p",null,"Please then copy your signed.json to a different server and broadcast this transaction."),(0,o.kt)("p",null,"You can broadcast your transaction on testnet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./tbnbcli broadcast signed.json --node http://data-seed-pre-0-s3.binance.org:80\n")),(0,o.kt)("p",null,"You can broadcast your transaction on mainnet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./bnbcli broadcast signed.json --node https://dataseed5.defibit.io:443\n")),(0,o.kt)("p",null,"You can find the list of nodes ",(0,o.kt)("a",{parentName:"p",href:"/docs/beaconchain/develop/api-reference/cli#where-to-connect"},"here")),(0,o.kt)("p",null,"If the broadcast is successful, you will see the transaction hash in returned info. Please go and verify it in ",(0,o.kt)("a",{parentName:"p",href:"https://testnet-explorer.binance.org"},"Explorer"),"."))}p.isMDXComponent=!0}}]);