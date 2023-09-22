<script setup>
import { reactive, ref, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import ShInput from '@/components/ShInput.vue'
import ShButton from '@/components/ShButton.vue'
import ShToast from '@/components/ShToast.vue'

const router = useRouter()
const shToast = ref()
const data = reactive({ username: '', password: '', ensurePassword: '' })
const { username, password, ensurePassword } = toRefs(data)

const handleRegister = () => {
  if (!username.value) return shToast.value.showToast('请输入用户名')
  if (!password.value) return shToast.value.showToast('请输入密码')
  if (!ensurePassword.value) return shToast.value.showToast('请输入确认密码')
  if (password.value !== ensurePassword.value) {
    shToast.value.showToast('两次密码输入不一致，请重新输入')
    ensurePassword.value = ''
    return
  }
  goToLogin()
}

const goToLogin = () => {
  router.push('/login')
}
</script>

<template>
  <div class="register">
    <img src="http://www.dell-lee.com/imgs/vue3/user.png" alt="avatar" class="register_avatar" />
    <ShInput v-model="username" placeholder="请输入用户名" class="register_input" />
    <ShInput v-model="password" type="password" placeholder="请输入密码" class="register_input" />
    <ShInput v-model="ensurePassword" type="password" placeholder="确认密码" class="register_input" />
    <ShButton class="register_button" @click="handleRegister">注 册</ShButton>
    <span class="register_login" @click="goToLogin">已有帐号去登录</span>
  </div>
  <ShToast ref="shToast" />
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
