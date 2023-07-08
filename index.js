function hasTargetSum(array, target) {
  // iterate over the array of numbers
  for (let i = 0; i < array.length; i++) {
    // for the current number, identify a complementary number that adds to our target
    const complement = target - array[i];
    // iterate over the remaining numbers in the array
    for (let j = i + 1; j < array.length; j++) {
      // check if any of the remaining numbers is the complement
      if (array[j] === complement) return true;
    }
  }
  // if we reach the end of the array, return false
  return false;
}

/* 
  Time complexity: O(n^2) - quadratic
*/

/* 
  Pseudocode:
  - Iterate over the array of numbers
  - For the current number, identify a complementary number that adds to our target
  - Iterate over the remaining numbers in the array
  - Check if any of the remaining numbers is the complement
  - If a complement is found, return true
  - If we reach the end of the array, return false
*/

/*
  Solution Explanation:
  - The solution iterates over the array of numbers and for each number, it identifies a complementary number that adds up to the target.
  - It then checks if any of the remaining numbers in the array is the complement.
  - If a complement is found, it returns true. Otherwise, it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // Add your own custom tests here (optional)
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
