/**
 * @file Entregable n 1, coderhouse
 * @author Ramon Sanchez <rsanchez2@teco.com.ar>
 */
//Inicializa variables
let repetir = true;
let tamaño = 0;
let opcion = 0;
while (repetir) {
    opcion = prompt(`
        Menu de Acciones
        Ingrese un número para seleccionar la acción\n
        1- Dibujar triangulo\n
        2- Dibujar cuadrado\n
        3- Dibujar casa\n
        Otro numero- Salir
    `);
    repetir = opcion == '1' || opcion == '2' || opcion == '3';
    console.log(`repetir ${repetir}`);
    console.log(`La opción ingresada es ${opcion}`);
    if (repetir) {
        tamaño = prompt(`Ingrese el tamaño de la figura`);
        console.log(`Tamaño de la figura ${tamaño}`);
    }
    switch (opcion) {
        case '1':
            console.log('Accion 1. Dibujar triangulo.');
            for (let i = 1; i <= tamaño; i++) {
                let lineToPrint = "  ";
                for (let j = tamaño - i; j > 0; j--) {
                    lineToPrint += "  ";
                }
                for (let j = i * 2 - 1; j > 0; j--) {
                    lineToPrint += " x";
                }
                console.log(lineToPrint);
            }
            break;
          case '2':
            console.log('Accion 2.  Dibujar cuadrado.');
            for (let i = 1; i <= tamaño; i++) {
                let lineToPrint = "  ";
                for (let j = tamaño; j > 0; j--) {
                    lineToPrint += " x";
                }
                console.log(lineToPrint);
            }
            break;
          case '3':
            console.log('Accion 3.  Dibujar casa.');
            // Dibujar triangulo
            for (let i = 1; i <= tamaño; i++) {
                let lineToPrint = "  ";
                for (let j = tamaño - i; j > 0; j--) {
                    lineToPrint += "  ";
                }
                for (let j = i * 2 - 1; j > 0; j--) {
                    lineToPrint += " x";
                }
                console.log(lineToPrint);
            }
            // Dibujar cuadrado
            for (let i = 1; i <= tamaño; i++) {
                let lineToPrint = "    ";
                for (let j = tamaño; j > 0; j--) {
                    lineToPrint += " x ";
                }
                console.log(lineToPrint);
            }
            break;
          default:
            console.log('Default');
            break;
      }
}
