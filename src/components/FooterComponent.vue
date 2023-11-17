<template>
  <div class="wrapper p-2">
        <div id="logo-container" class="text-center">
          <img alt="Twitter_Logo" class="logo" src="@/assets/Twitter.png" />
          <img alt="Instagram_Logo" class="logo" src="@/assets/Instagram.png" />
          <img alt="Facebook_Logo" class="logo" src="@/assets/Facebook.png"  />
        </div>
  </div> 
</template>

<script setup>
</script>

<style scoped>

#logo-container {
  display: block;
  margin: auto;
}

.logo {
  width: 50px;
  height: 50px;
  margin: auto;
}

nav a:first-of-type {
  border: 0;
}

</style>