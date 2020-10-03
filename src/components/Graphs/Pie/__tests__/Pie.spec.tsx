import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { Pie } from '..';

afterEach(cleanup);

describe('basic pie graph', () => {
	it('renders', () => {
		const { getByRole } = render(
			<Pie
				testId="pie"
				data={[100, 250]}
				radius={200}
				colors={['var(--color-graph1)', 'var(--color-graph5)']}
			></Pie>,
		);
		expect(getByRole('figure')).toBeTruthy();
	});
});
