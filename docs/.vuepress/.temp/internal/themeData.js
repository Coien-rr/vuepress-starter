export const themeData = {
  "logo": "https://vuejs.org/images/logo.png",
  "lastUpdate": "Last Updated",
  "locales": {
    "/": {
      "sidebar": {
        "/guide/": [
          {
            "text": "指南",
            "children": [
              "/guide/README.md",
              "/guide/getting-started.md",
              "/guide/configuration.md",
              "/guide/page.md"
            ]
          }
        ]
      },
      "navbar": [
        {
          "text": "指南",
          "title": "指南",
          "children": [
            "/guide/README.md",
            "/guide/getting-started.md",
            "/guide/configuration.md",
            "/guide/page.md"
          ]
        },
        {
          "text": "Foo",
          "link": "/foo/"
        },
        {
          "text": "Group",
          "children": [
            {
              "text": "foo",
              "link": "/group/foo.md"
            },
            {
              "text": "bar",
              "link": "/group/bar.md"
            }
          ]
        }
      ],
      "selectLanguageText": "选择语言",
      "selectLanguageName": "简体中文"
    },
    "/en/": {
      "navbar": [
        {
          "text": "Guide",
          "link": "/en/guide/"
        }
      ],
      "selectLanguageName": "English"
    }
  },
  "navbar": [],
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebar": "auto",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
