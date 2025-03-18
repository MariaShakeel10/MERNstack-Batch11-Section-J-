import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { ToastContainer } from 'react-toastify';
import store from './Store/store.jsx';
import { Provider } from 'react-redux'


ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store ={store}>
			<BrowserRouter>
				<App />
				<ToastContainer />
			</BrowserRouter>
			</Provider>
	</React.StrictMode>,
);
