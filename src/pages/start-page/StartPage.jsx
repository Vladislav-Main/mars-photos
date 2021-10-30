import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Card } from './components/card/Card';
import { getPhotos, selectAllPhotos } from './startPageSlice';

import curiosity from '../../img/curiosity.png';
import opportunity from '../../img/opportunity.png';
import spirit from '../../img/spirit.png';

import './start-page.scss';
import { RoverSelector } from './components/selectors/rover-selector/RoverSelector';
import { SolSelector } from './components/selectors/sol-selector/SolSelector';
import { CameraSelector } from './components/selectors/camera-selector/CameraSelector';
import { Header } from './components/selectors/header/Header';
import { ShowMoreButton } from '../../ui-components/show-more-button/ShowMoreButton';
import { Loader } from './components/loader/Loader';

export const StartPage = () => {
  const dispatch = useDispatch();
  const [rover, setRover] = useState('');
  const [sol, setSol] = useState(null);
  const [camera, setCamera] = useState('');
  const [value, setValue] = useState(6);

  const data = useSelector(selectAllPhotos);

  const status = useSelector((state) => state.photos.status);

  const rovers = [
    {
      id: 1,
      name: 'opportunity',
      img: opportunity,
      cameras: [
        { name: 'Front Hazard Avoidance Camera', value: 'fhaz' },
        { name: 'Rear Hazard Avoidance Camera', value: 'rhaz' },
        { name: 'Navigation Camera', value: 'navcam' },
        { name: 'Panoramic Camera', value: 'pancam' },
        {
          name: 'Miniature Thermal Emission Spectrometer (Mini-TES)',
          value: 'minites',
        },
      ],
    },
    {
      id: 2,
      name: 'curiosity',
      img: curiosity,
      cameras: [
        { name: 'Front Hazard Avoidance Camera', value: 'fhaz' },
        { name: 'Rear Hazard Avoidance Camera', value: 'rhaz' },
        { name: 'Navigation Camera', value: 'navcam' },
        { name: 'Mast Camera', value: 'mast' },
        { name: 'Chemistry and Camera Complex', value: 'chemcam' },
        { name: 'Mars Hand Lens Imager', value: 'mahli' },
        { name: 'Mars Descent Imager', value: 'mardi' },
      ],
    },
    {
      id: 3,
      name: 'spirit',
      img: spirit,
      cameras: [
        { name: 'Front Hazard Avoidance Camera', value: 'fhaz' },
        { name: 'Rear Hazard Avoidance Camera', value: 'rhaz' },
        { name: 'Navigation Camera', value: 'navcam' },
        { name: 'Panoramic Camera', value: 'pancam' },
        {
          name: 'Miniature Thermal Emission Spectrometer (Mini-TES)',
          value: 'minites',
        },
      ],
    },
  ];

  const roversFilter = rovers.filter((item) => item.name === rover);
  const camerasArray = roversFilter.map((item) => item.cameras);

  useEffect(() => {
    if (rover && sol && camera) {
      dispatch(getPhotos({ rover, sol, camera }));
    }
    setValue(6);
  }, [rover, sol, camera, dispatch]);

  return (
    <div className="wrapper-body">
      <header className="wrapper-body__header-block header-block _container">
        <Header />
      </header>
      <div className="wrapper-body__body-block body-block _container">
        <div className="body-block__selector-container selector-container">
          <div className="selector-container__title-block">
            <h2 className="title">
              Choose the rover, sol and camera to see photos.
            </h2>
          </div>
          <div className="selector-container__main-block main-block">
            <div className="main-block__rover-block rover-block">
              <div className="rover-block__rover-selector">
                <RoverSelector
                  rovers={rovers}
                  state={rover}
                  setState={setRover}
                />
              </div>
              <div className="rover-block__camera-selector">
                <CameraSelector
                  cameras={roversFilter ? camerasArray[0] : ''}
                  state={camera}
                  setState={setCamera}
                />
              </div>
            </div>
            <div className="main-block__sol-block">
              <div className="main-block__sol-selector">
                <SolSelector state={sol} setState={setSol} />
              </div>
            </div>
          </div>
        </div>
        <div className="body-block__cards-container cards-container _container">
          {status === 'loading' ? (
            <div className="cards-container__note">
              <Loader />
            </div>
          ) : status === 'success' && data.length === 0 ? (
            <div className="cards-container__note">
              <span>
                Unfortunately there are no photos :(
                <p>Please choose another variant!</p>
              </span>
            </div>
          ) : status === 'failed' ? (
            <div className="cards-container__note">
              <span> Oops, something went wrong ):</span>
            </div>
          ) : data && data.length < 6 ? (
            <div className="cards-container__cards-block">
              {data.slice(0, value).map((item, index) => {
                return <Card item={item} key={index} />;
              })}
            </div>
          ) : data ? (
            value < data.length ? (
              <>
                <div className="cards-container__cards-block">
                  {data.slice(0, value).map((item, index) => {
                    return <Card item={item} key={index} />;
                  })}
                </div>
                <div className="cards-container__button-block">
                  <ShowMoreButton
                    state={value}
                    setState={setValue}
                    name="Show more..."
                  />
                </div>
              </>
            ) : (
              <>
                <div className="cards-container__cards-block">
                  {data.slice(0, value).map((item, index) => {
                    return <Card item={item} key={index} />;
                  })}
                </div>
              </>
            )
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};
