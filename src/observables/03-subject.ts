import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('completado')
}

const intervalo$ = new Observable<number>( subs => {

    /* Intervalo que devuelve un número random */
    const intervalID = setInterval(
        () => subs.next( Math.random() ), 1000
    );

    return () => {
        clearInterval( intervalID );
        console.log('intervalo destruido');
    };
});

/* El subject es un observable especial, con las siguientes características 
 *   1º Casteo múltiple -->z muchas subscripciones van a estar subscritas al mismo subject
 *   2º También es un observer
 *   3º Se puede manejar el next, error y complete
*/
const subject$ = new Subject();
const subscription = intervalo$.subscribe( subject$ );

/* Al ejecutar este código podemos observar que las dos subscripciones devuelven el mismo número. 
Es decir, la subscripción es la misma */
//const subs1 = subject$.subscribe( rnd => console.log('subs1 ', rnd ));
//const subs2 = subject$.subscribe( rnd => console.log('subs2 ', rnd ));

const subs1 = subject$.subscribe( observer );
const subs2 = subject$.subscribe( observer );


setTimeout( () => {
    /* Cuando el dato es producido por el observable directamente se llama "Cold Observable" 
    Sin embargo, cuando es producida por fuera del observable, como en el caso de la sentencia siguiente se llama 
    "Hot Observable"*/
    subject$.next(10);

    /* Este complete completa el subject pero no el intervalo del observable, ya que no llama al complete del observable */
    subject$.complete();

    /* Con este unsubscribe si que limpiamos el interval del observable */
    subscription.unsubscribe();

    console.log('Subs cancelado');
}, 3500);