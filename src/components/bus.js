import Vue from 'vue';
import _ from '@/plugins/_';

const bus = new Vue();
//把插件注册在Vue的实例bus上
Vue.use(_, bus);

export { bus };


