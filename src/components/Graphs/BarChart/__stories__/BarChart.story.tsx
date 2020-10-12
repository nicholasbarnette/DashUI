import React, { Fragment, useRef } from 'react';
import { BarChart } from '../BarChart';

export default {
	component: BarChart,
	title: 'Components/Graph/BarChart',
};

export const Basic = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	return (
		<div style={{ display: 'flex' }}>
			<div
				ref={containerRef}
				style={{ maxWidth: '50%', flex: '1 1 50%' }}
			>
				<BarChart
					containerRef={containerRef}
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
				/>
			</div>
		</div>
	);
};

export const Sizes = () => {
	const container1Ref = useRef<HTMLDivElement>(null);
	const container2Ref = useRef<HTMLDivElement>(null);
	const container3Ref = useRef<HTMLDivElement>(null);

	return (
		<Fragment>
			<div style={{ maxWidth: '15rem' }} ref={container1Ref}>
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
					containerRef={container1Ref}
				/>
			</div>

			<div ref={container2Ref} style={{ maxWidth: '30rem' }}>
				<BarChart
					containerRef={container2Ref}
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
					size={1}
				/>
			</div>

			<div ref={container3Ref} style={{ maxWidth: '45rem' }}>
				<BarChart
					containerRef={container3Ref}
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
					size={1}
				/>
			</div>
		</Fragment>
	);
};
