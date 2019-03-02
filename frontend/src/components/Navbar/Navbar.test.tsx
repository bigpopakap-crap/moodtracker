import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router';

import Navbar, { NavbarPosition } from './Navbar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <Navbar position={NavbarPosition.BOTTOM} />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
