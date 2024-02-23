<template>
    <div id="index">


        <div id="header-text">
            Kerzenverkauf am 01.01.1970 um 12:00 Uhr<br>
            in der Mensa der BBS1-Lüneburg
        </div>

        <div id="candle-frame">

            <div id="swipe-left-button" @click="swipe_left"></div>
            
            <div id="candle-grid">
                <div class="candle-container">
                    <div class="candle-title">Kerze 1</div>
                    <img class="candle-image" src="@/assets/IMG_1439.jpg">
                    <div class="candle-price">3000€</div>
                </div>
    
                <div class="candle-container">
                    <div class="candle-title">Kerze 2</div>
                    <img class="candle-image" src="@/assets/IMG_1442.jpg"/>
                    <div class="candle-price">5000€</div>
                </div>
    
                <div class="candle-container">
                    <div class="candle-title">Kerze 3</div>
                    <img class="candle-image" src="@/assets/IMG_1444.jpg">
                    <div class="candle-price">8000€</div>
                </div>
    
                <div class="candle-container">
                    <div class="candle-title">Kerze 4</div>
                    <img class="candle-image" src="@/assets/IMG_1452.jpg">
                    <div class="candle-price">80000€</div>
                </div>
    
                <div class="candle-container">
                    <div class="candle-title">Kerze 5</div>
                    <img class="candle-image" src="@/assets/IMG_9121.jpeg">
                    <div class="candle-price">100000€</div>
                </div>
            </div>

            <div id="swipe-right-button" @click="swipe_right"></div>
        </div>


    </div>
</template>



<script>
function swipe_left() {
    let candle_grid = document.getElementById("candle-grid");
    let candle_container = candle_grid.lastChild;
    candle_grid.removeChild(candle_container);
    candle_grid.insertBefore(candle_container, candle_grid.firstChild);
}
window.onload = () => {
    swipe_left();
}
export default {
    methods: {
        swipe_left,
        swipe_right() {
            let candle_grid = document.getElementById("candle-grid");
            let candle_container = candle_grid.firstChild;
            candle_grid.removeChild(candle_container);
            candle_grid.appendChild(candle_container);
        }
    }
}
</script>


<style>
:root {
    --row-gap: 50px;
    --candle-container-width: 300px;
}

#index {
    padding: 30px 0 50px;
}

#header-text {
    text-align: center;
    font-size: 18px;
}



#swipe-left-button, #swipe-right-button {
    width: 40px;
    height: 40px;
    background-color: #e6d9d9;
    position: relative;
    border-radius: 100%;
    cursor: pointer;
    transition: box-shadow 0.1s;
}
#swipe-left-button:hover, #swipe-right-button:hover {
    box-shadow: 0 0 7px #8c8686;
    transition: box-shadow 0.1s;
}

#swipe-left-button {
    margin-right: 25px;
}
#swipe-left-button::before, #swipe-right-button::before {
    content: "";
    width: 40%;
    height: 40%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
}


#swipe-left-button::before {
    border-left: 2px solid #887e7d;
    border-top: 2px solid #887e7d;
    left: 55%;
}

#swipe-right-button {
    margin-left: 25px;
}
#swipe-right-button::before {
    border-right: 2px solid #887e7d;
    border-bottom: 2px solid #887e7d;
    left: 45%;
}



#candle-frame {
    display: inline-grid;
    grid-template-columns: auto 1fr auto;
    margin-top: 40px;
    align-items: center;

    position: relative;
    left: 50%;
    transform: translateX(-50%);
}

#candle-grid {
    display: grid;
    grid-template-columns: repeat(5, var(--candle-container-width));
    grid-column-gap: 120px;
    justify-content: center;
    max-width: 1140px;
    overflow: hidden;
    margin: 0 auto 0;
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

/*
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
*/

@media screen and (max-width: 1190px) {
    #candle-grid {
        grid-template-columns: repeat(2, var(--candle-container-width));
        grid-row-gap: var(--row-gap);
    }
}
@media screen and (max-width: 790px) {
    #candle-grid {
        grid-template-columns: var(--candle-container-width);
    }
} 
</style>