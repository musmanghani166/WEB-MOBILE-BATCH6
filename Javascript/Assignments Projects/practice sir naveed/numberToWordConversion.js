// // import promptSync from "prompt-sync";
// // const prompt = promptSync();

// const numberToWordConversion = (num) => {                         //parent Function for number to word conversion

//     // Below child functions for different number of digit conversions

//     const twoDigitConverter = (n) => {
//         let wordOfTwoDigit;
//         for (let index = 0; index <= 99; index++) {
//             if (index === Number.parseInt(n)) {
//                 if (n < 20 && num != 0) {
//                     wordOfTwoDigit = wordsUpTo19[Number.parseInt(n)];
//                     // console.log(wordOfTwoDigit);
//                 } else {
//                     if (n.charAt(1) != 0) {
//                         wordOfTwoDigit =
//                             countingGapWith10[n.charAt(0)] + " " + wordsUpTo19[n.charAt(1)];
//                     } else {
//                         wordOfTwoDigit = countingGapWith10[n.charAt(0)];
//                     }
//                 }
//             }
//         }
//         return wordOfTwoDigit;
//     };

//     const threeDigitConverter = (n3) => {
//         let elem1;
//         if (n3.charAt(0) != 0) {
//             elem1 = n3.charAt(0);
//             elem1 = wordsUpTo19[elem1] + " Hundred ";
//         } else {
//             elem1 = "";
//         }
//         let word = elem1 + twoDigitConverter(n3.substring(1));
//         return word;
//     };

//     const fourDigitConverter = (n4) => {
//         //   let elem1 = n4.charAt(0);
//         //   elem1 = wordsUpTo19[elem1] + " Thousand ";
//         let elem1;
//         if (n4.charAt(0) != 0) {
//             elem1 = n4.charAt(0);
//             elem1 = wordsUpTo19[elem1] + " Thousand ";
//         } else {
//             elem1 = "";
//         }
//         let word = elem1 + threeDigitConverter(n4.substring(1));
//         return word;
//     };
//     const fiveDigitConverter = (n5) => {
//         //   let elem1 = n5.charAt(0) + n5.charAt(1);
//         //   elem1 = wordsUpTo19[elem1] + " Thousand ";
//         // let elem1;
//         // if (n5.charAt(0) != 0) {
//         //   elem1 = n5.charAt(0);
//         //   elem1 = wordsUpTo19[elem1] + " Thousand ";
//         // } else {
//         //   elem1 = "";
//         // }

//         let elem1;
//         if (n5.charAt(0) != 0) {      //11 or 10
//             elem1 = n5.charAt(0).toString() + n5.charAt(1).toString();
//             //   console.log("elem1", elem1)
//             elem1 = twoDigitConverter(elem1) + " Thousand ";
//         } else if (n5.charAt(0) == 0 && n5.charAt(1) != 0) {      //01
//             elem1 = n5.charAt(1);
//             elem1 = wordsUpTo19[elem1] + " Thousand ";
//         } else {      //00
//             elem1 = "";
//         }

//         let word = elem1 + threeDigitConverter(n5.substring(2));
//         return word;
//     };
//     const sixDigitConverter = (n6) => {
//         let elem1;
//         if (n6.charAt(0) != 0) {
//             elem1 = n6.charAt(0);
//             elem1 = wordsUpTo19[elem1] + " Lakh ";
//         } else {
//             elem1 = "";
//         }
//         let word = elem1 + fiveDigitConverter(n6.substring(1));
//         return word;
//     };
//     const sevenDigitConverter = (n7) => {
//         let elem1;
//         if (n7.charAt(0) != 0) {      //11 or 10
//             elem1 = n7.charAt(0) + n7.charAt(1);
//             elem1 = twoDigitConverter(elem1) + " Lakhs ";
//         } else if (n7.charAt(0) == 0 && n7.charAt(1) != 0) {      //01
//             elem1 = n7.charAt(1);
//             elem1 = wordsUpTo19[elem1] + " Lakh ";
//         } else {      //00
//             elem1 = "";
//         }
//         let word = elem1 + fiveDigitConverter(n7.substring(2));
//         return word;
//     };

