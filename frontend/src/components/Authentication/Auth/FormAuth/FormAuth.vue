<script setup>
import BaseInput from '../../../Inputs/BaseInput/BaseInput.vue'
import BaseCheckbox from "../../../Checkboxes/BaseCheckbox/BaseCheckbox.vue";
import BaseButton from "../../../Buttons/BaseButton/BaseButton.vue";
</script>

<template>
  <form class="form-auth">
    <fieldset class="form-auth__fieldset flex flex-direction-column gap-8">

      <router-link class="form-auth__fieldset__back-home" :to="{name: 'Home'}">
        <span class="form-auth__fieldset__back-home__arrow"></span>
        Вернуться на главную
      </router-link>

      <legend class="form-auth__fieldset__legend">Войти</legend>
      <base-input label="Логин" placeholder="Ваш логин"></base-input>
      <base-input label="Пароль" placeholder="Ваш пароль" type="password"></base-input>
      <base-checkbox class="margin-top-12" label="Запомнить"></base-checkbox>
      <base-button class="max-width-100 margin-top-24">
        <template v-slot:inner-text>
          Войти
        </template>
      </base-button>
    </fieldset>
  </form>
</template>

<style scoped lang="scss">
.form-auth {

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
