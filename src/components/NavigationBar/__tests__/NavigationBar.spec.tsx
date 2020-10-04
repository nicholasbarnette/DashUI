import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { NavigationBar, NavigationLink } from '..';

afterEach(cleanup);

describe('basic navigation bar', () => {
	it('renders', () => {
		const { getByTestId } = render(<NavigationBar testId="nav" />);
		expect(getByTestId('nav')).toBeTruthy();
	});

	it('renders content', () => {
		const { getByText } = render(
			<NavigationBar
				left={<NavigationLink link="">Left</NavigationLink>}
				center={<NavigationLink link="">Center</NavigationLink>}
				right={<NavigationLink link="">Right</NavigationLink>}
			/>,
		);
		expect(getByText('Left')).toBeTruthy();
		expect(getByText('Center')).toBeTruthy();
		expect(getByText('Right')).toBeTruthy();
	});
});
