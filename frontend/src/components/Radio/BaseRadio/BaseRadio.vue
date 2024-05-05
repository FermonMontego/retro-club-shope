<script setup>
const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <label class="base-radio">
    <input
      type="radio"
      :name="props.name"
      class="base-radio__radio-input"
    />
    <span class="base-radio__container-radio-input"></span>
    <span class="base-radio__label-radio-input">{{ props.label }}</span>
  </label>
</template>

<style scoped lang="scss">
.base-radio {
  display: flex;
  align-items: center;
  gap: 8px;

  &__container-radio-input {
    border-radius: 50%;
    width: 16px;
    height: 16px;
    background: #fff;
    border: 1px solid #000;
    position: relative;
    display: block;
  }

  &__radio-input {
    display: none;
    &:checked + .base-radio__container-radio-input {
      background: #000;

      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 8px;
        height: 8px;
        background: #fff;
        border-radius: 50%;
      }
    }
  }
}
</style>
