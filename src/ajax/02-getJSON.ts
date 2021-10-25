import { ajax } from "rxjs/ajax";

const url = 'https://httpbin.org/delay/1';

/* Otra forma de hacer peticiones http */
const obs$ = ajax.getJSON( url );

obs$.subscribe( data => console.log('data', data) );

/* Incluir un header en la petición */
const obsHeaders$ = ajax.getJSON( url, {
    'Content-Type': 'application/json',
    'mi-token': 'ABC123'
} );

obsHeaders$.subscribe( data => console.log('data', data) );