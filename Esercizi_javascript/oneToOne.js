function divisione(x, y) {
    try{
        if(y == 0) {
            throw new Error("Errore, il divisore è uguale a zero")
        }
    }
    catch(error){
        console.error(error.message)
    }
}
divisione(5, 0)

function saluta(a, b) {
    try{
        if(b == "Arrivederci"){
            throw new Error("L'utente è appena arrivato")
        }
    }
    catch(error){
        console.error(error.message)
    }
}
saluta("Ciao", "Arrivederci")
