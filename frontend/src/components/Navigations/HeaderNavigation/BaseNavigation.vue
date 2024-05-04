<script setup>
</script>

<template>
  <nav class="base-navigation">
    <ul class="base-navigation__links-list">
      <li>
        <router-link :to="{ name: 'Home' }">
          <span>Главная</span>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Catalog' }">
          <span>Каталог</span>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Sizes' }">
          <span>Размеры</span>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Reviews' }">
          <span>Отзывы</span>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Partners' }">
          <span>Парнтерам</span>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Blog' }">
          <span>Блог</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>
