"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[1915],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,y=c["".concat(u,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(y,o(o({ref:t},p),{},{components:n})):a.createElement(y,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},68856:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={sidebar_label:"Chainlink Price Feeds for BSC",hide_table_of_contents:!1,sidebar_position:2},u="BNB Smart Chain Price Feeds from Chainlink",s={unversionedId:"link",id:"link",isDocsHomePage:!1,title:"BNB Smart Chain Price Feeds from Chainlink",description:"Introduction to Price Feeds",source:"@site/docs/link.md",sourceDirName:".",slug:"/link",permalink:"/docs/link",editUrl:"https://github.com/RumeelHussainbnb/beta_BSC_Docs/blob/master/docs/link.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Chainlink Price Feeds for BSC",hide_table_of_contents:!1,sidebar_position:2},sidebar:"bscSideBar",previous:{title:"Band Protocol Price Feed on BNB Smart Chain s",permalink:"/docs/band"},next:{title:"Cross-Chain Apps Support",permalink:"/docs/learn/cross-chain-app-list"}},p=[{value:"Introduction to Price Feeds",id:"introduction-to-price-feeds",children:[],level:2},{value:"Get the Latest Price",id:"get-the-latest-price",children:[],level:2},{value:"Get Historical Price Data",id:"get-historical-price-data",children:[],level:2},{value:"API Reference",id:"api-reference",children:[{value:"Functions",id:"functions",children:[{value:"decimals",id:"decimals",children:[],level:4},{value:"description",id:"description",children:[],level:4},{value:"getRoundData",id:"getrounddata",children:[],level:4},{value:"latestRoundData",id:"latestrounddata",children:[],level:4},{value:"version",id:"version",children:[],level:4}],level:3}],level:2},{value:"Contract Addresses",id:"contract-addresses",children:[{value:"Mainnet",id:"mainnet",children:[],level:3}],level:2}],d={toc:p};function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"bnb-smart-chain-price-feeds-from-chainlink"},"BNB Smart Chain Price Feeds from Chainlink"),(0,i.kt)("h2",{id:"introduction-to-price-feeds"},"Introduction to Price Feeds"),(0,i.kt)("p",null,"Chainlink Price Feeds are the quickest way to connect your smart contracts to the real-world market prices of assets. They enable smart contracts to retrieve the latest price of an asset in a single call."),(0,i.kt)("p",null,"Often, smart contracts need to act upon prices of assets in real-time. This is especially true in ",(0,i.kt)("a",{parentName:"p",href:"https://defi.chain.link/"},"DeFi"),". For example, ",(0,i.kt)("a",{parentName:"p",href:"https://www.synthetix.io/"},"Synthetix")," use Price Feeds to determine prices on their derivatives platform. Lending and Borrowing platforms like ",(0,i.kt)("a",{parentName:"p",href:"https://aave.com/"},"AAVE")," use Price Feeds to ensure the total value of the collateral."),(0,i.kt)("h2",{id:"get-the-latest-price"},"Get the Latest Price"),(0,i.kt)("p",null,"This section explains how to get the latest price of BNB inside smart contracts using Chainlink Price Feeds, on the BNB Smart Chain."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Solidity Contract")),(0,i.kt)("p",null,"To consume price data, your smart contract should reference ",(0,i.kt)("a",{href:"https://github.com/smartcontractkit/chainlink/blob/master/evm-contracts/src/v0.6/interfaces/AggregatorV3Interface.sol",target:"_blank"},(0,i.kt)("inlineCode",{parentName:"p"},"AggregatorV3Interface")),", which defines the external functions implemented by Price Feeds."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'pragma solidity ^0.6.7;\n\nimport "@chainlink/contracts/src/v0.6/interfaces/AggregatorV3Interface.sol";\n\ncontract PriceConsumerV3 {\n\n    AggregatorV3Interface internal priceFeed;\n\n    /**\n     * Network: BNB Smart Chain\n     * Aggregator: BNB/USD\n     * Address: 0x0567F2323251f0Aab15c8dFb1967E4e8A7D42aeE\n     */\n    constructor() public {\n        priceFeed = AggregatorV3Interface(0x0567F2323251f0Aab15c8dFb1967E4e8A7D42aeE);\n    }\n\n    /**\n     * Returns the latest price\n     */\n    function getLatestPrice() public view returns (int) {\n        (\n            uint80 roundID,\n            int price,\n            uint startedAt,\n            uint timeStamp,\n            uint80 answeredInRound\n        ) = priceFeed.latestRoundData();\n        return price;\n    }\n}\n\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Javascript Web3")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'const Web3 = require("web3");\nconst web3 = new Web3("https://data-seed-prebsc-1-s1.binance.org:8545");\nconst aggregatorV3InterfaceABI = [{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"description","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint80","name":"_roundId","type":"uint80"}],"name":"getRoundData","outputs":[{"internalType":"uint80","name":"roundId","type":"uint80"},{"internalType":"int256","name":"answer","type":"int256"},{"internalType":"uint256","name":"startedAt","type":"uint256"},{"internalType":"uint256","name":"updatedAt","type":"uint256"},{"internalType":"uint80","name":"answeredInRound","type":"uint80"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"latestRoundData","outputs":[{"internalType":"uint80","name":"roundId","type":"uint80"},{"internalType":"int256","name":"answer","type":"int256"},{"internalType":"uint256","name":"startedAt","type":"uint256"},{"internalType":"uint256","name":"updatedAt","type":"uint256"},{"internalType":"uint80","name":"answeredInRound","type":"uint80"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"version","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];\nconst addr = "0x0567F2323251f0Aab15c8dFb1967E4e8A7D42aeE";\nconst priceFeed = new web3.eth.Contract(aggregatorV3InterfaceABI, addr);\npriceFeed.methods.latestRoundData().call()\n    .then((roundData) => {\n        // Do something with roundData\n        console.log("Latest Round Data", roundData)\n    });\n\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Python Web3")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from web3 import Web3\nweb3 = Web3(Web3.HTTPProvider(\'https://data-seed-prebsc-1-s1.binance.org:8545\'))\nabi = \'[{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"description","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint80","name":"_roundId","type":"uint80"}],"name":"getRoundData","outputs":[{"internalType":"uint80","name":"roundId","type":"uint80"},{"internalType":"int256","name":"answer","type":"int256"},{"internalType":"uint256","name":"startedAt","type":"uint256"},{"internalType":"uint256","name":"updatedAt","type":"uint256"},{"internalType":"uint80","name":"answeredInRound","type":"uint80"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"latestRoundData","outputs":[{"internalType":"uint80","name":"roundId","type":"uint80"},{"internalType":"int256","name":"answer","type":"int256"},{"internalType":"uint256","name":"startedAt","type":"uint256"},{"internalType":"uint256","name":"updatedAt","type":"uint256"},{"internalType":"uint80","name":"answeredInRound","type":"uint80"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"version","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]\'\naddr = \'0x0567F2323251f0Aab15c8dFb1967E4e8A7D42aeE\'\ncontract = web3.eth.contract(address=addr, abi=abi)\nlatestData = contract.functions.latestRoundData().call()\nprint(latestData)\n')),(0,i.kt)("h2",{id:"get-historical-price-data"},"Get Historical Price Data"),(0,i.kt)("p",null,"The most common use case for Price Feeds is to get the latest price. However, ",(0,i.kt)("a",{href:"https://github.com/smartcontractkit/chainlink/blob/master/evm-contracts/src/v0.6/interfaces/AggregatorV3Interface.sol",target:"_blank",rel:"noreferrer, noopener"},(0,i.kt)("inlineCode",{parentName:"p"},"AggregatorV3Interface"))," also exposes functions which can be used to retrieve price data of a previous round ID."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Solidity Contract")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'pragma solidity ^0.6.7;\n\nimport "https://github.com/smartcontractkit/chainlink/blob/master/evm-contracts/src/v0.6/interfaces/AggregatorV3Interface.sol";\n\ncontract HistoricalPriceConsumerV3 {\n\n    AggregatorV3Interface internal priceFeed;\n\n    /**\n     * Network: BNB Smart Chain\n     * Aggregator: BNB/USD\n     * Address: 0x0567F2323251f0Aab15c8dFb1967E4e8A7D42aeE\n     */\n    constructor() public {\n        priceFeed = AggregatorV3Interface(0x0567F2323251f0Aab15c8dFb1967E4e8A7D42aeE);\n    }\n\n    /**\n     * Returns historical price for a round id.\n     * roundId is NOT incremental. Not all roundIds are valid.\n     * You must know a valid roundId before consuming historical data.\n     * @dev A timestamp with zero value means the round is not complete and should not be used.\n     */\n    function getHistoricalPrice(uint80 roundId) public view returns (int256) {\n        (\n            uint80 id,\n            int price,\n            uint startedAt,\n            uint timeStamp,\n            uint80 answeredInRound\n        ) = priceFeed.getRoundData(roundId);\n        require(timeStamp > 0, "Round not complete");\n        return price;\n    }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Javascript Web3")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'\nconst Web3 = require("web3");\n\nconst web3 = new Web3("https://data-seed-prebsc-1-s1.binance.org:8545");\nconst aggregatorV3InterfaceABI = [{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"description","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint80","name":"_roundId","type":"uint80"}],"name":"getRoundData","outputs":[{"internalType":"uint80","name":"roundId","type":"uint80"},{"internalType":"int256","name":"answer","type":"int256"},{"internalType":"uint256","name":"startedAt","type":"uint256"},{"internalType":"uint256","name":"updatedAt","type":"uint256"},{"internalType":"uint80","name":"answeredInRound","type":"uint80"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"latestRoundData","outputs":[{"internalType":"uint80","name":"roundId","type":"uint80"},{"internalType":"int256","name":"answer","type":"int256"},{"internalType":"uint256","name":"startedAt","type":"uint256"},{"internalType":"uint256","name":"updatedAt","type":"uint256"},{"internalType":"uint80","name":"answeredInRound","type":"uint80"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"version","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];\nconst addr = "0x0567F2323251f0Aab15c8dFb1967E4e8A7D42aeE";\nconst priceFeed = new web3.eth.Contract(aggregatorV3InterfaceABI, addr);\n\n// Valid roundId must be known. They are NOT incremental.\nlet validId = BigInt("18446744073709554130");\n\npriceFeed.methods.getRoundData(validId).call()\n    .then((historicalRoundData) => {\n        // Do something with price\n        console.log("Historical round data", historicalRoundData);\n    })\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Python Web3")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from web3 import Web3\n\nweb3 = Web3(Web3.HTTPProvider(\'https://data-seed-prebsc-1-s1.binance.org:8545\'))\nabi = \'[{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"description","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint80","name":"_roundId","type":"uint80"}],"name":"getRoundData","outputs":[{"internalType":"uint80","name":"roundId","type":"uint80"},{"internalType":"int256","name":"answer","type":"int256"},{"internalType":"uint256","name":"startedAt","type":"uint256"},{"internalType":"uint256","name":"updatedAt","type":"uint256"},{"internalType":"uint80","name":"answeredInRound","type":"uint80"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"latestRoundData","outputs":[{"internalType":"uint80","name":"roundId","type":"uint80"},{"internalType":"int256","name":"answer","type":"int256"},{"internalType":"uint256","name":"startedAt","type":"uint256"},{"internalType":"uint256","name":"updatedAt","type":"uint256"},{"internalType":"uint80","name":"answeredInRound","type":"uint80"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"version","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]\'\naddr = \'0x0567F2323251f0Aab15c8dFb1967E4e8A7D42aeE\'\ncontract = web3.eth.contract(address=addr, abi=abi)\n\n#  Valid roundId must be known. They are NOT incremental.\nvalidRoundId = 18446744073709554130\n\nhistoricalData = contract.functions.getRoundData(validRoundId).call()\nprint(historicalData)\n')),(0,i.kt)("h2",{id:"api-reference"},"API Reference"),(0,i.kt)("p",null,"API reference for ",(0,i.kt)("a",{href:"https://github.com/smartcontractkit/chainlink/blob/develop/evm-contracts/src/v0.6/interfaces/AggregatorV3Interface.sol",target:"_blank"},(0,i.kt)("inlineCode",{parentName:"p"},"AggregatorV3Interface")),"."),(0,i.kt)("h3",{id:"functions"},"Functions"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#decimals"},"decimals")),(0,i.kt)("td",{parentName:"tr",align:null},"The number of decimals in the response.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#description"},"description")),(0,i.kt)("td",{parentName:"tr",align:null},"The description of the aggregator that the proxy points to.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#getrounddata"},"getRoundData")),(0,i.kt)("td",{parentName:"tr",align:null},"Get data from a specific round.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#latestrounddata"},"latestRoundData")),(0,i.kt)("td",{parentName:"tr",align:null},"Get data from the latest round.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#version"},"version")),(0,i.kt)("td",{parentName:"tr",align:null},"The version representing the type of aggregator the proxy points to.")))),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"decimals"},"decimals"),(0,i.kt)("p",null,"Get the number of decimals present in the response value."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"Solidity",Solidity:!0},"function decimals() external view returns (uint8)\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"RETURN"),": The number of decimals.")),(0,i.kt)("h4",{id:"description"},"description"),(0,i.kt)("p",null,"Get the description of the underlying aggregator that the proxy points to."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"Solidity",Solidity:!0},"function description() external view returns (string memory)\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"RETURN"),": The description of the underlying aggregator.")),(0,i.kt)("h4",{id:"getrounddata"},"getRoundData"),(0,i.kt)("p",null,"Get data about a specific round, using the ",(0,i.kt)("inlineCode",{parentName:"p"},"roundId"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"Solidity",Solidity:!0},"function getRoundData(uint80 _roundId) external view\n    returns (\n        uint80 roundId,\n        int256 answer,\n        uint256 startedAt,\n        uint256 updatedAt,\n        uint80 answeredInRound\n    )\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"roundId"),": The round ID")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Return Values")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"roundId"),": The round ID."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"answer"),": The price."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"startedAt"),": Timestamp of when the round started."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"updatedAt"),": Timestamp of when the round was updated."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"answeredInRound"),": The round ID of the round in which the answer",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"was computed.")))),(0,i.kt)("h4",{id:"latestrounddata"},"latestRoundData"),(0,i.kt)("p",null,"Get the price from the latest round."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"Solidity",Solidity:!0},"function latestRoundData() external view\n    returns (\n        uint80 roundId,\n        int256 answer,\n        uint256 startedAt,\n        uint256 updatedAt,\n        uint80 answeredInRound\n    )\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Return Values")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"roundId"),": The round ID."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"answer"),": The price."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"startedAt"),": Timestamp of when the round started."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"updatedAt"),": Timestamp of when the round was updated."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"answeredInRound"),": The round ID of the round in which the answer",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"was computed.")))),(0,i.kt)("h4",{id:"version"},"version"),(0,i.kt)("p",null,"The version representing the type of aggregator the proxy points to."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"Solidity",Solidity:!0},"function version() external view returns (uint256)\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"RETURN"),": The version number.")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"contract-addresses"},"Contract Addresses"),(0,i.kt)("p",null,"Chainlink price feed contracts are updated on a regular basis by multiple Chainlink nodes. This section lists the contract addresses for Price Feeds on the BNB Smart Chain."),(0,i.kt)("h3",{id:"mainnet"},"Mainnet"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Pair"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Proxy"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"BNB / USD"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://bscscan.com/address/0x0567F2323251f0Aab15c8dFb1967E4e8A7D42aeE"},(0,i.kt)("inlineCode",{parentName:"a"},"0x0567F2323251f0Aab15c8dFb1967E4e8A7D42aeE")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"BTC / USD"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://bscscan.com/address/0x264990fbd0A4796A3E3d8E37C4d5F87a3aCa5Ebf"},(0,i.kt)("inlineCode",{parentName:"a"},"0x264990fbd0A4796A3E3d8E37C4d5F87a3aCa5Ebf")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"ETH / USD"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://bscscan.com/address/0x9ef1B8c0E4F7dc8bF5719Ea496883DC6401d5b2e"},(0,i.kt)("inlineCode",{parentName:"a"},"0x9ef1B8c0E4F7dc8bF5719Ea496883DC6401d5b2e")))))),(0,i.kt)("p",null,"Original source is from ",(0,i.kt)("a",{parentName:"p",href:"https://docs.chain.link/docs/binance-smart-chain-addresses"},"Chainlink website")))}c.isMDXComponent=!0}}]);