/**
 * @file clases
 * @author Ramon Sanchez <rsanchez2@teco.com.ar>
 */

const Color = {
    Blanco: { nombre: 'Blanco', bg: 'bg-white', textColor: 'text-dark' },
    Verde: { nombre: 'Verde', bg: 'bg-success', textColor: 'text-white' },
    Naranja: { nombre: 'Naranja', bg: 'bg-orange', textColor: 'text-white' },
    Amarillo: { nombre: 'Amarillo', bg: 'bg-warning', textColor: 'text-white' },
    Rojo: { nombre: 'Rojo', bg: 'bg-danger', textColor: 'text-white' },
    Violeta: { nombre: 'Violeta', bg: 'bg-purple', textColor: 'text-white' },
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
     * @param {*} favicon
     * @memberof Receta
     */
    constructor(nombrePlato, tiempoElaboracion, ingredientes, instrucciones, presentacion, icon, favicon) {
        this.ingredientes = ingredientes;
        this.tiempoElaboracion = tiempoElaboracion;
        this.nombrePlato = nombrePlato;
        this.instrucciones = instrucciones;
        this.presentacion = presentacion;
        this.icon = icon;
        this.favicon = favicon;
    }
}
