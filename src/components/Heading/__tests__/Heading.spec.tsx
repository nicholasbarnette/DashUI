import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { Heading } from '..';

afterEach(cleanup);

describe('basic heading', () => {
	it('renders', () => {
		const { getByText } = render(
			<Heading level={1}>Basic Heading</Heading>,
		);
		expect(getByText('Basic Heading')).toBeTruthy();
	});

	it('displays tooltip', () => {
		const { getByTitle } = render(
			<Heading level={1}>Basic Heading</Heading>,
		);
		expect(getByTitle('Basic Heading')).toBeTruthy();
	});
});
