import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { TextArea } from '..';

afterEach(cleanup);

describe('basic input', () => {
	it('renders', () => {
		const { getByDisplayValue } = render(
			<TextArea value="My Input" onChange={() => {}} />,
		);
		expect(getByDisplayValue('My Input')).toBeTruthy();
	});

	it('displays placeholder', () => {
		const { getByPlaceholderText } = render(
			<TextArea
				placeholder="Email"
				value="My Input"
				onChange={() => {}}
			/>,
		);
		expect(getByPlaceholderText('Email')).toBeTruthy();
	});
});
