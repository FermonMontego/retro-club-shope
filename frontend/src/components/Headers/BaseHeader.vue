<script setup>
import BaseNavigation from "../Navigations/HeaderNavigation/BaseNavigation.vue";
import BaseInput from "../Inputs/BaseInput/BaseInput.vue";
</script>

<template>
  <header class="base-header">
    <div class="base-container flex flex-direction-column gap-16">
      <div class="base-header__wrapper">
        <slot name="logotype"></slot>

        <base-navigation></base-navigation>

        <div class="base-header__wrapper__user-panel">
          <router-link :to="{name: 'Auth'}">Войти</router-link> | <router-link :to="{name: 'Registration'}">Регистрация</router-link>
        </div>
      </div>

      <div>
        <base-input
          type="search"
          placeholder="Введите поисковой запрос"
        >
        </base-input>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
