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
 * Función para obtener el color de fondo del ingrediente
 *  * @param ingrediente - ingrediente
 */
 function getColorIngrediente(ingrediente) {
    if(ingrediente.color === Color.Blanco){ return { bg: 'bg-light', textColor: 'text-dark'}}
    if(ingrediente.color === Color.Rojo){ return { bg: 'bg-danger', textColor: 'text-white'};}
    if(ingrediente.color === Color.Verde){ return { bg: 'bg-success', textColor: 'text-white'};}
    if(ingrediente.color === Color.Amarillo){ return { bg: 'bg-warning', textColor: 'text-white'};}
    if(ingrediente.color === Color.Violeta){ return { bg: 'bg-purple', textColor: 'text-white'};}
    if(ingrediente.color === Color.Naranja){ return { bg: 'bg-orange', textColor: 'text-white'};}
    return { bg: 'bg-white', textColor: 'text-dark'};
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
    let colorIngrediente = 'bg-light';
    console.log(recetaRandom);

    if(receta != undefined){
        changeFavicon(receta.favicon);
        tituloReceta.innerText = `${receta.nombrePlato} ${receta.icon}`;
        subTituloReceta.innerText = `${receta.tiempoElaboracion}`;
        textoReceta.innerHTML = '';
        for (const ingrediente of receta.ingredientes) {
            colorIngrediente =  getColorIngrediente(ingrediente);
            textoReceta.innerHTML += `<span class="${colorIngrediente.bg} ${colorIngrediente.textColor}">${ingrediente.cantidad} de ${ingrediente.nombre} ${ingrediente.icon ? ingrediente.icon : ''} </span><br />`;
        }
        textoReceta.innerHTML += ` <br />`;
        for (const instruccion of receta.instrucciones) {
            textoReceta.innerHTML += `${instruccion.orden}-${instruccion.texto} <br />`;
        }
    }
}


initUi();