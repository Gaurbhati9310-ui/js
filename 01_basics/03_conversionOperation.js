let score = "hitesh"


console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber); //not a number (NaN)

//"33" = 33
// "33abc"  => NaN
// true => 1 false=> 0


let isloggedIn = 1

let booleanIsLoggedIn = Boolean(isloggedIn)
console.log(booleanIsLoggedIn)  //output - true

let isloggedIn = "gaurav"

let booleanIsLoggedIn = Boolean(isloggedIn)
console.log(booleanIsLoggedIn) 

// 1=>true; 0=>false
// "" =>false
// "gaurav" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
