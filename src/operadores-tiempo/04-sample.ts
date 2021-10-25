import { fromEvent, interval } from 'rxjs';
import { sample } from "rxjs/operators";

/* Devuelve el último valor emitido por un observable cuando el observable que está dentro de
los paréntesis emita un valor */

const interval$ = interval(500);
const click$ = fromEvent<MouseEvent>( document, 'click' );


interval$.pipe(
    sample(click$)
).subscribe( console.log )
