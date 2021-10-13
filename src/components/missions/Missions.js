/* eslint no-unused-vars : "off" */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HeaderMission from './HeaderMission.js';
import BodyMission from './BodyMission.js';

const Missions = () => {
  const { missions } = useSelector((state) => state).missions;

  const dispatch = useDispatch();

  return (
    <section>
      <table>
        <HeaderMission />
        < BodyMission />
      </table>
    </section>
  );
};

export default Missions;