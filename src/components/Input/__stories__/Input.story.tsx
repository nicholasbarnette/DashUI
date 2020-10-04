import React, { useState, Fragment } from 'react';
import { Input } from '../../Input';
import { Label } from '../../Label';
import { InputValidator } from '../InputValidators';

export default {
	component: Input,
	title: 'Input',
};

export const Basic = () => {
	const [val, setVal] = useState('test');
	return (
		<Fragment>
			<Input
				value={val}
				onChange={(value) => {
					setVal(value);
				}}
			/>
			<Input
				value={val}
				onChange={(value) => {
					setVal(value);
				}}
				readOnly
			/>
			<Input
				value={val}
				onChange={(value) => {
					setVal(value);
				}}
				disabled
			/>
		</Fragment>
	);
};

export const withPlaceholder = () => {
	const [val, setVal] = useState('');
	return (
		<Input
			placeholder="email"
			value={val}
			onChange={(value) => {
				setVal(value);
			}}
		/>
	);
};

export const types = () => {
	const [val1, setVal1] = useState('email');
	const [val2, setVal2] = useState('password');
	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<Input
				placeholder="text"
				type="text"
				value={val1}
				onChange={(value) => {
					setVal1(value);
				}}
			/>
			<Input
				placeholder="password"
				type="password"
				value={val2}
				onChange={(value) => {
					setVal2(value);
				}}
			/>
		</div>
	);
};

export const withAccessibility = () => {
	const [val, setVal] = useState('');
	return (
		<div>
			<Label id="email">Email:</Label>
			<Input
				id="email"
				name="email"
				placeholder="Email"
				value={val}
				onChange={(value) => {
					setVal(value);
				}}
			/>
		</div>
	);
};

export const withValidation = () => {
	const [val, setVal] = useState('');
	const [invalidValue, setInvalidValue] = useState(false);
	return (
		<div>
			<Label id="email">Email:</Label>
			<Input
				id="email"
				name="email"
				placeholder="Email"
				invalid={invalidValue}
				value={val}
				onChange={(value) => {
					setInvalidValue(!InputValidator('email')(value));
					setVal(value);
				}}
			/>
		</div>
	);
};
