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
      <button class="button-62" @click="submitForm">Abschicken</button>
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
/* CSS */
.button-62 {
  background: linear-gradient(to bottom right, #EF4765, #FF9A5A);
  border: 0;
  border-radius: 12px;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system,system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 2.5;
  outline: transparent;
  padding: 0 1rem;
  text-align: center;
  text-decoration: none;
  transition: box-shadow .2s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
}

.button-62:not([disabled]):focus {
  box-shadow: 0 0 .25rem rgba(0, 0, 0, 0.5), -.125rem -.125rem 1rem rgba(239, 71, 101, 0.5), .125rem .125rem 1rem rgba(255, 154, 90, 0.5);
}

.button-62:not([disabled]):hover {
  box-shadow: 0 0 .25rem rgba(0, 0, 0, 0.5), -.125rem -.125rem 1rem rgba(239, 71, 101, 0.5), .125rem .125rem 1rem rgba(255, 154, 90, 0.5);
}
</style>
