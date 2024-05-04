<script setup>
import DefaultLayout from "../../layouts/DefaultLayout.vue";
import BaseProductCard from "../../components/Cards/BaseProductCard/BaseProductCard.vue";
import CatalogSidebar from "../../components/Sidebars/CatalogSidebar.vue";
</script>

<template>
  <default-layout>
    <template v-slot:default>
      <section class="catalog-section base-container flex flex-direction-column gap-32">
        <h1 class="catalog-section__title">Каталог</h1>

        <div class="catalog-section__inner">
          <div class="catalog-section__inner__sidebar-wrapper">
            <catalog-sidebar></catalog-sidebar>
          </div>

          <div class="catalog-section__inner__grid">
            <base-product-card
              v-for="(item, index) of 50"
              :key="index"
            ></base-product-card>
          </div>
        </div>
      </section>
    </template>
  </default-layout>
</template>

<style scoped></style>
