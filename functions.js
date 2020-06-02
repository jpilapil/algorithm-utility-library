// Your functions go here!

// CONVERT CELSUIS TO FAHRENHEIT
function convertToF(celsius) {
   // takes user input of celsuis temp
   let fahrenheit = (celsius * 9) / 5 + 32; // multiplies user input by 9/5 then adds 32
   return `${fahrenheit}F`; // returns result
}

// REVERSE A STRING
function reverseString(str) {
   //takes user input
   let splitString = str.split(""); // splits the input into an array of individual letters. no space between "" gives each letter into an array, adding a space " " will return the entire string into an array.
   let reverseString = splitString.reverse(); // takes the split letters and reverses them with the reverse method
   let joinArray = reverseString.join(""); // takes the reversed array and uses the join method to return a string, not an array. no space "" returns string with no spaces, " " with space, spaces out the contents
   console.log(joinArray);
   return joinArray;
}

// FACTORALIZE A NUMBER
function factorialize(num) {
   // takes number as input
   let total = 1; // set total to 1, if you input 0, the loop below will not run and it will return 1 by defualt
   for (var i = 1; i <= num; i += 1) {
      // creates variable called i, starts at 1
      // start loop at 1, increment loop by 1, end loop when the value of i is <= number that was input
      total = total * i; // takes the current todal and multiplies by the current i iteration
   }
   return total;
}

// FIND THE LONGEST WORD IN A STRING
function findLongestWordLength(str) {
   // takes user input of a string
   let words = str.split(" "); // takes the string input from the user and converts it into an array with individual words
   let maxLength = 0; // creates variable that keeps track of the maximum length
   for (let i = 0; i < words.length; i += 1) {
      // loops through the array of words
      if (words[i].length > maxLength) {
         // if the current word.length is greater than the current maxLength value, push it to the maxLength. keeps going until it finds the highest length.
         maxLength = words[i].length;
      }
   }
   return maxLength;
}

// RETURN LARGEST NUMBER IN ARRAY ----!!!!!!!!!!! NEEDS WORK!!!!!!!!!!! -----
function findLargestNumber(nums) {
   let arrayOfNums = [nums];
   for (var i = 0; i < arrayOfNums.length; i++) {
      let highestNum = [];
      if (arrayOfNums[i] > highestSum) {
         highestNum.push(arrayOfNums[i]);
      }
      return highestNum;
   }
}

// CONFIRM LAST CHARACTER OF STRING
function confirmEnding(str, target) {
   // slice the given string to return a new string.
   // check the length of the given string
   // check the length of the given target letter
   // compare the result of slice to the target and check if they have the same characters
   return str.slice(str.length - target.length) === target;
}

// REPEAT A STRING REPEAT A STRING
function repeatStringNumTimes(str, num) {
   // enter a random string, and a number of times you want to repeat string
   if (num <= 0) {
      // if user inputs a negative number or 0, result will return an empty string
      return "";
   } else if (num == 1) {
      // if user input 1 for the number of times to repeat it will just return the string
      return str;
   } else {
      return str + repeatStringNumTimes(str, num - 1);

      /* 
    First Part of the recursion method
    Remember that user won’t have just one call, you’ll have several nested calls
                     times       string + repeatStringNumTimes(string, times - 1)
      1st call         3                 "abc" + ("abc", 3 - 1)
      2nd call         2                 "abc" + ("abc", 2 - 1)
      3rd call         1                 "abc" => if (times === 1) return string;
      4th call         0                  ""   => if (times <= 0) return "";
    Second part of the recursion method
      4th call will return      ""
      3rd call will return     "abc"
      2nd call will return     "abc"
      1st call will return     "abc"
    The final call is a concatenation of all the strings
    return "abc" + "abc" + "abc"; // return "abcabcabc";
  */
   }
}

// TRUNCATE A STRING
function truncateString(str, num) {
   if (str.length > num) {
      // if the sting is bigger than the given number
      return str.slice(0, num) + "..."; // slice the string from the beginning letter and end at the given number, adds "..." to the end
   } else {
      return str; // if the number is bigger than the amount of characters in the string, return the whole string
   }
}

// FINDERS KEEPERS
function findElement(input) {
   let divisible = [];
   for (var i = 0; i < input.length; i++) {
      // loops through the user input list of numbers
      if (input[i] % 2 === 0) {
         // if one of the numbers input is divisible by 2 and has 0 remainder, push that number to the empty array (divisible) up top
         divisible.push(input[i]);
      }
   }
   if (divisible.length > 0) {
      // if the array is populated, return the numbers in the array
      return divisible;
   } else {
      return "undefined"; // if array is empty, return undefined
   }
}

// BOO WHO
function booWho(input) {
   if (typeof input === "boolean") {
      return true;
   } else {
      return false;
   }
}

// TITLE CASE A SENTENCE
function titleCase(str) {
   var words = str
      .toLowerCase() // sets the input string to all lowercase letters
      .split(" ") // splits the string, returning an array of words, all lowercased still
      .map(function (word) {
         // map through array and finding each individual word
         return word[0].toUpperCase() + word.slice(1); // takes the first word and the first letter([0]) and changes it to upper case. then splices the word from the 0 index and adds it to the uppercase letter at 0 index
      });
   return words.join(" "); // converts the array into a string
}

// SLICE AND SPLICE
function frankenSplice(arr1, arr2, n) {
   // takes 2 arrays and a number for the index you wish to splice the first array
   let slicedArr = arr2.slice(); // creates a copy of array 2
   slicedArr.splice(n, 0, ...arr1); // slices array 2 at the index of whatever user input for n, deletes 0 elements, then adds the input for the first array.
   return slicedArr;
}

// FALSY BOUNCER

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean/Boolean
function bouncer(arr) {
   let result = arr.filter(Boolean); // filters through given array and removes all false values
   return result;
}

// WHERE DO I BELONG
function getIndexToIns(arr, num) {
   // sort array
   // the returned value should be the index#
   // push num into array, sort array, find index of pushed num, return index
   // https://www.freecodecamp.org/forum/t/arr-sort-a-b-a-b-explanation/167677
   arr.push(num); // push num into array
   arr.sort(function (a, b) {
      // sorts the array numerically
      return a - b;
   });
   //   console.log(arr)
   return arr.indexOf(num); // finds the index value of num and returns it
}

// MUTATIONS
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
function mutation(word1, word2) {
   // convert all letters to lowercase to prevent casing issues
   let firstWord = word1.toLowerCase(); // sets first word to lower case
   let secondWord = word2.toLowerCase(); // sets second word to lower case

   for (var i = 0; i < secondWord.length; i++) {
      // loop through each letter in second word
      if (firstWord.indexOf(secondWord[i]) === -1) return false; // if the current index (letter) of the second word does not exist in the first word, return false. (if indexOf returns -1, it means it does not exist)
   }
   return true;
}

// CHUNKY MONKEY
function separateArrayInGroups(arr, size) {
   let newArr = []; // create an empty array to push results into
   while (arr.length > 0) {
      // loop through array, while the length of the array is > 0,
      newArr.push(arr.splice(0, size)); // splice the current array at the 0 index, in the amount of given size, then push spliced arr into newArr.
      // keep running until while loop ends
   }
   console.log(newArr);
   return newArr;
}
