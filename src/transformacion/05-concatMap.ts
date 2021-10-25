import { interval, fromEvent } from "rxjs";
import { concatMap, take } from "rxjs/operators";

/* El concatMap recibe los valores emitidos por un observable y devuelve otro observable. Si recibe un segundo
valor, deja en la cola la emisión del nuevo observable hasta que termina el anterior */

const click$ = fromEvent( document, 'click');
const interval$ = interval(500).pipe( take(3) );

click$.pipe(
    concatMap( () => interval$ )
).subscribe( console.log );