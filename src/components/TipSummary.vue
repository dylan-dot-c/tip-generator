<script setup lang="ts">
import TipSummaryRow from "./TipSummaryRow.vue";
import useFormStore from "../stores/form";

const info = useFormStore();
</script>

<template>
  <div
    class="bg-very-dark-cyan p-6 rounded-xl flex flex-col justify-between gap-6 h-full"
  >
    <div class="space-y-4">
      <TipSummaryRow title="Tip Amount" :amount="info.tipPerPerson" />
      <TipSummaryRow title="Total" :amount="info.perPersonPay" />
    </div>

    <div>
      <button
        class="bg-strong-cyan text-very-dark-cyan w-full p-4 rounded-md text-center transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed opacity-100 enabled:hover:bg-light-gray-cyan"
        @click="info.reset"
        :disabled="info.perPersonPay == 0 && info.tipPerPerson == 0"
      >
        RESET
      </button>
    </div>
  </div>
</template>
