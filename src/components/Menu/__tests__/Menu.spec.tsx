import React, { useState, FC } from 'react';
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
				isOpen={true}
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
				isOpen={true}
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
				isOpen={true}
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
				isOpen={true}
			></Menu>,
		);
		expect(getAllByText('Item').length).toBe(3);
	});

	it('renders dividers', () => {
		const { getAllByRole } = render(
			<Menu
				items={[
					{ id: 'item1', type: 'text', value: 'Item 1' },
					{ id: 'item2', type: 'text', value: 'Item 2' },
					{ type: 'divider' },
					{ id: 'item3', type: 'text', value: 'Item 3' },
					{ type: 'divider' },
					{ id: 'item4', type: 'text', value: 'Item 4' },
				]}
				isOpen={true}
			></Menu>,
		);
		expect(getAllByRole('separator').length).toBe(2);
	});

	it('sets first item as focused', () => {
		const { getByText } = render(
			<Menu
				items={[
					{ id: 'item1', type: 'text', value: 'Item 1' },
					{ id: 'item2', type: 'text', value: 'Item 2' },
				]}
				isOpen={true}
			></Menu>,
		);
		expect(document.activeElement).toBe(getByText('Item 1'));
	});

	it('focus moves around with tab', () => {
		const { getByText } = render(
			<Menu
				items={[
					{ id: 'item1', type: 'text', value: 'Item 1' },
					{ id: 'item2', type: 'text', value: 'Item 2' },
				]}
				isOpen={true}
			></Menu>,
		);
		expect(document.activeElement).toBe(getByText('Item 1'));
		fireEvent.keyDown(getByText('Item 1'), {
			key: 'Tab',
			code: 'Tab',
			keyCode: 9,
			charCode: 9,
		});
		expect(document.activeElement).toBe(getByText('Item 2'));
		fireEvent.keyDown(getByText('Item 2'), {
			key: 'Tab',
			code: 'Tab',
			keyCode: 9,
			charCode: 9,
			shiftKey: true,
		});
		expect(document.activeElement).toBe(getByText('Item 1'));
		fireEvent.keyDown(getByText('Item 1'), {
			key: 'Tab',
			code: 'Tab',
			keyCode: 9,
			charCode: 9,
			shiftKey: true,
		});
		expect(document.activeElement).toBe(getByText('Item 1'));
	});

	it('focus moves around with arrows (up/down arrow)', () => {
		const { getByText } = render(
			<Menu
				items={[
					{ id: 'item1', type: 'text', value: 'Item 1' },
					{ id: 'item2', type: 'text', value: 'Item 2' },
				]}
				isOpen={true}
			></Menu>,
		);
		expect(document.activeElement).toBe(getByText('Item 1'));
		fireEvent.keyDown(getByText('Item 1'), {
			key: 'ArrowDown',
			code: 'ArrowDown',
			keyCode: 40,
			charCode: 40,
		});
		expect(document.activeElement).toBe(getByText('Item 2'));
		fireEvent.keyDown(getByText('Item 2'), {
			key: 'ArrowDown',
			code: 'ArrowDown',
			keyCode: 40,
			charCode: 40,
		});
		expect(document.activeElement).toBe(getByText('Item 2'));
		fireEvent.keyDown(getByText('Item 2'), {
			key: 'ArrowUp',
			code: 'ArrowUp',
			keyCode: 38,
			charCode: 38,
		});
		expect(document.activeElement).toBe(getByText('Item 1'));
		fireEvent.keyDown(getByText('Item 1'), {
			key: 'ArrowUp',
			code: 'ArrowUp',
			keyCode: 38,
			charCode: 38,
		});
		expect(document.activeElement).toBe(getByText('Item 1'));
	});

	it('focus skips dividers', () => {
		const { getByText } = render(
			<Menu
				items={[
					{ id: 'item1', type: 'text', value: 'Item 1' },
					{ type: 'divider' },
					{ id: 'item2', type: 'text', value: 'Item 2' },
				]}
				isOpen={true}
			></Menu>,
		);
		expect(document.activeElement).toBe(getByText('Item 1'));
		fireEvent.keyDown(getByText('Item 1'), {
			key: 'ArrowDown',
			code: 'ArrowDown',
			keyCode: 40,
			charCode: 40,
		});
		expect(document.activeElement).toBe(getByText('Item 2'));
		fireEvent.keyDown(getByText('Item 2'), {
			key: 'ArrowUp',
			code: 'ArrowUp',
			keyCode: 38,
			charCode: 38,
		});
		expect(document.activeElement).toBe(getByText('Item 1'));
	});

	it('escape closes menu', () => {
		const CloseableMenu: FC = () => {
			const [isOpen, setIsOpen] = useState(true);
			return (
				<Menu
					items={[
						{ id: 'item1', type: 'text', value: 'Item 1' },
						{ type: 'divider' },
						{ id: 'item2', type: 'text', value: 'Item 2' },
					]}
					isOpen={isOpen}
					onClose={() => {
						setIsOpen(false);
					}}
				/>
			);
		};
		const { getByText, findByText } = render(<CloseableMenu />);
		expect(document.activeElement).toBe(getByText('Item 1'));
		fireEvent.keyDown(getByText('Item 1'), {
			key: 'Escape',
			code: 'Escape',
			keyCode: 27,
			charCode: 27,
		});
		expect(() => findByText('Item 1')).rejects;
	});
});
