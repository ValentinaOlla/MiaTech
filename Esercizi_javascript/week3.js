function saluta() {
    console.log("Benvenuto!");
}

const intervallo = setInterval(saluta, 1000);
const tempoDiFermata = 5000;

setTimeout(() => {
    clearInterval(intervallo);
    console.log('Intervallo fermato.');
    }, tempoDiFermata);
    
/*let civico = 37;

if (civico === 35) {
    console.error("Errore: il civico è sbagliato!");
} else if (civico > 37) {
    console.warn("Attenzione: il civico potrebbe essere sbagliato.");
} else {
    console.log("Il civico è corretto.");
}

let teamSincroIta = [{
    name: "Linda",
    surname: "Cerruti"
}, {
    name: "Marta",
    surname: "Iacoacci"
}, {
    name: "Sofia",
    surname: "Mastroianni"
}]

console.group()
console.table(teamSincroIta)
console.log(teamSincroIta)

function accettaPersona(persona) {
    return `Lei si chiama ${persona.nome} ${persona.cognome} e di professione fa l'${persona.lavoro}.`;
}

let persona = {
    nome: "Samantha",
    cognome: "Cristoforetti",
    lavoro: "Astronauta"
}

const frase = accettaPersona(persona);
console.log(frase);


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

/*const chapters = [12, 37, 59, 74, 88]
const [primo, secondo, ...rest] = chapters
console.log(primo, secondo);
console.log(rest);

const somma = (a, b, c) => a + b + c
let addendi = [14, 5, 73]
console.log(somma(...addendi));

let divano = {
    tipologia: "divanoletto",
    tessuto: "scamosciato",
    altezza: 120,
    larghezza: 80,
    lunghezza: 190
}
const {tipologia, tessuto, ...rest } = divano
console.log(tipologia, tessuto);
console.log(rest);

let indirizzo = {
    via: "Roma",
    civico: 1,
    cap:"00042" 
}
console.log(JSON.stringify(indirizzo));

const json = '{"nickname":"valu", "email":"gmail", "genere":"F"}'
console.log(json);

const oggetto = JSON.parse(json)
console.log(oggetto);

let singers = '[{"nome":"Carmen", "cognome":"Consoli"}, {"nome":"Daniele", "cognome":"Silvestri"}]'
const array = JSON.parse(singers)
console.log(array);

array.push({nome: "Max", cognome: "Gazzè"});
const updatedArray = JSON.stringify(array)
console.log(updatedArray);*/

