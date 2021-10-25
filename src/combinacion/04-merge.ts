import { fromEvent, merge } from 'rxjs';
import { pluck } from "rxjs/operators";

/* Método merge -- combina las emisiones de los observables en el mismo tiempo */

const keyup$ = fromEvent( document, 'keyup' );
const click$ = fromEvent( document, 'click' );

merge(
    keyup$.pipe( pluck( 'type' )),
    click$.pipe( pluck( 'type' ))
).subscribe( console.log );
