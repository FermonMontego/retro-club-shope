<script setup>
import { ref } from "vue";

const isVisible = ref(false);
</script>

<template>
  <div class="wrapper-button">
    <button
        @click="isVisible = !isVisible"
        v-click-outside="() => isVisible = false"
    >
      <span>Message</span>
    </button>
    <div
        class="popup"
        v-if="isVisible"
    >
      <a href="#">Link go to something</a>
      <a href="#">Link</a>
      <a href="#">Link</a>
      <a href="#">Link</a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper-button {
  position: relative;

  button {
    position: relative;
    border: 1px solid;
    padding: 4px 16px;
    outline: none;

    font-family: inherit;
  }

  .popup {
    position: absolute;
    top: 100%;
    left: 0;
    background: #fff;
    color: #000;
    border: 1px solid;
    padding: 8px;
    margin-top: -1px;
    display: flex;
    flex-direction: column;
    gap: 4px;

    a {
      display: block;
      text-decoration: none;
      color: #000;

      position: relative;

      &:hover {
        &::before {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 1px;
          background: #000;
        }
      }
    }
  }
}
</style>
