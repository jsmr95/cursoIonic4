const users = require('./users.json');

//
// TODO 1
// Obtener el usuario cuyo teléfono es "024-648-3804"
//

console.log('=== 1 ===');
let eje1 = users.find((u) => u.phone == '024-648-3804');
console.log(eje1);


//
// TODO 2
// Crear una función que devuelva true si existe un usuario cuyo email
// sea el que se pasa como parámetro
//

console.log('=== 2 ===');

let existsUser = (email) => {
  let user = users.find((u) => {
    if (u.email == email) {
      return u;
    }
  });
  if (user) {
    return true;
  }else {
    return false;
  }

};

console.log(existsUser('Nathan@yesenia.net')); // true
console.log(existsUser('japostigo@atsistemas.com')); // false

//
// TODO 3
// Obtener el número de usuarios que tienen website
//

console.log('=== 3 ===');
let numUsuariosWeb = users.filter((u) => u.website);
console.log(`Número de usuarios con website: ${numUsuariosWeb.length}`);

//
// TODO 4
// Obtener un array que contengan objetos {id: "id", username: "username"},
// que contienen los ids y los nombres de usuarios de los usuarios
//

console.log('=== 4 ===');
 var nuevoMap = users.map((u) => {
   return {id: u.id, username: u.username};
 });

console.log(nuevoMap);

//
// TODO 5
// Obtener un array que sólo contenga las cadenas de los emails de los usuarios
//

console.log('=== 5 ===');
var emails = users.map((u) => { return u.email})
console.log(emails);

//
// TODO 6
// Obtener el array de usuarios pero con los números de sus direcciones en
// formato de número (y no de cadena que es como está ahora mismo)
//

console.log('=== 6 ===');
let usersNuevos = users.map((u) => {
  if (u.address) {
    u.address.number = +u.address.number;
  }
  return u;
});

console.log(usersNuevos);


//
// TODO 7
// Obtener el array de usuarios cuya dirección está ubicada entre la
// latitud -50 y 50, y la longitud -100 y 100
//

console.log('=== 7 ===');
let usuariosDirecciones = users.filter((u) => {
  if (u.address && u.address.geo) {
    if (-50 < u.address.geo.lat  &&
        50 > u.address.geo.lat &&
       -100 < u.address.geo.lng &&
       100 > u.address.geo.lng) {
      return u;
    }
  }
});

console.log(usuariosDirecciones);

//
// TODO 8
// Obtener un array con los teléfonos de los usuarios cuyo website
// pertenezca a un dominio biz
//

console.log('=== 8 ===');
let usuariosTelefonos = users.filter((u) => {
  if (u.website) {
    if (u.website.indexOf('.biz') >= 0) {
      return u;
    }
  }
});

console.log(usuariosTelefonos);

//
// TODO 9
// Escriba una función processArray que, dado un array de números
// enteros, devuelva un nuevo array en que aquellos elementos que
// sean pares se multipliquen por 2.
//
// ;)
//

console.log('=== 9 ===');

const testArray = [2, 3, 5, 6, 5, 9, 10, 12, 13];

const processArray = (a) => {
  a = a.filter((x) => x % 2 == 0);
  return a.map((x) => x * 2);
};

console.log(processArray(testArray)); // [4, 12, 20, 24]
