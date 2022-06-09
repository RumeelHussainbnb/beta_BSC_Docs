"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[1998],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(n),h=r,f=p["".concat(c,".").concat(h)]||p[h]||u[h]||o;return n?a.createElement(f,i(i({ref:t},s),{},{components:n})):a.createElement(f,i({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},59496:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return s},default:function(){return p}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={sidebar_label:"Decentralization Further",sidebar_position:2},c="Decentralization Further",d={unversionedId:"dev-outlook/decentralization",id:"dev-outlook/decentralization",isDocsHomePage:!1,title:"Decentralization Further",description:"Candidate ValidatorSet",source:"@site/docs/dev-outlook/decentralization.md",sourceDirName:"dev-outlook",slug:"/dev-outlook/decentralization",permalink:"/docs/dev-outlook/decentralization",editUrl:"https://github.com/RumeelHussainbnb/beta_BSC_Docs/docs/dev-outlook/decentralization.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Decentralization Further",sidebar_position:2}},s=[{value:"Candidate ValidatorSet",id:"candidate-validatorset",children:[],level:2},{value:"Temporary Maintenance Mode for Validators",id:"temporary-maintenance-mode-for-validators",children:[],level:2}],u={toc:s};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"decentralization-further"},"Decentralization Further"),(0,o.kt)("h2",{id:"candidate-validatorset"},"Candidate ValidatorSet"),(0,o.kt)("p",null,"In order to decentralize the network further, more validators should be introduced. Besides increasing the anti-censorship, it always increases the robustness and availability of the network. BSC should survive even if more than half of the validator set were censored or taken down in a hostile way."),(0,o.kt)("p",null,"Meanwhile BSC has 21 active validators and many inactive validators. The inactive validators have no reward so the incentive for the runner to ensure the node quality and the delegation from the BNB holders are not enough."),(0,o.kt)("p",null,"BSC will introduce more validators, e.g. another 20 inactive validators, into the validator set as backups, which will be called \u201cCandidates\u201d."),(0,o.kt)("p",null,"Candidates will produce blocks and charge gas fees in BSC mainnet, but in a much less chance than the official validator set of 21 elected. The unavailable candidates will be slashed as well though in a smaller size. A decent motivation is expected to be maintained so that the candidate validators are willing to ensure the quality and help secure BSC."),(0,o.kt)("p",null,"In an extreme case, if a majority of the active 21 validators get attacked and offline, Candidate Validators can report to Binance Chain about the stale blocking, resume it and eventually propose a re-election of active validator set."),(0,o.kt)("h2",{id:"temporary-maintenance-mode-for-validators"},"Temporary Maintenance Mode for Validators"),(0,o.kt)("p",null,"Due to the design of \u2018Parlia\u2019 consensus, the absence of the validator, even if it is due to scheduled maintenance, will cause instability and capacity of BSC due to the extra waiting time and chain reorganization."),(0,o.kt)("p",null,"Here a \u201cTemporary maintenance\u201d mode should be introduced, which is supposed to last a few minutes to half an hour. The validator can claim to the network about its planned maintenance. Its seat will be temporarily dropped from the block producing rotation, though it will still be slashed."))}p.isMDXComponent=!0}}]);