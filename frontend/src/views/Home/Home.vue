<script setup>
import DefaultLayout from "../../layouts/DefaultLayout.vue";
import BaseProductCard from "../../components/Cards/BaseProductCard/BaseProductCard.vue";
</script>

<template>
  <default-layout>
    <template v-slot:default>
      <section class="base-container home-page-section">
        <h1 class="home-page-section__title">Новинки сезона</h1>
        <div class="home-page-section__content">
          <base-product-card></base-product-card>
          <base-product-card></base-product-card>
          <base-product-card></base-product-card>
          <base-product-card></base-product-card>
          <base-product-card></base-product-card>
          <base-product-card></base-product-card>
        </div>
      </section>

      <section class="base-container home-page-section">
        <h1 class="home-page-section__title">Время вспомнить прошлое</h1>
        <div class="home-page-section__content">
          <base-product-card></base-product-card>
          <base-product-card></base-product-card>
          <base-product-card></base-product-card>
          <base-product-card></base-product-card>
          <base-product-card></base-product-card>
          <base-product-card></base-product-card>
        </div>
      </section>

      <section class="base-container home-page-section">
        <h1 class="home-page-section__title">Найди то что по душе</h1>
        <div class="home-page-section__content">
          <base-product-card></base-product-card>
          <base-product-card></base-product-card>
          <base-product-card></base-product-card>
          <base-product-card></base-product-card>
          <base-product-card></base-product-card>
          <base-product-card></base-product-card>
        </div>
      </section>
    </template>
  </default-layout>
</template>

<style scoped></style>
