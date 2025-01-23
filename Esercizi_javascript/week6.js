
const elemento = document.querySelector("p");

elemento.innerText = "Ciao!";

elemento.style.fontSize = "30px";
elemento.style.backgroundColor = "purple";

elemento.innerHTML = "Ciao! " + "<button>Clicca qui</button>";

const container = document.getElementById("container");

const ul = document.createElement("ul");
container.appendChild(ul);

for (let i = 1; i <= 5; i++) {
    const li = document.createElement("li");
    li.textContent = "Elemento" + i;
    ul.appendChild(li);
}


/*console.log(document)

const a = "abc"
const b = 123

function saveDataEverywhere(a, b) {
    localStorage.setItem(a, b);
    console.log("Salvato nel localStorage: " + a + " e " + b);

    sessionStorage.setItem(a, b);
    console.log("Salvato nel sessionStorage: " + a + " e " + b);
}

function getFromEverywhere(a, b) {
    const lsValue = localStorage.getItem(a);
    console.log("Recuperato il dato: " + lsValue);

    const ssValue = sessionStorage.getItem(b);
    console.log("Recuperato dato: " + ssValue);
}

function deleteFromEverywhere(a, b) {
    localStorage.removeItem(a);
    console.log("Eliminato il dato: " + a);

    sessionStorage.removeItem(b);
    console.log("Eliminato il dato: " + b);
}

saveDataEverywhere(a, b);
getFromEverywhere(a, b);
deleteFromEverywhere(a, b);



function saveToSS(chiave, valore) {
    sessionStorage.setItem(chiave, valore);
    console.log("Salvato: " + chiave + ":" + valore);
}

function getFromSS(chiave, valore) {
    const risultato = sessionStorage.getItem(chiave, valore);
    console.log("Recuperati i dati: " + chiave + " e " + valore);
    
    return risultato;
}

function deleteDataFromSS(chiave) {
    sessionStorage.removeItem(chiave);
    console.log("Rimosso il dato: " + chiave);
}

const chiave = "Esercizio"
const valore = "Salvare su sessionStorage"

saveToSS(chiave, valore);
getFromSS(chiave, valore);
deleteDataFromSS(chiave);


function setCookie(name, value) {
    const date = new Date();
    date.setTime(date.getTime() + 24*60*60*1000);
    let expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + "; " + expires + "; path=/";
}

setCookie("Esercizio-cookie", "Valore-di-prova");
console.log("Cookie salvato", document.cookie);

function getCookie(name) {
    const nameC = name + "=";
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.indexOf(nameC) === 0) {
            return cookie.substring(nameC.length, cookie.length);
        }
    }
    return null;
}

const valoreCookie = getCookie("Esercizio-cookie");
console.log("Valore del cookie: ", valoreCookie)

function deleteCookie(name) {
    const date = new Date();
    date.setTime(0);
    const expires = "expires" + date.toUTCString();
    document.cookie = name + "=;" + expires + "; path=/;";
    console.log(name + " cancellato");
}

deleteCookie("Esercizio-cookie");
console.log(document.cookie);*/