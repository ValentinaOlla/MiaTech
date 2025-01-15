//Funzione base con callback

function funzioneBase (arg1, arg2, callback) {
    callback(arg1 + arg2)
}

funzioneBase(21, 55, function(risultato) {
    console.log(risultato)
})
