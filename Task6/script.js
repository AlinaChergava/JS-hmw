var number = Math.round(Math.random() * 100);
while (number !== pro) {
    //proposition to the user
    var pro = prompt("Guess the number", "0");
    while (isNaN(pro) || pro < 0 || pro > 100) {
        pro = prompt("Enter number from 0 to 100", "0");
    }
    if (number > pro) {
        alert("Our number is higher, try again");
    } else if (number < pro) {
        alert("Our number is lower, try again");

    } else {
        alert("You are right, the number is " + number);
    }
}
