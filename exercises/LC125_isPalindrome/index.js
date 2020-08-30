function isPalindrome(s) {
  //think of palindrome like a mirrored word
  // rac|e|car, red|der, Han|nah

  //Sanitize input string by removing non alphanumberic characters and lowercasting it
  //create left and right pointer, at the respective ends of string
  //while left < right
  // if left and right are not equal return false
  //return true

  s = s.toLowerCase().replace(/[\W_]/g, "");

  let left = 0;
  let right = s.length - 1

  while (left < right) {
    if (s[left] !== s[right]) return false
    left++
    right--
  }

  return true
}

module.exports = isPalindrome;
