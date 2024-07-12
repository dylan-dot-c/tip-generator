<script setup lang="ts">
import dollarIcon from '../assets/images/icon-dollar.svg'
import personIcon from '../assets/images/icon-person.svg'
import useFormData from '../stores/form'
import { ref } from 'vue'

const icons = {
  dollar: dollarIcon,
  person: personIcon
}

type Props = {
  icon: 'dollar' | 'person'
  name: 'persons' | 'tipPercentage' | 'bill'
  label: string
}

const props = defineProps<Props>()
const { icon, name, label } = props
const { data } = useFormData()

// Generate a unique ID for the input
const inputId = ref(`input-${name}-${Math.random().toString(36).substr(2, 9)}`)
</script>

<template>
  <div class="flex justify-between items-center">
    <label :for="inputId" class="text-grayish-cyan">{{ label }}</label>
    <span class="text-red-400 text-xs">{{ data.error[name] && data.error[name] }}</span>
  </div>
  <div class="relative mt-2">
    <span class="absolute h-full flex items-center">
      <img :src="icons[icon]" alt="" class="pl-3" />
    </span>
    <input
      type="number"
      :name="name"
      v-model="data[name]"
      :id="inputId"
      class="p-2 pl-8 text-right w-full border border-transparent outline-none rounded-md text-xl font-space-mono text-very-dark-cyan font-bold bg-very-light-cyan cursor-pointer focus:border-strong-cyan focus:border"
      :class="{ 'border-red-400': name == 'persons' && data.error[name] }"
    />
  </div>
</template>

<style scoped></style>
