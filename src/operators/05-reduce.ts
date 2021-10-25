import { interval } from "rxjs";
import { reduce, take, tap } from "rxjs/operators";

/* Aplica una función acumuladora a las emisiones producidas por mi observable.
Básicamente va acumulando los valores de cada emisión y cuando se completa el observable es cuando 
devuelve el total de los valores acumulados */

const totalReducer = ( acumulador: number, valorActual: number ) => {
    return acumulador + valorActual;
}


/* El operador take completa el observable después de la cantidad de veces que le especifiquemos */
/* Con el reduce vamos acumulando los valores y cuando termine el observable devolvemos el resultado.
Lo malo del reduce es que si necesitas el acumulado en cada emisión no lo tienes, solo lo tienes al final */
interval(1000).pipe(
    take(3),
    tap( console.log ),
    reduce( totalReducer )
).subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('complete')
});