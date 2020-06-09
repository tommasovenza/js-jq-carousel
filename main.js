// Analizzate il codice html e css prima di iniziare

// Scrivete nei commenti gli step che vi servono per raggiungere l’obbiettivo
// Andate avanti passo passo testando ogni singolo pezzo gradualmente
// Fate I miglioramenti grafici solo dopo aver completato la parte js
// Attenzione a dove dichiarate le variabili che contengono gli elementi html, lo scopo è importante


// imposto il document ready

// vado a leggere la documentazione di jQuery per ricordare le funzioni next() e prev()

$(document).ready(
    function() {

        // imposto il click
        $('.next').click(
            function() {
                scorriLeImmagini();
            }
        );
    }
);


function scorriLeImmagini() {
    alert('prova click nella funzione')
}