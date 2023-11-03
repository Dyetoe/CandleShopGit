<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderComponent from "@/components/HeaderComponent.vue";
</script>

<template>
  <header>
    <HeaderComponent />
  </header>

  <RouterView />
</template>

<style scoped>
header {
  background-color: #c9c9c9;
}

</style>
