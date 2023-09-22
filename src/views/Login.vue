<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import ShInput from '@/components/ShInput.vue'
import ShButton from '@/components/ShButton.vue'
import ShToast from '@/components/ShToast.vue'

const router = useRouter()
const shToast = ref()
const data = reactive({ username: '', password: '' })

const handleLogin = () => {
  if (!data.username) return shToast.value.showToast('请输入用户名')
  if (!data.password) return shToast.value.showToast('请输入密码')
  router.push('/')
}

const goToRegister = () => {
  router.push('/register')
}
</script>

<template>
  <div class="login">
    <img src="http://www.dell-lee.com/imgs/vue3/user.png" alt="avatar" class="login_avatar" />
    <ShInput v-model="data.username" placeholder="请输入用户名" class="login_input" />
    <ShInput v-model="data.password" type="password" placeholder="请输入密码" class="login_input" />
    <ShButton class="login_button" @click="handleLogin">登 录</ShButton>
    <span class="login_register" @click="goToRegister">立即注册</span>
  </div>
  <ShToast ref="shToast" />
</template>

<style scoped lang="scss">
.login {
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
  &_register {
    color: #777; font-size: .14rem;
    display: flex; align-items: center;
    margin-top: .16rem;
  }
}
</style>
