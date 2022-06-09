"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[3268],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return k}});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var i=r.createContext({}),p=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=p(t.components);return r.createElement(i.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,i=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),m=p(n),k=o,b=m["".concat(i,".").concat(k)]||m[k]||u[k]||a;return n?r.createElement(b,l(l({ref:e},s),{},{components:n})):r.createElement(b,l({ref:e},s))}));function k(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,l=new Array(a);l[0]=m;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c.mdxType="string"==typeof t?t:o,l[1]=c;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},72690:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),l=["components"],c={sidebar_label:"Issue BEP20 Tokens",sidebar_position:2},i="Issue BEP20 Tokens",p={unversionedId:"issue-BEP20",id:"issue-BEP20",isDocsHomePage:!1,title:"Issue BEP20 Tokens",description:"Compile and Deploy BEP20 Contract",source:"@site/docs/issue-BEP20.md",sourceDirName:".",slug:"/issue-BEP20",permalink:"/docs/issue-BEP20",editUrl:"https://github.com/RumeelHussainbnb/beta_BSC_Docs/docs/issue-BEP20.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Issue BEP20 Tokens",sidebar_position:2},sidebar:"bscSideBar",previous:{title:"Introduction",permalink:"/docs/BEP20"},next:{title:"Cross-chain Token Management",permalink:"/docs/tokens-cross-chain"}},s=[],u={toc:s};function m(t){var e=t.components,c=(0,o.Z)(t,l);return(0,a.kt)("wrapper",(0,r.Z)({},u,c,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"issue-bep20-tokens"},"Issue BEP20 Tokens"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Compile and Deploy BEP20 Contract")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open Remix IDE: ",(0,a.kt)("a",{parentName:"li",href:"https://remix.ethereum.org/"},"https://remix.ethereum.org"))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://lh6.googleusercontent.com/zwki3hgBILOzXHtayDLvNCrmOXv6LTUQAIG02lRkOtzOtNJsUbIBXB7LUoN6RF8PbvkUGcRuLCA36I_RdqJCQVrfeZpwfbpfwlN7R0s3fJGMSTdMT8y56ngL3qCocUPW65UJ2bQZ",alt:"img"})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Select solidity language")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/aLlINgoy2Luj45ZKVxPTExUS4I2QoX3WHzmLbO7_CJHQiL3plGvx0iCaI2YTGE8QmnhytN-HDOPvhGixQ7utrA_o9UJJVaujmQ5yj7ET8ju12Jh0luVtZHgpLGmOx9LUoFnzu2Eg",alt:"img"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Create new contract BEP20Token.sol and copy contract code from the bep20 token template ",(0,a.kt)("a",{target:"_blank",href:n(14033).Z},"here"))),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Modify \u201cname\u201d, \u201csymbol\u201d, \u201cdecimals\u201d and \u201ctotalSupply\u201d according to your requirements.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://lh4.googleusercontent.com/hgxDh_hXCFKwwlkAYG6h9qfxvzyeeD3k-t3tNBD-VSvwTtM4AnaFylZ6SjSmfTKCuIqhs66Z9vi7mRplIfN5ER7n1yMz0EKpO_RDOcTQTrsh5R1DC0doVC7FT05Hu2bboM2o57Qg",alt:"img"})),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Compile the BEP20 token contract")),(0,a.kt)("p",null,"a. Step1: Click button to switch to compile page"),(0,a.kt)("p",null,"b. Step2: Select \u201cBEP20Token\u201d contract"),(0,a.kt)("p",null,"c. Step3: Enable \u201cAuto compile\u201d and \u201coptimization\u201d"),(0,a.kt)("p",null,"d. Step4: Click \u201cABI\u201d to copy the contract abi and save it."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://lh6.googleusercontent.com/qY_5g3ZMnJca6n84W2JxIoBvd8iHRQ0qkOQuJ60pRIcKvgZB5-bXcGq6gS7dFwA5rYXbiS2NyaUQ1Qptcagqa0pb7kmq_S-Dh8drA4R-hDg9_NVp1zPl-tmqIDanlcgLibaR3CV7",alt:"img"})),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"Deploy the contract to BSC")),(0,a.kt)("p",null,"a. Step1: Click button to switch to compile button."),(0,a.kt)("p",null,"b. Step2: Select \u201cInjected Web3\u201d"),(0,a.kt)("p",null,"c. Step3: Select \u201cBEP20Token\u201d"),(0,a.kt)("p",null,"d. Step4: Client \u201cDeploy\u201d button and Metamask will pop up"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://lh5.googleusercontent.com/lsWXpUN12iRTzMSJZpb8HFBL2ycH7JVPlrMqlK7aLOl4zLanqlp-3UHbranHk__tugeqWfnjg1k_2_0VnZlzJkJucJw3R-JDoxP84rAPWOJc1Oi5dgJZA3wRzyjwxKiy_6BdcBMb",alt:"img"})),(0,a.kt)("p",null,"e.   Client \u201cconfirm\u201d button to sign and broadcast transaction to BSC."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://lh4.googleusercontent.com/9awuDudNSuUOZDQAlW5FPZ5SbRkWsKPlJSYWGUL7R4raJ5o2mprRP7jt87hP_wbuYeoJy75ErwDcKVC7_spf8YkumCkwOP4Eak9SfcV6dZvyVhy84JqKfVUvmEeLw5mWEZ3-aCED",alt:"img"})))}m.isMDXComponent=!0},14033:function(t,e,n){e.Z=n.p+"assets/files/BEP20Token-90279eb8ba08bbc0df679f37d7886d68.template"}}]);