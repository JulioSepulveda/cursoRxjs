import { of, from, async } from "rxjs";

/**
 * of => toma argumentos y genera una secuencia
 * from => array, pormesa, iterable, observable y genera un observable
 */

const observer = {
    next: val => console.log('next: ', val),
    complete: () => console.log('complete')    
};

const  sourceFrom$ = from([1,2,3,4,5]);
const  sourceOf$ = of([1,2,3,4,5]);

sourceFrom$.subscribe( observer );
sourceOf$.subscribe( observer );

/* Con el from, el argumento puede ser una dirección http usando el método fetch */
const source$ = from( fetch('https://api.github.com/users/Klerith') ); 
/* Con la siguiente subscripcion podríamos recoger cualquier parámetro que devuelve la url */
source$.subscribe( resp => {
    console.log(resp.url);
}); 

/* Para poder ver los datos que contiene esa url tendríamos que realizar lo siguiente
ya que los datos están dentro del body y hay que pasarlo a JSON */
source$.subscribe( async(resp) => {
    const dataResp = await resp.json();
    console.log(dataResp);
}); 


/* Iterables. */
 /* Con el + entre el nombre function y los paréntesis indicamos que es un iterable */
const miGenerador = function*() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
};
/* Podemos hacer una subscripción al iterable usando from */
const miIterable = miGenerador();
from( miIterable ).subscribe( observer );