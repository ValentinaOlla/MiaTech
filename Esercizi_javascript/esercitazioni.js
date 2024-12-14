//Dichiara una variabile let e una const, assegna un valore e stampa a console
let year = 365 
const day = 24 
console.log(year, day);

//Cambio di valore
let mug = 250
console.log(mug);

mug = 200
console.log(mug);

//Ridefinizione delle variabili
let number = 123
{
    let number = 456
    console.log(number);
    
}
console.log(number);

//Scoping delle variabili
let outside = 15
{ 
    let inside = 23
    console.log(outside, inside);
    
}
console.log(outside, inside);


