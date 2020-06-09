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

    // creo una variabile e la inizializzo all'immagine attiva in quel momento come scritto in html
    var immagineCorrente = jQuery('.images img.active');
    // vado a rimuoverne la classe active che me la visualizza a schermo, per attribuirla alla successiva immagine
    immagineCorrente.removeClass('active');
    // ho capito poco questo passaggio, tra la nuova proprietà next e la stringa 'img' passatavi dentro
    immagineCorrente.next('img').addClass('active');

}