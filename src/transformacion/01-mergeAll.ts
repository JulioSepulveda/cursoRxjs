import { fromEvent, Observable } from 'rxjs';
import { ajax } from "rxjs/ajax";
import { debounceTime, map, mergeAll } from 'rxjs/operators';
import { GithubUser } from '../interfaces/github-user.interfaces';
import { GithubUsersResp } from '../interfaces/github-users.interfaces';

//Referencias
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append( textInput, orderList );

//Helpers
const mostrarUsuarios = ( usuarios: GithubUser[] ) => {
    console.log(usuarios);
    orderList.innerHTML = '';

    for( const usuario of usuarios) {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = usuario.avatar_url;

        const anchor = document.createElement('a');
        anchor.href = usuario.html_url;
        anchor.text = 'Ver página';
        anchor.target = '_blanck';

        li.append( img );
        li.append( usuario.login + ' ' );
        li.append( anchor );

        orderList.append( li );
    }
    
}

//Steams
const input$ = fromEvent<KeyboardEvent>( textInput, 'keyup' );

/* Manejo de un observable que devuelve otro observable */
/* input$.pipe(
    debounceTime(500),
    map( event => {
        const texto = event.target['value'];

        return ajax.getJSON(`https://api.github.com/search/users?q=${ texto }`);
    })
).subscribe( resp => {
    resp.pipe().subscribe( console.log )
}); */

/* El operador mergeAll nos unifica varios observables en uno solo para que se manejen desde la misma subscripcion */
/* En este ejercicio también vamos a poner el tipado en cada evento (entrada y salida) */
input$.pipe(
    debounceTime<KeyboardEvent>(500),
    map<KeyboardEvent, string>(evento => evento.target['value']),
    map<string, Observable<GithubUsersResp>>( texto => ajax.getJSON(`https://api.github.com/search/users?q=${ texto }`) ),
    mergeAll<Observable<GithubUsersResp>>(),
    map<GithubUsersResp, GithubUser[]>(items => items.items)
).subscribe( mostrarUsuarios );