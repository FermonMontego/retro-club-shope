<script setup>

import AuthenticationLayout from "../../../layouts/AuthenticationLayout.vue";
import FormRegistration from "../../../components/Authentication/Registration/FormRegistration/FormRegistration.vue";
</script>

<template>
  <authentication-layout>
    <template v-slot:default>
      <section class="base-container">
        <form-registration></form-registration>
      </section>
    </template>
  </authentication-layout>
</template>

<style scoped>

</style>
