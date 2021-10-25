import { ajax } from "rxjs/ajax";

const url = 'https://httpbin.org/delay/1';

/* Se le envía la url y el segundo parámetro opcional sería un objeto con los headers */
ajax.get( url, { 'mi-token': 'ABC123' } ).subscribe(console.log);

/* Se le envía la url y el segundo parámetro sería el body y el tercero los headers */
ajax.post( url, { id: 1, nombre: 'Julio' }, { 'mi-token': 'ABC123' }).subscribe(console.log);

/* Se le envía la url y el segundo parámetro sería el body y el tercero los headers */
ajax.put( url, { id: 1, nombre: 'Julio' }, { 'mi-token': 'ABC123' }).subscribe(console.log);

/* Se le envía la url y el segundo parámetro serían los headers */
ajax.delete( url, { 'mi-token': 'ABC123' }).subscribe(console.log);

ajax({
   url: url,
   method: 'POST',
   headers: { 'mi-token': 'ABC123' } ,
   body: { id: 1, nombre: 'Julio' }
}).subscribe(console.log);

