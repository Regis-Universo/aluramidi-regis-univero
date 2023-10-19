function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

// Criando uma REFERÊNCIA CONSTANTE

const listaDeTeclas = document.querySelectorAll('.tecla');

// para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    
    const instrumento = tecla.classList[1];
                  
    const idAudio = `#som_${instrumento}`;  // Template String
   
    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function () {
        tecla.classList.add('ativa');
   }

   tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
   }


}
