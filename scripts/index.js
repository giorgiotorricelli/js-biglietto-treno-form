const distanza = document.querySelector('#input-distanza');
const btn = document.querySelector('#btn-biglietto');
const eta = document.querySelector('#input-eta');


function stampaBiglietto (){
    const valoreDistanza = distanza.value;
    const valoreEta = eta.value;
    const prezzoAlKm = 0.21;
    let prezzoBiglietto = 0;
    const scontoMinorenni = 0.8;
    const scontoAnziani = 0.6;
    const prezzoPerDistanza = prezzoAlKm * Number(valoreDistanza);

    if (Number(valoreEta) < 18 && Number(valoreEta) > 10) {
        prezzoBiglietto = (prezzoPerDistanza * scontoMinorenni).toFixed(2);
    } else if (Number(valoreEta) > 64) {
        prezzoBiglietto = (prezzoPerDistanza * scontoAnziani).toFixed(2);
    } else if (Number(valoreEta) > 17 && Number(valoreEta < 65)){
        prezzoBiglietto = prezzoPerDistanza.toFixed(2);
    }

    console.log(prezzoBiglietto);
    
    
    
}


btn.addEventListener (
    'click', stampaBiglietto
)