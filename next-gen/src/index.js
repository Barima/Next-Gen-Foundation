import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Components/Main';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
