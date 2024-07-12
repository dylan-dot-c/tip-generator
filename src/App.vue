<script setup lang="ts">
import Header from "./components/Header.vue";
import IconInput from "./components/IconInput.vue";
import TipSummary from "./components/TipSummary.vue";
import { ref, onMounted } from "vue";
import useFormStore from "./stores/form";

const tipVals = [5, 10, 15, 25, 50];
const customValue = ref(0);
const { data } = useFormStore();
const customInput = ref<HTMLInputElement | null>(null);

onMounted(() => {
  console.log("Mounted", customInput);
  if (customInput.value) {
    // customInput.value.focus();
    customInput.value.value = "";
  }
});

const handleCustomClick = () => {
  data.tipPercentage = 0;
  if (customInput.value) {
    customInput.value.focus();
    data.useCustom = true;
  }
};
</script>

<template>
  <Header />
  <main class="bg-white p-6 rounded-md mt-10">
    <form class="space-y-4" @submit.prevent :key="data.tipPercentage">
      <div>
        <IconInput icon="dollar" name="bill" label="Bill" />
      </div>

      <div>
        <span class="mb-4">Select Tip %</span>
        <div class="grid grid-cols-2 gap-4 mt-4">
          <label
            v-for="number in tipVals"
            :key="number"
            :for="'id' + number"
            :class="{
              'bg-very-dark-cyan text-white': number !== data.tipPercentage,
              'bg-strong-cyan text-very-dark-cyan': number == data.tipPercentage,
            }"
            class="rounded-md text-center text-xl font-semibold w-full p-3"
          >
            <input
              type="radio"
              :value="number"
              :id="'id' + number"
              name="tipVal"
              v-model="data.tipPercentage"
              class="hidden"
              @click="data.useCustom = false"
            />
            <span class=""> {{ number }}% </span>
          </label>
          <div>
            <input
              type="radio"
              name="tipVal"
              id="custom"
              :value="customValue"
              class="hidden"
            />
            <label for="custom">
              <span
                ><input
                  v-model="data.customPercentage"
                  type="number"
                  name="custom"
                  placeholder="Custom"
                  id="custom"
                  ref="customInput"
                  @click="handleCustomClick"
                  class="text-right p-3 w-full text-xl bg-very-light-cyan placeholder:text-very-dark-cyan placeholder:font-bold border border-transparent focus:border-strong-cyan outline-none rounded-md"
              /></span>
            </label>
          </div>
        </div>
      </div>

      <div>
        <IconInput icon="person" name="persons" label="Number Of People" />
      </div>

      <TipSummary />
    </form>
    <br />
  </main>
</template>
