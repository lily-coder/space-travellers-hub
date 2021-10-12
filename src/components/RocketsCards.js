/* eslint no-unused-vars : 'off' */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getRocket } from '../redux/rockets/rockets.js';

const RocketsCards = () => {
  const dispatch = useDispatch();
  const fetchApi = 'https://api.spacexdata.com/v3/rockets';

  useEffect(() => {
    const apiRockets = async () => {
      const fetchRockets = await fetch(fetchApi);
      const rockets = await fetchRockets.json();
      return dispatch(getRocket(rockets));
    };
    apiRockets();
  }, []);

  return (
    <div>
      <div>
        <img src='' className='rocket-img' />
      </div>
      <div>
        <h4>Rocket Name</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis interdum
          dolor et tortor mattis pellentesque. Aliquam aliquet mollis felis,
          malesuada commodo nisl congue sit amet. Nullam mauris elit, posuere
          sed facilisis quis, dictum imperdiet augue
        </p>
        <button>Reserve</button>
      </div>
    </div>
  );
};

export default RocketsCards;
