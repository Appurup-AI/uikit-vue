<script setup>
import { computed, ref } from "vue";
import useVuelidate from "@vuelidate/core";
import { helpers, minLength, maxLength, numeric, email, sameAs } from "@vuelidate/validators";

import Input from "@/components/Input.vue";
import Button from "@/components/Button.vue";

const nameField = ref("");
const emailField = ref("");
const luckyField = ref("");
const passwordField = ref("");
const confirmPasswordField = ref("");

const rules = computed(() => ({
  nameField: {
    minLength: helpers.withMessage(`Минимальная длина: 3 символа`, minLength(3)),
  },
  emailField: { email: helpers.withMessage("Вы ввели неверный email", email) },
  luckyField: {
    maxLength: helpers.withMessage("Максимальная длина: 2 символа", maxLength(2)),
    numeric: helpers.withMessage("Вы можете ввести только цифры", numeric),
  },
  confirmPasswordField: {
    sameAs: helpers.withMessage(`Пароли не совпадают`, sameAs(passwordField.value)),
  },
}));

const v = useVuelidate(rules, { nameField, emailField, luckyField, confirmPasswordField });

const submitForm = () => {
  v.value.$touch();
  if (v.value.$error) return;
  alert("submit");
};
</script>
<template>
  <h1 class="heading-1">Input</h1>
  <div class="line">
    <form @submit.prevent="submitForm">
      <Input
        label="Your name"
        name="name"
        placeholder="Input your name"
        v-model:value="v.nameField.$model"
        :error="v.nameField.$errors"
      />
      <Input
        label="Your mail"
        name="email"
        placeholder="Input your email"
        v-model:value="v.emailField.$model"
        :error="v.emailField.$errors"
      />
      <Input
        label="Your lucky number"
        name="lucky"
        placeholder="Input your lucky number"
        v-model:value="v.luckyField.$model"
        :error="v.luckyField.$errors"
      />
      <Input
        label="Your password"
        name="password"
        placeholder="Input password"
        v-model:value="passwordField"
        type="password"
      />
      <Input
        label="Confirm password"
        name="confirm"
        placeholder="Please Confirm password"
        v-model:value="v.confirmPasswordField.$model"
        :error="v.confirmPasswordField.$errors"
      />
      <Button label="Submit" color="primary" />
    </form>
  </div>
</template>
