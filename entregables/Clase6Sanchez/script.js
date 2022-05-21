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
 * Funcion para obetener la receta de acuerdo al parametro icon
 * @param {...number} num - A positive or negative number.
 */
function getReceta(icon) {
    let ingredientes = '';
    let pasos = '';
    switch (icon) {
        case iconCupcake:
            ingredientes = ingredientesCupcake;
            pasos = pasosCupcake;
            break;
        case iconPizza:
            ingredientes = ingredientesPizza;
            pasos = pasosPizza;
            break;
        case iconSpaghetti:
            ingredientes = ingredientesSpaghetti;
            pasos = pasosSpaghetti;
            break;
    }
    let receta = `
      <b>Ingredientes</b><br />
      ${ingredientes}
      <b>Pasos</b><br />
      ${pasos}
    `;
    return receta;
}

function changeFavicon(icon) {
    var link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = `img/${icon}`;
}

function recetaAleatoria() {
    let recetaRandom = getRandomInt(3);
    let textoReceta = document.getElementById('textoReceta');
    let tituloReceta = document.getElementById('tituloReceta');
    let subTituloReceta = document.getElementById('subTituloReceta');
    console.log(recetaRandom);
    tituloReceta.innerText = `${receta.nombrePlato} ${receta.icon}`;
    subTituloReceta.innerText = `${receta.tiempoElaboracion}`;
    //textoReceta.innerHTML = getReceta(iconSpaghetti);
    changeFavicon(faviconSpaghetti);
    for (const ingrediente of receta.ingredientes) {
        console.log(ingrediente.nombre);
        console.log(ingrediente.cantidad);
        textoReceta.innerHTML += `${ingrediente.nombre}`;
    }
    for (const ingrediente of receta.ingredientes) {
        console.log(ingrediente.nombre);
        console.log(ingrediente.cantidad);
    }
}


initUi();