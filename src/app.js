require('./styles/main.scss');
require.context('./', true, /^\.\/.*\.html/);

require('es6-promise').polyfill();

import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/Hello';

axios.defaults.baseURL = 'localhost:3000/api';

ReactDOM.render(
  <Hello name='World' />,
  document.getElementById('app')
);