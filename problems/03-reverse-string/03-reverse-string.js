/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr(someStr) {
  let newStr = ""
  for(let i = 0; i < someStr.length; i++)
  {
	  newStr += someStr.charAt(someStr.length-i-1);
  }
  return newStr;
}

console.log(reverseStr("veritas"));
//should print satirev