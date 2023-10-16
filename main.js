function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}

// Criando uma REFERÊNCIA CONSTANTE

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = tocaSomPom;