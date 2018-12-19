(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{168:function(e,t,s){"use strict";s.r(t);var a={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},n=s(5),r=Object(n.a)(a,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.slotKey}},[s("h1",{attrs:{id:"hexo已经看腻了，来试试vuepress搭建个人博客"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hexo已经看腻了，来试试vuepress搭建个人博客","aria-hidden":"true"}},[e._v("#")]),e._v(" Hexo已经看腻了，来试试VuePress搭建个人博客")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/4/23/162f21a0e09d9fd3?w=600&h=600&f=png&s=160672",alt:""}})]),e._v(" "),s("h2",{attrs:{id:"vuepress"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuepress","aria-hidden":"true"}},[e._v("#")]),e._v(" VuePress")]),e._v(" "),s("p",[e._v("先简单介绍一下VuePress，这是尤大在2018年4月份发布的一个新轮子。")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/4/23/162f21add3603e86?w=751&h=418&f=png&s=63447",alt:""}})]),e._v(" "),s("p",[e._v("一个基于 Vue SSR 的静态站生成器，本来的目的是爽爽的写文档，但是我发现用来撸一个人博客也非常不错。")]),e._v(" "),s("p",[s("strong",[s("a",{attrs:{href:"https://vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("这是VuePress的官方文档"),s("OutboundLink")],1)]),e._v(" "),s("strong",[s("a",{attrs:{href:"https://vuepress.docschina.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("这是VuePress的中文文档"),s("OutboundLink")],1)])]),e._v(" "),s("h2",{attrs:{id:"上手搭建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#上手搭建","aria-hidden":"true"}},[e._v("#")]),e._v(" 上手搭建")]),e._v(" "),s("p",[e._v("你可以跟着文档上的例子自己玩一玩，不过由于VuePress的文档也是用VuePress来实现的，所以我取巧直接拿"),s("a",{attrs:{href:"https://github.com/vuejs/vuepress",target:"_blank",rel:"noopener noreferrer"}},[e._v("VuePress仓库"),s("OutboundLink")],1),e._v("中的"),s("strong",[e._v("docs")]),e._v("目录拿来玩耍。")]),e._v(" "),s("ol",[s("li",[e._v("首先安装VuePress到全局")])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -g vuepress\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[e._v("然后把VuePress仓库克隆到你的电脑")])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone git@github.com:docschina/vuepress.git\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[e._v("在docs文件中执行（请确保你的 Node.js 版本 >= 8）")])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("cd")]),e._v(" vuepress\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("cd")]),e._v(" docs\nvuepress dev\n")])])]),s("p",[e._v("当你看到这一行就说明已经成功了：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(" VuePress dev server listening at http://localhost:8080/\n")])])]),s("p",[e._v("下面我们打开"),s("a",{attrs:{href:"http://localhost:8080/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://localhost:8080/"),s("OutboundLink")],1),e._v("\n发现真的打开了vuepress文档：\n"),s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/4/23/162f21a0e0944215?w=1240&h=520&f=png&s=69295",alt:""}})]),e._v(" "),s("p",[e._v("下面的工作就是数据的替换了，但我们应该先看一下docs的目录结构：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("├─.vuepress\n│  ├─components\n│  └─public\n│      └─icons\n│   └─config.js // 配置文件\n├─config // Vuepress文档的配置参考内容\n├─default-theme-config // Vuepress文档的默认主题配置内容\n├─guide // Vuepress文档的指南内容\n└─zh // 中文文档目录\n    ├─config\n    ├─default-theme-config\n    └─guide\n└─README.md // 首页配置文件\n")])])]),s("p",[e._v("文档分成了两部分，中文文档在/zh/目录下，英文文档在根目录下。")]),e._v(" "),s("p",[e._v("其实目录里面的东西都挺好看懂的，首先guide 、default-theme-config、config 这三个目录中的都是Vuepress文档的主要内容，从中文文档里也可以看到只有这三个目录被替换了。")]),e._v(" "),s("h2",{attrs:{id:"首页配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#首页配置","aria-hidden":"true"}},[e._v("#")]),e._v(" 首页配置")]),e._v(" "),s("p",[e._v("默认主题提供了一个主页布局，要使用它，需要在你的根目录 "),s("code",[e._v("README.md")]),e._v(" 的 "),s("a",{attrs:{href:"https://vuepress.docschina.org/guide/markdown.html#yaml-front-matter",target:"_blank",rel:"noopener noreferrer"}},[e._v("YAML front matter"),s("OutboundLink")],1),e._v(" 中指定 "),s("code",[e._v("home：true")]),e._v("，并加上一些其他的元数据。")]),e._v(" "),s("p",[e._v("我们先看看根目录下的README,md：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("home: true // 是否使用Vuepress默认主题\nheroImage: /hero.png // 首页的图片\nactionText: Get Started →  // 按钮的文字\nactionLink: /guide/ // 按钮跳转的目录\nfeatures: // 首页三个特性\n- title: Simplicity First\n  details: Minimal setup with markdown-centered project structure helps you focus on writing.\n- title: Vue-Powered\n  details: Enjoy the dev experience of Vue + webpack, use Vue components in markdown, and develop custom themes with Vue.\n- title: Performant\n  details: VuePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded.\nfooter: MIT Licensed | Copyright © 2018-present Evan You // 页尾\n")])])]),s("p",[e._v("实在看不懂，"),s("a",{attrs:{href:"https://vuepress.docschina.org/default-theme-config/",target:"_blank",rel:"noopener noreferrer"}},[e._v("官网"),s("OutboundLink")],1),e._v("有比我更详细的配置说明。")]),e._v(" "),s("h2",{attrs:{id:"导航配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#导航配置","aria-hidden":"true"}},[e._v("#")]),e._v(" 导航配置")]),e._v(" "),s("p",[e._v("导航配置文件在"),s("code",[e._v(".vuepress/config.js")]),e._v("中")]),e._v(" "),s("p",[e._v("在导航配置文件中nav是控制导航栏链接的，你可以把它改成自己的博客目录。")]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[e._v("nav"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Guide'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        link"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'/guide/'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Config Reference'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        link"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'/config/'")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Default Theme Config'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        link"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'/default-theme-config/'")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])]),s("p",[e._v("剩下的默认主题配置官方文档都有很详细的文档说明这里就不在啰嗦了。")]),e._v(" "),s("h2",{attrs:{id:"更改默认主题色"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更改默认主题色","aria-hidden":"true"}},[e._v("#")]),e._v(" 更改默认主题色")]),e._v(" "),s("p",[e._v("你可以在"),s("code",[e._v(".vuepress/")]),e._v("目录下创建一个"),s("code",[e._v("override.styl")]),e._v("文件。\nvuepress提供四个可更改的颜色：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$accentColor = #3eaf7c // 主题色\n$textColor = #2c3e50 // 文字颜色\n$borderColor = #eaecef // 边框颜色\n$codeBgColor = #282c34 // 代码背景颜色\n")])])]),s("p",[e._v("我把它改成了这样：\n"),s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/4/23/162f21a0e07ec947?w=1240&h=698&f=png&s=138334",alt:""}})]),e._v(" "),s("h2",{attrs:{id:"侧边栏的实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#侧边栏的实现","aria-hidden":"true"}},[e._v("#")]),e._v(" 侧边栏的实现")]),e._v(" "),s("p",[e._v("由于评论区里问的人较多，所以在这里更新一下，其实我就算在这里写的再详细也不如大家去看官方文档。\n侧边栏的配置也在"),s("code",[e._v(".vuepress/config.js")]),e._v("中：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("sidebar: [\n  {\n    title: 'JavaScript', // 侧边栏名称\n    collapsable: true, // 可折叠\n    children: [\n      '/blog/JavaScript/学会了ES6，就不会写出那样的代码', // 你的md文件地址\n    ]\n  },\n  {\n    title: 'CSS', \n    collapsable: true,\n    children: [\n      '/blog/CSS/搞懂Z-index的所有细节',\n    ]\n  },\n  {\n    title: 'HTTP',\n    collapsable: true,\n    children: [\n      '/blog/HTTP/认识HTTP-Cookie和Session篇',\n    ]\n  },\n]\n")])])]),s("p",[e._v("对应的文档结构：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("├─blog // docs目录下新建一个博客目录\n│  ├─CSS\n│  ├─HTTP\n│  └─JavaScript\n")])])]),s("p",[e._v("我的博客："),s("a",{attrs:{href:"http://brownhu.site/",target:"_blank",rel:"noopener noreferrer"}},[e._v("brownhu"),s("OutboundLink")],1)]),e._v(" "),s("h2",{attrs:{id:"部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#部署","aria-hidden":"true"}},[e._v("#")]),e._v(" 部署")]),e._v(" "),s("p",[e._v("在配置好你博客之后，命令行执行：")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("Vuepress build\n")])])]),s("p",[e._v("当你看到这一行就说明成功了：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Success! Generated static files in vuepress.\n")])])]),s("p",[e._v("将打包好的vuepress目录上传到你的github仓库，和github page配合，就可以配置好你的博客网站了。")])])},[],!1,null,null,null);r.options.__file="README.md";t.default=r.exports}}]);