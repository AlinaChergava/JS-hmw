var number = Math.round(Math.random() * 100);
//proposition to the user
var pro = prompt("Guess the number", "0");
while (isNaN(pro) || pro < 0 || pro > 100) {
    pro = prompt("Enter number from 0 to 100", "0");
}

if (number == pro) {
    console.log(pro);
    alert("You are right, the number is " + number);
} else {
    if (number > pro) {
        alert("Our number is higher, try again");
    } else {
        alert("Our number is lower, try again");
    }

    {

    }
}
