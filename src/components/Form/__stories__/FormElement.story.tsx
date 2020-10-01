import React, { useState } from 'react';
import { FormElement } from '../../Form';

export default {
	component: FormElement,
	title: 'FormElement',
};

export const Input = () => {
	const [email, setEmail] = useState('');
	return (
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
	);
};

export const Switch = () => {
	return (
		<FormElement
			id="theme"
			label="Theme:"
			element={{
				element: 'switch',
			}}
		/>
	);
};

export const TextArea = () => {
	const [comment, setComment] = useState('');
	return (
		<FormElement
			id="comment"
			label="Comment:"
			element={{
				element: 'textarea',
				props: {
					placeholder: 'Comment',
					value: comment,
					onChange: (value) => {
						setComment(value);
					},
				},
			}}
		/>
	);
};
