# 快速构建 :rocket:

## 依赖环境

- [Node.js v12+](https://nodejs.org/)
- [Yarn v1 classic](https://classic.yarnpkg.com/zh-Hans/)

## 手动安装

这一章节会引导你从头搭建一个简单的 VuePress 文档网站。

- **步骤1**: 创建并进入一个新目录

```bash
mkdir vuepress-starter
cd vuepress-starter
```

- **步骤2**: 初始化项目

```bash
yarn init
```

- **步骤3**: 将 VuePress 安装为本地依赖

```bash
yarn add -D vuepress@next
```

- **步骤4**: 在 `package.json` 中添加一些 [scripts](https://classic.yarnpkg.com/zh-Hans/docs/package-json#toc-scripts)

```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

- **步骤6**: 创建你的第一篇文档

```bash
mkdir docs
echo '# Hello VuePress' > docs/README.md
```

- **步骤7**: 在本地启动服务器来开发你的文档网站

```bash
yarn docs:dev
```

VuePress 会在 [http://localhost:8080](http://localhost:8080) 启动一个热重载的开发服务器。当你修改你的 Markdown 文件时，浏览器中的内容也会自动更新。

现在，你应该已经有了一个简单可用的 VuePress 文档网站。
