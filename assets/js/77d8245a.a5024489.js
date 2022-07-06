"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[9030],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,v=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(v,i(i({ref:t},c),{},{components:n})):r.createElement(v,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},202:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:5},l="TestSuite4",p={unversionedId:"develop/api-tools/everdev/command-line-interface/testsuite4",id:"develop/api-tools/everdev/command-line-interface/testsuite4",title:"TestSuite4",description:"TestSuite4 is a framework designed to simplify development and testing of TON Contracts. It contains lightweight blockchain emulator making it easy to develop contracts in a TDD-friendly style.",source:"@site/../../src/develop/api-tools/everdev/command-line-interface/testsuite4.md",sourceDirName:"develop/api-tools/everdev/command-line-interface",slug:"/develop/api-tools/everdev/command-line-interface/testsuite4",permalink:"/develop/api-tools/everdev/command-line-interface/testsuite4",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/api-tools/everdev/command-line-interface/testsuite4.md",tags:[],version:"current",lastUpdatedAt:1657066705,formattedLastUpdatedAt:"7/6/2022",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"TONOS-CLI",permalink:"/develop/api-tools/everdev/command-line-interface/tonos-cli"},next:{title:"Signer Tool",permalink:"/develop/api-tools/everdev/command-line-interface/signer-tool"}},c={},d=[{value:"Version",id:"version",level:2},{value:"Install",id:"install",level:2},{value:"Update",id:"update",level:2},{value:"Create",id:"create",level:2},{value:"Run",id:"run",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"testsuite4"},"TestSuite4"),(0,o.kt)("p",null,"TestSuite4 is a framework designed to simplify development and testing of TON Contracts. It contains lightweight blockchain emulator making it easy to develop contracts in a TDD-friendly style."),(0,o.kt)("p",null,"For more information, visit ",(0,o.kt)("a",{parentName:"p",href:"https://tonlabs.github.io/TestSuite4/"},"TestSuite4's documentation"),"."),(0,o.kt)("p",null,"\u2139\ufe0f ",(0,o.kt)("inlineCode",{parentName:"p"},"Python 3.6 - 3.9")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"pip")," required."),(0,o.kt)("h2",{id:"version"},"Version"),(0,o.kt)("p",null,"This command shows the currently installed and available TestSuite4 framework versions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"everdev ts4 version\n")),(0,o.kt)("h2",{id:"install"},"Install"),(0,o.kt)("p",null,"This command installs (using ",(0,o.kt)("inlineCode",{parentName:"p"},"pip"),") TestSuite4's latest or selected version and downloads them if needed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"everdev ts4 install # install latest version\n\neverdev ts4 install 0.2.0 # install version 0.2.0\n")),(0,o.kt)("h2",{id:"update"},"Update"),(0,o.kt)("p",null,"This command updates TestSuite4 to the latest version."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"everdev ts4 update\n")),(0,o.kt)("h2",{id:"create"},"Create"),(0,o.kt)("p",null,"This command creates a TestSuite4's template of the test (",(0,o.kt)("inlineCode",{parentName:"p"},"TestName.py"),")."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"everdev ts4 create TestName\n\neverdev ts4 create TestName --folder tests # creates tests/TestName.py (folder must exist)\n")),(0,o.kt)("h2",{id:"run"},"Run"),(0,o.kt)("p",null,"This command runs selected test (",(0,o.kt)("inlineCode",{parentName:"p"},"TestName.py"),")."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"everdev ts4 run TestName\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"}," The documentation in Everscale repository is a community effort. Therefore, everyone can contribute with proposals for new topics, suggest new content elements, participate in editing, and provide ideas that will be of great help for network development.\nPlease be informed that our documentation can be ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/everscale-org/docs/issues"},"edited via GitHub"),".",(0,o.kt)("br",{parentName:"p"}),"\n","Also please make sure to consult our rules and rewards policy via ",(0,o.kt)("a",{parentName:"p",href:"https://docs.everscale.network/contribute/hot-streams/documentations"},"this link"),".",(0,o.kt)("br",{parentName:"p"}),"\n","Feel free to join ",(0,o.kt)("a",{parentName:"p",href:"https://t.me/+C2IpQXWZtCwxYzEy"},"Everscale Documentation Development Telegram chat")," and ",(0,o.kt)("a",{parentName:"p",href:"https://t.me/+Vca1Gs6uPzIyNWVi"},"Everscale Developers Onboarding Telegram chat"),"!")))}m.isMDXComponent=!0}}]);