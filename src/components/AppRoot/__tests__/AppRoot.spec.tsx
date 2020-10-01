import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { AppRoot } from '..';

afterEach(cleanup);

describe('basic approot', () => {
	it('renders', () => {
		const { getByTestId } = render(
			<AppRoot testId="approot">Basic AppRoot</AppRoot>,
		);
		expect(getByTestId('approot')).toBeTruthy();
	});

	it('renders conent', () => {
		const { getByText } = render(<AppRoot>Basic AppRoot</AppRoot>);
		expect(getByText('Basic AppRoot')).toBeTruthy();
	});
});
