import React from 'react';
import PropTypes from 'prop-types';
import './camera-button.scss';

export const CameraButton = ({ value, name, state, setState }) => {
  return (
    <button
      value={value}
      className={value === state ? 'btn-body__active' : 'btn-body'}
      onClick={(e) => setState(e.target.value)}
    >
      {name}
    </button>
  );
};

CameraButton.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
  state: PropTypes.string,
  setState: PropTypes.func,
};
