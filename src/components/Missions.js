/* eslint-disable no-unused-vars */
import { React, useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import MissionsList from '../pages/MissionsList.js';
import { fetchDataRequest } from '../redux/missions/missions.js';

const Missions = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDataRequest());
  }, []);
  return (
    <></>
  );
};

export default Missions;
