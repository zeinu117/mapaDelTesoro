// funciones que podremos reutilizar



// funcion que nos ayuda a crear numeros aleatoriamente con la biblioteca Math.random
// js 6 -> colocamos en una variable el nombre de la funcion y 
//colocamos el parametro que vayamos a ocupar en una funcion flecha
let getRandomNumber = size => {
  //convertimos un numero decimal a un entero
  return Math.floor(Math.random() * size);
}

// creacion de una funcion que nos permita medir 2 puntos para saber de donde dio el click el usuario y donde esta el punto
//target -> nuestras coordenadas donde se encontrara el tesoro 
//e -> evento (donde el usuario dara click)
let getDistance = (e, target) => {
  //restamos el eje de las x donde esta el tesoro y de donde da click el usuario
  //offsetX nos auyuda a saber donde ha dado click y restamos donde esta el tesoro
  let diffX = e.offsetX - target.x;
  //restamos el eje de las y donde esta el tesoro y de donde da click el usuario
  let diffY = e.offsetY - target.y;
  //obtenemos raiz cuadrada de la suma de los catetos al cuadrado
  return Math.sqrt((diffX * diffX) + (diffY * diffY));
}

// creamos una funcion para darle una pista el usuario si esta cerca o lejos y la obtenemos
//gracias a la funcion anterior
let getDistanceHint = distance => {
  // si la distancia es menor a 30 pixeles entonces 
  if (distance < 30) {
    return "Estas muy muy cerca!";
  } else if (distance < 40) {
    return "Estas muy cerca";
  } else if (distance < 60) {
    return "Estas cerca";
  } else if (distance < 100) {
    return "Estas algo cerca";
  } else if (distance < 180) {
    return "Estas algo lejos";
  } else if (distance < 360) {
    return "Estas lejos";
  } else {
    return "Estas muy lejos!";
  }
}
