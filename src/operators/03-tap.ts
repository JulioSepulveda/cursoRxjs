import { range } from "rxjs";
import { tap, map } from "rxjs/operators";

/* El tap nos permite disparar efectos secundarios */

const numeros$ = range(1,5);

numeros$.subscribe( val => console.log('subs ', val) );

/* La expresión anterior se puede realizar utilizando un tap */
numeros$.pipe(
    tap( x => {
        console.log('antes', x); 
        return 100;
    }),
    map( val => val * 10 ),
    tap({
        next: valor => console.log('despues ', valor),
        complete: () => console.log('Se terminó todo')
    })
).subscribe( val => console.log('subs ', val) );