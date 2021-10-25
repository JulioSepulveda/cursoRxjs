import { from } from "rxjs";
import { map, reduce, scan } from "rxjs/operators";

/* El scan es exactamente igual que el reduce pero devolviendo el acumulado en cada emision */

const numeros = [1,2,3,4,5];

const totalAcumulador = (acc, cur) => acc + cur;

//Reduce
from( numeros ).pipe(
    reduce ( totalAcumulador, 0 )
).subscribe( console.log );

//scan
from( numeros ).pipe(
    scan ( totalAcumulador, 0 )
).subscribe( console.log );

//El scan puede ser la base del patron Redux (manejar el estado global de mi aplicación en un único objeto)
interface Usuario {
    id?: string;
    autenticado?: boolean;
    token?: string;
    edad?: number;
}

const user: Usuario[] = [
    {id: 'Julio', autenticado:false, token: null },
    {id: 'Julio', autenticado:true, token: 'ABC' },
    {id: 'Julio', autenticado:true, token: 'ABC123' },
];

const state$ = from( user ).pipe(
    scan<Usuario>( (acc: any, cur: any) => {
        return { ...acc, ...cur }
    }/* , { edad: 33 } */)
);

const id$ = state$.pipe(
    map( state => state.id )
);

id$.subscribe( console.log )