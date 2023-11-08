<template>
  <div>
    <h1>Kontaktformular</h1>
    <label for="email">E-Mail:</label>
    <div class="form-group">
      
      <input type="email" id="email" v-model="email" required>
    </div>
    <label for="comment">Kommentar:</label>
    <div class="form-group">
      
      <textarea id="comment" v-model="comment" required></textarea>
    </div>
    <div class="form-group">
      <br>
      <button @click="submitForm">Abschicken</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      email: "",
      comment: ""
    };
  },
  methods: {
    submitForm() {
    }
  }
});
</script>

<style>
@media (min-width: 1024px) {
  .kontakt {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
