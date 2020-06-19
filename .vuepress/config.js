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
        title: '计算机基础',   // 必要的
        path: '/CSBasics/',      // 可选的
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/CSBasics/network/',
        ]
      },
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
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/Algos/LeetCode/',
        ]
      },
      {
        title: '架构',   // 必要的
        path: '/Arch/',      // 可选的
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/Arch/Distributed/',
          '/Arch/SOA/',
          '/Arch/MicroService/',
        ]
      },
      {
        title: '组件',   // 必要的
        path: '/Infras/',      // 可选的
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/Infras/Cache/',
          '/Infras/MQ/',
          '/Infras/RPC/',
          '/Infras/Nginx/',
        ]
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
      },
      {
        title: '设计模式',   // 必要的
        path: '/RD/design-pattern/',      // 可选的
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
      }
    ]
  }
}
