/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) {
  for (let i = 0; i < ~~someStr.length/2; i++)
	  if (!(someStr.charAt(i) == someStr.charAt(someStr.length - i - 1)))
		  return false;
  return true;
}

console.log(isPalindrome("1234321"));
console.log(isPalindrome("1282"));
console.log(isPalindrome("0"));
console.log(isPalindrome("f0f"));