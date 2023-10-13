import React,{useState,useEffect} from 'react';
import { AvisoComponent } from './AvisoComponent';

export const PruebasComponent = () => {
    const [usuario,setUsuario]=useState('Belen');
    const [fecha,setFecha]=useState('01/01/1991');
    const [contador=0,setContador]=useState(0);
    const modUsuario = e=>{
        setUsuario(e.target.value);
    }

    function cambiarFecha(){
        setFecha(new Date().toLocaleDateString());
    }
//este solo se ejecuta una vez, solo al cargar el componente
   useEffect(()=>{
    console.log('algo');
   },[]);

//se ejecuta solo si cambio el usuario
   useEffect(()=>{
    setContador(parseInt(contador)+1);
    console.log('has modificado '+contador);
   },[usuario]);
    

  return (
    <div>
        <h1>El efecto - Hook useEffect</h1>
        <strong className={
            contador>=10? 'label-green'
            : 'label'
        }>{usuario}</strong>
        <strong>{fecha}</strong>
        <div>
        <input type='text' 
        onChange={modUsuario} 
        placeholder='cambia el nombre'/>
        </div>
        <button onClick={cambiarFecha}>cambiarFecha</button>
        {usuario=='Belen' && <AvisoComponent></AvisoComponent> /*usamos && en lugar de ? para q no pida : */}
    </div>
  )
}
