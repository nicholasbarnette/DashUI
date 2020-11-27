import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { Text } from '..';

afterEach(cleanup);

describe('basic text', () => {
	it('renders', () => {
		const { getByText } = render(<Text>Basic Text</Text>);
		expect(getByText('Basic Text')).toBeTruthy();
	});

	it('displays tooltip', () => {
		const { getByTitle } = render(<Text>Basic Text</Text>);
		expect(getByTitle('Basic Text')).toBeTruthy();
	});
});
