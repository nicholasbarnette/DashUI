import React, { FC, useState } from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import { List, ListItem } from '..';
import { ListProps } from '../List';

afterEach(cleanup);

const ExpandingList: FC<ListProps & { total: number; increase: number }> = (
	props,
) => {
	const { total, increase, ...restProps } = props;
	const [n, setN] = useState(2);

	return (
		<List
			increaseDisplay={() => setN(n + increase)}
			{...restProps}
			items={(() => {
				const items: ListItem[] = [];
				for (let i = 0; i < total; i++) {
					items.push({ text: `List Item ${i}` });
				}
				return items;
			})()}
			display={n}
		/>
	);
};

describe('basic list', () => {
	it('renders', () => {
		const { getAllByText } = render(
			<List items={[{ text: 'List Item' }, { text: 'List Item' }]} />,
		);
		expect(getAllByText('List Item')).toBeTruthy();
	});

	it('renders all items', () => {
		const { getAllByText } = render(
			<List items={[{ text: 'List Item' }, { text: 'List Item' }]} />,
		);
		expect(getAllByText('List Item').length).toBe(2);
	});

	it('handles clicking list item', () => {
		const handleClick = jest.fn();
		const { getByText } = render(
			<List
				items={[{ text: 'List Item 1' }, { text: 'List Item 2' }]}
				onPress={handleClick}
			/>,
		);
		fireEvent.click(getByText('List Item 1'));
		expect(handleClick).toHaveBeenCalled();
	});

	it('handles clicking show more', () => {
		const handleClick = jest.fn();
		const { getByText } = render(
			<ExpandingList
				display={2}
				items={[]}
				total={6}
				increase={0}
				increaseDisplay={handleClick}
			/>,
		);
		fireEvent.click(getByText('Show More...'));
		expect(handleClick).toHaveBeenCalled();
	});

	it('handles pressing show more', () => {
		const handlePress = jest.fn();
		const { getByText } = render(
			<ExpandingList
				display={2}
				items={[]}
				total={6}
				increase={0}
				increaseDisplay={handlePress}
			/>,
		);
		fireEvent.keyPress(getByText('Show More...'), {
			key: 'Enter',
			code: 13,
			charCode: 13,
		});
		fireEvent.keyPress(getByText('Show More...'), {
			key: 'Space',
			code: 32,
			charCode: 32,
		});
		expect(handlePress.mock.calls.length).toBe(2);
	});

	it("displays 'n' at a time", () => {
		const { getAllByText, getByText } = render(
			<ExpandingList display={2} items={[]} total={6} increase={0} />,
		);
		expect(getAllByText(/List Item/).length).toBe(2);
		expect(getByText('Show More...')).toBeTruthy();
	});

	it('displays more when press show more', () => {
		const { getAllByText, getByText, findByText } = render(
			<ExpandingList display={2} items={[]} total={6} increase={3} />,
		);
		expect(getAllByText(/List Item/).length).toBe(2);
		expect(getByText('Show More...')).toBeTruthy();
		fireEvent.click(getByText('Show More...'));
		expect(getAllByText(/List Item/).length).toBe(5);
		expect(getByText('Show More...')).toBeTruthy();
		fireEvent.keyPress(getByText('Show More...'), {
			key: 'Enter',
			code: 13,
			charCode: 13,
		});
		expect(getAllByText(/List Item/).length).toBe(6);
		expect(() => findByText('Show More...')).rejects;
	});
});
