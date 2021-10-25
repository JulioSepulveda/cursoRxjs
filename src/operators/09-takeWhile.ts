import { fromEvent } from "rxjs";
import { map, takeWhile } from "rxjs/operators";


/* Emite las emisiones del observable hasta que se cumple la condición establecida. 
En ese momento cancela la subscripción */

const click$ = fromEvent<MouseEvent>( document, 'click' );


click$.pipe(
    map( ({ x, y }) => ({ x, y }) ),
    /* En este caso emitirá las pulsaciones de ratón hasta que se pulse en el eje Y por encima de 150 */
    //takeWhile( ({ y }) => y < 150 )

    /* En este caso emitirá las pulsaciones de ratón hasta que se pulse en el eje Y por encima de 150
    incluida la última aunque esta sea por encima del 150 */
    takeWhile( ({ y }) => y < 150, true )
).subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('complete')
})