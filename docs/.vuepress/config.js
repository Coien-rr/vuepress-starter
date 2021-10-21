module.exports = {
    title:"VuePress-Starter",
    description:"Guide you build your first VuePress project",
    base: '/VuePress-Start-Page/',
    locales: {
        '/': {
            lang: 'zh-CN',
            title: '探索 VuePress',
            description: '搭建你的第一个VuePress项目',
        },
        '/en/': {
            lang: 'en-US',
            title: 'Guide VuePress',
            description: 'Guide you build your first VuePress project',
        }
        
    },
    
    markdown: {
        lineNumbers: true
    },

    themeConfig: {
        logo: 'https://vuejs.org/images/logo.png',
        lastUpdate: 'Last Updated',
        locales: {
            '/': {
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

                navbar: [
                    {
                        text: '指南',
                        children: [
                            '/guide/README.md',
                            '/guide/getting-started.md',
                            '/guide/configuration.md',
                            '/guide/page.md'
                        ]
                    },
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
                selectLanguageText: '选择语言',
                selectLanguageName: '简体中文',
            },
            '/en/': {
                navbar: [
                    {
                        text: 'Guide',
                        link: '/en/guide/',
                    }
                ],
                selectLanguageName: 'English',
            }
        },
    },
}
