import { fromEvent } from 'rxjs';
import { map, tap } from "rxjs/operators";


/* Creación de la pagina para el ejercicio */
const texto = document.createElement('div');
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo arcu non diam fermentum, mollis viverra felis ultrices. Etiam et accumsan risus. Sed accumsan magna vitae nisl venenatis iaculis. Nam accumsan ante sem, vitae iaculis mauris venenatis in. Praesent quis sodales nisl. Aenean rutrum nunc erat, et porta est posuere vitae. Vestibulum consequat nulla vitae aliquet suscipit. Cras volutpat nisl mauris, eget accumsan lectus varius et. Morbi venenatis nunc tellus. Aenean pretium magna quis nulla hendrerit semper. Sed feugiat justo leo, quis accumsan neque porta non. Curabitur dignissim vitae est ac cursus.
<br/><br/>
Mauris id mattis diam, id faucibus quam. Etiam ultrices scelerisque neque. Fusce sagittis, tellus non sodales euismod, leo purus finibus tellus, quis suscipit risus mi sed sapien. Integer sodales nulla id quam sollicitudin, id semper turpis varius. Nunc egestas hendrerit eros eget tristique. Aliquam ac tincidunt est. Pellentesque consequat molestie mi eget feugiat. Nulla facilisi. Duis eu tellus porta, feugiat nibh sed, scelerisque lorem. Duis at luctus felis. Aliquam quis vehicula nisi.
<br/><br/>
Nullam ut auctor risus. Quisque in nulla sed massa mollis dictum eget quis odio. Nam congue lorem pulvinar nibh condimentum consectetur. Proin et tincidunt nunc, non scelerisque ipsum. Suspendisse potenti. Sed ullamcorper eu lacus quis aliquet. Donec est lectus, sodales in ipsum sed, sagittis eleifend nisi. Maecenas eu maximus est, nec convallis tortor. Phasellus sit amet felis et justo tristique malesuada vitae tempor justo.
<br/><br/>
Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus finibus ex non accumsan maximus. Sed tincidunt velit at dui facilisis, non lobortis dolor euismod. Sed sit amet efficitur nulla. Nunc laoreet ultricies lacus, ut tempus erat sodales a. Curabitur vitae faucibus eros. Nullam vel lorem vitae elit sodales ullamcorper. Curabitur maximus eu mi in sagittis. Nullam vel quam eget erat facilisis iaculis. Vivamus augue est, blandit ut velit non, interdum blandit mi. Curabitur venenatis ut dolor id iaculis. Fusce quis maximus nibh, nec euismod magna. Fusce laoreet risus eu mauris congue, et eleifend orci porttitor.
<br/><br/>
Sed eu lectus libero. Curabitur convallis tincidunt leo. Sed velit magna, aliquam pharetra dolor id, dapibus gravida tortor. Vivamus eleifend nulla aliquam arcu iaculis sodales. Ut id scelerisque mauris, ac sodales arcu. Donec quis vehicula ligula. Morbi vehicula quam imperdiet aliquet rutrum. Nulla semper ligula fermentum tincidunt rhoncus. Quisque vitae diam ut elit tempor aliquam. Proin nec auctor nibh. Mauris nec enim at sem feugiat semper. Nam mattis, nunc ut dapibus mollis, est nisl luctus nisi, vel aliquet quam est nec erat. Aliquam a tincidunt tortor. Donec porta tempus tellus eget blandit. Maecenas eget venenatis odio, ut consequat risus.
`;

const body = document.querySelector('body');
body.append( texto );

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append( progressBar );



/* En este ejercicio vamos a crear un progressBar para saber cuanto porcentaje del scroll vertical hemos avanzado */

//Función para el cálculo. Calculamos el porcentaje que hemos bajado el scroll
const calcularPorcentajesScroll = ( event ) => {
    const { scrollTop, scrollHeight, clientHeight } = event.target.documentElement;

    return ( scrollTop / (scrollHeight - clientHeight) ) * 100;
}

//Steams
const scroll$ = fromEvent( document, 'scroll' );

const progress$ = scroll$.pipe(
    map( calcularPorcentajesScroll ),
    tap( console.log )
);

/* El porcentaje al que nos hemos subscrito se lo asiganamos al progressBar que creamos al principio 
Es una barra morada horizontal arriba del todo*/
progress$.subscribe( porcentaje => {
    progressBar.style.width = `${ porcentaje }%`;
});