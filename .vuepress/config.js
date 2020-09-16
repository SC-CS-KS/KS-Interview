// .vuepress/config.js
module.exports = {
  title: '',  // 设置网站标题
  description : "",
  base : '/KS-Interview/',
  themeConfig: {
    nav : [
        { text: 'Github', link: 'http://www.github.com/sunnnychan' }
    ],
    sidebar: [
      {
        title: '基础',   // 必要的
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
          '/Java/basics/',
          '/Java/features/',
          '/Java/design-idea/',
          '/Java/concurrent/',
          '/Java/network/',
          '/Java/datastructure/',
          '/Java/jvm/',
          '/Java/jmm/',
          '/Java/spring/',
          '/Java/netty/',
        ]
      },
      {
        title: 'HowToDoInJava',   // 必要的
        path: '/HowToDoInJava/',      // 可选的
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/HowToDoInJava/QuestionsList/',
          '/HowToDoInJava/String/',
          '/HowToDoInJava/Collection/',
          '/HowToDoInJava/HashMap/',
          '/HowToDoInJava/Spring/',
          '/HowToDoInJava/Oracle-Interview-Questions/',
          '/HowToDoInJava/JavaPuzzlesList/',
          '/HowToDoInJava/Mid-level-Developer-Interview/',
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
        title: 'Web',   // 必要的
        path: '/RD/web/',      // 可选的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
      },
      {
        title: '高可用',   // 必要的
        path: '/HA/',      // 可选的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/HA/throttling/',
          '/HA/downgrade/',
          '/HA/fusing/',
        ]
      },
      {
        title: '编程范式',   // 必要的
        path: '/RD/paradigms/',      // 可选的
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 
        children: [
          '/RD/paradigms/OOP/',
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
