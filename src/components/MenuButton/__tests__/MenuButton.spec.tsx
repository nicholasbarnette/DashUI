import React from 'react';
import { cleanup, render } from '@testing-library/react';
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

	it('renders menu', () => {
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
		expect(getByRole('menu')).toBeTruthy();
	});

	it('renders menu items', () => {
		const { getAllByText } = render(
			<MenuButton
				tooltip="Menu Button"
				items={[
					{ id: 'item1', type: 'text', value: 'Item' },
					{ id: 'item2', type: 'text', value: 'Item' },
					{ id: 'item3', type: 'text', value: 'Item' },
				]}
				onPress={() => {}}
			>
				Menu Button
			</MenuButton>,
		);
		expect(getAllByText('Item').length).toBe(3);
	});
});
