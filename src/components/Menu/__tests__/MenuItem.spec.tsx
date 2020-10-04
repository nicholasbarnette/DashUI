import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import { MenuItem } from '..';

afterEach(cleanup);

describe('basic menu item', () => {
	it('renders', () => {
		const { getByText } = render(
			<MenuItem item={{ type: 'text', value: 'Item 1' }} idx={0} />,
		);
		expect(getByText('Item 1')).toBeTruthy();
	});

	it('renders accessibly', () => {
		const { getByTitle } = render(
			<MenuItem item={{ type: 'text', value: 'Item 1' }} idx={0} />,
		);
		expect(getByTitle('Item 1')).toBeTruthy();
	});

	it('renders accessibly', () => {
		const { getByTitle } = render(
			<MenuItem item={{ type: 'text', value: 'Item 1' }} idx={0} />,
		);
		expect(getByTitle('Item 1')).toBeTruthy();
	});

	it('handles clicking item', () => {
		const handleClick = jest.fn();
		const { getByText } = render(
			<MenuItem
				item={{ type: 'text', value: 'Item 1' }}
				idx={0}
				onPress={handleClick}
			/>,
		);
		fireEvent.click(getByText('Item 1'));
		expect(handleClick).toHaveBeenCalled();
	});

	it('handles pressing item', () => {
		const handlePress = jest.fn();
		const { getByText } = render(
			<MenuItem
				item={{ type: 'text', value: 'Item 1' }}
				idx={0}
				onPress={handlePress}
			/>,
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
});
