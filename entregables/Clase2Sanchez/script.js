/**
 * @file Entregable n 2, coderhouse
 * @author Ramon Sanchez <rsanchez2@teco.com.ar>
 */
const iconSpaghetti = 'spaghetti.ico';
const iconPizza = 'pizza.ico';
const iconCupcake = 'cupcake.ico';
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function getRecetaSpaghetti() {


  let receta = `
    <b>Ingredientes</b><br />
    ${ingrediente1}<br />

    <b>Pasos</b><br />
    ${pasosSpaghetti}
  `;
  return receta;
}
function getRecetaPizza() {
  let pasos = `
    1- En un bol colocar harina y realizar un hueco en el centro. Incorporar la levadura desgranada, azúcar y media taza de agua tibia, disolver y tapar el recipiente con una bolsa plástica durante 15 minutos. Agregar el resto del agua y aceite de oliva. <br />
    2- Salar la corona de harina y unir los ingredientes hasta logar una masa lisa y homogénea. Espolvorear con harina extra y dejar descansar hasta duplicar el volumen. Dividir el bollo en tres partes iguales. <br />
    3- Dejar descansar nuevamente unos minutos. Aceitar una fuente, cubrir con la masa esparciéndola con los dedos aceitados. <br />
    4- Cocinar en el piso del horno caliente hasta que la base quede crocante. <br />
    5- Distribuir sobre la pizza los ingredientes deseados y llevar a horno caliente por 10 a 15 minutos para cocinar la pizza. Retirar y servir.
  `;
  let receta = `
    <b>Ingredientes</b><br />
    Harina, 1/2 k <br />
    Levadura fresca, 25 g <br />
    Agua tibia, 1 taza <br />
    Azúcar, 1 cucharadita <br />
    Aceite de oliva, 3 cucharadas <br />
    Sal, 1 cucharadita <br />
    <b>Pasos</b><br />
    ${pasos}
  `;
  return receta;
}
function getRecetaCupcake() {
  let pasos = `
  1- En un bowl, colocar la manteca a temperatura ambiente con el azúcar y batir. Agregar los huevos, de a uno por vez, sumar la esencia de vainilla y la ralladura de limón. <br />
  2- Tamizar la harina, la sal y el polvo para hornear e incorporarlos a la mezcla anterior. Sumar la leche y mezclar. <br />
  3- Disponer la mezcla en 12 pirotines y cocinarlos en el horno precalentado, a 180° (moderado) de 18 a 20 minutos. Retirar y reservar. <br />
  4- Para la cobertura, en un bowl, batir la manteca a temperatura ambiente hasta que este cremosa. Agregar la crema y la esencia de vainilla. Bajar la velocidad e incorporar el azúcar impalpable de a poco . <br />
  5- Si se quiere una cubierta de varios colores, dividir la crema en pequeños bowls y sumar el colorante en pasta a elección en cada uno. Mezclar. Colocar la mezcla en una manga (o varias) con pico de repostería rizado o liso y decorar los cupcakes con el frosting, haciendo copos o la figura que le guste y sumar las granas o golosinas, formando el decorado que quiera. <br />
  `;
  let receta = `
    <b>Ingredientes</b><br />
    130 g de manteca <br />
    130 g de azúcar <br />
    3 huevos <br />
    1 cucharadita de esencia de vainilla <br />
    Ralladura de piel de 1 limón <br />
    195 g de harina <br />
    Pizca de sal <br />
    7 g de polvo de hornear <br />
    60 cc de leche <br />
    12 pirotines grandes <br />
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
function changeReceta(id) {

}
function recetaAleatoria() {
  let recetaRandom = getRandomInt(3);
  let textoReceta = document.getElementById('textoReceta');
  let tituloReceta = document.getElementById('tituloReceta');
  let subTituloReceta = document.getElementById('subTituloReceta');
  console.log(recetaRandom);
  switch (recetaRandom) {
    case 0:
      tituloReceta.innerText = 'Spaghetti';
      subTituloReceta.innerText = 'Tiempo 30 min';
      textoReceta.innerHTML = getRecetaSpaghetti();
      changeFavicon(iconSpaghetti);
      break;
    case 1:
      tituloReceta.innerText = 'Pizzas';
      subTituloReceta.innerText = 'Tiempo 20 min';
      textoReceta.innerHTML = getRecetaPizza();
      changeFavicon(iconPizza);
      break;
    case 2:
        tituloReceta.innerText = 'Cupcakes';
        subTituloReceta.innerText = 'Tiempo 45 min';
        textoReceta.innerHTML = getRecetaCupcake();
        changeFavicon(iconCupcake);
        break;
  }
  console.log(this);
}


