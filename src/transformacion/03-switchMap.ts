import { fromEvent } from 'rxjs';
import { ajax } from "rxjs/ajax";
import { map, switchMap } from 'rxjs/operators';

/* El switchMap es un transformador que recoge el valor emitido por un observable y retorna otro observable. 
Cada vez que el primero emita un valor nuevo se cancelarà el observable emitido por el switchMap para el 
valor anterior y se emitirá uno nuevo */

//Referencias
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append( textInput, orderList );

//Steams
const input$ = fromEvent<KeyboardEvent>( textInput, 'keyup' );

const url = 'https://api.github.com/delay/1?arg=';

input$.pipe(
    map<KeyboardEvent, string>(evento => evento.target['value']),
    switchMap( texto => ajax.getJSON(url + texto ))  
).subscribe( console.log );