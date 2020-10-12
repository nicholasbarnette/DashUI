import React, { FC, useRef } from 'react';
import { cleanup, render } from '@testing-library/react';
import { PieChart } from '../PieChart';

afterEach(cleanup);

const TestPieChart: FC = () => {
	const containerRef = useRef<HTMLDivElement>(null);

	return (
		<div style={{ maxWidth: '15rem' }} ref={containerRef}>
			<PieChart
				containerRef={containerRef}
				data={{
					total: 100,
					slices: [
						{
							title: '',
							value: 40,
							color: 'var(--color-graph1)',
						},
						{
							title: '',
							value: 40,
							color: 'var(--color-graph2)',
						},
						{
							title: '',
							value: 20,
							color: 'var(--color-graph3)',
						},
					],
				}}
			/>
		</div>
	);
};

describe('basic pie graph', () => {
	it('renders', () => {
		const { getByRole } = render(<TestPieChart />);
		expect(getByRole('figure')).toBeTruthy();
	});
});
