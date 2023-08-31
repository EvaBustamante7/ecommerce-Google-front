import React, { Fragment, useState } from 'react';
import { urlLogin } from '../../Servicies/urls';


const Form = () => {
    const [datos, setDatos] = useState({
        user: '',
        pass: '',
        agreeTerms: true
    })

    const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }

    const enviarDatos = (event) => {
             event.preventDefault()
        

            // var raw = JSON.stringify({
            //     "username":datos.user,
            //     "password":datos.pass
               
            // });
            var raw = JSON.stringify({
                "username": "pepito23@hotmail.com",
                "password": "000000"
              });
              

           

            function saveToken(result) {
                //console.log(result)
                console.log("estoy en el savetoken");
                var token = JSON.parse(result).token;
                console.log(token);
                localStorage.setItem('token', token);
                alert('Acceso concedido y token guardado en localStorage')
               
            }
            
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        

        fetch(urlLogin +"/api/login_check", requestOptions)
            .then(response => response.text())
            .then(result => saveToken(result))
            .catch(error => console.log('error', error));
    }

    return (
        <Fragment>
            <h1>Formulario de Login</h1>
            <form className="row" onSubmit={enviarDatos}>
                <div className="form-group p-3">
                    <input type="text" placeholder="User" className="form-control" onChange={handleInputChange} name="user"></input>
                </div>
                <div className="form-group p-3">
                    <input type="text" placeholder="Password" className="form-control" onChange={handleInputChange} name="pass"></input>
                </div>
                <div className="form-group p-3">
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </div>
            </form>
            
        </Fragment>
    );
}

export default Form;