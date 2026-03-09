import { ref, watch } from "vue";

export function useTheme() {
  const isDark = ref(localStorage.getItem("theme") === "dark");

  const toggleTheme = () => {
    isDark.value = !isDark.value;
  };

  const setTheme = (value) => {
    isDark.value = value;
  };

  watch(
    isDark,
    (newValue) => {
      if (newValue) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    },
    { immediate: true },
  );

  return {
    isDark,
    toggleTheme,
    setTheme,
  };
}
