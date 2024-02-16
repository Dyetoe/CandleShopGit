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
    
    
                <!-- <div class="candle-container">
                    <div class="candle-title">Kerze 4</div>
                    <img class="candle-image">
                    <div class="candle-price">80000€</div>
                </div>
    
    
                <div class="candle-container">
                    <div class="candle-title">Kerze 5</div>
                    <img class="candle-image">
                    <div class="candle-price">100000€</div>
                </div> -->
            </div>

            <div id="swipe-right-button" @click="swipe_right"></div>
        </div>


    </div>
</template>



<script>
export default {
    methods: {
        swipe_left() {
            console.log("ANJA");
        },

        swipe_right() {

        }
    }
}


// const swipe_left_button = document.getElementById("swipe-left-button");
// const swipe_right_button = document.getElementById("swipe-right-button");

// swipe_left_button.onclick = () => {
//     console.log("ANJA");
// }

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

#candle-frame {
    display: inline-grid;
    grid-template-columns: auto 1fr auto;
    margin-top: 40px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
}

#candle-grid {
    display: grid;
    grid-template-columns: repeat(3, var(--candle-container-width));
    grid-column-gap: 120px;
    justify-content: center;
    max-width: 1140px;
    overflow: hidden;
    margin: auto;
}

#swipe-left-button, #swipe-right-button {
    content: "";
    width: 20px;
    height: 20px;
    background-color: black;
    margin: auto;
}
#swipe-left-button {
    margin-right: 20px;
}
#swipe-right-button {
    margin-left: 20px;
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


/* @media screen and (max-width: 1190px) {
    #candle-grid {
        grid-template-columns: repeat(2, var(--candle-container-width));
        grid-row-gap: var(--row-gap);
    }
}
@media screen and (max-width: 790px) {
    #candle-grid {
        grid-template-columns: var(--candle-container-width);
    }
} */
</style>