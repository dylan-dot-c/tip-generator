<script setup lang="ts">
defineProps<{
  title: string
  amount: number
}>()
</script>

<template>
  <div class="flex justify-between items-center">
    <div>
      <p class="text-very-light-cyan text-xl">{{ title }}</p>
      <p class="text-light-gray-cyan">/ person</p>
    </div>
    <div>
      <span class="text-4xl font-bold text-strong-cyan">${{ amount.toFixed(2) }}</span>
    </div>
  </div>
</template>
