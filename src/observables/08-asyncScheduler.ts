import { asyncScheduler } from "rxjs";

/* El asynScheduler crea una subscripcion */

/* En este caso le estamos diciendo que ejecute saludar a los 2 segundos */
const saludar = () => console.log('Hola Mundo');
asyncScheduler.schedule( saludar, 2000 );

/* En este caso le estamos diciendo que ejecute saludar2 a los 2 segundos y aparte en el tercer parámetro le pasamos
el nombre */
const saludar2 = nombre => console.log(`Hola ${ nombre }`);
asyncScheduler.schedule( saludar2, 2000, 'Julio' );

/* Como crear un setInterval. Básicamente hacemos lo mismo que las ejecuciones anteriores pero dentro de la 
funcion que se envia en el primer parámetro volvemos a llamar al mismo asynScheduler */
const subs = asyncScheduler.schedule( function(state){
    console.log('state ', state); 
    
    this.schedule( state+1, 1000 );

}, 3000, 0);

/* Cancelamos la subscripcion a los 6 segundos */
setTimeout( () => {
    subs.unsubscribe();
}, 6000);