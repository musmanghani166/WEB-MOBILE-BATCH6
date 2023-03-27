
// Q.No: 1 js program to find maximum between two numbers

var num1 = + prompt('enter your first number');
var num2 = + prompt('enter your second number');

if (num1 >= num2) {
    console.log("your first number is large", num1, "and secnd number is small", num2)
}
else {
    console.log("your second number is large", num2, "and first number is small", num1)
}

// Q.No:2 js program to find maximum between three numbers

var age = + prompt('enter your age')
if (age < 15) {
    console.log('you are a baby')
}
else if (age <= 35) {
    console.log("you are a  young")
}
else if (age > 35) {
    console.log("you are a old man")
}
//  Q.No:3 js program to check whether a number is negative, positive or zero
    var num =+ prompt("entar your any number")

   if(num <= -1){
    console.log("your number is nagitive", num)
   }
   else if(num > 0){
    console.log("your number is positive", num)
   }
   else {
    console.log("your number is zero")
   }


