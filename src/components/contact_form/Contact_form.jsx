import React, { useRef } from 'react';
import './css/Contact_form.css';
import ReCAPTCHA from 'react-google-recaptcha';

const ContactForm = () => {
  const captcha = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (captcha.current.getValue()) {
      alert('¡Gracias, tu mensaje ha sido enviado!');
      captcha.current.reset(); // Reiniciar el reCAPTCHA
      e.target.reset(); // Reiniciar el formulario después del envío
    } else {
      alert('Por favor, verifica que eres humano');
    }
  };

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input type='text' />
        <label>Email</label>
        <input type='email' />
        <label>Título</label>
        <input type='text' />
        <label>Mensaje</label>
        <textarea rows='6' placeholder='Escribe aquí tu mensaje' />
        <div className='recaptcha'>
          <ReCAPTCHA
            ref={captcha}
            sitekey='6LcHSjEmAAAAADpYYDwgZFzzNw5nBlrt5VfXFiVc'
          />
        </div>
        <button className='btn' type='submit'>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactForm;