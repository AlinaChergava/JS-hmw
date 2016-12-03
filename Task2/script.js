var x1=2;
var y1=1;
var x2= prompt ("Set your number for x2","3");
var y2= prompt ("Set your number for y2","0");
if (isNaN(x2) || isNaN(y2)) {
    alert("Oops! Something went wrong. You haven't entered a number")
} else {
var result=Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
alert("The distance between points A(2,1)" + "and B(" + x2 + ',' + y2 + ") is " + result)
}
