let name = "Valentina"
let surname = "Olla"
let age = 36
let city = "Perugia"

console.log(`Ciao, io sono ${name} ${surname}.
    Lo scorso dicembre ho compiuto ${age} anni,
    e da pochissimi mesi mi sono trasferita a ${city}.`);

let number = 25
let string = "This is a string"
let array = ["case", "libri", "auto", "viaggi"]
let obj = {
    marca: "Fiat",
    modello: "Panda",
    anno: 2015
}

console.log(number);
console.log(string);
console.log(array);
console.log(obj);

let numbers = [19, 25, 38, 44 ]
const [a, , c, d] = numbers
console.log(a, c);

let marche = ["gucci", "prada", "versace"]
const [scarpe, borse, abiti, occhiali = "rayban", accessori = "stroili"] = marche
console.log(scarpe, borse, abiti, occhiali, accessori);

let frigorifero = {
    marca: "whirlpool",
    modello: "WHC20",
    classe: "a+"
}

const {marca, modello, classe} = frigorifero
console.log(marca, modello, classe);
