import { of } from "rxjs";

/* El if nos permite crear observables de un listado de elementos 
Estos elementos pueden ser del mismo tipo o de diferente*/
const obs$ = of(1,2,3,4,5,6);


console.log('Inicio del Obs$');
obs$.subscribe( 
    next => console.log('next', next),
    null,
    () => console.log('Terminamos la secuencia')
);
console.log('Fin del Obs$');