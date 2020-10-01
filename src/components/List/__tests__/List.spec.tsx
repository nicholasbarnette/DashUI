import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { List } from '..';

afterEach(cleanup);

describe('basic list', () => {
	it('renders', () => {
		const { getAllByText } = render(
			<List
				testId="List"
				items={[{ text: 'List Item' }, { text: 'List Item' }]}
			/>,
		);
		expect(getAllByText('List Item')).toBeTruthy();
	});

	it('renders all items', () => {
		const { getAllByText } = render(
			<List
				testId="List"
				items={[{ text: 'List Item' }, { text: 'List Item' }]}
			/>,
		);
		expect(getAllByText('List Item').length).toBe(2);
	});
});
