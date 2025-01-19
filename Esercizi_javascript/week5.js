//Funzione asincrona semplice
function ennesimaFunzione() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("La funzione si risolve dopo due secondi");
        }, 2000);
    });
}

async function primaAsincrona() {
    const result = await ennesimaFunzione();
    console.log(result);
}

primaAsincrona()

/*//Metodo Promise.allSettled

function primaFunzione() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Prima");
        }, 2000);
    });
}

function secondaFunzione() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Seconda");
        }, 1000);
    });
}

function terzaFunzione() {
    return new Promise((reject) => {
        setTimeout(() => {
            reject("Errore");
        }, 1500);
    });
}

Promise.allSettled([primaFunzione(), secondaFunzione(), terzaFunzione()]) 
    .then(results => {
        console.log(results)
    });


//Catena con gestione degli errori
function nuovaPromessa() {
    return new Promise((resolve, reject) => {
        const random = Math.random();
        setTimeout(() => {
            if(random < 0.7) {
                resolve("Ok");
            } else {
                reject(new Error("Errore"));
            }
        }, 1000);
    });
}

nuovaPromessa() .then((result) => {
    const risolto = result + "(operazione risolta)";
    return risolto;
}) .then((risultatoModificato) => {
    console.log("Risultato manipolato: ", risultatoModificato);
})
.catch((error) => {
    console.error(error.message);
})


//Catena di promesse con condizioni
function catenaCondizionata() {
    return new Promise((resolve) => {
        setTimeout(() => {
            let numero = 33;
            resolve(numero);
        }, 1000);
    });
}

catenaCondizionata() .then((numero) => {
    if(numero % 2 === 0) {
        console.log("Il numero è pari")
    } else {
        console.log("Il numero è dispari")
    }
})



//Catena di promesse
function catenaDiOperazioni() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const numero = 12;
            resolve(numero);
        }, 1000);
    });
}

catenaDiOperazioni() .then((numero) => {
    return numero * 2;
}) .then((numeroMoltiplicato) => {
    return numeroMoltiplicato + 3;
}) .then((risultato) => {
    console.log("Il risultato è: ", risultato);
});



Creare una promessa semplice

function promessaSemplice(messaggio) {
    return new Promise((resolve, reject) => {
        const random = Math.random();

        if(random < 0.5) {
            reject(new Error("L'operazione non è andata a buon fine"));
        } else {
            setTimeout(() => {
                resolve(messaggio);
            }, 2000);
        }
    });
  }
  
  promessaSemplice("La promessa è stata risolta dopo 2 secondi.")
  .then((messaggio) => {
    console.log(messaggio);
  })
  .catch((error) => {
    console.error("Si è verificato un errore: ", error.message);
  });

Promessa con finally
function secondaPromessa() {
    return new Promise((resolve, reject) => {
        const random = Math.random();
        console.log("Numero casuale generato:", random);

        setTimeout(() => {
            if(random < 0.5) {
            resolve('Promessa svolta');
            } else {
                reject(new Error('Promessa rifiutata'));
            }
        }, 2000);
    });
}

secondaPromessa()
.then(result => console.log(result))
.catch(error => console.error(error))
.finally(() => console.log('Operazione completata'));*/