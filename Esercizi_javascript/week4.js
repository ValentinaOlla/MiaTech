//Funzione base con callback

function calcola(func, arg1, arg2) {
	const risultato = arg1 + arg2;
    console.log(risultato);
    }

    function somma(result) {
        console.log(result);
    }

calcola(somma, 21, 55);

