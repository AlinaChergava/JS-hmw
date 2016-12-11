//pro-proposition to the user
var pro = confirm("Do you want to play the game?");
//x-the prize
var x = 0;
//secondpro-second proposition to the user
var secondpro;
//number-the number user entered
var number;


if (pro == true) {
    //random number from 0 to 5
    var rand = Math.round(Math.random() * 5);

    //the first three attempts
    for (var i = 1; i <= 3; i++) {

        number = parseInt(prompt("Enter the number from 0 to 5"));

        if (i == 1 && number == rand) {
            x = x + 10;
            secondpro = confirm("Thanks for the game! Your win is 10$. Do you want to try again ?");
            if (secondpro == true) {
                i = 0;
            } else {
                alert("Thanks for the game! Your win is - " + x + "$");
                break;
            }
        } else if (i == 2 && number == rand) {
            x = x + 5;
            secondpro = confirm("Thanks for the game! Your win is 5$. Do you want to try again ?");
            if (secondpro == true) {
                i = 0;
            } else {
                alert("Thanks for the game! Your win is - " + x + "$");
                break;
            }
        } else if (i == 3 && number == rand) {
            x = x + 2;
            secondpro = confirm("Thanks for the game! Your win is 2$. Do you want to try again ?");
            if (secondpro == true) {
                i = 0;
            } else {
                alert("Thanks for the game! Your win is - " + x + "$");
                break;
            }
        } else if (i == 3 && number != rand) {
            secondpro = confirm("You loose the game, do you want to try again ?");
            if (secondpro == true) {
                i = 0;
            } else {
                alert("Thanks for the game! Your win is - " + x + "$");
                break;
            }
        } else {
            alert('You won 0$, try again');
        }
    }
} else {
    alert('Today you will not win the jackpot, but you could');
}
