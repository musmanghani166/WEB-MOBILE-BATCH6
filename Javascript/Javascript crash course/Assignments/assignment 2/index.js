// // Q:No:1 a function that creates a closure and returns a function that can add a specific number to any number passed to it. 
// //  For example, if the closure is  created with 5, the returned function should add 5 to any number passed to it
 

// let num1 =+ prompt("Enter your number")
// function addNum(num) {
//     return function(x) {
//       return x + num;
//     }
//   }
//  let  addFive = addNum(5);
//   console.log(addFive(num1));  

// // ------------------------------------------------------------------------------------------------------- // 

// // Q:No:2 Write a recursive function that searches an array for a specific value. The function should return true if the value
// //is found, and false if it is not. You can assume that the array is not nested
 
// let array1 = [1, 2, 3, 4, 5];
// let array2 = [6, 7, 8]
// function functionArray(arr, val) {
//     if (arr[0] === val) {
//         return  true;
//     }  else if (arr.length === 0) {
        // return  false ;
//     }  else {
//         return functionArray(arr.slice(1), val);
//     }
// }
// console.log(functionArray(array1, 0));
// console.log(functionArray(array2, 8)); 

// // ------------------------------------------------------------------------------------------------------- // 

// // Q:No:3 Write a function that adds a new paragraph element to the bottom of an HTML document. The function should take a string argument that will be
// // used as the text content of the new paragraph element.

// function addText (text) {
//   document.getElementById("p1").innerHTML = text 
// }
// addText("Hello World")

//  // ------------------------------------------------------------------------------------------------------- // 

// // Q:No:4 Write a function that adds a new list item to an unordered list in an HTML document. The function should take a 
// //  string argument that will be used as the text content of the new list item.
 
// function addListItem(text) {
//    let list = document.querySelector('ul');
//    let newItem = document.createElement('li');
//    newItem.textContent = text;
//    list.appendChild(newItem);
//   }

//   addListItem("Item3")

//   // ------------------------------------------------------------------------------------------------------- // 

// // Q;No:5 function that changes the background color of an HTML element.The function should take two arguments: the first argument is a reference
// // to the HTML element, and the second argument is a string representing the new background color


// function bgcolor (){
//         document.getElementById("h1").style.backgroundColor = "red"
// }
// bgcolor()

// // ------------------------------------------------------------------------------------------------------- // 
