import { of } from "rxjs";
import { endWith, startWith } from "rxjs/operators";

/* startWith -- Operador que empieza con el/los argumentos enviados en el paréntesis y sigue con los valores 
recibidos por el observable */
/* endWith -- Operador que empieza con los valores recibidos por el observable y termina con el/los argumentos
enviados en el paréntesis */

const numeros$ = of(1,2,3).pipe( 
    startWith('a', 'b', 'c') ,
    endWith('x', 'y', 'z') ,
);

numeros$.subscribe( console.log );



