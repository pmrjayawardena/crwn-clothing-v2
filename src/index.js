import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './contexts/user.context.jsx';
import { CategoriesProvider } from './contexts/categories.context.jsx';
import { CartProvider } from './contexts/cart.context.jsx';
import { Provider } from 'react-redux';
import { store } from './store/store';
ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				{/* <UserProvider> */}
				{/* <CategoriesProvider> */}
				{/* <CartProvider> */}
				<App />
				{/* </CartProvider> */}
				{/* </CategoriesProvider> */}
				{/* </UserProvider> */}
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();
