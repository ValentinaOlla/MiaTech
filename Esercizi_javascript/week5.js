//Creare una promessa semplice

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