//Classe e costruttore
class Automobile {
    constructor(marca, modello, anno, chilometraggio) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.chilometraggio = 0
    }
    descrizione() {
        console.log(`Questa auto è una ${this.marca} modello ${this.modello} del ${this.anno}.`);
    }
    aggiungiChilometri(km) {
        this.chilometraggio += km;
    }
    mostraChilometraggio() {
        console.log(`Lautomobile a percorso ${this.chilometraggio}km`);
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
}

let Volkswagen = new Automobile("Volkswagen", "Maggiolino", "1938");
Volkswagen.descrizione();
Volkswagen.aggiungiChilometri(240000);
Volkswagen.mostraChilometraggio();
Volkswagen.saluta();
Volkswagen.mostraEta();

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


