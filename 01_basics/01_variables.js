const accountid =123456
let accountEmail ="arya568@gmail.com"
var accountPassword ="1234536"
accountCity ="New Delhi"
let accountState;

// accountid = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword="21212121"
accountCity="Bengluru"

console.log(accountid);


/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountEmail, accountPassword, accountCity, accountState])