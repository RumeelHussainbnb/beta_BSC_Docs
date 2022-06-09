"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[9943],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=a,g=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return t?r.createElement(g,o(o({ref:n},u),{},{components:t})):r.createElement(g,o({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7950:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],s={},c="Signatures",l={unversionedId:"beaconchain/learn/signature",id:"beaconchain/learn/signature",isDocsHomePage:!1,title:"Signatures",description:"Signature is the evidence to prove the sender owns the transaction. It will be created from the actions outlined below:",source:"@site/docs/beaconchain/learn/signature.md",sourceDirName:"beaconchain/learn",slug:"/beaconchain/learn/signature",permalink:"/docs/beaconchain/learn/signature",editUrl:"https://github.com/RumeelHussainbnb/beta_BSC_Docs/docs/beaconchain/learn/signature.md",tags:[],version:"current",frontMatter:{},sidebar:"bscSideBar",previous:{title:"Genesis File",permalink:"/docs/beaconchain/learn/genesis"},next:{title:"Transaction Encoding Specification",permalink:"/docs/encoding"}},u=[],p={toc:u};function d(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"signatures"},"Signatures"),(0,i.kt)("p",null,"Signature is the evidence to prove the sender owns the transaction. It will be created from the actions outlined below:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Compose a data structure. please note ",(0,i.kt)("inlineCode",{parentName:"p"},"msgs"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"memo"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"source"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," are the same as in the above ",(0,i.kt)("inlineCode",{parentName:"p"},"payload"),"."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"- `chain_id`: a string, unique ID for the Chain, it stays the same for most time, but may vary as Beacon Chain  evolves;\n- `account_number`: a string for a 64-bit integer, an identifier number associated with the signing address\n- `sequence`: a string for a a 64-bit integer, please check [accounts](/docs/beaconchain/learn/accounts)\n- `memo`: a string, a short sentence of remark for the transaction\n- `msgs`: a byte array, **json encoded** transaction messages, please check the [encoding](/docs/beaconchain/learn/encoding/encoding) doc.\n- `source`: a string for a 64 bits integer, which is an identifier for transaction incoming tools\n- `data`: byte array, reserved for future use\n")),(0,i.kt)("p",{parentName:"li"}," Here is an example in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/go-sdk/blob/master/types/tx/stdsign.go#L22"},"go-sdk"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-golang"},'// StdSignMsg def\ntype StdSignMsg struct {\n    ChainID       string    `json:"chain_id"`\n    AccountNumber int64     `json:"account_number"`\n    Sequence      int64     `json:"sequence"`\n    Msgs          []msg.Msg `json:"msgs"`\n    Memo          string    `json:"memo"`\n    Source        int64     `json:"source"`\n    Data          []byte    `json:"data"`\n}\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Encode the above data structure in json, with ordered key, Specifically:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Maps have their keys sorted lexicographically"),(0,i.kt)("li",{parentName:"ul"},"Structs keys are marshalled in the order defined in the struct")))),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Sign SHA256 of the encoded byte array, to create an ECDSA signature on curve Secp256k1 and serialize the ",(0,i.kt)("inlineCode",{parentName:"li"},"R")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"S")," result into a 64-byte array. (both ",(0,i.kt)("inlineCode",{parentName:"li"},"R")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"S")," are encoded into 32-byte big endian integers, and then ",(0,i.kt)("inlineCode",{parentName:"li"},"R")," is put into the first 32 bytes and ",(0,i.kt)("inlineCode",{parentName:"li"},"S")," are put into the last 32 bytes of the byte array. In order to break ",(0,i.kt)("inlineCode",{parentName:"li"},"S")," 's malleability, ",(0,i.kt)("inlineCode",{parentName:"li"},"S")," set to ",(0,i.kt)("inlineCode",{parentName:"li"},"curve.Order() - S")," if ",(0,i.kt)("inlineCode",{parentName:"li"},"S > curnve.Order()/2"),".)")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"signature")," will be encoded together with transaction message and sent as ",(0,i.kt)("inlineCode",{parentName:"p"},"payload")," to Beacon Chain  node via RPC or http REST API, as described in the above section."))}d.isMDXComponent=!0}}]);