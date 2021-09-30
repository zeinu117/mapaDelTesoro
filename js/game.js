
//Genera toda la logical del mapa

// creando nuestras constantes de alto y ancho para que se alinien a nuestra imagen
const WIDTH = 600;
const HEIGH = 500;

//generamos el mapa del tesoro (target) donde tendra 2 parametros (x, y)
let target = {
  //creamos nuestro parametro x y con la funcion de getRandomNumber le pasamos el parametro WIDTH (ancho de la imagen)
  x: getRandomNumber(WIDTH),
  //creamos nuestro parametro y y con la funcion de getRandomNumber le pasamos el parametro HEIGH (alto de la imagen)
  y: getRandomNumber(HEIGH)
};

// obtenemos donde ha hecho click el usuario 
//obtennemos la referencia de nuestro mapa y la guardamos en una variable con el signo de dolar que hace referencia a un elemento html
let $map = document.querySelector('#map');
//refrencia hacia el documento al elemento html distance 
let $distance = document.querySelector('#distance');
//variable click
let clicks = 0;
//agregamos un escuchador al evento click, en este caso ejecutamos una funcion donde recibe el evento del clicj (e)
$map.addEventListener('click', function (e) {
  console.log('click');
  //cada que el usuario de un click el contador aumenta mas 1 esto para ir
  //guardando los click que el usuario de 
  clicks++;
  //obtenemos la distancia por medio de la funcion getDistance previamente creada
  let distance = getDistance(e, target);
  //obtenemos las pistas para el usuario utilizando la distancia 
  let distanceHint = getDistanceHint(distance);
  //etiqueta distancia hacia el documento html le colocamos el string que nos esta mandando  distanceHint
  //utilizamos plantillas literales para madar con el signo de dolar la distanciaHint (la pista al usuario)
  $distance.innerHTML = `<h1>${distanceHint}</h1>`;
//forma de ganar
//si la distancia es menor a 20 px
  if (distance < 20 ) {
    //mandamos una alerta que diga que ha encontrado el tesoro en cierta cantidad de click
    alert(`Tesoro encontrado en ${clicks} clicks!`);
    //refrescamos la pagina con js
    location.reload();
  }
});
