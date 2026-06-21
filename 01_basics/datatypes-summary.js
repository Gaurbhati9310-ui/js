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

// **********************************
// stack (primitive ) ,heap(Non- primitive)

let myYoutubename ="hiteahdotcom"
let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anotherId);

let userOne = {
    email: "user@google.com",
    upi : "user@ybl"
}
 let userTwo = userOne
 userTwo.email= "gaur@google.com"
  

 console.log(userOne.email);
 console.log(userTwo.email);


