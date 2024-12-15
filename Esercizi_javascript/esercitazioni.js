//forEach & .map
let numbers = [1, 2, 3, 4, 5]
numbers.forEach(function(number) {
    console.log(number * 2);
});

let squaredNumbers = numbers.map(function(element) {
    return element ** 2;
});

console.log(squaredNumbers);

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

//Outer function and Inner function

function outerFunction (X, initialValue) {
    let result = initialValue;
    function innerFunction (Y) {
        result += Y;
        return result;
    }
    return innerFunction;
}

//Object.entries()
const student = { 
    name: "Valentina",
    age: "36",
    grade: "First",
    school: "MiaTech"
}
let entries = Object.entries(student);
console.log(entries);

for (const [key, value] of Object.entries(student)) {
    console.log(`${key}: ${value}`);
}


