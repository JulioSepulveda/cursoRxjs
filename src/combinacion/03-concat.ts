import { concat, interval, of } from "rxjs";
import { take } from "rxjs/operators";

/* Funcion concat -- concatena observables uno detras de otro. Hasta que no termine el primero, no empieza el segundo */

const interval$ = interval(1000);
concat(
    interval$.pipe( take(3) ),
    interval$.pipe( take(2) ),
    of(1,2,3)
).subscribe( console.log );