<template>
    <div>
        <v-header title="LoginPage" :left="left" :right="right"></v-header>
        <div class="login-box">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">用户名</span>
              </div>
              <input type="text" class="form-control" :class="{right: usr.validation === 'true', wrong: usr.validation === 'false'}" 
              	v-model="usr.content"
              	:placeholder="pUsername" aria-label="username" aria-describedby="basic-addon1">
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">密 &nbsp; 码</span>
              </div>
              <input type="text" class="form-control" :class="{right: psd.validation === 'true', wrong: psd.validation === 'false'}" 
              	v-model="psd.content" 
              	:placeholder="pPassword" aria-label="password" aria-describedby="basic-addon2">
              <div class="input-group-append">
                <button class="btn btn-primary" @click="login" type="button" :disabled="cantSubmit">login</button>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
    import header from '@/components/header';
    import userInfo from '@/config/user';
    
    import { bus } from '@/components/bus';
    import { validate, storageGet, storageSaveSync } from '@/api/api';
    
    /*
     * 使用 createNamespacedHelpers 创建基于某个命名空间辅助函数。
     * 它返回一个对象，对象里有新的绑定在给定命名空间值上的组件绑定辅助函数
     * */
    import { createNamespacedHelpers } from 'vuex';
    const { mapActions } = createNamespacedHelpers('user');
    
    export default {
        data() {
            return {
                left: true,
                right: false,
                pUsername: '测试用户名:' + userInfo.username,
                pPassword: '测试密码:' + userInfo.password,
                usr: {
                    content: '',
                    validation: '',
                },
                psd: {
                    content: '',
                    validation: '',
                },
                cantSubmit: true,
            }
        },
        watch: {
            ['usr.content'](newVal) {
                this.usr.validation = '';
                this.validateUsr(this, newVal);
            },
            ['psd.content'](newVal) {
                this.psd.validation = '';
                this.validatePsd(this, newVal);
            },
            ['usr.validation']() {
                this.buttonDisabled();
            },
            ['psd.validation']() {
                this.buttonDisabled();
            },
        },
        components: {
            vHeader: header,
        },
        methods: {
            //debounce: 去抖
            validateUsr: bus.$_.debounce((self, newVal)=> {
                //调用API判断输入
                validate('username', newVal).then(isRight => self.usr.validation = isRight + '');
            }, 500),
            validatePsd: bus.$_.debounce((self, newVal)=> {
                //调用API判断输入
                validate('password', newVal).then(isRight => self.psd.validation = isRight + '');
            }, 500),
            
            buttonDisabled() {
                if (this.usr.validation === 'true' && this.psd.validation === 'true') {
                    this.cantSubmit = false;
                }  else {
                    this.cantSubmit = true;
                }
            },
            
            ...mapActions(['USER_SIGNIN']),
            
            login() {
                if (this.usr.validation === 'true' && this.psd.validation === 'true') {
                	//模拟USER_SIGNIN是异步操作
                    this.USER_SIGNIN({
                        username: this.usr.content,
                        password: this.psd.content
                    }).then(flag => {
                    	if(flag) {
                    		this.usr = {
		                        content: '',
		                        validation: '',
		                    };
		                    this.psd = {
		                        content: '',
		                        validation: '',
		                    }; 
		                    alert('登录成功');
		                    this.$router.push('/');
                    	} else {
                    		alert('网络异常(模拟登录成功失败， 随机的，所以失败了请多点几次登录)');
                    	}
                    });
                }
            },
        },
        beforeRouteLeave(to, from, next) {
            storageSaveSync('input', {usr: this.usr, psd: this.psd});
            next();
        },
        //进入页面前先将之前输入的东西填充进去
        beforeRouteEnter(to, from, next) {
        	storageGet('input').then(json => {
        		let inputInfo = JSON.parse(json || '{"usr": {"content": "", "validation": ""}, "psd": {"content": "", "validation": ""}}');
        		next(self => {
	                inputInfo.usr.content && (self.usr = inputInfo.usr);
	                inputInfo.psd.content && (self.psd = inputInfo.psd);
	            });
        	});
        },
    }
</script>

<style scoped lang="scss">
    .login-box {
        width: 500px;
        margin: 100px auto 0;
    }
    
    .wrong {
        border-color: rgba(255, 12, 12, 0.25);
        box-shadow: 0 0 0 0.2rem rgba(255, 12, 12, 0.25);
    }
    
    .right {
        border-color: rgba(56, 216, 53, 0.48);
        box-shadow: 0 0 0 0.2rem rgba(56, 216, 53, 0.42);
    }
    
    button[disabled] {
        background-color: #99999930;
        border: 1px solid #ced4da;
        cursor: not-allowed;
    }
</style>