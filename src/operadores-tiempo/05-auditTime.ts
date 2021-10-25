import { fromEvent } from 'rxjs';
import { auditTime, map, tap } from "rxjs/operators";

/* Emite el último valor emitido por el observable en un periodo de tiempo que empieza en la emisión de un valor */

const click$ = fromEvent<MouseEvent>( document, 'click' );


click$.pipe(
    map( ({ x }) => x ),
    tap( val => console.log('tap', val) ),
    auditTime(2000)
).subscribe( console.log );