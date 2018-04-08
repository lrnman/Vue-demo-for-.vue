import Vue from 'vue';

import VueRouter from 'vue-router';

import store from '@/store/main';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: (resolve) => require(['@/pages/index'], resolve),
    },
    {
        path: '/login',
        //命名路由
        name: 'login',
        component: (resolve) => require(['@/pages/login'], resolve),   
    },
    {
    	path: '/news/:username?',
    	component: (resolve) => require(['@/pages/news'], resolve),
    	//绑定路由和模板的参数
    	props: true,
    	//元数据
    	meta: {
    		mustLogin: true,
    	},
    },
    {
    	path: '*',
    	component: {
    		template: '<h1 style="margin-top:150px; font-size:50px; color:#999">404啦~</h1>',
    	},
    }
];

const router = new VueRouter({
    routes, 
});

//全局导航守卫
router.beforeEach(({ meta }, from, next) => {
	//读取路由元数据，判断当前页面是否需要登录。默认为 不需要
	let { mustLogin = false } = meta;
	
	let isLogin = !!store.state.user.username;
	if (mustLogin && !isLogin) {
		alert('请先登录！');
		next({path: '/login'});
	} else {
		next();
	}
});

export default router;
