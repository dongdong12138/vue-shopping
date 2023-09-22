<script setup>
import { defineExpose, reactive } from 'vue'

const data = reactive({ visible: false, message: '' })
let timer
const showToast = message => {
  data.message = message
  data.visible = true
  if (timer) clearTimeout(timer)
  timer = setTimeout(() => {
    data.visible = false
    data.message = ''
  }, 2000)
}

defineExpose({ showToast })
</script>

<template>
  <teleport to="body">
    <div v-show="data.visible" class="shToast">{{ data.message }}</div>
  </teleport>
</template>

<style scoped lang="scss">
.shToast {
  color: #FFF;
  background: rgba(0, 0, 0, .5);
  border-radius: .05rem;
  white-space: nowrap;
  padding: .1rem;
  position: fixed; left: 50%; top: 50%;
  transform: translate(-50%, -50%);
}
</style>
