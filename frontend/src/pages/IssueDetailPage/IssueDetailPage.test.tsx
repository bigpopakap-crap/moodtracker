import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router';

import IssueDetailPage from './IssueDetailPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <IssueDetailPage />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
