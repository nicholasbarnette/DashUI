import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { NavigationLink } from '..';

afterEach(cleanup);

describe('basic navigation link', () => {
	it('renders', () => {
		const { getByText } = render(
			<NavigationLink link="">Link</NavigationLink>,
		);
		expect(getByText('Link')).toBeTruthy();
	});

	it('has href', () => {
		const { getByText } = render(
			<NavigationLink link="www.dashui.com">Link</NavigationLink>,
		);
		expect(getByText('Link').getAttribute('href')).toBe('www.dashui.com');
	});

	it('has tooltip', () => {
		const { getByTitle } = render(
			<NavigationLink link="www.dashui.com" tooltip="DashUI Homepage">
				Link
			</NavigationLink>,
		);
		expect(getByTitle('DashUI Homepage')).toBeTruthy();
	});
});
