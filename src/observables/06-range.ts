import { asyncScheduler, range } from "rxjs";

/* Nos crea un observable que emite una secuencia de n'umero en base a un rango 
El primer parametro es el número inicial de la secuencia, y el segundo la cantidad de  números que va a sacar
Si no se especifica el primer parámetro empieza en 0*/

const src1$ = range(1,5);

/* En el tercer parametro se le especifica el asyncScheduler para indicar que es asíncrono */
const src2$ = range(1,5, asyncScheduler);

console.log('inicio');
src1$.subscribe( console.log );
console.log('fin');

/* La diferencia con el primer observable es que este al ser asíncrono, primero veremos el inicio y fin y luego la 
secuencia de números ya que no se detiene la ejecución hasta que termine el subscribe */
console.log('inicio');
src2$.subscribe( console.log );
console.log('fin');