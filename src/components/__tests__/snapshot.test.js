/* eslint-disable no-unused-vars */
import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import Rockets from '../Rockets.js';
import Missions from '../Missions.js';
import Profile from '../Profile.js';
import Header from '../Header.js';
import store from '../../redux/configStore.js';

describe('Render the rockets list', () => {
  it('Renders the rockets in the rockets page', () => {
    const rockets = TestRenderer.create(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    ).toJSON();
    expect(rockets).toMatchSnapshot();
  });
});

describe('Render the missions list', () => {
  it('Renders the Missions in the missions page', () => {
    const missions = TestRenderer.create(
      <Provider store={store}>
        <Missions />
      </Provider>,
    ).toJSON();
    expect(missions).toMatchSnapshot();
  });
});

describe('Render the missions lists', () => {
  it('Renders the rockets and missions in profile page', () => {
    const profile = TestRenderer.create(
      <Provider store={store}>
        <Profile />
      </Provider>,
    ).toJSON();
    expect(profile).toMatchSnapshot();
  });
});

describe('Render the Navbar', () => {
  it('Renders the navbar', () => {
    const header = TestRenderer.create(
      <Provider store={store}>
        <Router>
          <Header />
        </Router>
      </Provider>,
    ).toJSON();
    expect(header).toMatchSnapshot();
  });
});