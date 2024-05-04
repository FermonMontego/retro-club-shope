<script setup>
const props = defineProps({
  label: {
    type: String,
    default: "",
  },
});
const model = defineModel();
</script>

<template>
  <label class="base-checkbox">
    <input
      type="checkbox"
      v-model="model"
    />
    <span class="base-checkbox__container-checkbox"></span>
    <p>{{ props.label }}</p>
  </label>
</template>

<style scoped lang="scss">
.base-checkbox {
  user-select: none;

  display: flex;
  align-items: center;
  gap: 8px;

  input {
    display: none;

    &:checked + .base-checkbox__container-checkbox {
      background: #000;
      position: relative;

      &::before {
        content: "";
        width: 3px;
        height: 9px;

        position: absolute;
        top: calc(50% - 1px);
        left: 50%;

        transform: translate(-50%, -50%) rotate(45deg);

        border-right: 2px solid #fff;
        border-bottom: 2px solid #fff;
      }
    }
  }

  &__container-checkbox {
    width: 20px;
    height: 20px;
    background: #fff;
    border: 1px solid #000;
  }

  p {
    font-size: 16px;
    font-weight: 500;
  }
}
</style>
