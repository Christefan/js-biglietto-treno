//DICHIARAZIONE VARIABILI
const userKM = prompt('Quanti chilometri deve percorrere?');
console.log(userKM);
const userAge = prompt('Quanti anni ha?');
console.log(userAge);


let kmPrice = 0.21;

//CALCOLO COSTO VIAGGIO
let userCost = userKM * kmPrice;

//CALCOLO COSTO VIAGGIO RISPETTO ALL'ETA'
let totCost;

let userProfile;

if(userAge < 18){
    totCost = userCost - Math.floor(userCost * 20) / 100;
    userProfile = 'Eseguito sconto del 20% per i minorenni';
}else if (userAge > 65) {
    totCost = userCost - Math.floor(userCost * 40) / 100;
    userProfile = 'Eseguito sconto del 40% per gli over 65';
} else {
    totCost = userCost;
    userProfile = 'Nessun sconto';
}


// ELABORAZIONE
let message =`IL COSTO DEL BIGLIETTO E' : ${totCost} €`;

//STAMPA RISULTATO 
document.getElementById('price-ticket').innerHTML = `${message}`;

document.getElementById('commit').innerHTML = `${userProfile}`;
