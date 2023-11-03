<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderComponent from "@/components/HeaderComponent.vue";
</script>

<template>
  <header>
    <HeaderComponent />
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  background-color: #c9c9c9;
}

#app > main{
  width: 95%;
  margin: 0 auto;
}

</style>
