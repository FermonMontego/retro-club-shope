<script setup>
import BaseHeader from "../components/Headers/BaseHeader.vue";
import BaseFooter from "../components/Footers/BaseFooter/BaseFooter.vue";
import BaseLogotype from "../components/Logotypes/BaseLogotype/BaseLogotype.vue";
</script>

<template>
  <base-header>
    <template v-slot:logotype>
      <base-logotype></base-logotype>
    </template>
  </base-header>

  <main class="default-layout-main">
    <slot></slot>
  </main>

  <base-footer></base-footer>
</template>

<style scoped></style>
