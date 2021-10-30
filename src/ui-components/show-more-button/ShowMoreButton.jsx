import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './show-more-button.scss';

export const ShowMoreButton = ({ state, setState, name }) => {
  const ua = navigator.userAgent;
  const newValue = ua.includes('iPhone') || ua.includes('Android') ? 2 : 6;

  const morePhotosRef = useRef(null);
  const scrollToBottom = () => {
    morePhotosRef.current.scrollIntoView({
      behavior: 'smooth',
    });
  };
  useEffect(() => {
    scrollToBottom();
  }, [state]);
  return (
    <button
      onClick={() => setState((prevState) => prevState + newValue)}
      className="morebtn-body"
      ref={morePhotosRef}
    >
      {name}
    </button>
  );
};

ShowMoreButton.propTypes = {
  state: PropTypes.number,
  setState: PropTypes.func,
  name: PropTypes.string,
};
