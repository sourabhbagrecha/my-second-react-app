import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-svg-core'; 
import './index.css';
import App from './App';
const renderApp = 
<BrowserRouter basename="/my-second-react-app">
    <App/>
</BrowserRouter>;
ReactDOM.render(renderApp, document.getElementById('root'));