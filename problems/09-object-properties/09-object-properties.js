/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
function objectProperties(someObj) {
//first way
for(p in someObj) {
    let v = someObj[p]

    console.log(p,v);
}
//also we can use json stringify
console.log(JSON.stringify(someObj, null, "    "));
}

objectProperties({a:0,b:2,c:3,d:{a:2,b:0}});