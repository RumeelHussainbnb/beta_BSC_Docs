"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[1969],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=s(n),u=r,h=p["".concat(c,".").concat(u)]||p[u]||d[u]||i;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},16966:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return m},default:function(){return p}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={},c="Customized Scripts and Transfer Memo Validation",s={unversionedId:"beaconchain/memo-validation",id:"beaconchain/memo-validation",isDocsHomePage:!1,title:"Customized Scripts and Transfer Memo Validation",description:"Memo Validation",source:"@site/docs/beaconchain/memo-validation.md",sourceDirName:"beaconchain",slug:"/beaconchain/memo-validation",permalink:"/docs/beaconchain/memo-validation",editUrl:"https://github.com/RumeelHussainbnb/beta_BSC_Docs/blob/master/docs/docs/beaconchain/memo-validation.md",tags:[],version:"current",frontMatter:{}},m=[{value:"Memo Validation",id:"memo-validation",children:[],level:2},{value:"Enable account scripts for cross-chain transfer",id:"enable-account-scripts-for-cross-chain-transfer",children:[],level:2},{value:"What is a customized script?",id:"what-is-a-customized-script",children:[{value:"Fee",id:"fee",children:[],level:3}],level:2},{value:"Command Line",id:"command-line",children:[{value:"Global Parameters",id:"global-parameters",children:[],level:3},{value:"Set-account-flags",id:"set-account-flags",children:[],level:3},{value:"Parameters",id:"parameters",children:[],level:3},{value:"Enable-memo-checker",id:"enable-memo-checker",children:[],level:3},{value:"Disable-memo-checker",id:"disable-memo-checker",children:[],level:3}],level:2}],d={toc:m};function p(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"customized-scripts-and-transfer-memo-validation"},"Customized Scripts and Transfer Memo Validation"),(0,i.kt)("h2",{id:"memo-validation"},"Memo Validation"),(0,i.kt)("p",null,"As explained in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/BEPs/blob/master/BEP12.md"},"BEP12"),", In some circumstances, users may want to specify additional functions or/and validations on some transactions. With BEP12, exchanges can reject deposits that have no valid digits-only memo."),(0,i.kt)("h2",{id:"enable-account-scripts-for-cross-chain-transfer"},"Enable account scripts for cross-chain transfer"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/BEPs/blob/master/BEP12.md"},"BEP12")," was introduced to check whether the memo field of any transfer transaction is empty. Since ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/node-binary/releases/tag/v0.8.2"},"version 0.8.2"),", the memo of cross-chain transfer is also checked. From now on, the deposit transaction without memo to exchanges be returned automatically."),(0,i.kt)("h2",{id:"what-is-a-customized-script"},"What is a customized script?"),(0,i.kt)("p",null,"This script is aimed to ensure the transfer transactions have valid memo (if the receivers require this).\nFirst, this script will check the following conditions:"),(0,i.kt)("p",null,"The transaction type is sent.\nThe target address is the receiving address.\nThen this script will ensure that the transaction memo is not empty and the memo only contains digital letters."),(0,i.kt)("p",null,"This is the pseudocode:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"func memoValiation(addr, tx) error {\n    if tx.Type != \u201csend\u201d {\n        return nil\n    }\n    if ! isReceiver(tx, addr) {\n        return nil\n    }\n    if  tx.memo.length == 0 {\n        return err(\u201ctx memo is empty\u201d)\n    }\n    if  tx.memo.length > 100 {\n        return err(\u201ctx memo is too long\u201d)\n    }\n    if !isAllDigital(tx.memo) {\n        return err(\u201ctx memo contains non digital character\u201d)\n    }\n    return nil\n}\n")),(0,i.kt)("h3",{id:"fee"},"Fee"),(0,i.kt)("p",null,"1 BNB will be charged on enabling  memo validation of transactions."),(0,i.kt)("h2",{id:"command-line"},"Command Line"),(0,i.kt)("h3",{id:"global-parameters"},"Global Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Field")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Type")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Description")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"from"),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Name of your key.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"chain-id"),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Name of blockchain")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"node"),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"url of the node")))),(0,i.kt)("h3",{id:"set-account-flags"},"Set-account-flags"),(0,i.kt)("p",null,"This transaction is aimed to set account flags to any hex value."),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Field")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Type")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Description")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"account-flags"),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"account flags, must be hex encoding string with prefix 0x")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example on mainnet:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"./bnbcli token account_flags set-account-flags --from <your-key-name> --account-flags 0x01  --chain-id Binance-Chain-Tigris --node  https://dataseed5.defibit.io:443 --trust-node\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example on testnet:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"./tbnbcli token account_flags set-account-flags --from <your-key-name> --account-flags 0x01 --chain-id Binance-Chain-Ganges --trust-node --node http://data-seed-pre-0-s3.binance.org:80\n")),(0,i.kt)("h3",{id:"enable-memo-checker"},"Enable-memo-checker"),(0,i.kt)("p",null,"This transaction is aimed to aimed to enable transfer memo checker scripts."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example on mainnet:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"./bnbcli account_flags enable-memo-checker --chain-id Binance-Chain-Tigris --node  https://dataseed5.defibit.io:443 --trust-node\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example on testnet:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"./tbnbcli account_flags enable-memo-checker --chain-id Binance-Chain-Ganges --trust-node --node http://data-seed-pre-0-s3.binance.org:80\n")),(0,i.kt)("h3",{id:"disable-memo-checker"},"Disable-memo-checker"),(0,i.kt)("p",null,"This transaction is aimed to disable transfer memo checker."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example on mainnet:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"./bnbcli account_flag disable-memo-checker --chain-id Binance-Chain-Tigris --node  https://dataseed5.defibit.io:443 --trust-node\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example on testnet:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"./tbnbcli account_flag disable-memo-checker --chain-id Binance-Chain-Ganges --trust-node --node http://data-seed-pre-0-s3.binance.org:80\n")))}p.isMDXComponent=!0}}]);