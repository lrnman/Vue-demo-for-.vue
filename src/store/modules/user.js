import Vue from 'vue';

export const USER_SIGNIN = 'USER_SIGNIN';
export const USER_SIGNOUT = 'USER_SIGNOUT';

import { storageSave, storageDel } from '@/api/api';

export default {
    /*
     * 默认情况下，模块内部的 action、mutation 和 getter 是注册在全局命名空间的——这样使得多个模块能够对同一 mutation 或 action 作出响应。
	 * 如果希望你的模块具有更高的封装度和复用性，你可以通过添加 namespaced: true 的方式使其成为带命名空间的模块。
	 * 当模块被注册后，它的所有 getter、action 及 mutation 都会自动根据模块注册的路径调整命名
     * */
    namespaced: true,
    state: {username: undefined, password: undefined},
    getters: {
        getUsr: (state) => {
            return state.username;
        },
        getPsd: (state) => {
            return state.password;
        }
    },
    mutations: {
        [USER_SIGNIN](state, {username, password}) {
            state.username = username;
            state.password = password;
        },
        [USER_SIGNOUT](state) {
            state.username = undefined;
            state.password = undefined;
        }
    },
    actions: {
        async [USER_SIGNIN]({commit}, user) {
        	const flag = await storageSave('user', user);
            
            if (flag) {
            	commit(USER_SIGNIN, user);
            	return true;
            } 
            return false;
        },
        async [USER_SIGNOUT]({commit}) {
            const flag = await storageDel('user');
            
            if (flag) {
            	commit(USER_SIGNOUT);
            	return true;
            } 
            return false;
        }
    }
}

