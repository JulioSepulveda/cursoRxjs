import { from, of } from "rxjs";
import { distinctUntilKeyChanged } from "rxjs/operators";

/* emite los valores simepre y cuando la emisión anterior no sea la misma pero tomando como referencia objetos */

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
    distinctUntilKeyChanged( 'nombre' )
).subscribe ( console.log );