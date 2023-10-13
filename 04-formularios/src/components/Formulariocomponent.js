import React,{useState} from 'react'

export const Formulariocomponent = () => {
        const[usuario,setUsuario]=useState({});

    const conseguirDatos=e=>{
        e.preventDefault();
        let datos=e.target;
       let usuario={
        nombre:datos.nombre.value,
        apellido:datos.apellido.value,
        opciones:datos.opciones.value,
        biografia:datos.bio.value
       }
       setUsuario(usuario);
    }
    const cambiarDatos=e=>{
        let input=e.target.name;
        let previo=usuario;
        let usuario_nuevo={
            nombre:previo.nombre,
            apellido:previo.apellido,
            opciones:previo.opciones,
            biografia:previo.biografia
           }
       
       switch (input) {
        case 'nombre':
            usuario_nuevo.nombre=e.target.value;
            setUsuario(usuario_nuevo);
            break;
        case 'apellido':
            usuario_nuevo.apellido=e.target.value;
            setUsuario(usuario_nuevo);
        break;
        case 'opciones':
            usuario_nuevo.opciones=e.target.value;
            setUsuario(usuario_nuevo);
        break;
        case 'bio':
            usuario_nuevo.biografia=e.target.value;
            setUsuario(usuario_nuevo);
        break;
        default:
            break;
       }
        
     
    }
  return (
    <div>
        <h1>Formularios con react</h1>
        {usuario.biografia && usuario.biografia.length >=1 && //verificamos q exista usuario.bio antes de acceder al length, pq si no existe es undefined
        (<div className='info_usuario label label-grey'>
            {usuario.nombre} {usuario.apellido} es del sexo {usuario.opciones}
            y su biografia es <p>{usuario.biografia}</p> 
        </div>)}
        <form onSubmit={conseguirDatos}>
            <input onChange={e=>cambiarDatos(e)} name='nombre' type='text' placeholder='nombre'/>
            <input onChange={e=>cambiarDatos(e)} name='apellido' type='text' placeholder='apellido'/>
            <select onChange={e=>cambiarDatos(e)} name='opciones'>
            <option value='femenino'>femenino</option>
            <option value='masculino'>masculino</option>
            </select>
            <textarea onChange={e=>cambiarDatos(e)} name='bio' placeholder='Biografia'>

            </textarea>
            <input type='submit' value='enviar'/>
        </form>
    </div>
  )
}
