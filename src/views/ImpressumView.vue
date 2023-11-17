<template>
<div id="lower" class='impressum'>
    <h1>Impressum</h1><br>
<p >
Dies ist eine Seite<br>
der BBS I Lüneburg<br>
Spillbrunnenweg 1<br>

21337 Lüneburg<br><br>
 
<h5>Vertretung</h5>
Oberstudiendirektor Heiko Lüdemann<br><br>

<h5>Datenschutz</h5>
Sofern innerhalb dieser Homepage die Möglichkeit zur Eingabe persönlicher oder geschäftlicher<br>
Daten (E-Mail-Adressen, Namen, Anschriften) besteht, so erfolgt die Preisgabe dieser Daten<br>
seitens des Nutzers ausdrücklich auf freiwilliger Ba­sis.<br>
Datenschutzbestimmungen</p><br>

<h5>Entwicklung</h5>
Diese Website ist ein Produkt der BBS I Lüneburg und wurde im Rahmen des Lernfeldes<br>
10 der dualen Ausbildung zum Fachinformatiker für Anwendungsentwicklung entwickelt von:<br><br>
<li v-for="author in authors">
<a :href="author.social">{{author.name}}</a>
</li>
</div>
</template>

<script setup>
let authors = [{name: "Jano Lehnen", social: "https://www.twitch.tv/tacqz"},
               {name: "Stefan Hinrichs", social: "https://github.com/frank765324624576"},
               {name: "Lennart Eläßer", social: "https://github.com/Lennart12345678"},
               {name: "Emil Gietschel", social: "https://github.com/Dyetoe"}, 
               {name: "Alexander Eigenser", social: "https://github.com/Alex470742"}, 
               {name: "Lukas Morawe", social: "https://github.com/SkulIreaper"}];
</script>

<style></style>
