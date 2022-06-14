import React, { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { getRedirectResult } from 'firebase/auth';
import { createUserDocumentFromAuth, signInWithGooglePopup, auth } from '../../utils/firebase/firebase';
import FormInput from '../../components/FormInput/FormInput';
import Button from '../Button/Button';
import './SignIn.scss';
import { useDispatch } from 'react-redux';
import { emailSignInStart } from '../../store/user/user.action';

import { BUTTON_TYPE_CLASSES } from '../Button/Button';
const defaultFormFields = {
	email: '',
	password: '',
};
const SignIn = () => {
	const dispatch = useDispatch();
	const logGoogleUser = async () => {
		await signInWithGooglePopup();
		// await createUserDocumentFromAuth(response.user);
	};
	// const logGoogleRedirectUser = async () => {
	// 	const response = await signInWithGoogleRedirect();
	// 	//we wont see a console.log becase google will redirect without thinking about our app state
	// 	//so this logGoogleRedirectUser will not be trigger when this happens
	// 	console.log(response.user);
	// 	// await createUserDocumentFromAuth(response.user);
	// };

	async function redirectResultFromGoogle() {
		//auth will track of all the authentication regardless where our app is going
		const result = await getRedirectResult(auth);

		if (result) {
			await createUserDocumentFromAuth(result.user);
		}
	}
	useEffect(() => {
		redirectResultFromGoogle();
	});
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	// const { setCurrentUser } = useContext(UserContext);
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};
	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		try {
			dispatch(emailSignInStart(email, password));
			// const response = await signInWithGoogleEmailAndPassword(email, password);
			// console.log(response);
			// setCurrentUser(user);
			resetFormFields();
		} catch (error) {
			console.log(error as Error);
		}
	};
	return (
		<div className='sign-up-container'>
			<h2>Already have an account?</h2>
			<span>Sign up with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput label='Email' type='email' onChange={handleChange} name='email' value={email} />
				<FormInput label='Password' type='password' onChange={handleChange} name='password' value={password} />

				<div className='buttons-container'>
					{/* <button onClick={logGoogleUser}>SignIn with google</button> */}

					{/* <Button buttonType='google' onClick={signInWithGoogleRedirect}>
				SignIn with google redirect
			</Button> */}
					{/* <button onClick={signInWithGoogleRedirect}>SignIn with google redirect</button> */}
					<Button type='submit' buttonType={BUTTON_TYPE_CLASSES.base}>
						Sign In
					</Button>
				</div>
			</form>
			<Button buttonType={BUTTON_TYPE_CLASSES.google} onClick={logGoogleUser}>
				SignIn with google
			</Button>
		</div>
	);
};

export default SignIn;
