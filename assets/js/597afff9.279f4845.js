"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[9551],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),d=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=d(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(t),m=a,h=u["".concat(c,".").concat(m)]||u[m]||p[m]||o;return t?r.createElement(h,i(i({ref:n},s),{},{components:t})):r.createElement(h,i({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},53414:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return s},default:function(){return u}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],l={},c="Trade",d={unversionedId:"beaconchain/trade",id:"beaconchain/trade",isDocsHomePage:!1,title:"Trade",description:"Binance DEX is the native marketplace which allows you to exchange digital assets issued and listed on it. The matching happens within the blockchain nodes and all of the transactions are recorded on-chain, therefore forming a complete, auditable ledger of activity. The following commands are available for trading:",source:"@site/docs/beaconchain/trade.md",sourceDirName:"beaconchain",slug:"/beaconchain/trade",permalink:"/docs/beaconchain/trade",editUrl:"https://github.com/RumeelHussainbnb/beta_BSC_Docs/blob/master/docs/beaconchain/trade.md",tags:[],version:"current",frontMatter:{}},s=[{value:"Place Order",id:"place-order",children:[],level:2},{value:"Cancel Order",id:"cancel-order",children:[],level:2},{value:"View Orders",id:"view-orders",children:[],level:2}],p={toc:s};function u(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"trade"},"Trade"),(0,o.kt)("p",null,"Binance DEX is the native marketplace which allows you to exchange digital assets issued and listed on it. The matching happens within the blockchain nodes and all of the transactions are recorded on-chain, therefore forming a complete, auditable ledger of activity. The following commands are available for trading:"),(0,o.kt)("h2",{id:"place-order"},"Place Order"),(0,o.kt)("p",null,"You could place a new order with the following command on testnet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ tbnbcli dex order  --symbol ZEBRA-16D_BNB  --side 1 --price 1000000 --qty 1000 --from guest --chain-id Binance-Chain-Ganges --node=data-seed-pre-2-s1.binance.org:80 -t gte\n")),(0,o.kt)("p",null,"You will be able to place order on mainnet by replaceing ",(0,o.kt)("inlineCode",{parentName:"p"},"chain-id")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"node"),"."),(0,o.kt)("p",null,"Example on ",(0,o.kt)("strong",{parentName:"p"},"mainnet"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ bnbcli dex order  --symbol ZEBRA-16D_BNB  --side 1 --price 1000000 --qty 1000 --from guest  --chain-id Binance-Chain-Tigris   --node  https://dataseed5.defibit.io:443  -t gte\n")),(0,o.kt)("p",null,"For ",(0,o.kt)("inlineCode",{parentName:"p"},"side"),", you need to put 1 as buy or 2 as sell."),(0,o.kt)("p",null,"Please note that the quantity should be rounded to ",(0,o.kt)("inlineCode",{parentName:"p"},"lotSize"),". Otherwise your order could be invalid.\nThe returned output is the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Committed at block 1616083 (tx hash: C550F348B3A62880062F9DCF67794F08889234D0360B26CF31E68F8D3105C58F, response: {Code:0 Data:[123 34 111 114 100 101 114 95 105 100 34 58 34 56 49 51 69 52 57 51 57 70 49 53 54 55 66 50 49 57 55 48 52 70 70 67 50 65 68 52 68 70 53 56 66 68 69 48 49 48 56 55 57 45 51 48 34 125] Log:Msg 0:  Info: GasWanted:0 GasUsed:0 Tags:[{Key:[97 99 116 105 111 110] Value:[111 114 100 101 114 78 101 119] XXX_NoUnkeyedLiteral:{} XXX_unrecognized:[] XXX_sizecache:0}] Codespace: XXX_NoUnkeyedLiteral:{} XXX_unrecognized:[] XXX_sizecache:0})\nMsg [NewOrderMsg{Sender: 813E4939F1567B219704FFC2AD4DF58BDE010879, Id: 813E4939F1567B219704FFC2AD4DF58BDE010879-30, Symbol: ZEBRA-16D_BNB}] was sent.\n")),(0,o.kt)("p",null,"The order id is needed if you want to cancel this order later."),(0,o.kt)("h2",{id:"cancel-order"},"Cancel Order"),(0,o.kt)("p",null,"To cancel an order, you could use the following command to cencel order on testnet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"tbnbcli dex cancel --symbol ZEBRA-16D_BNB   --chain-id Binance-Chain-Ganges --node=data-seed-pre-2-s1.binance.org:80 --refid  813E4939F1567B219704FFC2AD4DF58BDE010879-30 --from guest\n")),(0,o.kt)("p",null,"Please note that ",(0,o.kt)("inlineCode",{parentName:"p"},"refid")," is what you got from ",(0,o.kt)("inlineCode",{parentName:"p"},"order")," command."),(0,o.kt)("p",null,"Example on ",(0,o.kt)("strong",{parentName:"p"},"mainnet"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"bnbcli dex cancel --symbol ZEBRA-16D_BNB   --chain-id Binance-Chain-Tigris   --node  https://dataseed5.defibit.io:443 --refid  813E4939F1567B219704FFC2AD4DF58BDE010879-30 --from guest\n")),(0,o.kt)("h2",{id:"view-orders"},"View Orders"),(0,o.kt)("p",null,"To verify that your commands are executed as expected, you could query the orderbook of testnet."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"tbnbcli dex show -l ZEBRA-16D_BNB   --chain-id Binance-Chain-Ganges --node=data-seed-pre-2-s1.binance.org:80\n")),(0,o.kt)("p",null,"Example output is the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"         SellQty|       SellPrice|        BuyPrice|          BuyQty\n     58.14066000|      0.01400000|      0.00100000| 522278.22159000\n 674664.35943000|      0.01500000|      0.00000000|      0.00000000\n 291157.71192000|      0.01800000|      0.00000000|      0.00000000\n    229.20432000|      0.01900000|      0.00000000|      0.00000000\n 292616.45027000|      0.02000000|      0.00000000|      0.00000000\n 694954.49683000|      0.03000000|      0.00000000|      0.00000000\n 279267.00000000|      0.04000000|      0.00000000|      0.00000000\n 271236.08958000|      0.04500000|      0.00000000|      0.00000000\n 108472.66524300|      0.05000000|      0.00000000|      0.00000000\n 155000.00000000|      0.06000000|      0.00000000|      0.00000000\n 105028.64699000|      0.07000000|      0.00000000|      0.00000000\n 100000.00000000|      0.08000000|      0.00000000|      0.00000000\n 263025.58796000|      0.08500000|      0.00000000|      0.00000000\n1500427.52685800|      0.09000000|      0.00000000|      0.00000000\n2027178.06520900|      0.10000000|      0.00000000|      0.00000000\n    114.58796000|      0.17500000|      0.00000000|      0.00000000\n  15305.95524500|      0.20000000|      0.00000000|      0.00000000\n  10283.97968700|      0.30000000|      0.00000000|      0.00000000\n")),(0,o.kt)("p",null,"Example on ",(0,o.kt)("strong",{parentName:"p"},"mainnet"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"bnbcli dex show -l ZEBRA-16D_BNB    --chain-id Binance-Chain-Tigris   --node  https://dataseed5.defibit.io:443\n")))}u.isMDXComponent=!0}}]);