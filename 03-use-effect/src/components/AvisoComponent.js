import React,{useEffect} from 'react'

export const AvisoComponent = () => {

    useEffect(()=>{
        //detecta cuando el componente se monta, y se ejecuta una sola vez pq le paso el array vacio
        console.log('el componente del aviso esta montado');

        //cuando el componente se desmonta:

        return()=>{
            console.log('componente desmontado');
        }
    },[]);

  return (
    <div>
        <hr/>
        <h3>Saludos Belen</h3>
        <button onClick={e=>{
            alert('Bienvenida');
        }}>Mostrar alerta</button>
    </div>
  )
}
