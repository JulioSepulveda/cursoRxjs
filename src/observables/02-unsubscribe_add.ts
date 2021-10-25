import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('completado')
}


const intervalo$ = new Observable<number>( subscriber => {
    let contador = 0;
    
    /* Ejecuta este bucle cada 1000 milisegundos (1 segundo) */
    const intervalo = setInterval( () => {
        contador+=1;
        subscriber.next(contador);
    }, 500);

    /* El complete se ejecuta antes que el unsubscribe (Técnicamente 500 milisegundos antes) */
    setTimeout( () => {
        subscriber.complete();
    },2500);

    /* El return dentro de un observable se ejecuta cuando se cancela la subscripcion */
    return () => {
        /* Metodo para destruir el interval y que no siga ejecutandose de forma infinita */
        clearInterval(intervalo);
        console.log('Intervalo destruido')
    }
});

/* Subscripcion. La subscripcion la metemos dentro de una constante para poder realizar el unsubscribe cuando
ya no nos haga falta */
const subscription = intervalo$.subscribe( observer );
const subscription1 = intervalo$.subscribe( observer );

/* Para no tener que estar ejecutando el unsubscribe para cada uno de los subscriptions podemos anidarlos
de la siguiente forma */
subscription.add( subscription1 );


/* Método de typeScript que no indica que ejecute algo cuando pasen x segundos */
setTimeout( () => {
    /* Metodo para cancelar la subscripcion. Ejecuta el return del observable */
    //subscription.unsubscribe();
    //subscription1.unsubscribe();

    /* Con el método add anterior solo tenemos que llamar al unsubscribe del primero */
    subscription.unsubscribe();

    console.log('Cancelada la subscripción');
}, 6000);
