import React from 'react';
import ReactDOM from 'react-dom';
import BruVueApp from './components/BruVueApp';
import 'normalize.css/normalize.css';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<BruVueApp browseBeer = "https://brutap-server.herokuapp.com/api/browseBeer" draftMenu = "https://brutap-server.herokuapp.com/api/draftMenu"/>, document.getElementById('root'));

serviceWorker.unregister();