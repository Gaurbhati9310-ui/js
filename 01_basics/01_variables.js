const accountId = 144553
let accountEmail = "gaur@gmail.com"
var accountPassword ="12345"
accountCity = "GreaterNoida" //not to prefer 
let accountState;
// accountId = 2 //not allowed 
accountEmail ="hace@gmail.com"
accountPassword ="54321"
accountCity = "kerala"

console.log(accountId);

/*
Prefer not to use  var
because of issue in block scope and functional scope 
*/

console.table([accountId , accountEmail , accountPassword ,accountCity,accountState])
