<script setup>
import { defineProps, ref, toRefs, watchEffect } from 'vue'

const props = defineProps({
  modelValue: { type: String },
  size: { type: String, default: 'big' },
  preIcon: { type: String, default: '' },
  type: { type: String, default: 'text' },
  placeholder: { type: String, required: true },
  disabled: { type: Boolean, default: false }
})
const { modelValue, size, preIcon, type, placeholder, disabled } = toRefs(props)

const inputValue = ref('')

watchEffect(() => {
  inputValue.value = modelValue.value
})
</script>

<template>
  <div :class="['shInput', {'shInput-small': size === 'small'}]">
    <i v-if="preIcon" class="iconfont">{{ preIcon }}</i>
    <input
      v-model="inputValue"
      :type="type" :placeholder="placeholder" :disabled="disabled"
      @input="$emit('update:modelValue', inputValue)"
    >
  </div>
</template>

<style scoped lang="scss">
.shInput {
  box-sizing: border-box;
  width: 100%; height: .48rem;
  background: #F9F9F9;
  border: .01rem solid rgba(0, 0, 0, 0.10); border-radius: .06rem;
  padding: 0 .16rem;
  display: flex; align-items: center;
  > input {
    color: #777; font-size: .16rem;
    flex: 1; align-self: stretch;
    background: none;
    border: none; outline: none;
    padding: 0;
    &::placeholder { color: #B7B7B7; }
  }
}

.shInput-small {
  height: .32rem;
  border-radius: .16rem;
  > i { color: #b7b7b7; margin-right: .08rem; }
  > input { font-size: .14rem; }
}
</style>
