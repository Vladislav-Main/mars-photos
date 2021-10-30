import React from 'react';
import PropTypes from 'prop-types';

import './sol-selector.scss';
import { SolButton } from '../../../../../ui-components/sol-button/SolButton';

export const SolSelector = ({ state, setState }) => {
  return (
    <>
      <div className="sol-body">
        <div className="main-body">
          <div className="sol-btn">
            <SolButton state={state} setState={setState} name="-" />
          </div>

          <div className="sol-display">
            <h3 className="sol-title">{state}</h3>
          </div>
          <div className="sol-btn">
            <SolButton state={state} setState={setState} name="+" />
          </div>
        </div>
        <div className="sol-input">
          <input
            type="number"
            value={state}
            min="1"
            placeholder="enter sol here..."
            className="sol-input__body"
            onChange={(e) => setState(e.target.value)}
          />
        </div>
      </div>
    </>
  );
};

SolSelector.propTypes = { state: PropTypes.number, setState: PropTypes.func };
