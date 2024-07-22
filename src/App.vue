<script setup lang="ts">
import HeaderLogo from "./components/HeaderLogo.vue";
import IconInput from "./components/IconInput.vue";
import TipSummary from "./components/TipSummary.vue";
import { ref, onMounted } from "vue";
import useFormStore from "./stores/form";

const tipVals = [5, 10, 15, 25, 50];
const { data } = useFormStore();
const customInput = ref<HTMLInputElement | null>(null);

onMounted(() => {
  console.log("Mounted", customInput);
  if (customInput.value) {
    // customInput.value.focus();
    customInput.value.value = "";
  }
});
</script>

<template>
  <HeaderLogo />
  <main
    class="bg-white md:rounded-3xl rounded-t-3xl rounded-b-none mt-10 xl:max-w-4xl m-auto p-8"
  >
    <form
      class="space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-10"
      @submit.prevent
      :key="data.tipPercentage"
    >
      <div class="space-y-4">
        <div>
          <IconInput icon="dollar" name="bill" label="Bill" />
        </div>

        <div>
          <span class="mb-4 text-grayish-cyan">Select Tip %</span>
          <div class="grid grid-cols-2 gap-4 mt-4 md:grid-cols-3">
            <button
              v-for="number in tipVals"
              :key="number"
              class="focus:outline-yellow-500 focus:outline-3 transition"
              :class="{
                'bg-light-gray-cyan text-very-dark-cyan': number == data.tipPercentage,
                'bg-very-dark-cyan text-white': number != data.tipPercentage,
              }"
              @click="
                data.tipPercentage = number;
                data.useCustom = false;
              "
            >
              {{ number }}%
            </button>
            <input
              placeholder="Custom"
              v-model="data.customPercentage"
              @click="
                data.useCustom = true;
                data.tipPercentage = 0;
              "
              :class="{ 'border-strong-cyan border-2 ': data.useCustom }"
            />
          </div>
        </div>

        <div class="">
          <IconInput icon="person" name="persons" label="Number Of People" />
        </div>
      </div>

      <div>
        <TipSummary />
      </div>
    </form>
  </main>
</template>
