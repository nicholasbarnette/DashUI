import React, { Fragment, useRef } from 'react';
import { PieChart } from '../PieChart';

export default {
	component: PieChart,
	title: 'Components/Graph/PieChart',
};

export const Basic = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	return (
		<Fragment>
			
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
			<div style={{ maxWidth: '15rem' }} ref={containerRef}>
				<PieChart
					containerRef={containerRef}
					data={{
						total: 30,
						slices: [
							{
								title: '',
								value: 10,
								color: 'var(--color-graph1)',
							},
							{
								title: '',
								value: 10,
								color: 'var(--color-graph2)',
							},
							{
								title: '',
								value: 10,
								color: 'var(--color-graph3)',
							},
						],
					}}
				/>
			</div>
			<div style={{ maxWidth: '15rem' }} ref={containerRef}>
				<PieChart
					containerRef={containerRef}
					data={{
						total: 100,
						slices: [
							{
								title: '',
								value: 10,
								color: 'var(--color-graph1)',
							},
							{
								title: '',
								value: 10,
								color: 'var(--color-graph2)',
							},
							{
								title: '',
								value: 5,
								color: 'var(--color-graph3)',
							},
							{
								title: '',
								value: 5,
								color: 'var(--color-graph4)',
							},
							{
								title: '',
								value: 70,
								color: 'var(--color-graph5)',
							},
						],
					}}
				/>
			</div>
		</Fragment>
	);
};

export const Sizes = () => {
	const container1Ref = useRef<HTMLDivElement>(null);
	const container2Ref = useRef<HTMLDivElement>(null);
	const container3Ref = useRef<HTMLDivElement>(null);
	const container4Ref = useRef<HTMLDivElement>(null);
	return (
		<div>
			<div style={{ maxWidth: '10rem' }} ref={container1Ref}>
				<PieChart
					containerRef={container1Ref}
					data={{
						total: 100,
						slices: [
							{
								title: '',
								value: 25,
								color: 'var(--color-graph1)',
							},
							{
								title: '',
								value: 75,
								color: 'var(--color-graph2)',
							},
						],
					}}
				/>
			</div>
			<div style={{ maxWidth: '15rem' }} ref={container2Ref}>
				<PieChart
					containerRef={container2Ref}
					data={{
						total: 100,
						slices: [
							{
								title: '',
								value: 50,
								color: 'var(--color-graph1)',
							},
							{
								title: '',
								value: 50,
								color: 'var(--color-graph2)',
							},
						],
					}}
				/>
			</div>
			<div style={{ maxWidth: '20rem' }} ref={container3Ref}>
				<PieChart
					containerRef={container3Ref}
					data={{
						total: 100,
						slices: [
							{
								title: '',
								value: 30,
								color: 'var(--color-graph1)',
							},
							{
								title: '',
								value: 15,
								color: 'var(--color-graph2)',
							},
							{
								title: '',
								value: 55,
								color: 'var(--color-graph3)',
							},
						],
					}}
				/>
			</div>
			<div style={{ maxWidth: '25rem' }} ref={container4Ref}>
				<PieChart
					containerRef={container4Ref}
					data={{
						total: 110,
						slices: [
							{
								title: '',
								value: 73,
								color: 'var(--color-graph1)',
							},
							{
								title: '',
								value: 17,
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
		</div>
	);
};
