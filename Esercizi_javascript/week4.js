//Callback annidati
function somma(a, b, callback) {
    let risultato = a + b;
    console.log("Il risultato della somma è: ", risultato);
    callback(risultato);
}

function moltiplica(x, y, callback) {
    let risultato = x * y;
    console.log("Il risultato della moltiplicazione è : ", risultato);
    callback(somma, risultato);
}

somma(14, 5, moltiplica);

/*//Funzione base con callback

function funzioneBase (arg1, arg2, callback) {
    callback(arg1 + arg2)
}

funzioneBase(21, 55, function(risultato) {
    console.log(risultato)
})*/





