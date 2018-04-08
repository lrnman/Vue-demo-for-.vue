<template>
    <div>
        <v-header title="IndexPage" :left="left" :right="right"></v-header>
        <img :src="logo">
        <transition name="fade" mode="out-in">
            <div v-if="username" key="logined">
                <h1>{{ username }}, welcome to index.</h1>
                <div>你的密码是：<span class="pointer" @mouseenter="hide = false" @mouseleave="hide = true">{{hide ? password.replace(/./g, '*') : password}}</span></div>
            </div>  
            <div v-else key="logouted">
                <h1>你还没有<router-link :to="{name: 'login'}">登录</router-link></h1>
            </div>
        </transition>
        <router-link :to="{path: '/news/' + (username ? username : '')}">我的消息</router-link>
    </div>
</template>

<script>
    import Header from '@/components/header';
    
    import { mapState, mapGetters } from 'vuex';
    
    export default {
        data() {
            return {
                logo: require('@/assets/logo.png'),
                hide: true,
            }
        },
        computed: {
          	//state
//          ...mapState('user', {
//              username: state => state.username,
//              password: state => state.password
//          }),
            //1 Getters
            ...mapGetters({username: 'user/getUsr', password: 'user/getPsd'}),
			//2 Getters
//			...mapGetters('user', {username: 'getUsr', password: 'getPsd'}),
			//3 Getters
//			...mapGetters('user', ['getUsr', 'getPsd']),
            right() {
                return this.$store.state.user.username ? true : false;
            },
            left() {
                return false;
            },
        },
        components: { vHeader: Header },
    }
</script>

<style scoped lang="less">
    h1,
    div {
        text-align: center;
    }
    
    a {
        color: red;
        text-decoration: none;
    }
    
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
      opacity: 0;
    }
    
    .pointer {
        cursor: pointer;
    }
</style>