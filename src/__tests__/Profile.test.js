import TestRenderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect.js';
import { Provider } from 'react-redux';
import store from '../redux/configStore.js';
import ProfileMissionsDisplay from '../components/ProfileMissionsDisplay.js';
import ProfileRocketsDisplay from '../components/ProfileRocketsDisplay.js';

describe('Render the rockets and profile list', () => {
  it('Renders the rockets and profile list correctly', () => {
    const rockt = {
      id: 22,
      rocket_name: 'one',
      description: 'a rocket',
      flickr_images: 'https://imgur.com/DaCfMsj.jpg',
      reserved: true,
    };
    const mission = {
      id: 2,
      mission_name: 'one',
      description: 'a mission',
      joined: true,
    };
    const rockets = TestRenderer.create(
        <Provider store={store}>
          <ProfileMissionsDisplay key={mission.id} missions={mission}/>
          <ProfileRocketsDisplay key={rockt.id} rockets={rockt}/>
        </Provider>,
    ).toJSON();
    expect(rockets).toMatchSnapshot();
  });
});