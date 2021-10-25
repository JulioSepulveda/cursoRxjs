import { catchError, of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';

const manejaError = ( resp: AjaxError ) => {
    console.warn('error', resp.message);
    return of({
        ok: false,
        usuarios: []
    });
}

/* La diferencia entre la petición getJSON y ajax es que en la respuesta ajax tenemos más información */
const obs$ = ajax.getJSON( url ).pipe(
    catchError( manejaError )
);
const obs1$ = ajax( url ).pipe(
    catchError( manejaError )
);

obs$.subscribe( data => console.log('getJson', data) );
obs1$.subscribe( data => console.log('ajax', data) );

/* Otra forma de controlar los errores */
const obs2$ = ajax.getJSON( url );

obs2$.subscribe({
   next: val => console.log('next: ', val),
   error: err => console.warn('error en subs: ', err),
   complete: () => console.log('complete')
});
