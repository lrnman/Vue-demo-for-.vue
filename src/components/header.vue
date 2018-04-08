<template>
    <h1>
        <span v-show="left" @click="back" class="pointer left" >返回</span>
        <span>{{title}}</span>
        <span v-show="right && $store.state.user.username" @click="signOut" class="pointer right">退出</span>
    </h1>
</template>

<script>
    import { mapActions } from 'vuex';
    
    export default {
        props: {
            title: {
                type: String,
                default: '',
            },
            left: {
                type: Boolean,
                default: true,
            },
            right: {
                type: Boolean,
                default: true,
            }
        },
        methods: {
            ...mapActions('user', {
                USER_SIGNOUT: 'USER_SIGNOUT',
            }),
            signOut(){
            	if (this.$store.state.user.username) {
            		//模拟USER_SIGNOUT是异步操作
            		this.USER_SIGNOUT().then(flag => flag && this.$router.push('/'));
            	} else {
            		
            	}
            },
            back() {
                this.$router.go(-1);
            },
        }
    }
</script>

<style scoped lang="less">
    h1 {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        padding: 16px 0;
        
        border-bottom: 1px solid #99999930;
        
        .pointer {
            font-size: 20px;
            cursor: pointer;
            color: #999;
            position: absolute;
            
            &.left {
                left: 30px;
            }
            
            &.right {
                right: 30px;
            }
        }
    }
</style>