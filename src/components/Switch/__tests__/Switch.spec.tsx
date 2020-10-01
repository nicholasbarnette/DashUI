import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import { Switch } from '..';

afterEach(cleanup);

describe('basic switch', () => {
	it('renders', () => {
		const { getByRole } = render(<Switch />);
		expect(getByRole('switch')).toBeTruthy();
	});

	it('handles clicks', () => {
		const handleClick = jest.fn();
		const { getByRole } = render(<Switch onSwitch={handleClick} />);
		fireEvent.click(getByRole('switch'));
		expect(handleClick).toHaveBeenCalled();
	});

	it('handles key presses', () => {
		const handlePress = jest.fn();
		const { getByRole } = render(<Switch onSwitch={handlePress} />);
		fireEvent.keyPress(getByRole('switch'), {
			key: 'Enter',
			code: 13,
			charCode: 13,
		});
		fireEvent.keyPress(getByRole('switch'), {
			key: 'Space',
			code: 32,
			charCode: 32,
		});
		expect(handlePress.mock.calls.length).toBe(2);
	});

	it('renders labels', () => {
		const { getAllByText } = render(
			<Switch id="switch" labels={['label', 'label']} />,
		);
		expect(getAllByText('label').length).toBe(2);
	});
});
