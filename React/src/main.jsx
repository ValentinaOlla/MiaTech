import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import './Index.css'
import { App } from './App.jsx'
import { Provider as ReduxProvider } from 'react-redux';
import store from './store/index.js';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <ReduxProvider store={store}>
            <App />
        </ReduxProvider>
    </BrowserRouter>
)
