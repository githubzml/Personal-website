(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{171:function(t,e,r){"use strict";r.r(e);var s=r(20),a=Object(s.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"如何打造一款自己的-vscode-主题？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#如何打造一款自己的-vscode-主题？","aria-hidden":"true"}},[t._v("#")]),t._v(" 如何打造一款自己的 VSCode 主题？")]),t._v(" "),r("blockquote",[r("p",[t._v("本文首发于个人博客")])]),t._v(" "),r("p",[t._v("我之前一直用 "),r("strong",[t._v("One Dark Pro")]),t._v(" 后来又转到 "),r("strong",[t._v("Material Theme Palenight")]),t._v(" 再到后来的 "),r("strong",[t._v("Dracula")]),t._v(" 。总觉得有些配色很奇怪（工作太闲），于是写了一个 VSCode 深色主题："),r("a",{attrs:{href:"https://github.com/hubingliang/Duang",target:"_blank",rel:"noopener noreferrer"}},[t._v("Duang"),r("OutboundLink")],1),t._v("，之所以叫Duang是因为它很黑，很亮，很柔....")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/18/16a30374038ac5db?w=446&h=315&f=jpeg&s=36465",alt:""}})]),t._v(" "),r("p",[r("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=Brownhu.duang",target:"_blank",rel:"noopener noreferrer"}},[t._v("大家可以在这下载体验"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/hubingliang/Duang",target:"_blank",rel:"noopener noreferrer"}},[t._v("github 在这里"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/18/16a303c83daf3bb6?w=1514&h=450&f=png&s=107690",alt:""}}),t._v("\n如果你也对编辑器有自己独特风格的偏好，但是在成千上万款主题中又没有一款主题完全符合你的口味，那么跟着下面的流程我们自己动手做一个完全符合自己风格的主题吧。")]),t._v(" "),r("hr"),t._v(" "),r("h2",{attrs:{id:"注册你的开发者帐号和配置-token"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#注册你的开发者帐号和配置-token","aria-hidden":"true"}},[t._v("#")]),t._v(" 注册你的开发者帐号和配置 token")]),t._v(" "),r("p",[t._v("如果你安装过其他的 VSCode 主题的话应该知道，所有主题都属于 VSCode插件。那么要开发插件，必不可少的工具就是 "),r("a",{attrs:{href:"https://github.com/Microsoft/vscode-vsce",target:"_blank",rel:"noopener noreferrer"}},[t._v("vsce"),r("OutboundLink")],1),t._v("，这个是官方管理插件的工具，所有插件都通过这个工具来发布。")]),t._v(" "),r("p",[t._v("如果你英文够好，建议看 VSCode 官网的这篇"),r("a",{attrs:{href:"https://code.visualstudio.com/api/working-with-extensions/publishing-extension",target:"_blank",rel:"noopener noreferrer"}},[t._v("文章"),r("OutboundLink")],1),t._v("来学习从申请账号到发布插件的整个流程，非常详细。当然也可以跟着我后面的流程一起。")]),t._v(" "),r("p",[t._v("首先全局安装 "),r("strong",[t._v("vsce")]),t._v(" :")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("npm install -g vsce\n")])])]),r("p",[t._v("之后你需要去注册一个账号，网址在这："),r("a",{attrs:{href:"https://azure.microsoft.com/zh-cn/services/devops/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure DevOps Services | Microsoft Azure"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("登陆之后，首先新建一个 "),r("strong",[t._v("public")]),t._v(" 项目:")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/18/16a2fc45a7e1f7c1?w=627&h=550&f=png&s=40656",alt:""}})]),t._v(" "),r("p",[r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/18/16a2fbc998050c96?w=1492&h=925&f=png&s=207120",alt:""}})]),t._v(" "),r("p",[t._v("然后获取你的 "),r("strong",[t._v("Personal access tokens")]),t._v(" ，点击右上角的头像，点击 "),r("strong",[t._v("Security")]),t._v("。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/18/16a2fc9eafaf6678?w=233&h=279&f=png&s=13476",alt:""}})]),t._v(" "),r("p",[t._v("为你的 "),r("strong",[t._v("token")]),t._v(" 指定一个名称，时间的话最长到期可以设置为一年。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/18/16a2fcf53e722c4a?w=1509&h=1004&f=png&s=192787",alt:""}})]),t._v(" "),r("p",[t._v("点击查看所有的配置项，找到 "),r("strong",[t._v("Marketplace")]),t._v(" 并选择 "),r("strong",[t._v("Acquire")]),t._v(" and "),r("strong",[t._v("Manage")]),t._v("：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/18/16a2fd0406d2c348?w=1510&h=1005&f=png&s=192921",alt:""}})]),t._v(" "),r("p",[t._v("点击 "),r("strong",[t._v("Create")]),t._v(" ，复制生成的 "),r("strong",[t._v("token")]),t._v("，之后就要用到我们刚才安装的 "),r("strong",[t._v("vsce")]),t._v(" 来创建新的发布者（publisher）")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("vsce create-publisher (发布者的名字)\n")])])]),r("p",[t._v("回车之后会依次提示输入"),r("strong",[t._v("name")]),t._v("、"),r("strong",[t._v("email")]),t._v("，和你刚刚复制的 "),r("strong",[t._v("token")]),t._v("。")]),t._v(" "),r("p",[t._v("现在你可以通过下面这个命令来登陆:")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("vsce login (发布者的名字)\n")])])]),r("p",[t._v("到此为止我们第一步就完成了，不要觉得繁琐，因为这些我们只需要配置一次就好了，每次开发插件的时候都不用重复这些操作。")]),t._v(" "),r("p",[t._v("如果你遇到文中没有提到的问题，我继续建议你看官方这两篇文章")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://docs.microsoft.com/zh-cn/azure/devops/organizations/accounts/create-organization?view=azure-devops",target:"_blank",rel:"noopener noreferrer"}},[t._v("创建账号"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://code.visualstudio.com/api/working-with-extensions/publishing-extension",target:"_blank",rel:"noopener noreferrer"}},[t._v("发布扩展"),r("OutboundLink")],1)])]),t._v(" "),r("hr"),t._v(" "),r("h2",{attrs:{id:"用脚手架生成基本的插件代码"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#用脚手架生成基本的插件代码","aria-hidden":"true"}},[t._v("#")]),t._v(" 用脚手架生成基本的插件代码")]),t._v(" "),r("p",[t._v("之后我们需要安装一个脚手架工具：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("npm install -g yo generator-code\n")])])]),r("p",[t._v("然后运行下面的命令👇，它可以在任何目录中生成一套基本的插件代码：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("yo code\n")])])]),r("p",[r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/18/16a2fe0fab9fb691?w=1060&h=916&f=png&s=258431",alt:""}})]),t._v(" "),r("p",[t._v("我们要开发一个主题，所以选中 "),r("strong",[t._v("New Color Theme")]),t._v("，之后会继续询问你是否新建主题还是从现有主题导入，我们这里选创建一个全新的。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/18/16a2fe3e4302080e?w=2022&h=184&f=png&s=116013",alt:""}})]),t._v(" "),r("p",[t._v("之后还会问你一些问题：")]),t._v(" "),r("ul",[r("li",[t._v("插件名字")]),t._v(" "),r("li",[t._v("标识符")]),t._v(" "),r("li",[t._v("描述 （这个后面可以在"),r("strong",[t._v("package.json")]),t._v("里面改）")]),t._v(" "),r("li",[t._v("发布者的名字 (见前文)")]),t._v(" "),r("li",[t._v("对于用户这个插件的名字")]),t._v(" "),r("li",[t._v("这个主题是dark还是light还是高对比度")])]),t._v(" "),r("p",[t._v("之后就会为我们生成一套主题插件的基本代码，到此为止我们已经完成了80%了，剩下的就只需要更改生成目录 "),r("strong",[t._v("themes")]),t._v(" 下的 "),r("strong",[t._v("json")]),t._v(" 文件就可以了，但是....")]),t._v(" "),r("hr"),t._v(" "),r("h2",{attrs:{id:"修改themes下的json文件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#修改themes下的json文件","aria-hidden":"true"}},[t._v("#")]),t._v(" 修改themes下的json文件")]),t._v(" "),r("p",[t._v("看似很简单的事情，其实是我认为最难的，因为要设计一款，好看的主题，配色真的太难了！！！")]),t._v(" "),r("p",[t._v("很多我以为会很好看的颜色，改进去却like a shit....")]),t._v(" "),r("p",[t._v("em.....扯远了")]),t._v(" "),r("p",[t._v("首先用 VSCode 打开生成的目录，我们看到结构如下：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/18/16a3009f1663e799?w=4096&h=3072&f=jpeg&s=654365",alt:"221555584047_.pic_hd.jpg"}})]),t._v(" "),r("p",[t._v("之后我们的工作都会在 "),r("strong",[t._v("themes")]),t._v(" 下的 "),r("strong",[t._v("json")]),t._v(" 文件展开，不要害怕，我们其实不需要看完这几百上千行 json 文件的意思。")]),t._v(" "),r("p",[t._v("首先我们先进去调试模式，看看脚本自动生成的主题是什么样子的：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/18/16a300dbfbd72558?w=2048&h=1536&f=png&s=366435",alt:""}})]),t._v(" "),r("p",[t._v("点击调试，会自动打开一个新的 VSCode 窗口展示预设的主题。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/18/16a301018c9aec7d?w=2772&h=1754&f=png&s=633003",alt:""}})]),t._v(" "),r("p",[t._v("接下来 "),r("strong",[t._v("Command + Shift + P")]),t._v(" 输入 "),r("strong",[t._v("Developer: Inspect TM Scopes")])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/18/16a30132c4f482c7?w=1190&h=1094&f=png&s=165318",alt:""}})]),t._v(" "),r("p",[t._v("现在你可以看文件中每一个字符的颜色配置在哪了，只需要在 json 文件里搜对应的配置就好了。")]),t._v(" "),r("p",[t._v("如果你觉得不习惯，你甚至可以打开和 "),r("strong",[t._v("Chrome")]),t._v(" 一样的开发者工具，快捷键是 "),r("strong",[t._v("option + command + i")])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/18/16a3015c6f12955f?w=3840&h=2114&f=png&s=2290633",alt:""}})]),t._v(" "),r("p",[t._v("不过我还是建议你用第一种方法，因为开发者工具有时候搜到颜色，但是你找不到配置项。")]),t._v(" "),r("hr"),t._v(" "),r("h2",{attrs:{id:"配色方案"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#配色方案","aria-hidden":"true"}},[t._v("#")]),t._v(" 配色方案")]),t._v(" "),r("p",[t._v("如果你现在一无所措，改了一些颜色也不尽如人意，那就看下我的配色建议：")]),t._v(" "),r("p",[t._v("首先我的建议是，直接抄你喜欢或者成熟主题对应的 "),r("strong",[t._v("json")]),t._v("文件，比如 "),r("strong",[t._v("One Dark Pro")]),t._v(" 、"),r("strong",[t._v("Material Theme Palenight")]),t._v("、"),r("strong",[t._v("Dracula")])]),t._v(" "),r("p",[t._v("之所以这样是因为出于几个考虑：")]),t._v(" "),r("ol",[r("li",[t._v("脚手架的配置项并不齐全，比如底部状态栏和侧边栏甚至光标的颜色都没有，而比较成熟下载量多的主题边边角角都配置到了，我们拿过来把对应的颜色全局替换就好了，不用再去官网上找对应的配置项。")]),t._v(" "),r("li",[t._v("并不是每种类型的字符配一种颜色，很多类型是复用同一种颜色的，但是对应关系并不好找，所以如果我们看到一个改一个很容易改的乱七八糟，所以拷贝过来之后每次改颜色，"),r("strong",[t._v("一定要全局替换，不要只改一个")]),t._v("！！！")]),t._v(" "),r("li",[t._v("因为之前可能有了喜欢的主题，只不过主题之中有一些元素不喜欢而已，这样也会省下很多工作量。")]),t._v(" "),r("li",[t._v("你可以借鉴一些主题的颜色，或者整体风格，由于都在json文件里面，你可以很方便的找到它。")])]),t._v(" "),r("p",[t._v("那么问题来了，那些主题的 "),r("strong",[t._v("json")]),t._v(" 文件我去哪里找呢？")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://vscodethemes.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),r("OutboundLink")],1),t._v("有几乎所有有名的 VSCode 主题，你可以点开看它的 "),r("strong",[t._v("github")]),t._v(" 那里就有它们的 "),r("strong",[t._v("json")]),t._v(" 文件，你可以clone整个项目，也可以单单只复制 "),r("strong",[t._v("json")]),t._v(" 。")]),t._v(" "),r("p",[r("strong",[t._v("注意，不要全部复制过来，只复制 "),r("strong",[t._v("colors")]),t._v(" 和 "),r("strong",[t._v("tokenColors")]),t._v(" 就可以了。")])]),t._v(" "),r("hr"),t._v(" "),r("p",[t._v("至于颜色的选取这里推荐几个网站，供大家参考：")]),t._v(" "),r("ol",[r("li",[r("a",{attrs:{href:"http://jxnblk.com/colorable/demos/text/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Colorable"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"http://colorsafe.co/",target:"_blank",rel:"noopener noreferrer"}},[t._v("colorsafe"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://color.adobe.com/zh/create",target:"_blank",rel:"noopener noreferrer"}},[t._v("Adobe Color CC"),r("OutboundLink")],1)])])])},[],!1,null,null,null);a.options.__file="vscode-theme.md";e.default=a.exports}}]);