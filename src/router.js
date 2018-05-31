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
    path: '/work',
    redirect: '/work/work'
  },
  {
    // 工单系统
    path: '/work',
    component: function (resolve) {
      require(['./components/work.vue'], resolve)
    },
    children: [
      {
        // 工单系统-管理中心
        path: 'manage',
        component: function (resolve) {
          require(['./components/manage-manage/manage.vue'], resolve)
        }
      },
      {
        // 新闻管理-工单管理
        path: 'work',
        component: function (resolve) {
          require(['./components/manage-work/work.vue'], resolve)
        }
      },
    ]
  }
]
