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
}

let Volkswagen = new Automobile("Volkswagen", "Maggiolino", "1938");
Volkswagen.descrizione();
Volkswagen.aggiungiChilometri(240000);
Volkswagen.mostraChilometraggio();

class Elettrica extends Automobile {
    constructor(marca, modello, anno, chilometraggio, autonomia) {
        super(marca, modello, anno, chilometraggio);
        this.autonomia = autonomia;
    }
    descrizione() {
        console.log(`Questa auto è una ${this.marca} modello ${this.modello} del ${this.anno}, e ha un'autonomia di ${this.autonomia}.`);
    }
    ricarica(km) {
        this.autonomia += km;
    }
}

const autoElettrica = new Elettrica("Volkswagen", "Maggiolino", "1938", 0, 10000)
autoElettrica.descrizione()
autoElettrica.ricarica(5000)
console.log(autoElettrica);