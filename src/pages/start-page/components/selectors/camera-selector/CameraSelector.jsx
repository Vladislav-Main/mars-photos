import './camera-selector.scss';
import PropTypes from 'prop-types';
import { CameraButton } from '../../../../../ui-components/camera-button/CameraButton';

export const CameraSelector = ({ cameras, state, setState }) => {
  return (
    <div className="camera-body">
      {cameras ? (
        cameras.map((camera, index) => {
          return (
            <CameraButton
              value={camera.value}
              name={camera.name}
              state={state}
              setState={setState}
              key={index}
            />
          );
        })
      ) : (
        <div className="camera-title">
          <i>Choose the rover to review cameras.</i>
        </div>
      )}
    </div>
  );
};

CameraSelector.propTypes = {
  cameras: PropTypes.array,
  state: PropTypes.string,
  setState: PropTypes.func,
};
