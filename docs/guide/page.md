# 页面 :pager:

VuePress 是以MarkDown为中心的，项目中的每一个MarkDown文件都是一个单独的页面。

## 路由

默认情况下，页面的路由路径是根据你的 Markdown 文件的相对路径决定的。

假设这是你的 Markdown 文件所处的目录结构：

```dir
└─ docs
   ├─ guide
   │  ├─ getting-started.md
   │  └─ README.md
   ├─ contributing.md
   └─ README.md
```

将 `docs` 目录作为你的 [sourceDir](../reference/cli.md) ，例如你在运行 `vuepress dev docs` 命令。此时，你的 Markdown 文件对应的路由路径为：

|      相对路径      |       路由路径        |
|--------------------|----------------------|
| `/README.md`       | `/`                  |
| `/contributing.md` | `/contributing.html` |
| `/guide/README.md` | `/guide/`            |
| `/guide/page.md`   | `/guide/page.html`   |

由上可得 `README.md` 是一个文件夹路径下的默认入口

## Frontmatter

Markdown 文件可以包含一个 [YAML](https://yaml.org/) Frontmatter 。Frontmatter 必须在 Markdown 文件的顶部，并且被包裹在一对三短划线中间。下面是一个基本的示例：

```md
---
lang: zh-CN
title: 页面的标题
description: 页面的描述
---
```

你肯定注意到 Frontmatter 中的字段和[配置文件](./configuration.md#config-file)中的[站点配置](./configuration.md#站点配置)十分类似。你可以通过 Frontmatter 来覆盖当前页面的 `lang`, `title`, `description` 等属性。因此，你可以把 Frontmatter 当作页面级作用域的配置。

在Frontmatter中你可以设置`home`、`heroImage`、`actions`、`features`、`footer`等属性

**举个例子:**

```md
---
home: true # 是否为home页
heroImage: /guide.jpg # 图片路径
heroAlt: Guide Image 
actions: # 按钮属性
  - text: 快速上手 →
    link: /guide/
    type: primary
features: # 块状属性
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
---
```

**渲染出的效果如下:**

![Image](/image/homepageDemo.png)

## 导航栏

官方文档中关于导航栏的描述略抽象，所以还是实操一下容易上手。

- 示例：

```js
module.exports = {
  themeConfig: {
    navbar: [
        // NavbarItem
        {
            text: 'Foo',
            link: '/foo/',
        },
        // NavbarGroup
        {
            text: 'Group',
            children: [
                {
                    text: 'foo',
                    link: '/group/foo.md',
                },
                {
                    text: 'bar',
                    link: '/group/bar.md',
                },
            ],
        },
    ],
  },
}
```

**渲染效果如下：**

![Image](/image/navDemo.png)

## 侧边栏

个人觉得侧边栏比导航栏复杂一些，老规矩，实操上手！

- 示例：

```js
module.exports = {
  themeConfig: {
    // 侧边栏对象
    // 不同子路径下的页面会使用不同的侧边栏
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          children: [
              '/guide/README.md',
              '/guide/getting-started.md',
              '/guide/configuration.md',
              '/guide/page.md'
            ],
        },
      ],
    },
  },
}
```

**渲染效果如下：**

![Image](/image/sidebarDemo.png)

## 内容

页面的主要内容是使用 Markdown 书写的。VuePress 首先会将 Markdown 转换为 HTML ，然后将 HTML 作为 Vue 单文件组件的 `<template>` 。如果你还不了解 Markdown ，请先学习一些 [Markdown 教程](https://commonmark.org/help/)。
