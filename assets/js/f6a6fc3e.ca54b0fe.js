"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[7588],{3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return m}});var r=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(o),m=a,v=d["".concat(s,".").concat(m)]||d[m]||u[m]||n;return o?r.createElement(v,i(i({ref:t},c),{},{components:o})):r.createElement(v,i({ref:t},c))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,i=new Array(n);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<n;p++)i[p]=o[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},747:function(e,t,o){o.r(t),o.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=o(7462),a=o(3366),n=(o(7294),o(3905)),i=["components"],l={sidebar_position:0},s="Overview",p={unversionedId:"develop/api-tools/overview",id:"develop/api-tools/overview",title:"Overview",description:"Introduction",source:"@site/../../src/develop/api-tools/overview.md",sourceDirName:"develop/api-tools",slug:"/develop/api-tools/overview",permalink:"/develop/api-tools/overview",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/api-tools/overview.md",tags:[],version:"current",lastUpdatedAt:1657066705,formattedLastUpdatedAt:"7/6/2022",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"API & Tools",permalink:"/develop/api-tools"},next:{title:"API/SDK",permalink:"/api-tools/api-sdk"}},c={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Tools",id:"tools",level:2}],d={toc:u};function m(e){var t=e.components,o=(0,a.Z)(e,i);return(0,n.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"overview"},"Overview"),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"Before you start developing or integrating anything into Everscale, we would like to tell you about the tools and environment that you will use in your work."),(0,n.kt)("p",null,"First of all, it is worth noting that Everscale is really a decentralized blockchain, not only from a technical point of view, but also from a management side, so the key tools and approaches to development may differ from different teams, technical contributors on the network."),(0,n.kt)("p",null,"At the moment, there are two active companies of technical contributors in Everscale network:"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://broxus.com/"},"Broxus")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://everx.dev/about"},"EverX")),(0,n.kt)("p",null,"And it is their solutions and tools that you will use when developing, while you will have every opportunity to write your own solutions as well, if necessary or desired."),(0,n.kt)("h2",{id:"tools"},"Tools"),(0,n.kt)("p",null,"Solutions for configuring and running nodes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/develop/api-tools/evernode-ds"},"Evernode DS"),"(by EverX) - Mainnet validating node with a GraphQL server that allows you to collect a large amount of data about the network.\n*Suitable for integration by exchanges and other platforms.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/develop/api-tools/evernode-nq"},"Evernode NQ"),"(under development, beta version by EverX) - a solution for delivering encrypted messages from the blockchain to end-users. The solution ensures that neither the sender nor the \"man in the middle'' can decrypt messages or match which smart contracts (e.g. wallets) belong to which recipient.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/develop/api-tools/ever-cloud"},"Ever Cloud")," (by EverX) - provides Everscale developers with services on top of scalable blockchain infrastructure, so that developers can focus on business logic instead of infrastructure maintenance.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/develop/api-tools/ton-wallet-api"},"TON Wallet API"),"(by Broxus) - a non-validating node with a built-in wallet for convenient integration with exchanges and other projects.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/develop/api-tools/ton-kafka"},"TON Kafka Producer"),"(by Broxus) - a non-validating node that writes blockchain data to Kafka. It can be used for further work with data in the required format and location. This node is lighter than Evernote DS.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/develop/api-tools/ton-inderxer"},"TON Indexer"),"(by Broxus) - the solution is in the form of RUST libraries for building your own variation of the Everscale node. For example, with the help of this solution, nodes TON Wallet API, TON Kafka Producer and a number of other nodes are made."))),(0,n.kt)("p",null,"Solutions and tools for interaction with blockchain:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Graph QL Server (by EverX) - is a major ",(0,n.kt)("a",{parentName:"p",href:"/arch/ever-os"},"Everscale Operating System")," component that provides API and runtime to access Everscale Blockchain, learn documentation before starting.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"api-sdk/sdk/"},"SDK"),"(by EverX) - GraphQL API goes along with SDK that helps one to create messages, handle network issues and implement any possible use-case over this API.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/develop/api-tools/tonos-cli"},"TONOS CLI"),"(by EverX) - is a multi-platform command line interface for Ever OS. It allows you to work with keys and seed phrases, deploy contracts, call any of their methods, generate and broadcast messages. It supports specific commands for DeBot(\u0442\u0435\u043a\u0441\u0442-\u0441\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 DeBot), DePools(\u0442\u0435\u043a\u0441\u0442-\u0441\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 DePools \u0432 Validate) and Multisig contracts, as well as a number of supplementary functions.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/develop/api-tools/inpage-provider"},"Everscale Inpage Provider"),"(by Broxus) - Web 3.0 library for Everscale. Typed wrappers over contracts etc."))),(0,n.kt)("p",null,"Other useful tools for developers:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/develop/api-tools/locklift"},"Locklift"),"(by Broxus) - development environment, analogous to Hardhat.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/develop/api-tools/everdev/command-line-interface/testsuite4"},"TestSuite4"),"(by EverX) - a framework designed to simplify development and testing of Everscale Contracts. It contains a lightweight blockchain emulator making it easy to develop contracts in a TDD-friendly style.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/develop/api-tools/signer-tool"},"Signer Tool"),"(by EverX) - centralized place where you can store your development keys.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/develop/api-tools/ever-bytie"},"Ever.bytie.moe"),"(by Broxus) - smart contracts interaction playground.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/develop/api-tools/network-tool"},"Network Tool"),"(by EverX) - a convenient way to organize all of your network configurations in one place.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/develop/api-tools/contract-management"},"Contract management"),"(by EverX) - tool to easily deploy and run your smart contracts on blockchain network(s)."))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"}," The documentation in Everscale repository is a community effort. Therefore, everyone can contribute with proposals for new topics, suggest new content elements, participate in editing, and provide ideas that will be of great help for network development.\nPlease be informed that our documentation can be ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/everscale-org/docs/issues"},"edited via GitHub"),".",(0,n.kt)("br",{parentName:"p"}),"\n","Also please make sure to consult our rules and rewards policy via ",(0,n.kt)("a",{parentName:"p",href:"https://docs.everscale.network/contribute/hot-streams/documentations"},"this link"),".",(0,n.kt)("br",{parentName:"p"}),"\n","Feel free to join ",(0,n.kt)("a",{parentName:"p",href:"https://t.me/+C2IpQXWZtCwxYzEy"},"Everscale Documentation Development Telegram chat")," and ",(0,n.kt)("a",{parentName:"p",href:"https://t.me/+Vca1Gs6uPzIyNWVi"},"Everscale Developers Onboarding Telegram chat"),"!")))}m.isMDXComponent=!0}}]);