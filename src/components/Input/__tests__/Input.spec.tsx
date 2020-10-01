import React from 'react';
import { cleanup, render } from '@testing-library/react';
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
});
