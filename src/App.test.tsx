import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

test('Renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);

  expect(div.innerHTML).toContain('Hey there!');

  ReactDOM.unmountComponentAtNode(div);
});
