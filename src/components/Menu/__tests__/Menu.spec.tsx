import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import { Menu } from '..';

afterEach(cleanup);

describe('basic menu', () => {
	it('renders', () => {
		const { getByRole } = render(
			<Menu
				items={[
					{ id: 'item1', type: 'text', value: 'Item 1' },
					{ id: 'item2', type: 'text', value: 'Item 2' },
					{ id: 'item3', type: 'text', value: 'Item 3' },
				]}
			></Menu>,
		);
		expect(getByRole('menu')).toBeTruthy();
	});

	it('handles clicks', () => {
		const handleClick = jest.fn();
		const { getByText } = render(
			<Menu
				items={[
					{ id: 'item1', type: 'text', value: 'Item 1' },
					{ id: 'item2', type: 'text', value: 'Item 2' },
					{ id: 'item3', type: 'text', value: 'Item 3' },
				]}
				onPress={handleClick}
			></Menu>,
		);
		fireEvent.click(getByText('Item 1'));
		expect(handleClick).toHaveBeenCalled();
	});

	it('handles key presses', () => {
		const handlePress = jest.fn();
		const { getByText } = render(
			<Menu
				items={[
					{ id: 'item1', type: 'text', value: 'Item 1' },
					{ id: 'item2', type: 'text', value: 'Item 2' },
					{ id: 'item3', type: 'text', value: 'Item 3' },
				]}
				onPress={handlePress}
			></Menu>,
		);
		fireEvent.keyPress(getByText('Item 1'), {
			key: 'Enter',
			code: 13,
			charCode: 13,
		});
		fireEvent.keyPress(getByText('Item 1'), {
			key: 'Space',
			code: 32,
			charCode: 32,
		});
		expect(handlePress.mock.calls.length).toBe(2);
	});

	it('renders all items', () => {
		const { getAllByText } = render(
			<Menu
				items={[
					{ id: 'item1', type: 'text', value: 'Item' },
					{ id: 'item2', type: 'text', value: 'Item' },
					{ id: 'item3', type: 'text', value: 'Item' },
				]}
			></Menu>,
		);
		expect(getAllByText('Item').length).toBe(3);
	});

	it('renders dividers', () => {
		const { getAllByRole } = render(
			<Menu
				testId="menu"
				items={[
					{ id: 'item1', type: 'text', value: 'Item 1' },
					{ id: 'item2', type: 'text', value: 'Item 2' },
					{ type: 'divider' },
					{ id: 'item3', type: 'text', value: 'Item 3' },
					{ type: 'divider' },
					{ id: 'item4', type: 'text', value: 'Item 4' },
				]}
			></Menu>,
		);
		expect(getAllByRole('separator').length).toBe(2);
	});
});
