import React, { FC, useRef } from 'react';
import { cleanup, render } from '@testing-library/react';
import { BarChart } from '..';

afterEach(cleanup);

const TestBarChart: FC = () => {
	const containerRef = useRef<HTMLDivElement>(null);

	return (
		<div style={{ maxWidth: '15rem' }} ref={containerRef}>
			<BarChart
				data={{
					min: 0,
					max: 100,
					bars: [
						{
							title: 'Bar 1',
							value: 50,
							color: 'var(--color-graph1)',
						},
						{
							title: 'Bar 2',
							value: 25,
							color: 'var(--color-graph2)',
						},
						{
							title: 'Bar 3',
							value: 100,
							color: 'var(--color-graph3)',
						},
						{
							title: 'Bar 4',
							value: 75,
							color: 'var(--color-graph4)',
						},
						{
							title: 'Bar 5',
							value: 10,
							color: 'var(--color-graph5)',
						},
						{
							title: 'Bar 6',
							value: 5,
							color: 'var(--color-graph1)',
						},
					],
				}}
				title="Chart Title"
				xAxisTitle="Axis Title"
				yAxisTitle="Axis Title"
				containerRef={containerRef}
			/>
		</div>
	);
};

describe('basic bar chart', () => {
	it('renders', () => {
		const { getByRole } = render(<TestBarChart />);
		expect(getByRole('figure')).toBeTruthy();
	});
});
