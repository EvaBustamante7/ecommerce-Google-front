import React, { useState } from 'react'
import './css/Privacy.css';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer'

const Privacy = () => {
    const [cart] = useState([]);

    return (
        <>
            <Navbar size={cart.length} />
            
            <div className="privacy-policy">
                <h1>Política de Privacidad</h1>

                <p>
                    En [Google 3D Aesthetic], respetamos tu privacidad y estamos comprometidos a protegerla. Esta Política de Privacidad explica cómo recopilamos, usamos y protegemos tu información personal cuando visitas nuestro sitio web.
                </p>

                <h2>1. Información que recopilamos</h2>
                <p>
                    Nuestro museo virtual es un espacio donde la innovación y el arte convergen para ofrecerte una experiencia única. Podrás explorar las diferentes obras de arte, interactuar con ellas y descubrir nuevas perspectivas artísticas. ¡Bienvenido a este emocionante viaje artístico en nuestro museo virtual! Puedes experimentar una experiencia inmersiva única que combina arte, innovación y tecnología. Nuestro equipo de trabajo es un equipo pluridisciplinar, formado por cinco componentes amantes del arte. Nuestro equipo se encargará de ofrecer una amplia variedad de NFTs únicos diseñados por talentosos artistas 3D, así como otras formas de arte como pinturas, esculturas. Nos aseguraremos de brindar una experiencia excepcional a los clientes, permitiéndoles sumergirse en la colección de piezas digitales exclusivas o imprimir sus favoritas con materiales recomendados por los artistas. Si quieres conocer más sobre nosotros o tienes dudas, no dudes en contactar.
                </p>

                <h2>2. Cómo utilizamos tu información</h2>
                <p>
                    Utilizamos la información recopilada para crear una experiencia inmersiva en 3D en la que recrearemos una galería de arte con cuadros y esculturas. Esto requerirá el uso de tecnología avanzada y técnicas de diseño tridimensional. Crearemos réplicas digitales de las obras de arte, un espacio virtual que simule una galería de arte real y permitiremos interacciones para que los usuarios puedan explorar y obtener información sobre cada pieza. También agregaremos efectos de iluminación y sonido para mejorar la atmósfera y permitiremos a los usuarios interactuar y explorar la galería de arte en tiempo real con otros usuarios. Esto nos permitirá ofrecer una experiencia única que combina arte, innovación y tecnología.
                </p>

                <h2>3. Protección de Datos</h2>
                <p>
                    Tomamos medidas para garantizar la seguridad de tus datos personales. Implementamos medidas técnicas y organizativas para proteger la información contra accesos no autorizados o divulgaciones.
                </p>

                <h2>4. Compartir Datos</h2>
                <p>
                    No compartimos tus datos personales con terceros sin tu consentimiento, a menos que estemos legalmente obligados a hacerlo.
                </p>

                <h2>5. Seguridad de la información</h2>
                <p>
                    En [Google 3D Aesthetic], tomamos en serio la seguridad de tus datos personales. Hemos implementado medidas de seguridad técnicas, organizativas y administrativas para proteger la información del usuario contra accesos no autorizados, divulgación, alteración o destrucción no autorizada.
                </p>
                <p>
                    Algunas de las medidas de seguridad que hemos implementado incluyen, pero no se limitan a:
                </p>
                <ul>
                    <li>Control de acceso a los datos para garantizar que solo personal autorizado pueda acceder a ellos.</li>
                    <li>Encriptación de datos para proteger la confidencialidad de la información del usuario.</li>
                    <li>Protección contra amenazas cibernéticas, incluyendo medidas de detección y prevención de intrusiones.</li>
                    <li>Monitoreo constante de nuestros sistemas y redes para identificar y responder rápidamente a cualquier actividad sospechosa.</li>
                </ul>
                <p>
                    A pesar de nuestras mejores medidas de seguridad, es importante recordar que ninguna transmisión de datos por Internet o almacenamiento en línea es completamente segura. Siempre existe un riesgo residual asociado con la transmisión de información en línea. Si tienes alguna preocupación sobre la seguridad de tus datos personales, no dudes en ponerte en contacto con nosotros en [dirección de correo electrónico de contacto].
                </p>

                <h2>6. Cambios en esta política</h2>
                <p>
                    Nos reservamos el derecho de modificar esta Política de Privacidad en cualquier momento. Cualquier cambio será efectivo inmediatamente después de su publicación en nuestro sitio web. Te recomendamos que revises regularmente esta política para estar al tanto de cualquier actualización.
                </p>

                <h2>7. Póngase en contacto con nosotros</h2>
                <p>
                    Si tienes alguna pregunta o inquietud sobre nuestra política de privacidad, no dudes en ponerte en contacto con nosotros en [].
                </p>

                <p>Gracias por confiar en [Google 3D Aesthetic].</p>
            </div>
            <Footer />
        </>
    );

};
export default Privacy;