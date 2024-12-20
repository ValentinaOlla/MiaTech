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