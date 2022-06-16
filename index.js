function isPalindrome(word) {
  // Write your algorithm here
  
  for (let i = 0; i < word.length / 2; i++) {
    j = word.length - 1 - i;
    if(word[i] !== word[j]) {
      return false 
    }
  }
  return true 
}

/* 
  Add your pseudocode here
  for check if half of the input is same as other half 
  if it is not  same 
  return false 
  else 
  return true 

*/

/*
  Add written explanation of your solution here
this code iterates through through the first half of the input string then
compares it to the other half of the string if they are the not the same return 
false else return true 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("")

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));
  
  console.log("")

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));
  
  console.log("")

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));
  
}

module.exports = isPalindrome;
