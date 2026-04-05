const distanza = document.querySelector('#input-distanza');
const btn = document.querySelector('#btn-biglietto');
const eta = document.querySelector('#input-eta');
const form = document.querySelector('#train-form');
const finalPrice = document.querySelector('#final-price');
const biglietto = document.querySelector('.biglietto-card')


// function stampaBiglietto (){
//     const valoreDistanza = distanza.value;
//     const valoreEta = eta.value;
//     const prezzoAlKm = 0.21;
//     let prezzoBiglietto = 0;
//     const scontoMinorenni = 0.8;
//     const scontoAnziani = 0.6;
//     const prezzoPerDistanza = prezzoAlKm * Number(valoreDistanza);

//     if (Number(valoreEta) < 18 && Number(valoreEta) > 10) {
//         prezzoBiglietto = (prezzoPerDistanza * scontoMinorenni).toFixed(2);
//     } else if (Number(valoreEta) > 64) {
//         prezzoBiglietto = (prezzoPerDistanza * scontoAnziani).toFixed(2);
//     } else if (Number(valoreEta) > 17 && Number(valoreEta < 65)){
//         prezzoBiglietto = prezzoPerDistanza.toFixed(2);
//     }

//     console.log(prezzoBiglietto);
// }


form.addEventListener('submit', function (event) {
    // 1. Impediamo alla pagina di ricaricarsi (comportamento base dei form)
    event.preventDefault();

    // 2. Creiamo l'oggetto FormData passando il form stesso
    const datiForm = new FormData(form);

    // 3. Otteniamo i valori usando il "name" dell'input
    const distanza = Number(datiForm.get('distanza'));
    const eta = Number(datiForm.get('età'));

    const prezzoAlKm = 0.21;
    let prezzoBiglietto = 0;
    const scontoMinorenni = 0.8;
    const scontoAnziani = 0.6;
    const prezzoPerDistanza = prezzoAlKm * distanza;

    if (eta < 18 && eta > 10) {
        prezzoBiglietto = (prezzoPerDistanza * scontoMinorenni).toFixed(2);
    } else if (eta > 64) {
        prezzoBiglietto = (prezzoPerDistanza * scontoAnziani).toFixed(2);
    } else if (eta > 17 && eta < 65) {
        prezzoBiglietto = prezzoPerDistanza.toFixed(2);
    }

    console.log("Dati ricevuti:", distanza, eta);
    console.log(prezzoBiglietto);

    finalPrice.innerHTML =`${prezzoBiglietto} &#8364;`
    

    document.querySelector('#train-form').reset();
    biglietto.classList.remove('d-none')
});


