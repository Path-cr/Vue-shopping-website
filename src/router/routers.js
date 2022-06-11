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
        // name: "shopcart",
        path: '/shopcart',
        component: () => import('../views/ShopCart'),
        // meta: {show: true}
    },
    {
        path: "/pay",
        component: () => import('../views/Pay'),
        beforeEnter: (to, from, next) => {
            if(from.path === '/trade') {
                console.log(from);
                next()
            }else {
                next(false)
            }
        }
        
    },
    {
        path: "/trade",
        component: () => import('../views/Trade')
    },
    {
        path: "/center",
        component: () => import('../views/Center'),
        children: [
            {
                path: 'myOrder',
                component: () => import('../views/Center/myOrder')
            },
            {
                path: 'groupBuying',
                component: () => import('../views/Center/groupBuying')
            },
            {
                path: '/center',
                redirect: '/center/myOrder'
            },
        ]
    },
    {
        path: "/paySuccess",
        component: () => import('../views/PaySuccess'),
        beforeEnter: (to, from, next) => {
            // ...
            if (from.path === '/pay') {
                next()
            }else{
                next(false)
            }            
        }
    },
    {   
        name: 'home',
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
