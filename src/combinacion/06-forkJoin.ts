import { forkJoin, interval, of } from 'rxjs';
import { delay, take } from "rxjs/operators";

/* forkJoin - emite los valores de todos los observables que contiene, pero cuando se completen todos los observables.
Los devuelve como un array */

const numeros$ = of(1,2,3,4);
const intervalo$ = interval(1000).pipe( take(3) );
const letras$ = of('a','b','c').pipe( delay(3500) );

forkJoin( numeros$, intervalo$, letras$ ).subscribe( console.log );


forkJoin( numeros$, intervalo$, letras$ ).subscribe( resp => {
    console.log('numeros', resp[0]);
    console.log('intervalo', resp[1]);
    console.log('letras', resp[2]);
});

//Otra forma de hacer lo anterior
forkJoin({ num: numeros$, int: intervalo$, let: letras$ }).subscribe( resp => console.log(resp) );