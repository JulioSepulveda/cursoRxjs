import { fromEvent } from "rxjs";
import { debounceTime, distinctUntilChanged, pluck } from "rxjs/operators";

/* Mira cuantas milesimas de segundo han pasado desde la última emisión y si ese tiempo a superado 
las milesimas de segundo indicadas en los paréntesis, lanza la siguiente emisión */

const click$ = fromEvent( document, 'click' );

click$.pipe(
    debounceTime(3000)
).subscribe( console.log );


//Ejemplo 2
const input = document.createElement('input');
document.querySelector('body').append( input );

const input$ = fromEvent<KeyboardEvent>( input, 'keyup' );

input$.pipe(
    debounceTime(1000),
    pluck('target', 'value' ),
    distinctUntilChanged()
).subscribe( console.log );