"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[3874],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return h}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(r),h=i,g=p["".concat(l,".").concat(h)]||p[h]||u[h]||a;return r?n.createElement(g,o(o({ref:t},d),{},{components:r})):n.createElement(g,o({ref:t},d))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4363:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],s={sidebar_position:0},l="Overview",c={unversionedId:"develop/integrate/build-cross-chain/getting-started/overview",id:"develop/integrate/build-cross-chain/getting-started/overview",title:"Overview",description:"Octus Bridge has a pivotal role in the Everscale ecosystem. It is designed to allow liquidity to move freely between blockchains to support other DeFi products and provide liquidity. There's also a staking interface integrated into the bridge.",source:"@site/../../src/develop/integrate/build-cross-chain/getting-started/overview.md",sourceDirName:"develop/integrate/build-cross-chain/getting-started",slug:"/develop/integrate/build-cross-chain/getting-started/overview",permalink:"/develop/integrate/build-cross-chain/getting-started/overview",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/integrate/build-cross-chain/getting-started/overview.md",tags:[],version:"current",lastUpdatedAt:1657066705,formattedLastUpdatedAt:"7/6/2022",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/build-cross-chain/getting-started"},next:{title:"Integration flow",permalink:"/develop/integrate/build-cross-chain/getting-started/integration-flow"}},d={},u=[{value:"Modus operandi",id:"modus-operandi",level:2},{value:"DAO",id:"dao",level:2},{value:"Staking",id:"staking",level:2},{value:"Vault/Multi-vault",id:"vaultmulti-vault",level:2}],p={toc:u};function h(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://octusbridge.io"},"Octus Bridge")," has a pivotal role in the Everscale ecosystem. It is designed to allow liquidity to move freely between blockchains to support other DeFi products and provide liquidity. There's also a staking interface integrated into the bridge. "),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://octusbridge.io"},"Octus Bridge")," works with the help of relayers and has all its operations  performed in an open and transparent manner through TVM and Everscale smart contracts. Considering the inherent security risks associated with bridges, ",(0,a.kt)("a",{parentName:"p",href:"https://octusbridge.io"},"Octus Bridge")," addressed this issue by implementing the Vaults - the most reliable security solution currently existing. "),(0,a.kt)("p",null,"As Everscale strives to achieve decentralization at the management level for all its products, there is a DAO structure for the ",(0,a.kt)("a",{parentName:"p",href:"https://octusbridge.io"},"Octus Bridge")," as well. "),(0,a.kt)("h2",{id:"modus-operandi"},"Modus operandi"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://octusbridge.io"},"Octus Bridge")," for transferring assets between chains locks assets in the source chain and creates an equivalent number of wrapped assets in the destination blockchain."),(0,a.kt)("p",null,"When you initiate an asset transfer from one blockchain to another using a bridge, assets are not actually moved or sent anywhere. Instead, the transfer functionality is used in a two-step process and handled by a smart contract."),(0,a.kt)("h2",{id:"dao"},"DAO"),(0,a.kt)("p",null,"It provides a level of decentralization unprecedented for bridges due to the ability to make decisions directly by network participants.",(0,a.kt)("br",{parentName:"p"}),"\n","In order to participate in the decision making of ",(0,a.kt)("a",{parentName:"p",href:"https://octusbridge.io"},"Octus Bridge"),", native tokens are required. "),(0,a.kt)("p",null,"BRIDGE token owners can vote on certain operating decisions to make the bridge better. The voting protocol is a real smart contract that is authorized to make changes to other smart contracts.",(0,a.kt)("br",{parentName:"p"}),"\n","Any user with at least 100k BRIDGE tokens is eligible to become a Relayer."),(0,a.kt)("h2",{id:"staking"},"Staking"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://octusbridge.io"},"Octus Bridge")," locks tokens from some blockchains and pledges those tokens to issue wrapped tokens on others. Part of the locked liquidity is invested in low-risk protocols.",(0,a.kt)("br",{parentName:"p"}),"\n","The income from these protocols is the income of the ",(0,a.kt)("a",{parentName:"p",href:"https://octusbridge.io"},"Octus Bridge"),"."),(0,a.kt)("h2",{id:"vaultmulti-vault"},"Vault/Multi-vault"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://octusbridge.io"},"Octus Bridge")," is one of the most secure cross-chain services due to Vaulting, and more so, Multi Vaulting, which is a storage solution that provides an additional layer of security to digital wallets."),(0,a.kt)("p",null,"Please follow ",(0,a.kt)("a",{parentName:"p",href:"/develop/integrate/build-cross-chain/getting-started/integration-flow"},(0,a.kt)("strong",{parentName:"a"},"this page"))," in order to start interacting with the ",(0,a.kt)("a",{parentName:"p",href:"https://octusbridge.io"},"Octus Bridge"),"."))}h.isMDXComponent=!0}}]);