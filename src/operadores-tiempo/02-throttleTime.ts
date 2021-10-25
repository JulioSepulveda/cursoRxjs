import { asyncScheduler, fromEvent } from "rxjs";
import { throttleTime, distinctUntilChanged, pluck } from "rxjs/operators";

/* Funciona parecido al debounceTime solo que desde la última emisión y hasta que pase el periodo de tiempo
establecido, todo lo que se emita en ese intervalo se ignorará */

const click$ = fromEvent( document, 'click' );

click$.pipe(
    throttleTime(3000)
).subscribe( console.log );


//Ejemplo 2
const input = document.createElement('input');
document.querySelector('body').append( input );

const input$ = fromEvent<KeyboardEvent>( input, 'keyup' );

/* Se le pueden pasar los parámetros que se ven a continuación para que devuelva la primera y la última emisión */
input$.pipe(
    throttleTime(1000, asyncScheduler, { leading: true, trailing: true }),
    pluck('target', 'value' ),
    distinctUntilChanged()
).subscribe( console.log );