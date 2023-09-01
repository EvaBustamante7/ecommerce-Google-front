import React from 'react';
import LoginForm from '../components/login/LoginForm';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

function Login() {
  return (
    <>
      <Navbar/>
      <LoginForm />
      <Footer />
    </>
  );
}

export default Login;
