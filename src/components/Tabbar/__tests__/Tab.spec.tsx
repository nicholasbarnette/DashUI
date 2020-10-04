import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import { Tab } from '../Tab';

afterEach(cleanup);

describe('basic tab', () => {
	it('renders', () => {
		const { getByText } = render(
			<Tab
				key={0}
				tab={{
					id: 0,
					title: 'Tab 1',
					content: <p>Tab 1 Content</p>,
				}}
				selected
				isFocused
				onPress={() => {}}
			/>,
		);
		expect(getByText('Tab 1')).toBeTruthy();
	});

	it('renders accessibly', () => {
		const { getByRole } = render(
			<Tab
				key={0}
				tab={{
					id: 0,
					title: 'Tab 1',
					content: <p>Tab 1 Content</p>,
				}}
				selected
				isFocused
				onPress={() => {}}
			/>,
		);
		expect(getByRole('tab')).toBeTruthy();
	});

	it('renders selected accessbility', () => {
		const { getByRole } = render(
			<Tab
				key={0}
				tab={{
					id: 0,
					title: 'Tab 1',
					content: <p>Tab 1 Content</p>,
				}}
				selected
				isFocused
				onPress={() => {}}
			/>,
		);
		expect(getByRole('tab').getAttribute('aria-selected')).toBe('true');
	});

	it('renders not selected accessbility', () => {
		const { getByRole } = render(
			<Tab
				key={0}
				tab={{
					id: 0,
					title: 'Tab 1',
					content: <p>Tab 1 Content</p>,
				}}
				selected={false}
				isFocused
				onPress={() => {}}
			/>,
		);
		expect(getByRole('tab').getAttribute('aria-selected')).toBe('false');
	});

	it('handles clicks', () => {
		const handleClick = jest.fn();
		const { getByRole } = render(
			<Tab
				key={0}
				tab={{
					id: 0,
					title: 'Tab 1',
					content: <p>Tab 1 Content</p>,
				}}
				selected={false}
				isFocused
				onPress={handleClick}
			/>,
		);
		fireEvent.click(getByRole('tab'));
		expect(handleClick).toHaveBeenCalled();
	});

	it('handles presses', () => {
		const handlePress = jest.fn();
		const { getByRole } = render(
			<Tab
				key={0}
				tab={{
					id: 0,
					title: 'Tab 1',
					content: <p>Tab 1 Content</p>,
				}}
				selected={false}
				isFocused
				onPress={handlePress}
			/>,
		);
		fireEvent.keyPress(getByRole('tab'), {
			key: 'Enter',
			code: 13,
			charCode: 13,
		});
		fireEvent.keyPress(getByRole('tab'), {
			key: 'Space',
			code: 32,
			charCode: 32,
		});
		expect(handlePress.mock.calls.length).toBe(2);
	});
});
