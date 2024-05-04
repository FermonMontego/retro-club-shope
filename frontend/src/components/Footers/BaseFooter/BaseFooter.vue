<script setup>
import BaseLogotype from "../../Logotypes/BaseLogotype/BaseLogotype.vue";
</script>

<template>
  <footer class="base-footer flex flex-direction-column gap-32">
    <div class="base-footer__wrapper base-container">
      <base-logotype></base-logotype>
      <p>Создано c целью повышения навыков :)</p>
    </div>

    <div class="base-container base-footer__wrapper-links">
      <section class="flex flex-direction-column gap-16">
        <h3>Покупателям</h3>

        <ul class="flex flex-direction-column gap-8">
          <li>
            <router-link :to="{ name: 'Home' }">Как сделать заказ?</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Home' }"
              >Возможность доставки в ваш город</router-link
            >
          </li>
          <li>
            <router-link :to="{ name: 'Home' }"
              >Как сделать возврат?</router-link
            >
          </li>
          <li>
            <router-link :to="{ name: 'Home' }">Доставка товара</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Home' }">Бракованный товар?</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Home' }"
              >Как проверить оригинальность?</router-link
            >
          </li>
          <li>
            <router-link :to="{ name: 'Home' }">Гарантиный период</router-link>
          </li>
        </ul>
      </section>
      <section class="flex flex-direction-column gap-16">
        <h3>Компания</h3>

        <ul class="flex flex-direction-column gap-8">
          <li>
            <router-link :to="{ name: 'Home' }">Главная</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Catalog' }">Каталог</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Sizes' }">Размеры</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Reviews' }">Отзывы</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Partners' }">Партнерам</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Blog' }">Блог</router-link>
          </li>
        </ul>
      </section>
      <section class="flex flex-direction-column gap-16">
        <h3>Партнерам</h3>

        <ul class="flex flex-direction-column gap-8">
          <li>
            <router-link :to="{ name: 'Home' }">Стать партнером</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Home' }">Купить товар оптом</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Home' }">Водителям</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Home' }">Курьерам</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Home' }">Франшиза</router-link>
          </li>
        </ul>
      </section>
    </div>
  </footer>
</template>

<style scoped></style>
