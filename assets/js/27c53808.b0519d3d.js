"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[857],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(r),f=a,m=p["".concat(l,".").concat(f)]||p[f]||u[f]||o;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},3266:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={title:"Core description",sidebar_position:0,slug:"/standard/TIP-3"},l="Fungible Token",c={unversionedId:"standard/TIP-3/core-description",id:"standard/TIP-3/core-description",title:"Core description",description:"Abstract",source:"@site/../../src/standard/TIP-3/core-description.md",sourceDirName:"standard/TIP-3",slug:"/standard/TIP-3",permalink:"/standard/TIP-3",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/standard/TIP-3/core-description.md",tags:[],version:"current",lastUpdatedAt:1651850968,formattedLastUpdatedAt:"5/6/2022",sidebarPosition:0,frontMatter:{title:"Core description",sidebar_position:0,slug:"/standard/TIP-3"},sidebar:"tutorialSidebar",previous:{title:"1. Reverse DeCert",permalink:"/standard/TIP-2.1"},next:{title:"1. Fungible token",permalink:"/standard/TIP-3.1"}},d={},u=[{value:"Abstract",id:"abstract",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Token root",id:"token-root",level:3},{value:"Token wallet",id:"token-wallet",level:3},{value:"References",id:"references",level:2}],p={toc:u};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"fungible-token"},"Fungible Token"),(0,o.kt)("h2",{id:"abstract"},"Abstract"),(0,o.kt)("p",null,"The following standard describes the basic idea about distributed fungible token architecture."),(0,o.kt)("h2",{id:"motivation"},"Motivation"),(0,o.kt)("p",null,"The suggested standard differs considerably from Ethereum ERC20 and other smart contract token standards with single registry due to its distributed nature related to Everscale blockchain particularities. Given that Everscale has a storage fee, using an existing ERC20 standard design would cause excessive maintenance costs. Also, ERC20 is somewhat incompatible with the sharding architecture. Therefore, a Distributed Token standard is preferable."),(0,o.kt)("p",null,"The ERC20 sharding implementation (with an idea to simply shard its registry) has drawbacks mainly related to complicated and expansive management. TIP-3 is fully distributed and implies separate storage of each user\u2019s balance."),(0,o.kt)("h2",{id:"architecture"},"Architecture"),(0,o.kt)("p",null,"General information about token is stored in the ",(0,o.kt)("a",{parentName:"p",href:"#token-root"},"token root")," contract. Each token holder has its own instance of ",(0,o.kt)("a",{parentName:"p",href:"#token-wallet"},"token wallet")," contract. Token transfers SHOULD be implemented in P2P fashion, between sender and receiver token wallets."),(0,o.kt)("h3",{id:"token-root"},"Token root"),(0,o.kt)("p",null,"Token root contract stores the general information about the token, e.g. name, symbol, decimals, token wallet code and so on."),(0,o.kt)("h3",{id:"token-wallet"},"Token wallet"),(0,o.kt)("p",null,"Each token holder has its own instance of token wallet contract. Transfer happens in a decentralized fashion - sender token wallet SHOULD send the specific message to the receiver token wallet. Since token wallets have the same code, it's easy for receiver token wallet to check the correctness of sender token wallet."),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://eips.ethereum.org/EIPS/eip-20"},"EIP-20: Token Standard")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://forum.freeton.org/t/tip-3-distributed-token-or-ton-cash/64"},"Forum FreeTON - TIP3")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/broxus/ton-eth-bridge-token-contracts"},"Reference implementation by Broxus"))))}f.isMDXComponent=!0}}]);