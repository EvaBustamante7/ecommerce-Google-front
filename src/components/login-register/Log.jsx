import React, { Fragment, useState } from 'react';
import { urlLogin } from '../../Servicies/urls';
import './css/Logreg.css';
import { FaUser, FaLock, FaChevronRight } from 'react-icons/fa';

const Log = () => {
  const [datos, setDatos] = useState({
    user: '',
    pass: '',
    agreeTerms: true
  });

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value
    });
  };

  const enviarDatos = (event) => {
    event.preventDefault();

    var raw = JSON.stringify({
      username: datos.user,
      password: datos.pass
    });

    function saveToken(result) {
      var token = JSON.parse(result).token;
      localStorage.setItem('token', token);
      alert('Acceso concedido y token guardado en localStorage');
    }

    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(urlLogin + '/api/login_check', requestOptions)
      .then((response) => response.text())
      .then((result) => saveToken(result))
      .catch((error) => console.log('error', error));
  };

  return (
    <Fragment>
      <div className='container'>
        <div className='screen'>
          <div className='screen__content'>
            <form className='login'>
              <div className='login__field'>
                <span className='login__icon'>
                <FaUser />
                </span>
                <input
                  type='email'
                  placeholder='User'
                  className='login__input'
                  onChange={handleInputChange}
                  name='user'
                />
              </div>
              <div className='login__field'>
                <span className='login__icon'>
                  <FaLock/>
                </span>
                <input
                  type='password'
                  placeholder='Password'
                  className='login__input'
                  onChange={handleInputChange}
                  name='pass'
                />
              </div>
              <button
                type='submit'
                className='login__submit'
                onClick={enviarDatos}
              >
                Log In
                <span className='button__icon'>
                  <FaChevronRight/>
                </span>
              </button>
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
    </Fragment>
  );
};

export default Log;
