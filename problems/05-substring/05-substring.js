/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substring(someStr, startIndex, endIndex) {
	if 
	((typeof(someStr) !== "string") || (typeof(startIndex) !== "number") || (typeof(endIndex) !== "number"))
	throw "please make sure that your inputs are correct";
	if (!(startIndex) || !(endIndex))
	throw "please make sure that your inputs are correct";

	try{
	let val = someStr.substring(startIndex, endIndex);
	console.log(val);
	return val;
	}
	catch{throw "please make sure that your inputs are correct"}
	
	return "";
}

console.log(substring("Fooled You!", 4, 6));