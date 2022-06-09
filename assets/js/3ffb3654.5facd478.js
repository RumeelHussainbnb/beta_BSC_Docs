"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[4117],{3905:function(e,t,o){o.d(t,{Zo:function(){return s},kt:function(){return d}});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(o),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||r;return o?n.createElement(f,l(l({ref:t},s),{},{components:o})):n.createElement(f,l({ref:t},s))}));function d(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,l=new Array(r);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<r;p++)l[p]=o[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},3004:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var n=o(87462),a=o(63366),r=(o(67294),o(3905)),l=["components"],i={sidebar_label:"Verify Proxy Contracts",hide_table_of_contents:!1,sidebar_position:2},c="How to Verify Proxy Contract",p={unversionedId:"verify-proxy",id:"verify-proxy",isDocsHomePage:!1,title:"How to Verify Proxy Contract",description:"In this section, we provide a quick guide on how to verify a deployed BEP20 proxy contract.",source:"@site/docs/verify-proxy.md",sourceDirName:".",slug:"/verify-proxy",permalink:"/docs/verify-proxy",editUrl:"https://github.com/RumeelHussainbnb/beta_BSC_Docs/blob/master/docs/verify-proxy.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Verify Proxy Contracts",hide_table_of_contents:!1,sidebar_position:2},sidebar:"bscSideBar",previous:{title:"Upgradable BEP20 Contracts on BSC",permalink:"/docs/proxy"},next:{title:"BSC Relayer Guides",permalink:"/docs/bsc-relayer"}},s=[{value:"Flatten your contract",id:"flatten-your-contract",children:[{value:"Install flattener",id:"install-flattener",children:[],level:3}],level:2},{value:"Compile and deploy your contract with Remix",id:"compile-and-deploy-your-contract-with-remix",children:[{value:"Compile Implementation contract",id:"compile-implementation-contract",children:[],level:3},{value:"Deploy the implementation contract",id:"deploy-the-implementation-contract",children:[],level:3}],level:2},{value:"Compile Proxy Contract",id:"compile-proxy-contract",children:[{value:"Deploy the proxy contract",id:"deploy-the-proxy-contract",children:[],level:3}],level:2},{value:"Verify Proxy Contract on BscScan",id:"verify-proxy-contract-on-bscscan",children:[],level:2},{value:"Link these two contracts",id:"link-these-two-contracts",children:[],level:2}],u={toc:s};function m(e){var t=e.components,o=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-verify-proxy-contract"},"How to Verify Proxy Contract"),(0,r.kt)("p",null,"In this section, we provide a quick guide on how to verify a deployed BEP20 proxy contract."),(0,r.kt)("h2",{id:"flatten-your-contract"},"Flatten your contract"),(0,r.kt)("h3",{id:"install-flattener"},"Install flattener"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm install truffle-flattener -g\n")),(0,r.kt)("p",null,"Run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ truffle-flattener BEP20TokenImplementation.sol > BEP20TokenImplementationFlattened.sol\n$ truffle-flattener BEP20UpgradeableProxy.sol > BEP20UpgradeableProxyFlattened.sol"\n')),(0,r.kt)("h2",{id:"compile-and-deploy-your-contract-with-remix"},"Compile and deploy your contract with Remix"),(0,r.kt)("h3",{id:"compile-implementation-contract"},"Compile Implementation contract"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open Remix IDE: ",(0,r.kt)("a",{parentName:"li",href:"https://remix.ethereum.org/"},"https://remix.ethereum.org")),(0,r.kt)("li",{parentName:"ul"},"Select solidity language"),(0,r.kt)("li",{parentName:"ul"},"Create new contract ",(0,r.kt)("inlineCode",{parentName:"li"},"BEP20Token.sol")," and copy contract code from flattened ",(0,r.kt)("inlineCode",{parentName:"li"},"BEP20TokenImplementationFlattened.sol")),(0,r.kt)("li",{parentName:"ul"},"Compile the implementation contract"),(0,r.kt)("li",{parentName:"ul"},"Click on this button to switch to the compile page",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Select \u201cBEP20TokenImplementation\u201d contract"),(0,r.kt)("li",{parentName:"ul"},"Enable \u201cAuto compile\u201d and \u201coptimization\u201d"),(0,r.kt)("li",{parentName:"ul"},"Click \u201cABI\u201d to copy the contract abi and save it.")))),(0,r.kt)("h3",{id:"deploy-the-implementation-contract"},"Deploy the implementation contract"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Select \u201cInjected Web3\u201d"),(0,r.kt)("li",{parentName:"ul"},"Select \u201cBEP20TokenImplementation\u201d contract"),(0,r.kt)("li",{parentName:"ul"},"Click the \u201cDeploy\u201d button and Metamask will pop up"),(0,r.kt)("li",{parentName:"ul"},"Click the \u201cconfirm\u201d button to sign and broadcast the transaction to BSC."),(0,r.kt)("li",{parentName:"ul"},"Then, you need to initialize the token: fill in all the parameters and click on \u201ctransact\u201d")),(0,r.kt)("img",{src:"https://lh3.googleusercontent.com/SjMHLYY9A1LtFXJFc2gtIOL_lEzZk--eiJyNspL-8qfDvkfNYGAgGKvodCo0-Pfp3UhmrPGUc4oOpFFuDBzYhLxqN3-LIAW7BRKdeoiPdYuJMep0hT67ifNw0i33DzVXNfzPjwZi",alt:"img",style:{zoom:"50%"}}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: ",(0,r.kt)("inlineCode",{parentName:"p"},"Owner")," should be the address who send the deploy transaction before.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click on the \u201cCopy\u201d icon to save the initializatioin data: Like the following: ```")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"0xef3ebcb800000000000000000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000001200000000000000000000000000000000000000000000000000000000000f42400000000000000000000000000000000000000000000000000000000000000001000000000000000000000000fc41d5571120442d1bb82cea0884966e543cb78b000000000000000000000000000000000000000000000000000000000000000548656c6c6f000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000548454c4c4f000000000000000000000000000000000000000000000000000000\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Confirm your transaction in MetaMask")),(0,r.kt)("img",{src:"https://lh5.googleusercontent.com/kPAo0FyEgt0vNDkBMxIHNIFqdq0mP4BhFT21vXvusa8-wlP-BXr4FcHjYV-NZEuQZrgwq74fV2oXAKIrAovpXi7KHChXtowSI3sbu5wTQL-_3-x8Qd-6-z7xRDkRXzJZLcakxrR3",alt:"img",style:{zoom:"40%"}}),(0,r.kt)("h2",{id:"compile-proxy-contract"},"Compile Proxy Contract"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create new contract proxy.sol and copy contract code from flattened ",(0,r.kt)("inlineCode",{parentName:"li"},"BEP20UpgradeableProxyFlattened.sol "),".  Here is and ",(0,r.kt)("a",{parentName:"li",href:"https://bscscan.com/address/0xA6Ec2Fe4F6040b188A926048f44c9A59Fca189d4#code"},"example")),(0,r.kt)("li",{parentName:"ul"},"Compile the proxy contractClick on this button to switch to the compile page",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Select \u201cBEP20UpgradeableProxy\u201d contract"),(0,r.kt)("li",{parentName:"ul"},"Enable \u201cAuto compile\u201d and \u201coptimization\u201dClick \u201cABI\u201d to copy the contract abi and save it.")))),(0,r.kt)("h3",{id:"deploy-the-proxy-contract"},"Deploy the proxy contract"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Select \u201cInjected Web3\u201dSelect \u201cBEP20UpgradeableProxy.sol\u201d contract"),(0,r.kt)("li",{parentName:"ul"},"Fill in the parameters")),(0,r.kt)("img",{src:"https://lh3.googleusercontent.com/bdTP2V-Fco3HogiRVO-2FTlGwzXGsgiOa2VcCUdkr1LCD2kuRbHbz0u7eM7xmLhYiJAToG9IKL-R3heI2i_TPf2dQoFE215s9w-b8D6PLjYPAktKoLRRDozV8aOpQvfYGJgEYtJM",alt:"img",style:{zoom:"50%"}}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Logic"),": The address of ",(0,r.kt)("inlineCode",{parentName:"p"},"BEP20Implementation")," contract\n",(0,r.kt)("strong",{parentName:"p"},"Admin"),": admin cannot be BEP20 token owner\n",(0,r.kt)("strong",{parentName:"p"},"Data"),": use the initialization data you saved before"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click the \u201cDeploy\u201d button and Metamask will pop up"),(0,r.kt)("li",{parentName:"ul"},"Click the \u201cconfirm\u201d button to sign and broadcast transaction to BSC.")),(0,r.kt)("h2",{id:"verify-proxy-contract-on-bscscan"},"Verify Proxy Contract on BscScan"),(0,r.kt)("p",null,"Note: The way to verify the BEP20TokenImplementation contract is the same as before."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Go to your contact page and click on \u201cVerify and Publish\u201d")),(0,r.kt)("img",{src:"https://lh5.googleusercontent.com/RvHXgGR_7rvaNXNgBCB5JnHQE90ziGcr1kmy4NDxJfWxTJTZz3bkZuHtGRrpXY-Qb_7_5FLzzD1vwBo3cER_6Qfbvd7g3CmHE8l16cemD-92jZYhQX6XUUZRvvzFwr61f9jUuIuC",alt:"img",style:{zoom:"50%"}}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Select Single file")),(0,r.kt)("img",{src:"https://lh4.googleusercontent.com/PWp8_JMP9S4pXB08e3Rs2lta4Xn4ZOCoBkAmgsyr4tE0kv_KtlvA1TjLOwrBYG7ON1Z51CZh7NuFzD9IlOYZIRg6B5OZx0Z6yiyrlu2VjkvmjgqPV6BOsF4hWqzeKC8_g8PeTTZ_",alt:"img",style:{zoom:"50%"}}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Copy your contract code below and check \u201cOptimization\u201d if it\u2019s enabled"),(0,r.kt)("li",{parentName:"ul"},"Contractor Data: Please use this site for getting the correct constructor data: ",(0,r.kt)("a",{parentName:"li",href:"https://abi.hashex.org/#"},"https://abi.hashex.org/#"))),(0,r.kt)("p",null,"First, you need to copy ABI json of \u201cBEP20UpgradeableProxy.sol\u201d contractThen, click on \u201cParse\u201d"),(0,r.kt)("img",{src:"https://lh4.googleusercontent.com/Z1Ky-aHOBVvi5qDVNv4q-kOiK_v4uLzMpct08hQ-RcGbGgyb3HdOXMPMF9a-eNw5MybIjM222lZRrtV7Bn_cxntDIw9ivZ90dpsIeB44cpu6F9S9ena8BufByPN1Yvc508gnSZQ4",alt:"img",style:{zoom:"40%"}}),(0,r.kt)("p",null,"Add all those 3 parameters as indicated. Then copy/paste the result."),(0,r.kt)("p",null,"That\u2019s it! You have verified your proxy contract."),(0,r.kt)("img",{src:"https://lh4.googleusercontent.com/MgaUVOq6GdeA374T6DYsRPbphwSG4WNsfm-fJunGif4sFU4ILDQN_XcJ6O-qh8I6SuILbu2O9oriSQii6RcCYQY09_T1qoNvK6JxFkydM9u9zDWMUrybam1Zu_YiFAoa-3T867ea",alt:"img",style:{zoom:"50%"}}),(0,r.kt)("h2",{id:"link-these-two-contracts"},"Link these two contracts"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click on \u201cMore Options\u201d and choose \u201cis this a proxy\u201d.")),(0,r.kt)("img",{src:"https://lh3.googleusercontent.com/2_dq4WNMba2_RWJzLSRehjDjMWx8SgcUkU5d88lNzllt6QViM1uEW49e-H0nUbhjIc9iFCsXx3iavTsUFahjTR4Gocdf_jw_IhK_QvETb-G9CFgCb1LIlZvsGor37g8dKVxDnj7I",alt:"img",style:{zoom:"50%"}}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Verify your proxy address")),(0,r.kt)("img",{src:"https://camo.githubusercontent.com/836725ceebb9698ebd3ce738e2ea4301de8fedd4a2e437d2d0c5734eb922de51/68747470733a2f2f6c68352e676f6f676c6575736572636f6e74656e742e636f6d2f477539345878614741614b677158357278586d417572506c446f4a52315577734a7330365a413357636b5a70334a4a4e6b4a67384670576b4d573265424470634f77746c597a6550615453547a45414b6a4b654d32364f744f614f6d7353694a2d76376d67346f532d71686f4d76625838706b626b725631444a31554e6e4d4237596d6a494c4a33",alt:"img",style:{zoom:"50%"}}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Confirm the implementation address.")),(0,r.kt)("img",{src:"https://camo.githubusercontent.com/832b0418bb3a4e670ec02f61d857fb23646bc3f84893dd8631e9469b44415ce7/68747470733a2f2f6c68352e676f6f676c6575736572636f6e74656e742e636f6d2f554f6a425971756161366b315a745f57786e7356526e6c696b4d5462654654786979796d655254302d58724e774372506a6e49764266494e75456d5f55762d764f6c3763684f664b7573386e694e7168765832315362697077554f5a386c54583647334a413447506d523354435167744c6e493941303072736875496a6633516f71624b4d466145",alt:"img",style:{zoom:"50%"}}),(0,r.kt)("p",null,"If you go back to the contract page and you can see two more buttons \u201cRead as Proxy\u201d and \u201cWrite as Proxy\u201d"),(0,r.kt)("img",{src:"https://lh6.googleusercontent.com/xcVqGgOZ2mySt25Z7emHzwNmquYy4cyFSuQh-F7mJYG7rWfit4QWyxjBFl8V7Hc7_y3FepNRMLR7htZ-OiLqHfnvtwamep7exo2pocrNPMX5iyfZNlp5qVcDuPcwB8_VsisVG9dY",alt:"img",style:{zoom:"50%"}}))}m.isMDXComponent=!0}}]);