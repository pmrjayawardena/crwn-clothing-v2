import Home from './routes/Home/Home.jsx';
import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/Navigation/Navigation.jsx';
import Authentication from './routes/Authentication/Authentication.jsx';
import Shop from './routes/Shop/Shop';
import Checkout from './routes/Checkout/Checkout.jsx';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkUserSession } from './store/user/user.action';
const App = () => {
	//dispatch will not change but we add it to dependance arry to go away the linting error
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(checkUserSession());

		// const unsubcribe = onAuthStateChangeListner((user) => {
		// 	// signOutUser();

		// 	if (user) {
		// 		createUserDocumentFromAuth(user);
		// 	}

		// 	dispatch(setCurrentUser(user));
		// });
		// return unsubcribe;
	}, [dispatch]);
	return (
		<Routes>
			{/* here we are persisting the navigation and with index we match the compoentn to home */}
			<Route path='/' element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path='shop/*' element={<Shop />} />
				<Route path='auth' element={<Authentication />} />
				<Route path='checkout' element={<Checkout />} />
			</Route>
		</Routes>
	);
};

export default App;
