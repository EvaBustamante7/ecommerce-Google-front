import React, { Fragment, useState } from 'react';
import { urlLogin } from '../../Servicies/urls';
import { FaUser, FaLock, FaChevronRight, FaDotCircle, FaEye, FaEyeSlash } from 'react-icons/fa';
import './css/Logreg.css'


const Reg = () => {
    const [datos, setDatos] = useState({
        user: '',
        pass: '',
        agreeTerms: '',
        name: '',
        last_name: ''
    })

    const [errors, setErrors] = useState({
        userError: '',
        passError: '',
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        });

        if (event.target.name === 'user') {
            setErrors({
                ...errors,
                userError: event.target.value ? '' : 'Debes ingresar un usuario.',
            });
        }

        if (event.target.name === 'pass') {
            if (!event.target.value) {
                setErrors({
                    ...errors,
                    passError: 'Debes ingresar una contraseña.',
                });
            } else if (!/(?=.*[A-Z])(?=.*\d)/.test(event.target.value)) {
                setErrors({
                    ...errors,
                    passError: 'La contraseña debe contener al menos una mayúscula y un número.',
                });
            } else {
                setErrors({
                    ...errors,
                    passError: '',
                });
            }
        }

        if (event.target.name === 'name') {
            setErrors({
                ...errors,
                nameError: event.target.value ? '' : 'Debes ingresar tu nombre.',
            });
        }
        if (event.target.name === 'last_name') {
            setErrors({
                ...errors,
                lastnameError: event.target.value ? '' : 'Debes ingresar tu apellido.',
            });
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const enviarDatos = (event) => {
        event.preventDefault()
        console.log('enviando datos...' + datos.user + ' ' + datos.pass + ' ' + datos.name + ' ' + datos.last_name)
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "email": datos.user,
            "password": datos.pass,
            "name": datos.name,
            "last_name": datos.last_name,


        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',

        };

        function saveToken(result) {

            console.log(result)
            console.log("estoy en savetoken despues del consolelog result")
            alert('Usuario creado')
        }

        fetch(urlLogin + "/token/register", requestOptions)
            .then(response => response.text())
            .then(result => saveToken(result))
            .catch(error => console.log('error', error));
    }

    return (
        <Fragment>
            <div className='container'>
                <div className='screen__reg'>
                    <div className='screen__content'>
                        <form className="reg" onSubmit={enviarDatos}>
                            <div className="login__field">
                                <span className='login__icon'>
                                    <FaUser />
                                </span>
                                <input type="email" placeholder="User" className="login__input" onChange={handleInputChange} name="user" />
                                {errors.userError && <p className='error'>{errors.userError}</p>}
                            </div>
                            <div className="login__field">
                                <span className='login__icon'>
                                    <FaLock />
                                </span>
                                <div className='password-input'>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder='Password'
                                        className='login__input'
                                        onChange={handleInputChange}
                                        name='pass'
                                    />
                                    {showPassword ? (
                                        <FaEyeSlash onClick={togglePasswordVisibility} />
                                    ) : (
                                        <FaEye onClick={togglePasswordVisibility} />
                                    )}
                                </div>
                                {errors.userError && <p className='error'>{errors.passError}</p>}
                            </div>
                            <div className="login__field">
                                <span className='login__icon'>
                                    <FaDotCircle />
                                </span>
                                <input type="text" placeholder="Name" className="login__input" onChange={handleInputChange} name="name" />
                                {errors.userError && <p className='error'>{errors.nameError}</p>}
                            </div>
                            <div className="login__field">
                                <span className='login__icon'>
                                    <FaDotCircle />
                                </span>
                                <input type="text" placeholder="Last Name" className="login__input" onChange={handleInputChange} name="last_name" />
                                {errors.userError && <p className='error'>{errors.lastnameError}</p>}
                            </div>
                            <div className="login__field">
                                <label>
                                    <input type="checkbox" onChange={handleInputChange} name="agreeTerms" />
                                    Acepto los términos y condiciones
                                </label>
                            </div>
                            <div className="form-group p-3">
                                <button type="submit" className="login__submit">Enviar<span className='button__icon'>
                                    <FaChevronRight />
                                </span></button>
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