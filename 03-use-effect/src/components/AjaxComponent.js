import React, { useState, useEffect } from 'react'

export const AjaxComponent = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [cargando,setCargando]= useState(true);
    const [errores,setErrores]= useState('');
    useEffect(() => {
        //se cargaran los usuarios estaticos al cargar el componente
        //getUsuariosEstaticos();
        getUsuariosAjaxPms();
        //getUsuariosajaxAw();
    }, []);
    //generico para rellenar el estado

    const getUsuariosEstaticos = () => {
        setUsuarios([
            { "id": 7, "email": "michael.lawson@reqres.in", "first_name": "Maria", "last_name": "Jhonson", "avatar": "https://reqres.in/img/faces/7-image.jpg" }
            , { "id": 8, "email": "lindsay.ferguson@reqres.in", "first_name": "Luisa", "last_name": "Fernandez", "avatar": "https://reqres.in/img/faces/8-image.jpg" },
            { "id": 9, "email": "tobias.funke@reqres.in", "first_name": "Belen", "last_name": "Martinez", "avatar": "https://reqres.in/img/faces/9-image.jpg" },
            { "id": 10, "email": "byron.fields@reqres.in", "first_name": "Barbara", "last_name": "Rodriguez", "avatar": "https://reqres.in/img/faces/10-image.jpg" },
        ]);
    }
    function getUsuariosAjaxPms(){
        setTimeout(()=>{
            fetch('https://reqres.in/api/users?page=1')
            .then(respuesta=>respuesta.json())
            .then(resultado=>{
                setUsuarios(resultado.data);
                setCargando(false);
            },error=>{
                console.log(error);
                setErrores(error.mesagge);
            });
        },2000)
    }
    const getUsuariosajaxAw =async()=>{
        //misma funcion pero con await
        const peticion=await fetch('https://reqres.in/api/users?page=2');
        const {data}=await peticion.json();
        setUsuarios(data);
    }
    if(errores!=''){
        //cuando hay algun error
        return(
            <div className='errores'>{errores}</div>
        );
    }
    else if(cargando==true){
        //cuando esta cargando
        return (
            <div className='cargando'>cargando datos...</div>
        );
    }else if(cargando==false && errores===''){
        //cuando todo ha ido bien, muestro esto
    return (
        <div>
            <h2>Listado de usuarios via Ajax</h2>
            <ol className='usuarios'>
                {
                    usuarios.map(usuario=>{
                        console.log(usuario)
                        return (<li key={usuario.id}>
                            <img src={usuario.avatar} width='50'></img>
                            &nbsp;
                            {usuario.first_name} {usuario.last_name}</li>);
                    })
                }

            </ol>

        </div>
    );
    }
    
    
}
