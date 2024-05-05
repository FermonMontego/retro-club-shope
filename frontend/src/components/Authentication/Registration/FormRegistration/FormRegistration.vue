<script setup>
import BaseInput from "../../../Inputs/BaseInput/BaseInput.vue";
import BaseButton from "../../../Buttons/BaseButton/BaseButton.vue";
</script>

<template>
  <form class="form-registration">
    <fieldset
      class="form-registration__fieldset flex flex-direction-column gap-8"
    >
      <router-link
        class="form-registration__fieldset__back-home"
        :to="{ name: 'Home' }"
      >
        <span class="form-registration__fieldset__back-home__arrow"></span>
        Вернуться на главную
      </router-link>

      <legend class="form-registration__fieldset__legend">Регистрация</legend>

      <base-input
        label="Придумайте логин"
        placeholder="Введите логин"
      ></base-input>
      <base-input
        label="Придумайте пароль"
        placeholder="Введите пароль"
        type="password"
      ></base-input>
      <base-input
        label="Повторите пароль"
        placeholder="Введите пароль"
        type="password"
      ></base-input>
      <base-button class="max-width-100 margin-top-24">
        <template v-slot:inner-text> Войти</template>
      </base-button>
    </fieldset>
  </form>
</template>

<style scoped lang="scss">
.form-registration {
  max-width: 400px;
  width: 100%;
  margin: 0 auto;

  &__fieldset {
    padding: 24px;
    border: 1px solid #000;

    &__back-home {
      color: #fff;
      font-size: 14px;

      display: flex;
      align-items: center;
      gap: 4px;
      justify-content: center;

      padding: 8px 12px;
      background: #000;

      margin: 12px 0;

      border: 1px solid #000;

      &__arrow {
        width: 8px;
        height: 8px;

        border-top: 1px solid #fff;
        border-left: 1px solid #fff;

        transform: rotate(-45deg);
      }
    }

    &__legend {
      padding: 0px 12px;
      font-size: 32px;
      font-weight: 500;
      text-align: center;
    }
  }
}
</style>
