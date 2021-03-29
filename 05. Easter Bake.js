function Koz(input) {
    let koz_quantity = Number(input[0])
    let itterator = 1;
    let sugar_total = 0;
    let flour_total = 0;
    let max_sugar = 0;
    let max_flour = 0;
    for (i = 0; i < koz_quantity; i++) {
        let sugar = Number(input[itterator])
        let flour = Number(input[itterator + 1])
        itterator += 2
        sugar_total += sugar;
        flour_total += flour;
        if (sugar >= max_sugar) {
            max_sugar = sugar;
        }

        if (flour >= max_flour) {
            max_flour = flour
        }

    }
    sugar_total = Math.ceil(sugar_total / 950);
    flour_total = Math.ceil(flour_total / 750);
    console.log(`Sugar: ${sugar_total}`);
    console.log(`Flour: ${flour_total}`);
    console.log(`Max used flour is ${max_flour} grams, max used sugar is ${max_sugar} grams.`)
}
Koz(["4",
"500",
"350",
"560",
"430",
"600",
"345",
"578",
"543"])
