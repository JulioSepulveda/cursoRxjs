import { of } from "rxjs";
import { take, tap } from "rxjs/operators";

/* Util para limitar la cantidad de emisiones de un observable */

const numeros$ = of(1,2,3,4,5)

/* Hemos puesto el tap para que veamos que además de limitar el número de emisiones, 
el take también cancela la subscripcion */
numeros$.pipe(
    tap( t => console.log('tap ', t) ),
    take(3)
).subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('complete')
});