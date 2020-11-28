import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import { ColorSwatch } from '../ColorSwatch';

afterEach(cleanup);

describe('basic color picker', () => {
	it('renders', () => {
		const { getByRole } = render(
			<ColorSwatch defaultColor={[0, 100, 100]} onPress={() => {}} />,
		);
		expect(getByRole('button')).toBeTruthy();
	});

	it('handles clicks', () => {
		const handleClick = jest.fn();
		const { getByRole } = render(
			<ColorSwatch defaultColor={[0, 100, 100]} onPress={handleClick} />,
		);
		fireEvent.click(getByRole('button'));
		expect(handleClick).toHaveBeenCalled();
	});

	it('handles presses', () => {
		const handlePress = jest.fn();
		const { getByRole } = render(
			<ColorSwatch defaultColor={[0, 100, 100]} onPress={handlePress} />,
		);
		fireEvent.keyPress(getByRole('button'), {
			key: 'Enter',
			code: 13,
			charCode: 13,
		});
		fireEvent.keyPress(getByRole('button'), {
			key: 'Space',
			code: 32,
			charCode: 32,
		});
		expect(handlePress.mock.calls.length).toBe(2);
	});
});
