//Funzione base con callback

function funzioneBase (arg1, arg2, callback) {
    callback(arg1 + arg2)
}

funzioneBase(21, 55, function(risultato) {
    console.log(risultato)
})


function operazioneSemplice (a, b, callback) {
    console.log(a + b)
    callback()
}

operazioneSemplice(20, 30, function() {
    console.log("callback eseguita")
})







