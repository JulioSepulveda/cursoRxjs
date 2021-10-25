import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
    next: value => console.log('siguiente [next]: ', value),
    error: error => console.warn('siguiente [error]: ', error),
    complete: () => console.info('siguiente [completado]')
}

/* Declaración de un observable. El dolar al final es una buena práctica para identificar que es un observable */
const obs$ = new Observable<string>( subs => {
    subs.next('Hola');
    subs.next('Mudo');

    subs.next('Hola');
    subs.next('Mudo');

    //Forzar error
    //const a = undefined;
    //a.nombre = 'Julio';

    /* Después del complete, da igual lo que se haga dentro del observable, quen los elementos subscritos no 
    van a recibir nada */
    subs.complete();

    subs.next('Hola');
    subs.next('Mudo');
});

/* FORMAS DE UTILIZAR UN OBSERVER */
/* 1º La más común */
obs$.subscribe( resp => { console.log (resp) });
//También se puede usar así de una forma más simplificada
obs$.subscribe( console.log );


/* 2º Recibimos tres callbacks (la respues, error si hay, el completed). Está en desuso*/
obs$.subscribe(
    valor => console.log('next: ', valor),
    error => console.warn('error : ', error),
    () => console.info('Completado') 
);

/* 3º Es similar a la anterior nada más que utilizando un elemento Observer independiente que
hemos definido al principio. De esta forma queda más limpio */
obs$.subscribe( observer );