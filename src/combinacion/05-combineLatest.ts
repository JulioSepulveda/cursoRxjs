import { combineLatest, fromEvent } from 'rxjs';
import { map } from "rxjs/operators";

/* combineLatest -- combina las emisiones de los observables devolviendolos como un arreglo único.
Es decir si tenemos dos observables y el primero emite 'a' y el segundo '1' se emitiria 'a1' en nuestra subscripcion */

//References
const input1 = document.createElement('input');
const input2 = document.createElement('input');

input1.placeholder = 'email@gmail.com';
input2.placeholder = '*********';
input2.type = 'password';

document.querySelector('body').append(input1,input2);

//Helper
const getInputStream = ( elem: HTMLElement ) => fromEvent<KeyboardEvent>( elem, 'keyup').pipe(
        map<KeyboardEvent, string>( elem => elem.target['value'])
    )

combineLatest(
    getInputStream( input1 ),
    getInputStream( input2 ),
).subscribe( console.log );