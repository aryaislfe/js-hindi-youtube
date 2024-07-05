// Immediately Invoked Function Expressions (IIFE)


(function coffee(){
    //names IIFE
    console.log(`DB CONNECTED`);
}) ();

( (name) => {
    // simple iife
    console.log(`DB CONNECTED TWO ${name}`);
}) ("saurabh")  


// if rum two iife so need ; 