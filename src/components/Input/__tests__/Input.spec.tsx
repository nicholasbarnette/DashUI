import React from 'react';
import {
	cleanup,
	render,
	fireEvent,
	getByDisplayValue,
} from '@testing-library/react';
import { Input } from '..';

afterEach(cleanup);

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
