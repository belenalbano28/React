//si se escribe rafc y se da enter, crea una estructura basica de  componente
import React from 'react'

export const SegundoComponente = () => {
    const libros=['Libro1','Libro2',"Libro3"];
  return (
    <div className='segundo-componente'>
        <h4>Listado de libros</h4>
        {libros.length>=1?(
            <ul>
                {libros.map((libro,indice)=>{
                    return <li key={indice}>{libro}</li>;
                })}
            </ul>)
            :(
            <p>No hay libros</p>)
        }
    </div>
  )
}

/*
 {libros.length>=1?( //hace de if
            <ul>
                {libros.map((libro,indice)=>{
                    return <li Key={indice}>{libro}</li>; //se coloca una key para que
                                                            cada li sea unico, requerimiento de react
                })}
            </ul>)
            :( // hace de else
            <p>No hay libros</p>) //los parectesis hacen de corchetes
        }
*/