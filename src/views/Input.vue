<script setup>
import { computed, ref } from "vue";
import useVuelidate from "@vuelidate/core";
import { minLength } from "@vuelidate/validators";

import Input from "@/components/Input.vue";

const nameField = ref("");

const rules = computed(() => ({
  nameField: {
    minLength: minLength(3),
  },
}));

const v = useVuelidate(rules, { nameField });
</script>
<template>
  <h1 class="heading-1">Input</h1>
  <div class="line">
    <form>
      <Input
        label="Your name"
        name="name"
        placeholder="Input your name"
        v-model:value="v.nameField.$model"
        :error="v.nameField.$errors"
      />
      {{ nameField }}
    </form>
  </div>
</template>
