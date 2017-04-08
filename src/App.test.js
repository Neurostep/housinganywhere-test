import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

/* eslint react/jsx-filename-extension: 0 */
it('renders without crashing', () => {
  shallow(<App />);
});
