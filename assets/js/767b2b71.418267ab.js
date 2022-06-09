"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[3406],{3905:function(e,n,t){t.d(n,{Zo:function(){return h},kt:function(){return p}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},h=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,h=c(e,["components","mdxType","originalType","parentName"]),d=s(t),p=o,f=d["".concat(l,".").concat(p)]||d[p]||u[p]||a;return t?r.createElement(f,i(i({ref:n},h),{},{components:t})):r.createElement(f,i({ref:n},h))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},58967:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return h},default:function(){return d}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],c={},l="Anti Front-Running",s={unversionedId:"beaconchain/anti-frontrun",id:"beaconchain/anti-frontrun",isDocsHomePage:!1,title:"Anti Front-Running",description:"Front-running means someone can get prior knowledge of transactions from other beneficial owners via technology or market advantage, so that they can influence the price beforehand and result in economic gain, which usually brings loss or cost to others. It is a daunting question asked to both centralized and other decentralized exchanges (DEX). Especially on some DEX, front-running actually happens quite often, e.g. via gas or timestamp manipulations, or slow matching.",source:"@site/docs/beaconchain/anti-frontrun.md",sourceDirName:"beaconchain",slug:"/beaconchain/anti-frontrun",permalink:"/docs/beaconchain/anti-frontrun",editUrl:"https://github.com/RumeelHussainbnb/beta_BSC_Docs/blob/master/docs/docs/beaconchain/anti-frontrun.md",tags:[],version:"current",frontMatter:{}},h=[{value:"Fast Matching",id:"fast-matching",children:[],level:2},{value:"Decentralized, Transparent Match Engine",id:"decentralized-transparent-match-engine",children:[],level:2},{value:"Periodic Auction Matching",id:"periodic-auction-matching",children:[],level:2},{value:"Potential Improvement",id:"potential-improvement",children:[],level:2}],u={toc:h};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"anti-front-running"},"Anti Front-Running"),(0,a.kt)("p",null,"Front-running means someone can get prior knowledge of transactions from other beneficial owners via technology or market advantage, so that they can influence the price beforehand and result in economic gain, which usually brings loss or cost to others. It is a daunting question asked to both centralized and other decentralized exchanges (DEX). Especially on some DEX, front-running actually happens quite often, e.g. via gas or timestamp manipulations, or slow matching."),(0,a.kt)("p",null,"There are several design points in Binance DEX that make front-running very difficult to execute."),(0,a.kt)("h2",{id:"fast-matching"},"Fast Matching"),(0,a.kt)("p",null,"Binance DEX matches orders in every block (with very fast block times). Fast matching leaves very little room for front-runner to react before the orders get executed properly. This is one of the fundamental parts of making front-running difficult, especially for normal market participants."),(0,a.kt)("h2",{id:"decentralized-transparent-match-engine"},"Decentralized, Transparent Match Engine"),(0,a.kt)("p",null,"It is very difficult to argue that the exchange itself is not front-running if it has a centralized matching engine. Binance DEX have decentralized matching engines running on every block producer and full node. This way everyone can replay the order match manually with the transactions in the latest block with the current order book and can see the order matching in real-time if they run a full node."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"This makes wash trading easily observable!"))),(0,a.kt)("h2",{id:"periodic-auction-matching"},"Periodic Auction Matching"),(0,a.kt)("p",null,'Periodic auction matching per block lowers the importance of fast orders, i.e. fast orders do not benefit from high frequency trading behaviors even when being several hundreds of milliseconds faster (which is "really long time" for traditional exchanges).\nFast orders do not bring any advantage.'),(0,a.kt)("p",null,"Periodic auction also adds a non-deterministic layer where no one can exactly know the next execution price unless he/she can exactly know all 3 things listed below:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"the matching logic"),(0,a.kt)("li",{parentName:"ol"},"the current order book and trade price from the last match"),(0,a.kt)("li",{parentName:"ol"},"all incoming orders for the next block")),(0,a.kt)("p",null,"1) and 2) may be visible to participants, especially for validators and others who closely watch the blockchain status, such as fast sync trading bots or full nodes.\nBut knowing 3) is very hard for normal market participant. Even if they run powerful ",(0,a.kt)("inlineCode",{parentName:"p"},"accelerated node"),", they still cannot know all the incoming orders for the next block. Without this knowledge, even when someone can send orders faster, they cannot do effective front-running."),(0,a.kt)("p",null,"So with the above, the usual traders and even trading bots cannot do much to front-run others."),(0,a.kt)("p",null,'You might point out, that the validators have a chance to get information of 3) when they are "proposers" for the next block, i.e. they would "propose" what transactions to add for the next block. But the Binance Chain consensus model adds some additional randomness to make it more difficult:'),(0,a.kt)("p",null,"Due to the fast matching, the bad validator have to prepare everything with earlier information in order to front-run the price. However, he cannot be too fast, because he cannot know the execution price of the last block until the last block is concluded, and the last execution price has direct impact on the execution price according to the match logic. Even more, any validator ahead of the bad validator's proposer turn can run into an issue and increase the consensus round, which would ask for re-arrangement on the proposing sequence. This makes it very hard to pre-determine the exact proposal sequence, making it so hard that the validator cannot be 100% sure when they can delay any other transactions and add their own transactions to the block earlier. Besides all of this, the bad validator cannot hold other transactions for too long: it either makes the bad behavior very observable on chain, or other validators would include the transactions anyway via P2P communication."),(0,a.kt)("p",null,"As a result, it is extremely hard to front-run anyone even while being a validator."),(0,a.kt)("h2",{id:"potential-improvement"},"Potential Improvement"),(0,a.kt)("p",null,"With the above description, you can clearly see that chance of front-running others on Binance DEX is much lower than on centralized exchanges and most of decentralized ones. However, you may still argue that for a very powerful and sophisticated validator, there is still a slim chance to front-run client orders (if they can do every difficult step very fast)."),(0,a.kt)("p",null,"In the future, deterministic randomness may be applied in selecting the next proposer among validators, and the match of orders proposed to block can be postponed into the next 2 block. These two enhancements can greatly destroy the prediction accuracy of trading price, which would push the chance of front-running to 0. The cost of this is some latency in matching."))}d.isMDXComponent=!0}}]);