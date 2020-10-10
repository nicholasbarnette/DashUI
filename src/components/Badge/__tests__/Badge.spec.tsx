import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import { Badge } from '..';

afterEach(cleanup);

describe('basic badge', () => {
	it('renders', () => {
		const { getByText } = render(<Badge>Basic Badge</Badge>);
		expect(getByText('Basic Badge')).toBeTruthy();
	});

	it('renders variants', () => {
		const { getByText } = render(
			<div>
				<Badge variant="neutral">Neutral Badge</Badge>
				<Badge variant="primary">Primary Badge</Badge>
				<Badge variant="secondary">Secondary Badge</Badge>
			</div>,
		);
		expect(getByText('Neutral Badge')).toBeTruthy();
		expect(getByText('Primary Badge')).toBeTruthy();
		expect(getByText('Secondary Badge')).toBeTruthy();
	});

	it('handles clicks', () => {
		const handleClick = jest.fn();
		const { getByText } = render(
			<Badge onPress={handleClick}>Neutral Badge</Badge>,
		);
		fireEvent.click(getByText('Neutral Badge'));
		expect(handleClick).toHaveBeenCalled();
	});

	it('handles key presses', () => {
		const handlePress = jest.fn();
		const { getByText } = render(
			<Badge onPress={handlePress}>Neutral Badge</Badge>,
		);
		fireEvent.keyPress(getByText('Neutral Badge'), {
			key: 'Enter',
			code: 13,
			charCode: 13,
		});
		fireEvent.keyPress(getByText('Neutral Badge'), {
			key: 'Space',
			code: 32,
			charCode: 32,
		});
		expect(handlePress.mock.calls.length).toBe(2);
	});

	it('disabled stops clicks', () => {
		const handleClick = jest.fn();
		const { getByText } = render(
			<Badge onPress={handleClick} disabled>
				Neutral Badge
			</Badge>,
		);
		fireEvent.click(getByText('Neutral Badge'));
		expect(handleClick).not.toHaveBeenCalled();
	});
});
