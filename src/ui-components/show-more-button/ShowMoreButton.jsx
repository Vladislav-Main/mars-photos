import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './show-more-button.scss';

export const ShowMoreButton = ({ state, setState, name }) => {
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
      onClick={() => setState((prevState) => prevState + 6)}
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
