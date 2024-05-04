<script setup>
import DefaultLayout from "../../layouts/DefaultLayout.vue";
</script>

<template>
  <default-layout>
    <template v-slot:default>
      <section class="blog-section base-container flex flex-direction-column gap-32">
        <h1 class="blog-section__title">Блог</h1>

        <div class="blog-section__content">
          Здесь будут записи
        </div>
      </section>
    </template>
  </default-layout>
</template>

<style scoped></style>
