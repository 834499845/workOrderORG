export default [
  {
    path: '/',
    redirect: '/login'
  },
  {
    // 登录模块
    path: '/login',
    component: function (resolve) {
      require(['./components/login.vue'], resolve)
    }
  },
  {
    path: '/news',
    redirect: '/news/user'
  },
  {
    // 新闻模块
    path: '/news',
    component: function (resolve) {
      require(['./components/news/news.vue'], resolve)
    },
    children: [
      {
        // 用户管理-列表
        path: 'user',
        component: function (resolve) {
          require(['./components/news/manage-user/user.vue'], resolve)
        }
      },
      {
        // 新闻管理-列表
        path: 'administrivia',
        component: function (resolve) {
          require(['./components/news/manage-news/newsistrivia.vue'], resolve)
        }
      },
    ]
  }
]
