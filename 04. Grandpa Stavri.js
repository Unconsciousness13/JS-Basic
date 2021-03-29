function abuelo(input){
let days = Number(input[0]);
let counter = 1
let rakiq_total = 0
let gradus_before = 0 
for (i = 0; i < days; i++){
    let rakiq = Number(input[counter]);
    let gradus = Number(input[counter +1])
    counter += 2
    rakiq_total  += rakiq
    gradus_before += gradus * rakiq  
}
let gradus_after = gradus_before / rakiq_total
console.log(`Liter: ${rakiq_total.toFixed(2)}`)
console.log(`Degrees: ${gradus_after.toFixed(2)}`)   

if (gradus_after < 38) {
    console.log(`Not good, you should baking!`)
}
else if(38 >= gradus_after || gradus_after <= 42){
    console.log(`Super!`)
}
else if (gradus_after > 42) {
    console.log("Dilution with distilled water!")  
}
}
abuelo(['2',
    '200',
    '43',
    '200',
    '40'
])