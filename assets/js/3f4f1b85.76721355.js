"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[2182],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return c}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(a),c=r,h=m["".concat(d,".").concat(c)]||m[c]||p[c]||i;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},61877:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),l=["components"],o={},d="Unjail",s={unversionedId:"validator/unjail",id:"validator/unjail",isDocsHomePage:!1,title:"Unjail",description:"Jailed validator nodes due to their malicious or bad behavior, may request for release by sending side-unjail transactions provided they passed initial validation. After release, to re-join the validator set again, the validator must wait for the following UTC 0:00. The fees to unjail a smart contract validator is 1 BNB_**. Whereas, the fee for submitting a byzantine behavior evidence of a validator is 10 BNB_**.",source:"@site/docs/validator/unjail.md",sourceDirName:"validator",slug:"/validator/unjail",permalink:"/docs/validator/unjail",editUrl:"https://github.com/RumeelHussainbnb/beta_BSC_Docs/blob/master/docs/validator/unjail.md",tags:[],version:"current",frontMatter:{},sidebar:"bscSideBar",previous:{title:"Slashing Fee",permalink:"/docs/validator/slash-fee"},next:{title:"Monitoring and Querying Slashing Events",permalink:"/docs/validator/monitor-and-query-slash"}},u=[{value:"Transaction Validation",id:"transaction-validation",children:[],level:2},{value:"Fee Table",id:"fee-table",children:[],level:2},{value:"Command to get Unjailed",id:"command-to-get-unjailed",children:[{value:"Example",id:"example",children:[],level:3}],level:2}],p={toc:u};function m(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"unjail"},"Unjail"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Jailed")," validator nodes due to their malicious or bad behavior, may request for release by sending ",(0,i.kt)("inlineCode",{parentName:"p"},"side-unjail transactions")," provided they passed initial validation. After release, to re-join the validator set again, the validator must wait for the following ",(0,i.kt)("inlineCode",{parentName:"p"},"UTC 0:00"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"fees to unjail")," a smart contract validator is ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"1 BNB")),". Whereas, the fee for submitting a byzantine behavior evidence of a validator is ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"10 BNB")),"."),(0,i.kt)("h2",{id:"transaction-validation"},"Transaction Validation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Validator address must not be empty."),(0,i.kt)("li",{parentName:"ul"},"The side chain id exists."),(0,i.kt)("li",{parentName:"ul"},"Self-delegation of the validator exists and must be greater than the min-self-delegation setting by ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"10,000 BNB")),"."),(0,i.kt)("li",{parentName:"ul"},"Requestor is in 'jailed' state when requesting to be un-jailed."),(0,i.kt)("li",{parentName:"ul"},"Complete the required jailed term.")),(0,i.kt)("h2",{id:"fee-table"},"Fee Table"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Transaction Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Pay in BNB"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Unjail A Smart Chain Validator"),(0,i.kt)("td",{parentName:"tr",align:null},"1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Submit Byzaitine Behavior Evidence of A Smart Chain Validator"),(0,i.kt)("td",{parentName:"tr",align:null},"10")))),(0,i.kt)("h2",{id:"command-to-get-unjailed"},"Command to get Unjailed"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"bnbcli slashing side-unjail \n\\--from= {this address has to be the operator address of the validator to be unjailed.\n          Name or address of private key with which to sign}\n \\--side-chain-id= {chain-id of the side chain the validator belongs to} \n \\--chain-id= {the chain id of binance chain}\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Parameter Name")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Example")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Explanation")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Required")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"--chan-id"),(0,i.kt)("td",{parentName:"tr",align:null},"Binance-Chain-XXX"),(0,i.kt)("td",{parentName:"tr",align:null},"the chain id of binance  chain"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"--from"),(0,i.kt)("td",{parentName:"tr",align:null},"bnb19awsmku5ch689lp0rj0c6su7x0n5wxhjm65hdd"),(0,i.kt)("td",{parentName:"tr",align:null},"This address has to be  the operator address of the validator to be unjailed. Name or address of  private key with which to sign."),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"--side-chain-id"),(0,i.kt)("td",{parentName:"tr",align:null},"BSC-XXX"),(0,i.kt)("td",{parentName:"tr",align:null},"chain-id of the side  chain the validator belongs to"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"bnbcli slashing side-unjail \\--from bnb19awsmku5ch689lp0rj0c6su7x0n5wxhjm65hdd \\--side-chain-id=bsc \\--chain-id=Binance-Chain-Tigris \\--home \\~/home\\_cli\n")))}m.isMDXComponent=!0}}]);