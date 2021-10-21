import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-6ce48554","/contributing.html","",["/contributing","/contributing.md"]],
  ["v-8daa1a0e","/","",["/index.html","/README.md"]],
  ["v-61ae53c2","/en/contributing.html","",["/en/contributing","/en/contributing.md"]],
  ["v-2d0a870d","/en/","",["/en/index.html","/en/README.md"]],
  ["v-4f4ccb8f","/guide/configuration.html","配置 ⚙️",["/guide/configuration","/guide/configuration.md"]],
  ["v-fb0f0066","/guide/getting-started.html","快速构建 🚀",["/guide/getting-started","/guide/getting-started.md"]],
  ["v-4eaf9f84","/guide/page.html","页面 📟",["/guide/page","/guide/page.md"]],
  ["v-fffb8e28","/guide/","介绍",["/guide/index.html","/guide/README.md"]],
  ["v-14b23dff","/en/guide/getting-stared.html","",["/en/guide/getting-stared","/en/guide/getting-stared.md"]],
  ["v-e6412400","/en/guide/","Introduction",["/en/guide/index.html","/en/guide/README.md"]],
  ["v-3706649a","/404.html","",["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
