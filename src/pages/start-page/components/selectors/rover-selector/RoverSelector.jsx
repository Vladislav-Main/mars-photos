import React from 'react';
import PropTypes from 'prop-types';

import { ucFirst } from '../../../../../functions/ucFirst';
import './rover-selector.scss';

export const RoverSelector = ({ rovers, state, setState }) => {
  return (
    <>
      {rovers.map((rover) => {
        return (
          <button
            className={rover.name === state ? 'rover-btn__active' : 'rover-btn'}
            onClick={() => {
              setState(rover.name);
            }}
            key={rover.id}
          >
            <img className="rover-img" src={rover.img} alt={rover.name} />
            <h3
              className={
                rover.name === state ? 'rover-title__active' : 'rover-title'
              }
            >
              {ucFirst(rover.name)}
            </h3>
          </button>
        );
      })}
    </>
  );
};

RoverSelector.propTypes = {
  rovers: PropTypes.array,
  state: PropTypes.string,
  setState: PropTypes.func,
};
