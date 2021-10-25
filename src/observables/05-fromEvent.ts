import { fromEvent } from "rxjs";

/* Nos permite crear observables de un evento en la pantalla (click, etc...) */


/* Eventos del DOM */
/* Para saber el tipo de dato que devuelve el fromEvent podemos verlo en el console.log. Al indicar eel tipo de dato
podemos acceder a todos los atributos que posea*/
const src1$ = fromEvent<MouseEvent>( document, 'click' );
const src2$ = fromEvent<KeyboardEvent>( document, 'keyup' );

const observer = {
    next: val => console.log('next: ', val)
};

/* En este caso en vez de recoger todo el elemento en el subscribe, usamos la desestructuracion ({}) para accder
solo a los atributos que necesitamos */
src1$.subscribe( ({ x, y }) => {
    console.log(x,y)
});

/* En este caso en el subscribe cogemos tood el elemento que devuelve el fromEvent */
src2$.subscribe( evento => {
    console.log(evento.key);
});