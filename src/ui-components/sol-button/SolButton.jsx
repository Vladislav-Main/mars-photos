import React from 'react';
import PropTypes from 'prop-types';
import './sol-button.scss';

export const SolButton = ({ state, setState, name }) => {
  return (
    <button
      onClick={name === '+' ? () => setState(++state) : () => setState(--state)}
      className="solbtn-body"
      disabled={name === '-' && (state === '' || state === 0) ? true : false}
    >
      {name}
    </button>
  );
};

SolButton.propTypes = {
  state: PropTypes.number,
  setState: PropTypes.func,
  name: PropTypes.string,
};
