<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import ShInput from '@/components/ShInput.vue'
import ShButton from '@/components/ShButton.vue'
import ShToast from '@/components/ShToast.vue'

const router = useRouter()
const store = useStore()
const shToast = ref()
const { userInfo } = store.state
const data = reactive({ username: '', password: '' })

const showToast = message => {
  shToast.value.showToast(message)
}

const handleLogin = () => {
  if (!data.username) return showToast('请输入用户名')
  if (!data.password) return showToast('请输入密码')
  if (data.username !== userInfo.username) return showToast('该用户名不存在')
  if (data.password !== userInfo.password) return showToast('密码输入错误')
  router.push('/')
}

const goToRegister = () => {
  router.push('/register')
}

const handleForget = () => {
  showToast(`当前账号的密码为：${userInfo.password}`)
}
</script>

<template>
  <div class="login">
    <img src="http://www.dell-lee.com/imgs/vue3/user.png" alt="avatar" class="login_avatar" />
    <ShInput v-model="data.username" placeholder="请输入用户名" class="login_input" />
    <ShInput v-model="data.password" type="password" placeholder="请输入密码" class="login_input" />
    <ShButton class="login_button" @click="handleLogin">登 录</ShButton>
    <div class="login_register">
      <span @click="goToRegister">立即注册</span>
      <i class="login_register_line"></i>
      <span @click="handleForget">忘记密码</span>
    </div>
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
    &_line {
      width: .01rem; height: .16rem;
      background: rgba(0, 0, 0, 0.5);
      margin: 0 .12rem;
    }
  }
}
</style>
