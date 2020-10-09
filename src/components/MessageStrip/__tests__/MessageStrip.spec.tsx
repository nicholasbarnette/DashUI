import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import { MessageStrip } from '..';

afterEach(cleanup);

describe('basic message strip', () => {
	it('renders', () => {
		const { getByText } = render(
			<MessageStrip>Message strip.</MessageStrip>,
		);
		expect(getByText('Message strip.')).toBeTruthy();
	});

	it('renders status icon/close button', () => {
		const { getAllByRole } = render(
			<MessageStrip>Message strip.</MessageStrip>,
		);
		expect(getAllByRole('img').length).toBe(2);
	});

	it('hides close button', () => {
		const { getAllByRole } = render(
			<MessageStrip hideClose>Message strip.</MessageStrip>,
		);
		expect(getAllByRole('img').length).toBe(1);
	});

	it('renders variants', () => {
		const { getByText } = render(
			<div>
				<MessageStrip>Default message strip.</MessageStrip>
				<MessageStrip variant="information">
					Information message strip.
				</MessageStrip>
				<MessageStrip variant="error">
					Error message strip.
				</MessageStrip>
				<MessageStrip variant="warning">
					Warning message strip.
				</MessageStrip>
				<MessageStrip variant="success">
					Success message strip.
				</MessageStrip>
			</div>,
		);
		expect(getByText('Default message strip.')).toBeTruthy();
		expect(getByText('Information message strip.')).toBeTruthy();
		expect(getByText('Error message strip.')).toBeTruthy();
		expect(getByText('Warning message strip.')).toBeTruthy();
		expect(getByText('Success message strip.')).toBeTruthy();
	});

	it('calls onClose', () => {
		const handleClose = jest.fn();
		const { getByRole } = render(
			<MessageStrip onClose={handleClose}>Message strip.</MessageStrip>,
		);
		fireEvent.click(getByRole('button'));
		expect(handleClose).toHaveBeenCalled();
	});
});
