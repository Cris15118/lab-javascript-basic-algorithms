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


// bonus 1

let longText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."

console.log(longText.length);

console.log(longText.indexOf("et"));

// bonus 2

let phraseToCheck = "Amor, Roma";

let palindromo = phraseToCheck.length;
console.log(palindromo);

for (let i = 0; i < palindromo/2;i++) {
    if (phraseToCheck[i] !== phraseToCheck[palindromo - 1 - i]){
        console.log("Esto no es un palindromo")
    }
    else{
        console.log("Palindromo")
    }

}


