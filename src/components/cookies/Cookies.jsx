import React, { useState } from 'react'
import './css/Cookies.css';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer'

const Cookies = () => {
  const [cart] = useState([]);

  return (
    <>
      <Navbar size={cart.length} />

      <div className="cookie">
        <p>Política de Privacidad de Cookies</p>
        <p>Última actualización: [08/09/2023]</p>

        <h2>1. Introducción</h2>
        <p>
          Bienvenido a Google 3D Aesthetic ("Nuestro equipo de trabajo es un equipo pluridisciplinar , formado por cinco componentes amantes del arte . Nuestro equipo , se encargara de ofrecer una  una amplia variedad de NFTs únicos diseñados por talentosos artistas 3D, así como otras formas de arte como pinturas, esculturas. Nos aseguraremos de  brindar una experiencia excepcional a los clientes, permitiéndoles sumergirse en la colección de piezas digitales exclusivas o imprimir sus favoritas con materiales recomendados por los artistas. Si quieres conocer más sobre nosotros o tienes dudas, no dejes de contactar . "). En [Google 3D Aesthetic], nos comprometemos a proteger tu privacidad y garantizar una experiencia en línea segura y transparente. Esta Política de Privacidad de Cookies explica cómo utilizamos las cookies y otras tecnologías similares en nuestro sitio web.
        </p>

        <h2>2. ¿Qué son las cookies?</h2>
        <p>
          Las cookies son pequeños archivos de datos que se almacenan en tu dispositivo cuando visitas nuestro sitio web. Estas cookies nos ayudan a mejorar tu experiencia en línea y a comprender cómo utilizas nuestro sitio web. Pueden ser cookies de sesión (que se eliminan cuando cierras tu navegador) o cookies persistentes (que se almacenan en tu dispositivo durante un período de tiempo).
        </p>

        <h2>3. ¿Por qué utilizamos cookies?</h2>
        <p>
          Utilizamos cookies en [Google 3D Aesthetic] por las siguientes razones:
        </p>
        <ul>
          <p>
            <strong>Mejora de la experiencia del usuario:</strong> Utilizamos cookies para recordar tus preferencias y proporcionarte una experiencia personalizada en nuestro sitio web.
          </p>
          <p>
            <strong>Análisis y estadísticas:</strong> Utilizamos cookies para recopilar información sobre cómo los usuarios interactúan con nuestro sitio web, lo que nos ayuda a mejorar nuestro contenido y servicios.
          </p>
          <p>
            <strong>Publicidad personalizada:</strong> Podemos utilizar cookies para mostrar anuncios relevantes basados en tus intereses y actividades de navegación.
          </p>
        </ul>

        <h2>4. Tipos de cookies que utilizamos</h2>
        <p>
          <strong>Cookies esenciales:</strong> Estas cookies son necesarias para el funcionamiento básico del sitio web y no se pueden desactivar. Incluyen cookies de sesión y autenticación.
        </p>
        <p>
          <strong>Cookies de rendimiento:</strong> Estas cookies nos permiten recopilar datos sobre cómo los usuarios utilizan nuestro sitio web para mejorar su rendimiento y funcionalidad.
        </p>
        <p>
          <strong>Cookies de publicidad y seguimiento:</strong> Utilizamos estas cookies para proporcionarte anuncios personalizados y rastrear tu actividad de navegación en línea.
        </p>

        <h2>5. Control de cookies</h2>
        <p>
          Puedes administrar y controlar las cookies en tu navegador. La mayoría de los navegadores te permiten aceptar, rechazar o eliminar cookies. Ten en cuenta que la desactivación de cookies puede afectar la funcionalidad de nuestro sitio web.
        </p>

        <h2>6. Cambios en esta política</h2>
        <p>
          Nos reservamos el derecho de modificar esta Política de Privacidad de Cookies en cualquier momento. Cualquier cambio será efectivo inmediatamente después de su publicación en nuestro sitio web. Te recomendamos que revises regularmente esta política para estar al tanto de cualquier actualización.
        </p>

        <h2>7. Póngase en contacto con nosotros</h2>
        <p>
          Si tienes alguna pregunta o inquietud sobre nuestra política de privacidad de cookies, no dudes en ponerte en contacto con nosotros en [dirección de correo electrónico de contacto].
        </p>

        <p>Gracias por visitar Google 3D Aesthetic y confiar en nosotros para proteger tu privacidad en línea.</p>

      </div>

      <Footer />
    </>
  );

};
export default Cookies;