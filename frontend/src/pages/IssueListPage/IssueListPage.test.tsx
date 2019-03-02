import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router';

import IssueListPage from './IssueListPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <IssueListPage />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