//     const eightDigitConverter = (n8) => {
//         let elem1;
//         if (n8.charAt(0) != 0) {
//             elem1 = n8.charAt(0);
//             elem1 = wordsUpTo19[elem1] + " Crore ";
//         } else {
//             elem1 = "";
//         }
//         let word = elem1 + sevenDigitConverter(n8.substring(1));
//         return word;
//     };

//     const nineDigitConverter = (n9) => {
//         let elem1;
//         if (n9.charAt(0) != 0) {      //11 or 10
//             elem1 = n9.charAt(0) + n9.charAt(1);
//             elem1 = twoDigitConverter(elem1) + " Crores ";
//         } else if (n9.charAt(0) == 0 && n9.charAt(1) != 0) {      //01
//             elem1 = n9.charAt(1);
//             elem1 = wordsUpTo19[elem1] + " Crore ";
//         } else {      //00
//             elem1 = "";
//         }
//         let word = elem1 + sevenDigitConverter(n9.substring(2));
//         return word;
//     };

//     const tenDigitConverter = (n10) => {
//         let elem1;
//         if (n10.charAt(0) != 0) {
//             elem1 = n10.charAt(0);
//             elem1 = wordsUpTo19[elem1] + " Arab ";
//         } else {
//             elem1 = "";
//         }
//         let word = elem1 + nineDigitConverter(n10.substring(1));
//         return word;
//     };

//     const elevenDigitConverter = (n11) => {
//         let elem1;
//         if (n11.charAt(0) != 0) {      //11 or 10
//             elem1 = n11.charAt(0) + n11.charAt(1);
//             elem1 = twoDigitConverter(elem1) + " Arab ";
//         } else if (n11.charAt(0) == 0 && n11.charAt(1) != 0) {      //01
//             elem1 = n11.charAt(1);
//             elem1 = wordsUpTo19[elem1] + " Arab ";
//         } else {      //00
//             elem1 = "";
//         }
//         let word = elem1 + nineDigitConverter(n11.substring(2));
//         return word;
//     };
//     const twelveDigitConverter = (n12) => {
//         let elem1;
//         if (n12.charAt(0) != 0) {
//             elem1 = n12.charAt(0);
//             elem1 = wordsUpTo19[elem1] + " Kharab  ";
//         } else {
//             elem1 = "";
//         }
//         let word = elem1 + elevenDigitConverter(n12.substring(1));
//         return word;
//     };

//     const thirteenDigitConverter = (n13) => {
//         let elem1;
//         if (n13.charAt(0) != 0) {      //11 or 10
//             elem1 = n13.charAt(0) + n13.charAt(1);
//             elem1 = twoDigitConverter(elem1) + " Kharab ";
//         } else if (n13.charAt(0) == 0 && n13.charAt(1) != 0) {      //01
//             elem1 = n13.charAt(1);
//             elem1 = wordsUpTo19[elem1] + " Kharab ";
//         } else {      //00
//             elem1 = "";
//         }
//         let word = elem1 + elevenDigitConverter(n13.substring(2));
//         return word;
//     };

//     const moreThanThirteenDigitConverter = (anyNumber) => {
//         let word = "";
//         let counter = 0;    //counter uses for termination condition in while loop
//         let arrNums = [];   //This array will store different sub portion given number
//         let arrWords = [];  //This array will store different sub portion required word from given number
//         let index = 0;
//         while (counter == 0) {
//             if (anyNumber.length > 13) {

//                 arrNums.push(anyNumber.slice(-11));

//                 anyNumber = anyNumber.slice(0, anyNumber.length - 11);
//                 // console.log(arrNums[index]);
//                 word = elevenDigitConverter(arrNums[index]);
//                 // console.log(`word at ${index} : ${word} `);
//                 // console.log(anyNumber);
//                 arrWords.push(word);

