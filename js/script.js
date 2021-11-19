// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
let km = parseInt(prompt("kilometri da percorrere"));
let age = parseInt(prompt("quanti anni hai?"))

console.log("kilometri "+  km);
console.log("anni "+ age);
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
let ticket = km * 0.21;
console.log("somma ticket " + ticket);

let minorenni = ((ticket * 20) / 100);
let maggiorenni = ((ticket * 40) / 100);
let prezzoMin = ticket - minorenni;
let prezzoMag = ticket - maggiorenni;

// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

if (age < 18) {
    document.getElementById("divo").innerHTML = "il prezzo da pagare è di " + prezzoMin.toFixed(2);
} else if (age > 65) {
    document.getElementById("divo").innerHTML = "il prezzo da pagare è di " + prezzoMag.toFixed(2);
} else {
    document.getElementById("divo").innerHTML = "il prezzo da pagare è di " + ticket.toFixed(2);
}


