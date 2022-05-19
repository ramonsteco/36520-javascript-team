console.log(`formBusqueda `);
const form = document.getElementById('formBusqueda');
console.log(`formBusqueda ${formBusqueda}`);
form.onsubmit = formBuscarSubmit;
function formBuscarSubmit(event) {
    console.log(`formBuscarSubmit ${event}`);

    event.preventDefault();
  }