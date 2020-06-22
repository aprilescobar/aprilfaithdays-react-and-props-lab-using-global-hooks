import React from 'react';
import ReactDOM from 'react-dom';
import Store from './components/Store'
import App from './components/App';
import './fetch-setup';

const Index = () => (
    <Store>
        <App />
    </Store>
);

ReactDOM.render(<Index />, document.getElementById('root'));
