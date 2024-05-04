<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "text",
  },
  placeholder: {
    type: String,
    default: "Введите",
  },
  label: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <label class="base-input">
    <span class="base-input__label">
      {{props.label}}
    </span>
    <input
      class="base-input__input"
      :type="props.type"
      :placeholder="props.placeholder"
    />
  </label>
</template>

<style scoped lang="scss">

</style>
