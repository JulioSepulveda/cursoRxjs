import { from, of } from "rxjs";
import { distinct } from "rxjs/operators";

/* emite los valores que no se hayan emitido previamente */
const numeros$ = of(1,1,1,3,3,2,4,4,5,3,1)

numeros$.pipe(
    distinct()
).subscribe( console.log );

interface Personaje {
    nombre: string;
}

const personajes: Personaje[] = [
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'X'
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
        nombre: 'Megaman'
    },
    {
        nombre: 'Zero'
    }
];

/* En el caso de trabajar con objetos, como el distinct utiliza el operador === (mismo tipo y mismo valor) se tiene que especificar que se 
quiere comparar, ya que si no dejaría pasar todos los valores */
from( personajes ).pipe(
    distinct( p => p.nombre )
).subscribe ( console.log );