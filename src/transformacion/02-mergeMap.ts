import { of, interval, fromEvent } from 'rxjs';
import { map, mergeMap, take, takeUntil } from 'rxjs/operators';


/* El mergeMap es un transformador que recoge el valor emitido por un observable y retorna otro observable. 
Tendremos tantos observables como valores emitidos por el primero */

const letras$ = of ('a', 'b', 'c');

letras$.pipe(
    mergeMap( (letra) => interval(1000).pipe(
        map( i => letra + i),
        take(3)
    ))
).subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('Complete')
        
});


//Otro ejemplo
const mouseDown$ = fromEvent( document, 'mousedown' );
const mouseup$ = fromEvent( document, 'mouseup' );
const interval$ = interval();

/* En este ejemplo mostramos el intervalo de tiempo entre que pinchas con el ratón y sueltas */
mouseDown$.pipe(
    mergeMap( () => interval$.pipe(
        takeUntil( mouseup$ )
    ))
).subscribe( console.log );