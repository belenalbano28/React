//importar modulos de react
import React from "react";
//la funcion
const MiComponente = () => { //es lo mismmo que crearlo con function MIComponente(){}
//esto es un fragment <> </> = <fragment></fragment>
//se utiliza para poder renderizar varias etiquetas a la vez
//seria como un div

const nombre='belen';
const edad='18';

let usuario={
    nombre:'romina',
    apellido: 'albano',
    edad:'18'
};


    return (
    <> 
    <p>Este es mi primer componente</p>
    <h2>Algo nuevo</h2>
    <h3>Datos: </h3>
    <ul>
        <li>
            Nombre:{nombre}
        </li>
        <li>
            Edad:{edad}
        </li>
    </ul>
    <h3>Mostrar array:</h3>
    {JSON.stringify(usuario)}
    <h4>Acceder a cada valor</h4>
    <ul>
        <li>Nombre: {usuario.nombre}</li>
        <li>Apellido: {usuario.apellido}</li>
        <li>Edad: {usuario.edad}</li>
    </ul>

    <ul>
        <li>
    React
        </li>
        <li>
    Angular
        </li>
        <li>
    Vue
        </li>
        

    </ul>
    </>);
}
//export
export default MiComponente;
