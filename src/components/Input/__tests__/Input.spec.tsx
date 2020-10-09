import React, { FC, useState } from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import { Input, InputProps } from '..';

afterEach(cleanup);

const InputWithChange: FC<InputProps> = (props) => {
	const [value, setValue] = useState('');
	return (
		<Input
			{...props}
			value={value}
			onChange={(v) => {
				props.onChange?.(v);
				setValue(v);
			}}
		/>
	);
};

describe('basic input', () => {
	it('renders', () => {
		const { getByDisplayValue } = render(
			<Input value="My Input" onChange={() => {}} />,
		);
		expect(getByDisplayValue('My Input')).toBeTruthy();
	});

	it('hides password', () => {
		const { getByTestId } = render(
			<Input
				testId="input"
				type="password"
				value=""
				onChange={() => {}}
			/>,
		);
		expect(getByTestId('input').getAttribute('type')).toBe('password');
	});

	it('displays placeholder', () => {
		const { getByPlaceholderText } = render(
			<Input placeholder="Email" value="My Input" onChange={() => {}} />,
		);
		expect(getByPlaceholderText('Email')).toBeTruthy();
	});

	it('handles change', () => {
		const handleChange = jest.fn();
		const { getByDisplayValue, getByPlaceholderText } = render(
			<InputWithChange
				placeholder="Email"
				value=""
				onChange={handleChange}
			/>,
		);
		const input = getByPlaceholderText('Email');
		expect(input).toBeTruthy();
		fireEvent.focus(input);
		fireEvent.change(input, { target: { value: 'test@test.com' } });
		expect(handleChange).toHaveBeenCalled();
		expect(getByDisplayValue('test@test.com')).toBeTruthy();
	});

	it('cannot change text when readonly', () => {
		const handleChange = jest.fn();
		const { getByDisplayValue } = render(
			<Input
				placeholder="Email"
				value="My Input"
				onChange={handleChange}
				readOnly
			/>,
		);
		const input = getByDisplayValue('My Input');
		expect(input).toBeTruthy();
		fireEvent.focus(input);
		fireEvent.change(input, { target: { value: 'test@test.com' } });
		expect(handleChange).not.toHaveBeenCalled();
		expect(getByDisplayValue('My Input')).toBeTruthy();
	});

	it('cannot change text when disabled', () => {
		const handleChange = jest.fn();
		const { getByDisplayValue } = render(
			<Input
				placeholder="Email"
				value="My Input"
				onChange={handleChange}
				disabled
			/>,
		);
		const input = getByDisplayValue('My Input');
		expect(input).toBeTruthy();
		fireEvent.focus(input);
		fireEvent.change(input, { target: { value: 'test@test.com' } });
		expect(handleChange).not.toHaveBeenCalled();
		expect(getByDisplayValue('My Input')).toBeTruthy();
	});
});
