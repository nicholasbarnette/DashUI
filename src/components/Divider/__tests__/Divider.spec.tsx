import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { Divider } from '..';

afterEach(cleanup);

describe('basic divider', () => {
	it('renders', () => {
		const { getByRole } = render(<Divider />);
		expect(getByRole('separator')).toBeTruthy();
	});
});
