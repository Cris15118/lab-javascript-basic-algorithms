// Iteration 1: Names and Input

let hacker1 = "Cristina";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Ana";
console.log(`The navigator's name is ${hacker2}`);

console.log(hacker1.length);
console.log(hacker2.length);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length}  characters`)
}
else if (hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
}
else if (hacker1.length === hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters`)
}


// Iteration 3: Loops
// iteracion 3.1
let newHaCker = "";
for (let char of hacker1){
 newHaCker = newHaCker +  char.toUpperCase() + " ";

}
 console.log(newHaCker.trimEnd());

 
 

// iteracion 3.2
let newHaCker2 = "";
for (let i = hacker2.length -1; i >= 0; i--){
    newHaCker2 += hacker2[i];
}
console.log(newHaCker2);

// iteracion 3.3


   
    if (hacker1 < hacker2){
     console.log("The driver's name goes first.");
    }
    
     else if ( hacker1 > hacker2){
     console.log("Yo, the navigator goes first, definitely.");
    }
    else if (hacker1 === hacker2){
     console.log("What?! You both have the same name?");
    }








