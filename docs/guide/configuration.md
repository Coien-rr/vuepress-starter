# 配置 :gear:

## 配置文件

如果没有任何配置，你的 VuePress 站点仅有一些最基础的功能。为了更好地自定义你的网站，让我们首先在你的文档目录下创建一个 `.vuepress` 目录（前面的初始化操作后，这个文件夹可能已经存在了），所有 VuePress 相关的文件都将会被放在这里。你的项目结构可能是这样：

```dir
├─ docs
│  ├─ .vuepress
│  │  └─ config.js
│  └─ README.md
├─ .gitignore
└─ package.json
```

或许这个结构和你目前的不一样，你可能还有'.cache' '.temp'等文件夹，没有关系，你现在只需要关注上述结构中的文件。

VuePress 站点必要的配置文件是 `.vuepress/config.js`，它应该导出一个 JavaScript 对象。

```js
module.exports = {
  lang: 'zh-CN',
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点',

  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
  },
}
```

:::提示
我们接下来会把这个配置对象称为**VuePress配置**
:::

## 配置作用域

在VuePress配置中有意向 `themeConfig` 配置项。

在 `themeConfig` 外部的配置项属于 **站点配置** ，而在 `themeConfig` 内部的配置项则属于 **主题配置**。

### 站点配置

站点配置的意思是，无论你使用什么主题，这些配置项都可以生效。

我们知道，每一个站点都应该有它的 `lang`, `title` 和 `description` 等属性，因此 VuePress 内置支持了这些属性的配置。

::: tip
前往 [官方文档配置参考](https://v2.vuepress.vuejs.org/zh/reference/config.html#%E7%AB%99%E7%82%B9%E9%85%8D%E7%BD%AE) 查看了解所有站点配置。
:::

### 主题配置

主题配置将会被 VuePress 主题来处理，所以它取决于你使用的主题是什么。

如果你没有设置 VuePress 配置的 `theme` 配置项，则代表使用的是默认主题。

::: tip
前往 [官方文档 > 默认主题 > 配置参考]([../reference/default-theme/config.md](https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html)) 查看了解所有默认主题的配置。
:::

**不过现在你并不需要了解所有配置！！！**
