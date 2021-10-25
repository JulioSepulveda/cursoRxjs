import { from, of } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";

/* emite los valores simepre y cuando la emisión anterior no sea la misma */

const numeros$ = of(1,1,1,3,3,2,4,4,5,3,1)

numeros$.pipe(
    distinctUntilChanged()
).subscribe( console.log );

interface Personaje {
    nombre: string;
}

const personajes: Personaje[] = [
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Zero'
    },
    {
        nombre: 'Dr. Willy'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'Zero'
    }
];

/* En el caso de trabajar con objetos, como el distinctUntilChanged utiliza el operador === (mismo tipo y mismo valor) 
se tiene que especificar que se quiere comparar, ya que si no dejaría pasar todos los valores */
from( personajes ).pipe(
    distinctUntilChanged( (anterior, actual) => anterior.nombre === actual.nombre )
).subscribe ( console.log );