function paintingEggs(input) {
let eggs_size = input[0]
let eggs_color = input[1]
let partition_count = Number(input[2])
let total = 0
let aditional = 0
if (eggs_size == "Large"){
    if(eggs_color == "Red"){
        total = partition_count * 16

    }
    else if(eggs_color == "Green"){
        total = partition_count * 12
    }
    else if(eggs_color == "Yellow"){
        total = partition_count * 9
    }
}
else if (eggs_size == "Medium"){
    if(eggs_color == "Red"){
        total = partition_count * 13

    }
    else if(eggs_color == "Green"){
        total = partition_count * 9

    }
    else if(eggs_color == "Yellow"){
        total = partition_count * 7

    }

}
else if (eggs_size == "Small"){
    if(eggs_color == "Red"){
        total = partition_count * 9

    }
    else if(eggs_color == "Green"){
        total = partition_count * 8

    }
    else if(eggs_color == "Yellow"){

        total = partition_count * 5
    }

}
aditional = total * 0.35
total = total - aditional
console.log(`${total.toFixed(2)} leva.`)
}
paintingEggs(["Small",
"Yellow",
"3"])
