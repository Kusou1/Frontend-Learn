import React from 'react';
import ReactDOM from 'react-dom';
import componentOne from './componentOne';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<componentOne />, div);
  ReactDOM.unmountComponentAtNode(div);
});
