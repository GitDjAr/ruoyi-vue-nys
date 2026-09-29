import { PERMISSIONS } from './permissions'

// component 使用 views 下的相对路径，由 permission store 转换为懒加载组件。
export const localRoutes = [
  {
    path: '/system',
    component: 'Layout',
    redirect: 'noRedirect',
    name: 'System',
    alwaysShow: true,
    meta: { title: '系统管理', icon: 'system' },
    children: [
      {
        path: 'user',
        component: 'system/user/index',
        name: 'User',
        permissions: [PERMISSIONS.SYSTEM_USER_LIST],
        meta: { title: '用户管理', icon: 'user' }
      },
      {
        path: 'role',
        component: 'system/role/index',
        name: 'Role',
        permissions: [PERMISSIONS.SYSTEM_ROLE_LIST],
        meta: { title: '角色管理', icon: 'peoples' }
      },
      {
        path: 'menu',
        component: 'system/menu/index',
        name: 'Menu',
        permissions: [PERMISSIONS.SYSTEM_MENU_LIST],
        meta: { title: '菜单管理', icon: 'tree-table' }
      },
      {
        path: 'dept',
        component: 'system/dept/index',
        name: 'Dept',
        permissions: [PERMISSIONS.SYSTEM_DEPT_LIST],
        meta: { title: '部门管理', icon: 'tree' }
      },
      {
        path: 'post',
        component: 'system/post/index',
        name: 'Post',
        permissions: [PERMISSIONS.SYSTEM_POST_LIST],
        meta: { title: '岗位管理', icon: 'post' }
      },
      {
        path: 'dict',
        component: 'system/dict/index',
        name: 'Dict',
        permissions: [PERMISSIONS.SYSTEM_DICT_LIST],
        meta: { title: '字典管理', icon: 'dict' }
      },
      {
        path: 'config',
        component: 'system/config/index',
        name: 'Config',
        permissions: [PERMISSIONS.SYSTEM_CONFIG_LIST],
        meta: { title: '参数设置', icon: 'edit' }
      },
      {
        path: 'notice',
        component: 'system/notice/index',
        name: 'Notice',
        permissions: [PERMISSIONS.SYSTEM_NOTICE_LIST],
        meta: { title: '通知公告', icon: 'message' }
      }
    ]
  },
  {
    path: '/monitor',
    component: 'Layout',
    redirect: 'noRedirect',
    name: 'Monitor',
    alwaysShow: true,
    meta: { title: '系统监控', icon: 'monitor' },
    children: [
      {
        path: 'online',
        component: 'monitor/online/index',
        name: 'Online',
        permissions: [PERMISSIONS.MONITOR_ONLINE_LIST],
        meta: { title: '在线用户', icon: 'online' }
      },
      {
        path: 'job',
        component: 'monitor/job/index',
        name: 'Job',
        permissions: [PERMISSIONS.MONITOR_JOB_LIST],
        meta: { title: '定时任务', icon: 'job' }
      },
      {
        path: 'server',
        component: 'monitor/server/index',
        name: 'Server',
        permissions: [PERMISSIONS.MONITOR_SERVER_LIST],
        meta: { title: '服务监控', icon: 'server' }
      },
      {
        path: 'cache',
        component: 'monitor/cache/index',
        name: 'Cache',
        permissions: [PERMISSIONS.MONITOR_CACHE_LIST],
        meta: { title: '缓存监控', icon: 'redis' }
      },
      {
        path: 'operlog',
        component: 'monitor/operlog/index',
        name: 'Operlog',
        permissions: [PERMISSIONS.MONITOR_OPERLOG_LIST],
        meta: { title: '操作日志', icon: 'form' }
      },
      {
        path: 'logininfor',
        component: 'monitor/logininfor/index',
        name: 'Logininfor',
        permissions: [PERMISSIONS.MONITOR_LOGININFOR_LIST],
        meta: { title: '登录日志', icon: 'logininfor' }
      }
    ]
  },
  {
    path: '/tool',
    component: 'Layout',
    redirect: 'noRedirect',
    name: 'Tool',
    alwaysShow: true,
    meta: { title: '系统工具', icon: 'tool' },
    children: [
      {
        path: 'build',
        component: 'tool/build/index',
        name: 'Build',
        permissions: [PERMISSIONS.TOOL_BUILD_VIEW],
        meta: { title: '表单构建', icon: 'build' }
      },
      {
        path: 'gen',
        component: 'tool/gen/index',
        name: 'Gen',
        permissions: [PERMISSIONS.TOOL_GEN_LIST],
        meta: { title: '代码生成', icon: 'code' }
      }
    ]
  }
]
