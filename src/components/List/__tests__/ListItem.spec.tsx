import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import { ListItem } from '..';

afterEach(cleanup);

describe('basic list item', () => {
	it('renders', () => {
		const { getByText } = render(
			<ListItem item={{ text: 'This is my text.' }} />,
		);
		expect(getByText('This is my text.')).toBeTruthy();
	});

	it('renders description', () => {
		const { getByText } = render(
			<ListItem
				item={{
					text: 'This is my text.',
					description: 'Description text.',
				}}
			/>,
		);
		expect(getByText('Description text.')).toBeTruthy();
	});

	it('renders tooltip', () => {
		const { getByTitle } = render(
			<ListItem
				item={{
					text: 'This is my text.',
					description: 'Description text.',
				}}
			/>,
		);
		expect(getByTitle('This is my text.')).toBeTruthy();
		expect(getByTitle('Description text.')).toBeTruthy();
	});

	it('handles clicking item', () => {
		const handleClick = jest.fn();
		const { getByText } = render(
			<ListItem
				item={{
					text: 'This is my text.',
					description: 'Description text.',
				}}
				onPress={handleClick}
			/>,
		);
		fireEvent.click(getByText('This is my text.'));
		expect(handleClick).toHaveBeenCalled();
	});

	it('handles pressing item', () => {
		const handlePress = jest.fn();
		const { getByText } = render(
			<ListItem
				item={{
					text: 'This is my text.',
					description: 'Description text.',
				}}
				onPress={handlePress}
			/>,
		);
		fireEvent.keyPress(getByText('This is my text.'), {
			key: 'Enter',
			code: 13,
			charCode: 13,
		});
		fireEvent.keyPress(getByText('This is my text.'), {
			key: 'Space',
			code: 32,
			charCode: 32,
		});
		expect(handlePress.mock.calls.length).toBe(2);
	});

	it("non-interactable items don't call onPress", () => {
		const handleClick = jest.fn();
		const { getByText } = render(
			<ListItem
				item={{
					text: 'This is my text.',
					description: 'Description text.',
				}}
				onPress={handleClick}
				interactable={false}
			/>,
		);
		fireEvent.click(getByText('This is my text.'));
		expect(handleClick).not.toHaveBeenCalled();
	});
});
