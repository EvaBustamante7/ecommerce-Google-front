import React, {Fragment, useState} from 'react';
import {urlLogin} from '../../Servicies/urls';


const Form = () => {
    const [datos, setDatos] = useState({
        user: '',
        pass: ''
    })

    const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        console.log('enviando datos...' + datos.user + ' ' + datos.pass)
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
       // myHeaders.append("Cookie", "Authorization=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2OTI4MjE2MDMsImV4cCI6MTY5MjgyNTIwMywicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoicGVwZUBob3RtYWlsLmNvbSJ9.josQRblVEh8fC9snZiS0FlrhediURIITNSKR90LcRlOc7R5_-hCVP90YHMgIeM2jizq0hPmhGtOcl1WwsOhOf4ZMok0wXBUJKSEhQ_FCy4CosGWQUrrd0K1zK7O2oLVEvqLb73WvvyhUypCwQ0f9xbjogFcpzN8Rsf8LGXlWced5Hko49KsElv5V64GcxmE37IIXtucu-C0zAjuxwkGrDwj188s6r_-W-mAQCztOMBePKjwDDivjDs2K3Vr1Pm66tekQ3oanCspYqd4l_GTiDSfNiaS3nBVFaApEDP_Nl38Dh4K-dLXvRZiVgoog_-LZ40l5vYF5j5ZhCHx9CZjKaw");

        var raw = JSON.stringify({
            "username": datos.user,
            "password": datos.pass
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        function saveToken(result) {
            //console.log(result)
            var token = JSON.parse(result).token;
            console.log(token);
            localStorage.setItem('token', token);
            alert('Acceso concedido y token guardado en localStorage')
            // Ya meter un token: authToken
        }

        fetch(urlLogin+"/api/login_check", requestOptions)
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
            {/*<ul>
                <li>{datos.nombre}</li>
                <li>{datos.apellido}</li>
            </ul>*/}
        </Fragment>
    );
}
 
export default Form;