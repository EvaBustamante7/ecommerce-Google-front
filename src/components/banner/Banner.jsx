import React from 'react';
import PropTypes from 'prop-types';
import './css/Banner.css';

const Banner = ({ title, message, imageUrl }) => {
  return (
    <div className="banner">
      <div className="banner-content">
        <div className="banner-text">
          <h1 className="banner-title">{title}</h1>
          <p className="banner-message">{message}</p>
        </div>
        <div className="banner-image">
          <img src={imageUrl} alt="Banner" />
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};
export default Banner;
