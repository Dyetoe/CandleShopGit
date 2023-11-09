<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
</script>

<template>
  <header>
    <HeaderComponent />
  </header>
  <main>
    <RouterView />
  </main>
  <footer>
    <FooterComponent />
  </footer>
</template>

<style scoped>
header {
  background-color: #c9c9c9;
}

footer {
  background-color: #fc7c01;
}

#app > main{
  width: 95%;
  margin: 0 auto;
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 80vh;
}


</style>
