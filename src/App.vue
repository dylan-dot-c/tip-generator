<script setup lang="ts">
import HeaderTop from "./components/Header.vue";
import IconInput from "./components/IconInput.vue";
import TipSummary from "./components/TipSummary.vue";
import { ref } from "vue";
import useFormStore from "./stores/form";

const tipVals = [5, 10, 15, 25, 50];
const customValue = ref(0);
const { data } = useFormStore();

// const useCustomValue = function () {}
</script>

<template>
  <HeaderTop />
  <main class="bg-white p-6 rounded-md mt-10">
    <form action="" class="space-y-4">
      <div>
        <label for="" class="">Bill</label>
        <IconInput icon="dollar" name="bill" />
      </div>

      <div>
        <span class="mb-4">Select Tip %</span>
        <div class="grid grid-cols-2 gap-10 mt-4">
          <label
            v-for="number in tipVals"
            :key="number"
            :class="{
              'bg-very-dark-cyan': number !== data.tipPercentage,
              'bg-strong-cyan': number == data.tipPercentage,
            }"
            class="rounded-md text-center text-xl font-semibold text-white w-full p-3"
          >
            <input
              type="radio"
              :value="number"
              :id="'id' + number"
              name="tipVal"
              v-model="data.tipPercentage"
              class="hidden"
            />
            <span class=""> {{ number }}% </span>
          </label>
          <div>
            <input type="radio" name="tipVal" id="custom" class="hidden" value="0" />
            <label for="custom">
              <span
                ><input
                  v-model="customValue"
                  type="number"
                  name=""
                  placeholder="Custom"
                  id=""
                  class="text-right p-3 w-full text-xl bg-very-light-cyan placeholder:text-very-dark-cyan placeholder:font-bold"
              /></span>
            </label>
          </div>
        </div>
      </div>

      <div>
        <label for="">Number Of Persons</label>
        <IconInput icon="person" name="persons" />
      </div>

      <TipSummary />
    </form>
    <br />
  </main>
</template>
