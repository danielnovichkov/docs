"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[5145],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=u;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},237:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return d}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),l=["components"],a={sidebar_position:1},c="Solidity Compiler",p={unversionedId:"develop/smart-contract/solidity-developing/compiler",id:"develop/smart-contract/solidity-developing/compiler",title:"Solidity Compiler",description:"Compile the contract code to TVM assembler with the Solidity Compiler.",source:"@site/../../src/develop/smart-contract/solidity-developing/compiler.md",sourceDirName:"develop/smart-contract/solidity-developing",slug:"/develop/smart-contract/solidity-developing/compiler",permalink:"/develop/smart-contract/solidity-developing/compiler",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/smart-contract/solidity-developing/compiler.md",tags:[],version:"current",lastUpdatedAt:1654876115,formattedLastUpdatedAt:"6/10/2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/develop/smart-contract/solidity-developing/getting-started"},next:{title:"Samples",permalink:"/develop/smart-contract/solidity-developing/samples"}},s={},d=[],u={toc:d};function m(e){var t=e.components,r=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"solidity-compiler"},"Solidity Compiler"),(0,i.kt)("p",null,"Compile the contract code to TVM assembler with the Solidity Compiler."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<PATH_TO>/TON-Solidity-Compiler/compiler/build/solc/solc Wallet.sol\n")),(0,i.kt)("p",null,"The compiler produces Wallet.code and Wallet.abi.json to be used in the following steps."),(0,i.kt)("p",null,"Assemble and link with a standard library into TVM bytecode:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<PATH_TO>/tvm_linker compile Wallet.code --lib <path-to>/TON-Solidity-Compiler/lib/stdlib_sol.tvm\n")),(0,i.kt)("p",null,"Binary code of your contract is recorded into WalletAddress.tvc file, where WalletAddress is a temporary address of the contract."))}m.isMDXComponent=!0}}]);