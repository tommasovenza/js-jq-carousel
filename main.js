// Analizzate il codice html e css prima di iniziare

// Scrivete nei commenti gli step che vi servono per raggiungere l’obbiettivo
// Andate avanti passo passo testando ogni singolo pezzo gradualmente
// Fate I miglioramenti grafici solo dopo aver completato la parte js
// Attenzione a dove dichiarate le variabili che contengono gli elementi html, lo scopo è importante



// 1. vado a leggere la documentazione di jQuery per ricordare le funzioni next() e prev()

// imposto il document ready
$(document).ready(
    function () {

        // imposto il click
        $('.next').click(
            function () {
                scorriLeImmagini();
            }

        );

        //imposto il click sull'altro target, il prev

        $('.prev').click(
            function() {
                alert('click di prova');
            }
        );
    }
);


function scorriLeImmagini() {

    // creo una variabile e la inizializzo all'immagine attiva in quel momento come scritto in html
    var immagineCorrente = $('.images img.active');

    // facciamo i cerchietti

    var cerchioCorrente = $('.nav i.active');

    // vado a rimuoverne la classe active che me la visualizza a schermo, per attribuirla alla successiva immagine
    // immagineCorrente.removeClass('active');
    // // ho capito poco questo passaggio, tra la nuova proprietà next() e la stringa 'img' passatavi dentro
    // immagineCorrente.next('img').addClass('active');

    // se l'ultimo elemento corrente, ha anche classe (.last) il next deve tornare al primo elemento con classe .first

    // quindi il codice diventa:

    // questo, nel mio programma, accade sempre in modo tale da poter rimuovere sempre la classe active e darla all'elemento successivo con la funzione next()
    immagineCorrente.removeClass('active');
    cerchioCorrente.removeClass('active');

    // // con la funzione next scorro le foto attribuendo loro la classe .active finchè non troverò l'ultimo elemento avente classe .last // questa funzione va copincollata sotto alla riga 51
    // immagineCorrente.next('img').addClass('active');

    // se l'immagine corrente ha classe .last...
    if (immagineCorrente.hasClass('last'), (cerchioCorrente.hasClass('last'))) {
        // prendi la prima immagine con classe first e dagli classe active!    ... in questo modo il loop riparte da capo
        $('.images img.first').addClass('active');
        $('.nav i.first').addClass('active');
    } else {
        // con la funzione next scorro le foto attribuendo loro la classe .active finchè non troverò l'ultimo elemento avente classe .last 
        immagineCorrente.next('img').addClass('active');
        cerchioCorrente.next().addClass('active');
    }

}