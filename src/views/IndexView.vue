<template>
    <div id="index">
        <div id="header-text">
            Kerzenverkauf am 01.01.1970 um 12:00 Uhr<br>
            in der Mensa der BBS1-Lüneburg
        </div>

        <div id="candle-grid">

            <div class="candle-container">
                <div class="candle-title">Kerze 1</div>
                <img class="candle-image">
                <div class="candle-price">3000€</div>
            </div>

            <div class="candle-container">
                <div class="candle-title">Kerze 2</div>
                <img class="candle-image">
                <div class="candle-price">5000€</div>
            </div>

            <div class="candle-container">
                <div class="candle-title">Kerze 3</div>
                <img class="candle-image">
                <div class="candle-price">8000€</div>
            </div>
        </div>


    </div>
</template>



<style>
#index {
    padding: 20px;
}

#header-text {
    text-align: center;
    font-size: 18px;
}

#candle-grid {
    display: grid;
    grid-template-columns: repeat(3, 300px);
    grid-column-gap: 120px;
    justify-content: center;
    margin-top: 40px;
}

.candle-container {
    position: relative;
    display: grid;
    grid-template-rows: auto 1fr auto;
    height: 500px;
    background-color: white;
    text-align: center;
    border: 2px solid black;
}

.candle-title, .candle-price {
    padding: 5px 0;
}

.candle-image {
    width: 100%;
    height: 100%;
    background: #cacaca;
}

.candle-container::before, .candle-container::after {
    content: "";
    position: absolute;
    width: 140px;
    height: 15px;
    top: 50%;
    left: 50%;
    background-color: rgb(157, 157, 157);
}
.candle-container::before {
    transform: translate(-50%, -50%) rotate(-45deg);
}
.candle-container:after {
    transform: translate(-50%, -50%) rotate(45deg);
}
</style>

<!-- Test push -->