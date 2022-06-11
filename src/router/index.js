import vue from 'vue'
import VueRouter from 'vue-router';
import routes from './routers';
import store from "../store";


vue.use(VueRouter)

let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function(location, resolve, reject) {
    if(resolve && reject) {
        originPush.call(this, location, resolve, reject)
    }else {
        originPush.call(this, location, () => { }, () => { })
    }
}
VueRouter.prototype.replace = function(location, resolve, reject) {
    if(resolve && reject) {
        originReplace.call(this, location, resolve, reject)
    }else {
        originReplace.call(this, location, () => { }, () => { })
    }
}



const router = new VueRouter({
    routes,
    scrollBehavior (to, from, savedPosition) {
        // return 期望滚动到哪个的位置
        return {x: 0, y: 0}
      }
})

router.beforeEach( async (to, from, next) => {
    let token = store.state.login.token;
    let name = store.state.login.accountData.name;
    // if(token && to.path === "/login"){
    //     next("/home")
    //     if(name) {
    //         next()
    //     }else {
    //        try {
    //            await store.dispatch('reqUserInfo')
    //            next()
    //        }catch (e) {
    //            await store.dispatch('reqLoginOut')
    //            console.log(e)
    //        }
    //     }
    // }else {
    //     next()
    // }
    if (token) {
        //用户登陆了，且想去登录页的分支
        if (to.path === "/login") {
            next("/home");
            //用户登录了，且想去的不是login的分支
        } else {
            //代表用户登录了（且去的不是login），而且还有用户信息
            if (name) {
                //next代表该去哪里就去哪里
                next(); 
            } else {
                //代表用户登录了，且没有用户信息
                try {
                    //代表用户登录了，但是没有用户信息，发请求让仓库存储用户信息，在进行路由跳转
                    await store.dispatch('reqUserInfo');
                    //该去哪里去哪里
                    next();
                } catch (error) {
                    //token过期失效了:清除本地的token（过期的）
                    await store.dispatch('reqLoginOut');
                    //清除本地数据之后，让用户回到登录页，重新登录、获取新的token
                    next('/login')
                }
            }
        }

    } else {
        let toPath = to.path;
        //判断未登录：去trade、去支付、去支付成功、去个人中心【我的订单、团购订单】
        if (toPath.indexOf('trade') != -1 || toPath.indexOf('pay') != -1 || toPath.indexOf('center') != -1 || toPath.indexOf('shopCart') != -1) {
            //判断未登录：去trade、去支付、去支付成功、去个人中心【我的订单、团购订单】
            //跳转到登录
            next('/login?redirect='+toPath);
        } else{
            next();
        }
            //去的并非上面这些路由,放行
     }
})

export default router