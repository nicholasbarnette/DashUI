import React from 'react';
import { cleanup, render, fireEvent, findByText } from '@testing-library/react';
import { MenuButton } from '..';

afterEach(cleanup);

describe('basic menu button', () => {
	it('renders', () => {
		const { getByText } = render(
			<MenuButton
				tooltip="Menu Button"
				items={[
					{ id: 'item1', type: 'text', value: 'Item 1' },
					{ id: 'item2', type: 'text', value: 'Item 2' },
					{ id: 'item3', type: 'text', value: 'Item 3' },
				]}
				onPress={() => {}}
			>
				Menu Button
			</MenuButton>,
		);
		expect(getByText('Menu Button')).toBeTruthy();
	});

	it('renders dropdown arrow', () => {
		const { getByRole } = render(
			<MenuButton
				tooltip="Menu Button"
				items={[
					{ id: 'item1', type: 'text', value: 'Item 1' },
					{ id: 'item2', type: 'text', value: 'Item 2' },
					{ id: 'item3', type: 'text', value: 'Item 3' },
				]}
				onPress={() => {}}
			>
				Menu Button
			</MenuButton>,
		);
		expect(getByRole('img')).toBeTruthy();
	});

	it('hides dropdown arrow', () => {
		const { findByRole } = render(
			<MenuButton
				tooltip="Menu Button"
				items={[
					{ id: 'item1', type: 'text', value: 'Item 1' },
					{ id: 'item2', type: 'text', value: 'Item 2' },
					{ id: 'item3', type: 'text', value: 'Item 3' },
				]}
				onPress={() => {}}
				hideDropdownArrow
			>
				Menu Button
			</MenuButton>,
		);
		expect(() => findByRole('img')).rejects;
	});

	it('renders menu on click', () => {
		const { getByRole, getByText } = render(
			<MenuButton
				tooltip="Menu Button"
				items={[
					{ id: 'item1', type: 'text', value: 'Item 1' },
					{ id: 'item2', type: 'text', value: 'Item 2' },
					{ id: 'item3', type: 'text', value: 'Item 3' },
				]}
				onPress={() => {}}
			>
				Menu Button
			</MenuButton>,
		);
		fireEvent.click(getByText('Menu Button'));
		expect(getByRole('menu')).toBeTruthy();
		expect(document.activeElement).toBe(getByText('Item 1'));
	});

	it('renders menu on press enter', () => {
		const { getByRole, getByText } = render(
			<MenuButton
				tooltip="Menu Button"
				items={[
					{ id: 'item1', type: 'text', value: 'Item 1' },
					{ id: 'item2', type: 'text', value: 'Item 2' },
					{ id: 'item3', type: 'text', value: 'Item 3' },
				]}
				onPress={() => {}}
			>
				Menu Button
			</MenuButton>,
		);
		fireEvent.keyPress(getByText('Menu Button'), {
			key: 'Enter',
			code: 13,
			charCode: 13,
		});
		expect(getByRole('menu')).toBeTruthy();
		expect(document.activeElement).toBe(getByText('Item 1'));
	});

	it('renders menu on press space', () => {
		const { getByRole, getByText } = render(
			<MenuButton
				tooltip="Menu Button"
				items={[
					{ id: 'item1', type: 'text', value: 'Item 1' },
					{ id: 'item2', type: 'text', value: 'Item 2' },
					{ id: 'item3', type: 'text', value: 'Item 3' },
				]}
				onPress={() => {}}
			>
				Menu Button
			</MenuButton>,
		);
		fireEvent.keyPress(getByText('Menu Button'), {
			key: 'Space',
			code: 32,
			charCode: 32,
		});
		expect(getByRole('menu')).toBeTruthy();
		expect(document.activeElement).toBe(getByText('Item 1'));
	});

	it('renders menu items', () => {
		const { getAllByText, getByText } = render(
			<MenuButton
				tooltip="Menu Button"
				items={[
					{ id: 'item1', type: 'text', value: 'Item 1' },
					{ id: 'item2', type: 'text', value: 'Item 2' },
					{ id: 'item3', type: 'text', value: 'Item 3' },
				]}
				onPress={() => {}}
			>
				Menu Button
			</MenuButton>,
		);
		fireEvent.click(getByText('Menu Button'));
		expect(getAllByText(/Item/).length).toBe(3);
	});

	it('handles click', () => {
		const handleClick = jest.fn();
		const { getByText } = render(
			<MenuButton
				tooltip="Menu Button"
				items={[
					{ id: 'item1', type: 'text', value: 'Item 1' },
					{ id: 'item2', type: 'text', value: 'Item 2' },
					{ id: 'item3', type: 'text', value: 'Item 3' },
				]}
				onPress={handleClick}
			>
				Menu Button
			</MenuButton>,
		);
		fireEvent.click(getByText('Menu Button'));
		fireEvent.click(getByText('Item 1'));
		expect(handleClick).toHaveBeenCalled();
	});

	it('handles press', () => {
		const handlePress = jest.fn();
		const { getByText } = render(
			<MenuButton
				tooltip="Menu Button"
				items={[
					{ id: 'item1', type: 'text', value: 'Item 1' },
					{ id: 'item2', type: 'text', value: 'Item 2' },
					{ id: 'item3', type: 'text', value: 'Item 3' },
				]}
				onPress={handlePress}
			>
				Menu Button
			</MenuButton>,
		);
		fireEvent.click(getByText('Menu Button'));
		fireEvent.keyPress(getByText('Item 1'), {
			key: 'Enter',
			code: 13,
			charCode: 13,
		});
		fireEvent.click(getByText('Menu Button'));
		fireEvent.keyPress(getByText('Item 1'), {
			key: 'Space',
			code: 32,
			charCode: 32,
		});
		expect(handlePress.mock.calls.length).toBe(2);
	});

	it('escape closes menu', () => {
		const { getByText, getByRole, findByText } = render(
			<MenuButton
				tooltip="Menu Button"
				items={[
					{ id: 'item1', type: 'text', value: 'Item 1' },
					{ id: 'item2', type: 'text', value: 'Item 2' },
					{ id: 'item3', type: 'text', value: 'Item 3' },
				]}
				onPress={() => {}}
			>
				Menu Button
			</MenuButton>,
		);
		fireEvent.click(getByText('Menu Button'));
		fireEvent.keyPress(getByRole('menu'), {
			key: 'Escape',
			code: 27,
			charCode: 27,
		});
		expect(() => findByText('Item 1')).rejects;
	});

	it('handles click', () => {
		const { getByText } = render(
			<MenuButton
				tooltip="Menu Button"
				items={[
					{ id: 'item1', type: 'text', value: 'Item 1' },
					{ id: 'item2', type: 'text', value: 'Item 2' },
					{ id: 'item3', type: 'text', value: 'Item 3' },
				]}
				onPress={() => {}}
			>
				Menu Button
			</MenuButton>,
		);
		fireEvent.click(getByText('Menu Button'));
		fireEvent.click(window);
	});
});
