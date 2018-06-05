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
    redirect: '/work/work/workList'
  },
  {
    path: '/work/work',
    redirect: '/work/work/workList'
  },
  {
    path: '/work/manage',
    redirect: '/work/manage/employee/lists'
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
        },
        children: [
          {
            // 员工管理-管理中心
            path: 'employee',
            component: function (resolve) {
              require(['./components/manage-manage/employee-manage/employee-manage.vue'], resolve)
            },
            children: [
              {
                // 员工设置
                path: 'setting',
                component: function (resolve) {
                  require(['./components/manage-manage/employee-manage/employee-manage-setting.vue'], resolve)
                }
              },
              {
                // 员工列表
                path: 'lists',
                component: function (resolve) {
                  require(['./components/manage-manage/employee-manage/employee-manage-lists.vue'], resolve)
                }
              }, {
                // 员工分组
                path: 'grouping',
                component: function (resolve) {
                  require(['./components/manage-manage/employee-manage/employee-manage-grouping.vue'], resolve)
                }
              }
            ]
          },
          {
            // 操作记录-管理中心
            path: 'log',
            component: function (resolve) {
              require(['./components/manage-manage/log-manage/log-manage.vue'], resolve)
            }
          }, {
            // 系统设置-管理中心
            path: 'system',
            component: function (resolve) {
              require(['./components/manage-manage/system-manage/system-manage.vue'], resolve)
            },
            children: [
              {
                // 规则设置
                path: 'rule',
                component: function (resolve) {
                  require(['./components/manage-manage/system-manage/system-manage-rule.vue'], resolve)
                }
              },
              {
                // 应用设置
                path: 'app',
                component: function (resolve) {
                  require(['./components/manage-manage/system-manage/system-manage-app.vue'], resolve)
                }
              }
            ]
          }
        ]
      },
      {
        // 工单管理
        path: 'work',
        component: function (resolve) {
          require(['./components/manage-work/work.vue'], resolve)
        },
        children: [
          {
            // 工单管理-列表
            path: 'workList',
            component: function (resolve) {
              require(['./components/manage-work/workList.vue'], resolve)
            }
          },
          {
            // 工单管理-已处理详情
            path: 'processedWorkDetails',
            component: function (resolve) {
              require(['./components/manage-work/processedWorkDetails.vue'], resolve)
            }
          },
          {
            // 工单管理-待处理详情
            path: 'pendingWorkDetails',
            component: function (resolve) {
              require(['./components/manage-work/pendingWorkDetails.vue'], resolve)
            }
          },
        ]
      },

    ]
  }
]
