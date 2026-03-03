<script setup>
const props = defineProps({
  label: {
    type: String,
    default: "Button",
  },
  color: {
    type: String,
    default: "primary",
  },
  rounded: {
    type: Boolean,
    required: false,
  },
  disabled: {
    type: Boolean,
    required: false,
  },
  outlined: {
    type: Boolean,
    required: false,
  },
  icon: {
    type: String,
    required: false,
  },
  size: {
    type: String,
    default: "normal",
  },
});

const emit = defineEmits(["clickOnBtn"]);

const clickOnButton = () => {
  emit("clickOnBtn");
};
</script>
<template>
  <button
    :class="[
      'btn',
      `btn__${color}`,
      { btn__rounded: rounded },
      { btn__outlined: outlined },
      { btn__icon: icon },
      { btn__large: size === 'large' },
    ]"
    :disabled="disabled"
    @click="clickOnButton"
  >
    <span v-if="icon">
      <font-awesome-icon :icon="`fa-regular fa-${icon}`" />
    </span>
    <span v-else>{{ label }}</span>
  </button>
</template>

<style lang="scss" scoped>
.btn {
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 0 20px;
  height: 40px;
  color: #fff;
  border-radius: 7px;
  border: none;
  cursor: pointer;
  font-size: 15px;
  transition: 0.2s;
  &__primary {
    background: var(--primary);
    border: 1px solid var(--primary);
    &:enabled:hover {
      background: var(--primary-hover);
    }
  }
  &__second {
    background: var(--second);
    border: 1px solid var(--second);
    &:enabled:hover {
      background: var(--second-hover);
    }
  }
  &__success {
    background: var(--success);
    border: 1px solid var(--success);
    &:enabled:hover {
      background: var(--success-hover);
    }
  }
  &__info {
    background: var(--info);
    border: 1px solid var(--info);
    &:enabled:hover {
      background: var(--info-hover);
    }
  }
  &__warning {
    background: var(--warning);
    border: 1px solid var(--warning);
    &:enabled:hover {
      background: var(--warning-hover);
    }
  }
  &__danger {
    background: var(--danger);
    border: 1px solid var(--danger);
    &:enabled:hover {
      background: var(--danger-hover);
    }
  }
  &__rounded {
    border-radius: 15px;
  }
  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
  &__outlined {
    background: transparent;
    color: #000;
    &:hover {
      color: #fff;
    }
  }
  &__icon {
    padding: 0;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  &__large {
    height: 48px;
    padding: 0 30px;
  }
}
</style>
