# Vue模块开发系统demo
使用vue2.5+vue-router3.0+vuex3.0   

完整的登录、退出、页面验证是否需要登录。

为了专注vue上，对后端的api操作是用异步模拟的,如果你有服务器，可以去重写api.js。

![image](./static/project.png)   
![image](./static/demo1.png)   
![image](./static/demo2.png)   
![image](./static/demo3.png)   
![image](./static/demo4.png)   

1、下载项目，进入项目文件夹   
2、

```
npm i
```
3、

```
npm start
```
4、打开浏览器，输入 http://localhost:8080

## 涉及到的知识点
### [vue](https://cn.vuejs.org/v2/guide/) 
- 模板 https://cn.vuejs.org/v2/guide/syntax.html
- 插件 https://cn.vuejs.org/v2/guide/plugins.html
- 生命周期 
 - beforeMount https://cn.vuejs.org/v2/guide/instance.html#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%9B%BE%E7%A4%BA
- 组件 https://cn.vuejs.org/v2/guide/components.html
- 单文件组件 https://cn.vuejs.org/v2/guide/single-file-components.html
- 指令 https://cn.vuejs.org/v2/guide/syntax.html#%E6%8C%87%E4%BB%A4
- 事件 https://cn.vuejs.org/v2/guide/events.html
- 缩写 https://cn.vuejs.org/v2/guide/syntax.html#%E7%BC%A9%E5%86%99
- 计算属性和侦听器 https://cn.vuejs.org/v2/guide/computed.html
- 进入/离开过渡 & 动画 https://cn.vuejs.org/v2/guide/transitions.html#%E5%A4%9A%E4%B8%AA%E5%85%83%E7%B4%A0%E7%9A%84%E8%BF%87%E6%B8%A1
- 

### [vuex](https://vuex.vuejs.org/zh-cn/getting-started.html)
- Module https://vuex.vuejs.org/zh-cn/modules.html
- module 命名空间 https://vuex.vuejs.org/zh-cn/modules.html
- getter https://vuex.vuejs.org/zh-cn/getters.html
- Mutation https://vuex.vuejs.org/zh-cn/mutations.html
- Action https://vuex.vuejs.org/zh-cn/actions.html
- 使用常量替代 Mutation,actions 事件类型 https://vuex.vuejs.org/zh-cn/mutations.html
- 在组件中分发 Action https://vuex.vuejs.org/zh-cn/actions.html
- 在组件中分发 State https://vuex.vuejs.org/zh-cn/state.html
- 在组件中分发 Getters https://vuex.vuejs.org/zh-cn/getters.html
- 带命名空间的绑定函数 https://vuex.vuejs.org/zh-cn/modules.html
- createNamespacedHelpers命名空间辅助函数 https://vuex.vuejs.org/zh-cn/modules.html
- 

### [vue-router](https://router.vuejs.org/zh-cn/essentials/getting-started.html)
- 命名路由 https://router.vuejs.org/zh-cn/essentials/named-routes.html
- 路由懒加载 https://router.vuejs.org/zh-cn/advanced/lazy-loading.html
- 路由组件传参 https://router.vuejs.org/zh-cn/essentials/passing-props.html
- 元数据 https://router.vuejs.org/zh-cn/advanced/meta.html
- 动态路由匹配 https://router.vuejs.org/zh-cn/essentials/dynamic-matching.html
- 动态路由高级匹配模式 https://router.vuejs.org/zh-cn/essentials/dynamic-matching.html
- 导航守卫 https://router.vuejs.org/zh-cn/advanced/navigation-guards.html
 - beforeEach
 - beforeRouteLeave
 - beforeRouteEnter
- 编程式的导航 https://router.vuejs.org/zh-cn/essentials/navigation.html
- 

### es6
- async / await https://segmentfault.com/a/1190000007535316
- Promise
- 箭头函数
- 对象方法简写
- 使用计算属性命名功能来使用一个常量作为函数名
- 参数解构 / destructuring
- import / export
- 

### 其他
- bootstrap css 的导入
- lodash.js
 - 导入
 - debounce
- 