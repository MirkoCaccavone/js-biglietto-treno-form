// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

// MILESTONE 2:
// Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form completo in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. Il recap dei dati e l’output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).

// MILESTONE 3:
// Ora che la logica è funzionante in pagina, possiamo andare a dedicarci allo stile, raffinando la parte di HTML e CSS in modo da renderla esteticamente gradevole.

// dichiarazione variabili
const form = document.querySelector('form');
const nomeUtente = document.getElementById('nomeUtente');
const kmField = document.getElementById('distanza');
const ageField = document.getElementById('etaUtente')

const kmUser = kmField.value;


const name = document.getElementById('name');
const cab = document.getElementById('cab');
const cpCode = document.getElementById('cpCode');
const price = document.getElementById('price');


// FUNZIONE
form.addEventListener('submit', (event) => {

    // evitare il comportamento di default del form
    event.preventDefault();

    // calcolare il prezzo del biglietto in base ai km
    let prezzoIntero = kmUser * 0.21;
    console.log("Il prezzo del biglietto senza sconto è: ", prezzoIntero);
     
    // calcolare lo sconto

    if (ageField.value < 18){
        prezzoIntero = prezzoIntero * 0.80;

    } else if (ageField.value >= 65){
        prezzoIntero = prezzoIntero * 0.60;

    }else{
        prezzoIntero;
    }

    // OUTPUT
    console.log("il prezzo finale è di: ", prezzoIntero.toFixed(2));

    // nome passeggero
    name.innerText = `${nomeUtente.value}`;

    // carrozza
    cab.innerText = `${Math.floor(Math.random() * 10) + 1}`;

    // codice cp
    cpCode.innerText = `${Math.floor(Math.random() * 10000) + 90000}`;

    // prezzo finale mostrato in pagina
    price.innerHTML = `${prezzoIntero.toFixed(2) + "€"}`;

});




