import React from 'react';
import { cleanup, render } from '@testing-library/react';
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
});
