//If and else
let number = 25
if (number >5) {
    console.log("La variabile è maggiore di 5");
} else {
    console.log("La variabile è minore di 5");
}

//Switch
let score = parseInt (prompt("Inserisci il tuo voto"));

switch (true) {
    case score >=90:
        console.log("Voto ottimo");
        break;
    case score >= 70:
        console.log("Voto buono");
        break;
    case score >= 60:
         console.log("Voto sufficiente");
        break;
    default:
        console.log("Voto insufficiente");
    }


