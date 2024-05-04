<script setup>
import AuthenticationLayout from "../../../layouts/AuthenticationLayout.vue";
import FormAuth from "../../../components/Authentication/Auth/FormAuth/FormAuth.vue";
</script>

<template>
  <authentication-layout>
    <template v-slot:default>
      <section class="base-container">
        <form-auth></form-auth>
      </section>
    </template>
  </authentication-layout>
</template>

<style scoped></style>
