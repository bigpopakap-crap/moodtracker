import React from 'react';
import ReactDOM from 'react-dom';

import MoodInputForm from './MoodInputForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MoodInputForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
