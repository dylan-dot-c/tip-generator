<script setup lang="ts">
import TipSummaryRow from './TipSummaryRow.vue'
import useFormStore from '../stores/form'

const info = useFormStore()
</script>

<template>
  <div class="bg-very-dark-cyan p-6 rounded-xl space-y-8">
    <TipSummaryRow title="Tip Amount" :amount="info.tipPerPerson" />
    <TipSummaryRow title="Total" :amount="info.perPersonPay" />

    <button class="bg-strong-cyan text-very-dark-cyan w-full p-4 rounded-md text-center">
      RESET
    </button>
  </div>
</template>
