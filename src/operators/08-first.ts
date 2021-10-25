import { fromEvent } from "rxjs";
import { first, tap } from "rxjs/operators";

/* Límita solamente al primer valor del observable. Una vez emite el primer valor cancela la subscripción */

const click$ = fromEvent<MouseEvent>( document, 'click' );

/* Devulve solo la primera pulsacion del ratón */
click$.pipe(
    tap( () => console.log('tap') ),
    first()
).subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('complete')
})

/* En este caso devuelve la primera pulsación en el que el eje Y sea mayor que 150 */
click$.pipe(
    tap( () => console.log('tap') ),
    first<MouseEvent>( event => event.clientY > 150 )
).subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('complete')
})