var number = Math.round(Math.random() * 100);
var pro = prompt("Guess the number", "0");
if (number == pro) {
    console.log (pro);
    alert("You are right, the number is " + number);
}
else {
    if (number > pro) {
        alert("Our number is higher, try again");
    } else {
        alert("Our number is lower, try again");
    }

    {

    }
}