//                 index++;
//             }
//             else {
//                 switch (anyNumber.length) {
//                     case 1:
//                         word = wordsUpTo19[Number.parseInt(anyNumber)];
//                         arrWords.push(word);
//                         //   console.log(word);
//                         break;
//                     case 2:
//                         word = twoDigitConverter(anyNumber);
//                         arrWords.push(word);
//                         break;
//                     case 3:
//                         word = threeDigitConverter(anyNumber);
//                         arrWords.push(word);
//                         break;
//                     case 4:
//                         word = fourDigitConverter(anyNumber);
//                         arrWords.push(word);
//                         break;
//                     case 5:
//                         word = fiveDigitConverter(anyNumber);
//                         arrWords.push(word);
//                         break;
//                     case 6:
//                         word = sixDigitConverter(anyNumber);
//                         arrWords.push(word);
//                         break;
//                     case 7:
//                         word = sevenDigitConverter(anyNumber);
//                         arrWords.push(word);
//                         break;
//                     case 8:
//                         word = eightDigitConverter(anyNumber);
//                         arrWords.push(word);
//                         break;
//                     case 9:
//                         word = nineDigitConverter(anyNumber);
//                         arrWords.push(word);
//                         break;
//                     case 10:
//                         word = tenDigitConverter(anyNumber);
//                         arrWords.push(word);
//                         break;
//                     case 11:
//                         word = elevenDigitConverter(anyNumber);
//                         arrWords.push(word);
//                         break;
//                     case 12:
//                         word = twelveDigitConverter(anyNumber);
//                         arrWords.push(word);
//                         break;
//                     case 13:
//                         word = thirteenDigitConverter(anyNumber);
//                         arrWords.push(word);
//                         break;

//                     default:
//                         break;
//                 }
//                 counter++;
//             }

//         }
//         index = 0;
//         word = "";
//         for (let i = arrWords.length; i > 0; i--) {
//             // console.log(arrWords.length);
//             // console.log("i-1", i-1);
//             // console.log(i != arrWords.length);
//             // console.log(arrWords);
//             if (i == arrWords.length) {
//                 word = arrWords[i - 1] + " Kharab ";
//                 // console.log("Word inside loop at " + i + ": " + word);
//             } else {
//                 word = word + arrWords[i - 1];
//                 // console.log("Word inside loop at " + i + ": " + word);
//             }
//         }

//         return word;
//     };

//     const wordsUpTo19 = [
//         "",
//         "One",
//         "Two",
//         "Three",
//         "Four",
//         "Five",
//         "Six",
//         "Seven",
//         "Eight",
//         "Nine",
//         "Ten",
//         "Eleven",
//         "Twelve",
//         "Thirteen",
//         "Fourteen",
//         "Fifteen",
//         "Sixteen",
//         "Seventeen",
//         "Eighteen",
//         "Nineteen",
//     ];
//     const countingGapWith10 = [
//         "",
//         "",
//         "Twenty",
//         "Thirty",
//         "Forty",
//         "Fifty",
//         "Sixty",
//         "Seventy",
//         "Eighty",
//         "Ninety",
//     ];

//     const numLength = num.length;
//     var word = "";

//     switch (numLength) {
//         case 1:
//             word = wordsUpTo19[Number.parseInt(num)];
//             break;
//         case 2:
//             word = twoDigitConverter(num);
//             break;
//         case 3:
//             word = threeDigitConverter(num);
//             break;
//         case 4:
//             word = fourDigitConverter(num);
//             break;
//         case 5:
//             word = fiveDigitConverter(num);
//             break;
//         case 6:
//             word = sixDigitConverter(num);
//             break;
//         case 7:
//             word = sevenDigitConverter(num);
//             break;
//         case 8:
//             word = eightDigitConverter(num);
//             break;
//         case 9:
//             word = nineDigitConverter(num);
//             break;
//         case 10:
//             word = tenDigitConverter(num);
//             break;
//         case 11:
//             word = elevenDigitConverter(num);
//             break;
//         case 12:
//             word = twelveDigitConverter(num);
//             break;
//         case 13:
//             word = thirteenDigitConverter(num);
//             break;

//         default:
//             word = moreThanThirteenDigitConverter(num);
//             break;
//     }

//     return word;
// };

// const nm = prompt("Enter a number to convert in Word: ");
// let word = numberToWordConversion(nm);
// console.log(word);