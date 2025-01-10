let array = [2, 4, 6, 8]

const [primo, secondo, terzo, quarto, quinto = 10] = array
console.log(primo, terzo, quinto)

let obj = {
    nome: "Valentina",
    cognome: "Olla",
    eta: 36
}

const {eta: age, nome: name, cognome: surname, città = "Perugia"} = obj
console.log( surname, name, age, città);


let lista = [1, 2, 3]
let lista2 = [...lista]
console.log(lista2);

let lista3 = [4, 5, 6]
let lista4 = [...lista, ...lista3, 7, 8, 9]
console.log(lista4);

const x = ["mela", "banana", "fragola", "ciliege", "prugne", "datteri"]
const [mela, ...rest] = x
console.log(rest);
