import { PaymentFormContainer, FormContainer } from './PaymentStyle';
import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCartTotal } from '../../store/cart/cart.selector.ts';
// import {PaymentElement} from '@stripe/react-stripe-js';
import Button from '../Button/Button';
export const Payment = (props) => {
	const stripe = useStripe();
	const elements = useElements();
	const amount = useSelector(selectCartTotal);
	const [isProcessingPayment, setIsProcessingPayment] = useState(false);

	const paymentHandler = async (e) => {
		e.preventDefault();
		if (!stripe || !elements) return;
		setIsProcessingPayment(true);
		const response = await fetch('/.netlify/functions/create-payment-intent', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ amount: amount * 100 }),
		}).then((res) => res.json());
		const clinetSecret = response.paymentIntent.client_secret;

		const paymentResult = await stripe.confirmCardPayment(clinetSecret, {
			payment_method: {
				card: elements.getElement(CardElement),
				billing_details: {
					name: 'Prabodha Jayawardena',
				},
			},
		});
		setIsProcessingPayment(false);
		if (paymentResult.error) {
			alert(paymentResult.error);
		} else {
			if (paymentResult.paymentIntent.status === 'succeeded') {
				alert('payment successful');
			}
		}
		console.log(clinetSecret);
	};

	return (
		<PaymentFormContainer>
			<FormContainer onSubmit={paymentHandler}>
				<h2>Credit card payment</h2>
				<CardElement />
				<Button disabled={isProcessingPayment} buttonType='inverted'>
					Pay now
				</Button>
			</FormContainer>
		</PaymentFormContainer>
	);
};

export default Payment;
