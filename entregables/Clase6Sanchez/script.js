/**
 * @file Entregable n 2, coderhouse
 * @author Ramon Sanchez <rsanchez2@teco.com.ar>
 */
/**
 *  Funcion para seteo de ui
 */
 function initUi() {
    const tituloPagina = 'Desafío: Incorporar Arrays';
    document.getElementById('tituloPagina').innerText = tituloPagina;
    document.getElementById('headerPagina').innerText = tituloPagina;
}
/**
 * Función para obtener un numero entero aleatorio
 * @param max - valor maximo del numero aleatorio
 */
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function changeFavicon(favicon) {
    var link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = `img/${favicon}`;
}

function recetaAleatoria() {
    let recetaRandom = getRandomInt(3);
    let receta = recetas[recetaRandom];
    console.log('receta', receta);
    let textoReceta = document.getElementById('textoReceta');
    let tituloReceta = document.getElementById('tituloReceta');
    let subTituloReceta = document.getElementById('subTituloReceta');
    console.log(recetaRandom);

    if(receta != undefined){
        changeFavicon(receta.favicon);
        tituloReceta.innerText = `${receta.nombrePlato} ${receta.icon}`;
        subTituloReceta.innerText = `${receta.tiempoElaboracion}`;
        textoReceta.innerHTML = '';
        for (const ingrediente of receta.ingredientes) {
            textoReceta.innerHTML += `${ingrediente.cantidad} de ${ingrediente.nombre} ${ingrediente.icon ? ingrediente.icon : ''} <br />`;
        }
        textoReceta.innerHTML += ` <br />`;
        for (const instruccion of receta.instrucciones) {
            textoReceta.innerHTML += `${instruccion.orden}-${instruccion.texto} <br />`;
        }
    }
}


initUi();