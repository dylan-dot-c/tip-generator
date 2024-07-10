<script setup lang="ts">
import dollarIcon from "../assets/images/icon-dollar.svg";
import personIcon from "../assets/images/icon-person.svg";
import useFormData from "../stores/form";
import type { FormData } from "../stores/form";

const icons = {
  dollar: dollarIcon,
  person: personIcon,
};

type Props = {
  icon: "dollar" | "person";
  name: keyof FormData;
};

const props = defineProps<Props>();
const formName = props.name;
const { data } = useFormData();
</script>

<template>
  <div class="relative">
    <span class="absolute h-full flex items-center">
      <img :src="icons[props.icon]" alt="" class="pl-3" />
    </span>
    <input
      type="number"
      :name="formName"
      v-model="data[formName]"
      class="p-2 pl-8 text-right w-full border-none outline-none rounded-md text-2xl font-space-mono text-very-dark-cyan font-bold bg-very-light-cyan"
    />
  </div>
</template>

<style scoped></style>
