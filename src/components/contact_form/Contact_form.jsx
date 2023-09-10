import React, { Fragment, useRef } from 'react';
import {  FaDotCircle } from 'react-icons/fa';
import ReCAPTCHA from 'react-google-recaptcha';
import './css/Contact_form.css'; 

const ContactForm = () => {
  const captcha = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (captcha.current.getValue()) {
      alert('¡Gracias, tu mensaje ha sido enviado!');
      captcha.current.reset(); 
      e.target.reset(); 
    } else {
      alert('Por favor, verifica que eres humano');
    }
  };

  return (
    <Fragment>
      <div className='container'>
        <div className='screen__contact'>
          <div className='screen__content'>
            <form className='contact' onSubmit={handleSubmit}>
              <div className='login__field'>
                <span className='login__icon'>
                  <FaDotCircle />
                </span>
                <input type='text' placeholder="Nombre" className='login__input' />
              </div>
              <div className='login__field'>
                <span className='login__icon'>
                  <FaDotCircle />
                </span>
                <input type='email' placeholder="Email" className='login__input' />
              </div>
              <div className='login__field'>
              <span className='login__icon'>
                  <FaDotCircle />
                </span>
                <input type='text' placeholder="Título"  className='login__input' />
              </div>
              <div className='login__field'>
              <span className='login__icon'>
                  <FaDotCircle />
                </span>
                <textarea rows='6' placeholder='Escribe aquí tu mensaje' className='login__input' />
              </div>
              <div className='recaptcha'>
                <ReCAPTCHA
                  ref={captcha}
                  sitekey='6LcHSjEmAAAAADpYYDwgZFzzNw5nBlrt5VfXFiVc'
                />
              </div>
              <button className='login__submit' type='submit'>
                Enviar
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

export default ContactForm;
