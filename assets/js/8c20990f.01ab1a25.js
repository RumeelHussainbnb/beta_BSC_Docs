"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[859],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return f}});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=d(a),f=l,p=u["".concat(s,".").concat(f)]||u[f]||h[f]||o;return a?n.createElement(p,i(i({ref:t},c),{},{components:a})):n.createElement(p,i({ref:t},c))}));function f(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=a.length,i=new Array(o);i[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:l,i[1]=r;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},93406:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var n=a(87462),l=a(63366),o=(a(67294),a(3905)),i=["components"],r={sidebar_label:"Slashing Fee",hide_table_of_contents:!1,sidebar_position:2},s="Slashing Fee and Evidence Validation",d={unversionedId:"validator/slash-fee",id:"validator/slash-fee",isDocsHomePage:!1,title:"Slashing Fee and Evidence Validation",description:"Double Sign",source:"@site/docs/validator/slash-fee.md",sourceDirName:"validator",slug:"/validator/slash-fee",permalink:"/docs/validator/slash-fee",editUrl:"https://github.com/RumeelHussainbnb/beta_BSC_Docs/blob/master/docs/docs/validator/slash-fee.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Slashing Fee",hide_table_of_contents:!1,sidebar_position:2},sidebar:"bscSideBar",previous:{title:"Scenarios for Slashing",permalink:"/docs/validator/scenarios-slash"},next:{title:"Unjail",permalink:"/docs/validator/unjail"}},c=[{value:"Double Sign",id:"double-sign",children:[{value:"Evidence Validation",id:"evidence-validation",children:[],level:3}],level:2},{value:"Unavailability",id:"unavailability",children:[],level:2}],h={toc:c};function u(e){var t=e.components,a=(0,l.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"slashing-fee-and-evidence-validation"},"Slashing Fee and Evidence Validation"),(0,o.kt)("h2",{id:"double-sign"},"Double Sign"),(0,o.kt)("p",null,"Anyone can submit a slash request on BC with the evidence of Double Sign of BSC"),(0,o.kt)("h3",{id:"evidence-validation"},"Evidence Validation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Two block headers have the same height and the same parent block hash"),(0,o.kt)("li",{parentName:"ul"},"Two block headers are sealed by the same validator"),(0,o.kt)("li",{parentName:"ul"},"Two signatures of these two blocks must not be the same"),(0,o.kt)("li",{parentName:"ul"},"The time of these two blocks must be within the validity of the evidence, which is 24 hours")),(0,o.kt)("p",null,"If the evidence is valid:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"1000BNB would be slashed from the ",(0,o.kt)("strong",{parentName:"li"},"self-delegated")," BNB of the validator"),(0,o.kt)("li",{parentName:"ol"},"If the self-delegator\u2019s stake amount on the validator is less than 1000BNB, then the unbonding delegation balance would be slashed if it exists until totally 1000BNB slashed from self-delegator of the validator. However, if all the slashed BNB is less than 1000, all the remaining stake of the self-delegator will be slashed"),(0,o.kt)("li",{parentName:"ol"},"100 of slashed BNB would allocate to the submitter as a reward"),(0,o.kt)("li",{parentName:"ol"},"The rest of slashed BNB will allocate to the custody addresses of which validators would take part in the next distribution. If no matched validators found, then the rest of slashed BNB will allocate to validators on BC as block fee"),(0,o.kt)("li",{parentName:"ol"},"Set the validator \u2018jailed\u2019 with a duration of 7 days, and remove it from validator set by an instance BSC validator set update Cross-Chain update")),(0,o.kt)("h2",{id:"unavailability"},"Unavailability"),(0,o.kt)("p",null,"There can be an internal smart contract responsible for recording the missed blocking metrics of each validator."),(0,o.kt)("p",null,"If a validator missed more than 50 blocks in 24h, the blocking reward for the validator will not be relayed to BC for distribution but shared with other better validators. If it missed more than 150 blocks in 24h, then this will be propagated back to BC where another Slashing will happen:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"50BNB would be slashed from the  ",(0,o.kt)("strong",{parentName:"li"},"self-delegated")," BNB of the validator"),(0,o.kt)("li",{parentName:"ol"},"If the self-delegator\u2019s stake amount on the validator is less than 50BNB, then the unbonding delegation balance would be slashed if it exists until totally 50BNB slashed from self-delegator of the validator. However, if all the slashed BNB is less than 1000, all the remaining stake of the self-delegator will be slashed"),(0,o.kt)("li",{parentName:"ol"},"10 of slashed BNB would allocate to the validators on BC as block fee"),(0,o.kt)("li",{parentName:"ol"},"The rest of slashed BNB will allocate to the custody addresses of which validators would take part in the next distribution. If no matched validators found, then the rest of slashed BNB will allocate to validators on BC as block fee"),(0,o.kt)("li",{parentName:"ol"},"Set the validator \u2018jailed\u2019 with a duration of 2 days, and remove it from validator set by an instance BSC validator set update Cross-Chain update")))}u.isMDXComponent=!0}}]);