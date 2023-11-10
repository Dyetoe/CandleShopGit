<template>
  <div class="wrapper p-2">
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img alt="Vue logo" class="logo" src="@/assets/logo_candleshop.png" width="60" height="60" />
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <RouterLink class="nav-link" to="/">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/prozess">Prozess</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/kontakt">Kontakt</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/impressum">Impressum</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script setup>

import {RouterLink} from "vue-router";
</script>

<style scoped>
nav {
  width: 100%;
  text-align: right;
}

nav a.router-link-exact-active {
  text-decoration: none;
  color: #fc7c01;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  color: #282828;
  font-size: 25px;
  text-decoration: none;
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

</style>