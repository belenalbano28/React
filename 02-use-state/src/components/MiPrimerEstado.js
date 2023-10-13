import React,{useState} from 'react'

export const MiPrimerEstado = () => {
    /* Problematica
    let nombre='Belen Albano';
    function cambiarNombre(e){
        nombre='algun nombre';
    }*/
    const cambiarNombre=(e,n)=>{
        setNombre(n);
    }
    const [nombre,setNombre] = useState('Belen Albano');
  return (
    <div>
        <h3>componente: MiPrimerEstado</h3>
        <strong className='label'>{nombre}</strong>
        &nbsp;
        <button onClick={e => cambiarNombre(e,'Algun Nombre')}>Cambiar nombre</button>
        &nbsp;
        <input type='text' onKeyUp={e=>cambiarNombre(e,e.target.value)} placeholder='cambia el nombre'></input>
    </div>
  )
}
