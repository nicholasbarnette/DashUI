import React, { Fragment } from 'react';
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

	it('displays levels', () => {
		const { getAllByTitle } = render(
			<Fragment>
				<Heading level={1}>Basic Heading</Heading>\
				<Heading level={2}>Basic Heading</Heading>
				<Heading level={3}>Basic Heading</Heading>
				<Heading level={4}>Basic Heading</Heading>
				<Heading level={5}>Basic Heading</Heading>
				<Heading level={6}>Basic Heading</Heading>
			</Fragment>,
		);
		expect(getAllByTitle('Basic Heading').length).toBe(6);
	});
});
