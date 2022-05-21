let url = 'http://js36520-team.teco.local/proyecto/primeraentrega/db-recipes.json';

fetch(url).then((response) => {
    return response.json();
}).then((data) => {
    console.log('data', data);
}).catch(function (error) {
    console.log(error);
});
