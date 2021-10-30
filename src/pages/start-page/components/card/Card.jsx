import React from 'react';
import PropTypes from 'prop-types';
import './card.scss';

export const Card = ({ item }) => {
  return (
    <div className="card-body" key={item.id}>
      <img src={item.img_src} alt="marsPhoto" className="card-body__img" />
    </div>
  );
};

Card.propTypes = { item: PropTypes.object };
