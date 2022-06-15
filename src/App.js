import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkUserSession } from './store/user/user.action';
import Spinner from './components/Spinner/Spinner';
//add dynamic imports its like async await

const Home = lazy(() => import('./routes/Home/Home'));
const Authentication = lazy(() => import('./routes/Authentication/Authentication'));
const Navigation = lazy(() => import('./routes/Navigation/Navigation'));
const Shop = lazy(() => import('./routes/Shop/Shop'));
const Checkout = lazy(() => import('./routes/Checkout/Checkout'));

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
		<Suspense fallback={<Spinner />}>
			<Routes>
				{/* here we are persisting the navigation and with index we match the compoentn to home */}
				<Route path='/' element={<Navigation />}>
					<Route index element={<Home />} />
					<Route path='shop/*' element={<Shop />} />
					<Route path='auth' element={<Authentication />} />
					<Route path='checkout' element={<Checkout />} />
				</Route>
			</Routes>
		</Suspense>
	);
};

export default App;
