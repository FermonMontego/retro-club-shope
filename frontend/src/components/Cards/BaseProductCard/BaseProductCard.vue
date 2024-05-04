<script setup>
import BaseButton from "../../Buttons/BaseButton/BaseButton.vue";
</script>

<template>
  <article
    class="base-product-card"
  >
    <div class="base-product-card__wrapper">
      <img
        class="base-product-card__wrapper__img"
        src="https://basket-13.wbbasket.ru/vol1932/part193235/193235480/images/c246x328/5.webp"
        alt="Фотография продукта"
      />

      <div class="base-product-card__wrapper__product-info">
        <h3 class="base-product-card__wrapper__product-info__title"></h3>
        <div class="base-product-card__wrapper__product-info__description">
          <h3
            class="base-product-card__wrapper__product-info__description__price"
          >
            3999.00 <span>Руб.</span>
          </h3>
          <p>Артикль</p>
        </div>
      </div>

      <base-button>
        <template v-slot:inner-text>В корзину</template>
      </base-button>
    </div>
  </article>
</template>

<style scoped></style>
