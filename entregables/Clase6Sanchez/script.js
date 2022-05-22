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
/**
 *  Funcion para cambiar el favicon
 */
function changeFavicon(favicon) {
    var link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = `img/${favicon}`;
}
/**
 *  Funcion para cargar la ingrediente
 */
function cargarIngrediente(ingrediente) {
    let bgColor = ingrediente.color ? ingrediente.color.bg : '';
    let textColor = ingrediente.color ? ingrediente.color.textColor : '';
    textoReceta.innerHTML += `<span class="${bgColor} ${textColor}">${ingrediente.cantidad} ${isNaN(ingrediente.cantidad) ? 'de' : ''} ${ingrediente.nombre} ${ingrediente.icon ? ingrediente.icon : ''} </span><br />`;
}
/**
 *  Funcion para cargar la instruccion
 */
function cargarInstruccion(instruccion) {
    textoReceta.innerHTML += `${instruccion.orden}-${instruccion.texto} <br />`;
}
/**
 *  Funcion para cargar la receta
 */
function cargarReceta(receta) {
    let textoReceta = document.getElementById('textoReceta');
    let tituloReceta = document.getElementById('tituloReceta');
    let subTituloReceta = document.getElementById('subTituloReceta');
    changeFavicon(receta.favicon);
    tituloReceta.innerText = `${receta.nombrePlato} ${receta.icon}`;
    subTituloReceta.innerText = `${receta.tiempoElaboracion}`;
    textoReceta.innerHTML = '';
    for (const ingrediente of receta.ingredientes) {
        cargarIngrediente(ingrediente);
    }
    textoReceta.innerHTML += ` <br />`;
    for (const instruccion of receta.instrucciones) {
        cargarInstruccion(instruccion);
    }
}
function recetaAleatoria() {
    let recetaRandom = getRandomInt(5);
    let receta = recetas[recetaRandom];
    if (receta != undefined) {
        cargarReceta(receta);
    }
}


initUi();