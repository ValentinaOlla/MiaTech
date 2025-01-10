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

const {marca: brand, modello: model, classe: category} = frigorifero
console.log(brand, model, category);

let caparezza = {
    nome: "Michele",
    cognome: "Salvemini",
    età: 51
}

const {nome, cognome, età, città = "Molfetta", genere = "Reggae"} = caparezza
console.log(nome, cognome, età, città, genere);

let numeriPari = [2, 4, 6, 8]
let numeriDispari = [1, 3, 5, 7, 9,]
let tuttiNumeri = [...numeriDispari, ...numeriPari]
console.log(tuttiNumeri);

let banana = {
    colore: "giallo",
    sapore: "dolce",
    paese: "Malesia"
}

let banana2 = {...banana, prezzo: "9,27"}
console.log(banana);
console.log(banana2);

const chapters = [12, 37, 59, 74, 88]
const [primo, secondo, ...rest] = chapters
console.log(primo, secondo);
console.log(rest);



