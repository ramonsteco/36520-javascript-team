console.log(`formBusqueda `);
const form = document.getElementById('formBusqueda');
console.log(`formBusqueda ${formBusqueda}`);
form.onsubmit = formBuscarSubmit;


function formBuscarSubmit(event) {
  //https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=DEMO_KEY
  //https://github.com/raywenderlich/recipes/blob/master/Recipes.json
  console.log(`formBuscarSubmit ${event}`);

  event.preventDefault();
}