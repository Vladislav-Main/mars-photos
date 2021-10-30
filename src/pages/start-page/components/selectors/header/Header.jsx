import React from 'react';
import './header.scss';
import logo from '../../../../../img/Union.png';

export const Header = () => {
  return (
    <>
      <div className="header-block__title-block">
        <h2 className="header-block__title">Mars Rover Photos</h2>
      </div>
      <div className="header-block__logo-block">
        <img src={logo} alt="logo" className="header-block__img" />
      </div>
    </>
  );
};
