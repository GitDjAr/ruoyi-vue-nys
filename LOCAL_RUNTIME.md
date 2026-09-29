# 本地配置运行模式

项目支持两种运行模式：

- `local`：登录、用户信息、路由、权限和字典读取前端本地配置。
- `remote`：继续使用若依原有后端接口。

在对应环境文件中切换：

```env
VITE_APP_RUNTIME_MODE = 'local'
```

改为 `remote` 后，将恢复 `/login`、`/getInfo`、`/getRouters` 和字典接口请求。

## 配置文件

```text
src/config/runtime.js       运行模式判断
src/config/routes.js        菜单和动态路由
src/config/permissions.js   权限常量、角色权限关系
src/config/dicts.js         本地字典
src/config/users.js         本地演示用户
src/services/local-runtime.js
                            本地登录、用户信息和路由过滤适配
```

页面原有的以下调用方式保持不变：

```js
const { sys_normal_disable } = useDict('sys_normal_disable')
```

```vue
<el-button v-hasPermi="['system:user:add']">新增</el-button>
```

## 本地账号

```text
管理员：admin / admin123
只读用户：viewer / viewer123
```

`admin` 拥有 `*:*:*` 权限。`viewer` 的权限列表在
`src/config/permissions.js` 中维护。

## 注意

本地模式解决的是登录壳、菜单、路由、按钮权限和字典配置。系统管理等业务页面中的
CRUD 接口仍然保留原若依 API，需要按项目需求逐步替换为本地 Service、Mock 或实际后端。

前端权限只能控制菜单和按钮是否显示，不能作为真实的数据安全边界。本地账号和明文密码
