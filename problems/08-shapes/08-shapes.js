/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/
function printShape(shape, height, character) {
  switch(shape)
  {
  case "Square":
  for (let i = 0; i < height; i++)
  {
	let thisStr = "";
		for (let j = 0; j < height; j++)
			thisStr += character;
	console.log(thisStr);
  }
  break;
  case "Diamond":
    for (let i = 0; i < height; i++)
	{
		let thisStr = "";
		if (i < ~~(height/2))
		for (let j = 0; j < (2*i)+1; j++)
			thisStr += character;
		if (i >= ~~(height/2))
		for (let j = 0; j < (2*(height-i-1))+1; j++)
			thisStr += character;
		//append spaces
		if (i < ~~(height/2))
		{
		for (let j = 0; j < ~~(height-((2*i)+1))/2; j++)
			thisStr += " ";
		//append spaces
		for (let j = 0; j < ~~(height-((2*i)+1))/2; j++)
			thisStr =  " " + thisStr ;
		}
		//append spaces
		if (i >= ~~(height/2))
		{
		for (let j = 0; j < ~~(height-(2*(height-i-1))-1)/2; j++)
			thisStr += " ";
		//append spaces
		for (let j = 0; j < ~~(height-(2*(height-i-1))-1)/2; j++)
			thisStr =  " " + thisStr ;
		}
		
		console.log(thisStr);
	}
			
  break;
  case "Triangle":
for (let i = 0; i <= height; i++)
  {
	let thisStr = "";
		for (let j = 0; j < i; j++)
			thisStr += character;
	console.log(thisStr);
  }
  break;
  }
}
printShape("Square", 3, "%");
printShape("Diamond", 9, "*");
printShape("Triangle", 3, "$");