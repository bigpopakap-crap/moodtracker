import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router';

import DashboardPage from './DashboardPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <DashboardPage />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
