import { range, fromEvent } from 'rxjs';
import { map, pluck, mapTo } from "rxjs/operators";

/* El map nos permite transformar lo que devuelve el observable en lo que nosotros necesitamos 
Trabaja con cualquier tipo de dato y devuelve cualquier tipo de dato */


/* Para evitar tener que estar modificando el dato recibido como se ve acontinuación usamos el map */
range(1,5).subscribe( val => console.log(val * 10) );

/* Para usar un operador necesitamos poner el pipe */
range(1,5). pipe(
    map<number, number>( val => val * 10 )
).subscribe( console.log );


/* OTRO EJEMPLO DE MAP */
const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup' );

const keyupCode$ = keyup$.pipe(
    map( event => event.code )
)

keyupCode$.subscribe( code => console.log('map ', code) );


/* El operador pluck extrae un elemento del objeto recibido */
/* Para obtener un elemento que esta dentro de otro se van especificando con ",". Por ejemplo baseURI esta 
dentro de target, el cual está dentro del KeyboardEvent  */
const keyupPluck$ = keyup$.pipe(
    pluck('target', 'baseURI')
);

keyupPluck$.subscribe( code => console.log('pluck ', code) );

/* El mapTo nos permite transformar la entrada a una salida específica */
const keyupMapTo$ = keyup$.pipe(
    mapTo('tecla presionda')
);

keyupMapTo$.subscribe( code => console.log('mapTo ', code) );