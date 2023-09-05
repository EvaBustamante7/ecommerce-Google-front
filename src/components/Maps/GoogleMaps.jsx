import React from 'react';
import './css/GoogleMaps.css';
class GoogleMaps extends React.Component {
    render() {
        return (
            <div className="map-container">
                <iframe
                    title="Google Maps"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12154.191901078042!2d-3.6998042!3d40.3967099!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42276cf3d4b369%3A0x87da8fb573395cad!2sFactor%C3%ADa%20F5!5e0!3m2!1ses!2ses!4v1693829181266!5m2!1ses!2ses"
                    width="800"
                    height="600"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        );
    }
}
export default GoogleMaps;


