import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { SVG, Instagram } from '..';

afterEach(cleanup);

describe('SVG', () => {
	it('renders', () => {
		const { getByRole } = render(
			<SVG svg={Instagram} tooltip="Instagram" />,
		);
		expect(getByRole('img')).toBeTruthy();
	});

	it('renders with tooltip', () => {
		const { getByTitle } = render(
			<SVG svg={Instagram} tooltip="Instagram" />,
		);
		expect(getByTitle('Instagram')).toBeTruthy();
	});
});
