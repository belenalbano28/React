import React from 'react'

export const EventosComponente = () => {

 const hasDadoClick=(e)=>{
    alert('click');
    }
function hasDadodblClick(){
    alert('doble click');
    
        }
function hasEntrado_salido(e,accion){
    alert('has '+accion+ ' a la caja con el mouse');
}
function estasDentro(){
console.log('estas dentro del input');
}
function estasFuera(){
    console.log('estas fuera del input');
    }

  return (
    <div>
        <h1>Eventos en React</h1>
        <p><button onClick={hasDadoClick}>Clickea aqui</button> </p>
        <p><button onDoubleClick={hasDadodblClick}>dos clicks aqui</button> </p>
        <div id='caja' onMouseEnter={e=>hasEntrado_salido(e, 'entrado')} onMouseLeave={e=>hasEntrado_salido(e,'salido')}>
            pasa por encima
        </div>
        <p>
        <input type='text' onFocus={estasDentro} onBlur={estasFuera} placeholder='introduce tu nombre'></input>
        </p>
    </div>

    

  )
}//la funcion dentro del onclick hay que ponerla sin parentesis
//pq cuando renderiza ejectuta todo, sino, se ejecuta la accion del 
//onclick, sin haber clickeado, al cargar la pagina

