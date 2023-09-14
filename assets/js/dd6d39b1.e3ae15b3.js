"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7119],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),g=a,f=d["".concat(l,".").concat(g)]||d[g]||p[g]||o;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1783:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={},s="Docusaurus config setup",i={unversionedId:"main/Get started/Installation/Docusaurus Configuration",id:"main/Get started/Installation/Docusaurus Configuration",title:"Docusaurus config setup",description:"After you have created the folder structure in Obsidian its time to adjust the Docusaurus settings to support this structure.",source:"@site/docs/main/1. Get started/1. Installation/6. Docusaurus Configuration.md",sourceDirName:"main/1. Get started/1. Installation",slug:"/main/Get started/Installation/Docusaurus Configuration",permalink:"/obsidiosaurus-docs-test/docs/main/Get started/Installation/Docusaurus Configuration",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"main",previous:{title:"Website Structure",permalink:"/obsidiosaurus-docs-test/docs/main/Get started/Installation/Website Structure"},next:{title:"Create your first notes",permalink:"/obsidiosaurus-docs-test/docs/main/Get started/Installation/Create notes"}},l={},u=[{value:"Open your repo folder with VS Code",id:"open-your-repo-folder-with-vs-code",level:2},{value:"sidebar.js",id:"sidebarjs",level:2},{value:"docusaurus.config.js",id:"docusaurusconfigjs",level:2},{value:"Multiple Languages",id:"multiple-languages",level:3},{value:"Theme Config",id:"theme-config",level:3},{value:"Multiple Blogs",id:"multiple-blogs",level:3}],c={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"docusaurus-config-setup"},"Docusaurus config setup"),(0,a.kt)("p",null,"After you have created the folder structure in Obsidian its time to adjust the Docusaurus settings to support this structure. "),(0,a.kt)("h2",{id:"open-your-repo-folder-with-vs-code"},"Open your repo folder with VS Code"),(0,a.kt)("p",null,"Open the repository folder with VSCode or any other IDE."),(0,a.kt)("p",null,"In your ",(0,a.kt)("inlineCode",{parentName:"p"},"website")," Folder search for the file ",(0,a.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")),(0,a.kt)("h2",{id:"sidebarjs"},"sidebar.js"),(0,a.kt)("p",null,"Change from this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const sidebars = {\n  // By default, Docusaurus generates a sidebar from the docs folder structure\n  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],\n\n  // But you can create a sidebar manually\n  /*\n  tutorialSidebar: [\n    'intro',\n    'hello',\n    {\n      type: 'category',\n      label: 'Tutorial',\n      items: ['tutorial-basics/create-a-document'],\n    },\n  ],\n   */\n};\n")),(0,a.kt)("p",null,"To your sidebar structure"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const sidebars = {\n    sidebar1: [{type: 'autogenerated', dirName: 'sidebar1'}],\n    sidebar2: [{type: 'autogenerated', dirName: 'sidebar2'}],\n};\n")),(0,a.kt)("h2",{id:"docusaurusconfigjs"},"docusaurus.config.js"),(0,a.kt)("h3",{id:"multiple-languages"},"Multiple Languages"),(0,a.kt)("p",null,"Search for line:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"i18n: {\ndefaultLocale: 'en',\nlocales: ['en'],\n},\n")),(0,a.kt)("p",null,"Adjust to your languages, e.g.:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"i18n: {\ndefaultLocale: 'en',\nlocales: ['en', 'de'],\n},\n")),(0,a.kt)("h3",{id:"theme-config"},"Theme Config"),(0,a.kt)("p",null,"Search for ",(0,a.kt)("inlineCode",{parentName:"p"},"themeConfig"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"themeConfig:\n    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */\n    ({\n      // Replace with your project's social card\n      image: 'img/docusaurus-social-card.jpg',\n      navbar: {\n        title: 'My Site',\n        logo: {\n          alt: 'My Site Logo',\n          src: 'img/logo.svg',\n        },\n        items: [\n          {\n            type: 'docSidebar',\n            sidebarId: 'tutorialSidebar',\n            position: 'left',\n            label: 'Tutorial',\n          },\n          {to: '/blog', label: 'Blog', position: 'left'},\n          {\n            href: 'https://github.com/facebook/docusaurus',\n            label: 'GitHub',\n            position: 'right',\n          },\n        ],\n      },\n  ...\n")),(0,a.kt)("p",null,"Adjust the ",(0,a.kt)("inlineCode",{parentName:"p"},"items")," to your structure:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"        items: [\n          {\n            type: 'docSidebar',\n            sidebarId: 'sidebar1', // <- from sidebar.js\n            position: 'left',\n            label: 'Sidebar 1',\n          },\n          {\n            type: 'docSidebar',\n            sidebarId: 'sidebar2', // <- from sidebar.js\n            position: 'left',\n            label: 'Sidebar 2',\n          },\n          {to: '/blog', label: 'Blog', position: 'left'},\n          {to: '/second-blog', label: 'Second Blog', position: 'left'}, \n      ],\n")),(0,a.kt)("h3",{id:"multiple-blogs"},"Multiple Blogs"),(0,a.kt)("p",null,"in the ",(0,a.kt)("inlineCode",{parentName:"p"},"themeConfig")," Object add or adjust your plugins :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"        plugins: [\n          [\n            '@docusaurus/plugin-content-blog',\n            {\n              id: 'second-blog',\n              routeBasePath: 'second-blog',\n              path: './second-blog__blog', \n            },\n          ],\n        ],\n")))}p.isMDXComponent=!0}}]);