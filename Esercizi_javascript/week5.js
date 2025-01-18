//Creare una promessa semplice

function promessaSemplice(messaggio) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(messaggio);
      }, 2000);
    });
  }
  
  promessaSemplice("La promessa è stata risolta dopo 2 secondi.").then((messaggio) => {
    console.log(messaggio);
  });