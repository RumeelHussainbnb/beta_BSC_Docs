"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[4450],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),f=o,h=u["".concat(s,".").concat(f)]||u[f]||p[f]||a;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},80719:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={sidebar_label:"Upgrading Geth",hide_table_of_contents:!1,sidebar_position:2},s="How to Upgrade Geth",c={unversionedId:"validator/upgrade-fullnode",id:"validator/upgrade-fullnode",isDocsHomePage:!1,title:"How to Upgrade Geth",description:"Updating geth is as easy as it gets. You just need to download and install the newer version of geth, shutdown your node and restart with the new software. Geth will automatically use the data of your old node and sync the latest blocks that were mined since you shut down the old software.",source:"@site/docs/validator/upgrade-fullnode.md",sourceDirName:"validator",slug:"/validator/upgrade-fullnode",permalink:"/docs/validator/upgrade-fullnode",editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/validator/upgrade-fullnode.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Upgrading Geth",hide_table_of_contents:!1,sidebar_position:2},sidebar:"bscSideBar",previous:{title:"Local BNB Smart Chain Network",permalink:"/docs/local"},next:{title:"RPC",permalink:"/docs/rpc"}},d=[{value:"Step 1: Compile the new version",id:"step-1-compile-the-new-version",children:[],level:2},{value:"Step 2: Stop Geth",id:"step-2-stop-geth",children:[],level:2},{value:"Step 3: Restart",id:"step-3-restart",children:[],level:2}],p={toc:d};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-upgrade-geth"},"How to Upgrade Geth"),(0,a.kt)("p",null,"Updating ",(0,a.kt)("inlineCode",{parentName:"p"},"geth")," is as easy as it gets. You just need to download and install the newer version of ",(0,a.kt)("inlineCode",{parentName:"p"},"geth"),", shutdown your node and restart with the new software. Geth will automatically use the data of your old node and sync the latest blocks that were mined since you shut down the old software."),(0,a.kt)("h2",{id:"step-1-compile-the-new-version"},"Step 1: Compile the new version"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/bnb-chain/bsc\n# Enter the folder bsc was cloned into\ncd bsc\n# Comile and install bsc\nmake geth\n")),(0,a.kt)("h2",{id:"step-2-stop-geth"},"Step 2: Stop Geth"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\n$ pid=`ps -ef | grep geth | grep -v grep | awk '{print $2}'`\n\n$ kill  $pid\n\n")),(0,a.kt)("h2",{id:"step-3-restart"},"Step 3: Restart"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"## start a full node\ngeth --config ./config.toml --datadir ./node --syncmode snap\n")))}u.isMDXComponent=!0}}]);