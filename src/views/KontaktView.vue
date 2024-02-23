<template>
  <div class="container mt-4">
    <h1>Kontaktformular</h1>
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="salutation" class="form-label">Anrede*</label>
        <select class="form-select" id="salutation" name="salutation" required>
          <option value="" disabled selected>Wählen Sie eine Option</option>
          <option>Herr</option>
          <option>Frau</option>
          <option>Divers</option>
        </select>
      </div>

      <div class="mb-3">
        <label for="firstName" class="form-label">Vorname*</label>
        <input type="text" class="form-control" id="firstName" name="firstName" required>
      </div>

      <div class="mb-3">
        <label for="lastName" class="form-label">Nachname*</label>
        <input type="text" class="form-control" id="lastName" name="lastName" required>
      </div>

      <div class="mb-3">
        <label for="email" class="form-label">E-Mail*</label>
        <input type="email" class="form-control" id="email" name="email" required>
      </div>

      <div class="mb-3">
        <label for="comment" class="form-label">Anliegen*</label>
        <textarea class="form-control" id="comment" name="comment" rows="3" required></textarea>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="dsgvoCheckBox" required>
        <label class="form-check-label" for="dsgvoCheckBox">
          <RouterLink to="/datenschutz" target="_blank">Datenschutzbestimmung zustimmen</RouterLink>
        </label>
      </div>

      <button type="submit" class="button-62">Abschicken</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios"; // Importiere Axios

export default defineComponent({
  data() {
    return {
      email: "",
      comment: "",
    };
  },
  methods: {
    async submitForm() {
      try {
        if (!this.email || !this.comment) {
          return;
        }

        const response = await axios.post("http://localhost:5173/send-email", {
          email: this.email,
          comment: this.comment,
        });

        if (response.status === 200) {
          console.log("E-Mail wurde erfolgreich gesendet!");
          this.email = "";
          this.comment = "";
        } else {
          // Fehler beim Senden
          console.log("Fehler beim Senden der E-Mail.");
        }
      } catch (error) {
        console.error("Fehler beim Senden der E-Mail:", error);
        alert("Fehler beim Senden der E-Mail.");
      }
    },
  },
});
</script>

<style>
@media (min-width: 1024px) {
  .kontakt {
    min-height: 100vh;

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
  margin-bottom: 2rem;
  margin-top: 1rem;
}

.container {
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}

#email {
  width: 70%;
}

#comment {
  width: 100%;
  height: 200px;
}

.button-62:not([disabled]):focus {
  box-shadow: 0 0 .25rem rgba(0, 0, 0, 0.5), -.125rem -.125rem 1rem rgba(239, 71, 101, 0.5), .125rem .125rem 1rem rgba(255, 154, 90, 0.5);
}

.button-62:not([disabled]):hover {
  box-shadow: 0 0 .25rem rgba(0, 0, 0, 0.5), -.125rem -.125rem 1rem rgba(239, 71, 101, 0.5), .125rem .125rem 1rem rgba(255, 154, 90, 0.5);
}
</style>


