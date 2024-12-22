//Classe e costruttore
class Automobile {
    #contatoreChiamate = 0;
    constructor(marca, modello, anno, chilometraggio) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.chilometraggio = chilometraggio
    }
    descrizione() {
        console.log(`Questa auto è una ${this.marca} modello ${this.modello} del ${this.anno}.`);
    }
    #incrementaContatore() {
        this.#contatoreChiamate++;
    }
    aggiungiChilometri(km) { 
        this.#incrementaContatore();
        this.chilometraggio += km;
    }
    mostraContatoreChiamate() {
        return this.#contatoreChiamate;
    }
    mostraChilometraggio() {
        console.log(`L'automobile ha percorso ${this.chilometraggio}km`);
    }
    saluta() {
        console.log(`Ciao! Qeust'auto è una ${this.marca} modello ${this.modello}.`);
    }
    #calcolaEta() {
        const annoCorrente = new Date().getFullYear();
        return annoCorrente - this.anno;
    }
    mostraEta() {
        let etaAutomobile = this.#calcolaEta();
        console.log(`Quest'auto ha ${etaAutomobile} anni.`);
    }
    _controllaChilometri() {
        if (this.chilometraggio > 100000) {
            console.log("Attenzione: l'auto ha superato i 100000 km!");
        }
    }
    static confrontaChilometraggio(auto1, auto2) {
        if(auto1.chilometraggio >= auto2.chilometraggio) {
            return `${auto1.marca} ${auto1.modello} ha più chilometri di ${auto2.marca} ${auto2.modello}`;
        } else if (auto1.chilometraggio <= auto2.chilometraggio) {
            return `${auto2.marca} ${auto2.modello} ha più chilometri di ${auto1.marca} ${auto1.modello}`;
        }
    }
}

let Volkswagen = new Automobile("Volkswagen", "Maggiolino", "1938");
Volkswagen.descrizione();
Volkswagen.aggiungiChilometri(240000);
Volkswagen.mostraChilometraggio();
Volkswagen.saluta();
Volkswagen.mostraEta();

let auto1 = new Automobile("Daewoo", "Matiz", 2013, 150000);
let auto2 = new Automobile("Toyota", "Corolla", 2018, 89000);
let risultatoConfronto = Automobile.confrontaChilometraggio(auto1, auto2);
console.log(risultatoConfronto);

class Elettrica extends Automobile {
    constructor(marca, modello, anno, chilometraggio, autonomia) {
        super(marca, modello, anno, chilometraggio);
        this.autonomia = autonomia;
    }
    descrizione() {
        console.log(`Questa auto è una ${this.marca} modello ${this.modello} del ${this.anno}, e ha un'autonomia di ${this.autonomia}km.`);
    }
    ricarica(km) {
        this.autonomia += km;
    }
}

const autoElettrica = new Elettrica("Fiat", "500e Abarth", "2023", 0, 160)
autoElettrica.descrizione()
autoElettrica.ricarica(0)
console.log(autoElettrica);
autoElettrica.saluta();

const autoUsata = new Elettrica("Peugeot", "e-208", 2020, 0, 0)
autoUsata.aggiungiChilometri(139000);
autoUsata.mostraChilometraggio();
autoUsata._controllaChilometri();

