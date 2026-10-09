import { getLocalDict } from '@/config/dicts';
import { localRoutes } from '@/config/routes';
import { findLocalUser } from '@/config/users';

const LOCAL_USER_KEY = 'RuoYi-Local-User';

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function getCurrentUser() {
  const username = localStorage.getItem(LOCAL_USER_KEY);
  return findLocalUser(username);
}

function hasAnyPermission(required, permissions) {
  return permissions.includes('*:*:*') || required.some(item => permissions.includes(item));
}

function hasAnyRole(required, roles) {
  return roles.includes('admin') || required.some(item => roles.includes(item));
}

function filterRoutes(routes, roles, permissions) {
  return routes.reduce((result, item) => {
    if (item.roles && !hasAnyRole(item.roles, roles)) {
      return result;
    }
    if (item.permissions && !hasAnyPermission(item.permissions, permissions)) {
      return result;
    }

    const route = { ...item };
    if (item.children) {
      route.children = filterRoutes(item.children, roles, permissions);
      if (item.children.length > 0 && route.children.length === 0) {
        return result;
      }
    }
    result.push(route);
    return result;
  }, []);
}

export function localLogin(username, password) {
  const user = findLocalUser(username);
  if (!user || user.password !== password) {
    return Promise.reject(new Error('用户名或密码错误'));
  }

  localStorage.setItem(LOCAL_USER_KEY, user.userName);
  return Promise.resolve({
    code: 200,
    token: `local-${user.userName}-${Date.now()}`
  });
}

export function localGetInfo() {
  const user = getCurrentUser();
  if (!user) {
    return Promise.reject(new Error('本地登录状态已失效'));
  }

  const { password, ...profile } = user;
  return Promise.resolve({
    code: 200,
    user: clone(profile),
    roles: [...user.roles],
    permissions: [...user.permissions],
    isDefaultModifyPwd: false,
    isPasswordExpired: false,
    pwdChrtype: ''
  });
}

export function localLogout() {
  localStorage.removeItem(LOCAL_USER_KEY);
  return Promise.resolve({ code: 200 });
}

export function localUnlock(password) {
  const user = getCurrentUser();
  if (!user || user.password !== password) {
    return Promise.reject(new Error('密码错误'));
  }
  return Promise.resolve({ code: 200 });
}

export function getLocalRoutes(roles, permissions) {
  return clone(filterRoutes(localRoutes, roles, permissions));
}

export { getLocalDict };
