// ADDING TWO NUMERS
var num1 = 10;
var num2 = 24;

function sum(num1, num2) {
  return num1 + num2;
}
console.log(num1 + num2);

//SUBTRACTING TWO NUMBERS
var num1 = 10;
var num2 = 24;

function sum(num1, num2) {
  return num1 - num2;
}
console.log(num1 - num2);

// MULTIPLYING TWO NUMBERS
var num1 = 10;
var num2 = 24;

function sum(num1, num2) {
  return num1 * num2;
}
console.log(num1 * num2);

//DIVING TWO NUMBERS
var num1 = 10;
var num2 = 24;

function sum(num1, num2) {
  return num1 / num2;
}
console.log(num1 / num2);

//ODD OR EVEN NUMBERS

function oddOrEven(num) {
  if (num % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}
console.log(oddOrEven(177));
console.log(oddOrEven(1002));
console.log(oddOrEven(100));

//FUNCTION THAT PRINTS ALL THE WHOLE NUMBERS FROM 1 TO A GIVEN NUMBER
//THIS IS A LINEAR SEARCH ALGORITHM

function logNums(num) {
  for (var i = 5; i <= num; i++) {
    console.log(i);
  }
}

logNums(10);
logNums(5);
console.log("hello");

//WRITE A FUNCTION THAT PRINTS EVEN NUMBERS FROM 0 TO A GIVEN NUMBER
// THIS IS A LINEAR SEARCH ALGORITHM

function logEvenNums(num) {
  //CREATE AN FOR LOOP THAT LOOPS OVER EVERY INDEX
  for (var i = 0; i <= num; i++) {
    //IF THE INDEX IS DIVISIBLE/EVEN THEN PRINT OUT / CONSOLE LOG IT
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}
//RUN FUNCTION WITH THE GIVEN NUMBER //PLUG IN THE NUMBER THAT ITS RAN AT THE TOP IN THE NUM VARIABLE
logEvenNums(10);
console.log("hi");

//THIS IS THE OTHER WAY THAT YOU CAN SOLVE THE ABOVE ALGORITHM -- PRINTING EVEN NUMBERS FROM 0 TO A GIVEN NUMBER

function evenNums(num) {
  for (var i = 0; i <= num; i += 2) {
    console.log(i);
  }
}
evenNums(20);
console.log("hello");

//FUNCTION THAT PRINT ALL WHOLE NUMBERS FROM 'NUM' TO (MEANING COUTING DOWN) A GIVEN NUMBER

function countDown(num) {
  //SET I TO THE VARIABLE "NUM"  THEN CHECK IF THE PASSED NUMBER IS GREATER THAN 0 IF SO, THEN SUBTRACT 1
  for (var i = num; i > 0; i--) console.log(i);
}

countDown(15);

//ADDING THE SUM OF AN ARRAY

function sumArr(arr) {
  //WE SET THE SUM OF THE ARRAY TO START THE SUM AT ZERO
  var sum = 0;

  for (var i = 0; i < arr.length; i++) {
    //SET I = 0 THEN IN INDEX IS LESS THAN THE LENGTH OF THE ARRAY ADD THE INDEX
    sum = sum + arr[i];

    console.log(arr[i]);
  }
  console.log(sum);
}
sumArr([1, 9, 3, 2]);

//FIZZ BUZZ ARRAY//

function fizzBuzz(number) {
  for (var i = 0; i < number; i++) {
    // var string = "";

    if (i % 3 === 0 && i % 5 === 0) {
      console.log("Fizz Buzz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else if (i % 3 === 0) {
      console.log(" Fizz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz([50]);

//function that returns the largest number in the given array

function maxNum(arr) {
  var biggestNum = 0;

  for (var i = 0; i < arr.length; i++) {
    // creating an if statement to check if current element on iriated index is bigger than current biggest number
    if (arr[i] > biggestNum) {
      //this statement updates the biggestNum with the element value at the current index that is being looped
      // if the value at the current index is bigger than condition is passed and biggest number has a new value
      // if the element value at the current index being looped is not bigger, then the condition is not met
      biggestNum = arr[i];
    }
  }
  return biggestNum;
}

console.log(maxNum([2, 4, 16, 10, 12]));

// function that counts the number of vowels in a given string

function vowelCount(str) {
  //set the result to index 0;
  var result = 0;

  for (var i = 0; i < str.length; i++) {
    //index = to letter
    // var letter = str[i].toLowerCase();

    // confirm if the letter it is equal to the vowel
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      result += 1;
    }
  }
  return result;
}
console.log(vowelCount("hello"));

//plusMinus algorithm from hackerRank
//GIVEN AN ARRAY OF INTEGERS, GET THE RATIOS OF ITS ELEMENTS THAT ARE POSITIVE, NEGATIVE, AND ZERO
// PRINT OUT THE DECIMAL VALUE OF EACH FRACTION ON A NEW LINE WITH 6 PLACES AFTER THE DECIMAL

function plusMinus(arr) {
  //set a variable to keep count of each positve, negative, zero number being looped
  var n = arr.length;
  var positive = 0;
  var negative = 0;
  var zero = 0;

  // create a for loop to iterate through the array
  for (var i = 0; i < n; i++) {
    //if condition to check if arr[i] is positive, which is equal to i <0
    if (arr[i] > 0) {
      // if so then add 1 to the positive variable
      positive += 1;
    } else if (arr[i] < 0) {
      negative += 1;
    } else {
      zero += 1;
    }
  }
  // then after the for loop - set the factions of the total count of each number over n
  var pos = positive / n;
  var neg = negative / n;
  var zer = zero / n;

  console.log(pos.toFixed(6) + "\n" + neg.toFixed(6) + "\n" + zer.toFixed(6));
}

///staircase algorithm
function staircase(n) {
  // Write your code here
  for (var i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "#".repeat(i));
  }
}
staircase(6);

// find the min and max of a given array - expected outputs should be 10, 14

function maxMin(arr) {
  let sum = 0;

  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  var min = sum - arr[4];
  var max = sum - arr[0];
  console.log(min + " " + max);
}
maxMin([1, 2, 3, 4, 5]);


/// find the count of the tallest candles 
// function bdayCandles(candles) {
//   let max = Math.max; 

//   for (var i = 0; i < candles.length; i++) {
//     if (candles[i] > count) {
//       max = candles[i]
//     }
//   }
//   return count / 2
// }
// console.log(bdayCandles([4, 4, 1, 3]))

function bdCandles(ar) {
  let height = Math.max(...ar) 
  let candles = 0; 

  for (var i = 0; i < ar.length; i++) {
    if ( ar[i] = height ) {
      candles += 1;
    }
  }
  console.log(candles)
}
dbCandles([3, 2, 1, 3])