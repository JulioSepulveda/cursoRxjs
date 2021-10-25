import { fromEvent, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { tap, map, mergeMap, catchError, exhaustMap, switchMap } from 'rxjs/operators';

//Helper
const peticionHttpLogin = ( userPass ) => ajax.post('https://reqres.in/api/login?delay=1', userPass)
    .pipe(
        map(res => res.response['token']  ),
        catchError( err => of('xxx') )
    )
;


//Crear formulario
const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass = document.createElement('input');
const submitBtn = document.createElement('button');

//configuraciones
inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPass.type = 'password';
inputPass.placeholder = 'Password';
inputPass.value = 'cityslicka';

submitBtn.innerHTML = 'Ingresar';

form.append(inputEmail, inputPass, submitBtn);
document.querySelector('body').append( form );

//Streams
/* Con el tap evitamos el refresco por defecto al pulsar el botón */
const submitForm$ = fromEvent<Event>( form, 'submit' )
    .pipe( 
        tap( ev => ev.preventDefault() ),
        map( ev => ({
            email: ev.target[0].value,
            password: ev.target[1].value
        })),
        /* Al poner lo de esta forma, el primer argumento recibido en el mergeMap pasará a la funcion peticionHttpLogin */
        /* Si ponemos cada una de los siguientes metodos y nos vamos a la pestaña Network de la inspección de la página 
        web, veremos las diferencias de como funciona cada uno */
        //mergeMap( peticionHttpLogin )
        //switchMap( peticionHttpLogin )
        exhaustMap( peticionHttpLogin )
    );

submitForm$.subscribe( token => {
    console.log(token);
})

