<script setup>
import BaseButton from "../Buttons/BaseButton/BaseButton.vue"
import BaseInput from "../Inputs/BaseInput/BaseInput.vue";
import BaseCheckbox from "../Checkboxes/BaseCheckbox/BaseCheckbox.vue";
</script>

<template>
  <aside class="catalog-sidebar">
    <section class="catalog-sidebar__filter">
      <form class="flex flex-direction-column gap-16">
        <h2 class="catalog-sidebar__filter__title">Цена</h2>
        <div class="flex gap-8 align-items-end">
          <base-input placeholder="От"></base-input>
          <base-input placeholder="До"></base-input>
        </div>

        <base-checkbox label="Только в наличии"></base-checkbox>
        <base-button class="align-self-end">
          <template v-slot:inner-text>
            Применить
          </template>
        </base-button>
      </form>
    </section>
  </aside>
</template>

<style scoped>

</style>
