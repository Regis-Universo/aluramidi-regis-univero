function tocaSom (idElementoAudio) {

    document.querySelector('idElementoAudio').play();
}

// Criando uma REFERÊNCIA CONSTANTE

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < listaDeTeclas.length) {
    
    listaDeTeclas[contador].onclick = tocaSom;

    contador = contador + 1;

    console.log(contador);
}