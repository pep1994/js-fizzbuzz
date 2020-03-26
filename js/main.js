//* Fizz Buzz test:
//  Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero
// e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi ”FizzBuzz”. *//



// dichiarazione variabili

var msg, num; // le due variabili rappresenteranno il messaggio che il programma stamperà e il numero che partirà da 1 e arriverà a 100
var backContent; // questa variabile serve per salvare il contenuto dell'HTML ad ogni iterazione, perchè il programma quando stamperà il messaggio sostituirà il contenuto con l'ultimo rislutato dell'iterazione ottenendo sullo schermo il valore dell'ultimo risultato, e non tutti i risultati delle 100 iterazioni. In questo modo mi salvo il contenuto per far si che sullo schermo vengano stampate tutte e le 100 iterazioni del ciclo.



// creo un ciclo che si ripete da 1 a 100 in modo da stampare successivamente i numeri da 1 a 100

for (var i = 1; i <= 100; i++) {

  num = i; // valorizzo la variabile num con il valore della variabile i, in modo che parta con il valore 1 e ad ogni iterazione del ciclo aumenterà di 1 fino ad arrivare a 100

  if (i % 3 === 0 && i % 5 === 0) { // condizione per la quale il programma stamperà "FizzBuzz"  per quei numeri che sono sia multipli di 3 che di 5
    msg = "FizzBuzz"; // se il ciclo entra in questa condizione allora la variabile msg varrà FizzBuzz

    backContent = document.getElementById('list').innerHTML; // in questo modo diciamo alla variabile backContent di tenere salvato il valore che stamperemo nell'HTML ad ogni iterazione del ciclo

    // output
    document.getElementById('list').innerHTML = backContent + "<li class='list-item'>" + msg + "</li>"; // aggiungo all'HTML, più precisamente all'elemento con l'ID list, il valore dell'HTML che cambierà appunto ad ogni iterazione più un list-item che farà parte di una lista non ordniata e il relativo messaggio.

  } else if (i % 3 === 0) { // condizione per la quale il programma stamperà "Fizz" solo per quei numeri che sono multipli di 3

    msg = "Fizz"; // se il ciclo entra in questa condizione allora la variabile msg varrà Fizz

    backContent = document.getElementById('list').innerHTML; // in questo modo diciamo alla variabile backContent di tenere salvato il valore che stamperemo nell'HTML ad ogni iterazione del ciclo

    // output
    document.getElementById('list').innerHTML = backContent + "<li class='list-item'>" + msg + "</li>"; // aggiungo all'HTML, più precisamente all'elemento con l'ID list, il valore dell'HTML che cambierà appunto ad ogni iterazione più un list-item che farà parte di una lista non ordniata e il relativo messaggio.

  } else if (i % 5 === 0) { // condizione per la quale il programma stamperà "Buzz" solo per quei numeri che sono multipli di 5

    msg = "Buzz"; // se il ciclo entra in questa condizione allora la variabile msg varrà Buzz

    backContent = document.getElementById('list').innerHTML; // in questo modo diciamo alla variabile backContent di tenere salvato il valore che stamperemo nell'HTML ad ogni iterazione del ciclo

    // output
    document.getElementById('list').innerHTML = backContent + "<li class='list-item'>" + msg + "</li>"; // aggiungo all'HTML, più precisamente all'elemento con l'ID list, il valore dell'HTML che cambierà appunto ad ogni iterazione più un list-item che farà parte di una lista non ordniata e il relativo messaggio.

  } else { // se il programma non trova numeri multipli di 3, multipli di 5 o sia multipli di 3 che di 5, allora stamperà il numero

    backContent = document.getElementById('list').innerHTML; // in questo modo diciamo alla variabile backContent di tenere salvato il valore che stamperemo nell'HTML ad ogni iterazione del ciclo

    // output
    document.getElementById('list').innerHTML = backContent + "<li class='list-item'>" + num + "</li>"; // aggiungo all'HTML, più precisamente all'elemento con l'ID list, il valore dell'HTML che cambierà appunto ad ogni iterazione più un list-item che farà parte di una lista non ordniata e il relativo messaggio.

  }

}