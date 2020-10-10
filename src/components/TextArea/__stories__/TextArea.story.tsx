import React, { useState } from 'react';
import { TextArea } from '../../TextArea';
import { Label } from '../../Label';
import { InputValidator } from '../../Input';

export default {
	component: TextArea,
	title: 'Components/TextArea',
};

export const Basic = () => {
	const [val, setVal] = useState('test');
	return (
		<TextArea
			value={val}
			rows={5}
			onChange={(value) => {
				setVal(value);
			}}
		/>
	);
};

export const withPlaceholder = () => {
	const [val, setVal] = useState('');
	return (
		<TextArea
			placeholder="Placeholder"
			value={val}
			onChange={(value) => {
				setVal(value);
			}}
		/>
	);
};

export const withAccessibility = () => {
	const [val, setVal] = useState('');
	return (
		<div
			style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}
		>
			<Label
				id="comment"
				style={{ alignSelf: 'flex-start', marginBlockStart: '0.25rem' }}
			>
				Comment:
			</Label>
			<TextArea
				id="comment"
				name="comment"
				placeholder="Comment"
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
		<div
			style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}
		>
			<Label
				id="email"
				style={{ alignSelf: 'flex-start', marginBlockStart: '0.25rem' }}
			>
				Email:
			</Label>
			<TextArea
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
