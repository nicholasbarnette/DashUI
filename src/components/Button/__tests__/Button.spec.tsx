import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import { Button } from '..';
import { HeartFilled } from '../../SVG';

afterEach(cleanup);

describe('basic button', () => {
	it('renders', () => {
		const { getByText } = render(
			<Button tooltip="Basic Button">Basic Button</Button>,
		);
		expect(getByText('Basic Button')).toBeTruthy();
	});

	it('handles clicks', () => {
		const handleClick = jest.fn();
		const { getByText } = render(
			<Button tooltip="Basic Button" onPress={handleClick}>
				Basic Button
			</Button>,
		);
		fireEvent.click(getByText('Basic Button'));
		expect(handleClick).toHaveBeenCalled();
	});

	it('handles key presses', () => {
		const handlePress = jest.fn();
		const { getByText } = render(
			<Button tooltip="Basic Button" onPress={handlePress}>
				Basic Button
			</Button>,
		);
		fireEvent.keyPress(getByText('Basic Button'), {
			key: 'Enter',
			code: 13,
			charCode: 13,
		});
		fireEvent.keyPress(getByText('Basic Button'), {
			key: 'Space',
			code: 32,
			charCode: 32,
		});
		expect(handlePress.mock.calls.length).toBe(2);
	});

	it('displays tooltip', () => {
		const { getByTitle } = render(
			<Button tooltip="Hello, World!">Basic Button</Button>,
		);
		expect(getByTitle('Hello, World!')).toBeTruthy();
	});

	it('renders icon', () => {
		const { getByRole } = render(
			<Button tooltip="Hello, World!" icon={{ svg: HeartFilled }}>
				Basic Button
			</Button>,
		);
		expect(getByRole('img')).toBeTruthy();
	});
});

describe('disabled button', () => {
	it("isn't clickable", () => {
		const handleClick = jest.fn();
		const { getByText } = render(
			<Button tooltip="Basic Button" onPress={handleClick} disabled>
				Basic Button
			</Button>,
		);
		fireEvent.click(getByText('Basic Button'));
		expect(handleClick).not.toHaveBeenCalled();
	});

	it("isn't pressable", () => {
		const handlePress = jest.fn();
		const { getByText } = render(
			<Button tooltip="Basic Button" onPress={handlePress} disabled>
				Basic Button
			</Button>,
		);
		fireEvent.keyPress(getByText('Basic Button'), {
			key: 'Enter',
			code: 13,
			charCode: 13,
		});
		fireEvent.keyPress(getByText('Basic Button'), {
			key: 'Space',
			code: 32,
			charCode: 32,
		});
		expect(handlePress.mock.calls.length).toBe(0);
	});
});
