import React, { useState, FormEvent, MouseEvent, KeyboardEvent } from 'react';
import { Form, FormElement } from '../../Form';
import { InputValidator } from '../../Input';

export default {
	component: Form,
	title: 'Components/Form',
};

export const Basic = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	return (
		<Form>
			<FormElement
				id="email"
				label="Email:"
				element={{
					element: 'input',
					props: {
						type: 'text',
						placeholder: 'Email',
						value: email,
						onChange: (value) => {
							setEmail(value);
						},
					},
				}}
			/>
			<FormElement
				id="password"
				label="Password:"
				element={{
					element: 'input',
					props: {
						type: 'password',
						placeholder: 'Password',
						value: password,
						onChange: (value) => {
							setPassword(value);
						},
					},
				}}
			/>
			<FormElement
				id="theme"
				label="Theme:"
				element={{
					element: 'switch',
				}}
			/>
		</Form>
	);
};

export const withValidation = () => {
	const [email, setEmail] = useState('');
	const [invalidEmail, setInvalidEmail] = useState(false);
	return (
		<Form>
			<FormElement
				id="email"
				label="Email:"
				element={{
					element: 'input',
					props: {
						type: 'text',
						placeholder: 'Email',
						invalid: invalidEmail,
						value: email,
						onChange: (value) => {
							setInvalidEmail(!InputValidator('email')(value));
							setEmail(value);
						},
					},
				}}
			/>
		</Form>
	);
};

export const withCustomValidation = () => {
	const [email, setEmail] = useState('');
	const [invalidEmail, setInvalidEmail] = useState(false);
	const submitFn = (event: MouseEvent | KeyboardEvent) => {
		alert('Submitted form.');
	};
	return (
		<Form
			onSubmit={(event: MouseEvent | KeyboardEvent) => {
				!invalidEmail && submitFn(event);
			}}
		>
			<FormElement
				id="email"
				label="Email:"
				element={{
					element: 'input',
					props: {
						type: 'text',
						placeholder: 'Email',
						value: email,
						invalid: invalidEmail,
						onChange: (value) => {
							setInvalidEmail(!InputValidator('email')(value));
							setEmail(value);
						},
					},
				}}
			/>
		</Form>
	);
};
