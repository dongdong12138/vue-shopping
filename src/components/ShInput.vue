<script setup>
import { defineProps, ref, toRefs } from 'vue'

const props = defineProps({
  modelValue: { type: String, required: true },
  type: { type: String, default: 'text' },
  placeholder: { type: String, required: true }
})
const { modelValue, type, placeholder } = toRefs(props)

const inputValue = ref('')
inputValue.value = modelValue.value
</script>

<template>
  <input
    v-model="inputValue"
    :type="type" :placeholder="placeholder"
    class="shInput"
    @input="$emit('update:modelValue', inputValue)"
  >
</template>

<style scoped lang="scss">
.shInput {
  box-sizing: border-box;
  color: #777; font-size: .16rem;
  width: 100%; height: .48rem;
  background: #F9F9F9;
  border: .01rem solid rgba(0,0,0,0.10);
  border-radius: .06rem;
  outline: none;
  padding: 0 .16rem;
  &::placeholder { color: #777; }
}
</style>
