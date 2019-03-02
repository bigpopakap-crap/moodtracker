import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router';

import MoodCreatePage from './MoodCreatePage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <MoodCreatePage />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
