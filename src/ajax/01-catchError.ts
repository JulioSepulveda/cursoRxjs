import { of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";
import { catchError, pluck } from "rxjs/operators";

const url = 'https://api.github.com/users?per_page=5';

const fetchPromesa = fetch( url );
/* Con este fetch podemos recuperar los datos de una URL. Al pasar los datos en el primer then por
un json() tenemos que ejecutar otra vez el then (al ser el json una promesa también). El problema
viene cuando la URL es incorrecta o recibimos un error, ya que no se gestiona bien */

//fetchPromesa
//    .then( resp => resp.json() )
//    .then( data => console.log('Data: ', data) )
//    .catch( err => console.warn('Error en usuarios: ', err) )


/* Para solucionar el problema anterior utilizaríamos la constante que hemos creado manejaErrores y 
se lo podríamos en un primer then */
const manejaErrores = ( response: Response ) => {
    if ( !response.ok ) {
        throw new Error( response.statusText );
    }
    return response;
}

fetchPromesa
    .then( manejaErrores )
    .then( resp => resp.json() )
    .then( data => console.log('Data: ', data) )
    .catch( err => console.warn('Error en usuarios: ', err) )


    const atrapaError = (err: AjaxError) => {
        console.warn('Error en: ', err.message);
        return of([]);
    }

//REALIZAMOS AHORA EL MISMO TRABAJO PERO UTILIZANDO PETICIONES AJAX DE RXJS
/* Podemos ver que es bastante más sencillo el código que queda */
ajax( url ).pipe(
    pluck('response'),
    catchError( atrapaError )
).subscribe( users => console.log('Usuarios: ', users) );