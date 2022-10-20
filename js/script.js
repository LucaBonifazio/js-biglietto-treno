// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// // L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


const Km = parseFloat(prompt('Benvenuto su TrenItalia.com, quanti kilometri desidera fare?'));
console.log(`I Km desiderati sono:${Km}`); 
const age = parseInt(prompt('Quanti anni ha?')); 
console.log(`La sua età è:${age}`); 
const price = parseFloat(Km * 0.21).toFixed(2); 
console.log(`Il prezzo del biglietto è di:${price}€`); 
let sales = "";
const newPrice = (price - sales)

if (age < 18) {
    sales = ((price * 20) / 100).toFixed(2); 
    console.log(`Essendo minorenne ha diritto al 20% di sconto, pertanto il prezzo sarà di:${newPrice}€`); 
} else if (age > 65) {
    sales = ((price * 40) / 100).toFixed(2); 
    console.log(`Essendo over 65 anni ha diritto al 40% di sconto, pertanto il prezzo sarà di:${newPrice}€`);
}


