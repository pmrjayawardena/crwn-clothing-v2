import React, { useState, FormEvent, ChangeEvent } from 'react';
import FormInput from '../../components/FormInput/FormInput';
import Button from '../Button/Button';
import './SignUp.scss';
import { useDispatch } from 'react-redux';
import { signUpStart } from '../../store/user/user.action';
import { BUTTON_TYPE_CLASSES } from '../Button/Button';

const defaultFormFields = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: '',
};
const SignUp = () => {
	const dispatch = useDispatch();
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password, confirmPassword } = formFields;

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
		if (password !== confirmPassword) {
			alert('Passwords do not match');
			return;
		}

		try {
			dispatch(signUpStart(email, password, displayName));
			// const { user } = await createAuthUserWithEmailAndPassword(email, password);
			// // setCurrentUser(user);
			// await createUserDocumentFromAuth(user, { displayName });
			resetFormFields();
		} catch (error) {
			console.log(error as Error);
		}
	};
	return (
		<div className='sign-up-container'>
			<h2>Don't have an account?</h2>
			<span>Sign up with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput label='Display Name' required onChange={handleChange} name='displayName' value={displayName} />
				<FormInput label='Email' type='email' required onChange={handleChange} name='email' value={email} />
				<FormInput label='Password' type='password' required onChange={handleChange} name='password' value={password} />
				<FormInput label='Confirm Password' type='password' required onChange={handleChange} name='confirmPassword' value={confirmPassword} />
				<Button type='submit' buttonType={BUTTON_TYPE_CLASSES.base}>
					Sign up
				</Button>
				{/* <button type='submit'>Sign up</button> */}
			</form>
		</div>
	);
};

export default SignUp;
