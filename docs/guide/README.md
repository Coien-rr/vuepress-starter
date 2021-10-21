# 介绍

VuePress 是一个以 Markdown 为中心的静态网站生成器。你可以使用 [Markdown](https://zh.wikipedia.org/wiki/Markdown) 来书写内容（如文档、博客等），然后 VuePress 会帮助你生成一个静态网站来展示它们。

VuePress 诞生的初衷是为了支持 Vue.js 及其子项目的文档需求，但是现在它已经在帮助大量用户构建他们的文档、博客和其他静态网站。

## 它是如何工作的？

一个 VuePress 站点本质上是一个由 [Vue](https://v3.vuejs.org/) 和 [Vue Router](https://next.router.vuejs.org) 驱动的单页面应用 (SPA)。

路由会根据你的 Markdown 文件的相对路径来自动生成。每个 Markdown 文件都通过 [markdown-it](https://github.com/markdown-it/markdown-it) 编译为 HTML ，然后将其作为 Vue 组件的模板。因此，你可以在 Markdown 文件中直接使用 Vue 语法，便于你嵌入一些动态内容。

在开发过程中，我们启动一个常规的开发服务器 (dev-server) ，并将 VuePress 站点作为一个常规的 SPA。如果你以前使用过 Vue 的话，你在使用时会感受到非常熟悉的开发体验。

在构建过程中，我们会为  VuePress 站点创建一个服务端渲染 (SSR) 的版本，然后通过虚拟访问每一条路径来渲染对应的 HTML 。这种做法的灵感来源于 [Nuxt](https://nuxtjs.org/) 的 `nuxt generate` 命令，以及其他的一些项目，比如 [Gatsby](https://www.gatsbyjs.org/)。

### VuePress的特点

* 为技术文档而优化的 内置 Markdown 拓展
* 在 Markdown 文件中使用 Vue 组件的能力
* Vue 驱动的自定义主题系统
* 自动生成 Service Worker
* Google Analytics 集成
* 基于 Git 的 “最后更新时间”
* 多语言支持
* 默认主题包含

## 题外话

**VuePress** 是尤大为了支持 Vue 及其子项目的文档需求而写的一个项目，VuePress界面十分简洁，非常容易上手，一个小时就可以将项目架构搭好。现在已经有很多这种类型的文档，如果你有写技术文档的需求，VuePress绝对可以成为你的备选项之一。**在开始构建第一个VuePress项目之前请了解一下**[官方文档](https://v2.vuepress.vuejs.org/zh/guide/)
