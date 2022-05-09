export default [
    {
        path: '/detail/:stuId',
        component: () => import('../views/Detail')
    }
    ,
    {   
        name: "addCart",
        path: '/AddCart/:stuId',
        component: () => import('../views/AddCartSuccess'),
        meta: {show: true}
    },
    {   
        name: "shopCart",
        path: '/shopCart',
        component: () => import('../views/ShopCart'),
        // meta: {show: true}
    }
    ,
    {
        path: '/home',
        component: () => import('../views/Home'),
        meta: {show: true}
    },
    {
        path: '/login',
        component: () => import('../views/Login'),
        meta: {show: false}
    },
    {   
        name: 'search',
        path: '/search:keyword?',
        component: () => import('../views/Search'),
        meta: {show: true},
    },
    {
        path: '/register',
        component: () => import('../views/Register'),
        meta: {show: false}
    },
    {
        path: '/',
        redirect: '/home'
    }
]
