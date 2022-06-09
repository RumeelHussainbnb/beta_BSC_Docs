"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[3929],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),f=o,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||r;return t?a.createElement(m,i(i({ref:n},p),{},{components:t})):a.createElement(m,i({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<r;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},69131:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var a=t(87462),o=t(63366),r=(t(67294),t(3905)),i=["components"],c={sidebar_label:"Deploy NFT on BSC",hide_table_of_contents:!1,sidebar_position:2},l="Deploy NFT on BSC",s={unversionedId:"ERC721",id:"ERC721",isDocsHomePage:!1,title:"Deploy NFT on BSC",description:"This work is inspired by this blog",source:"@site/docs/ERC721.md",sourceDirName:".",slug:"/ERC721",permalink:"/docs/ERC721",editUrl:"https://github.com/RumeelHussainbnb/beta_BSC_Docs/docs/ERC721.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Deploy NFT on BSC",hide_table_of_contents:!1,sidebar_position:2},sidebar:"bscSideBar",previous:{title:"NFT Metadata Standard",permalink:"/docs/nft-metadata-standard"},next:{title:"Introduction",permalink:"/docs/BEP20"}},p=[{value:"Setting up the Environment",id:"setting-up-the-environment",children:[],level:2},{value:"Getting the contract artifacts",id:"getting-the-contract-artifacts",children:[],level:2},{value:"Deploy the contract to a local blockchain",id:"deploy-the-contract-to-a-local-blockchain",children:[],level:2},{value:"Interact with our Token",id:"interact-with-our-token",children:[{value:"Token metadata",id:"token-metadata",children:[],level:3},{value:"Mint",id:"mint",children:[],level:3}],level:2},{value:"MetaData",id:"metadata",children:[],level:2},{value:"Deploy to a public testnet",id:"deploy-to-a-public-testnet",children:[{value:"Deploy to BSC Testnet",id:"deploy-to-bsc-testnet",children:[],level:3},{value:"Mint",id:"mint-1",children:[],level:3}],level:2}],d={toc:p};function u(e){var n=e.components,t=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deploy-nft-on-bsc"},"Deploy NFT on BSC"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This work is inspired by ",(0,r.kt)("a",{parentName:"p",href:"https://forum.openzeppelin.com/t/draft-create-an-nft-and-deploy-to-a-public-testnet-using-truffle/2961"},"this blog"))),(0,r.kt)("p",null,"In this tutorial we will create a non-fungible token (NFT) and deploy to a public testnet."),(0,r.kt)("p",null,"ERC721 is a standard for representing ownership of ",(0,r.kt)("a",{parentName:"p",href:"https://docs.openzeppelin.com/contracts/3.x/tokens#different-kinds-of-tokens"},"non-fungible tokens"),", that is, where each token is unique such as in real estate or collectibles."),(0,r.kt)("p",null,"We will use ",(0,r.kt)("a",{parentName:"p",href:"https://docs.openzeppelin.com/contracts/3.x/api/presets"},"Presets")," contracts in ",(0,r.kt)("a",{parentName:"p",href:"https://docs.openzeppelin.com/contracts/3.x/"},"OpenZeppelin Contracts")," to create an ERC721 and deploy using Truffle."),(0,r.kt)("h2",{id:"setting-up-the-environment"},"Setting up the Environment"),(0,r.kt)("p",null,"We begin by creating a new project."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ mkdir mynft && cd mynft\n$ npm init -y\n")),(0,r.kt)("p",null,"Then we install ",(0,r.kt)("a",{parentName:"p",href:"https://docs.openzeppelin.com/contracts"},"OpenZeppelin Contracts")," which has an implementation of ERC721."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ npm i --save-dev @openzeppelin/contracts\n")),(0,r.kt)("p",null,"Next we install a development tool for deployment, for this tutorial we will use ",(0,r.kt)("a",{parentName:"p",href:"https://www.trufflesuite.com/"},"Truffle")," but we could use any other tools such as Buidler, Remix or ",(0,r.kt)("a",{parentName:"p",href:"https://docs.openzeppelin.com/cli"},"OpenZeppelin CLI"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ npm i truffle\n")),(0,r.kt)("h2",{id:"getting-the-contract-artifacts"},"Getting the contract artifacts"),(0,r.kt)("p",null,"We will setup our Solidity project using ",(0,r.kt)("inlineCode",{parentName:"p"},"truffle init")," to create a ",(0,r.kt)("inlineCode",{parentName:"p"},"contracts")," directory and configuration to connect to a network."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ npx truffle init\nStarting init...\n================\n\n> Copying project files to\n\nInit successful, sweet!\n")),(0,r.kt)("p",null,"We are going to use Preset ",(0,r.kt)("a",{parentName:"p",href:"https://docs.openzeppelin.com/contracts/3.x/api/presets#ERC721PresetMinterPauserAutoId"},(0,r.kt)("inlineCode",{parentName:"a"},"ERC721PresetMinterPauserAutoId"))," which is an ERC721 that is preset so it can be minted (with auto token ID and metadata URI), paused and burned."),(0,r.kt)("p",null,"The Preset contracts have already been compiled, so we only need to copy the artifacts to the ",(0,r.kt)("inlineCode",{parentName:"p"},"build/contracts")," directory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ mkdir -p build/contracts/\n$ cp node_modules/@openzeppelin/contracts/build/contracts/* build/contracts/\n")),(0,r.kt)("p",null,"Using your favorite editor create ",(0,r.kt)("inlineCode",{parentName:"p"},"2_deploy.js")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"migrations")," directory with the following contents:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'// migrations/2_deploy.js\n// SPDX-License-Identifier: MIT\nconst ERC721PresetMinterPauserAutoId = artifacts.require("ERC721PresetMinterPauserAutoId");\n\nmodule.exports = function(deployer) {\n  deployer.deploy(ERC721PresetMinterPauserAutoId, "My NFT","NFT", "http://my-json-server.typicode.com/huangsuyu/nft/tokens");\n};\n')),(0,r.kt)("h2",{id:"deploy-the-contract-to-a-local-blockchain"},"Deploy the contract to a local blockchain"),(0,r.kt)("p",null,"We will use ",(0,r.kt)("a",{parentName:"p",href:"https://www.trufflesuite.com/docs/truffle/reference/truffle-commands#develop"},(0,r.kt)("inlineCode",{parentName:"a"},"truffle develop"))," to open a Truffle console with a development blockchain"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Head over to ",(0,r.kt)("a",{parentName:"li",href:"https://testnet.binance.org/faucet-smart"},"Faucet")," and request test BNB")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ npx truffle develop\nTruffle Develop started at http://127.0.0.1:9545/\n\nAccounts:\n(0) 0xc7e4bbc4269fdc62f879834e363173aee7895f45\n\nPrivate Keys:\n(0) ef424b4dc91a9c9d6c1fc4ae0a50ce80668f3a955a7e982584b45577e2c70e27\n\nMnemonic: mechanic cannon setup general indicate people notable frown poet friend credit true\n\n\u26a0\ufe0f  Important \u26a0\ufe0f  : This mnemonic was created for you by Truffle. It is not secure.\nEnsure you do not use it on production blockchains, or else you risk losing funds.\n\ntruffle(develop)> migrate\n\nCompiling your contracts...\n===========================\n> Compiling ./contracts/Migrations.sol\n> Artifacts written to /Users/Documents/work/mynft/build/contracts\n> Compiled successfully using:\n   - solc: 0.5.16+commit.9c3226ce.Emscripten.clang\n\nStarting migrations...\n======================\n> Network name:    'develop'\n> Network id:      5777\n> Block gas limit: 6721975 (0x6691b7)\n\n1_initial_migration.js\n======================\n\n   Deploying 'Migrations'\n   ----------------------\n   > transaction hash:    0x9a17a50e6efd52ba3e55245c76c52b065d20587add45aee732c233987033e567\n   > Blocks: 0            Seconds: 0\n   > contract address:    0x77409B688eA5461078a31450F3138EA8324F72C9\n   > block number:        1\n   > block timestamp:     1604387655\n   > account:             0xc7e4bBc4269fdC62F879834E363173aeE7895F45\n   > balance:             99.99616114\n   > gas used:            191943 (0x2edc7)\n   > gas price:           20 gwei\n   > value sent:          0 ETH\n   > total cost:          0.00383886 ETH\n\n\n   > Saving migration to chain.\n   > Saving artifacts\n   -------------------------------------\n   > Total cost:          0.00383886 ETH\n\n\n2_deploy.js\n===========\n\n   Deploying 'ERC721PresetMinterPauserAutoId'\n   ------------------------------------------\n   > transaction hash:    0xc1a3994c2ad2ba706ac49934b4f480c7b3d9b94241f526afa2dfe91545145a4e\n   > Blocks: 0            Seconds: 0\n   > contract address:    0xEaB17D581552123695f03F12b09e378EE9463b44\n   > block number:        3\n   > block timestamp:     1604387655\n   > account:             0xc7e4bBc4269fdC62F879834E363173aeE7895F45\n   > balance:             99.92142266\n   > gas used:            3694586 (0x385ffa)\n   > gas price:           20 gwei\n   > value sent:          0 ETH\n   > total cost:          0.07389172 ETH\n\n\n   > Saving migration to chain.\n   > Saving artifacts\n   -------------------------------------\n   > Total cost:          0.07389172 ETH\n\n\nSummary\n=======\n> Total deployments:   2\n> Final cost:          0.07773058 ETH\n\ntruffle(develop)>\n")),(0,r.kt)("p",null,"We can deploy our new NFT to our development blockchain using migrate."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"truffle(develop)> migrate\n\nCompiling your contracts...\n===========================\n> Everything is up to date, there is nothing to compile.\n\n\n\nStarting migrations...\n======================\n> Network name:    'develop'\n> Network id:      5777\n> Block gas limit: 6721975 (0x6691b7)\n\n\n1_initial_migration.js\n======================\n\n   Replacing 'Migrations'\n   ----------------------\n   > transaction hash:    0x5d71b0a45a0fe20e2ca645393bb44b83fbd47351c009c48be0b8b84b610fb3b7\n   > Blocks: 0            Seconds: 0\n   > contract address:    0x3797c825cAC4a1FA765F6D8cd7787fB195849555\n   > block number:        1\n   > block timestamp:     1590736865\n   > account:             0x0445c33BdCe670D57189158b88c0034B579f37cE\n   > balance:             99.99671674\n   > gas used:            164163 (0x28143)\n   > gas price:           20 gwei\n   > value sent:          0 ETH\n   > total cost:          0.00328326 ETH\n\n\n   > Saving migration to chain.\n   > Saving artifacts\n   -------------------------------------\n   > Total cost:          0.00328326 ETH\n\n\n2_deploy.js\n===========\n\n   Replacing 'ERC721PresetMinterPauserAutoId'\n   ------------------------------------------\n   > transaction hash:    0x166d7b28f4afb949585b5a0e5b4151daa54acbcb70566b202fd62ab380a6650c\n   > Blocks: 0            Seconds: 0\n   > contract address:    0xDEE9411430c7Dd9b67fC6DA723DE729AdAB50AD7\n   > block number:        3\n   > block timestamp:     1590736866\n   > account:             0x0445c33BdCe670D57189158b88c0034B579f37cE\n   > balance:             99.92191642\n   > gas used:            3697675 (0x386c0b)\n   > gas price:           20 gwei\n   > value sent:          0 ETH\n   > total cost:          0.0739535 ETH\n\n\n   > Saving migration to chain.\n   > Saving artifacts\n   -------------------------------------\n   > Total cost:           0.0739535 ETH\n\n\nSummary\n=======\n> Total deployments:   2\n> Final cost:          0.07723676 ETH\n")),(0,r.kt)("p",null,"We can then use our deployed contract."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"truffle(develop)> nft = await ERC721PresetMinterPauserAutoId.deployed()\nundefined\n")),(0,r.kt)("h2",{id:"interact-with-our-token"},"Interact with our Token"),(0,r.kt)("p",null,"The accounts that we can use were displayed when we started ",(0,r.kt)("inlineCode",{parentName:"p"},"truffle develop")),(0,r.kt)("h3",{id:"token-metadata"},"Token metadata"),(0,r.kt)("p",null,"We can call the contract to read token metadata such as ",(0,r.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"symbol")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"baseURI")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"truffle(develop)> await nft.name()\n'My NFT'\ntruffle(develop)> await nft.symbol()\n'NFT'\ntruffle(develop)> await nft.baseURI()\n")),(0,r.kt)("h3",{id:"mint"},"Mint"),(0,r.kt)("p",null,"We can send a transaction to mint tokens to a given account, from an account with the minter role.\nIn our case we are minting from the account which deployed the token, which is given the minter role."),(0,r.kt)("p",null,"We will mint 1 NFT with token ID 0."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"truffle(develop)> await nft.mint(\"0x0445c33bdce670d57189158b88c0034b579f37ce\")\n{ tx:\n   '0xd301a60dbb8ac187687f6639f200d4e6f2cfa065923092b3940330e35a26421d',\n  receipt:\n   { transactionHash:\n      '0xd301a60dbb8ac187687f6639f200d4e6f2cfa065923092b3940330e35a26421d',\n     transactionIndex: 0,\n     blockHash:\n      '0x3ad3cfcb26da0c969e9d5a5414a5e90a91a3a862c9e9082afc38a0ec0f1a5d00',\n     blockNumber: 5,\n     from: '0x0445c33bdce670d57189158b88c0034b579f37ce',\n     to: '0xdee9411430c7dd9b67fc6da723de729adab50ad7',\n     gasUsed: 156470,\n...\n")),(0,r.kt)("p",null,"We can check the owner of the token and the token URI for the metadata"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"truffle(develop)> await nft.ownerOf(1)\n'0x0445c33BdCe670D57189158b88c0034B579f37cE'\ntruffle(develop)> await nft.tokenURI(1)\n")),(0,r.kt)("h2",{id:"metadata"},"MetaData"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md"},"EIP-721 2")," includes an optional ",(0,r.kt)("strong",{parentName:"p"},"metadata extension")," with a ",(0,r.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"symbol")," and for each tokenID a ",(0,r.kt)("inlineCode",{parentName:"p"},"tokenURI")," with can point to a JSON file with ",(0,r.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"description")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"image")," for the given token ID."),(0,r.kt)("p",null,"How you create and host this metadata is up to you.\nI would suggest using a domain that you control to point to where you host the data so that you can move it as required."),(0,r.kt)("p",null,"For this tutorial, we will use ",(0,r.kt)("a",{parentName:"p",href:"https://my-json-server.typicode.com/"},"My JSON Server")," where we can store a single JSON file in a GitHub repository that we can access via a fake JSON server."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://sjc3.discourse-cdn.com/business6/images/emoji/twitter/warning.png?v=9",alt:":warning:"})," For production we need to store our metadata in a permanent location that can exist for the life of the token."),(0,r.kt)("p",null,"A sample JSON for tokenID 1 is:\n",(0,r.kt)("a",{parentName:"p",href:"http://my-json-server.typicode.com/huangsuyu/nft/tokens/1"},"http://my-json-server.typicode.com/huangsuyu/nft/tokens/1")),(0,r.kt)("h2",{id:"deploy-to-a-public-testnet"},"Deploy to a public testnet"),(0,r.kt)("p",null,"Next we will deploy to BNB Smart Chain testnet ."),(0,r.kt)("p",null,"To deploy, we will use the instructions for ",(0,r.kt)("a",{parentName:"p",href:"https://forum.openzeppelin.com/t/connecting-to-public-test-networks-with-truffle/2960"},"Connecting to Public Test Networks with Truffle")),(0,r.kt)("p",null,"You will need the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"An Infura project ID (or a public node provider of your choice)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@truffle/hdwallet-provider")," installed"),(0,r.kt)("li",{parentName:"ul"},"Configure ",(0,r.kt)("inlineCode",{parentName:"li"},"truffle-config.js")," for Rinkeby network"),(0,r.kt)("li",{parentName:"ul"},"A funded testnet account and mnemonic"),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"secrets.json")," or another secret-management solution. ",(0,r.kt)("strong",{parentName:"li"},"Make sure you don\u2019t commit this to GitHub!"))),(0,r.kt)("p",null,"My ",(0,r.kt)("inlineCode",{parentName:"p"},"truffle-config.js")," has the following ",(0,r.kt)("inlineCode",{parentName:"p"},"rinkeby")," configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"     testnet: {\n      provider: () => new HDWalletProvider(mnemonic, `https://data-seed-prebsc-1-s1.binance.org:8545`),\n      network_id: 97,\n      confirmations: 10,\n      timeoutBlocks: 200,\n      skipDryRun: true\n    },\n    bsc: {\n      provider: () => new HDWalletProvider(mnemonic, `https://bsc-dataseed1.binance.org`),\n      network_id: 56,\n      confirmations: 10,\n      timeoutBlocks: 200,\n      skipDryRun: true\n    },\n")),(0,r.kt)("h3",{id:"deploy-to-bsc-testnet"},"Deploy to BSC Testnet"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ npx truffle migrate --network testnet\n\nCompiling your contracts...\n===========================\n> Everything is up to date, there is nothing to compile.\n\nStarting migrations...\n======================\n> Network name:    'develop'\n> Network id:      5777\n> Block gas limit: 6721975 (0x6691b7)\n\n\n1_initial_migration.js\n======================\n\n   Deploying 'Migrations'\n   ----------------------\n   > transaction hash:    0x9a17a50e6efd52ba3e55245c76c52b065d20587add45aee732c233987033e567\n   > Blocks: 0            Seconds: 0\n   > contract address:    0x77409B688eA5461078a31450F3138EA8324F72C9\n   > block number:        1\n   > block timestamp:     1604387655\n   > account:             0xc7e4bBc4269fdC62F879834E363173aeE7895F45\n   > balance:             99.99616114\n   > gas used:            191943 (0x2edc7)\n   > gas price:           20 gwei\n   > value sent:          0 ETH\n   > total cost:          0.00383886 ETH\n\n\n   > Saving migration to chain.\n   > Saving artifacts\n   -------------------------------------\n   > Total cost:          0.00383886 ETH\n\n\n2_deploy.js\n===========\n\n   Deploying 'ERC721PresetMinterPauserAutoId'\n   ------------------------------------------\n   > transaction hash:    0xc1a3994c2ad2ba706ac49934b4f480c7b3d9b94241f526afa2dfe91545145a4e\n   > Blocks: 0            Seconds: 0\n   > contract address:    0xEaB17D581552123695f03F12b09e378EE9463b44\n   > block number:        3\n   > block timestamp:     1604387655\n   > account:             0xc7e4bBc4269fdC62F879834E363173aeE7895F45\n   > balance:             99.92142266\n   > gas used:            3694586 (0x385ffa)\n   > gas price:           20 gwei\n   > value sent:          0 ETH\n   > total cost:          0.07389172 ETH\n\n\n   > Saving migration to chain.\n   > Saving artifacts\n   -------------------------------------\n   > Total cost:          0.07389172 ETH\n\n\nSummary\n=======\n> Total deployments:   2\n> Final cost:          0.07773058 ETH\n")),(0,r.kt)("h3",{id:"mint-1"},"Mint"),(0,r.kt)("p",null,"We can send a transaction to mint tokens to a given account, from an account with the minter role."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"truffle(develop)> nft = await ERC721PresetMinterPauserAutoId.deployed()\nundefined\n")),(0,r.kt)("p",null,"In our case we are minting from the account which deployed the token, which is given the minter role."),(0,r.kt)("p",null,"To see configured accounts run the command ",(0,r.kt)("inlineCode",{parentName:"p"},"accounts"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"truffle(rinkeby)> accounts\n[ '0x133d144f52705ceb3f5801b63b9ebccf4102f5ed',\n")),(0,r.kt)("p",null,"We will mint 1 NFT with token ID 1. Specify the address that you want to be the token holder (",(0,r.kt)("inlineCode",{parentName:"p"},"0xc7e4bBc4269fdC62F879834E363173aeE7895F45")," is one of my test accounts)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"truffle(rinkeby)> await nft.mint(\"0x133d144f52705ceb3f5801b63b9ebccf4102f5ed\")\n{ tx:\n   '0x0d90d4a2a4ac3f33d5220deb11e8f65adf14a6669afd18abd4cce8ca7ab58e04',\n  receipt:\n   { blockHash: '0x724ba66bc1d799820c05a93ae67991b21bb769fd1e9dddd5db9f725f5f633331',\n     blockNumber: 3333746,\n     contractAddress: null,\n     cumulativeGasUsed: 164785,\n     from: '0x77737a65c296012c67f8c7f656d1df81827c9541',\n     gasUsed: 164785,\n...\n")))}u.isMDXComponent=!0}}]);