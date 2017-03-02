// @flow
import './index.css';

// game state model
import Store from './redux/Store';

// phaser view
import Game from './phaser/Game';
Game.state.start('GameState');

// react view
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './react/App.react';

ReactDOM.render(
  <Provider store={Store}><App /></Provider>,
  document.getElementById('root'),
);
