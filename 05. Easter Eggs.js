function easter(input) {
    let eggs_quantity = Number(input[0])
    let red_eggs = 0;
    let orange_eggs = 0;
    let blue_eggs = 0;
    let green_eggs = 0;
    let max_eggs = 0;
    let max_name = ''
    let itterator = 1
    for (i = 0; i < eggs_quantity; i++) {
        let color = input[itterator]
        itterator += 1

        if (color == "red") {
            red_eggs += 1
            if (red_eggs >= max_eggs) {
                max_eggs = red_eggs
                max_name = color
            }
        }
        else if (color == "orange") {
            orange_eggs += 1
            if (orange_eggs >= max_eggs) {
                max_eggs = orange_eggs
                max_name = color
            }
        }
        else if (color == "blue") {
            blue_eggs += 1
            if (blue_eggs >= max_eggs) {
                max_eggs = blue_eggs
                max_name = color
            }
        }
        else if (color == "green") {
            green_eggs += 1
            if (green_eggs >= max_eggs) {
                max_eggs = green_eggs
                max_name = color
            }
        }

    }
console.log(`Red eggs: ${red_eggs}`)
console.log(`Orange eggs: ${orange_eggs}`)
console.log(`Blue eggs: ${blue_eggs}`)
console.log(`Green eggs: ${green_eggs}`)
console.log(`Max eggs: ${max_eggs} -> ${max_name}`)
}
easter(["4",
"blue",
"red",
"blue",
"orange"]) 

