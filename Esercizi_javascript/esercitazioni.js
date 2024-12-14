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

person.age = "35";
person.job = "Web Design Intern";

for (let all in person) {
    console.log(all + " " + person[all]);
}

