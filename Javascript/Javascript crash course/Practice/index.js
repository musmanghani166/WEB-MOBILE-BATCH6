// // ____________________________________Class #1_________________________________________________

// let name1 = "Usman"

//  alert(name1)

// //   Variable Rule ; 

// // Legal or Illegal name
// // Use camelCase for long variable names 
// // legal space
// let firstName = "usman"
// // Illegal space
// // let first Name = "usman"
// // Allowed js special character
// // _ $ &
// // Variable of start cannot be number


// // _________________________________Class #2______________________________________________________

// //  concatenation 
// // let abc = a + b
// let name2 = "Usman"
// // Check inside variable
// let name3 = name2.includes("U")
// console.log(name2)
// // Output ; true

// // How to convert a variable from a string to a number
// // 1 ; start in +
// let num1 = "5"
// console.log(+num1)
// // 2 ; start in function
// console.log(parseInt(num1));
// //Use to Random number
// let randomNum = Math.random()
// randomNum = Math.random() * 10
// console.log(randomNum);
// // . To eliminate the upper one
// randomNum = Math.round(randomNum)
// console.log(randomNum);

// // _________________________________Class #3______________________________________________________

// // coparison oprater 
// //  == , === 
// // == : value cheak
// // === : value and data type cheak

// // for loop
// for (let index = 0; index < 10; index++) {
//      console.log("hello")
// }

// // _________________________________Class #4______________________________________________________

// // Function
// function name1(studentName){
//     console.log(studentName)
// }
// name1("Usman")
// // built-in-function
// // alert()
// // parseInt()
// // etc.
//   function add(num1, num2) {
//     return num1 + num2

//   }
//   let result = add(5,7)
//   console.log(result);
// Recursion
// function writeData(data) {
//     document.write(data)
//     if (time70) {
//         write(data, time-1)
//     }

// }
// console.log("hello ",5);
// Factorial
// function Factorial(num1) {
//     if(num1 > 1){
//         return num1 * Factorial(num1-1)
//     }
//     return 1
// }
// console.log(Factorial(5));
// 
// closures  =>  scope
// Global-scope  =>  Whole file
// child Scope  =>  inside function

// _________________________________Class #5______________________________________________________

// // Array function
// let months =  ["feb"," mar"," apr", "may", "jun"]
//  months.push("aug")
//  months.shift()
// months.unshift("aug")
// months.pop()
// months.length
// months.splice(1, 2)((
// console.log(months.slice(1, 3));
// console.log(months);


// //  Loops
// let arr = [1, 2, 3, 4, 5]
// arr.forEach(function(value, index){
//     console.log( value, index); 
// })

// 
// // Are.filter

// let arr = [2, 5, 2];
// let array = arr.filter(function (value) {
//     if(value % 2 === 0){
//         return true;
//     }
// })
 
//  console.log(array);
// // arr,sort()
// let arr = [1, 2, 3, 5, 6, 4, 7, 8, 9]
// let sort = arr.sort(function(a, b){
//     if(a < b){
//         return 1;
//     }else{
//         return -1;
//     }
// })
// console.log(sort);

// reduce

let arr = [1, 2, 3, 5, 6, 4, 7, 8, 9];
let reduce = arr.reduce(function(prevValue, currValue){
    return prevValue + currValue;
})
console.log(reduce);