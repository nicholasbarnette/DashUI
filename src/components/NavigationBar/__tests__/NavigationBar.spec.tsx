import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { NavigationBar } from '..';

afterEach(cleanup);

describe('basic navigation bar', () => {
	it('renders', () => {
		const { getByTestId } = render(<NavigationBar testId="nav" />);
		expect(getByTestId('nav')).toBeTruthy();
	});
});
