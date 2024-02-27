// 常量路由
export const constRoute = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录',
      hidden: true, // 菜单中是否隐藏路由
      icon: `Plus`,
    },
    children: [],
  },
  {
    path: '/',
    name: 'layout',
    component: () => import('@/layout/index.vue'),
    redirect: '/home',
    meta: {
      title: 'layout',
      icon: `Plus`,
    },
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
          icon: `HomeFilled`,
        },
      },
    ],
  },
  {
    path: '/screen',
    name: 'Screen',
    component: () => import('@/views/screen/index.vue'),
    meta: {
      title: '数据大屏',
      icon: `Platform`,
    },
  },
  {
    path: '/acl',
    name: 'Acl',
    component: () => import('@/layout/index.vue'),
    redirect: '/acl/user',
    meta: {
      title: '权限管理',
      icon: `Lock`,
    },
    children: [
      {
        path: '/acl/user',
        name: 'User',
        component: () => import('@/views/acl/user.vue'),
        meta: {
          title: '用户管理',
          icon: `User`,
        },
      },
      {
        path: '/acl/role',
        name: 'Role',
        component: () => import('@/views/acl/role.vue'),
        meta: {
          title: '角色管理',
          icon: `UserFilled`,
        },
      },
      {
        path: '/acl/permission',
        name: 'Permission',
        component: () => import('@/views/acl/permission.vue'),
        meta: {
          title: '菜单管理',
          icon: `Monitor`,
        },
      },
    ],
  },
  {
    path: '/product',
    name: 'Product',
    component: () => import('@/layout/index.vue'),
    redirect: '/product/trademark',
    meta: {
      title: '商品管理',
      icon: 'Goods',
    },
    children: [
      {
        path: '/product/trademark',
        name: 'Trademark',
        component: () => import('@/views/product/trademark.vue'),
        meta: {
          title: '品牌管理',
          icon: `ShoppingCartFull`,
        },
      },
      {
        path: '/product/attr',
        name: 'Attr',
        component: () => import('@/views/product/attr.vue'),
        meta: {
          title: '属性管理',
          icon: `ChromeFilled`,
        },
      },
      {
        path: '/product/spu',
        name: 'Spu',
        component: () => import('@/views/product/spu.vue'),
        meta: {
          title: 'SPU管理',
          icon: `calendar`,
        },
      },
      {
        path: '/product/sku',
        name: 'Sku',
        component: () => import('@/views/product/sku.vue'),
        meta: {
          title: 'SKU管理',
          icon: `Orange`,
        },
      },
    ],
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404/index.vue'),
    meta: {
      title: '404',
      hidden: true,
      icon: `DocumentDelete`,
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Any',
    redirect: '/404',
    meta: {
      title: '任意路由',
      hidden: true,
      icon: `Tools`,
    },
  },
];
