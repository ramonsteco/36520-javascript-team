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

let instrucciones = [
    new Instruccion(1, 10, '1- En una sartén amplia poner un chorrito de aceite a fuego suave. Añadir la cebolla y el ajo bien picados. Salpimentar y cocinar unos 5 minutos mientras removemos con frecuencia.'),
    new Instruccion(2, null, '2- Pasado el tiempo añadir el tomate. Echar su parte de sal y dejar cocinar 10 minutos a fuego suave'),
    new Instruccion(3, null, '3- Mientras se hace la salsa, cocer los espaguetis. Para una correcta cocción, es muy importante echar abundante agua en una olla. 1 litro por cada 100g de pasta. Una vez esté hirviendo, echar un buen puñadito de sal (sin miedo), añadir los espaguetis y remover con bastante frecuencia. Especialmente al principio. Así evitamos que se peguen al fondo de la olla'),
    new Instruccion(4, null, '4- Una vez estén cocinados – tardarán alrededor de 10 minutos en estar «al dente» – Guardamos unos 100ml del caldo de la cocción. El resto, lo escurrimos de los espaguetis.'),
    new Instruccion(5, null, '5- En la salsa de tomate que, ya estará bastante solida y habrá perdido gran parte del agua que tenía (eso es bueno. Coge muy buen sabor esta salsa al hacer eso) añadimos la nata que, junto al caldo de la cocción, que lo añadiremos más tarde, serán los ingredientes que den tanta cremosidad a esta nata. Añadimos también ahora el pimentón que añadirá más sabor y más color rojo y mezclamos bien hasta que todos los ingredientes se vuelvan a calentar'),
    new Instruccion(6, null, '6- Cuando se hayan integrado y calentado los ingredientes, añadimos los espaguetis, el orégano seco y el caldo de la cocción que habíamos reservado. Mezclamos y cocinamos todo un par de minutos más. Hasta que los espaguetis hayan absorbido toda la parte «líquida» de la salsa. ¡delicioso!'),
];
let ingredientes = [
    new Ingrediente(true, '400 g', 'tomate triturado', Color.Rojo, '🍅'),
    new Ingrediente(true, '1/2', 'cebolla', Color.Rojo, '🧅'),
    new Ingrediente(true, '100ml', 'nata para cocinar (crema de leche)', Color.Rojo, '🧅'),
    new Ingrediente(true, '1 cucharadita', 'pimentón dulce', Color.Rojo, '🧅'),
    new Ingrediente(true, '1 cucharadita', 'orégano seco', Color.Verde, '🧅'),
    new Ingrediente(true, '100ml', 'caldo donde cozamos los espaguetis', Color.Verde, '🧅'),
    new Ingrediente(true, 'a gusto', 'sal', Color.Blanco, '🧂'),
    new Ingrediente(true, 'a gusto', 'pimienta', Color.Blanco, '🧂'),
    new Ingrediente(true, 'a gusto', 'aceite de oliva', Color.Blanco, '🧂'),
    new Ingrediente(false, 'a gusto', 'queso rallado', Color.Blanco, null),
];
let receta = new Receta('Spaghetti', '30 min', ingredientes, instrucciones, 'presentacion');
console.log('receta', receta);

let ingrediente1 = new Ingrediente(Color.Rojo, 'Tomate', '🍅');
let cocinero1 = new Cocinero('German Martitegui');
let cocinero2 = new Cocinero('Narda Lepes');
let cocineros = [cocinero1, cocinero2];

console.log('ingrediente1', ingrediente1);
console.log('cocineros', cocineros);

// console.log(Object.keys(Color));
// console.log(Color.Rojo instanceof Color);
// console.log('Rojo' === Color.Verde.name);
