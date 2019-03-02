import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router';

import Navbutton from './Navbutton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <Navbutton exact label="nav button label" path="/some/path" />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
