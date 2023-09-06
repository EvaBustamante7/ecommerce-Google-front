import React, { Fragment, useState } from 'react';
import { urlLogin } from '../../Servicies/urls';
import './css/Logreg.css'

const Reg = () => {
    const [datos, setDatos] = useState({
        user: '',
        pass: '',
        agreeTerms: '',
        name: '',
        last_name: ''
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
        console.log('enviando datos...' + datos.user + ' ' + datos.pass + ' ' + datos.name + ' ' + datos.last_name)
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        //myHeaders.append("Cookie", "Authorization=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2ODA1Mjk0NjQsImV4cCI6MTY4MDUzMzA2NCwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiY3Jpcy5tc2ZAZ21haWwuY29tIn0.rBvV96T2Y0tcPDpeybpQPVjHx7aY78wpPsnhlkIHKwTjgIWMCrHzWJkbqZATK2YenTN_dTAyKxYNYLN-5DB8BwyIei3nXfhgYJiWxc7M2lNq_gMib7hqoHRhk1uqcsWP_Ex9dfIqaWrQWKPo3fUd6Jlgu4QQJ-SlF6JZbTShpgEjf4fSOVrFmNc15bUwUxsctGigFrZ0YWTVYlEaDuFJj1bOtI47vbPRSLEHAsX88rdpCQOikrxEx545BRsmpoB9-YBxpuRAc7RyMVcEF08WY10h1VHSTsSvNps9PNImLMd95FZuRPpE5DL511WvlwhY4ytpyfXq5UQy9_5QyJGxhg; BEARER=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2ODA1Mjk0NjQsImV4cCI6MTY4MDUzMzA2NCwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiY3Jpcy5tc2ZAZ21haWwuY29tIn0.rBvV96T2Y0tcPDpeybpQPVjHx7aY78wpPsnhlkIHKwTjgIWMCrHzWJkbqZATK2YenTN_dTAyKxYNYLN-5DB8BwyIei3nXfhgYJiWxc7M2lNq_gMib7hqoHRhk1uqcsWP_Ex9dfIqaWrQWKPo3fUd6Jlgu4QQJ-SlF6JZbTShpgEjf4fSOVrFmNc15bUwUxsctGigFrZ0YWTVYlEaDuFJj1bOtI47vbPRSLEHAsX88rdpCQOikrxEx545BRsmpoB9-YBxpuRAc7RyMVcEF08WY10h1VHSTsSvNps9PNImLMd95FZuRPpE5DL511WvlwhY4ytpyfXq5UQy9_5QyJGxhg");

        var raw = JSON.stringify({
            "email": datos.user,
            "password": datos.pass,
            "name": datos.name,
            "last_name": datos.last_name,


        });
        // var raw = JSON.stringify({
        //     "email": "pep0@hotmail.com",
        //     "password": "000000"
        //   });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',

        };

        function saveToken(result) {

            console.log(result)
            console.log("estoy en savetoken despues del consolelog result")
            //localStorage.setItem('token', token);
            alert('Usuario creado')
        }

        fetch(urlLogin + "/token/register", requestOptions)
            //.then(response => console.log(response))
            .then(response => response.text())
            .then(result => saveToken(result))
            .catch(error => console.log('error', error));
    }

    return (
        <Fragment>
            <div className='container'>
                <div className='screen'>
                    <div className='screen__content'>
                        <form className="login" onSubmit={enviarDatos}>
                            <div className="login__field">
                                <input type="text" placeholder="User" className="login__input" onChange={handleInputChange} name="user"></input>
                            </div>
                            <div className="login__field">
                                <input type="text" placeholder="Password" className="login__input" onChange={handleInputChange} name="pass"></input>
                            </div>
                            <div className="login__field">
                                <input type="text" placeholder="Name" className="login__input" onChange={handleInputChange} name="name"></input>
                            </div>
                            <div className="login__field">
                                <input type="text" placeholder="Last Name" className="login__input" onChange={handleInputChange} name="last_name"></input>
                            </div>
                            <div className="login__field">
                                <label>
                                    <input type="checkbox" onChange={handleInputChange} name="agreeTerms" />
                                    Acepto los términos y condiciones
                                </label>
                            </div>
                            <div className="form-group p-3">
                                <button type="submit" className="login__submit">Enviar</button>
                            </div>
                        </form>
                    </div>
                    <div className='screen__background'>
                        <span className='screen__background__shape screen__background__shape1'></span>
                        <span className='screen__background__shape screen__background__shape2'></span>
                        <span className='screen__background__shape screen__background__shape3'></span>
                        <span className='screen__background__shape screen__background__shape4'></span>
                    </div>
                </div>
            </div>
        </Fragment >
    );
}

export default Reg;