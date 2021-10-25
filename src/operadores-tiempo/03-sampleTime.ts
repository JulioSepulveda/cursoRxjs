import { fromEvent } from "rxjs";
import { map, sampleTime } from "rxjs/operators";

/* Devuelve el último valor emitido dentro del intervalo de tiempo especificado */
const click$ = fromEvent<MouseEvent>( document, 'click' );

/* Ponemos el sampleTime antes del map ya que es más eficiente en memoria */
click$.pipe(
    sampleTime(2000),
    map( ({ x, y }) => ({ x, y }) )
).subscribe( console.log );