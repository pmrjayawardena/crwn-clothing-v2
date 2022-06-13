import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { Provider } from 'react-redux';
import { store, persistor } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { stripePromise } from './utils/stripe/stripe.util';
ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<BrowserRouter>
					{/* <UserProvider> */}
					{/* <CategoriesProvider> */}
					{/* <CartProvider> */}
					<Elements stripe={stripePromise}>
						<App />
					</Elements>
					{/* </CartProvider> */}
					{/* </CategoriesProvider> */}
					{/* </UserProvider> */}
				</BrowserRouter>
			</PersistGate>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();
