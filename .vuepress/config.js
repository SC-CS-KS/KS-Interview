// .vuepress/config.js
module.exports = {
  title: 'Get Offer',  // 设置网站标题
  description : "",
  base : '/KS-Interview/',
  themeConfig: {
    nav : [
        { text: 'Github', link: 'http://www.github.com/sunnnychan' }
    ],
    sidebar: [
      {
        title: 'Java',   // 必要的
        path: '/Java/',      // 可选的
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/Java/basic/',
          '/Java/concurrent/',
          '/Java/Network/',
          '/Java/DS/',
          '/Java/JVM/',
          '/Java/Spring/',
          '/Java/Netty/',
        ]
      },
      {
        title: '算法',   // 必要的
        path: '/Algos/',      // 可选的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
      },
      {
        title: '架构',   // 必要的
        path: '/Arch/',      // 可选的
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
      },
      {
        title: '组件',   // 必要的
        path: '/Infras/',      // 可选的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
      },
      {
        title: '数据库',   // 必要的
        path: '/Database/',      // 可选的
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/Database/MySQL/',
          '/Database/Redis/',
        ]
      }
    ]
  }
}
