"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[6408],{3905:function(e,t,r){r.d(t,{Zo:function(){return h},kt:function(){return p}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},h=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),u=d(r),p=a,m=u["".concat(c,".").concat(p)]||u[p]||s[p]||i;return r?n.createElement(m,o(o({ref:t},h),{},{components:r})):n.createElement(m,o({ref:t},h))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},74694:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return h},default:function(){return u}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],l={},c="What exactly is Binance DEX matching logic?",d={unversionedId:"beaconchain/match",id:"beaconchain/match",isDocsHomePage:!1,title:"What exactly is Binance DEX matching logic?",description:"Binance DEX uses periodic auction to match all available orders. Maker/Taker concepts are introduced to enhance the current periodic auction match algorithm. The match is still executed only once in each block while the execution prices may vary for maker and taker orders.",source:"@site/docs/beaconchain/match.md",sourceDirName:"beaconchain",slug:"/beaconchain/match",permalink:"/docs/beaconchain/match",editUrl:"https://github.com/RumeelHussainbnb/beta_BSC_Docs/blob/master/docs/docs/beaconchain/match.md",tags:[],version:"current",frontMatter:{}},h=[{value:"Match Candidates",id:"match-candidates",children:[],level:2},{value:"Match Time",id:"match-time",children:[],level:2},{value:"Match Logic",id:"match-logic",children:[],level:2},{value:"Conclude Execution Price",id:"conclude-execution-price",children:[],level:2},{value:"Order Matches",id:"order-matches",children:[{value:"Definition of Maker and Taker",id:"definition-of-maker-and-taker",children:[],level:3},{value:"Execution Pricing",id:"execution-pricing",children:[],level:3}],level:2}],s={toc:h};function u(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"what-exactly-is-binance-dex-matching-logic"},"What exactly is Binance DEX matching logic?"),(0,i.kt)("p",null,"Binance DEX uses periodic auction to match all available orders. Maker/Taker concepts are introduced to enhance the current periodic auction match algorithm. The match is still executed only once in each block while the execution prices may vary for maker and taker orders."),(0,i.kt)("h2",{id:"match-candidates"},"Match Candidates"),(0,i.kt)("p",null,"Orders meet any of the below conditions would be considered as the candidates of next match round:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"New orders that come in just now and get confirmed by being accepted into the latest block"),(0,i.kt)("li",{parentName:"ul"},"Existing orders that come in the past blocks before the latest, and have not been filled or expired")),(0,i.kt)("h2",{id:"match-time"},"Match Time"),(0,i.kt)("p",null,"Candidates would be matched right after one block is committed. Each block has one round of match."),(0,i.kt)("h2",{id:"match-logic"},"Match Logic"),(0,i.kt)("p",null,"The below matching logic would be applied on every listed token pairs."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The match only happens when the best bid and ask prices are 'crossed', i.e. best bid > best ask.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"There would be only 1 price selected in one match round as the best prices among all the fillable\norders, to show the fairness.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"All the orders would be matched first by the price aggressiveness and then block height that they get accepted."))),(0,i.kt)("h2",{id:"conclude-execution-price"},"Conclude Execution Price"),(0,i.kt)("p",null,"The execution price would be selected as the below logic, in order to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Maximize the execution quantity"),(0,i.kt)("li",{parentName:"ul"},"Execute all orders or at least all orders on one side that are fillable against the selected price."),(0,i.kt)("li",{parentName:"ul"},"Indicate the market pressure from either buy or sell and also consider to limit the max price movement. Let\u2019s call this concluded price P.")),(0,i.kt)("p",null,"Please check ",(0,i.kt)("a",{parentName:"p",href:"/docs/beaconchain/match-examples"},"this article")," with detailed examples for this if you are interested."),(0,i.kt)("h2",{id:"order-matches"},"Order Matches"),(0,i.kt)("p",null,"After the execution price is concluded. Order match would happen in sequence of the price and time, i.e."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Orders with best bid price would match with order with best ask price;"),(0,i.kt)("li",{parentName:"ul"},"If the orders on one price cannot be fully filled by the opposite orders:\nfor the orders with the same price, the orders from the earlier blocks would be selected and filled first"),(0,i.kt)("li",{parentName:"ul"},"If the orders have the same price and block height, and cannot be fully filled, the execution\nwould be allocated to each order in proportion to their quantity (floored if the number has a partial lot).\nIf the allocation cannot be accurately divided, a deterministic algorithm would guarantee that no consistent\nbias to any orders.")),(0,i.kt)("p",null,"After the execution price ",(0,i.kt)("inlineCode",{parentName:"p"},"P")," is concluded, buy orders with price equal to or larger than ",(0,i.kt)("inlineCode",{parentName:"p"},"P"),", and sell orders with price equal to or less than ",(0,i.kt)("inlineCode",{parentName:"p"},"P")," will match. For the orders that come into match in the new block, the trades will be allocated according to the below principles:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'All new incoming buy orders into this current block (called "new orders" in this context) will get executed with the same price, so do all the sell orders; so that there is no chance for front-running on the same side.'),(0,i.kt)("li",{parentName:"ul"},"All the executed price will honor the order limit price;"),(0,i.kt)("li",{parentName:"ul"},"All the executed price for the new orders will be equal to or better than the concluded auction price ",(0,i.kt)("inlineCode",{parentName:"li"},"P"),", so no front-running from the opposite side.")),(0,i.kt)("p",null,'For other orders that have arrived in the previous blocks, they will join match together with the new orders from the new block, and be considered as "Maker" role. The detailed explanation of ',(0,i.kt)("inlineCode",{parentName:"p"},"Maker/Taker")," is as below:"),(0,i.kt)("h3",{id:"definition-of-maker-and-taker"},"Definition of Maker and Taker"),(0,i.kt)("p",null,"Among all the orders to be allocated, between buy and sell sides, this specification defines four concepts."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Maker Order"),(0,i.kt)("td",{parentName:"tr",align:null},"order from the previous blocks")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Taker Order"),(0,i.kt)("td",{parentName:"tr",align:null},"new incoming order in the current block")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Maker Side"),(0,i.kt)("td",{parentName:"tr",align:null},"buy or sell side which has maker orders. May also have taker orders.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Taker Side"),(0,i.kt)("td",{parentName:"tr",align:null},"buy or sell side which only has taker orders.")))),(0,i.kt)("p",null,"In each round of match, for all the orders that can be filled with the concluded price ",(0,i.kt)("inlineCode",{parentName:"p"},"P"),", the algorithm ensures only one of the below two circumstances can happen,"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Both buy and sell side are ",(0,i.kt)("inlineCode",{parentName:"p"},"Taker Side"),", when there is no leftover orders from all the previous blocks;")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"One side is ",(0,i.kt)("inlineCode",{parentName:"p"},"Maker Side")," that has orders from previous blocks (and may/may not have orders from this current block),  and the other is ",(0,i.kt)("inlineCode",{parentName:"p"},"Taker Side")," that only has orders from this current block."))),(0,i.kt)("h3",{id:"execution-pricing"},"Execution Pricing"),(0,i.kt)("p",null,"Among all the orders to be allocated,"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"For maker side:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"all the maker orders are executed at their limit price"),(0,i.kt)("li",{parentName:"ul"},"all the taker orders on the maker side are executed at the concluded price ",(0,i.kt)("inlineCode",{parentName:"li"},"P")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"For taker side, all the orders are executed at the average execution price from the above #1"))),(0,i.kt)("p",null,"If no maker side in this match, all the orders are executed at price ",(0,i.kt)("inlineCode",{parentName:"p"},"P"),"."))}u.isMDXComponent=!0}}]);