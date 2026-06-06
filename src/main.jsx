import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { HashRouter } from 'react-router-dom';
import GlobalStyles from "./GlobalStyles";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HashRouter >
            <GlobalStyles />
            <App />
        </HashRouter>
    </React.StrictMode>
);