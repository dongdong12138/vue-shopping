<script setup>
import { reactive } from 'vue'
import ShInput from '@/components/ShInput.vue'
import ShButton from '@/components/ShButton.vue'

const data = reactive({ tel: '', password: '', ensurePassword: '' })

const handleRegister = () => {
  console.log('注册')
}
</script>

<template>
  <div class="register">
    <img src="http://www.dell-lee.com/imgs/vue3/user.png" alt="avatar" class="register_avatar" />
    <ShInput v-model="data.tel" placeholder="请输入用户名" class="register_input" />
    <ShInput v-model="data.password" placeholder="请输入密码" class="register_input" />
    <ShInput v-model="data.ensurePassword" placeholder="确认密码" class="register_input" />
    <ShButton @click="handleRegister" class="register_button">注 册</ShButton>
    <span class="register_login">已有帐号去登录</span>
  </div>
</template>

<style scoped lang="scss">
.register {
  height: 100vh;
  padding: 0 .4rem;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  &_avatar {
    width: .66rem; height: .66rem;
    margin-bottom: .24rem;
  }
  &_input {
    margin-top: .16rem;
  }
  &_button {
    margin-top: .32rem;
  }
  &_login {
    color: #777; font-size: .14rem;
    margin-top: .16rem;
  }
}
</style>
