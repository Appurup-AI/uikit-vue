<script setup>
import Checkbox from "@/components/Checkbox/Checkbox.vue";
import { ref } from "vue";

const checkboxActive = ref(true);
const checkboxDisabled = ref(true);
const checkboxDisabledChecked = ref(true);

const listOfHeroes = ref([
  { name: "Spider Man", id: 1 },
  { name: "Batman", id: 2 },
  { name: "Thor", id: 3 },
  { name: "Loki", id: 4 },
]);

const selectedHeroes = ref([]);
</script>
<template>
  <h1 class="heading-1">Checkbox</h1>

  <h2 class="heading-2">Checkbox Active</h2>
  <div class="line">
    <Checkbox
      label="Checkbox Active"
      id="checkboxActive"
      name="checkboxActive"
      value="I like it"
      v-model:checked="checkboxActive"
    />
  </div>

  <h2 class="heading-2">Checkbox Disabled</h2>
  <div class="line">
    <Checkbox
      label="Checkbox Disabled"
      id="checkboxDisabled"
      name="checkboxDisabled"
      value="I like it"
      :disabled="checkboxDisabled"
      v-model:checked="checkboxDisabledChecked"
    />
  </div>

  <h2 class="heading-2">Checkbox Group</h2>
  <div class="line">
    <p>Selected Heroes: {{ selectedHeroes }}</p>
  </div>
</template>

<style lang="scss" scoped></style>
