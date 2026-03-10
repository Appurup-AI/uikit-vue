<script setup>
import Checkbox from "@/components/Checkbox/Checkbox.vue";
import { useTheme } from "@/composables/useTheme";

const { isDark } = useTheme();
</script>

<template>
  <header class="header">
    <router-link to="/">UI Kit (Vue 3 + Composition API)</router-link>
    <Checkbox
      name="theme"
      id="theme"
      :label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
      checked
      type="switch"
      v-model:checked="isDark"
    />
  </header>
</template>

<style lang="scss" scoped>
.header {
  background: var(--bg-primary);
  font-weight: bold;
  padding: 0 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.07);
  border-bottom: 1px solid var(--border-primary);
  height: 62px;
  display: flex;
  align-items: center;
  z-index: 1;
  position: relative;
  display: flex;
  justify-content: space-between;
}
</style>
