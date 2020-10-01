import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import { Notification } from '..';

afterEach(cleanup);

describe('basic switch', () => {
	it('renders', () => {
		const { getByRole } = render(
			<Notification>Sample Notifiaction.</Notification>,
		);
		expect(getByRole('alert')).toBeTruthy();
	});

	it('renders text', () => {
		const { getByText } = render(
			<Notification>Sample Notifiaction.</Notification>,
		);
		expect(getByText('Sample Notifiaction.')).toBeTruthy();
	});

	it('handles clicks', () => {
		const handleClick = jest.fn();
		const { getByRole } = render(
			<Notification onClose={handleClick}>
				Sample Notifiaction.
			</Notification>,
		);
		fireEvent.click(getByRole('button'));
		expect(handleClick).toHaveBeenCalled();
	});

	it('handles key presses', () => {
		const handlePress = jest.fn();
		const { getByRole } = render(
			<Notification onClose={handlePress}>
				Sample Notifiaction.
			</Notification>,
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
