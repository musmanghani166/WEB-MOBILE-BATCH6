
// Q.No: 1 js program to find maximum between two numbers

var num1 = + prompt('enter your first number');
var num2 = + prompt('enter your second number');

if (num1 >= num2) {
    console.log("your first number is large", num1, "and secnd number is small", num2)
}
else {
    console.log("your second number is large", num2, "and first number is small", num1)
}

//  _______________________________________________________________________________________________  //

// Q.No:2 js program to find maximum between three numbers

var age = + prompt('enter your age');
if (age < 15) {
    console.log('you are a baby')
}
else if (age <= 35) {
    console.log("you are a  young")
}
else if (age > 35) {
    console.log("you are a old man")
}

//  _______________________________________________________________________________________________  //

//  Q.No:3 js program to check whether a number is negative, positive or zero
    var num =+ prompt("entar your any number");

   if(num <= -1){
    console.log("your number is nagitive", num)
   }
   else if(num > 0){
    console.log("your number is positive", num)
   }
   else {
    console.log("your number is zero")
   }
//  _______________________________________________________________________________________________  //

// Q.NO:4  js program to check whether a number is divisible by 5 and 11 or not.

   var num =+ prompt("entar your any number");
   if(num % 5 == 0){
    console.log("your number is complete divide on 5")
   }
   else if(num % 11 == 0){
    console.log("your number is complete divide on 11")
   }
    else{
    console.log(" your number on 5 and 11 not complete  divide")
   }

//  _______________________________________________________________________________________________  //

//  Q.NO:5  js program to check whether a number is even or odd

    var num =+ prompt("entar your any number");
   if(num % 2 == 0){
    console.log("your number is even")
   }
   else{
    console.log("your number is odd")
   }

//  _______________________________________________________________________________________________  //

//   Q.NO:6  js program to check whether a year is leap year or not

var year = + prompt("Entar your Year");

if (year % 4 == 0) {
    console.log("It will be a leap year")
}
else {
    console.log("This will not be a leap year.")
}

//   _______________________________________________________________________________________________  //

//   Q.NO:7  js program to check whether a character is alphabet or not

var abc = prompt("entar your any alphabet");
var alphabat = "qwertyuiopasdfghjklzxcvbnm" ;
var isAlphabet = false;
for (let index = 0; index < alphabat.length ; index++) {
    if(abc.toLowerCase() == alphabat.charAt(index)){
        isAlphabet = true
    }
}
if(isAlphabet){
    console.log("Your word is the alphabet")
}
else{
    console.log("Your word is  not alphabet")
}



//   _______________________________________________________________________________________________  //

// Q.NO:8 js program to input any alphabet and check whether it is vowel or consonant

    var abc = prompt("entar your any alphabet");
var alphabat = "aeiou" ;
var isAlphabet = false;
for (let index = 0; index < alphabat.length ; index++) {
    if(abc.toLowerCase() == alphabat.charAt(index)){
        isAlphabet = true
    }
}
if(isAlphabet){
    console.log("Your word is the vowel")
}
else{
    console.log("Your word is  consonant")
}
    

    //   _______________________________________________________________________________________________  //

     