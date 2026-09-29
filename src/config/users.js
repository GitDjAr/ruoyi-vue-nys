import { rolePermissions } from './permissions'

// 仅用于本地演示，不应作为真实系统的身份认证数据。
export const localUsers = [
  {
    userId: 1,
    userName: 'admin',
    password: 'admin123',
    nickName: '本地管理员',
    avatar: '',
    roles: ['admin'],
    permissions: rolePermissions.admin
  },
  {
    userId: 2,
    userName: 'viewer',
    password: 'viewer123',
    nickName: '只读用户',
    avatar: '',
    roles: ['viewer'],
    permissions: rolePermissions.viewer
  }
]

export function findLocalUser(username) {
  return localUsers.find(user => user.userName === username)
}
