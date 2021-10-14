/* eslint-disable no-unused-vars */
import React from 'react';
import ProfileRocketsDisplay from './ProfileRocketsDisplay.js';
import ProfileMissionsDisplay from './ProfileMissionsDisplay.js';

const Profile = () => {
  const r = '';
  return (
    <div>
      <div className='profile-section'>
        <div className='my-missions-profile'>
          <h2 className='profile-headers'>My Missions</h2>
          <ProfileMissionsDisplay />
        </div>
        <div className='my-rockets-profile'>
          <h2 className='profile-headers'>My Rockets</h2>
          <ProfileRocketsDisplay />
        </div>
      </div>
    </div>
  );
};

export default Profile;