//Funzione base con callback

function funzioneBase (arg1, arg2, callback) {
    callback(arg1 + arg2)
}

funzioneBase(21, 55, function(risultato) {
    console.log(risultato)
})

//Callback annidati
function primaOperazione(callback) {
    console.log("inizio prima operazione");
    setTimeout(() => {
        const primoRisultato = "Risultato della prima operazione";
        console.log(primoRisultato);
    }, 2000);
}

function secondaOperazione(primoRisultato, callback) {
    console.log("Inizio seconda operazione");
    const secondoRisultato = primoRisultato + "modificato";
    console.log(secondoRisultato);
}

function callbackFinale(risultatoFinale) {
    console.log("Risultato finale: ", risultatoFinale);
}

primaOperazione((primoRisultato) => {
    secondaOperazione(primoRisultato, callbackFinale);
});




