/* eslint no-unused-vars : 'off' */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getRocket,
  reserveRocket,
  unreserveRocket,
} from '../redux/rockets/rockets.js';

const RocketsCards = () => {
  const dispatch = useDispatch();
  const fetchApi = 'https://api.spacexdata.com/v3/rockets';

  const myRocketArray = useSelector((state) => state.rockets);

  useEffect(() => {
    const apiRockets = async () => {
      const fetchRockets = await fetch(fetchApi);
      const rockets = await fetchRockets.json();
      return dispatch(getRocket(rockets));
    };
    if (myRocketArray.length === 0) {
      apiRockets();
    }
  }, []);

  const reserveRockets = (e) => {
    dispatch(reserveRocket(e.target.id));
  };

  const unReserveRockets = (e) => {
    dispatch(unreserveRocket(e.target.id));
  };

  return (
    <div className='rocket-card'>
      {myRocketArray.map((rocket) => (
        <div key={rocket.id} className='rockets-div'>
          <div className='rocket-imgs'>
            <img
              src={rocket.flickr_images}
              alt={rocket.rocket_name}
              width='300'
              height='200'
              className='header-logo'
              className='rocket-img'
            />
          </div>
          <div className='rockets-desc'>
            <h3 className='rockets-desc-title'>{rocket.rocket_name}</h3>
            <p className='rockets-desc-p'>
              {rocket.reserved ? <button className='reserved-span'>Reserved</button> : null}
              {rocket.description}
            </p>
            {rocket.reserved ? (
              <button
                type='button'
                onClick={unReserveRockets}
                id={rocket.id}
                className='unreserve-btn'
              >
                Cancel Reservation
              </button>
            ) : (
              <button
              type='button'
              className='rockets-desc-btn'
              onClick={reserveRockets}
              id={rocket.id}
            >
              Reserve Rocket
            </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RocketsCards;
