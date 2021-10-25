import { fromEvent, interval } from 'rxjs';
import { skip, takeUntil, tap } from "rxjs/operators";

/* El takeUntil emite los valores de un observable hasta que un segundo observable emite su primer valor */

/* El skip no emite las primeras x emisiones especificicadas en el skip */


/* Código para mostrar el botón en pantalla */
const boton = document.createElement('button');
boton.innerHTML = 'Detener Timer';
document.querySelector('body').append( boton );

const counter$ = interval(1000);

/* Al meterle el skip en el observable estabos diciendo que la primera pulsación no se tenga en cuenta */
const clickBtn$ = fromEvent<MouseEvent>( boton, 'click' ).pipe(
    tap( () => console.log('Tap antes del skip') ),
    skip(1),
    tap( () => console.log('Tap después del skip') )
);


counter$.pipe(
   takeUntil( clickBtn$ )
).subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('complete')
})

