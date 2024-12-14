//Array reverse
let numbers = [4, 18, 72, 43, 2, 81, 35]
console.log(numbers);

let lunghezza = numbers.length;
let meta = Math.floor(lunghezza / 2);

for (let i = 0; i < meta; i++) {
    let temp =numbers[i];
    numbers[i] = numbers[lunghezza - 1 - i];
    numbers[lunghezza - 1 - i] = temp;
}
console.log("L'Array invertito' è: " + numbers);

//Crea un oggetto

let person = {
    name: "Valentina",
    age: "36",
    city: "Perugia"
}
console.log(person.age);
