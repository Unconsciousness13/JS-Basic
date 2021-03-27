function messi(input) {
let counter = 0;
let best_player;
let more_goals = 0;
while (input[counter] != "END"){
    let player = input[counter];
    let goals = Number(input[counter +1]);
    if (goals > more_goals){
        best_player = player
        more_goals = goals
    }
    if (more_goals>=10 ) break;
    
    counter +=2
    
}
console.log(`${best_player} is the best player!`)
if (more_goals >= 3) {
    console.log(`He has scored ${more_goals} goals and made a hat-trick !!!`)
}
else {
    console.log(`He has scored ${more_goals} goals.`)
}
}
messi(["Silva",
"5",
"Harry Kane",
"10"])
