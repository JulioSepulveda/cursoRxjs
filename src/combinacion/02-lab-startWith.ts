import { startWith } from "rxjs";
import { ajax } from "rxjs/ajax";

/* Laboratorio con un ejemplo de uso del startwith. Mostramos el loading hasta que se recibe la respuesta de la URL */

//Referencias
const loadingDiv = document.createElement('div');
loadingDiv.classList.add('loading');
loadingDiv.innerHTML = 'Cargando...';

const body = document.querySelector('body');

//Steam
ajax.getJSON('https://reqres.in/api/users/2?delay=3')
    .pipe(
        startWith(true)
    )
    .subscribe( resp => {
        
        if (resp === true ){
            body.append( loadingDiv );
        } else {
            document.querySelector('.loading').remove();
        }
        console.log(resp);
    })