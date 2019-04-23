console.log('Hello world');

//1. Transpilación: http://babeljs.io/repl/

//2. Declaración de clases (objetos)

class Radio {
  constructor(model){
    this.model = model;
  }

  play(){
    console.log(`Playing ${this.model} radio!`);
  }
}

const r1 = new Radio('Sony');
r1.play();

//3. Importación/exportación de módulos

import { sum } from './helpers';

console.log('Suma: ', sum(1,2));

//4. (var), const, let, windows.

  const constant = 1;

  let variable = 2;


//5. Funciones flecha

//6. Plantillas en cadenas (``), funcion includes

//7. Valores por defecto en parámetros de funciones

const sayHello = (name = 'someone') => {
  console.log(`Hello ${name}!`);
}

sayHello('Jose');

//8. Spread operator

const a1 = [0,1,2];

const b1 = [0,1,2];

const c1 = [...a1, ...b1]; //Deja de ser un array de arrays

console.log(c1);

//9. Objetos literales:
//     - Simplificación propiedad-valor let a = {b, c: 'val'}
//     - Simplificación declaración de función

const a = 1;

const obj = {
  a,  //Es como poner a:a
  b: 'val',
  c: () => {
    console.log('function c');
  },
  d() {
    console.log('function d');
  }
}

obj.d()

//10. Bucles for para iterar arrays (of) y claves de objetos (in)
//    Función forEach

const array = [1,2,3,4,5];

const object = {
  a:1,
  b:2,
  c:3
}

array.forEach( x => console.log(x));

//Otra forma para el array
// for(let x of array) {
//   console.log(x);
// }

//Para el objeto
for(let k in object){
  console.log(k);
  console.log(object[k]);
}

//11. Programación funcional básica (find, filter, map...)
import books from './books';

const book3 = books.find((book)=> book.id === 3 );
console.log(book3);

const booksJava = books.filter((book)=> book.language === 'Java' );
console.log(booksJava);

const array1 = [1,2,3,4,5];
const modified = array1.map(x => x * 2);
console.log(`Array: ${array} / Modificado: ${modified}`);

const newBooks = books.map((book) => {
  if (book.language === 'JavaScript') {
    book.language = 'Javascript';
  }
  return book;
});
