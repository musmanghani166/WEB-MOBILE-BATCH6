// // Q:No:1 a function that creates a closure and returns a function that can add
// // a specific number to any number passed to it. For example, if the closure is
// // created with 5, the returned function should add 5 to any number passed to it

// let num1 =+ prompt("Enter your number")
// function addNum(num) {
//     return function(x) {
//       return x + num;
//     }
//   }
//  let  addFive = addNum(5);
//   console.log(addFive(num1));  

// // ------------------------------------------------------------------------------------------------------- // 

// // Q:No:2 Write a recursive function that searches an array for a specific value. The
// // function should return true if the value is found, and false if it is not. You
// // can assume that the array is not nested
// let array1 = [1, 2, 3, 4, 5];
// let array2 = [6, 7, 8]
// function functionArray(arr, val) {
//     if (arr[0] === val) {
//         return  "The value is found";
//     }  else if (arr.length === 0) {
//         return  "The value is not found";
//     }  else {
//         return functionArray(arr.slice(1), val);
//     }
// }
// console.log(functionArray(array1, 0));
// console.log(functionArray(array2, 8)); 

// // ------------------------------------------------------------------------------------------------------- // 