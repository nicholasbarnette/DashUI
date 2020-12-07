import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { ProgressBar } from '..';

afterEach(cleanup);

describe('basic progress bar', () => {
	it('renders', () => {
		const { getByText } = render(
			<ProgressBar label="Loading..." percentage={50} />,
		);
		expect(getByText('Loading...')).toBeTruthy();
	});

	it('renders percentage', () => {
		const { getByText } = render(
			<ProgressBar label="Loading..." percentage={50} />,
		);
		expect(getByText('50%')).toBeTruthy();
	});
});
