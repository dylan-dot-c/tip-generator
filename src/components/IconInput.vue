<script setup lang="ts">
import dollarIcon from '../assets/images/icon-dollar.svg'
import personIcon from '../assets/images/icon-person.svg'
import useFormData from '../stores/form'

const icons = {
  dollar: dollarIcon,
  person: personIcon
}

type Props = {
  icon: 'dollar' | 'person'
  name: string
}

const props = defineProps<Props>()

const { data } = useFormData()
</script>

<template>
  <div class="relative">
    <span class="absolute h-full flex items-center">
      <img :src="icons[props.icon]" alt="" class="pl-3" />
    </span>
    <input
      type="number"
      :name="props.name"
      v-model="data[props.name]"
      class="p-2 pl-8 text-right w-full border-none outline-none rounded-md text-2xl font-space-mono text-very-dark-cyan font-bold bg-very-light-cyan"
    />
  </div>
</template>

<style scoped></style>
