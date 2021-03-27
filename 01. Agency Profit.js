function air(input) {
let company = (input[0])
let adult_ticket = Number(input[1])
let kids_tickets = Number(input[2])
let adult_ticket_price = Number(input[3])
let tax = Number(input[4])
let adult_ticket_total = adult_ticket * (adult_ticket_price + tax)
let kids_tickets_price = adult_ticket_price * 0.30 + tax
let kid_tickets_total = kids_tickets * kids_tickets_price
let total = adult_ticket_total + kid_tickets_total
let profit = total * 0.20
console.log(`The profit of your agency from ${company} tickets is ${profit.toFixed(2)} lv.`)
}

air(["Ryanair",
"60",
"23",
"158.96",
"39.12"])
