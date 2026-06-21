// # primitive 

// 7 types : String , Number , Boolean , null , undefined , symbol , 
//  BigInt

const score = 100
const scoreValue = 100.3

const isloggedIn = false
const outsideTemp = null
let userEmail;

const id =  Symbol('123')
const anotherId = Symbol('123')
 console.log(id === anotherId); // false 

const bigNumber = 345678976755467n




// # reference (non primitive )

// array , objects , functions 

const heros = ["shaktiman" , " naagraj ", " doga"]
let obj = {
    name : "gaurav",
    age: 20,

}
const myfunction= function(){
    console.log("hello world");

}
console.log(typeof bigNumber);
console.log(typeof myfunction);

