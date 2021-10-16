import TestRenderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect.js';
import { Provider } from 'react-redux';
import store from '../../redux/configStore.js';
import ProfileMissionsDisplay from '../ProfileMissionsDisplay.js';

describe('Render the missions list in profile page', () => {
  it('Renders the missions list in profile page correctly', () => {
    const missionsList = TestRenderer.create(
        <Provider store={store}>
          <ProfileMissionsDisplay />
        </Provider>,
    ).toJSON();
    expect(missionsList).toMatchSnapshot();
  });
});