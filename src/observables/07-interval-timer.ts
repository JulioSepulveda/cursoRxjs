import { interval, timer } from "rxjs";

const observer = {
    next: val => console.log('next: ', val),
    complete: () => console.log('complete'),
    
};
    

/* Permiten crear observables que trabajan con intervalos de tiempo. Son asíncronos por naturaleza */
const interval$ = interval(10000);

console.log('inico');
interval$.subscribe( observer );
console.log('fin');



/* Emite el observable cuando el tiempo llega a lo especificado y termina. */
const timer1$ = timer(2000);
console.log('inico');
timer1$.subscribe( observer );
console.log('fin');


/* En este caso le estamos diciendo que empiece a los dos segundo y que emita valores después cada segundo 
Básicamente es como un interval pero que empieza a los dos segundos*/
const timer2$ = timer(2000, 1000);
console.log('inico');
timer2$.subscribe( observer );
console.log('fin');

/* Por último, en este caso estamos programando para que el observer se ejecute en un momento dado, en este
caso dentro de 5 segundos. Haría la ejecución y se completaría*/
const hoyEn5 = new Date();
hoyEn5.setSeconds(hoyEn5.getSeconds());

const timer3$ = timer(hoyEn5);
timer2$.subscribe( observer );
