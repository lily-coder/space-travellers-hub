import TestRenderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect.js';
import { Provider } from 'react-redux';
import store from '../../redux/configStore.js';
import ProfileMissionsDisplay from '../ProfileMissionsDisplay.js';
import ProfileRocketsDisplay from '../ProfileRocketsDisplay.js';

describe('Render the rockets and profile list', () => {
  it('Renders the rockets and profile list correctly', () => {
    const rockets = TestRenderer.create(
        <Provider store={store}>
          <ProfileMissionsDisplay />
          <ProfileRocketsDisplay />
        </Provider>,
    ).toJSON();
    expect(rockets).toMatchSnapshot();
  });
});