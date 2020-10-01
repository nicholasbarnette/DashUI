import React, { Fragment } from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import { Label } from '..';
import { Input } from '../../Input';

afterEach(cleanup);

describe('basic label', () => {
	it('renders', () => {
		const { getByText } = render(<Label id="basic">Basic Label</Label>);
		expect(getByText('Basic Label')).toBeTruthy();
	});

	it('properly labels something', () => {
		const { getByText } = render(
			<Fragment>
				<Label id="basic">Basic Label</Label>
				<Input id="basic" value="" onChange={() => {}} />
			</Fragment>,
		);
		expect(getByText('Basic Label')).toBeTruthy();
	});

	it('displays tooltip', () => {
		const { getByTitle } = render(<Label id="basic">Basic Label</Label>);
		expect(getByTitle('Basic Label')).toBeTruthy();
	});
});
