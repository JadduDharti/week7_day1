//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(str, names){
    let foundMatch = false;
    for(let i=0; i<names.length; i++){
      if(str.toLowerCase().includes(names[i].toLowerCase())){
        console.log("Matched " + names[i]);
        foundMatch = true;
      }
    }
    if(!foundMatch){
      console.log("No Matches");
    }
}

//Call method here with parameters
console.log(findWords(dog_string, dog_names));



//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

// Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for(let i=0; i<arr.length; i+=2){
        arr.splice(i, 1, "even index");
      }
      return arr;
}

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

console.log(replaceEvens(arr));



// Codewars Problem 1
// https://www.codewars.com/kata/5d376cdc9bcee7001fcb84c0

function odd_ones_out(arr) {
    // Create an object to store the count of each number
    const count = {};
    for (let num of arr) {
      count[num] = (count[num] || 0) + 1;
    }
  
    // Filter out the numbers that appear an odd number of times
    const result = arr.filter(num => count[num] % 2 === 0);
  
    return result;
  }
  
  console.log(odd_ones_out([1, 2, 3, 1, 3, 3])); // [1, 1]
  console.log(odd_ones_out([1, 1, 2, 2, 3, 3, 3])); // [1, 1, 2, 2]
  console.log(odd_ones_out([26, 23, 24, 17, 23, 24, 23, 26])); // [26, 24, 24, 26]
  console.log(odd_ones_out([1, 2, 3])); // []
  console.log(odd_ones_out([1])); // []




//   Codewars Problem 2
// https://www.codewars.com/kata/57f780909f7e8e3183000078

function multiply(arr) {
    let result = 1;
    for (let i = 0; i < arr.length; i++) {
      result *= arr[i];
    }
    return result;
  }
  
  console.log(multiply([1, 2, 3, 4])); // 24
  console.log(multiply([2, 4, 6, 8])); // 384
  console.log(multiply([-1, 2, -3, 4])); // 24
  console.log(multiply([5])); // 5