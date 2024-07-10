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
  label: string;
};

const props = defineProps<Props>();
const { icon, name, label } = props;
const { data } = useFormData();
</script>

<template>
  <label :for="label" class="text-grayish-cyan">{{ label }}</label>
  <div class="relative mt-2">
    <span class="absolute h-full flex items-center">
      <img :src="icons[icon]" alt="" class="pl-3" />
    </span>
    <input
      type="number"
      :name="name"
      v-model="data[name]"
      :id="label"
      class="p-2 pl-8 text-right w-full border border-transparent outline-none rounded-md text-2xl font-space-mono text-very-dark-cyan font-bold bg-very-light-cyan cursor-pointer focus:border-strong-cyan focus:border"
    />
  </div>
</template>

<style scoped></style>
