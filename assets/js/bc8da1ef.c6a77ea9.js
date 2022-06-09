"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[5074],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=c(n),m=a,f=h["".concat(o,".").concat(m)]||h[m]||u[m]||i;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=h;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},90331:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return p},default:function(){return h}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),s=["components"],l={},o="Match Steps and Examples",c={unversionedId:"beaconchain/match-examples",id:"beaconchain/match-examples",isDocsHomePage:!1,title:"Match Steps and Examples",description:"Match Steps",source:"@site/docs/beaconchain/match-examples.md",sourceDirName:"beaconchain",slug:"/beaconchain/match-examples",permalink:"/docs/beaconchain/match-examples",editUrl:"https://github.com/RumeelHussainbnb/beta_BSC_Docs/blob/master/docs/beaconchain/match-examples.md",tags:[],version:"current",frontMatter:{}},p=[{value:"Match Steps",id:"match-steps",children:[],level:2},{value:"Examples",id:"examples",children:[],level:2}],u={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"match-steps-and-examples"},"Match Steps and Examples"),(0,i.kt)("h2",{id:"match-steps"},"Match Steps"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step 0: no match for one side market, or market without crossed order book")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step 1: Maximum matched volume. The Equilibrium Price (EP) should be the price at which the maximum\nvolume can be traded. In the case of more than one price level with the same executable volume,\nthe algorithm should go to step 2")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step 2: Minimum surplus. In the case of more than one price level with the same maximum executable\nvolume, the EP should be the price with the lowest surplus (imbalance) volume. The surplus is\nabsolute leftover volume at the EP. If multiple surplus amounts have the same lowest value, precede to step 3.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step 3: Market Pressure. If multiple prices satisfy 1 and 2, establish where market pressure of the potential\nprice exists. Surplus with a positive sign indicates buy side pressure while surplus with a negative\nsign indicates sell side pressure."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"- For scenarios that all the the equivalent surplus amounts are positive, if all the prices are\nbelow the reference price plus an upper limit percentage (e.g. 5%), then algorithm uses the highest\nof the potential equilibrium prices. If all the prices are above the reference price plus an upper\nlimit, use the lowest price; for other cases, use the reference price plus the upper limit.\n- Conversely, if market pressure is on the sell side, if all prices are above the reference price\nminus a lower percentage limit, then the algorithm uses the lowest of the potential prices.\nIf all the price are below the reference price minus the lower percentage limit, use the highest\nprice, otherwise use the reference price minus the lower percentage limit.\n\nIf both positive and negative surplus amounts exist, precede to Step 4.\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step 4: When both positive and negative surplus amounts exists at the lowest, if the\nreference price falls at / into these prices, the reference price should be chose, otherwise\nthe price closest to the reference price would be chosen."))),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"The chosen price level row would have ",(0,i.kt)("inlineCode",{parentName:"p"},"*")," on the deciding colume."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"1. Choose the largest execution (Step 1)\n-------------------------------------------------------------\nSUM    SELL    PRICE    BUY    SUM    EXECUTION    IMBALANCE\n300            100      150    150    150          -150\n300            99              150    150          -150\n300    250     98       150    300    300*         0\n50     50      97              300    50           250\n\n2. Choose the largest execution (Step 1)\n--------------------------------------------------------------\nSUM    SELL    PRICE    BUY    SUM    EXECUTION    IMBALANCE\n300            100      150    150    150          -150\n300            99       50     200    200          -100\n300            98              200    200          -100\n300    200     97       300    500    300*         200\n100    100     96              500    100          400\n\n\n3. the least abs surplus imbalance (Step 2)\n--------------------------------------------------------------\nSUM    SELL    PRICE    BUY    SUM    EXECUTION    IMBALANCE\n1500           102      300    300    300          -1200\n1500           101             300    300          -1200\n1500           100      100    400    400          -1100\n1500           99       200    600    600          -900\n1500   250     98       300    900    900          -600\n1250   250     97              900    900          -350\n1000   1000    96              900    900          -100*\n\n4. the least abs surplus imbalance (Step 2)\n--------------------------------------------------------------\nSUM    SELL    PRICE    BUY    SUM    EXECUTION    IMBALANCE\n110            102      30     30     30           -80\n110            101      10     40     40           -70\n110            100             40     40           -70\n110            99       50     90     90           -20\n110    10      98              90     90           -20\n100    50      97              90     90           -10*\n50             96       15     105    50           55\n50     50      95              105    50           55\n\n5.1 choose the lowest for all the same value of sell surplus imbalance, reference price is 80\nand 5% lower limit (Step 3)\n--------------------------------------------------------------\nSUM    SELL    PRICE    BUY    SUM    EXECUTION    IMBALANCE\n50             102      10     10     10           -40\n50             101             10     10           -40\n50             100             10     10           -40\n50             99              10     10           -40\n50             98              10     10           -40\n50             97       10     20     20           -30\n50             96              20     20           -30\n50     50      95              20     20           -30*\n\n5.2 choose the highest for all the same value of sell surplus imbalance, reference price is 100\nand 5% lower limit (Step 3)\n--------------------------------------------------------------\nSUM    SELL    PRICE    BUY    SUM    EXECUTION    IMBALANCE\n50             99       10     10     10           -40\n50             98              10     10           -40\n50             97              10     10           -40\n50             96              10     10           -40\n50             95              10     10           -40\n50             94       10     20     20           -30*\n50             93              20     20           -30\n50     50      92              20     20           -30\n\n5.3 choose the reference price for all the same value of buy surplus imbalance, reference price is 90\nand 5% upper limit (Step 3)\n--------------------------------------------------------------\nSUM    SELL    PRICE    BUY    SUM    EXECUTION    IMBALANCE\n50             99       100    100    50           50\n50             98              100    50           50\n50             97              100    50           50\n50             96              100    50           50\n50             95              100    50           50*\n50             94              100    50           50\n50             93              100    50           50\n50     50      92              100    50           50\n\n5.4 choose the reference price for all the same value of sell surplus imbalance, reference price is 100\nand 5% lower limit (Step 3)\n--------------------------------------------------------------\nSUM    SELL    PRICE    BUY    SUM    EXECUTION    IMBALANCE\n50             101      10     10     10           -40\n50             100             10     10           -40\n50             99              10     10           -40\n50             98              10     10           -40\n50             97              10     10           -40\n50             96       10     20     20           -30\n50             95              20     20           -30*\n50     50      94              20     20           -30\n\n6.1 choose the closest to the last trade price 99 (Step 4)\n--------------------------------------------------------------\nSUM    SELL    PRICE    BUY    SUM    EXECUTION    IMBALANCE\n50             100      25     25     25           -25\n50             99              25     25           -25*\n50     25      98              25     25           -25\n25             97       25     50     25           25\n25             96              50     25           25\n25     25      95              50     25           25\n\n6.2 choose the closest to the last trade price 97 (Step 4)\n--------------------------------------------------------------\nSUM    SELL    PRICE    BUY    SUM    EXECUTION    IMBALANCE\n50             100      25     25     25           -25\n50             99              25     25           -25\n50     25      98              25     25           -25\n25             97       25     50     25           25*\n25             96              50     25           25\n25     25      95              50     25           25\n\n")))}h.isMDXComponent=!0}}]);