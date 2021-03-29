function ekskurz(input){
let peoples = Number(input[0]);
let season = input[1];
let total = 0
let summer_otst = 0.85
let wint_osk = 1.08
if (peoples <= 5){
    if(season == 'spring'){
        total = peoples * 50.00
    }
    else if(season == 'summer'){
        total = peoples * 48.50
        total = total*summer_otst 
    }
    else if (season ==  'autumn'){
        total = peoples * 60
    }
    else if (season == 'winter'){
        total = peoples * 86
        total = total * wint_osk
    } 
}
else {
    if(season == 'spring'){
        total = peoples * 48
    }
    else if(season == 'summer'){
        total = peoples * 45
        total = total*summer_otst 
    }
    else if (season ==  'autumn'){
        total = peoples * 49.50
    }
    else if (season == 'winter'){
        total = peoples * 85
        total = total * wint_osk
    } 
}
console.log(`${total.toFixed(2)} leva.`)
}
ekskurz(['20','winter'])