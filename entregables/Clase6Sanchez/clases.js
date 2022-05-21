/**
 * @file clases
 * @author Ramon Sanchez <rsanchez2@teco.com.ar>
 */

const Color = {
    Blanco: 'Blanco',
    Verde: 'Verde',
    Naranja: 'Naranja',
    Amarillo: 'Amarillo',
    Rojo: 'Rojo',
    Violeta: 'Violeta',
};

/**
 * Ingrediente de la receta
 *
 * @class Ingrediente
 */
class Ingrediente {
    /**
     * Creates an instance of Ingrediente.
     * @param {*} requerido
     * @param {*} cantidad
     * @param {*} nombre
     * @param {*} color
     * @param {*} icon
     * @memberof Ingrediente
     */
    constructor(requerido, cantidad, nombre, color, icon) {
        this.requerido = requerido;
        this.cantidad = cantidad;
        this.color = color;
        this.nombre = nombre;
        this.icon = icon;
    }
}
/**
 * Cocinero que escribe la receta
 *
 * @class Cocinero
 */
class Cocinero {
    /**
     * Creates an instance of Cocinero.
     * @param {*} nombre
     * @memberof Cocinero
     */
    constructor(nombre) {
        this.nombre = nombre;
    }
}

/**
 * Instruccion de la receta
 *
 * @class Instruccion
 */
class Instruccion {
    /**
     * Creates an instance of Instruccion.
     * @param {*} orden
     * @param {*} tiempo
     * @param {*} texto
     * @memberof Instruccion
     */
    constructor(orden, tiempo, texto) {
        this.orden = orden;
        this.tiempo = tiempo;
        this.texto = texto;
    }
}


/**
 * Receta
 *
 * @class Receta
 */
class Receta {
    /**
     * Creates an instance of Receta.
     * @param {*} nombrePlato
     * @param {*} tiempoElaboracion
     * @param {*} ingredientes
     * @param {*} instrucciones
     * @param {*} presentacion
     * @param {*} icon
     * @memberof Receta
     */
    constructor(nombrePlato, tiempoElaboracion, ingredientes, instrucciones, presentacion, icon) {
        this.ingredientes = ingredientes;
        this.tiempoElaboracion = tiempoElaboracion;
        this.nombrePlato = nombrePlato;
        this.instrucciones = instrucciones;
        this.presentacion = presentacion;
        this.icon = icon;
    }
}


let recetaSpaghetti = new Receta('Spaghetti', '30 min',
[
    new Ingrediente(true, '400 g', 'tomate triturado', Color.Rojo, '🍅'),
    new Ingrediente(true, '1/2', 'cebolla', Color.Rojo, '🧅'),
    new Ingrediente(true, '100ml', 'nata para cocinar (crema de leche)', Color.Rojo, undefined),
    new Ingrediente(true, '1 cucharadita', 'pimentón dulce', Color.Rojo, undefined),
    new Ingrediente(true, '1 cucharadita', 'orégano seco', Color.Verde, undefined),
    new Ingrediente(true, '100ml', 'caldo donde cozamos los espaguetis', Color.Verde, undefined),
    new Ingrediente(true, 'a gusto', 'sal', Color.Blanco, '🧂'),
    new Ingrediente(true, 'a gusto', 'pimienta', Color.Blanco, undefined),
    new Ingrediente(true, 'a gusto', 'aceite de oliva', Color.Blanco, undefined),
    new Ingrediente(false, 'a gusto', 'queso rallado', Color.Blanco, undefined),
],
[
    new Instruccion(1, 10, 'En una sartén amplia poner un chorrito de aceite a fuego suave. Añadir la cebolla y el ajo bien picados. Salpimentar y cocinar unos 5 minutos mientras removemos con frecuencia.'),
    new Instruccion(2, null, 'Pasado el tiempo añadir el tomate. Echar su parte de sal y dejar cocinar 10 minutos a fuego suave'),
    new Instruccion(3, null, 'Mientras se hace la salsa, cocer los espaguetis. Para una correcta cocción, es muy importante echar abundante agua en una olla. 1 litro por cada 100g de pasta. Una vez esté hirviendo, echar un buen puñadito de sal (sin miedo), añadir los espaguetis y remover con bastante frecuencia. Especialmente al principio. Así evitamos que se peguen al fondo de la olla'),
    new Instruccion(4, null, 'Una vez estén cocinados – tardarán alrededor de 10 minutos en estar «al dente» – Guardamos unos 100ml del caldo de la cocción. El resto, lo escurrimos de los espaguetis.'),
    new Instruccion(5, null, 'En la salsa de tomate que, ya estará bastante solida y habrá perdido gran parte del agua que tenía (eso es bueno. Coge muy buen sabor esta salsa al hacer eso) añadimos la nata que, junto al caldo de la cocción, que lo añadiremos más tarde, serán los ingredientes que den tanta cremosidad a esta nata. Añadimos también ahora el pimentón que añadirá más sabor y más color rojo y mezclamos bien hasta que todos los ingredientes se vuelvan a calentar'),
    new Instruccion(6, null, 'Cuando se hayan integrado y calentado los ingredientes, añadimos los espaguetis, el orégano seco y el caldo de la cocción que habíamos reservado. Mezclamos y cocinamos todo un par de minutos más. Hasta que los espaguetis hayan absorbido toda la parte «líquida» de la salsa. ¡delicioso!'),
], 'presentacion', '🍝');

let recetaPizza = new Receta('Pizza', '30 min',
[
    new Ingrediente(true, '1/2 k', 'Harina', Color.Rojo, '🍅'),
    new Ingrediente(true, '25 g', 'Levadura fresca', Color.Rojo, '🧅'),
    new Ingrediente(true, '1 taza', 'Agua tibia', Color.Rojo, undefined),
    new Ingrediente(true, '1 cucharadita', 'Azúcar', Color.Rojo, undefined),
    new Ingrediente(true, '1 cucharadas', 'aceite de oliva', Color.Blanco, undefined),
    new Ingrediente(false, '1 cucharadita', 'sal', Color.Blanco, '🧂'),
],
[
    new Instruccion(1, 10, 'En un bol colocar harina y realizar un hueco en el centro. Incorporar la levadura desgranada, azúcar y media taza de agua tibia, disolver y tapar el recipiente con una bolsa plástica durante 15 minutos. Agregar el resto del agua y aceite de oliva.'),
    new Instruccion(2, null, 'Salar la corona de harina y unir los ingredientes hasta logar una masa lisa y homogénea. Espolvorear con harina extra y dejar descansar hasta duplicar el volumen. Dividir el bollo en tres partes iguales.'),
    new Instruccion(3, null, 'Dejar descansar nuevamente unos minutos. Aceitar una fuente, cubrir con la masa esparciéndola con los dedos aceitados.'),
    new Instruccion(4, null, 'Cocinar en el piso del horno caliente hasta que la base quede crocante. '),
    new Instruccion(5, null, 'Distribuir sobre la pizza los ingredientes deseados y llevar a horno caliente por 10 a 15 minutos para cocinar la pizza. Retirar y servir.')
], 'presentacion', '🍝');

let recetas = [recetaSpaghetti, recetaPizza];

let ingrediente1 = new Ingrediente(Color.Rojo, 'Tomate', '🍅');
let cocinero1 = new Cocinero('German Martitegui');
let cocinero2 = new Cocinero('Narda Lepes');
let cocineros = [cocinero1, cocinero2];

console.log('ingrediente1', ingrediente1);
console.log('cocineros', cocineros);
