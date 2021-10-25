import { interval, fromEvent } from "rxjs";
import { exhaustMap, take } from "rxjs/operators";

/* El exhaustMap recibe un valor de un observable y emite otro observable. Si recibiera otro valor antes
de terminar el observable emitido para el anterior valor, lo ignoraría hasta que termine el anterior */

const click$ = fromEvent( document, 'click');
const interval$ = interval(500).pipe( take(3) );

click$.pipe(
    exhaustMap( () => interval$ )
).subscribe( console.log );