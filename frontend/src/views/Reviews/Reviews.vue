<script setup>
import DefaultLayout from "../../layouts/DefaultLayout.vue";
import BaseButton from "../../components/Buttons/BaseButton/BaseButton.vue";
</script>

<template>
  <default-layout>
    <section
      class="reviews-section base-container flex flex-direction-column gap-32"
    >
      <h1 class="reviews-section__title">Отзывы</h1>

      <base-button>
        <template v-slot:inner-text> Оставить комментарий </template>
      </base-button>
    </section>
  </default-layout>
</template>

<style scoped></style>
